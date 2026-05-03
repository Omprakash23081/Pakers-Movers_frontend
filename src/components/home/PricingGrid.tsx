import React from 'react';
import { Check } from 'lucide-react';

interface PricingTier {
  size: string;
  local: string;
  intercity: string;
  features: string[];
  popular?: boolean;
}

const defaultTiers: PricingTier[] = [
  {
    size: '1 BHK',
    local: '₹4,500 – ₹8,000',
    intercity: '₹14,000 – ₹22,000',
    features: ['1 Mini Truck', '2 Professional Packers', 'Standard Packing', 'Insurance Help']
  },
  {
    size: '2 BHK',
    local: '₹8,000 – ₹15,000',
    intercity: '₹22,000 – ₹35,000',
    features: ['1 Large Truck', '3 Professional Packers', 'Multi-layer Packing', 'Dedicated Manager'],
    popular: true
  },
  {
    size: '3 BHK+',
    local: '₹14,000 – ₹25,000',
    intercity: '₹35,000 – ₹55,000+',
    features: ['1 Container Truck', '4-5 Expert Packers', 'Premium Wooden Crates', 'Priority Transit']
  }
];

export default function PricingGrid({ city = 'Nagpur' }: { city?: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {defaultTiers.map((tier) => (
        <div 
          key={tier.size}
          className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 hover:scale-[1.02] ${
            tier.popular 
              ? 'bg-primary/5 border-primary/30 shadow-2xl shadow-primary/10' 
              : 'bg-white/5 border-white/10 hover:border-white/20'
          }`}
        >
          {tier.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
              Most Selected
            </div>
          )}
          
          <div className="text-center mb-8">
            <h4 className="text-xl font-black mb-1">{tier.size} Move</h4>
            <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Starting from</p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="p-4 rounded-2xl bg-black/20 border border-white/5">
              <p className="text-[10px] font-bold text-primary uppercase mb-1">Local in {city}</p>
              <p className="text-2xl font-black text-white">{tier.local}</p>
            </div>
            <div className="p-4 rounded-2xl bg-black/20 border border-white/5">
              <p className="text-[10px] font-bold text-accent uppercase mb-1">Outstation from {city}</p>
              <p className="text-2xl font-black text-white">{tier.intercity}</p>
            </div>
          </div>

          <ul className="space-y-4">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm font-medium text-white/60">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                  <Check size={12} strokeWidth={3} />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
