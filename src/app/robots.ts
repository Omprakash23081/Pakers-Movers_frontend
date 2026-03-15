import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/', '/track/details/'],
    },
    sitemap: 'https://sunitacargopackersmovers.com/sitemap.xml',
  };
}
