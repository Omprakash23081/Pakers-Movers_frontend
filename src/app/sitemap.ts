import { MetadataRoute } from 'next';
import { cityData } from '@/lib/city-data';

const DOMAIN = 'https://sunitacargopackersmovers.com';

const cities = [
  "agra", "ahmedabad", "akola", "allahabad", "alwar", "amravati", "ambala", "ankleshwar", "aurangabad", "banaras", 
  "bangalore", "baroda", "bhandara", "bhiwandi", "bhopal", "bhubaneswar", "bhuj", "bikaner", "calicut", 
  "chandigarh", "chandrapur", "chennai", "chhindwara", "cochin", "coimbatore", "cuttack", "dehradun", "delhi", "dwarka", 
  "faridabad", "gandhidham", "ghaziabad", "goa", "gondia", "greaternoida", "gurgaon", "guwahati", 
  "gwalior", "haridwar", "hisar", "hubli", "hyderabad", "indore", "jabalpur", "jaipur", 
  "jammu", "jamshedpur", "jamnagar", "jodhpur", "kalighat", "kanpur", "kolhapur", "kolkata", 
  "korba", "kota", "kottayam", "lucknow", "ludhiana", "madurai", "manesar", "mangalore", 
  "meerut", "mumbai", "mysore", "nagpur", "nasik", "navimumbai", "neemrana", "noida", 
  "panipat", "patalganga", "patna", "pondicherry", "portblair", "pune", "raigarh", "raipur", 
  "rajkot", "ramtek", "ranchi", "renukoot", "rourkela", "rudrapur", "secunderabad", "shillong", 
  "siliguri", "surat", "tinsukia", "tirupur", "trichy", "trivandrum", "udaipur", "vapi", 
  "varanasi", "vijayawada", "visakhapatnam", "wardha", "yavatmal"
];

const services = [
  "house-shifting",
  "office-relocation",
  "car-transport",
  "bike-transport",
  "warehouse-storage",
  "packers-and-movers",
  "home-shifting",
  "car-bike-transport"
];


export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/contact',
    '/track',
    '/about',
    '/services',
    '/blog',
    '/feedback',
    '/privacy',
    '/terms',
    '/faq',
    '/packers-and-movers-nagpur',
    '/services/bike-transport',
    '/services/car-transport',
    '/services/house-shifting',
    '/services/office-relocation',
    '/services/loading-unloading',
    '/services/local-shifting',
    '/services/packing-unpacking',
    '/services/warehouse-storage',
    '/projects/premium-villa-shifting-nagpur',
    '/projects/corporate-it-office-relocation',
    '/projects/luxury-car-transport-nagpur-pune',
    '/projects/industrial-machinery-storage',
    '/blog/moving-charges-india-2024',
    '/blog/pack-electronics-for-moving',
    '/blog/iba-approved-packers-movers',
    '/blog/relocation-checklist-30-days',
    '/blog/nagpur-to-pune-shifting-guide'
  ];

  // 1. Service + City pages (492 pages)
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
    const targets = cities.filter(c => c !== from).slice(0, 5); 
    targets.forEach(to => {
      cityToCityRoutes.push(`/${from}-to-${to}-packers-movers`);
    });
  });

  // 3. Locality routes (e.g. /house-shifting-in-dharampeth-nagpur)
  const localityRoutes: string[] = [];
  services.forEach(service => {
    Object.keys(cityData).forEach(cityKey => {
      const trait = cityData[cityKey];
      if (trait.localities) {
        trait.localities.forEach(locality => {
          localityRoutes.push(`/${service}-in-${locality}-${cityKey}`);
        });
      }
    });
  });

  const allRoutes = [
    ...staticRoutes,
    ...serviceCityRoutes,
    ...cityToCityRoutes,
    ...localityRoutes
  ];

  return allRoutes.map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes('-') ? 'monthly' : 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}
