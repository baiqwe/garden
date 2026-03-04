import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import Script from 'next/script';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://gh-tools.pages.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Garden Horizons Hub | Stock, Mutations, ROI Tools',
    template: '%s | GH.Tools'
  },
  description: 'Near real-time stock tracker, mutation guides, and ROI calculator for Garden Horizons players.',
  keywords: [
    'Garden Horizons stock',
    'Garden Horizons codes',
    'Garden Horizons mutation guide',
    'Garden Horizons ROI calculator',
    'Garden Horizons Dawn Fruit',
    'Garden Horizons Bamboo mutation',
    'Roblox Garden Horizons wiki tool'
  ],
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2f7d4f' }]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Garden Horizons Hub',
    description: 'Farm smart with stock timers, mutation paths, and ROI tools.',
    type: 'website',
    url: siteUrl
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garden Horizons Hub',
    description: 'Near real-time stock tracker, mutation guides, and ROI calculator.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
        <Script id="global-structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                name: 'GH.Tools',
                url: siteUrl,
                email: 'support@gh.tools'
              },
              {
                '@type': 'WebSite',
                name: 'Garden Horizons Hub',
                url: siteUrl
              }
            ]
          })}
        </Script>
        <header className="site-header">
          <div className="container nav-wrap">
            <Link href="/" className="brand">GH.Tools</Link>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/stock-history">Stock History</Link>
              <Link href="/mutations">Mutations</Link>
              <Link href="/calculator">Calculator</Link>
              <Link href="/guides">Guides</Link>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="site-footer">
          <div className="container footer-links">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
