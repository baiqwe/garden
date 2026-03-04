import type { Metadata } from 'next';
import { STOCK_HISTORY } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Stock History (24h) | Garden Horizons Hub',
  description: 'View last 24h stock frequency to anticipate rare seed windows.'
};

export default function StockHistoryPage() {
  return (
    <section className="panel">
      <h1>Stock History (Last 24 Hours)</h1>
      <p className="muted">Use this page to estimate when rare seeds are likely to reappear.</p>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Seed</th>
              <th>Rarity</th>
              <th>Appearances</th>
              <th>Avg Gap (min)</th>
            </tr>
          </thead>
          <tbody>
            {STOCK_HISTORY.map((row) => (
              <tr key={row.seed}>
                <td>{row.seed}</td>
                <td>{row.rarity}</td>
                <td>{row.appearances}</td>
                <td>{row.avgGapMinutes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
