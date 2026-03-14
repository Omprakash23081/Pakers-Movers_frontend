'use client';
import { motion } from 'framer-motion';
import { Star, Shield, Clock, ThumbsUp } from 'lucide-react';
import Image from 'next/image';

export default function TrustSignals() {
  const stats = [
    { label: 'Happy Customers', value: '10,000+', icon: ThumbsUp },
    { label: 'Years Experience', value: '15+', icon: Clock },
    { label: 'Cities Covered', value: '500+', icon: Shield },
    { label: 'Google Rating', value: '4.9/5', icon: Star },
  ];

  return (
    <section className="py-24 bg-background-alt dark:bg-black/50 border-y border-border/50 relative overflow-hidden">
      
      {/* Background design */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Why <span className="text-primary">Nagpur Trusts Us</span> With Their Belongings
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don&apos;t just move boxes; we move lives. Our commitment to transparent pricing, premium packing materials, and on-time delivery has made us the highest-rated Packers & Movers in Nagpur.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-background rounded-lg shadow-sm border border-border/50 text-primary">
                      <stat.icon size={20} />
                    </div>
                    <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-3xl transform rotate-3 scale-105 -z-10" />
            <div className="apple-card p-8 bg-background relative overflow-hidden">
               {/* Decorative quotation mark */}
               <div className="absolute top-4 right-8 text-8xl text-muted/30 font-serif leading-none opacity-50">&quot;</div>
               
               <div className="flex text-yellow-500 mb-6">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
               </div>
               
               <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10 text-balance">
                 &quot;Absolutely brilliant service! They packed my entire 3BHK in Nagpur and moved it to Pune without a single scratch on my delicate items. Highly professional team.&quot;
               </p>
               
               <div className="flex items-center gap-4 border-t border-border pt-6">
                 <div className="w-14 h-14 rounded-full overflow-hidden bg-muted">
                   <Image src="https://i.pravatar.cc/150?img=32" alt="Rahul Sharma" width={56} height={56} />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Rahul Sharma</h4>
                   <p className="text-sm text-muted-foreground">Software Engineer • Relocated to Pune</p>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
