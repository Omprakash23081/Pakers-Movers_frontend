'use client';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { CITY_COORDS } from '@/components/home/CostCalculator';

interface RouteMatrixProps {
  city: string;
}

const DEFAULT_DESTINATIONS = ["Mumbai", "Pune", "Bangalore", "Delhi", "Hyderabad"];

const calculateDistance = (coord1: [number, number], coord2: [number, number]) => {
  const R = 6371; // Earth's radius in km
  const dLat = (coord2[0] - coord1[0]) * Math.PI / 180;
  const dLon = (coord2[1] - coord1[1]) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(coord1[0] * Math.PI / 180) * Math.cos(coord2[0] * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const dist = R * c;
  return Math.round(dist * 1.15); // Add road travel overhead
};

const getCityCoords = (cityName: string) => {
  if (CITY_COORDS[cityName]) return CITY_COORDS[cityName];
  const lowerName = cityName.toLowerCase().replace(/[\s-]/g, '');
  const key = Object.keys(CITY_COORDS).find(k => k.toLowerCase().replace(/[\s-]/g, '') === lowerName);
  return key ? CITY_COORDS[key] : null;
};

const getRouteDetails = (fromCity: string, toCity: string) => {
  const coord1 = getCityCoords(fromCity);
  const coord2 = getCityCoords(toCity);
  
  let distance = 800; // default distance fallback
  if (coord1 && coord2) {
    distance = calculateDistance(coord1, coord2);
  }

  // Calculate realistic pricing & time based on computed distance
  if (distance <= 100) {
    return { time: "3-5 Hours", price: "₹4,500+" };
  } else if (distance <= 300) {
    return { time: "6-10 Hours", price: "₹8,000+" };
  } else if (distance <= 500) {
    return { time: "12-16 Hours", price: "₹12,000+" };
  } else if (distance <= 800) {
    return { time: "18-24 Hours", price: "₹16,000+" };
  } else if (distance <= 1200) {
    return { time: "24-36 Hours", price: "₹22,000+" };
  } else {
    return { time: "36-48 Hours", price: "₹28,000+" };
  }
};

export default function RouteMatrix({ city }: RouteMatrixProps) {
  // Ensure we avoid self-referencing routes (e.g. Mumbai -> Mumbai)
  const destinations = DEFAULT_DESTINATIONS.map(dest => {
    if (dest.toLowerCase() === city.toLowerCase()) {
      return "Nagpur"; // swap self-reference to main base (Nagpur)
    }
    return dest;
  });

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
        {destinations.map((to, i) => {
          const { time, price } = getRouteDetails(city, to);
          
          return (
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
                   {to}
                 </div>
              </div>
              
              <div className="flex flex-col items-end">
                 <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                    <Clock size={12} /> {time}
                 </div>
                 <div className="text-primary font-black text-sm">
                    Starts {price}
                 </div>
              </div>
            </motion.div>
          );
        })}
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
