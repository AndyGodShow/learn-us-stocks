export type Master = {
  slug: string;
  name: string;
  chineseName: string;
  title: string;
  summary: string;
  coreIdeas: string[];
  bestKnownFor: string[];
  learningValue: string;
  commonMisreadings: string[];
  applicableScenarios: string[];
  limitations: string[];
  relatedArticles: string[];
  relatedBooks: string[];
};

const masters: Master[] = [
  {
    slug: "warren-buffett",
    name: "Warren Buffett",
    chineseName: "沃伦·巴菲特",
    title: "护城河、资本配置与长期复利",
    summary: "把股票看成企业所有权，用可持续现金流、管理层资本配置和合理价格来判断长期价值。",
    coreIdeas: [
      "护城河不是一句口号，而是企业能否长期维持定价权、成本优势或网络效应。",
      "资本配置决定好生意的长期回报：留存收益、并购、分红和回购都要看边际回报。",
      "长期复利依赖商业质量、价格纪律和少犯大错，缺一项都会削弱结果。",
      "现金流比短期利润更能说明企业能否自我造血，并支撑股东回报。",
      "回购只有在价格低于内在价值且不伤害经营安全时才创造价值。",
    ],
    bestKnownFor: ["护城河", "资本配置", "长期复利", "回购", "现金流"],
    learningValue: "适合学习如何把公司质量、管理层行为和估值纪律放在同一个判断框架里。",
    commonMisreadings: [
      "把长期持有理解成买入后不再复核。",
      "只记住买好公司，却忽略买入价格和机会成本。",
      "把护城河当成品牌知名度，而不是可验证的经济特征。",
    ],
    applicableScenarios: [
      "评估现金流稳定、竞争优势较清晰的成熟企业。",
      "分析回购、分红、并购和留存收益是否提高股东价值。",
      "建立长期跟踪清单，而不是追逐短期题材。",
    ],
    limitations: [
      "对技术路径快速变化、商业模式尚未验证的公司不容易直接套用。",
      "长期持有框架无法替代估值敏感性分析和基本面复核。",
      "优秀企业也可能因为价格过高而带来很低的长期回报。",
    ],
    relatedArticles: ["moat-profit-cash-flow", "buyback-shareholder-value", "free-cash-flow"],
    relatedBooks: ["《巴菲特致股东的信》", "《巴菲特之道》", "Berkshire Hathaway 年报"],
  },
  {
    slug: "charlie-munger",
    name: "Charlie Munger",
    chineseName: "查理·芒格",
    title: "多元思维模型、能力圈与避免愚蠢",
    summary: "用跨学科模型提高判断质量，先避开明显错误，再追求少数真正重要的机会。",
    coreIdeas: [
      "多元思维模型的价值在于交叉验证，而不是堆砌概念。",
      "反过来想可以暴露失败路径：什么会让这笔投资变糟，什么会让判断失真。",
      "能力圈强调诚实识别自己能理解什么，也承认边界会随学习而变化。",
      "避免愚蠢比追求聪明更稳定，尤其是在杠杆、激励和情绪面前。",
      "好的判断需要把商业、心理、概率、会计和激励机制一起看。",
    ],
    bestKnownFor: ["多元思维模型", "反过来想", "能力圈", "避免愚蠢"],
    learningValue: "适合学习如何建立检查清单，减少认知偏差和不必要的复杂错误。",
    commonMisreadings: [
      "把多元模型变成名词收藏，而不用于具体判断。",
      "用能力圈为不学习找借口。",
      "只模仿芒格的表达风格，却没有建立可执行的反证流程。",
    ],
    applicableScenarios: [
      "投资前做风险清单和反向推演。",
      "比较多个行业、多个商业模式时寻找共同底层规律。",
      "识别管理层激励、会计口径和市场情绪造成的判断偏差。",
    ],
    limitations: [
      "模型越多越需要取舍，否则容易变成事后解释。",
      "跨学科判断不能替代具体行业研究和数据验证。",
      "过度强调避免错误，可能错过需要小步验证的新机会。",
    ],
    relatedArticles: ["pre-trade-checklist", "management-quality", "why-most-people-underperform-index"],
    relatedBooks: ["《穷查理宝典》", "《Poor Charlie's Almanack》", "Berkshire Hathaway 股东会问答"],
  },
  {
    slug: "benjamin-graham",
    name: "Benjamin Graham",
    chineseName: "本杰明·格雷厄姆",
    title: "安全边际、市场先生与估值纪律",
    summary: "用保守估值和安全边际保护本金，把市场波动当作报价而不是指令。",
    coreIdeas: [
      "安全边际是承认自己会错，用折扣和保守假设留下缓冲。",
      "市场先生提醒投资者区分价格波动和企业价值变化。",
      "防御型投资重视分散、资产质量和避免永久性损失。",
      "估值纪律要求先问下行风险，再问上涨空间。",
      "价值投资不是低市盈率筛选，而是价格相对价值有足够吸引力。",
    ],
    bestKnownFor: ["安全边际", "市场先生", "防御型投资", "估值纪律"],
    learningValue: "适合学习估值纪律、风险优先和如何在市场情绪中保持判断独立。",
    commonMisreadings: [
      "把低估值等同于便宜，忽略业务恶化和价值陷阱。",
      "把安全边际理解成绝对不会亏损。",
      "只用账面价值筛选，而不看现代企业的无形资产和商业质量。",
    ],
    applicableScenarios: [
      "市场恐慌、估值压缩或资产价格明显偏离基本面时。",
      "分析成熟企业、资产型企业或周期底部的风险回报。",
      "为组合建立防御性仓位和估值底线。",
    ],
    limitations: [
      "经典净资产折扣法对轻资产、软件和平台型公司解释力较弱。",
      "过度保守可能长期低配高质量成长企业。",
      "安全边际需要和商业质量、行业变化一起判断。",
    ],
    relatedArticles: ["margin-of-safety", "mr-market", "pe-valuation-logic"],
    relatedBooks: ["《聪明的投资者》", "《证券分析》", "Benjamin Graham 相关讲义"],
  },
  {
    slug: "philip-fisher",
    name: "Philip Fisher",
    chineseName: "菲利普·费雪",
    title: "成长股、管理层与长期研究",
    summary: "关注能够长期扩大市场、持续创新并由优秀管理层经营的成长型企业。",
    coreIdeas: [
      "成长股研究要看市场空间、研发能力、销售组织和长期利润率。",
      "管理层质量不只看口号，还要看资本使用、沟通透明度和组织执行。",
      "长期竞争优势来自产品、客户关系、研发文化和经营系统的组合。",
      "深入调研强调从客户、供应商、竞争对手等多角度验证公司叙事。",
      "优秀成长公司值得长期跟踪，但仍要警惕估值和增长放缓。",
    ],
    bestKnownFor: ["成长股", "管理层", "竞争优势", "长期研究"],
    learningValue: "适合学习如何从财报之外理解企业质量，尤其是管理层和增长来源。",
    commonMisreadings: [
      "把高增长等同于好公司，忽略利润质量和竞争格局。",
      "只听管理层故事，不做外部验证。",
      "认为好公司可以不看估值。",
    ],
    applicableScenarios: [
      "研究有清晰产品周期、研发投入和长期市场空间的公司。",
      "评估管理层是否能把增长转化为现金流和长期竞争力。",
      "分析行业从高速成长走向成熟时的质量分化。",
    ],
    limitations: [
      "成长假设对未来依赖更高，估值误差会被放大。",
      "调研信息容易受样本偏差和叙事偏差影响。",
      "高质量企业也可能被技术替代或竞争加剧削弱。",
    ],
    relatedArticles: ["growth-stock-risk", "management-quality", "guidance-and-stock-price"],
    relatedBooks: ["《怎样选择成长股》", "Philip Fisher 访谈与文章", "公司年报和投资者日资料"],
  },
  {
    slug: "peter-lynch",
    name: "Peter Lynch",
    chineseName: "彼得·林奇",
    title: "身边公司、公司分类与业绩驱动",
    summary: "从能理解的日常公司入手，把观察转化为财报验证和企业分类判断。",
    coreIdeas: [
      "身边公司只是线索，不是买入理由；最终仍要回到业绩、估值和竞争力。",
      "公司分类能帮助匹配预期：稳定增长、快速增长、周期股和困境反转的判断方式不同。",
      "十倍股来自长期盈利扩张，而不是单纯讲一个诱人的故事。",
      "业绩驱动要求关注收入、利润率、门店效率、资产负债表和现金流。",
      "普通投资者的优势在于耐心观察熟悉场景，但必须补上研究纪律。",
    ],
    bestKnownFor: ["身边公司", "十倍股", "公司分类", "业绩驱动"],
    learningValue: "适合学习如何从生活观察进入公司研究，并避免只凭体验下结论。",
    commonMisreadings: [
      "把喜欢某个产品等同于公司值得投资。",
      "只追求十倍股标签，忽略失败概率和估值起点。",
      "用同一套指标评价所有公司类别。",
    ],
    applicableScenarios: [
      "研究消费、零售、餐饮、软件等普通人能观察到需求变化的行业。",
      "给公司做分类，明确当前投资假设来自成长、周期还是改善。",
      "把生活观察转化成可检查的财务问题。",
    ],
    limitations: [
      "个人体验样本很窄，可能与整体市场数据相反。",
      "热门消费体验容易让估值过高。",
      "十倍股框架需要长期持有和多次复核，不能简化成找故事。",
    ],
    relatedArticles: ["start-with-familiar-companies", "tenbagger-reality", "consumer-business-basic"],
    relatedBooks: ["《彼得·林奇的成功投资》", "《战胜华尔街》", "基金经理访谈与持仓回顾"],
  },
  {
    slug: "aswath-damodaran",
    name: "Aswath Damodaran",
    chineseName: "阿斯沃斯·达摩达兰",
    title: "DCF、叙事与数字、估值不确定性",
    summary: "把商业叙事转化为可检验的估值假设，并接受估值本身带有区间和不确定性。",
    coreIdeas: [
      "DCF 是把增长、利润率、再投资和风险连成一套现金流假设。",
      "叙事与数字必须互相约束：好故事要能落到收入、利润和资本需求。",
      "折现率不是装饰项，它反映风险、资本成本和现金流时间分布。",
      "估值不应追求一个精确数字，而应展示关键变量的敏感性。",
      "相对估值也需要解释倍数背后的增长、风险和盈利质量差异。",
    ],
    bestKnownFor: ["DCF", "折现率", "叙事与数字", "估值不确定性"],
    learningValue: "适合学习如何把估值从公式背诵变成假设拆解和敏感性分析。",
    commonMisreadings: [
      "把模型输出当成客观真相。",
      "为了得到想要的价格倒推假设。",
      "只做 DCF 表格，却没有解释商业叙事是否成立。",
    ],
    applicableScenarios: [
      "分析高成长公司、亏损公司或商业模式变化中的公司。",
      "比较不同估值方法的假设差异。",
      "做增长率、利润率、折现率和终值的敏感性分析。",
    ],
    limitations: [
      "输入假设高度不确定时，模型只能帮助讨论范围，不能消除不确定性。",
      "DCF 对短期交易时点帮助有限。",
      "复杂模型容易制造精确错觉，需要保持简洁和可解释。",
    ],
    relatedArticles: ["dcf-basic-logic", "why-dcf-is-hard", "valuation-sensitivity"],
    relatedBooks: ["《投资估值》", "Aswath Damodaran 估值课程", "Damodaran Online 教学资料"],
  },
  {
    slug: "howard-marks",
    name: "Howard Marks",
    chineseName: "霍华德·马克斯",
    title: "周期、风险与第二层思维",
    summary: "把风险理解为损失概率和价格过高的脆弱性，用周期位置校准进攻和防守。",
    coreIdeas: [
      "第二层思维要求进一步问：市场已经预期了什么，我的差异判断在哪里。",
      "风险不只是波动，而是永久损失、估值过高和未来路径不利的组合。",
      "周期会影响投资胜率：信贷、估值、情绪和基本面常常互相强化。",
      "逆向思考不是为了反对共识，而是为了在共识过度时寻找错价。",
      "好的投资不等于好的结果，概率思维要求区分过程和运气。",
    ],
    bestKnownFor: ["周期", "风险", "第二层思维", "逆向思考"],
    learningValue: "适合学习如何把市场情绪、周期位置和风险补偿纳入投资判断。",
    commonMisreadings: [
      "把逆向思考理解成凡热门必反对。",
      "用结果好坏倒推决策质量。",
      "只谈风险厌恶，却不评估价格是否已经补偿风险。",
    ],
    applicableScenarios: [
      "市场极端乐观或悲观时检查赔率是否变化。",
      "分析周期股、信贷周期和估值扩张收缩。",
      "复盘投资决策时区分判断质量和短期结果。",
    ],
    limitations: [
      "周期位置通常无法精确计时，只能提高概率判断。",
      "过早逆向可能承受很长时间的压力。",
      "宏观和情绪判断需要和公司基本面结合，不能单独作为买卖依据。",
    ],
    relatedArticles: ["cyclical-stocks-basic", "post-trade-review", "portfolio-correlation-risk"],
    relatedBooks: ["《投资最重要的事》", "Oaktree 备忘录", "《掌握市场周期》"],
  },
  {
    slug: "duan-yongping",
    name: "Duan Yongping",
    chineseName: "段永平",
    title: "生意模式、本分、长期与企业文化",
    summary: "强调理解生意本质、现金流和组织文化，少做不懂的事，重视长期正确性。",
    coreIdeas: [
      "生意模式要回答企业如何创造价值、为何能持续赚钱、是否能抵御竞争。",
      "本分可以理解为在能力范围内做正确的事，不被短期诱惑带偏。",
      "长期不是口号，而是产品、用户、现金流和企业文化的持续一致。",
      "现金流能检验商业模式是否健康，也能减少外部融资环境变化的伤害。",
      "企业文化会影响决策质量、激励方式和遇到压力时的取舍。",
    ],
    bestKnownFor: ["生意模式", "本分", "长期", "现金流", "企业文化"],
    learningValue: "适合学习如何用朴素语言拆解商业模式、组织质量和长期经营约束。",
    commonMisreadings: [
      "把少数公开表达当成可直接复制的投资公式。",
      "用长期主义掩盖估值过高或基本面恶化。",
      "只看企业文化叙事，不验证现金流和竞争优势。",
    ],
    applicableScenarios: [
      "分析消费品牌、硬件生态和强产品文化公司。",
      "判断管理层是否在短期业绩和长期用户价值之间做正确取舍。",
      "建立不懂不做、少犯错的个人研究边界。",
    ],
    limitations: [
      "朴素原则需要具体数据和行业研究支撑，否则容易流于口号。",
      "企业文化难以量化，外部投资者容易误判。",
      "长期框架不能替代价格纪律和组合风险控制。",
    ],
    relatedArticles: ["consumer-business-basic", "management-quality", "free-cash-flow"],
    relatedBooks: ["公开访谈与股东交流材料", "优秀消费公司年报", "企业文化与商业模式相关书籍"],
  },
];

export function getAllMasters(): Master[] {
  return masters;
}

export function getMasterBySlug(slug: string): Master | undefined {
  return masters.find((master) => master.slug === slug);
}

export function getMasterSlugs(): string[] {
  return masters.map((master) => master.slug);
}
