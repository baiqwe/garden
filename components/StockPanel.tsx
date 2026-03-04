'use client';

import { useEffect, useMemo, useState } from 'react';
import type { StockSnapshot } from '@/lib/types';

const POLL_INTERVAL_MS = 90_000;

const rarityStyle: Record<string, string> = {
  common: 'var(--common)',
  rare: 'var(--rare)',
  epic: 'var(--epic)',
  legendary: 'var(--legendary)'
};

const relatedLink = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('bamboo')) return '/guides/bamboo-economy-analysis';
  if (n.includes('mango')) return '/mutations/dawn-fruit';
  if (n.includes('radiant') || n.includes('petal')) return '/guides/radiant-petal-mutation';
  return '';
};

const formatRemaining = (ms: number) => {
  if (ms <= 0) return 'Restocking now';
  const total = Math.floor(ms / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}m ${s}s`;
};

export default function StockPanel({ initialSnapshot }: { initialSnapshot: StockSnapshot }) {
  const [snapshot, setSnapshot] = useState<StockSnapshot>(initialSnapshot);
  const [now, setNow] = useState<number>(Date.now());
  const [error, setError] = useState<string>('');

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const res = await fetch('/data/current-stock.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to load stock data');
        const data = (await res.json()) as StockSnapshot;
        if (mounted) {
          setSnapshot(data);
          setError('');
        }
      } catch {
        if (mounted) {
          setError('Unable to refresh latest stock data. Showing last available snapshot.');
        }
      }
    };

    void load();
    const polling = window.setInterval(load, POLL_INTERVAL_MS);
    const timer = window.setInterval(() => setNow(Date.now()), 1000);

    return () => {
      mounted = false;
      window.clearInterval(polling);
      window.clearInterval(timer);
    };
  }, []);

  const remaining = useMemo(() => {
    return formatRemaining(new Date(snapshot.nextRestockAt).getTime() - now);
  }, [snapshot, now]);

  return (
    <section className="panel">
      <div className="panel-head">
        <h2>Live Stock Tracker</h2>
        <span className="pill">Refresh every 90s</span>
      </div>
      {error && <p className="muted">{error}</p>}
      <div className="meta-grid">
        <p><strong>Last Updated:</strong> {snapshot.lastUpdated}</p>
        <p><strong>Next Restock In:</strong> {remaining}</p>
        <p><strong>Source:</strong> {snapshot.source}</p>
        <p><strong>Confidence:</strong> {(snapshot.confidence * 100).toFixed(0)}%</p>
      </div>
      <ul className="stock-list">
        {snapshot.items.map((item) => (
          <li key={item.name} className="stock-item">
            <div>
              <strong>{item.name}</strong>
              <p className="muted">Buy {item.buyPrice} / Sell {item.expectedSellPrice}</p>
              {relatedLink(item.name) && (
                <p className="muted">
                  <a href={relatedLink(item.name)}>View strategy</a>
                </p>
              )}
            </div>
            <div className="right">
              <span className="rarity" style={{ backgroundColor: rarityStyle[item.rarity] }}>{item.rarity}</span>
              <span className="muted">{item.growthMinutes}m growth</span>
            </div>
          </li>
        ))}
      </ul>
      <p className="muted">
        Data is near real-time with typical delay of 2-10 minutes. Found wrong info?
        <a href="https://forms.gle/your-form-link" target="_blank" rel="noreferrer"> Submit correction</a>.
      </p>
    </section>
  );
}
