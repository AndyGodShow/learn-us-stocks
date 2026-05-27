export type CaseStudy = {
  companyName: string;
  ticker: string;
  industry: string;
  focus: string;
  learningPoints: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    companyName: "NVIDIA",
    ticker: "NVDA",
    industry: "半导体与 AI 基础设施",
    focus: "GPU 平台、数据中心收入、生态壁垒与周期风险。",
    learningPoints: ["产业链定价权", "毛利率", "成长股估值"],
  },
  {
    companyName: "Micron",
    ticker: "MU",
    industry: "存储芯片",
    focus: "DRAM 与 NAND 周期、资本开支和供需拐点。",
    learningPoints: ["周期股", "库存周期", "供给纪律"],
  },
  {
    companyName: "Apple",
    ticker: "AAPL",
    industry: "消费电子与服务",
    focus: "硬件生态、服务收入、回购和成熟公司估值。",
    learningPoints: ["品牌护城河", "自由现金流", "股票回购"],
  },
  {
    companyName: "Tesla",
    ticker: "TSLA",
    industry: "电动车与能源",
    focus: "交付量、汽车毛利率、价格策略和长期叙事。",
    learningPoints: ["经营杠杆", "竞争格局", "预期管理"],
  },
  {
    companyName: "Microsoft",
    ticker: "MSFT",
    industry: "云计算与企业软件",
    focus: "Azure 增长、Office 订阅、AI 产品化和利润质量。",
    learningPoints: ["订阅收入", "云业务", "经营利润率"],
  },
];
