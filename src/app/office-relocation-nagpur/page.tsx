import { Metadata } from 'next';
import { Button } from '@/components/ui/Button';
import { Building2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Corporate Office Relocation Services in Nagpur | SSD Packers',
  description: 'Professional office shifting services in Nagpur. Minimize business downtime with our fast, secure, and systematic corporate relocation solutions.',
};

export default function OfficeRelocationNagpur() {
  return (
    <div className="w-full">
      <section className="relative bg-gradient-to-br from-purple-900/40 to-background pt-24 pb-20 border-b border-border text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/images/office-relocation.png" alt="Corporate Relocation Services" className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale contrast-150" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-sm font-medium text-purple-600 mb-6">
            <Building2 size={16} className="mr-2" />
            Corporate Shifting Experts
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 mt-2">
            Professional <span className="text-purple-500">Office Relocation</span> in Nagpur
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
            Zero downtime. Maximum efficiency. We orchestrate seamless corporate moves, securely transporting everything from IT infrastructure to ergonomic furniture.
          </p>
          <Link href="/contact" tabIndex={-1}>
            <Button size="lg" className="rounded-full shadow-apple bg-purple-600 hover:bg-purple-700 text-white">Consult Our Corporate Team</Button>
          </Link>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 prose prose-lg dark:prose-invert max-w-4xl">
        <h2>Minimizing Business Disruption</h2>
        <p>
          Time is money, especially when relocating an entire office or business operation. At SSD International Packers & Movers, our specialized corporate relocation division focuses on speed, precision, and security to ensure your business experiences absolutely minimal downtime.
        </p>

        <h3>IT Infrastructure & Server Relocation</h3>
        <p>
          The most sensitive part of any office move is the IT infrastructure. We deploy specially trained technicians to handle the packing, moving, and unpacking of:
        </p>
        <ul>
          <li>Servers and data center racks</li>
          <li>Desktop computers, monitors, and peripherals</li>
          <li>Printers, copiers, and networking equipment</li>
        </ul>
        <p>
          We use anti-static bubble wrap and specialized electronic crates to protect against electrostatic discharge and physical impact during transit.
        </p>

        <h2>Systematic Labeling & Floor Planning</h2>
        <p>
          An organized unpack is just as crucial as a safe pack. We coordinate extensively with your operations managers to develop a color-coded and alphanumerically indexed labeling system perfectly aligned with the floor plan of your new office in Nagpur or outstation. Employees can arrive at the new office on Monday morning to find their essential equipment already waiting at their designated desks.
        </p>

        <h3>Why Nagpur Businesses Trust Us</h3>
        <p>
          Over the past decade, we have relocated startups, corporate branches, and massive industrial setups across MIDC Butibori, Hingna MIDC, and MIHAN. Our comprehensive commercial moving services are fully insured, and our workforce operates with strict confidentiality protocols to ensure your sensitive physical documents and records remain secure.
        </p>
      </section>
    </div>
  );
}
