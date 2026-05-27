export type GlossaryTerm = {
  term: string;
  name: string;
  description: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  { term: "PE", name: "市盈率", description: "市值与净利润的比值，用来衡量市场为利润支付的价格。" },
  { term: "PS", name: "市销率", description: "市值与收入的比值，常用于观察高成长或利润尚不稳定的公司。" },
  { term: "EPS", name: "每股收益", description: "净利润除以流通股数，反映每一股对应的盈利。" },
  { term: "Revenue", name: "收入", description: "公司销售产品或服务获得的总金额，是分析增长的起点。" },
  { term: "Gross Margin", name: "毛利率", description: "毛利占收入的比例，体现产品定价权和直接成本结构。" },
  { term: "Operating Margin", name: "经营利润率", description: "经营利润占收入的比例，反映主营业务扣除运营费用后的效率。" },
  { term: "Free Cash Flow", name: "自由现金流", description: "经营现金流扣除资本开支后的现金，体现企业可自由分配的资金。" },
  { term: "Guidance", name: "业绩指引", description: "管理层对未来收入、利润或经营指标的预期说明。" },
  { term: "Buyback", name: "股票回购", description: "公司用现金买回自身股票，可能提升每股指标并回馈股东。" },
  { term: "Market Cap", name: "市值", description: "股价乘以流通股数，代表市场对公司整体股权价值的定价。" },
  { term: "ETF", name: "交易型基金", description: "在交易所买卖的一篮子资产，常用于低成本获得行业或指数敞口。" },
  { term: "ADR", name: "美国存托凭证", description: "外国公司在美国市场交易的存托凭证，方便美国投资者买卖。" },
];
