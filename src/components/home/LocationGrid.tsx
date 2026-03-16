'use client';
import Link from 'next/link';
import { MapPin } from 'lucide-react';

const cities = [
  "Agra", "Ahmedabad", "Allahabad", "Alwar", "Ambala", "Ankleshwar", "Aurangabad", "Banaras", 
  "Bangalore", "Baroda", "Bhiwandi", "Bhopal", "Bhubaneswar", "Bhuj", "Bikaner", "Calicut", 
  "Chandigarh", "Chennai", "Cochin", "Coimbatore", "Cuttack", "Dehradun", "Delhi", "Dwarka", 
  "Faridabad", "Gandhidham", "Ghaziabad", "Goa", "Greaternoida", "Gurgaon", "Guwahati", 
  "Gwalior", "Haridwar", "Hisar", "Hubli", "Hyderabad", "Indore", "Jabalpur", "Jaipur", 
  "Jammu", "Jamshedpur", "Jamnagar", "Jodhpur", "Kalighat", "Kanpur", "Kolhapur", "Kolkata", 
  "Korba", "Kota", "Kottayam", "Lucknow", "Ludhiana", "Madurai", "Manesar", "Mangalore", 
  "Meerut", "Mumbai", "Mysore", "Nagpur", "Nasik", "Navimumbai", "Neemrana", "Noida", 
  "Panipat", "Patalganga", "Patna", "Pondicherry", "Portblair", "Pune", "Raigarh", "Raipur", 
  "Rajkot", "Ranchi", "Renukoot", "Rourkela", "Rudrapur", "Secunderabad", "Shillong", 
  "Siliguri", "Surat", "Tinsukia", "Tirupur", "Trichy", "Trivandrum", "Udaipur", "Vapi", 
  "Varanasi", "Vijayawada", "Visakhapatnam"
];

export default function LocationGrid() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Our <span className="text-primary">Service Network</span>
            </h2>
            <p className="text-white/60 text-lg font-medium max-w-2xl">
              Find us in every major city across India. Providing reliable shifting solutions wherever you go.
            </p>
          </div>
          <Link href="/services">
            <button className="px-6 py-3 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-all text-sm whitespace-nowrap">
              View All Serviceable Areas
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {cities.map((city) => (
            <Link 
              key={city} 
              href={`/packers-and-movers-${city.toLowerCase().replace(/\s/g, '-')}`}
              className="group"
            >
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group-hover:-translate-y-1 shadow-sm hover:shadow-primary/10">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin size={16} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/60 group-hover:text-white transition-colors">
                  Packers & Movers <span className="text-primary group-hover:text-primary-foreground transition-colors">{city}</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
