import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.canonicalUrl}/`, lastModified: new Date() },
    { url: `${siteConfig.canonicalUrl}/about`, lastModified: new Date() },
    { url: `${siteConfig.canonicalUrl}/products`, lastModified: new Date() },
    { url: `${siteConfig.canonicalUrl}/services`, lastModified: new Date() },
    { url: `${siteConfig.canonicalUrl}/projects`, lastModified: new Date() },
    { url: `${siteConfig.canonicalUrl}/contact`, lastModified: new Date() }
  ];
}
