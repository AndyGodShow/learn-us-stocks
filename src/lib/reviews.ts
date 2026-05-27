export type TradeReview = {
  symbol: string;
  direction: string;
  buyReason: string;
  sellReason: string;
  didWell: string;
  mistake: string;
  improvement: string;
  tags: string[];
};

export const tradeReviews: TradeReview[] = [
  {
    symbol: "NVDA",
    direction: "观察多头",
    buyReason: "业绩后数据中心收入继续超预期，价格突破前期整理区间。",
    sellReason: "估值扩张过快，仓位规则触发减仓。",
    didWell: "入场前写清楚基本面假设和价格失效点。",
    mistake: "没有提前规划分批止盈，导致执行时犹豫。",
    improvement: "下次在买入计划中加入两个固定减仓条件。",
    tags: ["计划完整", "止盈可改进"],
  },
  {
    symbol: "AAPL",
    direction: "区间观察",
    buyReason: "服务收入韧性强，回购支撑每股收益。",
    sellReason: "硬件增长放缓，价格未能突破区间上沿。",
    didWell: "避免在缺少催化剂时追高。",
    mistake: "低估了市场对短期 iPhone 数据的敏感度。",
    improvement: "把产品周期数据纳入观察清单。",
    tags: ["耐心等待", "催化不足"],
  },
  {
    symbol: "MU",
    direction: "周期反转观察",
    buyReason: "存储价格改善，库存周期出现修复迹象。",
    sellReason: "财报指引未确认利润率修复速度。",
    didWell: "区分了周期反弹和长期成长。",
    mistake: "对周期股仓位设置偏高。",
    improvement: "周期股单笔仓位应低于稳定现金流公司。",
    tags: ["周期股", "仓位控制"],
  },
];
