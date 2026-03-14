'use client';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Truck, Home, Building2, Warehouse, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { TiltCard } from '@/components/ui/TiltCard';
const services = [
  {
    title: 'House Shifting',
    description: 'Experience stress-free home relocation. Our expert team handles everything from secure multi-layer packing to careful transportation and unpacking at your new home.',
    icon: Home,
    href: '/house-shifting-nagpur',
    color: 'text-primary',
    bg: 'bg-primary/10',
    imageUrl: '/images/house-shifting.png'
  },
  {
    title: 'Office Relocation',
    description: 'Minimize business downtime with our specialized corporate moving services. We securely transport IT equipment, furniture, and documents on strict timelines.',
    icon: Building2,
    href: '/office-relocation-nagpur',
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    imageUrl: '/images/office-relocation.png'
  },
  {
    title: 'Car & Bike Transport',
    description: 'Ensure your vehicles reach their destination safely. We provide fully insured, enclosed carrier transport with real-time GPS tracking across India.',
    icon: Truck,
    href: '/car-bike-transport-nagpur',
    color: 'text-accent',
    bg: 'bg-accent/10',
    imageUrl: '/images/vehicle-transport.png'
  },
  {
    title: 'Warehouse Storage',
    description: 'Need secure space? Our 24/7 CCTV monitored, climate-controlled warehousing facilities offer safe short-term and long-term storage solutions.',
    icon: Warehouse,
    href: '/warehouse-storage-nagpur',
    color: 'text-foreground',
    bg: 'bg-foreground/10',
    imageUrl: '/images/warehouse-storage.png'
  }
];

export default function ServiceCards() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Premium Shifting <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From local shifting within Nagpur to interstate relocations, we provide end-to-end logistics solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link href={service.href} className="block group h-full">
                <TiltCard tiltMax={10} className="h-full">
                  <Card className="h-full border-border/50 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-3 shadow-sm hover:shadow-2xl bg-white dark:bg-black/40 relative overflow-hidden flex flex-col">
                    {/* Image Header */}
                    <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    </div>

                    <CardHeader className="relative -mt-10 z-10 pb-2">
                      <div className={`w-16 h-16 rounded-2xl ${service.bg} bg-background/80 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:-translate-y-2`}>
                        <service.icon className={`w-8 h-8 ${service.color}`} />
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col px-6 pb-6 pt-2">
                      <CardTitle className="text-xl font-bold mb-3 text-foreground">{service.title}</CardTitle>
                      <p className="text-muted-foreground mb-6 line-clamp-3 flex-grow font-medium leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm font-bold text-primary transition-colors group-hover:text-secondary">
                        Learn more
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </TiltCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
