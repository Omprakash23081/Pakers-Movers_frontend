import { MetadataRoute } from 'next';

const DOMAIN = 'https://ssdPackersnagpur.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/packers-and-movers-nagpur',
    '/house-shifting-nagpur',
    '/office-relocation-nagpur',
    '/car-bike-transport-nagpur',
    '/warehouse-storage-nagpur',
    '/contact',
    '/track',
    '/about',
    '/faq',
  ];

  return routes.map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
