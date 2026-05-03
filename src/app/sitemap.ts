import { MetadataRoute } from 'next';

const DOMAIN = 'https://sunitacargopackersmovers.com';

const cities = [
  "agra", "ahmedabad", "allahabad", "alwar", "ambala", "ankleshwar", "aurangabad", "banaras", 
  "bangalore", "baroda", "bhiwandi", "bhopal", "bhubaneswar", "bhuj", "bikaner", "calicut", 
  "chandigarh", "chennai", "cochin", "coimbatore", "cuttack", "dehradun", "delhi", "dwarka", 
  "faridabad", "gandhidham", "ghaziabad", "goa", "greaternoida", "gurgaon", "guwahati", 
  "gwalior", "haridwar", "hisar", "hubli", "hyderabad", "indore", "jabalpur", "jaipur", 
  "jammu", "jamshedpur", "jamnagar", "jodhpur", "kalighat", "kanpur", "kolhapur", "kolkata", 
  "korba", "kota", "kottayam", "lucknow", "ludhiana", "madurai", "manesar", "mangalore", 
  "meerut", "mumbai", "mysore", "nagpur", "nasik", "navimumbai", "neemrana", "noida", 
  "panipat", "patalganga", "patna", "pondicherry", "portblair", "pune", "raigarh", "raipur", 
  "rajkot", "ranchi", "renukoot", "rourkela", "rudrapur", "secunderabad", "shillong", 
  "siliguri", "surat", "tinsukia", "tirupur", "trichy", "trivandrum", "udaipur", "vapi", 
  "varanasi", "vijayawada", "visakhapatnam"
];

const services = [
  "home-shifting",
  "house-shifting",
  "office-relocation",
  "car-transport",
  "car-bike-transport",
  "bike-transport",
  "warehouse-storage",
  "packers-and-movers",
  "packers-movers" // Added alias for indexing consistency
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/contact',
    '/track',
    '/about',
    '/faq',
    '/blog',
    '/feedback',
    '/privacy',
    '/terms',
    '/packers-and-movers-nagpur',
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
