import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArticleDifficulty = "入门" | "中级" | "进阶";

export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  difficulty: ArticleDifficulty;
  readingTime: string;
  publishedAt: string;
  tags: string[];
  bodyText: string;
  content: string;
};

const articlesDirectory = path.join(process.cwd(), "content", "articles");
const articleCategoryOrder = ["基础知识", "财报", "估值", "宏观", "行业", "交易复盘"];
const articleDifficultyOrder: ArticleDifficulty[] = ["入门", "中级", "进阶"];

type ArticleFrontmatter = Omit<Article, "bodyText" | "content">;

export type ArticleSearchParams = {
  query?: string;
  category?: string;
  difficulty?: string;
  tag?: string;
};

function isArticleDifficulty(value: unknown): value is ArticleDifficulty {
  return value === "入门" || value === "中级" || value === "进阶";
}

function readStringField(data: Record<string, unknown>, key: keyof ArticleFrontmatter): string {
  const value = data[key];

  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Article frontmatter field "${key}" must be a non-empty string.`);
  }

  return value;
}

function readTags(data: Record<string, unknown>): string[] {
  const value = data.tags;

  if (value === undefined) {
    return [];
  }

  if (!Array.isArray(value)) {
    throw new Error('Article frontmatter field "tags" must be an array of strings.');
  }

  return value.map((tag) => {
    if (typeof tag !== "string") {
      throw new Error('Article frontmatter field "tags" must be an array of strings.');
    }

    return tag;
  });
}

function extractBodyText(content: string): string {
  return content
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)]\([^)]*\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/^\d+\.\s+/gm, "")
    .replace(/[*_~#>-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function readArticleFile(fileName: string): Article {
  const filePath = path.join(articlesDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const frontmatter = data as Record<string, unknown>;
  const difficulty = frontmatter.difficulty;

  if (!isArticleDifficulty(difficulty)) {
    throw new Error(`Article "${fileName}" has an invalid difficulty.`);
  }

  return {
    slug: readStringField(frontmatter, "slug"),
    title: readStringField(frontmatter, "title"),
    category: readStringField(frontmatter, "category"),
    summary: readStringField(frontmatter, "summary"),
    difficulty,
    readingTime: readStringField(frontmatter, "readingTime"),
    publishedAt: readStringField(frontmatter, "publishedAt"),
    tags: readTags(frontmatter),
    bodyText: extractBodyText(content),
    content,
  };
}

function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values)).sort((left, right) => left.localeCompare(right, "zh-CN"));
}

function mergeWithPreferredOrder(preferred: string[], values: string[]): string[] {
  const extraValues = uniqueSorted(values.filter((value) => !preferred.includes(value)));

  return [...preferred, ...extraValues];
}

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(articlesDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getArticleBySlug(slug: string): Article | undefined {
  const fileName = `${slug}.mdx`;
  const filePath = path.join(articlesDirectory, fileName);

  if (!fs.existsSync(filePath)) {
    return undefined;
  }

  return readArticleFile(fileName);
}

export function getAllArticles(): Article[] {
  return getArticleSlugs()
    .map((slug) => getArticleBySlug(slug))
    .filter((article): article is Article => article !== undefined)
    .sort((left, right) => right.publishedAt.localeCompare(left.publishedAt));
}

export function getArticleCategories(): string[] {
  return mergeWithPreferredOrder(
    articleCategoryOrder,
    getAllArticles().map((article) => article.category),
  );
}

export function getArticleDifficulties(): string[] {
  return mergeWithPreferredOrder(
    articleDifficultyOrder,
    getAllArticles().map((article) => article.difficulty),
  );
}

export function getArticleTags(): string[] {
  return uniqueSorted(getAllArticles().flatMap((article) => article.tags));
}

export function searchArticles(params: ArticleSearchParams): Article[] {
  const query = params.query?.trim().toLocaleLowerCase();
  const category = params.category?.trim();
  const difficulty = params.difficulty?.trim();
  const tag = params.tag?.trim();

  return getAllArticles().filter((article) => {
    const queryMatched =
      !query ||
      [article.title, article.summary, article.category, article.bodyText, ...article.tags]
        .join(" ")
        .toLocaleLowerCase()
        .includes(query);

    return (
      queryMatched &&
      (!category || article.category === category) &&
      (!difficulty || article.difficulty === difficulty) &&
      (!tag || article.tags.includes(tag))
    );
  });
}

export function getRelatedArticles(article: Article, limit: number): Article[] {
  return getAllArticles()
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => {
      const sharedTagCount = candidate.tags.filter((tag) => article.tags.includes(tag)).length;
      const categoryScore = candidate.category === article.category ? 100 : 0;

      return {
        article: candidate,
        score: categoryScore + sharedTagCount,
      };
    })
    .filter((candidate) => candidate.score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return right.article.publishedAt.localeCompare(left.article.publishedAt);
    })
    .slice(0, limit)
    .map((candidate) => candidate.article);
}
