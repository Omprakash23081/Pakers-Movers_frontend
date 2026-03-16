'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Truck, ShieldCheck, Star, CheckCircle, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import dynamic from 'next/dynamic';

const ServiceCards = dynamic(() => import('@/components/home/ServiceCards'));
const AboutUs = dynamic(() => import('@/components/home/AboutUs'));
const Gallery = dynamic(() => import('@/components/home/Gallery'));
const Stats = dynamic(() => import('@/components/home/Stats'));
const ReviewsWidget = dynamic(() => import('@/components/home/ReviewsWidget'));
const FAQ = dynamic(() => import('@/components/home/FAQ'));
const ConnectWithUs = dynamic(() => import('@/components/home/ConnectWithUs'));
const VideoTestimonials = dynamic(() => import('@/components/home/VideoTestimonials'));
const PricingGuide = dynamic(() => import('@/components/home/PricingGuide'));
const LocationGrid = dynamic(() => import('@/components/home/LocationGrid'));

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  movingFrom: string;
  movingTo: string;
  serviceType: string;
  phone: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    movingFrom: 'Nagpur',
    movingTo: '',
    serviceType: 'House Shifting',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Ensure legacy required fields are satisfied even if backend is cached
    const submissionData = {
      ...formData,
      firstName: formData.firstName || 'Sunita',
      lastName: formData.lastName || 'Customer',
      email: formData.email || 'inquiry@example.com'
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://pakers-movers-backend.onrender.com/api'}/quotes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(`Error (${response.status}): ${errorData.message || "Something went wrong. Please try again."}`);
      }
    } catch (err) {
      alert("Failed to connect to server. Please check your internet or if the backend is running.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-16 pb-32 md:pt-24 lg:pt-28 lg:pb-40 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          {/* Abstract mesh and image background */}
          <Image
            src="/images/hero-bg.png"
            alt="Sunita Cargo Packers and Movers Background"
            fill
            sizes="100vw"
            className="object-cover opacity-80 dark:opacity-60 pointer-events-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20 dark:from-background/95 dark:via-background/70 dark:to-background/30" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-5 dark:opacity-10" />
          <div className="absolute top-0 w-full h-full bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

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
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight relative z-10">
                  Reliable Packers and Movers in Nagpur for <br /><span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Safe & Affordable Shifting Services</span>
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

              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-lg text-balance leading-relaxed font-medium">
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
              <div className="grid grid-cols-2 gap-y-3 gap-x-6 pt-4 border-t border-border/10">
                {[
                  "100% Safe Packing",
                  "Trained Moving Staff",
                  "Door-to-Door Shifting",
                  "Affordable Pricing"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-bold text-foreground/80">
                    <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Trust Signals Avatar Stack */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/10">
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
                  <span className="text-[11px] sm:text-sm font-semibold mt-0.5 text-foreground/80">Trusted by 10,000+ Customers</span>
                </div>
              </div>
            </motion.div>

            {/* Premium Glassmorphism Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:pl-10 relative"
              id="quote"
            >
              {/* Decorative Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-transparent/20 rounded-full blur-[600px] -z-10" />

              <Card className="glass-panel overflow-hidden relative border-none bg-black/40 dark:bg-black/40 !backdrop-blur-xl rounded-3xl !border-white/20 dark:!border-white/10 !shadow-2xl py-5">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent z-20" />
                <CardHeader className="relative z-10 border-b border-border/50 pb-5 pt-8">
                  <div className="flex items-center space-x-2 w-full">
                    <CardTitle className="text-2xl font-bold tracking-tight text-foreground">Get Free Moving Quote</CardTitle>
                  </div>
                  <p className="text-sm text-foreground/80 font-medium mt-1">Get a verified estimate within 2 minutes</p>
                </CardHeader>
                <CardContent className="relative z-10 px-6 py-10 min-h-[400px] flex items-center justify-center">
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="w-full space-y-6">
                      <div className="space-y-1.5 focus-within:text-primary transition-colors">
                        <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Full Name</label>
                        <input 
                          id="firstName"
                          type="text" 
                          placeholder="Enter Name here" 
                          className="w-full h-12 px-4 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/40 text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-inner backdrop-blur-md" 
                          value={formData.firstName || ''}
                          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                          required
                        />
                      </div>
                      <div className="space-y-1.5 focus-within:text-primary transition-colors">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Phone Number</label>
                        <input 
                          id="phone"
                          type="tel" 
                          placeholder="Your Mobile Number" 
                          className="w-full h-12 px-4 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/40 text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-inner backdrop-blur-md" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5 focus-within:text-primary transition-colors">
                          <label htmlFor="movingFrom" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Moving From (City)</label>
                          <input 
                            id="movingFrom"
                            type="text" 
                            placeholder="Nagpur" 
                            className="w-full h-12 px-4 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/40 text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-inner backdrop-blur-md" 
                            value={formData.movingFrom}
                            onChange={(e) => setFormData({...formData, movingFrom: e.target.value})}
                            required
                          />
                        </div>
                        <div className="space-y-1.5 focus-within:text-primary transition-colors">
                          <label htmlFor="movingTo" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Moving To (City)</label>
                          <input 
                            id="movingTo"
                            type="text" 
                            placeholder="Destination City" 
                            className="w-full h-12 px-4 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/40 text-foreground placeholder-foreground/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all shadow-inner backdrop-blur-md" 
                            value={formData.movingTo}
                            onChange={(e) => setFormData({...formData, movingTo: e.target.value})}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-1.5 focus-within:text-primary transition-colors">
                        <label htmlFor="serviceType" className="text-xs font-bold uppercase tracking-wider text-foreground/80">Select Service</label>
                        <select 
                          id="serviceType"
                          className="w-full h-12 px-4 rounded-xl border border-white/20 dark:border-white/10 bg-white/20 dark:bg-black/40 text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer shadow-inner backdrop-blur-md"
                          value={formData.serviceType}
                          onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                        >
                          <option className="bg-background text-foreground" value="">Select Service</option>
                          <option className="bg-background text-foreground">House Shifting</option>
                          <option className="bg-background text-foreground">Office Relocation</option>
                          <option className="bg-background text-foreground">Vehicle Transport</option>
                          <option className="bg-background text-foreground">Local Shifting</option>
                        </select>
                      </div>
                      <button 
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 rounded-xl mt-4 font-bold text-lg bg-accent text-white hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5 flex items-center justify-center disabled:opacity-50 disabled:translate-y-0"
                      >
                        {loading ? <Loader2 className="animate-spin mr-2" /> : "Get Free Quote"}
                      </button>
                    </form>
                  ) : (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} 
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-4"
                    >
                      <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                        <CheckCircle size={40} className="text-emerald-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Thank you for connecting with us!</h3>
                      <p className="text-secondary">Our team will call you back within 15 minutes to provide a precise quote.</p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-primary font-semibold hover:underline mt-4 cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      <ServiceCards />
      <AboutUs />
      <Stats />
      <Gallery />
      <VideoTestimonials />
      <ReviewsWidget />
      <ConnectWithUs />
      <PricingGuide />
      <LocationGrid />
      <FAQ />

    </div>
  );
}
