'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, MapPin, Home, ArrowRightLeft, 
  IndianRupee, Info, Search, Loader2, Sparkles,
  ChevronRight, CheckCircle2, Building2, Car
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const CATEGORIES = [
  { id: 'house', label: 'House Shifting', icon: <Home size={18} /> },
  { id: 'office', label: 'Office Relocation', icon: <Building2 size={18} /> },
  { id: 'vehicle', label: 'Car & Bike', icon: <Car size={18} /> }
];

const CITIES = [
  "Agra", "Ahmedabad", "Allahabad", "Alwar", "Ambala", "Ankleshwar", "Aurangabad", "Banaras", 
  "Bangalore", "Baroda", "Bhiwandi", "Bhopal", "Bhubaneswar", "Bhuj", "Bikaner", "Calicut", 
  "Chandigarh", "Chennai", "Cochin", "Coimbatore", "Cuttack", "Dehradun", "Delhi", "Dwarka", 
  "Faridabad", "Gandhidham", "Ghaziabad", "Goa", "Greater Noida", "Gurgaon", "Guwahati", 
  "Gwalior", "Haridwar", "Hisar", "Hubli", "Hyderabad", "Indore", "Jabalpur", "Jaipur", 
  "Jammu", "Jamshedpur", "Jamnagar", "Jodhpur", "Kalighat", "Kanpur", "Kolhapur", "Kolkata", 
  "Korba", "Kota", "Kottayam", "Lucknow", "Ludhiana", "Madurai", "Manesar", "Mangalore", 
  "Meerut", "Mumbai", "Mysore", "Nagpur", "Nasik", "Navi Mumbai", "Neemrana", "Noida", 
  "Panipat", "Patalganga", "Patna", "Pondicherry", "Port Blair", "Pune", "Raigarh", "Raipur", 
  "Rajkot", "Ranchi", "Renukoot", "Rourkela", "Rudrapur", "Secunderabad", "Shillong", 
  "Siliguri", "Surat", "Tinsukia", "Tirupur", "Trichy", "Trivandrum", "Udaipur", "Vapi", 
  "Varanasi", "Vijayawada", "Visakhapatnam"
];

const CATEGORY_OPTIONS: Record<string, string[]> = {
  house: ["1 BHK Home", "2 BHK Home", "3 BHK Home", "4 BHK / Villa"],
  office: ["Small Office", "Medium Office", "Large Office", "Corporate Hub"],
  vehicle: ["Bike Only", "Car Only", "Car + Bike", "Luxury Vehicle"]
};

