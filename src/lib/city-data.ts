/**
 * City Classification and Metadata for Dynamic SEO Content Generation
 */

export type CityTier = 'metro' | 'tier1' | 'tier2' | 'industrial' | 'tourist';

export interface CityTrait {
  name: string;
  tier: CityTier;
  landmarks: string[];
  neighbors: string[];
  weather?: string;
  trafficLevel: 'high' | 'medium' | 'low';
}

export const cityData: Record<string, CityTrait> = {
  // Metro Cities
  mumbai: {
    name: 'Mumbai',
    tier: 'metro',
    landmarks: ['Gateway of India', 'Marine Drive', 'Bandra-Worli Sea Link'],
    neighbors: ['Thane', 'Navi Mumbai', 'Borivali'],
    weather: 'humid monsoon',
    trafficLevel: 'high'
  },
  delhi: {
    name: 'Delhi',
    tier: 'metro',
    landmarks: ['Red Fort', 'India Gate', 'Qutub Minar'],
    neighbors: ['Noida', 'Gurgaon', 'Faridabad'],
    weather: 'extreme summers',
    trafficLevel: 'high'
  },
  bangalore: {
    name: 'Bangalore',
    tier: 'metro',
    landmarks: ['Lalbagh', 'Cubbon Park', 'Vidhana Soudha'],
    neighbors: ['Whitefield', 'Electronic City', 'Indiranagar'],
    weather: 'pleasant',
    trafficLevel: 'high'
  },
  hyderabad: {
    name: 'Hyderabad',
    tier: 'metro',
    landmarks: ['Charminar', 'Golconda Fort', 'Cyber Towers'],
    neighbors: ['Gachibowli', 'Secunderabad', 'Madhapur'],
    trafficLevel: 'high'
  },
  pune: {
    name: 'Pune',
    tier: 'metro',
    landmarks: ['Shaniwar Wada', 'Aga Khan Palace', 'Hinjewadi IT Park'],
    neighbors: ['Pimpri-Chinchwad', 'Kothrud', 'Wagholi'],
    trafficLevel: 'high'
  },
  nagpur: {
    name: 'Nagpur',
    tier: 'tier1',
    landmarks: ['Zero Mile', 'Futala Lake', 'Deekshabhoomi'],
    neighbors: ['Wadi', 'Wardha Road', 'Manish Nagar'],
    weather: 'severe heat',
    trafficLevel: 'medium'
  },
  // Add major Tier 1
  jaipur: {
    name: 'Jaipur',
    tier: 'tier1',
    landmarks: ['Hawa Mahal', 'Amber Fort', 'City Palace'],
    neighbors: ['Mansarovar', 'Malviya Nagar'],
    trafficLevel: 'medium'
  },
  lucknow: {
    name: 'Lucknow',
    tier: 'tier1',
    landmarks: ['Bara Imambara', 'Rumi Darwaza', 'Hazratganj'],
    neighbors: ['Gomti Nagar', 'Alambagh'],
    trafficLevel: 'medium'
  },
  indore: {
    name: 'Indore',
    tier: 'tier1',
    landmarks: ['Rajwada', 'Lal Bagh Palace', 'Sarafa Bazaar'],
    neighbors: ['Vijay Nagar', 'Rajendra Nagar'],
    trafficLevel: 'medium'
  }
};

// Default traits for cities not explicitly defined
export const getDefaultTraits = (cityName: string): CityTrait => ({
  name: cityName.charAt(0).toUpperCase() + cityName.slice(1),
  tier: 'tier2',
  landmarks: ['local landmarks'],
  neighbors: ['nearby localities'],
  trafficLevel: 'medium'
});

export const getCityTrait = (citySlug: string): CityTrait => {
  return cityData[citySlug] || getDefaultTraits(citySlug);
};
