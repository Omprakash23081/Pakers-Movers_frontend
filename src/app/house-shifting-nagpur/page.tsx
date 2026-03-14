import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Home } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Safe House Shifting Service in Nagpur | SSD Packers',
  description: 'Looking for house shifting in Nagpur? We offer premium household goods relocation with high-quality packing materials and zero damage guarantee.',
};

export default function HouseShiftingNagpur() {
  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-blue-900/40 to-background pt-24 pb-20 border-b border-border text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/house-shifting.png" alt="House Shifting Services" className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale contrast-150" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 mb-6">
            <Home size={16} className="mr-2" />
            Specialized Home Relocation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Stress-Free <span className="text-blue-500">House Shifting</span> in Nagpur
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Moving to a new home should be exciting, not exhausting. Let our expert team handle the heavy lifting, packing, and secure transport of your household items so you can focus on settling in.
          </p>
          <Link href="/contact" tabIndex={-1}>
            <Button size="lg" className="rounded-full shadow-apple bg-blue-500 hover:bg-blue-600 text-white">Book Home Shifting Survey</Button>
          </Link>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 prose prose-lg dark:prose-invert max-w-4xl">
        <h2>Expert Household Packing and Moving Services</h2>
        <p>
          At SSD International Packers & Movers, our core specialty lies in residential relocation. We have helped thousands of families transition smoothly to their new homes across Nagpur and nationwide. We understand that your household items range from sturdy furniture to extremely fragile glassware and emotionally valuable heirlooms.
        </p>

        <h3>Our Packing Methodology</h3>
        <p>
          The secret to a successful, damage-free move lies entirely in the quality of packing. For house shifting in Nagpur, we employ a multi-layered packing approach:
        </p>
        <ul>
          <li><strong>Furniture & Appliances:</strong> First wrapped in protective fabric blankets, then layered with bubble wrap, and finally secured with corrugated sheets and shrink wrap to prevent scratches and dents.</li>
          <li><strong>Electronics (TVs, Computers):</strong> Packed in sturdy, custom-sized boxes with foam bead padding. We transport LCD/LED TVs in specialized wooden crates upon request.</li>
          <li><strong>Kitchenware:</strong> Wrapped individually in plain packing paper (to avoid newsprint ink stains) and placed in heavy-duty dish-pack boxes.</li>
          <li><strong>Wardrobe:</strong> We use tall, portable wardrobe cartons allowing clothes to remain on hangers throughout the move, preventing wrinkles and saving you hours of folding.</li>
        </ul>

        <h2>Transparent pricing for 1BHK, 2BHK, and 3BHK</h2>
        <p>
          Worried about shifting costs in Nagpur? We offer highly competitive, transparent pricing tiers based entirely on the volume of goods and the distance. There are absolutely <strong>no hidden fees</strong>, toll surprises, or mandatory tipping policies.
        </p>
        
        <h3>Local Shifting vs. Domestic Shifting</h3>
        <p>
          Whether you are moving a few blocks down from Pratap Nagar to Dharampeth, or orchestrating a major move from Nagpur to a distant metropolitan city like Delhi, we scale our services accordingly. For interstate relocations, we provide dedicated closed-container body trucks and full transit insurance options.
        </p>
      </section>
    </div>
  );
}
