import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/']
      }
    ],
    host: 'https://gh-tools.pages.dev',
    sitemap: 'https://gh-tools.pages.dev/sitemap.xml'
  };
}
