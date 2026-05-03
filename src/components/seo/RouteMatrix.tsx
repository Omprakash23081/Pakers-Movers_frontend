'use client';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Clock, ShieldCheck } from 'lucide-react';

interface RouteMatrixProps {
  city: string;
}

const COMMON_DESTINATIONS = [
  { to: "Mumbai", time: "18-24 Hours", price: "₹18,000+" },
  { to: "Pune", time: "15-20 Hours", price: "₹15,000+" },
  { to: "Bangalore", time: "36-48 Hours", price: "₹25,000+" },
  { to: "Delhi", time: "24-30 Hours", price: "₹22,000+" },
  { to: "Hyderabad", time: "12-18 Hours", price: "₹12,000+" }
];

export default function RouteMatrix({ city }: RouteMatrixProps) {
  return (
    <div className="space-y-10 py-10">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
          <MapPin size={20} />
        </div>
        <h2 className="text-3xl font-black tracking-tight text-foreground">
          Popular Shifting Routes from {city}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {COMMON_DESTINATIONS.map((route, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between p-6 rounded-2xl border border-border bg-section/10 hover:bg-section/30 transition-all group"
          >
            <div className="flex items-center gap-4">
               <div className="font-bold text-lg text-white group-hover:text-primary transition-colors">
                 {city}
               </div>
               <ArrowRight size={16} className="text-white/20 group-hover:text-primary transition-all group-hover:translate-x-1" />
               <div className="font-bold text-lg text-white">
                 {route.to}
               </div>
            </div>
            
            <div className="flex flex-col items-end">
               <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                  <Clock size={12} /> {route.time}
               </div>
               <div className="text-primary font-black text-sm">
                  Starts {route.price}
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 rounded-3xl border border-dashed border-border flex items-center gap-4 bg-white/5">
         <ShieldCheck className="text-primary shrink-0" size={32} />
         <p className="text-xs text-muted-foreground leading-relaxed">
           <strong>Note:</strong> Transit times are estimates for <strong>Sunita Cargo Enclosed Containers</strong>. Actual timing may vary based on terminal congestion and octroi clearance in cities like Mumbai/Bangalore.
         </p>
      </div>
    </div>
  );
}
