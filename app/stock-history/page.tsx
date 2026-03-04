import type { Metadata } from 'next';
import LongformBlock from '@/components/LongformBlock';
import { STOCK_HISTORY } from '@/lib/data';
import { COMMON_EEAT_PARAGRAPHS, PAGE_NARRATIVES } from '@/lib/pageNarratives';

export const metadata: Metadata = {
  title: 'Stock History (24h)',
  description: 'View last 24h stock frequency to anticipate rare seed windows.',
  keywords: ['Garden Horizons stock history', 'Garden Horizons restock pattern', 'Dawn Fruit stock frequency'],
  alternates: {
    canonical: '/stock-history'
  }
};

export default function StockHistoryPage() {
  return (
    <section className="panel prose">
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
      <p>
        Combine this table with the <a href="/">live stock tracker</a> for entry timing and use the{' '}
        <a href="/calculator">ROI calculator</a> to verify if a rare purchase is still profitable for your current
        plot count.
      </p>
      <LongformBlock
        title={PAGE_NARRATIVES.stock.title}
        paragraphs={[...PAGE_NARRATIVES.stock.paragraphs, ...COMMON_EEAT_PARAGRAPHS]}
      />
    </section>
  );
}
