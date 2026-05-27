export type ArticleDifficulty = "入门" | "进阶";

export type Article = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  difficulty: ArticleDifficulty;
  readingTime: string;
  publishedAt: string;
  content: string[];
};

export const articles: Article[] = [
  {
    slug: "what-is-stock",
    title: "什么是股票",
    category: "市场基础",
    summary: "从所有权、现金流和风险承担三个角度理解股票。",
    difficulty: "入门",
    readingTime: "6 分钟",
    publishedAt: "2026-01-05",
    content: [
      "股票代表一家公司的部分所有权。买入股票不是买入屏幕上的价格曲线，而是买入一家公司未来经营成果的一小部分索取权。",
      "股票价格短期会受情绪、流动性和消息影响，但长期更接近市场对公司未来自由现金流、成长速度和风险的折现结果。",
      "新手学习股票时，应该先问三个问题：公司如何赚钱、这门生意能否持续、当前价格是否已经反映了过高的预期。",
    ],
  },
  {
    slug: "us-market-structure",
    title: "美股市场的基本结构",
    category: "市场基础",
    summary: "理解交易所、指数、券商、做市商和监管框架的关系。",
    difficulty: "入门",
    readingTime: "8 分钟",
    publishedAt: "2026-01-12",
    content: [
      "美股市场由交易所、券商、清算机构、做市商、基金和监管机构共同组成。投资者看到的是买卖按钮，背后是一套撮合、清算和信息披露系统。",
      "纳斯达克和纽交所是常见上市地点，标普 500、纳斯达克 100 和道琼斯指数则是观察市场状态的工具，不等于市场本身。",
      "理解市场结构的意义在于分清公司价值、交易机制和指数表现。指数上涨不代表每家公司都变好，个股下跌也未必意味着基本面恶化。",
    ],
  },
  {
    slug: "read-financial-statements",
    title: "如何看懂财报",
    category: "财报分析",
    summary: "用利润表、资产负债表和现金流量表建立公司分析框架。",
    difficulty: "入门",
    readingTime: "10 分钟",
    publishedAt: "2026-01-19",
    content: [
      "财报不是会计考试，而是公司经营活动的压缩记录。利润表看赚钱能力，资产负债表看资源和负债，现金流量表看现金进出。",
      "分析财报时先看收入增长是否健康，再看毛利率和经营利润率是否稳定，最后确认利润是否能转化为自由现金流。",
      "单个季度的数字容易被一次性因素扰动。更可靠的方法是把三到五年的趋势放在一起，看业务模型是否越来越强。",
    ],
  },
  {
    slug: "pe-vs-ps",
    title: "PE 和 PS 估值的区别",
    category: "估值方法",
    summary: "区分利润估值和收入估值适用的公司类型。",
    difficulty: "进阶",
    readingTime: "7 分钟",
    publishedAt: "2026-01-26",
    content: [
      "PE 是市值除以净利润，回答的是市场愿意为一美元利润支付多少价格。它适合利润稳定、商业模式成熟的公司。",
      "PS 是市值除以收入，回答的是市场愿意为一美元收入支付多少价格。它常用于尚未稳定盈利但收入增长较快的公司。",
      "PS 不是 PE 的替代品。收入如果长期不能变成利润，高 PS 可能只是昂贵的故事；利润如果短期被周期压低，PE 又可能显得失真。",
    ],
  },
  {
    slug: "rates-and-tech-valuation",
    title: "为什么利率会影响科技股估值",
    category: "宏观与利率",
    summary: "用折现率理解成长股估值对利率变化的敏感性。",
    difficulty: "进阶",
    readingTime: "9 分钟",
    publishedAt: "2026-02-02",
    content: [
      "科技股的估值通常包含较多远期现金流预期。利率上升时，远期现金流折现到今天的价值会下降，因此成长股估值更敏感。",
      "利率还会影响资金的机会成本。当无风险收益率提高，投资者要求股票提供更高的预期回报，估值倍数往往承压。",
      "这并不意味着利率上升时所有科技公司都不值得研究。真正重要的是公司增长的确定性、现金流质量，以及估值是否已经充分消化宏观变化。",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
