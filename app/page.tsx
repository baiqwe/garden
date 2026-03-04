import CodeCard from '@/components/CodeCard';
import StockPanel from '@/components/StockPanel';
import { PROMO_CODES } from '@/lib/data';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="kicker">Decision-Support Tool</p>
        <h1>Don't just farm. Farm smart.</h1>
        <p>Track stock windows, copy working codes, and plan the highest ROI crop cycle in one place.</p>
      </section>

      <StockPanel />

      <section className="panel">
        <div className="panel-head">
          <h2>Smart Codes</h2>
          <span className="pill">Last verified manually</span>
        </div>
        <ul className="code-list">
          {PROMO_CODES.map((code) => (
            <CodeCard key={code.code} code={code} />
          ))}
        </ul>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Garden Horizons Hub',
            url: 'https://gh-tools.pages.dev',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://gh-tools.pages.dev/mutations/{search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          })
        }}
      />
    </>
  );
}
