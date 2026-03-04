import fs from 'node:fs/promises';

const FEED_URL = process.env.STOCK_FEED_URL;
const OUTPUT = 'public/data/current-stock.json';

if (!FEED_URL) {
  console.error('Missing STOCK_FEED_URL env variable.');
  process.exit(1);
}

const res = await fetch(FEED_URL, {
  headers: {
    Accept: 'application/json'
  }
});

if (!res.ok) {
  console.error(`Fetch failed with status ${res.status}`);
  process.exit(1);
}

const payload = await res.json();

if (!payload || typeof payload !== 'object' || !Array.isArray(payload.items)) {
  console.error('Invalid feed format. Expect object with items[] field.');
  process.exit(1);
}

const normalized = {
  source: payload.source ?? 'External Feed',
  lastUpdated: payload.lastUpdated ?? new Date().toISOString(),
  nextRestockAt: payload.nextRestockAt ?? new Date(Date.now() + 20 * 60 * 1000).toISOString(),
  confidence: Number(payload.confidence ?? 0.85),
  items: payload.items
};

await fs.writeFile(OUTPUT, JSON.stringify(normalized, null, 2) + '\n');
console.log(`Updated ${OUTPUT} from feed.`);