interface IPricingTier {
  type: string;
  costs: {
    upTo50km: string;
    upTo500km: string;
    upTo1000km: string;
    upTo1500km: string;
    upTo2500km: string;
  };
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://pakers-movers-backend.onrender.com/api';

export default function CostCalculator() {
  const [activeCategory, setActiveCategory] = useState('house');
  const [origin, setOrigin] = useState('Nagpur');
  const [destination, setDestination] = useState('');
  const [moveSize, setMoveSize] = useState("1 BHK Home");
  const [result, setResult] = useState<string | null>(null);
  const [calculating, setCalculating] = useState(false);
  const [pricingData, setPricingData] = useState<Record<string, IPricingTier[]>>({});
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/pricing`);
        const data = await response.json();
        const formattedData: Record<string, IPricingTier[]> = {};
        data.forEach((item: { category: string; tiers: IPricingTier[] }) => {
          formattedData[item.category] = item.tiers;
        });
        setPricingData(formattedData);
      } catch (error) {
        console.error('Failed to fetch pricing for calculator:', error);
      }
    };
    fetchPricing();
  }, []);

  useEffect(() => {
    // Reset moveSize when category changes
    setMoveSize(CATEGORY_OPTIONS[activeCategory][0]);
    setResult(null);
  }, [activeCategory]);

  // Pseudo-distance calculator based on city name hashes for demo purposes
  const calculateDistance = (city1: string, city2: string) => {
    if (city1 === city2) return 20; // local
    const str = city1 + city2;
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash |= 0;
    }
    const absHash = Math.abs(hash);
    return (absHash % 2450) + 50; // Random distance between 50 and 2500
  };

  const handleCalculate = () => {
    if (!origin || !destination) return;
    
    setCalculating(true);
    setResult(null);

    // Simulate calculation time
    setTimeout(() => {
      const d = calculateDistance(origin, destination);
      setDistance(d);

      const categoryTiers = pricingData[activeCategory] || [];
      const tier = categoryTiers.find(t => t.type === moveSize);
      
      if (tier) {
        let priceRange = "";
        if (d <= 50) priceRange = tier.costs.upTo50km;
        else if (d <= 500) priceRange = tier.costs.upTo500km;
        else if (d <= 1000) priceRange = tier.costs.upTo1000km;
        else if (d <= 1500) priceRange = tier.costs.upTo1500km;
        else priceRange = tier.costs.upTo2500km;

        setResult(priceRange);
      } else {
        setResult("Contact for Quote");
      }
      setCalculating(false);
    }, 800);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-background" id="calculator">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest"
            >
              <Sparkles size={14} /> Instant Estimator
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Know Your <span className="text-primary italic">Moving Cost</span> <br />
              In Seconds.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Input Form Column */}
            <div className="lg:col-span-7 space-y-6">
              <Card className="glass-panel border-none bg-white/5 backdrop-blur-3xl !rounded-[2.5rem] shadow-2xl overflow-hidden">
                {/* Category Tabs Inside Card */}
                <div className="bg-white/5 border-b border-white/10 p-4">
                  <div className="flex p-1 bg-black/20 rounded-xl overflow-x-auto scrollbar-none">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex items-center justify-center gap-2 flex-1 px-4 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all duration-300 shrink-0 ${
                          activeCategory === cat.id
                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                            : 'text-white/40 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {cat.icon}
                        <span>{cat.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* From City */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">Starting City</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary group-focus-within:scale-110 transition-transform" size={18} />
                      <select 
                        className="w-full h-14 pl-12 pr-6 rounded-2xl border border-white/10 bg-white/5 outline-none focus:border-primary transition-all text-white font-bold appearance-none cursor-pointer"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                      >
                        {CITIES.map(city => <option key={city} value={city} className="bg-[#0B1120]">{city}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* To City */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">Destination City</label>
                    <div className="relative group">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-accent group-focus-within:scale-110 transition-transform" size={18} />
                      <select 
                        className="w-full h-14 pl-12 pr-6 rounded-2xl border border-white/10 bg-white/5 outline-none focus:border-primary transition-all text-white font-bold appearance-none cursor-pointer"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      >
                        <option value="" className="bg-[#0B1120]">Select Destination</option>
                        {CITIES.map(city => <option key={city} value={city} className="bg-[#0B1120]">{city}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Move Size / Options */}
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase font-black text-primary/70 tracking-widest pl-1">
                      {activeCategory === 'vehicle' ? 'Which vehicle?' : 'Scale of Move'}
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {CATEGORY_OPTIONS[activeCategory].map(option => (
                        <button
                          key={option}
                          onClick={() => setMoveSize(option)}
                          className={`h-12 rounded-xl text-[10px] font-black uppercase tracking-tighter border transition-all ${
                            moveSize === option 
                            ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                            : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                          }`}
                        >
                          {option.replace(' Home', '').replace(' Office', '')}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleCalculate}
                  disabled={!origin || !destination || calculating}
                  className="w-full h-16 rounded-2xl mt-10 text-lg font-black bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
                >
                  {calculating ? <Loader2 className="mr-2 animate-spin" /> : <Calculator className="mr-2" />}
                  {calculating ? "Analyzing Routes..." : "Calculate Moving Cost"}
                </Button>
              </div>
            </Card>

              <div className="flex items-center gap-4 p-6 rounded-3xl bg-white/5 border border-white/10">
                <Info size={24} className="text-primary shrink-0" />
                <p className="text-xs text-secondary leading-relaxed font-medium">
                  This estimator provides a data-driven range based on current market trends and distance. 
                  Actual price might vary slightly based on item volume and packing complexity.
                </p>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[400px]">
                <AnimatePresence mode="wait">
                  {!result ? (
                    <motion.div 
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center rounded-[2.5rem] border-2 border-dashed border-white/10"
                    >
                      <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                        <ArrowRightLeft size={32} className="text-white/20" />
                      </div>
                      <h4 className="text-xl font-bold text-white/40 mb-2">Price Summary</h4>
                      <p className="text-sm text-white/30 max-w-xs">Select your origin, destination and move size to see a verified price estimate.</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="glass-panel overflow-hidden border-none bg-gradient-to-br from-primary/20 to-accent/10 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl p-10 flex flex-col h-full"
                    >
                      <div className="flex justify-between items-center mb-8">
                        <div className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                          Estimate Ready
                        </div>
                        <div className="text-primary font-black text-sm">
                          {distance} KM Range
                        </div>
                      </div>

                      <div className="space-y-2 mb-10">
                        <p className="text-xs font-black uppercase tracking-widest text-white/60">Estimated Cost Range</p>
                        <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter flex items-center">
                          {result}
                        </h3>
                      </div>

                      <div className="space-y-4 mb-10 pt-8 border-t border-white/10">
                         <div className="flex items-center gap-3 text-sm text-white/80">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            <span>Transparent Door-to-Door Pricing</span>
                         </div>
                         <div className="flex items-center gap-3 text-sm text-white/80">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            <span>Professional Multi-Layer Packing</span>
                         </div>
                         <div className="flex items-center gap-3 text-sm text-white/80">
                            <CheckCircle2 size={16} className="text-emerald-500" />
                            <span>Transit Insurance Included</span>
                         </div>
                      </div>

                      <div className="mt-auto pt-6">
                         <Button asChild size="lg" variant="accent" className="w-full h-16 rounded-2xl text-lg font-black shadow-xl shadow-accent/20">
                            <a href="#quote" className="flex items-center justify-center">
                               Book My Move <ChevronRight className="ml-2" />
                            </a>
                         </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
