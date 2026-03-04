import type { MetadataRoute } from 'next';
import { MUTATIONS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gardenhorizonsstock.org';
  const core = [
    '/',
    '/calculator',
    '/stock-history',
    '/mutations',
    '/guides',
    '/guides/how-to-get-dawn-fruit',
    '/guides/best-seeds-by-level',
    '/guides/botanist-leveling-guide',
    '/guides/stock-reset-pattern',
    '/about',
    '/contact',
    '/privacy',
    '/terms'
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
  const mutationPages = MUTATIONS.map((m) => ({
    url: `${base}/mutations/${m.slug}`,
    lastModified: new Date()
  }));
  return [...core, ...mutationPages];
}
