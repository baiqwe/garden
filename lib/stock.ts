import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { StockSnapshot } from './types';

const fallbackStock: StockSnapshot = {
  source: 'Static Fallback',
  lastUpdated: 'Unknown',
  nextRestockAt: new Date(Date.now() + 20 * 60 * 1000).toISOString(),
  confidence: 0.8,
  items: []
};

export async function getInitialStock(): Promise<StockSnapshot> {
  try {
    const filePath = path.join(process.cwd(), 'public/data/current-stock.json');
    const raw = await readFile(filePath, 'utf-8');
    const parsed = JSON.parse(raw) as StockSnapshot;
    if (!parsed || !Array.isArray(parsed.items)) return fallbackStock;
    return parsed;
  } catch {
    return fallbackStock;
  }
}
