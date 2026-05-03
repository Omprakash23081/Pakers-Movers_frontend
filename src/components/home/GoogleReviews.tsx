'use client';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const REVIEWS = [
  {
    name: "Rajesh Sharma",
    date: "2 weeks ago",
    rating: 5,
    text: "Excellent service by Sunita Cargo! They moved my entire 3BHK from Nagpur to Pune without a single scratch. The team was professional and handled fragile items with extra care. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=rajesh"
  },
  {
    name: "Priya Deshmukh",
    date: "1 month ago",
    rating: 5,
    text: "Truly professional packers and movers in Nagpur. Their rates are transparent, and there were no hidden charges. The packing quality was superior compared to Agarwal Packers I used earlier.",
    avatar: "https://i.pravatar.cc/150?u=priya"
  },
  {
    name: "Amit Verma",
    date: "3 weeks ago",
    rating: 5,
    text: "I was worried about moving my car, but Sunita Cargo handled it perfectly. Real-time tracking was available, and my vehicle reached Bangalore safely. Best value for money service.",
    avatar: "https://i.pravatar.cc/150?u=amit"
  }
];

export default function GoogleReviews() {
  return (
    <section className="py-24 bg-section/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-black text-[10px] uppercase tracking-widest mb-4">
              <ShieldCheck size={14} /> Verified Social Proof
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
              Trusted by Thousands of <br />
              <span className="text-primary italic">Happy Families.</span>
            </h2>
          </div>

          <div className="bg-background/50 backdrop-blur-md border border-border p-6 rounded-3xl flex items-center gap-6 shadow-xl">
             <div className="text-center">
                <div className="text-4xl font-black text-white">4.9</div>
                <div className="flex text-yellow-500 gap-0.5 my-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-tighter">842+ Google Reviews</div>
             </div>
             <div className="h-12 w-px bg-border" />
             <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white/80">
                   <CheckCircle2 size={14} className="text-emerald-500" /> 100% Verified
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-white/80">
                   <CheckCircle2 size={14} className="text-emerald-500" /> Real Customers
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border p-8 rounded-[2.5rem] shadow-lg hover:border-primary/30 transition-all group relative"
            >
              <div className="absolute top-8 right-8">
                <Image 
                  src="/images/google-logo.svg" 
                  alt="Google" 
                  width={20} 
                  height={20} 
                  className="opacity-20 group-hover:opacity-100 transition-opacity" 
                />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image src={review.avatar} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{review.date}</p>
                </div>
              </div>

              <div className="flex text-yellow-500 gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map(j => <Star key={j} size={12} fill="currentColor" />)}
              </div>

              <p className="text-white/70 leading-relaxed italic text-sm">
                &quot;{review.text}&quot;
              </p>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 rounded-full border border-white/10 bg-white/5 text-white/60 font-bold hover:bg-white/10 hover:text-white transition-all text-xs uppercase tracking-widest">
            View All Verified Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
