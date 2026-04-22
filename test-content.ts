import { generateIntro, generateLocalPricing, generateLocalizedFAQs } from './src/lib/content-engine';

const testCities = ['mumbai', 'nagpur', 'agra'];
const service = 'Packers and Movers';

testCities.forEach(city => {
  console.log(`--- Testing: ${city} ---`);
  console.log(`Intro: ${generateIntro(city, service)}`);
  console.log(`Pricing: ${generateLocalPricing(city, service).start}`);
  console.log(`FAQs: ${generateLocalizedFAQs(city, service).length} items`);
  console.log('\n');
});
