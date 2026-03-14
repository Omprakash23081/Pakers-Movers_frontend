import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Truck } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Safe Car and Bike Transport Service in Nagpur | SSD Packers',
  description: 'Looking to transport your car or bike from Nagpur? We offer secure vehicle shifting with GPS tracking and specialized car carrier trucks across India.',
};

export default function CarBikeTransportNagpur() {
  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-emerald-900/40 to-background pt-24 pb-20 border-b border-border text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/vehicle-transport.png" alt="Vehicle Transport Services" className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale contrast-150" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 mb-6">
            <Truck size={16} className="mr-2" />
            Vehicle Relocation Experts
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 mt-2">
            Secure <span className="text-emerald-500">Car & Bike Transport</span> from Nagpur
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Transporting your vehicle over long distances is stressful. We remove that stress with verified drivers, specialized fleet carriers, and scratch-free, fully insured delivery.
          </p>
          <Link href="/contact" tabIndex={-1}>
            <Button size="lg" className="rounded-full shadow-apple bg-emerald-500 hover:bg-emerald-600 text-white">Get Vehicle Transport Quote</Button>
          </Link>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 prose prose-lg dark:prose-invert max-w-4xl">
        <h2>Expert Vehicle Logistics in India</h2>
        <p>
          Your vehicle is not just an asset; it&apos;s a daily necessity and a source of joy. Whether you need to transport a sedan, an SUV, a luxury car, or a motorcycle from Nagpur to another city, SSD International Packers & Movers ensures your vehicle reaches its destination exactly the way it was handed over to us.
        </p>

        <h3>Bike Transport Process in Nagpur</h3>
        <p>
          Transporting a two-wheeler safely over highways requires meticulous preparation. We ensure zero scratches on the delicate paint or damage to the mirrors and headlights through our multi-step bike packaging process:
        </p>
        <ol>
          <li>Complete protective wrapping employing four layers of bubble wrap and corrugated cardboard around the tank, tail section, and fenders.</li>
          <li>Securing the front and rear tires firmly.</li>
          <li>We only use enclosed transport trucks specifically fitted with bike-locking rails, preventing any movement during transit.</li>
        </ol>

        <h2>Specialized Car Carrier Trucks</h2>
        <p>
          For four-wheelers, driving long distances across state lines can add massive wear-and-tear and empty your wallet with toll and fuel charges. It is also risky.
        </p>
        <p>
          Instead, we use dedicated, enclosed, and open multi-car carrier trailers, the exact same variants utilized by major automotive manufacturers. Your car is securely driven up specialized ramps, locked securely at all four wheels, to prevent any suspension damage. Furthermore, every car transported is covered by a rigorous vehicle condition report signed before transit and upon delivery at your doorstep, maximizing transparency and accountability.
        </p>
      </section>
    </div>
  );
}
