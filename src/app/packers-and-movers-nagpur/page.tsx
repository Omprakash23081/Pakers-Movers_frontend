import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Top Rated Packers and Movers in Nagpur | SSD International',
  description: 'Hire the best packers and movers in Nagpur for safe, affordable, and fast shifting. Get a free quote today for local or outstation relocation.',
  openGraph: {
    title: 'Top Rated Packers and Movers in Nagpur | SSD International',
    description: 'Hire the best packers and movers in Nagpur for safe, affordable, and fast shifting. Get a free quote today.',
    url: 'https://ssdPackersnagpur.in/packers-and-movers-nagpur',
  }
};

export default function PackersAndMoversNagpur() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-background pt-20 pb-16 border-b border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <Truck size={16} className="mr-2" />
            #1 Packers & Movers in Nagpur
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Reliable <span className="text-primary">Packers and Movers</span> in Nagpur
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Experience absolute peace of mind with SSD International Packers & Movers. Whether you are moving locally within Nagpur or shifting to another state, our end-to-end relocation services guarantee 100% safety of your belongings.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="rounded-full shadow-apple">Get a Free Estimate</Button>
            <Button size="lg" variant="outline" className="rounded-full bg-white/50 backdrop-blur-sm">Call Now: +91 7387661300</Button>
          </div>
        </div>
      </section>

      {/* Main Content Area - SEO Rich Text */}
      <section className="py-16 container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column (Main SEO Content) */}
        <div className="md:col-span-2 space-y-8 prose prose-lg dark:prose-invert max-w-none">
          <h2>Why Choose Our Packers and Movers Service in Nagpur?</h2>
          <p>
            Relocating your home or business can be a daunting task, but with the right team, it doesn&apos;t have to be. SSD International Packers & Movers has built a reputation over 15 years as the most trusted logistics and relocation partner in Nagpur. We understand the emotional and financial value of your belongings.
          </p>

          <h3>Comprehensive Relocation Solutions</h3>
          <p>
            From the initial pre-move survey to unpacking the last box at your new destination, our process is meticulously planned. We employ highly trained packing professionals who utilize premium materials like multi-layer bubble wrap, edge protectors, corrugated boxes, and waterproof film to ensure zero transit damage.
          </p>
          
          <ul className="list-none space-y-3 p-0">
            {['Expertise in multi-story apartment shifting', 'Fleet of closed container trucks equipped with GPS tracking', 'Specialized handling for fragile artwork, pianos, and antiques', 'Transparent pricing structure with absolutely no hidden charges'].map(item => (
              <li key={item} className="flex gap-3 text-lg items-start">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3>Local & Outstation Moving Experts</h3>
          <p>
            <strong>Local Shifting in Nagpur:</strong> Need to move across town? We specialize in quick, same-day intra-city relocations covering areas like Dharampeth, Sadar, Ramdaspeth, Manish Nagar, and Wardhaman Nagar.
            <br/><br/>
            <strong>Intercity / Outstation Shifting:</strong> Moving from Nagpur to Mumbai, Pune, Delhi, Bangalore, or anywhere else in India? Our extensive national network ensures your household goods are delivered smoothly, with real-time tracking available throughout the journey.
          </p>

          <h2>Our Step-by-Step Moving Process</h2>
          <ol>
            <li><strong>Free Consultation & Survey:</strong> We assess the volume of goods to provide an accurate estimate.</li>
            <li><strong>Professional Packing:</strong> On moving day, our team arrives with all necessary supplies to pack your items securely.</li>
            <li><strong>Safe Loading:</strong> Using proper equipment and techniques, we load everything into our specialized moving trucks.</li>
            <li><strong>Transit with GPS Tracking:</strong> Our experienced drivers navigate the best routes, while you can track the vehicle.</li>
            <li><strong>Unloading & Setup:</strong> We safely unload, place furniture where you want it, and handle basic unpacking.</li>
          </ol>
        </div>

        {/* Right Column (Sidebar / CTA / Info) */}
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/20 sticky top-28">
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4">Request a Callback</h3>
              <p className="text-sm text-muted-foreground mb-4">Leave your number and our relocation expert will call you back within 5 minutes.</p>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-border bg-background" required />
                <input type="tel" placeholder="Mobile Number" className="w-full p-3 rounded-lg border border-border bg-background" required />
                <Button className="w-full">Submit Request</Button>
              </form>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="text-green-500" size={32} />
                <h3 className="font-bold text-xl">100% Insured Moves</h3>
              </div>
              <p className="text-sm text-muted-foreground">We offer comprehensive transit insurance to protect your investment against unforeseen circumstances.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Schema Markup for LocalBusiness/Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MovingCompany",
            "name": "SSD International Packers & Movers",
            "image": "https://ssdPackersnagpur.in/logo.png",
            "url": "https://ssdPackersnagpur.in",
            "telephone": "+91 7387661300",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No. 78 B, Sariputra Housing society, Ganesh Nagar, Dawalameti, Amravati Road, Wadi",
              "addressLocality": "Nagpur",
              "addressRegion": "MH",
              "postalCode": "440023",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 21.1458,
              "longitude": 79.0882
            },
            "priceRange": "₹3000 - ₹50000",
            "description": "Best Packers and Movers in Nagpur offering local and outstation shifting services."
          })
        }}
      />
    </div>
  );
}
