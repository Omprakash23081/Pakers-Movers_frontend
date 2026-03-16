'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Truck, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col space-y-6 md:space-y-8 relative z-20 -mt-14 sm:-mt-20"
    >
      <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 sm:px-4 py-1.5 text-[10px] sm:text-sm font-bold text-primary w-fit shadow-sm backdrop-blur-md">
        <Star size={14} className="mr-1.5 sm:mr-2 fill-primary" />
        Trusted Packers and Movers in Nagpur
      </div>

      <div className="relative">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight relative z-10 text-white">
          Reliable Packers and Movers in Nagpur for <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Safe & Affordable Shifting Services
          </span>
        </h1>
        {/* Moving Truck Animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: "60%", opacity: [0, 1, 1, 0] }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          className="absolute -top-12 left-0 text-primary/10 z-0"
        >
          <Truck size={120} />
        </motion.div>
      </div>

      <p className="text-lg md:text-xl text-white/70 max-w-lg text-balance leading-relaxed font-medium">
        Professional house shifting, office relocation, vehicle transport and packing services in Nagpur. 
        Our trained team ensures safe packing, secure loading and on-time delivery across India.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg" variant="accent" className="w-full rounded-full gap-2 text-md h-14 px-8 font-semibold">
          <a href="#quote">
            Get Free Moving Quote <Truck size={18} />
          </a>
        </Button>
        <a href="tel:+917387661300">
          <Button size="lg" variant="outline" className="w-full rounded-full h-14 px-8 text-md border-white/20 bg-white/10 backdrop-blur-md font-bold text-white hover:bg-white/20 transition-all">
            Call Now: +91 7387661300
          </Button>
        </a>
      </div>

      {/* Hero Features Area */}
      <div className="grid grid-cols-2 gap-y-3 gap-x-6 pt-4 border-t border-white/10">
        {[
          "100% Safe Packing",
          "Trained Moving Staff",
          "Door-to-Door Shifting",
          "Affordable Pricing"
        ].map((feature, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm font-bold text-white/80">
            <CheckCircle size={16} className="text-emerald-500 shrink-0" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {/* Trust Signals Avatar Stack */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
        <div className="flex -space-x-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden shadow-sm shadow-black/20">
              <Image src="/images/avatar-placeholder.svg" alt="Customer Avatar" width={40} height={40} className="object-cover" />
            </div>
          ))}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-background bg-secondary text-white flex items-center justify-center text-[10px] sm:text-xs font-bold shadow-sm shadow-black/20 z-10">
            2k+
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex text-yellow-500 gap-0.5">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
          </div>
          <span className="text-[11px] sm:text-sm font-semibold mt-0.5 text-white/80">Trusted by 10,000+ Customers</span>
        </div>
      </div>
    </motion.div>
  );
}
