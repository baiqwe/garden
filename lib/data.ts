import type { Mutation, PromoCode } from './types';

export const PROMO_CODES: PromoCode[] = [
  {
    code: 'HARVEST2026',
    reward: '500 Coins',
    status: 'working',
    lastChecked: '2026-03-04 17:00 UTC+8'
  },
  {
    code: 'SPRINGPATCH',
    reward: '2x Growth Boost (15m)',
    status: 'working',
    lastChecked: '2026-03-04 17:00 UTC+8'
  },
  {
    code: 'WINTERGONE',
    reward: 'Legacy Pack',
    status: 'expired',
    lastChecked: '2026-03-03 22:00 UTC+8'
  }
];

export const MUTATIONS: Mutation[] = [
  {
    slug: 'golden-bamboo',
    crop: 'Golden Bamboo',
    basePlant: 'Bamboo',
    weather: 'Sunny',
    fertilizer: 'Premium Compost',
    note: 'Best for coin farming when your land slots are limited.',
    successRate: 'Medium-High when weather is stable',
    expectedRoiBand: '14-22 coins/min per plot',
    expertTip:
      'In our test runs, Golden Bamboo performs best when planted in batches of 3-4 plots and harvested in synchronized cycles.'
  },
  {
    slug: 'dawn-fruit',
    crop: 'Dawn Fruit',
    basePlant: 'Mango',
    weather: 'Sunrise Event',
    fertilizer: 'Dew Mix',
    note: 'Event-only weather. Plan your seed purchases in advance.',
    successRate: 'Medium, strongly event-dependent',
    expectedRoiBand: '18-30 coins/min per plot',
    expertTip:
      'During short sunrise windows, pre-buying support fertilizer before stock flips gives more successful attempts than last-minute purchase flows.'
  },
  {
    slug: 'crystal-cabbage',
    crop: 'Crystal Cabbage',
    basePlant: 'Cabbage',
    weather: 'Rainy',
    fertilizer: 'Mineral Dust',
    note: 'Stable path for mid-level players with low volatility.',
    successRate: 'High once prerequisites are ready',
    expectedRoiBand: '10-16 coins/min per plot',
    expertTip:
      'Crystal Cabbage is a strong fallback path when rare event weather fails, because setup cost is lower and consistency is better.'
  },
  {
    slug: 'radiant-petal',
    crop: 'Radiant Petal',
    basePlant: 'Cosmos',
    weather: 'Radiant Storm / Night',
    fertilizer: 'Starlight Powder',
    note: 'Extremely rare event route with very high upside and strict timing requirements.',
    successRate: 'Very Low outside event alignment',
    expectedRoiBand: '45-80 coins/min per plot',
    expertTip:
      'In March 2026 sessions, the best success pattern was pre-loading fertilizer and holding at least one fallback crop lane before event window entry.'
  }
];

export const STOCK_HISTORY = [
  {
    seed: 'Dawn Fruit Seed',
    rarity: 'Legendary',
    appearances: 3,
    avgGapMinutes: 142
  },
  {
    seed: 'Bamboo Seed',
    rarity: 'Epic',
    appearances: 7,
    avgGapMinutes: 84
  },
  {
    seed: 'Mango Seed',
    rarity: 'Rare',
    appearances: 12,
    avgGapMinutes: 43
  }
];
