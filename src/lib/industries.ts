export type Industry = {
  slug: string;
  name: string;
  englishName: string;
  summary: string;
  businessModel: string;
  customer: string;
  revenueModel: string;
  costStructure: string[];
  valueChain: string[];
  keyMetrics: string[];
  cycleDrivers: string[];
  valuationMethods: string[];
  representativeCompanies: {
    name: string;
    ticker: string;
    role: string;
  }[];
  commonMisreadings: string[];
  risks: string[];
  learningValue: string;
  relatedArticles: string[];
  relatedCases: string[];
};

export const industries: Industry[] = [
  {
    slug: "semiconductors",
    name: "半导体",
    englishName: "Semiconductors",
    summary: "把芯片设计、制造、存储周期和资本开支连起来，理解技术需求如何进入收入、毛利率和估值。",
    businessModel:
      "半导体公司把算力、存储、连接或制造能力做成芯片、晶圆代工、设备与相关平台。不同环节的资产强度差异很大，芯片设计更看产品和生态，制造与存储更看产能、良率和周期位置。",
    customer: "云厂商、服务器厂商、PC 与手机品牌、汽车与工业设备厂商，以及其他需要芯片或代工服务的电子产业链公司。",
    revenueModel:
      "收入主要来自芯片销售、晶圆代工、存储产品出货、平台配套和长期供货关系。收入同时受出货量、单价、产品组合、产能利用率和客户资本开支影响。",
    costStructure: ["研发和工程团队", "晶圆制造或外包代工成本", "封装测试", "折旧与资本开支", "库存和供应链成本"],
    valueChain: ["EDA 与 IP", "芯片设计", "晶圆制造", "封装测试", "系统集成", "云、手机、汽车和工业终端"],
    keyMetrics: ["收入增速", "毛利率", "库存天数", "资本开支", "产能利用率", "产品组合", "客户集中度"],
    cycleDrivers: ["终端需求周期", "客户库存周期", "行业扩产节奏", "云厂商资本开支", "产品换代", "出口管制和供应链约束"],
    valuationMethods: ["正常化 PE", "EV/EBITDA", "PS", "DCF", "跨周期利润与现金流分析"],
    representativeCompanies: [
      { name: "NVIDIA", ticker: "NVDA", role: "AI GPU 与加速计算平台样本" },
      { name: "AMD", ticker: "AMD", role: "CPU、GPU 与数据中心竞争样本" },
      { name: "Micron", ticker: "MU", role: "存储周期和价格弹性样本" },
      { name: "TSMC", ticker: "TSM", role: "先进制程晶圆代工样本" },
    ],
    commonMisreadings: [
      "把技术热度直接等同于公司利润。",
      "用单一年份 PE 判断强周期或高投入公司的便宜贵。",
      "只看收入增长，不看库存、资本开支和毛利率位置。",
    ],
    risks: ["扩产后供给过剩", "客户资本开支放缓", "产品替代和竞争加剧", "地缘和出口限制", "库存周期反转"],
    learningValue: "训练把技术叙事拆成订单、产能、价格、毛利率和资本开支周期的能力。",
    relatedArticles: ["semiconductor-industry-basic", "ai-compute-value-chain", "cyclical-stocks-basic"],
    relatedCases: ["NVDA", "MU"],
  },
  {
    slug: "software-saas",
    name: "软件 / SaaS",
    englishName: "Software / SaaS",
    summary: "用订阅收入、续费率、毛利率和企业客户粘性理解软件公司的现金流质量。",
    businessModel:
      "软件公司把功能、工作流、数据和协作能力打包成授权、订阅或云服务。优秀软件的价值来自持续使用、迁移成本、生态集成和不断扩容，而不是一次性卖出产品。",
    customer: "企业 IT 部门、业务团队、开发者、创意工作者和部分个人用户，核心付费方通常是企业客户。",
    revenueModel:
      "收入来自订阅费、席位扩张、模块加购、用量计费、维护服务和企业协议。高质量收入通常体现为留存稳定、净收入扩张和较高毛利率。",
    costStructure: ["研发投入", "云托管和交付成本", "销售与市场费用", "客户成功团队", "安全、合规和支持成本"],
    valueChain: ["产品研发", "云交付", "销售渠道", "客户部署", "续费扩容", "生态集成"],
    keyMetrics: ["ARR 或订阅收入", "续费率", "净收入留存", "毛利率", "销售效率", "自由现金流率", "客户集中度"],
    cycleDrivers: ["企业 IT 预算", "席位扩张放缓", "销售周期变化", "利率对成长股估值的影响", "AI 功能付费转化"],
    valuationMethods: ["PS", "EV/Revenue", "EV/FCF", "DCF", "成熟软件公司的 PE"],
    representativeCompanies: [
      { name: "Microsoft", ticker: "MSFT", role: "企业软件、云和平台生态样本" },
      { name: "Adobe", ticker: "ADBE", role: "创意软件订阅与定价权样本" },
      { name: "Salesforce", ticker: "CRM", role: "CRM SaaS 和企业销售样本" },
      { name: "ServiceNow", ticker: "NOW", role: "工作流平台和大客户扩容样本" },
    ],
    commonMisreadings: [
      "认为订阅收入一定稳定，不检查续费和客户预算。",
      "只看收入增速，不看获客成本和自由现金流。",
      "把毛利率高直接等同于估值一定合理。",
    ],
    risks: ["企业 IT 支出放缓", "竞争压低价格", "AI 改变软件交付方式", "获客成本上升", "安全或合规事件"],
    learningValue: "训练从收入质量、客户粘性和单位经济模型判断软件护城河。",
    relatedArticles: ["software-saas-metrics", "ps-valuation-logic", "moat-profit-cash-flow"],
    relatedCases: ["MSFT"],
  },
  {
    slug: "cloud-computing",
    name: "云计算",
    englishName: "Cloud Computing",
    summary: "理解云厂商如何用规模、资本开支、数据中心效率和 AI 算力承接企业迁移需求。",
    businessModel:
      "云计算公司建设数据中心、网络和软件平台，把计算、存储、数据库、AI 和开发工具按服务交付给客户。它同时像基础设施、平台和软件生意，规模效应强但资本开支也重。",
    customer: "企业、开发者、政府机构、互联网公司、AI 公司和内部业务部门。",
    revenueModel:
      "收入来自按量使用、预留实例、平台服务、数据库、AI 算力、企业协议和支持服务。增长来自工作负载迁移、用量扩张和更高价值服务渗透。",
    costStructure: ["数据中心建设", "服务器和芯片采购", "电力与冷却", "折旧", "网络带宽", "研发和运维团队"],
    valueChain: ["芯片和服务器", "数据中心", "基础云服务", "平台服务", "AI 模型与工具", "企业应用"],
    keyMetrics: ["云收入增长", "资本开支", "毛利率", "利用率", "剩余履约义务", "企业客户扩容", "AI 算力供需"],
    cycleDrivers: ["企业云迁移节奏", "AI 训练和推理需求", "硬件供给", "利率和资本成本", "企业预算周期"],
    valuationMethods: ["分部估值", "EV/EBITDA", "DCF", "PS", "自由现金流分析"],
    representativeCompanies: [
      { name: "Amazon AWS", ticker: "AMZN", role: "云基础设施规模效应样本" },
      { name: "Microsoft Azure", ticker: "MSFT", role: "企业软件与云绑定样本" },
      { name: "Google Cloud", ticker: "GOOGL", role: "数据、AI 和云平台追赶样本" },
    ],
    commonMisreadings: [
      "只看云收入增长，不看资本开支和折旧压力。",
      "把 AI 算力需求当成没有周期的永久增长。",
      "忽略云厂商之间的价格、客户和产品结构差异。",
    ],
    risks: ["资本开支回收慢", "企业优化云支出", "算力供需错配", "价格竞争", "能源和数据中心约束"],
    learningValue: "训练把规模效应和资本强度同时放进估值框架。",
    relatedArticles: ["ai-compute-value-chain", "software-saas-metrics", "free-cash-flow"],
    relatedCases: ["MSFT", "NVDA"],
  },
  {
    slug: "consumer-electronics",
    name: "消费电子",
    englishName: "Consumer Electronics",
    summary: "从产品周期、品牌、供应链、毛利率和生态理解硬件公司如何形成现金流。",
    businessModel:
      "消费电子公司把硬件、软件、服务和品牌体验组合成终端产品。硬件销量提供装机基础，服务、配件和生态提高留存与利润质量。",
    customer: "个人消费者、企业采购方、渠道商，以及围绕设备生态付费的开发者或服务用户。",
    revenueModel:
      "收入来自设备销售、服务订阅、应用分成、配件、软件功能和售后服务。产品换代、定价、渠道库存和生态粘性共同决定收入质量。",
    costStructure: ["零部件采购", "制造和组装", "物流与渠道", "研发", "营销", "保修和售后"],
    valueChain: ["芯片和零部件", "代工制造", "品牌设计", "渠道销售", "应用和服务生态", "用户换机"],
    keyMetrics: ["出货量", "平均售价", "毛利率", "服务收入占比", "库存", "供应链效率", "自由现金流"],
    cycleDrivers: ["换机周期", "消费信心", "产品创新周期", "供应链限制", "汇率和成本变化"],
    valuationMethods: ["PE", "EV/FCF", "DCF", "分部估值", "成熟期现金流分析"],
    representativeCompanies: [
      { name: "Apple", ticker: "AAPL", role: "硬件生态和服务收入样本" },
      { name: "Tesla", ticker: "TSLA", role: "电动车产品周期与制造扩张样本" },
    ],
    commonMisreadings: [
      "把产品喜欢程度等同于股东回报。",
      "只看销量，不看价格、毛利率和库存。",
      "忽略硬件周期与服务收入质量的差异。",
    ],
    risks: ["换机周期拉长", "供应链中断", "价格竞争", "监管限制生态收费", "新品投入回报不确定"],
    learningValue: "训练区分硬件销量、品牌定价权、生态留存和现金流质量。",
    relatedArticles: ["consumer-business-basic", "free-cash-flow", "buyback-shareholder-value"],
    relatedCases: ["AAPL", "TSLA"],
  },
  {
    slug: "internet-advertising",
    name: "互联网广告",
    englishName: "Internet Advertising",
    summary: "理解平台如何把用户时长、广告效果、推荐算法和宏观广告周期转化为收入。",
    businessModel:
      "互联网广告平台聚合用户注意力和数据，用内容、搜索、社交或视频场景帮助广告主触达目标用户。平台赚的是广告主预算，不是普通用户直接付费。",
    customer: "品牌广告主、中小商家、应用开发者、电商卖家和代理商。",
    revenueModel:
      "收入来自按点击、展示、转化或广告竞价收取费用。广告加载率、定价、用户时长、转化效果和广告主预算共同决定收入。",
    costStructure: ["研发和推荐算法", "内容审核与安全", "数据中心和带宽", "销售团队", "合规成本", "AI 基础设施投入"],
    valueChain: ["用户内容或搜索意图", "推荐和广告系统", "广告竞价", "转化跟踪", "广告主预算", "商家销售结果"],
    keyMetrics: ["日活或月活", "用户时长", "广告价格", "广告加载率", "转化效果", "运营费用率", "资本开支"],
    cycleDrivers: ["宏观广告预算", "电商和应用投放周期", "隐私政策变化", "推荐算法变化", "平台竞争"],
    valuationMethods: ["PE", "EV/EBITDA", "DCF", "自由现金流分析", "分部估值"],
    representativeCompanies: [
      { name: "Meta", ticker: "META", role: "社交广告和推荐系统样本" },
      { name: "Alphabet", ticker: "GOOGL", role: "搜索广告、视频和云分部样本" },
    ],
    commonMisreadings: [
      "认为用户规模大就一定能持续变现。",
      "只看收入恢复，不看费用和资本开支。",
      "忽略隐私、监管和用户迁移对广告效率的影响。",
    ],
    risks: ["广告预算下行", "隐私和监管限制", "用户注意力迁移", "AI 搜索改变流量入口", "内容安全成本上升"],
    learningValue: "训练把用户行为、广告主 ROI 和宏观周期连接起来看平台利润弹性。",
    relatedArticles: ["good-profit-bad-profit", "earnings-call", "growth-stock-risk"],
    relatedCases: ["META"],
  },
  {
    slug: "retail-membership",
    name: "零售 / 会员制",
    englishName: "Retail / Membership",
    summary: "用低毛利、高周转、会员费和供应链效率理解零售公司的生意质量。",
    businessModel:
      "零售公司通过采购、仓储、门店或电商渠道把商品卖给消费者。会员制零售还把稳定会员费作为利润来源，用低加价和高周转换取复购。",
    customer: "个人消费者、家庭、小商户，以及部分线上平台的第三方卖家和广告客户。",
    revenueModel:
      "收入来自商品销售、会员费、平台佣金、广告、配送服务和金融服务。不同零售模式的毛利率、周转率和费用率差异很大。",
    costStructure: ["商品采购", "门店和仓储", "物流配送", "人工", "库存损耗", "技术和履约成本"],
    valueChain: ["供应商采购", "仓储物流", "门店或电商渠道", "会员体系", "消费者复购", "库存周转"],
    keyMetrics: ["同店销售", "库存周转", "毛利率", "会员续费率", "运营费用率", "现金转换周期", "履约成本"],
    cycleDrivers: ["消费周期", "通胀和商品成本", "工资成本", "库存周期", "电商竞争", "会员增长"],
    valuationMethods: ["PE", "EV/EBITDA", "DCF", "自由现金流分析", "同店销售与利润率框架"],
    representativeCompanies: [
      { name: "Costco", ticker: "COST", role: "会员费和高周转样本" },
      { name: "Walmart", ticker: "WMT", role: "规模采购和日用品零售样本" },
      { name: "Amazon", ticker: "AMZN", role: "电商、会员和平台混合样本" },
    ],
    commonMisreadings: [
      "认为毛利率低就一定不是好生意。",
      "把所有零售公司放在同一套指标下比较。",
      "忽略库存和现金周转对利润质量的影响。",
    ],
    risks: ["库存失误", "价格竞争", "人工和物流成本上升", "消费走弱", "会员增长放缓"],
    learningValue: "训练把毛利率、周转率、会员费和供应链效率放在同一个商业模型里分析。",
    relatedArticles: ["consumer-business-basic", "inflation-and-stocks", "revenue-gross-profit-net-income"],
    relatedCases: ["COST"],
  },
  {
    slug: "financials-payments",
    name: "金融 / 支付",
    englishName: "Financials / Payments",
    summary: "区分银行、信用、支付网络和轻资产金融平台，理解利率与网络效应的不同逻辑。",
    businessModel:
      "金融行业包含存贷款、投行、资产管理、信用卡和支付网络等多种模式。银行赚利差和手续费，支付网络赚交易流量和服务费，信用卡网络还涉及消费、信用和商户生态。",
    customer: "个人消费者、企业、商户、发卡机构、收单机构、投资者和资本市场客户。",
    revenueModel:
      "收入来自净利息收入、手续费、交易处理费、跨境服务、信用卡费用、资产管理费和投行业务费。不同模式的信用风险和资本需求差异很大。",
    costStructure: ["资金成本", "信用损失准备", "合规和风控", "技术网络", "人工和网点", "营销与客户激励"],
    valueChain: ["存款和资金来源", "贷款和信用", "支付网络", "商户收单", "消费者交易", "资本市场服务"],
    keyMetrics: ["净息差", "贷款损失率", "存款成本", "支付交易量", "跨境交易", "资本充足率", "运营杠杆"],
    cycleDrivers: ["利率周期", "信用周期", "消费周期", "监管变化", "跨境旅行和商业活动", "市场波动"],
    valuationMethods: ["P/B", "PE", "ROE 框架", "EV/EBITDA", "DCF", "交易量和网络价值分析"],
    representativeCompanies: [
      { name: "JPMorgan", ticker: "JPM", role: "综合银行和信用周期样本" },
      { name: "Visa", ticker: "V", role: "支付网络和轻资产模式样本" },
      { name: "Mastercard", ticker: "MA", role: "全球支付网络样本" },
      { name: "American Express", ticker: "AXP", role: "信用卡闭环网络和消费信用样本" },
    ],
    commonMisreadings: [
      "把支付网络当成传统银行分析。",
      "只看利率上升的收入好处，不看信用损失和资金成本。",
      "用普通工业企业估值指标套银行资产负债表。",
    ],
    risks: ["信用损失上升", "监管压低费用", "支付替代方案竞争", "利率快速变化", "资本市场业务波动"],
    learningValue: "训练根据资产负债表、信用风险和网络效应选择不同估值框架。",
    relatedArticles: ["treasury-yield-basic", "fed-rate-cycle", "moat-profit-cash-flow"],
    relatedCases: ["V"],
  },
  {
    slug: "healthcare-pharma",
    name: "医药 / 医疗",
    englishName: "Healthcare / Pharma",
    summary: "用专利、研发管线、医保支付和监管风险理解医药医疗公司的长期价值。",
    businessModel:
      "医药公司通过研发、临床试验、审批和商业化销售药品；医疗服务和保险公司则围绕支付、护理网络和成本控制赚钱。这个行业的价值高度依赖监管、专利和支付方。",
    customer: "患者、医院、医生、药房、保险公司、政府医保和雇主健康计划，实际付款方常常不是最终使用者。",
    revenueModel:
      "收入来自处方药销售、医疗服务费、保险保费、医疗设备和长期护理服务。药品收入受专利保护、适应症扩展、定价和医保报销影响。",
    costStructure: ["研发投入", "临床试验", "销售和医学推广", "生产质量体系", "监管合规", "理赔和医疗成本"],
    valueChain: ["基础研究", "临床试验", "监管审批", "生产", "医保和渠道准入", "医生处方和患者使用"],
    keyMetrics: ["研发管线", "专利到期时间", "临床成功率", "药品销售峰值", "医疗成本率", "监管审批进度", "现金流"],
    cycleDrivers: ["专利悬崖", "临床数据读出", "医保政策", "监管审批", "并购周期", "人口结构变化"],
    valuationMethods: ["DCF", "风险调整净现值", "PE", "EV/EBITDA", "分产品或分部估值"],
    representativeCompanies: [
      { name: "Eli Lilly", ticker: "LLY", role: "创新药和大单品增长样本" },
      { name: "Pfizer", ticker: "PFE", role: "大型药企管线和专利周期样本" },
      { name: "UnitedHealth", ticker: "UNH", role: "医保支付和医疗服务整合样本" },
      { name: "Johnson & Johnson", ticker: "JNJ", role: "多元医疗健康业务样本" },
    ],
    commonMisreadings: [
      "把单个热门药品等同于公司全部价值。",
      "忽略专利到期和医保支付对收入的影响。",
      "只看临床好消息，不看商业化和监管路径。",
    ],
    risks: ["临床失败", "专利到期", "药价和医保监管", "产品安全事件", "并购整合失败"],
    learningValue: "训练用概率、专利期限和支付体系分析长期现金流。",
    relatedArticles: ["dcf-basic-logic", "management-quality", "good-profit-bad-profit"],
    relatedCases: [],
  },
  {
    slug: "energy",
    name: "能源",
    englishName: "Energy",
    summary: "从油价周期、资本开支、现金流和商品价格理解能源公司的强周期属性。",
    businessModel:
      "能源公司通过勘探、开采、运输、炼化和销售石油、天然气及相关产品赚钱。收入和利润高度受商品价格影响，资本配置纪律比单纯产量增长更重要。",
    customer: "炼厂、化工企业、公用事业、工业客户、交通和终端能源消费者。",
    revenueModel:
      "收入来自油气产量乘以商品价格、炼化价差、管道运输费和能源交易。自由现金流取决于价格、成本曲线、资本开支和储量替换。",
    costStructure: ["勘探开发", "钻井和设备", "运输与管道", "维护资本开支", "环保和退役成本", "人工与能源成本"],
    valueChain: ["勘探开发", "上游开采", "中游运输", "炼化加工", "成品销售", "化工和终端消费"],
    keyMetrics: ["油气价格", "产量", "储量寿命", "资本开支", "自由现金流", "单位开采成本", "股东回报政策"],
    cycleDrivers: ["全球供需", "OPEC 和产油国政策", "库存", "经济周期", "地缘风险", "能源转型投入"],
    valuationMethods: ["EV/EBITDA", "自由现金流收益率", "P/B", "DCF", "资产净值和储量价值"],
    representativeCompanies: [
      { name: "Exxon Mobil", ticker: "XOM", role: "综合油气巨头样本" },
      { name: "Chevron", ticker: "CVX", role: "上游与股东回报样本" },
      { name: "ConocoPhillips", ticker: "COP", role: "上游勘探生产样本" },
    ],
    commonMisreadings: [
      "把油价上涨直接外推成长期高利润。",
      "在周期高点用低 PE 判断安全。",
      "忽略资本开支和储量替换对自由现金流的消耗。",
    ],
    risks: ["油价下跌", "资本开支失控", "储量替换不足", "环保和政策压力", "地缘和运营事故"],
    learningValue: "训练跨周期看商品价格、现金流和资本配置。",
    relatedArticles: ["cyclical-stocks-basic", "free-cash-flow", "inflation-and-stocks"],
    relatedCases: [],
  },
  {
    slug: "industrials-manufacturing",
    name: "工业 / 制造",
    englishName: "Industrials / Manufacturing",
    summary: "用订单、资本品需求、利润率和宏观周期理解工业制造公司的经营杠杆。",
    businessModel:
      "工业制造公司向企业、政府和工程项目销售设备、零部件、自动化系统和服务。它们往往受资本开支周期影响，售后服务和备件能提高收入稳定性。",
    customer: "建筑、矿业、农业、航空、工厂、能源、公用事业、政府和经销商网络。",
    revenueModel:
      "收入来自设备销售、长期订单、服务合同、备件、租赁和项目交付。订单和积压反映未来收入，利润率受产能利用率、价格和成本控制影响。",
    costStructure: ["原材料", "人工", "工厂和设备折旧", "研发", "经销渠道", "售后服务网络", "库存"],
    valueChain: ["原材料和零部件", "制造装配", "经销或项目交付", "客户资本开支", "售后服务", "设备更新周期"],
    keyMetrics: ["订单增长", "积压订单", "营业利润率", "产能利用率", "库存", "自由现金流", "服务收入占比"],
    cycleDrivers: ["制造业景气", "基础设施投资", "利率和融资条件", "商品资本开支", "农业和航空周期", "供应链成本"],
    valuationMethods: ["PE", "EV/EBITDA", "DCF", "跨周期利润", "订单和积压框架"],
    representativeCompanies: [
      { name: "Caterpillar", ticker: "CAT", role: "工程机械和商品资本开支样本" },
      { name: "GE", ticker: "GE", role: "航空发动机和工业分部样本" },
      { name: "Honeywell", ticker: "HON", role: "自动化和多元工业样本" },
      { name: "Deere", ticker: "DE", role: "农业设备周期样本" },
    ],
    commonMisreadings: [
      "只看当期利润，不看订单和积压变化。",
      "忽略经营杠杆让利润率在周期中被放大。",
      "把一次性供应链改善当成永久利润率。",
    ],
    risks: ["订单下滑", "客户资本开支收缩", "原材料成本上升", "库存周期反转", "项目执行风险"],
    learningValue: "训练用订单、积压、利润率和宏观变量分析资本品周期。",
    relatedArticles: ["cyclical-stocks-basic", "earnings-call", "good-profit-bad-profit"],
    relatedCases: [],
  },
];

export function getAllIndustries(): Industry[] {
  return industries;
}

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}

export function getIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}
