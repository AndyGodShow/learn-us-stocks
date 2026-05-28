export type Master = {
  slug: string;
  name: string;
  chineseName: string;
  title: string;
  summary: string;
  category: string;
  problemStatement: string;
  philosophy: string;
  coreIdeas: string[];
  bestKnownFor: string[];
  learningValue: string;
  howToUse: string[];
  keyLessons: {
    title: string;
    explanation: string;
    example?: string;
  }[];
  teachingCase: {
    title: string;
    setup: string;
    takeaway: string;
  };
  commonMisreadings: string[];
  applicableScenarios: string[];
  limitations: string[];
  relatedArticles: string[];
  relatedBooks: string[];
  sourceNotes: {
    title: string;
    source: string;
    url?: string;
    note: string;
  }[];
};

const masters: Master[] = [
  {
    slug: "warren-buffett",
    name: "Warren Buffett",
    chineseName: "沃伦·巴菲特",
    title: "护城河、资本配置与长期复利",
    summary: "把股票看成企业所有权，用可持续现金流、管理层资本配置和合理价格来判断长期价值。",
    category: "质量价值 / 资本配置",
    problemStatement: "如何判断一家公司是不是值得长期拥有的生意，而不是只看一张会跳动的价格表。",
    philosophy:
      "巴菲特的框架把企业质量、价格、管理层和时间放在一起看。好公司不是因为故事动听，而是因为它能长期产生现金、抵御竞争，并把留存资本用在高回报的地方。",
    coreIdeas: [
      "护城河要落到经济特征：定价权、成本优势、转换成本、网络效应或监管牌照，而不是品牌名气本身。",
      "资本配置是复利的发动机：留存收益、并购、分红和回购都要比较边际回报。",
      "长期持有不是不复核，而是让真正能扩张内在价值的企业有足够时间兑现。",
      "现金流比会计利润更能检验企业是否自我造血，并支撑长期股东回报。",
      "回购只有在价格低于保守估计的内在价值、且不损害经营安全时才增加每股价值。",
    ],
    bestKnownFor: ["护城河", "资本配置", "长期复利", "回购", "现金流"],
    learningValue: "适合学习如何把公司质量、管理层行为和估值纪律放在同一个判断框架里。",
    howToUse: [
      "读美股公司时先问：这家公司未来十年靠什么维持利润率和现金流，而不是先看股价走势。",
      "分析回购时同时看自由现金流、资产负债表安全垫、回购价格和股本变化。",
      "把管理层年度信、资本开支、并购和分红政策放在一起，看他们是否像所有者一样分配资本。",
    ],
    keyLessons: [
      {
        title: "质量和价格必须同时成立",
        explanation: "好生意可以降低长期不确定性，但如果买入价格过高，未来回报仍会被估值压缩吞掉。",
        example: "同样是强品牌消费公司，若收入增长放慢而估值仍按高成长定价，长期持有也可能只是等待估值回归。",
      },
      {
        title: "回购要看每股价值",
        explanation: "回购不是天然利好。关键是公司是否用低于内在价值的价格减少股份，同时保留足够现金和经营灵活性。",
        example: "Apple 的案例适合训练：先看自由现金流和净现金，再看回购是否持续提高每股收益和每股现金流。",
      },
      {
        title: "管理层是资本配置者",
        explanation: "优秀管理层不只是运营公司，还要决定赚到的钱应该再投资、收购、分红、回购还是保留现金。",
      },
    ],
    teachingCase: {
      title: "Apple 回购与现金流的三问",
      setup:
        "假设一家成熟科技公司每年产生大量自由现金流，核心业务增长不快但生态稳定。不要先问股价会不会涨，先问：现金流是否真实，回购价格是否合理，回购后每股经济利益是否增加。",
      takeaway:
        "这个案例训练的是巴菲特式的每股价值思维：企业质量、现金流安全、回购价格和管理层纪律必须一起看。",
    },
    commonMisreadings: [
      "把长期持有理解成买入后不再复核。",
      "只记住买好公司，却忽略买入价格和机会成本。",
      "把护城河当成品牌知名度，而不是可验证的经济特征。",
      "把巴菲特买过什么当成跟单清单，而不是学习分析过程。",
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
      "Berkshire 的资金规模、保险浮存金和交易机会与普通投资者不同，不能机械复制。",
    ],
    relatedArticles: ["moat-profit-cash-flow", "buyback-shareholder-value", "free-cash-flow"],
    relatedBooks: ["《巴菲特致股东的信》", "《巴菲特之道》", "Berkshire Hathaway 年报与 Owner's Manual"],
    sourceNotes: [
      {
        title: "Berkshire Owner's Manual",
        source: "官方原始资料",
        url: "https://www.berkshirehathaway.com/ownman.pdf",
        note: "用于提炼所有者视角、长期合伙人心态、每股内在价值和资本配置原则。",
      },
      {
        title: "Berkshire Hathaway 2025 Annual Report",
        source: "官方年报",
        url: "https://www.berkshirehathaway.com/2025ar/2025ar.pdf",
        note: "用于核对回购原则、现金安全垫和管理层资本配置表述。",
      },
      {
        title: "Berkshire Hathaway 2023 Shareholder Letter",
        source: "官方股东信",
        url: "https://www.berkshirehathaway.com/letters/2023ltr.pdf",
        note: "用于理解股东沟通、企业文化和长期持有人定位。",
      },
    ],
  },
  {
    slug: "charlie-munger",
    name: "Charlie Munger",
    chineseName: "查理·芒格",
    title: "多元思维模型、能力圈与避免愚蠢",
    summary: "用跨学科模型提高判断质量，先避开明显错误，再追求少数真正重要的机会。",
    category: "决策质量 / 认知偏差",
    problemStatement: "如何减少因为激励、情绪、错配模型和过度自信造成的投资错误。",
    philosophy:
      "芒格的价值不在于几句机智表达，而在于把投资判断看成一套跨学科决策系统：先识别会让自己犯错的条件，再用多个模型交叉验证。",
    coreIdeas: [
      "多元思维模型的价值在于交叉验证，而不是堆砌概念。",
      "反过来想可以暴露失败路径：什么会让这笔投资变糟，什么会让判断失真。",
      "能力圈强调诚实识别自己能理解什么，也承认边界会随学习而变化。",
      "避免愚蠢比追求聪明更稳定，尤其是在杠杆、激励和情绪面前。",
      "激励机制常常比口头承诺更能解释管理层和市场参与者的行为。",
    ],
    bestKnownFor: ["多元思维模型", "反过来想", "能力圈", "避免愚蠢", "激励机制"],
    learningValue: "适合学习如何建立检查清单，减少认知偏差和不必要的复杂错误。",
    howToUse: [
      "每次研究前写下能力圈边界：哪些变量我能解释，哪些只是听起来熟悉。",
      "用反向清单检查失败条件：高杠杆、错误激励、会计幻觉、估值透支、竞争加剧。",
      "把心理偏差转成流程约束，例如延迟交易、记录反方证据、复盘决策而不是只复盘结果。",
    ],
    keyLessons: [
      {
        title: "反过来想是一种风控工具",
        explanation: "先问如何失败，常常比先问如何成功更容易找到真实风险。",
        example: "分析一笔热门交易时，可以先列出三条失败路径：需求不及预期、利润率下滑、估值倍数回落。",
      },
      {
        title: "能力圈不是静态标签",
        explanation: "能力圈的边界来自可解释性和可验证性。懂一个产品不等于懂行业利润结构和资本周期。",
      },
      {
        title: "激励机制优先于漂亮叙事",
        explanation: "管理层薪酬、渠道返利、销售考核和融资需求，常常会决定真实行为。",
      },
    ],
    teachingCase: {
      title: "用反向清单检查一笔 AI 概念交易",
      setup:
        "假设市场热炒一家 AI 软件公司。芒格式问题不是先问空间多大，而是先问：客户续费是否经得住验证，销售激励是否推高短期收入，资本开支是否吞噬现金流，估值是否已经反映完美未来。",
      takeaway:
        "多元模型不是玄学，它最终要落到会计、竞争、心理、激励和概率的检查清单。",
    },
    commonMisreadings: [
      "把多元模型变成名词收藏，而不用于具体判断。",
      "用能力圈为不学习找借口。",
      "只模仿芒格的表达风格，却没有建立可执行的反证流程。",
      "把避免愚蠢理解成永远保守，忽略少数高质量机会需要果断。",
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
    sourceNotes: [
      {
        title: "Poor Charlie's Almanack 官方页面",
        source: "官方出版社/项目信息",
        url: "https://www.poorcharliesalmanack.com/pca.php",
        note: "用于确认该书为芒格演讲和思想汇编的主要公开载体。",
      },
      {
        title: "USC Gould 2007 Commencement",
        source: "大学官方页面",
        url: "https://gould.usc.edu/news/usc-law-commencement-2007/",
        note: "用于确认芒格 2007 年 USC 法学院演讲背景。",
      },
      {
        title: "Berkshire Hathaway 2023 Shareholder Letter",
        source: "官方股东信",
        url: "https://www.berkshirehathaway.com/letters/2023ltr.pdf",
        note: "用于理解芒格对 Berkshire 文化和投资方法的影响，避免只做语录化呈现。",
      },
    ],
  },
  {
    slug: "benjamin-graham",
    name: "Benjamin Graham",
    chineseName: "本杰明·格雷厄姆",
    title: "安全边际、市场先生与估值纪律",
    summary: "用保守估值和安全边际保护本金，把市场波动当作报价而不是指令。",
    category: "价值投资 / 风险防御",
    problemStatement: "如何在无法精确预测未来的情况下，仍然让买入价格为错误留出缓冲。",
    philosophy:
      "格雷厄姆的核心不是寻找低市盈率股票，而是建立价格与价值的纪律：市场报价可以利用，但不能替代独立判断。",
    coreIdeas: [
      "安全边际是承认自己会错，用折扣和保守假设留下缓冲。",
      "市场先生提醒投资者区分价格波动和企业价值变化。",
      "防御型投资重视分散、资产质量和避免永久性损失。",
      "估值纪律要求先问下行风险，再问上涨空间。",
      "价值投资不是低市盈率筛选，而是价格相对价值有足够吸引力。",
    ],
    bestKnownFor: ["安全边际", "市场先生", "防御型投资", "估值纪律", "价格与价值"],
    learningValue: "适合学习估值纪律、风险优先和如何在市场情绪中保持判断独立。",
    howToUse: [
      "给任何估值结论都做保守版、基准版和乐观版，不让乐观假设决定买入理由。",
      "把市场下跌拆成两类：价格波动和价值受损，先确认是哪一种。",
      "研究低估值公司时优先排除价值陷阱：负债、衰退行业、治理问题和现金流恶化。",
    ],
    keyLessons: [
      {
        title: "便宜不是安全边际",
        explanation: "安全边际来自保守价值与价格之间的差距。若价值本身正在塌陷，低估值可能只是风险提示。",
        example: "一家市盈率很低的周期公司，如果盈利处在周期高点，真实安全边际可能并不存在。",
      },
      {
        title: "市场报价不是命令",
        explanation: "市场每天给价格，但投资者不必每天行动。纪律来自只在价格补偿风险时出手。",
      },
      {
        title: "防御型投资者要承认精力限制",
        explanation: "如果没有时间持续研究个股，就应降低复杂度，避免半懂不懂地追求高收益。",
      },
    ],
    teachingCase: {
      title: "用简化数字理解安全边际",
      setup:
        "假设你保守估算一家公司的价值是 100，但关键假设有较大误差。如果市场价格是 95，你几乎没有犯错空间；如果价格是 65，即使估值高估了 20%，仍可能保留一定缓冲。",
      takeaway:
        "安全边际不是保证赚钱，而是把估值错误、坏运气和市场情绪纳入价格纪律。",
    },
    commonMisreadings: [
      "把低估值等同于便宜，忽略业务恶化和价值陷阱。",
      "把安全边际理解成绝对不会亏损。",
      "只用账面价值筛选，而不看现代企业的无形资产和商业质量。",
      "把格雷厄姆方法当成固定公式，而不是风险控制思想。",
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
      "现代市场信息传播更快，传统烟蒂式机会更少，筛选后还要做质量判断。",
    ],
    relatedArticles: ["margin-of-safety", "mr-market", "pe-valuation-logic"],
    relatedBooks: ["《聪明的投资者》", "《证券分析》", "Benjamin Graham 相关讲义"],
    sourceNotes: [
      {
        title: "The Intelligent Investor 官方出版社页",
        source: "官方出版社页面",
        url: "https://www.harperacademic.com/book/9780060854300/the-intelligent-investor/",
        note: "用于确认价值投资、安全边际和长期策略的核心定位。",
      },
      {
        title: "Investopedia: Benjamin Graham",
        source: "权威二手资料",
        url: "https://www.investopedia.com/terms/b/bengraham.asp",
        note: "用于交叉核对格雷厄姆作为价值投资奠基者、核心概念和影响。",
      },
      {
        title: "Margin of Safety 概念资料",
        source: "概念背景资料",
        url: "https://en.wikipedia.org/wiki/Margin_of_safety_(financial)",
        note: "仅用于核对术语脉络；本站内容不复述原书章节。",
      },
    ],
  },
  {
    slug: "philip-fisher",
    name: "Philip Fisher",
    chineseName: "菲利普·费雪",
    title: "成长股、管理层与长期研究",
    summary: "关注能够长期扩大市场、持续创新并由优秀管理层经营的成长型企业。",
    category: "成长质量 / 深度调研",
    problemStatement: "如何识别能够长期再投资、持续扩大竞争优势的成长型企业。",
    philosophy:
      "费雪把研究重点从便宜资产推进到优秀企业的长期成长能力：市场空间、研发、销售组织、管理层和企业文化共同决定公司能否复利。",
    coreIdeas: [
      "成长股研究要看市场空间、研发能力、销售组织和长期利润率。",
      "管理层质量不只看口号，还要看资本使用、沟通透明度和组织执行。",
      "长期竞争优势来自产品、客户关系、研发文化和经营系统的组合。",
      "深入调研强调从客户、供应商、竞争对手等多角度验证公司叙事。",
      "优秀成长公司值得长期跟踪，但仍要警惕估值和增长放缓。",
    ],
    bestKnownFor: ["成长股", "管理层", "竞争优势", "长期研究", "调研方法"],
    learningValue: "适合学习如何从财报之外理解企业质量，尤其是管理层和增长来源。",
    howToUse: [
      "把增长拆成市场扩张、份额提升、价格提升和新产品贡献，不把收入增速当作单一答案。",
      "用供应链、客户评价、招聘方向和研发投入交叉验证管理层叙事。",
      "跟踪利润率、再投资效率和竞争格局，判断增长是否仍能创造价值。",
    ],
    keyLessons: [
      {
        title: "成长要能转化成经济价值",
        explanation: "收入增长如果依赖补贴、过度资本开支或持续稀释，未必能给股东带来价值。",
        example: "研究 NVIDIA 或 Microsoft 时，不能只看增长率，还要看生态地位、客户黏性、毛利率和再投资空间。",
      },
      {
        title: "调研是拼图，不是内幕",
        explanation: "费雪式调研强调从公开和可合规获取的信息中交叉验证，而不是寻找未公开消息。",
      },
      {
        title: "管理层质量要看压力下的动作",
        explanation: "真正的管理层质量体现在资本周期、产品失误、竞争加剧时如何取舍。",
      },
    ],
    teachingCase: {
      title: "用 Microsoft 训练成长质量判断",
      setup:
        "分析一家云和软件公司时，先拆市场空间，再看客户续费、开发者生态、利润率变化和资本开支。若增长来自高黏性产品和规模经济，质量高于单纯靠营销堆出的收入。",
      takeaway:
        "费雪框架训练的是把成长从一句故事拆成可验证的组织能力、产品能力和财务结果。",
    },
    commonMisreadings: [
      "把高增长等同于好公司，忽略利润质量和竞争格局。",
      "只听管理层故事，不做外部验证。",
      "认为好公司可以不看估值。",
      "把调研理解成寻找小道消息，而不是合规地交叉验证公开信息。",
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
      "增长失速时，原本合理的高估值会迅速变成风险源。",
    ],
    relatedArticles: ["growth-stock-risk", "management-quality", "guidance-and-stock-price"],
    relatedBooks: ["《怎样选择成长股》", "Common Stocks and Uncommon Profits", "公司年报和投资者日资料"],
    sourceNotes: [
      {
        title: "Common Stocks and Uncommon Profits 官方出版社页",
        source: "官方出版社页面",
        url: "https://www.wiley-vch.de/en/areas-interest/finance-economics-law/common-stocks-and-uncommon-profits-and-other-writings-978-0-471-44550-0",
        note: "用于确认十五点框架、成长股和保守投资相关章节结构。",
      },
      {
        title: "Morningstar: Quality investing criteria",
        source: "权威二手资料",
        url: "https://www.morningstar.com/funds/what-why-how-quality",
        note: "用于把费雪式质量研究连接到现代质量指标，如盈利能力、稳定性和财务健康。",
      },
      {
        title: "Philip Fisher 15 points secondary summaries",
        source: "二手资料交叉核对",
        url: "https://wyandanchlibrary.com/read/fisher-common-stocks",
        note: "用于交叉核对 scuttlebutt、管理层质量和增长研究要点；不搬运原文。",
      },
    ],
  },
  {
    slug: "peter-lynch",
    name: "Peter Lynch",
    chineseName: "彼得·林奇",
    title: "身边公司、公司分类与业绩驱动",
    summary: "从能理解的日常公司入手，把观察转化为财报验证和企业分类判断。",
    category: "个人研究优势 / 公司分类",
    problemStatement: "普通投资者如何把生活观察转化为可验证的公司研究，而不是停留在产品喜好。",
    philosophy:
      "林奇的核心不是看到好产品就买股票，而是从熟悉场景发现线索，再用公司分类、财务验证和估值纪律把线索变成研究。",
    coreIdeas: [
      "身边公司只是线索，不是买入理由；最终仍要回到业绩、估值和竞争力。",
      "公司分类能帮助匹配预期：稳定增长、快速增长、周期股和困境反转的判断方式不同。",
      "十倍股来自长期盈利扩张，而不是单纯讲一个诱人的故事。",
      "业绩驱动要求关注收入、利润率、门店效率、资产负债表和现金流。",
      "普通投资者的优势在于耐心观察熟悉场景，但必须补上研究纪律。",
    ],
    bestKnownFor: ["身边公司", "十倍股", "公司分类", "业绩驱动", "普通人优势"],
    learningValue: "适合学习如何从生活观察进入公司研究，并避免只凭体验下结论。",
    howToUse: [
      "把日常观察写成问题：用户增长了吗，复购强吗，价格有提升空间吗，竞争者在追赶吗。",
      "先给公司分类，再选择指标。周期股看周期位置，快速成长股看增长质量，困境反转看资产负债表。",
      "用财报验证观察：同店销售、毛利率、库存、现金流、开店速度和负债变化。",
    ],
    keyLessons: [
      {
        title: "熟悉是起点，不是结论",
        explanation: "你熟悉某个产品，只能说明你比别人更早发现研究线索，不能说明股票便宜或公司优秀。",
        example: "看到一家连锁店排队，下一步应查门店扩张、同店增长、单位经济模型和估值，而不是直接买入。",
      },
      {
        title: "分类决定问题清单",
        explanation: "慢增长、稳定增长、快速增长、周期、反转和资产型公司，对应完全不同的风险和跟踪指标。",
      },
      {
        title: "十倍股靠长期业绩，不靠标签",
        explanation: "真正的十倍股往往需要收入、利润、现金流和估值消化共同配合。",
      },
    ],
    teachingCase: {
      title: "连锁消费公司的观察到验证",
      setup:
        "假设你发现一家连锁咖啡店在多个城市扩张。林奇式研究不是停在排队体验，而是继续看单店收入、开店回本周期、毛利率、租金压力、竞品密度和估值。",
      takeaway:
        "普通人的优势在于发现线索早，但最终胜负仍由财报、竞争和价格决定。",
    },
    commonMisreadings: [
      "把喜欢某个产品等同于公司值得投资。",
      "只追求十倍股标签，忽略失败概率和估值起点。",
      "用同一套指标评价所有公司类别。",
      "把身边公司方法变成消费体验投票。",
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
      "普通投资者的信息优势在机构覆盖充分的大公司上可能很弱。",
    ],
    relatedArticles: ["start-with-familiar-companies", "tenbagger-reality", "consumer-business-basic"],
    relatedBooks: ["《彼得·林奇的成功投资》", "《战胜华尔街》", "Fidelity Magellan Fund 资料"],
    sourceNotes: [
      {
        title: "One Up On Wall Street 官方出版社页",
        source: "官方出版社页面",
        url: "https://www.simonandschuster.com/books/One-Up-On-Wall-Street/Peter-Lynch/9780743200400",
        note: "用于确认普通投资者优势和持续跟踪公司故事的核心定位。",
      },
      {
        title: "Fidelity Magellan Fund quick facts",
        source: "官方基金公司资料",
        url: "https://www.fidelity.com/myfidelity/InsideFidelity/NewsCenter/quickFacts/Magellan.html",
        note: "用于核对 Lynch 管理 Magellan 的历史背景。",
      },
      {
        title: "One Up On Wall Street secondary summaries",
        source: "二手资料交叉核对",
        url: "https://www.savvynickel.com/resources/books/one-up-on-wall-street",
        note: "用于交叉核对公司分类、十倍股和基本面验证要点；不复制书籍结构。",
      },
    ],
  },
  {
    slug: "aswath-damodaran",
    name: "Aswath Damodaran",
    chineseName: "阿斯沃斯·达摩达兰",
    title: "DCF、叙事与数字、估值不确定性",
    summary: "把商业叙事转化为可检验的估值假设，并接受估值本身带有区间和不确定性。",
    category: "估值方法 / 叙事验证",
    problemStatement: "如何把一个公司故事转化成增长、利润率、再投资和风险这些可讨论的数字假设。",
    philosophy:
      "达摩达兰的估值观不是追求一个神奇精确值，而是让每个数字背后都有商业故事，每个故事都能被数字约束。",
    coreIdeas: [
      "DCF 是把增长、利润率、再投资和风险连成一套现金流假设。",
      "叙事与数字必须互相约束：好故事要能落到收入、利润和资本需求。",
      "折现率不是装饰项，它反映风险、资本成本和现金流时间分布。",
      "估值不应追求一个精确数字，而应展示关键变量的敏感性。",
      "相对估值也需要解释倍数背后的增长、风险和盈利质量差异。",
    ],
    bestKnownFor: ["DCF", "折现率", "叙事与数字", "估值不确定性", "敏感性分析"],
    learningValue: "适合学习如何把估值从公式背诵变成假设拆解和敏感性分析。",
    howToUse: [
      "把公司故事拆成收入增长、目标利润率、再投资率、竞争期长度和风险参数。",
      "做敏感性表，不只输出一个目标价，而是观察哪些变量最影响估值。",
      "比较 DCF、PE、PS 等方法时，说明每种方法隐含了什么增长和利润假设。",
    ],
    keyLessons: [
      {
        title: "估值是显性化假设",
        explanation: "DCF 的意义不在于算出唯一答案，而在于逼你承认自己对增长、利润率和风险的看法。",
        example: "给一家高成长 SaaS 公司估值时，终局利润率从 20% 改到 30%，估值可能大幅变化，这说明结论依赖假设。",
      },
      {
        title: "故事要能落到数字",
        explanation: "如果故事说公司会改变行业，模型里就应该看到更大的市场份额、更高利润率或更长竞争优势期。",
      },
      {
        title: "不确定性不能被模型消灭",
        explanation: "越年轻、变化越快的公司，估值区间越宽。诚实展示区间比假装精确更有价值。",
      },
    ],
    teachingCase: {
      title: "简化 DCF：为什么估值不是一个点",
      setup:
        "假设一家软件公司未来收入增长、利润率和折现率各有三种可能。把这些组合成九个估值结果，你会发现所谓合理价值更像区间，而不是一个精确数字。",
      takeaway:
        "达摩达兰框架训练的是把分歧拆到变量上：到底是增长分歧、利润率分歧，还是风险定价分歧。",
    },
    commonMisreadings: [
      "把模型输出当成客观真相。",
      "为了得到想要的价格倒推假设。",
      "只做 DCF 表格，却没有解释商业叙事是否成立。",
      "认为估值不精确，所以估值没有意义。",
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
      "缺少行业理解时，估值模型会变成漂亮但脆弱的电子表格。",
    ],
    relatedArticles: ["dcf-basic-logic", "why-dcf-is-hard", "valuation-sensitivity"],
    relatedBooks: ["《投资估值》", "《Narrative and Numbers》", "Damodaran Online 课程资料"],
    sourceNotes: [
      {
        title: "NYU Stern Valuation Class",
        source: "大学官方课程页面",
        url: "https://pages.stern.nyu.edu/adamodar/New_Home_Page/equity.html",
        note: "用于确认估值课程覆盖 DCF、相对估值、私有公司估值和数据练习。",
      },
      {
        title: "Damodaran Valuation Entry Page",
        source: "官方教学资料",
        url: "https://pages.stern.nyu.edu/~adamodar/New_Home_Page/valuation/val.htm",
        note: "用于核对 DCF 输入、模型选择和估值资料结构。",
      },
      {
        title: "CFA Institute: Numbers and Narratives",
        source: "权威二手资料",
        url: "https://blogs.cfainstitute.org/blog/2014/12/10/aswath-damodaran-the-most-reliable-investment-valuations-balance-numbers-and-narratives/",
        note: "用于交叉核对叙事和数字互相约束的教学重点。",
      },
    ],
  },
  {
    slug: "howard-marks",
    name: "Howard Marks",
    chineseName: "霍华德·马克斯",
    title: "周期、风险与第二层思维",
    summary: "把风险理解为损失概率和价格过高的脆弱性，用周期位置校准进攻和防守。",
    category: "周期风险 / 市场心理",
    problemStatement: "如何在市场情绪极端时判断赔率，而不是把好公司、好资产和好投资混为一谈。",
    philosophy:
      "马克斯关注的不是预测明天涨跌，而是理解价格、心理和周期位置如何改变未来收益分布。好投资来自价格对风险的充分补偿。",
    coreIdeas: [
      "第二层思维要求进一步问：市场已经预期了什么，我的差异判断在哪里。",
      "风险不只是波动，而是永久损失、估值过高和未来路径不利的组合。",
      "周期会影响投资胜率：信贷、估值、情绪和基本面常常互相强化。",
      "逆向思考不是为了反对共识，而是为了在共识过度时寻找错价。",
      "好的投资不等于好的结果，概率思维要求区分过程和运气。",
    ],
    bestKnownFor: ["周期", "风险", "第二层思维", "逆向思考", "市场情绪"],
    learningValue: "适合学习如何把市场情绪、周期位置和风险补偿纳入投资判断。",
    howToUse: [
      "看估值时同时看情绪：市场是因为恐惧给折扣，还是因为兴奋给高价。",
      "把风险写成情景分布：基本面下滑、融资环境收紧、估值压缩分别会怎样影响结果。",
      "复盘时区分决策质量和短期结果，避免因为一次好运强化坏流程。",
    ],
    keyLessons: [
      {
        title: "好公司也可能是差投资",
        explanation: "如果价格已经反映完美未来，基本面稍有偏差就会带来很差的风险回报。",
        example: "周期高点的龙头公司可能盈利、叙事和情绪都很好，但估值和利润率同时处在高位，风险补偿反而变低。",
      },
      {
        title: "逆向不是永远反着做",
        explanation: "逆向的前提是共识过度且价格错误。单纯反对热门观点不是第二层思维。",
      },
      {
        title: "周期位置改变进攻防守",
        explanation: "当信贷宽松、估值高、风险厌恶低时，应提高要求；当恐慌过度时，机会可能开始出现。",
      },
    ],
    teachingCase: {
      title: "周期高点的风险定价",
      setup:
        "假设一家周期公司当前利润创历史新高，市盈率看起来很低。马克斯式问题是：这是否是周期峰值利润，市场是否忽视下行，信贷和资本开支是否正在鼓励新增供给。",
      takeaway:
        "风险不是屏幕上的波动率，而是价格没有补偿未来不利路径。",
    },
    commonMisreadings: [
      "把逆向思考理解成凡热门必反对。",
      "用结果好坏倒推决策质量。",
      "只谈风险厌恶，却不评估价格是否已经补偿风险。",
      "把周期判断当成精确择时工具。",
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
      "马克斯的信用和困境投资经验需要转换后才能用于普通股票研究。",
    ],
    relatedArticles: ["cyclical-stocks-basic", "post-trade-review", "portfolio-correlation-risk"],
    relatedBooks: ["《投资最重要的事》", "Oaktree 备忘录", "《掌握市场周期》"],
    sourceNotes: [
      {
        title: "Oaktree Memo: Taking the Temperature",
        source: "官方 memo",
        url: "https://www.oaktreecapital.com/insights/memo/taking-the-temperature",
        note: "用于提炼市场温度、周期和极端心理的教学框架。",
      },
      {
        title: "Oaktree Memo: Risk Revisited Again",
        source: "官方 memo",
        url: "https://www.oaktreecapital.com/insights/memo/risk-revisited-again",
        note: "用于理解风险不是简单波动，而是未来不利结果的概率和幅度。",
      },
      {
        title: "Oaktree Memo: The Best of",
        source: "官方 memo 汇编",
        url: "https://www.oaktreecapital.com/insights/memo/the-best-of",
        note: "用于交叉核对 Oaktree 对风险、周期和当前位置的核心表述。",
      },
    ],
  },
  {
    slug: "duan-yongping",
    name: "Duan Yongping",
    chineseName: "段永平",
    title: "生意模式、本分、长期与企业文化",
    summary: "强调理解生意本质、现金流和组织文化，少做不懂的事，重视长期正确性。",
    category: "商业模式 / 企业文化",
    problemStatement: "如何用朴素但严格的标准判断一家企业是不是好生意，以及自己是否真的懂。",
    philosophy:
      "段永平公开表达常用很朴素的语言：生意模式、企业文化、本分、现金流和不懂不做。本站只做框架化提炼，不把零散问答当作可复制公式。",
    coreIdeas: [
      "生意模式要回答企业如何创造价值、为何能持续赚钱、是否能抵御竞争。",
      "本分可以理解为在能力范围内做正确的事，不被短期诱惑带偏。",
      "长期不是口号，而是产品、用户、现金流和企业文化的持续一致。",
      "现金流能检验商业模式是否健康，也能减少外部融资环境变化的伤害。",
      "企业文化会影响决策质量、激励方式和遇到压力时的取舍。",
    ],
    bestKnownFor: ["生意模式", "本分", "长期", "现金流", "企业文化", "不懂不做"],
    learningValue: "适合学习如何用朴素语言拆解商业模式、组织质量和长期经营约束。",
    howToUse: [
      "研究公司时先写清楚它靠什么赚钱，现金流为什么能持续，竞争者为什么不容易抢走。",
      "把企业文化转成可观察行为：产品取舍、渠道政策、库存处理、员工激励和危机应对。",
      "明确自己的不懂清单，不把名人持仓或公开表达当成替代研究。",
    ],
    keyLessons: [
      {
        title: "好生意要能持续产生现金流",
        explanation: "如果增长需要持续烧钱、补贴或融资，商业模式还没有真正被现金流验证。",
        example: "消费电子或品牌公司要看产品力、渠道效率、库存风险、现金转换周期和用户复购，而不是只看发布会热度。",
      },
      {
        title: "本分可以落到经营约束",
        explanation: "本分不是道德口号，而是长期不做损害用户、渠道、员工和股东信任的短期动作。",
      },
      {
        title: "不懂不做是研究纪律",
        explanation: "承认不懂能避免把别人的确定性误当成自己的确定性。",
      },
    ],
    teachingCase: {
      title: "消费电子公司的好生意三问",
      setup:
        "假设一家消费电子公司销量很好。段永平式问题不是先问市场热度，而是问：产品是否真正创造用户价值，现金流是否健康，文化是否支持长期产品投入而不是短期冲量。",
      takeaway:
        "这个案例训练的是把生意模式、现金流和企业文化放在同一张图上看。",
    },
    commonMisreadings: [
      "把少数公开表达当成可直接复制的投资公式。",
      "用长期主义掩盖估值过高或基本面恶化。",
      "只看企业文化叙事，不验证现金流和竞争优势。",
      "把段永平买什么理解成自己也可以买什么。",
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
      "公开资料多来自博客、雪球问答和整理稿，语境分散，需要保守引用并人工复查。",
    ],
    relatedArticles: ["consumer-business-basic", "management-quality", "free-cash-flow"],
    relatedBooks: ["公开博客与雪球问答整理", "优秀消费公司年报", "企业文化与商业模式相关书籍"],
    sourceNotes: [
      {
        title: "段永平投资问答录（投资逻辑篇）",
        source: "公开问答整理稿",
        url: "https://xqdoc.imedao.com/17637f81f47373fece7e0033.pdf",
        note: "用于保守提炼现金流、生意模式和不懂不做；整理稿需人工复核原始上下文。",
      },
      {
        title: "段永平投资问答录（商业逻辑篇）",
        source: "公开问答整理稿",
        url: "https://xqdoc.imedao.com/174ba2bddaa1193fe87376f8.pdf",
        note: "用于交叉核对商业模式、企业文化和管理层相关表达；不做语录搬运。",
      },
      {
        title: "新浪财经《大道》节选报道",
        source: "财经媒体/出版内容介绍",
        url: "https://finance.sina.com.cn/roll/2025-11-10/doc-infwxxhr2694103.shtml",
        note: "用于确认公开整理内容的主题边界；具体语句不直接引用。",
      },
    ],
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
