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
    host: 'https://gardenhorizonsstock.org',
    sitemap: 'https://gardenhorizonsstock.org/sitemap.xml'
  };
}
