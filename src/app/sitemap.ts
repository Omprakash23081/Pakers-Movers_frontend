import { MetadataRoute } from 'next';

const DOMAIN = 'https://sunitacargopackersmovers.com';

const cities = [
  "delhi", "mumbai", "pune", "bangalore", "hyderabad", "chennai", "kolkata",
  "ahmedabad", "surat", "lucknow", "kanpur", "nagpur", "indore", "bhopal",
  "patna", "jaipur", "agra", "varanasi", "meerut", "noida", "gurgaon"
];

const services = [
  "home-shifting",
  "office-relocation",
  "car-transport",
  "bike-transport",
  "warehouse-storage",
  "packers-and-movers"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/contact',
    '/track',
    '/about',
    '/faq',
  ];

  // 1. Service + City pages (126 pages)
  const serviceCityRoutes: string[] = [];
  services.forEach(service => {
    cities.forEach(city => {
      serviceCityRoutes.push(`/${service}-${city}`);
    });
  });

  // 2. City to City routes (Top 400+ intercity routes)
  const cityToCityRoutes: string[] = [];
  cities.forEach(from => {
    // Generate top routes from each city (limiting to first 5 for each to keep sitemap manageable but impactful)
    // In a real scenario, you could list all 400+
    const targets = cities.filter(c => c !== from).slice(0, 5); 
    targets.forEach(to => {
      cityToCityRoutes.push(`/${from}-to-${to}-packers-movers`);
    });
  });

  const allRoutes = [
    ...staticRoutes,
    ...serviceCityRoutes,
    ...cityToCityRoutes
  ];

  return allRoutes.map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('-') ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}
