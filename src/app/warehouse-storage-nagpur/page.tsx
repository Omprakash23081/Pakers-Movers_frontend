import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Warehouse } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Secure Warehouse Storage in Nagpur | SSD Packers',
  description: 'Premium warehouse and household goods storage in Nagpur. Short-term and long-term secure storage facilities with 24/7 CCTV surveillance.',
};

export default function WarehouseStorageNagpur() {
  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-amber-900/40 to-background pt-24 pb-20 border-b border-border text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/warehouse-storage.png" alt="Warehouse and Storage Services" className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale contrast-150" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-sm font-medium text-amber-600 mb-6">
            <Warehouse size={16} className="mr-2" />
            24/7 Secure Facility
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 mt-2">
            Premium <span className="text-amber-500">Warehouse Storage</span> in Nagpur
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Running out of space or moving abroad temporarily? Store your household items, vehicles, and commercial inventory in our highly secure, dry, pest-controlled warehouse facility.
          </p>
          <Link href="/contact" tabIndex={-1}>
            <Button size="lg" className="rounded-full shadow-apple bg-amber-500 hover:bg-amber-600 text-white">Book Storage Space</Button>
          </Link>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 prose prose-lg dark:prose-invert max-w-4xl">
        <h2>Flexible & Secure Storage Solutions</h2>
        <p>
          There are multiple situations where moving into a new location immediately isn&apos;t feasible. Perhaps your new apartment isn&apos;t quite ready, you are renovating your current home, or you&apos;re undertaking a temporary job assignment abroad. The warehouse and storage services at SSD International Packers & Movers provide the perfect, stress-free bridge for your possessions.
        </p>

        <h3>Features of Our Warehouse in Nagpur</h3>
        <p>
          We do not just lock your items in a dusty shed. Our modern warehousing infrastructure in Nagpur is designed to preserve the condition of your valuable goods for weeks, months, or years:
        </p>
        <ul>
          <li><strong>24/7 CCTV Surveillance & Security:</strong> Complete perimeter monitoring and manned security checkpoints round the clock.</li>
          <li><strong>Pest & Climate Control measures:</strong> Regular fumigation schedules prevent rodents, termites, and other pests from accessing your belongings. We ensure an extremely dry environment to prevent mold and mildew on furniture and fabrics.</li>
          <li><strong>Palletized Storage System:</strong> Items do not rest on the floor; they are securely palletized, shrink-wrapped, and barcoded for inventory management, ensuring nothing ever gets misplaced.</li>
          <li><strong>Fire Mitigation Systems:</strong> The facility is rigorously equipped with modern smoke detectors and sprinkler systems to combat fire hazards.</li>
        </ul>

        <h2>Complete Inventory Management</h2>
        <p>
          When you hand your items over for storage, we don&apos;t simply take them. Our specialized documentation team prepares a comprehensive, itemized inventory list detailing the condition of every box and unboxed furniture piece. You receive a verified copy. Once you request delivery back to your final destination, we pull those specific pallets, securely load them into our trucks, and safely unpack them inside your newly designated home—complete end-to-end service.
        </p>
      </section>
    </div>
  );
}
