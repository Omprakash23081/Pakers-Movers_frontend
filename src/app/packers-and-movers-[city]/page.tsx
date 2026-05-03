import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  return {
    title: `Top-Rated Packers and Movers in ${city}`,
    description: `Reliable and affordable packers and movers in ${city}. Expert house shifting, office relocation, and car transport services.`,
  };
}

// Return empty array so Next.js doesn't try to build this route
// (It's now handled by the robust [slug] route)
export async function generateStaticParams() {
  return [];
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = params.city.charAt(0).toUpperCase() + params.city.slice(1);
  
  // Basic validation to prevent arbitrary city paths if needed, 
  // or allow all and rely on a CMS later.
  if (!city) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* City Hero */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Top-Rated Packers and Movers in {city}</h1>
        <p className="text-xl text-muted-foreground">
          {city}, a bustling hub of India, is constantly growing. Whether you are relocating within vibrant neighborhoods or moving out of the city, we provide a localized, expert touch. We know the local traffic patterns, building regulations, and narrow lanes, ensuring your move is swift and hassle-free.
        </p>
      </div>

      {/* Local Expertise & Routes */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Popular Intercity Routes from {city}</h3>
          <ul className="space-y-3">
            <li className="flex items-center"><span className="text-primary mr-2">»</span> {city} to Pune</li>
            <li className="flex items-center"><span className="text-primary mr-2">»</span> {city} to Mumbai</li>
            <li className="flex items-center"><span className="text-primary mr-2">»</span> {city} to Bangalore</li>
            <li className="flex items-center"><span className="text-primary mr-2">»</span> {city} to Hyderabad</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl p-8 border border-border shadow-sm">
          <h3 className="text-2xl font-semibold mb-4">Area-Specific Services</h3>
          <p className="text-muted-foreground mb-4">
            We serve all major localities within {city}, providing tailored moving solutions for both residential and commercial clients.
          </p>
          <div className="flex gap-4">
            <Link href="/services/house-shifting" className="text-primary hover:underline font-medium">House Shifting</Link>
            <Link href="/services/office-relocation" className="text-primary hover:underline font-medium">Office Relocation</Link>
            <Link href="/services/car-transport" className="text-primary hover:underline font-medium">Car Transport</Link>
          </div>
        </div>
      </div>

      {/* Pricing Estimate */}
      <div className="bg-muted rounded-2xl p-8 md:p-12 mb-20">
        <h2 className="text-3xl font-bold mb-4 text-center">Pricing Estimate ({city})</h2>
        <p className="text-center text-muted-foreground mb-8">Note: These are estimates. Contact us for exact figures based on your specific requirements.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-background p-6 rounded-lg shadow-sm border border-border text-center">
            <h4 className="font-semibold mb-2">Local 1 BHK</h4>
            <p className="text-primary font-bold">₹4,000 - ₹6,500</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm border border-border text-center">
            <h4 className="font-semibold mb-2">Local 2 BHK</h4>
            <p className="text-primary font-bold">₹6,000 - ₹9,500</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm border border-border text-center">
            <h4 className="font-semibold mb-2">{city} to Pune (1 BHK)</h4>
            <p className="text-primary font-bold">₹12,000 - ₹18,000</p>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm border border-border text-center">
            <h4 className="font-semibold mb-2">Car Transport</h4>
            <p className="text-primary font-bold">₹8,000 - ₹12,000</p>
          </div>
        </div>
      </div>

      {/* Local FAQs */}
      <div className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Location-Specific FAQs</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">How much advance notice do you need for a move within {city}?</h4>
            <p className="text-muted-foreground">We recommend 48 hours, but we also accommodate urgent next-day moves depending on fleet availability.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Do you have permissions to enter tech parks and SEZs?</h4>
            <p className="text-muted-foreground">Yes, we handle all necessary gate passes and compliance for major tech parks and business hubs.</p>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-primary/5 rounded-2xl p-8 text-center max-w-4xl mx-auto border border-primary/10">
        <div className="text-4xl text-primary mb-4">"</div>
        <p className="text-xl italic mb-6">
          Moving near the busy market area seemed like a nightmare, but the team handled the narrow streets and heavy lifting perfectly. Highly recommended for anyone in {city}!
        </p>
        <p className="font-bold">- Happy Customer, {city}</p>
      </div>

    </div>
  );
}
