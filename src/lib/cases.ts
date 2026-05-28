export type CaseStudy = {
  company: string;
  ticker: string;
  industry: string;
  focus: string;
  learningTopics: string[];
  summary: string;
  businessModel: string;
  keyVariables: string[];
  analysisPath: string[];
  commonMisreadings: string[];
  risks: string[];
  relatedArticles: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    company: "NVIDIA",
    ticker: "NVDA",
    industry: "半导体与 AI 基础设施",
    focus: "AI 算力需求如何穿透到收入、毛利率和估值溢价。",
    learningTopics: ["AI 算力", "GPU 需求", "毛利率", "周期风险"],
    summary:
      "这个案例训练的是把热门主题拆成真实订单、供应瓶颈、利润率和资本开支周期，而不是把 AI 热度直接当成企业价值。",
    businessModel:
      "NVIDIA 主要向云厂商、服务器厂商、企业和生态伙伴销售 GPU、网络、软件栈和数据中心相关平台，客户付钱购买算力能力，NVIDIA 从芯片、系统和生态锁定中获得收入。",
    keyVariables: ["数据中心收入结构", "GPU 供需", "毛利率", "客户资本开支", "库存和交付周期", "生态粘性"],
    analysisPath: [
      "云厂商和企业提高 AI 资本开支，订单先反映在 GPU 和网络需求上。",
      "供给紧张或产品稀缺会改善收入增速和毛利率，但供给扩张后需要重新检查议价能力。",
      "市场给予估值溢价时，本质是在为未来算力需求、利润率和生态持续性付钱。",
      "如果客户资本开支放缓、库存上升或替代方案成熟，估值溢价可能被重新审视。",
    ],
    commonMisreadings: [
      "把 AI 应用热度等同于 GPU 厂商利润无限增长。",
      "只看高毛利率，不看客户集中度、供给扩张和资本开支周期。",
      "把短期供不应求外推成永久定价权。",
    ],
    risks: ["大型客户削减资本开支", "芯片供给和库存周期反转", "竞争或自研芯片替代", "出口管制和供应链限制"],
    relatedArticles: ["ai-compute-value-chain", "semiconductor-industry-basic", "growth-stock-risk"],
  },
  {
    company: "Micron",
    ticker: "MU",
    industry: "存储芯片",
    focus: "存储周期、库存、价格弹性和周期股估值失真。",
    learningTopics: ["存储周期", "供需", "库存", "周期股估值"],
    summary:
      "这个案例训练的是跨周期看利润，而不是用某一年的 PE 判断公司便宜或昂贵。",
    businessModel:
      "Micron 销售 DRAM、NAND 等存储产品，客户包括数据中心、PC、手机、汽车和工业设备厂商。客户为存储容量和性能付费，公司收入受出货量和价格共同驱动。",
    keyVariables: ["DRAM 和 NAND 价格", "客户库存", "供给扩张", "产能利用率", "资本开支", "跨周期毛利率"],
    analysisPath: [
      "终端需求改善会先消化客户库存，再带动订单和价格修复。",
      "价格上涨会放大利润率，因为固定成本和折旧在短期内不随价格同步变化。",
      "利润处于周期高点时 PE 可能很低，处于底部时 PE 可能很高甚至失效。",
      "估值要看正常化利润、资产负债表压力和下一轮供需位置。",
    ],
    commonMisreadings: [
      "把低 PE 直接理解成便宜，忽略利润可能处在周期高点。",
      "把周期底部亏损理解成公司永久失去价值。",
      "用普通成长股估值框架分析强周期存储公司。",
    ],
    risks: ["客户去库存时间超预期", "行业同步扩产导致供给过剩", "价格修复不及预期", "高资本开支压低自由现金流"],
    relatedArticles: ["cyclical-stocks-basic", "semiconductor-industry-basic", "pe-valuation-logic"],
  },
  {
    company: "Apple",
    ticker: "AAPL",
    industry: "消费电子与服务",
    focus: "成熟公司的自由现金流、生态留存、回购和资本配置。",
    learningTopics: ["自由现金流", "回购", "生态", "成熟公司估值"],
    summary:
      "这个案例训练的是成熟公司如何用现金流和资本配置支撑每股价值，而不是只看收入增长率。",
    businessModel:
      "Apple 通过硬件、服务、配件和生态留存赚钱。消费者、开发者和服务订阅用户付费，硬件装机量和生态粘性为服务收入、回购和长期现金流提供基础。",
    keyVariables: ["自由现金流", "服务收入占比", "硬件换机周期", "毛利率", "回购价格和股本变化", "研发和生态投入"],
    analysisPath: [
      "成熟硬件增长放缓时，市场会更关注用户留存、服务收入和现金转化能力。",
      "稳定自由现金流为回购、分红和研发提供资金来源。",
      "回购减少股本后，每股利润和每股现金流可能改善，但前提是价格和机会成本合理。",
      "估值变化取决于市场是否相信现金流质量、生态粘性和资本配置仍然稳健。",
    ],
    commonMisreadings: [
      "只要看到回购就认为对股东有利。",
      "只看利润，不看自由现金流和资本开支需求。",
      "用高成长公司的收入增速要求成熟公司，忽略每股价值路径。",
    ],
    risks: ["硬件创新放缓", "服务监管压力", "高价回购降低资本配置效率", "供应链和地缘风险"],
    relatedArticles: ["buyback-shareholder-value", "free-cash-flow", "management-quality"],
  },
  {
    company: "Tesla",
    ticker: "TSLA",
    industry: "电动车、能源与自动化叙事",
    focus: "成长股估值分歧、毛利率、竞争格局和叙事兑现。",
    learningTopics: ["成长股预期", "估值分歧", "毛利率", "竞争格局"],
    summary:
      "这个案例训练的是区分商业叙事和财务验证：市场可以交易多个未来想象，但长期仍要回到收入、利润率和现金流。",
    businessModel:
      "Tesla 主要通过汽车销售、软件和服务、能源相关业务获得收入。消费者、企业和能源客户付费，不同业务的毛利率、资本强度和竞争结构差异很大。",
    keyVariables: ["交付量", "汽车毛利率", "价格策略", "产能利用率", "软件和服务兑现", "竞争格局"],
    analysisPath: [
      "降价可能带来销量，也可能压低毛利率，需要同时看量和利。",
      "自动驾驶、能源和机器人等叙事会进入估值，但必须逐步转化为可验证收入和利润。",
      "如果市场为多个远期业务支付溢价，任何兑现放缓都会影响估值假设。",
      "竞争加剧会通过价格、市场份额和利润率传导到财报。",
    ],
    commonMisreadings: [
      "把产品热度直接等同于股东回报。",
      "只看交付量增长，不看毛利率和资本开支。",
      "把尚未验证的新业务叙事当成已经发生的利润。",
    ],
    risks: ["电动车竞争加剧", "价格战压缩毛利率", "新业务商业化慢于预期", "制造和监管风险"],
    relatedArticles: ["growth-stock-risk", "ps-valuation-logic", "guidance-and-stock-price"],
  },
  {
    company: "Microsoft",
    ticker: "MSFT",
    industry: "云计算与企业软件",
    focus: "订阅制、企业客户粘性、云资本开支和 AI 产品化验证。",
    learningTopics: ["订阅收入", "云业务", "企业客户", "AI 叙事"],
    summary:
      "这个案例训练的是用客户粘性、续费扩容和利润率验证软件护城河，而不是只听订阅制故事。",
    businessModel:
      "Microsoft 向企业、开发者和消费者销售软件订阅、云服务、操作系统、游戏和业务应用。企业客户为稳定性、集成、合规和效率付费，迁移成本提高留存。",
    keyVariables: ["订阅收入质量", "云收入增长", "云毛利率", "资本开支", "客户留存和扩容", "AI 功能付费转化"],
    analysisPath: [
      "企业客户使用越深，续费、席位扩张和交叉销售越容易支撑收入质量。",
      "云业务增长会推高规模，但数据中心资本开支和折旧会影响现金流与利润率。",
      "AI Copilot 等新叙事需要通过付费渗透、留存、客单价和利润贡献验证。",
      "估值质量来自可预测现金流、利润率和护城河，而不是单一产品热度。",
    ],
    commonMisreadings: [
      "把订阅收入自动等同于无风险收入。",
      "只看云收入增长，不看资本开支和毛利率。",
      "把 AI 功能发布等同于已经形成利润贡献。",
    ],
    risks: ["云竞争压低价格", "AI 投入回收慢", "企业 IT 支出放缓", "监管和安全事件"],
    relatedArticles: ["software-saas-metrics", "moat-profit-cash-flow", "earnings-call"],
  },
  {
    company: "Costco",
    ticker: "COST",
    industry: "会员制零售",
    focus: "低毛利、高周转、会员费和零售护城河。",
    learningTopics: ["会员制", "低毛利高周转", "用户粘性", "零售效率"],
    summary:
      "这个案例训练的是把毛利率放回商业模式，而不是简单认为毛利率越高越好。",
    businessModel:
      "Costco 通过会员费和商品销售赚钱。消费者先为会员资格付费，再以高频采购换取低加价商品，公司用规模采购、低 SKU 和高周转提高经营效率。",
    keyVariables: ["会员续费率", "会员费收入", "同店销售", "库存周转", "商品毛利率", "运营费用率"],
    analysisPath: [
      "低商品加价吸引高频采购，会员续费让收入质量更稳定。",
      "高周转降低库存压力，也让低毛利模式仍可能形成可观经营利润。",
      "会员费改善商业模式，因为它不依赖单件商品高毛利。",
      "估值关注点应从毛利率高低转向会员粘性、周转效率和现金流稳定性。",
    ],
    commonMisreadings: [
      "只看低毛利率就判断生意质量差。",
      "把零售公司全部放在同一套毛利率标准下比较。",
      "忽略会员费对利润结构和客户粘性的影响。",
    ],
    risks: ["会员增长放缓", "成本通胀无法传导", "电商和低价零售竞争", "库存管理失误"],
    relatedArticles: ["consumer-business-basic", "revenue-gross-profit-net-income", "inflation-and-stocks"],
  },
  {
    company: "Meta",
    ticker: "META",
    industry: "社交平台与数字广告",
    focus: "广告周期、成本控制、回购和平台利润弹性。",
    learningTopics: ["广告周期", "成本控制", "回购", "平台风险"],
    summary:
      "这个案例训练的是理解平台型广告公司的利润弹性：收入、费用和资本配置变化会同时影响估值。",
    businessModel:
      "Meta 通过社交和内容平台聚合用户注意力，广告主为触达、转化和品牌曝光付费。平台用户不一定直接付钱，但用户行为和广告效果决定广告收入质量。",
    keyVariables: ["广告需求", "用户参与度", "广告定价", "运营费用", "资本开支", "回购和股本变化"],
    analysisPath: [
      "宏观放缓会影响广告主预算，收入增长可能随广告周期波动。",
      "成本削减在收入稳定时会放大利润弹性，但不能以牺牲产品竞争力为代价。",
      "回购要结合自由现金流、价格和新业务投入看，而不是孤立看金额。",
      "估值会在广告恢复、成本纪律和平台风险之间重新平衡。",
    ],
    commonMisreadings: [
      "把用户多等同于广告收入永远稳定。",
      "只看裁员带来的利润改善，不看长期产品和监管风险。",
      "把回购金额当成独立利好，忽略现金流和估值前提。",
    ],
    risks: ["广告预算周期下行", "隐私和监管限制", "用户迁移到新平台", "新业务投入回报不确定"],
    relatedArticles: ["good-profit-bad-profit", "buyback-shareholder-value", "earnings-call"],
  },
  {
    company: "Visa",
    ticker: "V",
    industry: "支付网络",
    focus: "网络效应、轻资产利润率、交易量和监管风险。",
    learningTopics: ["网络效应", "轻资产", "利润率", "支付网络"],
    summary:
      "这个案例训练的是区分支付网络和银行：它赚的是网络和交易流量的钱，不是传统存贷款利差。",
    businessModel:
      "Visa 运营连接商户、收单机构、发卡机构和消费者的支付网络，收入来自交易处理、服务和跨境等网络活动。它通常不承担普通银行式贷款信用风险。",
    keyVariables: ["支付交易量", "跨境交易", "网络费率", "商户和发卡机构覆盖", "运营杠杆", "监管费用压力"],
    analysisPath: [
      "消费者和商户交易越多，支付网络处理量越大，收入基础越强。",
      "轻资产网络让新增交易的边际成本相对低，规模扩大可能带来较高利润率。",
      "估值关注点是交易量增长、网络效应和利润稳定性。",
      "监管压低费率或替代支付方式崛起时，网络优势需要重新验证。",
    ],
    commonMisreadings: [
      "把 Visa 当成普通银行分析。",
      "只看利润率高，不看监管和支付替代风险。",
      "把网络效应理解成永远不会被挑战。",
    ],
    risks: ["支付费率监管", "实时支付和钱包替代", "跨境交易波动", "大型平台绕开传统网络"],
    relatedArticles: ["moat-profit-cash-flow", "revenue-gross-profit-net-income", "us-stock-market-structure"],
  },
];
