'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';

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

const DEFAULT_CITIES = ["Nagpur", "Raipur", "Jabalpur", "Bhopal", "Indore"];

export default function LocationGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredCities = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      return cities.filter(city => city.toLowerCase().includes(query));
    }
    if (showAll) return cities;
    return cities.filter(city => DEFAULT_CITIES.includes(city));
  }, [searchQuery, showAll]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

      <div className="w-full px-2 mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Our <span className="text-primary">Service Network</span>
            </h2>
            <p className="text-white/60 text-lg font-medium max-w-2xl">
              Find us in every major city across India. Providing reliable shifting solutions wherever you go.
            </p>
          </div>

          <div className="relative w-full md:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-primary transition-colors" size={20} />
            <input
              type="text"
              placeholder="Enter City Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
            />
          </div>
        </div>

        {filteredCities.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredCities.map((city) => (
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
        ) : (
          <div className="text-center py-20 px-4 rounded-3xl bg-white/5 border border-dashed border-white/10">
            <p className="text-white/40 text-lg">No cities found matching &quot;{searchQuery}&quot;</p>
          </div>
        )}

        {!showAll && !searchQuery.trim() && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-all text-sm whitespace-nowrap"
            >
              View All Serviceable Areas
            </button>
          </div>
        )}

        {showAll && !searchQuery.trim() && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={() => setShowAll(false)}
              className="px-8 py-3 rounded-full border border-white/10 text-white/40 hover:text-white hover:bg-white/5 transition-all text-sm whitespace-nowrap"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}


