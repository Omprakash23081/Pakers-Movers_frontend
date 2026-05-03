import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our 10+ years of excellence in the packers and movers industry.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl text-muted-foreground mb-16">
          We do not just move boxes; we move your memories with care.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            With over 10 years of excellence in the logistics and relocation industry, we have built a reputation for reliability, safety, and transparency. Starting with a single truck, we have grown into a fleet of specialized carriers serving thousands of happy families and businesses.
          </p>
          <p className="text-muted-foreground">
            Our commitment is simple: treat every item as if it were our own. From delicate glassware to heavy office servers, our trained professionals handle it all with precision and care.
          </p>
        </div>
        <div className="bg-muted rounded-xl p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-semibold mb-6">Why We Stand Out</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>In-House Fleet:</strong> We do not outsource. Your belongings travel in our own GPS-tracked, weather-proof trucks.</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Trained Professionals:</strong> Our staff undergoes rigorous training in packing, loading, and customer service.</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Transparent Pricing:</strong> Accurate quotes with no last-minute surprises.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
