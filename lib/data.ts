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
    note: 'Best for coin farming when your land slots are limited.'
  },
  {
    slug: 'dawn-fruit',
    crop: 'Dawn Fruit',
    basePlant: 'Mango',
    weather: 'Sunrise Event',
    fertilizer: 'Dew Mix',
    note: 'Event-only weather. Plan your seed purchases in advance.'
  },
  {
    slug: 'crystal-cabbage',
    crop: 'Crystal Cabbage',
    basePlant: 'Cabbage',
    weather: 'Rainy',
    fertilizer: 'Mineral Dust',
    note: 'Stable path for mid-level players with low volatility.'
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
