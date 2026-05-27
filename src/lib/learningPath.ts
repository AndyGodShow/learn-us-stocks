export type LearningStage = {
  id: number;
  title: string;
  description: string;
  topics: string[];
};

export const learningPath: LearningStage[] = [
  {
    id: 1,
    title: "第一阶段：市场基础",
    description: "先理解股票、指数、交易机制和风险收益关系。",
    topics: ["股票与所有权", "美股交易时段", "主要指数", "订单类型"],
  },
  {
    id: 2,
    title: "第二阶段：财报与公司分析",
    description: "学会把财报数字翻译成商业模式和经营质量。",
    topics: ["三张报表", "收入质量", "利润率", "现金流"],
  },
  {
    id: 3,
    title: "第三阶段：估值方法",
    description: "理解价格、预期、增长和安全边际之间的关系。",
    topics: ["PE", "PS", "DCF 思维", "估值对比"],
  },
  {
    id: 4,
    title: "第四阶段：宏观与利率",
    description: "建立利率、通胀、流动性和估值倍数的连接。",
    topics: ["美联储", "无风险利率", "折现率", "经济周期"],
  },
  {
    id: 5,
    title: "第五阶段：行业研究",
    description: "从产业链、竞争格局和周期位置理解公司差异。",
    topics: ["半导体", "软件", "消费电子", "电动车"],
  },
  {
    id: 6,
    title: "第六阶段：交易系统与复盘",
    description: "把研究、仓位、纪律和复盘连接成可迭代流程。",
    topics: ["交易计划", "仓位管理", "风险控制", "复盘模板"],
  },
];
