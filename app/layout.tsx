import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  metadataBase: new URL('https://gh-tools.pages.dev'),
  title: 'Garden Horizons Hub | Stock, Mutations, ROI Tools',
  description: 'Near real-time stock tracker, mutation guides, and ROI calculator for Garden Horizons players.',
  openGraph: {
    title: 'Garden Horizons Hub',
    description: 'Farm smart with stock timers, mutation paths, and ROI tools.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/" className="brand">GH.Tools</Link>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/stock-history">Stock History</Link>
              <Link href="/mutations">Mutations</Link>
              <Link href="/calculator">Calculator</Link>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
