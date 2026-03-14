'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
  {
    question: "What are the packers and movers charges in Nagpur?",
    answer: "The cost depends on various factors such as the size of your home (1BHK, 2BHK, etc.), distance to the destination, and the quantity of goods. Local shifting within Nagpur typically starts from ₹3,000 to ₹8,000, while outstation moves vary based on distance."
  },
  {
    question: "Do you provide car transport service?",
    answer: "Absolutely. We have specialized car carrier trucks and secure packaging specifically designed for four-wheelers and two-wheelers to ensure safe, scratch-free delivery across India."
  },
  {
    question: "Is there insurance coverage for my goods?",
    answer: "Yes, we provide comprehensive transit insurance for your belongings. In the rare event of damage or loss during transit, our insurance coverage ensures you are fully compensated based on the declared value of the goods."
  },
  {
    question: "What is your booking timeline?",
    answer: "We recommend booking at least 3-7 days in advance for local shifting, and 7-14 days for inter-city relocation. However, we also accommodate last-minute emergency relocations subject to availability."
  }
];

// FAQ Schema for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-muted/10 relative overflow-hidden">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
          >
            <MessageCircleQuestion size={16} className="mr-2" />
            Help & Support
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Frequently Asked <span className="text-primary">Questions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
          >
            Everything you need to know about our moving services, pricing, and safety guarantees.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`border rounded-2xl bg-white dark:bg-black/50 overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'border-primary/50 shadow-lg shadow-primary/5' 
                  : 'border-border/60 hover:border-primary/30 shadow-sm'
              }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary/10' : 'bg-muted group-hover:bg-primary/5'}`}>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180 text-primary' : 'text-muted-foreground group-hover:text-primary'}`}
                  />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-muted-foreground leading-relaxed font-medium border-t border-border/40 pt-4 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
