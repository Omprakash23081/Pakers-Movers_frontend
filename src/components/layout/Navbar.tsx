'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Truck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'About Us', href: '/#about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Track', href: '/track' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-panel py-3 shadow-md' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Sunita Cargo Packers Movers Home">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-primary/20 shrink-0 border border-primary/20 group-hover:bg-primary/20 transition-all duration-300">
              <Image
                src="/favicon.ico"
                alt="Sunita Cargo Logo"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="flex flex-col -space-y-1" aria-hidden="true">
              <span className="font-bold text-xl sm:text-2xl tracking-tighter">
                Sunita<span className="text-primary font-black">Cargo</span>
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Packers & Movers</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call to Action */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+917387661300" className="font-bold text-sm hidden lg:block hover:text-primary transition-colors" aria-label="Call +91 7387661300">
              <span aria-hidden="true">📞</span> +91 7387661300
            </a>
            <Link href="/contact">
              <Button size="sm" className="rounded-full shadow-apple px-6 cursor-pointer" aria-label="Request a moving quote">Get a Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-border/50 absolute w-full top-full left-0 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium p-2 hover:bg-muted rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border/50 flex flex-col gap-3">
                <a href="tel:+917387661300" className="font-bold text-lg hover:text-primary transition-colors">📞 +91 7387661300</a>
                <Link href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full cursor-pointer">Get a Quote</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
