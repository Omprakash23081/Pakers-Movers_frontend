import { getCityTrait, CityTrait } from './city-data';

export const generateIntro = (citySlug: string, service: string): string => {
  const trait = getCityTrait(citySlug);
  const cityName = trait.name;
  
  const intros = {
    metro: [
      `Moving within the high-rise landscape of ${cityName} requires expert planning and precision. As an **IBA-approved** and **ISO 9001:2015 certified** company, Sunita Cargo Packers Movers specializes in navigating the complex logistics of ${cityName}'s premium residential and commercial hubs.`,
      `In a fast-paced metropolis like ${cityName}, every minute counts. Our premium ${service} in ${cityName} ensures a swift, stress-free relocation with zero downtime for your family or business.`,
      `${cityName}'s unique urban structure demands specialized moving equipment. Whether you are shifting near ${trait.landmarks[0]} or to the busy suburbs like ${trait.neighbors[0]}, we are your reliable, **licensed** partner.`
    ],
    tier1: [
      `As one of the fastest-growing hubs, ${cityName} demands relocation services that are both efficient and affordable. Sunita Cargo Packers Movers brings 15+ years of trust and **IBA-approved reliability** to your doorstep in ${cityName}.`,
      `Relocating in ${cityName}? From the traditional streets near ${trait.landmarks[0]} to modern townships in ${trait.neighbors[0]}, our professional team handles your valuables with mother-like care.`,
      `Sunita Cargo is the top-rated choice for ${service} in ${cityName}. We understand the local pulse of ${cityName} and provide tailored shifting solutions for local homes and offices.`
    ],
    tier2: [
      `Sunita Cargo Packers Movers is proud to bring international-standard, **ISO-certified** relocation services to the heart of ${cityName}. Safe, secure, and always on time.`,
      `Looking for reliable ${service} in ${cityName}? We offer professional packing, secure transport, and doorstep delivery across all localities of ${cityName}.`,
      `Whether you are moving within ${cityName} or shifting to a different state, our dedicated ${cityName} team ensures a damage-free experience every single time.`
    ],
    industrial: [
      `In the industrial heartland of ${cityName}, heavy-duty relocation requires specialized skills. Sunita Cargo provides **IBA-approved** industrial-grade packing and logistics in ${cityName}.`,
      `Strategic moving for ${cityName}'s growing business sector. We handle heavy machinery, office assets, and residential shifts with equal expertise.`
    ],
    tourist: [
      `Planning a move to the beautiful city of ${cityName}? Sunita Cargo ensures your transition to this scenic location is as beautiful as the destination itself.`,
      `Relocating personal effects or vacation home assets in ${cityName}? Our specialized team handles delicate items with extreme precision.`
    ]
  };

  const pool = intros[trait.tier] || intros.tier2;
  // Simple deterministic picker based on city name length to keep it consistent but varied
  const index = citySlug.length % pool.length;
  return pool[index];
};

export const generateLocalPricing = (citySlug: string, service: string) => {
  const trait = getCityTrait(citySlug);
  
  // Base rates that vary slightly by city tier
  const tiers = {
    metro: { min: 4500, max: 18000 },
    tier1: { min: 3800, max: 15000 },
    tier2: { min: 3200, max: 12000 },
    industrial: { min: 4000, max: 16000 },
    tourist: { min: 3500, max: 14000 }
  };

  const current = tiers[trait.tier] || tiers.tier2;
  return {
    start: `₹${current.min.toLocaleString()}`,
    range: `₹${current.min.toLocaleString()} - ₹${current.max.toLocaleString()}`,
    note: `Actual costs in ${trait.name} may vary based on item volume and lift availability.`
  };
};

export const generateLocalizedFAQs = (citySlug: string, service: string) => {
  const trait = getCityTrait(citySlug);
  const cityName = trait.name;

  const baseFaqs = [
    {
      q: `What are the charges for ${service} in ${cityName}?`,
      a: `For local shifts in ${cityName}, prices typically range from ${generateLocalPricing(citySlug, service).range}. Intercity moves from ${cityName} depend on distance and vehicle type.`
    },
    {
      q: `Do you provide insurance for relocations in ${cityName}?`,
      a: `Yes, Sunita Cargo provides comprehensive transit insurance for all moves in ${cityName}. This covers unexpected damages during loading, transit, and unloading.`
    }
  ];

  const localizedFaqs = {
    metro: [
      {
        q: `How do you handle moves in ${cityName}'s high-traffic areas?`,
        a: `In ${cityName}, we schedule moves during 'No-Entry' free hours and use smaller feeder vehicles for narrow lanes in areas like ${trait.neighbors[0]}.`
      },
      {
        q: `Are your staff trained for ${cityName}'s high-rise apartment rules?`,
        a: `Absolutely. We are familiar with the society protocols of major residential complexes in ${cityName} and ensure minimal disturbance to your neighbors.`
      }
    ],
    tier1: [
      {
        q: `Can you deliver to remote areas near ${cityName}?`,
        a: `Yes, we have a strong network covering all outskirts of ${cityName}, including ${trait.neighbors[0]} and surrounding districts.`
      }
    ]
  };

  const pool = localizedFaqs[trait.tier] || [];
  return [...baseFaqs, ...pool];
};
