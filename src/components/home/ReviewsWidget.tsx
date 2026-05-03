'use client';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    service: 'House Shifting',
    text: 'Sunita Cargo Packers made my move from Civil Lines to Pune completely stress-free. The packing was excellent, and not a single item was damaged. Their team knew exactly how to handle the heavy furniture.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=12'
  },
  {
    name: 'Mrs. Kulkarni',
    service: 'Local Relocation',
    text: 'Shifted from Dharampeth to Manish Nagar. I was worried about the narrow lanes but the driver was incredibly skilled. The loading was done very quickly and professionally.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=44'
  },
  {
    name: 'Priya Verma',
    service: 'Office Relocation',
    text: 'We hired them for moving our 50-seater IT office in MIHAN. They managed everything systematically over the weekend with zero downtime for our business operations.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=5'
  },
  {
    name: 'Suresh Deshmukh',
    service: 'Vehicle Transport',
    text: 'Moved my car from Nagpur to Bangalore. The GPS tracking was spot on and the car arrived without a single scratch. Best experience with packers and movers so far.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=68'
  },
  {
    name: 'Amit Patel',
    service: 'Warehouse Storage',
    text: 'Stored my household goods in their Wadi warehouse for 3 months. Everything was perfectly safe and clean when I took delivery. Excellent management!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=15'
  }
];

export default function ReviewsWidget() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          interval = setInterval(() => {
            if (scrollRef.current) {
              const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
              if (scrollLeft + clientWidth >= scrollWidth - 10) {
                scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
              } else {
                scrollRef.current.scrollBy({ left: 344, behavior: 'smooth' });
              }
            }
          }, 4000); // Increased to 4s for better readability and lower CPU
        } else {
          clearInterval(interval);
        }
      });
    }, { threshold: 0.1 });

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-24 bg-muted/30 overflow-hidden relative border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/3 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
            >
              Customer Reviews
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Don&apos;t Just Take <br /><span className="text-primary">Our Word</span> For It.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg font-medium"
            >
              Read what our recent clients have to say about their moving experience with us.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 mt-8 bg-white dark:bg-black/50 p-4 rounded-2xl shadow-sm border border-border/50 w-fit"
            >
              <div className="text-4xl font-black">4.9</div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <div className="text-sm font-bold text-muted-foreground">Based on 1,200+ Reviews</div>
              </div>
            </motion.div>
          </div>

          <div
            ref={scrollRef}
            className="w-full md:w-2/3 flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="min-w-[320px] md:min-w-[400px] bg-white dark:bg-black p-8 rounded-3xl shadow-xl shadow-black/5 border border-border/50 snap-center relative"
              >
                <Quote size={40} className="text-primary/10 absolute top-6 right-6" />
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-foreground/80 font-medium text-lg leading-relaxed mb-8 relative z-10">&quot;{testimonial.text}&quot;</p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                    <Image src={testimonial.avatar} alt={testimonial.name} fill sizes="48px" className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">{testimonial.service}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
