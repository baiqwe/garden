export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

export type StockItem = {
  name: string;
  rarity: Rarity;
  buyPrice: number;
  expectedSellPrice: number;
  growthMinutes: number;
};

export type StockSnapshot = {
  source: string;
  lastUpdated: string;
  nextRestockAt: string;
  confidence: number;
  items: StockItem[];
};

export type PromoCode = {
  code: string;
  reward: string;
  status: 'working' | 'expired';
  lastChecked: string;
};

export type Mutation = {
  slug: string;
  crop: string;
  basePlant: string;
  weather: string;
  fertilizer: string;
  note: string;
  successRate: string;
  expectedRoiBand: string;
  expertTip: string;
};
