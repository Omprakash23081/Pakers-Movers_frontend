import { Metadata } from 'next';
import ServiceCards from '../../components/home/ServiceCards';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/Button';


export const metadata: Metadata = {
  title: 'Our Shifting & Relocation Services | Sunita Cargo Packers Movers',
  description: 'Explore the complete range of packing and moving services offered by Sunita Cargo Packers Movers. We offer home shifting, office relocation, car transport, bike transport, and warehouse storage solutions.',
  alternates: {
    canonical: 'https://sunitacargopackersmovers.com/services',
  }
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] min-h-[300px] flex items-end mb-12 overflow-hidden">
        <Image 
          src="/images/hero-bg.png" 
          alt="Sunita Cargo Services" 
          fill 
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-transparent h-40 z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20 pb-12">
           <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-6">
                Premium Relocation Solutions
              </div>
              <h1 id="services-main-title" className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-tight text-white drop-shadow-lg">
                Our Shifting <br /><span className="text-primary">Services</span>
              </h1>
           </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6">
        <ServiceCards />

        {/* CTA Section */}
        <section className="text-center mt-20 pb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-black mb-6">Need a Customized Moving Plan?</h2>
          <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
            Whether you have specialized shifting needs or want a combined package, our team is here to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="rounded-full shadow-apple h-14 px-8 text-lg font-bold cursor-pointer" id="services-cta-quote">
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-white/10 backdrop-blur-md h-14 px-8 text-lg font-bold border-white/20 text-white hover:bg-white/20 transition-all" id="services-cta-call">
              <a href="tel:+917387661300">Call: +91 7387661300</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
