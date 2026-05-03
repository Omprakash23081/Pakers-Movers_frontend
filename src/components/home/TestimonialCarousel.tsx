'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const reviews = [
  {
    name: 'Vikram Singh',
    city: 'Nagpur to Pune',
    text: 'Moving my 3BHK was a breeze with Sunita Cargo. The IBA-approved fleet gave me peace of mind. Not a single scratch on my premium furniture.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  {
    name: 'Anjali Deshpande',
    city: 'Dharampeth, Nagpur',
    text: 'Highly professional team. They managed the narrow streets of Nagpur perfectly. The multi-layer packing is truly world-class.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=44'
  },
  {
    name: 'Suresh Kumar',
    city: 'Indore to Mumbai',
    text: 'Best car transport service. My SUV reached Mumbai in 3 days. Real-time GPS tracking was spot on.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=68'
  }
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-12">
      <div className="absolute -top-12 -left-12 opacity-5 text-primary">
        <Quote size={200} />
      </div>
      
      <div className="relative overflow-hidden min-h-[350px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full text-center space-y-8"
          >
            <div className="flex justify-center gap-1 text-yellow-500">
              {[...Array(reviews[index].rating)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            
            <p className="text-2xl md:text-3xl font-medium leading-relaxed italic text-white/90">
              "{reviews[index].text}"
            </p>
            
            <div className="flex flex-col items-center gap-4 pt-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20 p-1">
                 <Image 
                   src={reviews[index].avatar} 
                   alt={reviews[index].name} 
                   fill 
                   className="rounded-full object-cover"
                   sizes="64px"
                 />
              </div>
              <div>
                <h4 className="text-xl font-black">{reviews[index].name}</h4>
                <p className="text-sm font-bold text-primary uppercase tracking-[0.2em]">{reviews[index].city}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-12">
        <button 
          onClick={() => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary transition-all text-white"
          aria-label="Previous review"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => setIndex((prev) => (prev + 1) % reviews.length)}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-primary transition-all text-white"
          aria-label="Next review"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
