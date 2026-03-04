import type { MetadataRoute } from 'next';
import { MUTATIONS } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://gh-tools.pages.dev';
  const core = ['/', '/calculator', '/stock-history', '/mutations'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
  const mutationPages = MUTATIONS.map((m) => ({
    url: `${base}/mutations/${m.slug}`,
    lastModified: new Date()
  }));
  return [...core, ...mutationPages];
}
