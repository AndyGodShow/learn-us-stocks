import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ArticleDifficulty = "入门" | "进阶";

export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  difficulty: ArticleDifficulty;
  readingTime: string;
  publishedAt: string;
  content: string;
};

const articlesDirectory = path.join(process.cwd(), "content", "articles");

type ArticleFrontmatter = Omit<Article, "content">;

function isArticleDifficulty(value: unknown): value is ArticleDifficulty {
  return value === "入门" || value === "进阶";
}

function readStringField(data: Record<string, unknown>, key: keyof ArticleFrontmatter): string {
  const value = data[key];

  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Article frontmatter field "${key}" must be a non-empty string.`);
  }

  return value;
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
    content,
  };
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
