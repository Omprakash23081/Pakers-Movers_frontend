'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, User, Share2, Navigation, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const contactInfo = [
  {
    icon: User,
    label: 'Branch Manager',
    value: 'Subham kumar',
    subValue: 'Assisting in your moving & storage needs.',
    color: 'bg-red-500/10 text-red-500',
  },
  {
    icon: MapPin,
    label: 'Registered Office',
    value: 'Plot No. 78 B, Sariputra Housing society, Ganesh Nagar, Dawalameti, Amravati Road, Wadi, Nagpur 440023',
    subValue: 'Visit us for a face-to-face consultation.',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Phone,
    label: 'Centralized Booking Office',
    value: '+91 7387661300',
    subValue: 'Call for instant quotes and tracking.',
    color: 'bg-accent/10 text-accent',
  }
];

export default function ConnectWithUs() {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const shareMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDirections = () => {
    const address = "Plot No. 78 B, Sariputra Housing society, Ganesh Nagar, Dawalameti, Amravati Road, Wadi, Nagpur 440023";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  const shareText = "Check out Sunita Cargo Packers and Movers in Nagpur for reliable relocation services!";
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleWhatsAppShare = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`, '_blank');
    setShowShareMenu(false);
  };

  const handleEmailShare = () => {
    window.open(`mailto:?subject=Recommended Packers and Movers&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`, '_blank');
    setShowShareMenu(false);
  };

  return (
    <section id="connect" className="py-24 bg-section/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-4"
          >
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Connect <span className="text-primary">with us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-medium"
          >
            We will be glad to assist you in regards to your moving and storage needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-panel border-white/10 dark:border-white/5 hover:border-primary/50 transition-all duration-300 p-4 sm:p-6 flex gap-4 sm:gap-6 items-start group min-w-0">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex-shrink-0 flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[10px] sm:text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">
                      {item.label}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-foreground mb-1 leading-tight break-words">
                      {item.value}
                    </p>
                    <p className="text-xs sm:text-sm text-secondary font-medium">
                      {item.subValue}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 h-full min-h-[450px] relative rounded-3xl overflow-hidden border border-white/10 dark:border-white/5 shadow-2xl"
          >
            <div className="absolute top-4 left-4 right-4 z-10 flex flex-wrap gap-2">
              <div className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-bold shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Nagpur Head Office
              </div>
              
              <div 
                className="relative" 
                ref={shareMenuRef}
                onMouseEnter={() => setShowShareMenu(true)}
                onMouseLeave={() => setShowShareMenu(false)}
              >
                <button 
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="bg-white dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-black/10 dark:border-white/20 text-xs font-bold shadow-lg flex items-center gap-2 cursor-pointer hover:shadow-xl transition-all"
                >
                  <Share2 size={14} className="text-red-500" /> Share
                </button>
                
                <AnimatePresence>
                  {showShareMenu && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-50"
                    >
                      {/* Caret/Arrow */}
                      <div className="mx-auto w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#1a1a1a]" />
                      
                      <div className="bg-[#1a1a1a] p-2.5 rounded-xl shadow-2xl flex items-center gap-4 border border-white/5">
                        <button 
                          onClick={handleWhatsAppShare}
                          className="hover:scale-110 transition-transform flex items-center justify-center"
                          title="Share on WhatsApp"
                        >
                          <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg">
                            <MessageCircle size={18} fill="currentColor" />
                          </div>
                        </button>
                        <button 
                          onClick={handleEmailShare}
                          className="hover:scale-110 transition-transform flex items-center justify-center"
                          title="Share via Email"
                        >
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                            {/* Simple Gmail-like M representing the logo colors */}
                            <svg viewBox="0 0 24 24" className="w-5 h-5">
                              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335" />
                            </svg>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                onClick={handleDirections}
                className="bg-white/90 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs font-bold shadow-lg flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-white transition-colors"
              >
                <Navigation size={14} className="text-accent" /> Directions
              </button>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.7817890163883!2d78.99654007430998!3d21.161080583222617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eb002e32f4eb%3A0x6f360a5868278276!2sSariputra%20society%2C%20Tekdi%20Wadi!5e0!3m2!1sen!2sin!4v1773416468795!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] contrast-[1.1] opacity-90 hover:opacity-100 transition-opacity"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
