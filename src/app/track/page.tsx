"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Search, Map, PackageCheck, Truck, Phone, ChevronRight, Clock, MapPin, Package, Home, Building2, Car, LocateFixed, ArrowRightLeft, ShieldCheck, Warehouse, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function TrackShipment() {
  return (
    <Suspense fallback={
      <div className="w-full h-screen flex items-center justify-center">
        <PackageCheck className="w-12 h-12 text-primary animate-pulse" />
      </div>
    }>
      <TrackContent />
    </Suspense>
  );
}

function TrackContent() {
  const searchParams = useSearchParams();
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showFullLogs, setShowFullLogs] = useState(false);

  const performTracking = async (id: string) => {
    if (!id.trim()) return;
    setLoading(true);
    setError('');
    setShipment(null);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://pakers-movers-backend.onrender.com/api';
      const res = await fetch(`${baseUrl}/shipments/track/${id.toUpperCase()}`);
      const data: any = await res.json();
      if (data.success) {
        setShipment(data.data);
      } else {
        setError(data.message || 'Tracking ID not found. Please check and try again.');
      }
    } catch {
      setError('Something went wrong. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      setTrackingId(id);
      performTracking(id);
    }
  }, [searchParams]);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    performTracking(trackingId);
  };

  const getStatusProgress = (status: string) => {
    switch (status) {
      case 'booked': return 10;
      case 'packing': return 35;
      case 'in_transit': return 65;
      case 'out_for_delivery': return 85;
      case 'delivered': return 100;
      default: return 0;
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col bg-[#0c0d10]">
      <section className="bg-gradient-to-b from-indigo-500/15 to-transparent pt-12 pb-24 flex-grow flex items-center justify-center relative overflow-hidden">
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-40 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.15),transparent_65%)]" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/15 px-3 py-1 text-[9px] font-black text-indigo-400 mb-6 uppercase tracking-[0.2em]">
             Satellite Radar Active
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white">
            Track Your <span className="text-indigo-500">Nagpur</span> Shipment
          </h1>
          <p className="text-sm md:text-base text-white/40 mb-10 max-w-xl mx-auto leading-relaxed">
            Track your shipment in Nagpur in real time. Just enter your Phone Number or Tracking ID below.
          </p>

          {/* Search Card */}
          <Card className="shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border-white/10 bg-white/[0.04] backdrop-blur-3xl p-5 md:p-8 max-w-3xl mx-auto rounded-[2rem] mb-12 relative overflow-hidden">
             <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2 text-left">
                  <label className="text-[9px] font-black text-white/30 ml-1 uppercase tracking-widest">Tracking Credential</label>
                  <div className="relative group">
                    <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-indigo-500 transition-colors" />
                    <input
                      type="text"
                      className="w-full h-14 pl-14 pr-6 rounded-2xl border border-indigo-500/30 bg-indigo-950/40 focus:ring-2 focus:ring-indigo-500/50 outline-none transition-all text-lg font-bold tracking-wider uppercase text-white placeholder:text-white/20 shadow-inner"
                      placeholder="Phone or Tracking ID"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="md:self-end h-14 bg-indigo-500 hover:bg-indigo-600 text-white font-black text-xs tracking-[0.2em] rounded-2xl px-8 shadow-lg shadow-indigo-500/20 transition-all border-none" disabled={loading}>
                  {loading ? <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" /> : 'SEARCH'}
                </Button>
              </form>
              {error && (
                <div className="mt-4 p-3 rounded-xl bg-red-500/10 text-red-500 text-[10px] font-bold border border-red-500/20 text-center animate-shake">
                  {error}
                </div>
              )}
          </Card>

          {/* Tracking Result */}
          {shipment && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 max-w-4xl mx-auto text-left">
              <Card className="border-white/15 shadow-[0_48px_96px_-24px_rgba(0,0,0,0.8)] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a1c2e] via-[#0c0d10] to-[#050505] backdrop-blur-[100px] relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none" />

                <div className="px-8 py-8 border-b border-white/15 relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                        {shipment.currentStatus === 'delivered' ? (
                          <PackageCheck className="w-8 h-8 text-emerald-400" />
                        ) : (
                          <Truck className="w-8 h-8 text-indigo-400 animate-pulse" />
                        )}
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-indigo-500/20 rounded-full border border-indigo-500/40 mb-1">
                          <span className="text-[8px] font-black uppercase tracking-widest text-indigo-400">Live Status Feed</span>
                        </div>
                        <h2 className="text-3xl font-black text-white capitalize tracking-tighter underline-offset-8">
                          {shipment.currentStatus.replace(/_/g, ' ')}
                        </h2>
                      </div>
                    </div>
                    <div className="bg-indigo-500/15 px-6 py-4 rounded-2xl border border-indigo-500/30 backdrop-blur-xl shadow-[0_4px_24px_rgba(99,102,241,0.1)]">
                      <p className="text-[9px] font-black uppercase tracking-widest text-indigo-400/60 mb-1">Consignment ID</p>
                      <p className="text-xl font-black font-mono tracking-tighter text-white">{shipment.trackingId}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 md:p-8 space-y-10 relative z-10">
                  {/* Integrated Progress Bar with Route */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-end px-1">
                      <div className="space-y-1 max-w-[40%]">
                        <p className="text-[9px] font-black uppercase tracking-widest text-white/50">Origin</p>
                        <p className="text-sm font-bold text-white truncate drop-shadow-sm">{shipment.origin}</p>
                      </div>
                      <div className="text-center">
                        <div className="inline-block px-3 py-1 bg-indigo-500/20 rounded-lg border border-indigo-500/40">
                          <span className="text-[10px] font-black text-indigo-400">{getStatusProgress(shipment.currentStatus)}%</span>
                        </div>
                      </div>
                      <div className="space-y-1 max-w-[40%] text-right">
                        <p className="text-[9px] font-black uppercase tracking-widest text-white/50">Destination</p>
                        <p className="text-sm font-bold text-white truncate drop-shadow-sm">{shipment.destination}</p>
                      </div>
                    </div>
                    
                    <div className="w-full bg-white/10 h-2.5 rounded-full overflow-hidden border border-white/15 p-0.5">
                      <div
                        className="h-full bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-all duration-[1500ms] ease-out relative"
                        style={{ width: `${getStatusProgress(shipment.currentStatus)}%` }}
                      >
                         <div className="absolute inset-0 bg-white/40 animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Second Row: Driver and Last Status */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {shipment.driverName && (
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-between hover:bg-white/10 transition-colors group">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/40 text-indigo-400 font-black text-xs transition-transform group-hover:scale-110">
                             {shipment.driverName.charAt(0)}
                          </div>
                          <div>
                            <p className="text-[8px] font-black uppercase tracking-widest text-white/50">Transit In-Charge</p>
                            <p className="text-sm font-bold text-white leading-none">{shipment.driverName}</p>
                          </div>
                        </div>
                        {shipment.driverPhone && (
                          <a href={`tel:${shipment.driverPhone}`} className="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 active:scale-95 transition-all shadow-lg shadow-indigo-500/30">
                            <Phone size={14} className="fill-current" />
                          </a>
                        )}
                      </div>
                    )}
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/15 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center border border-white/20 shadow-inner">
                        <Clock size={16} className="text-white/60" />
                      </div>
                      <div>
                        <p className="text-[8px] font-black uppercase tracking-widest text-white/50">Last Telemetry</p>
                        <p className="text-sm font-bold text-white/90">
                          {new Date(shipment.updates[shipment.updates.length - 1]?.timestamp).toLocaleDateString(undefined, { day: 'numeric', month: 'short' })} • 
                          <span className="ml-1 opacity-70 font-medium">{new Date(shipment.updates[shipment.updates.length - 1]?.timestamp).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Journey Timeline */}
                  <div className="space-y-6 pt-2">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                      {[
                        { status: 'booked', label: 'Ordered', icon: MapPin },
                        { status: 'packing', label: 'Packed', icon: PackageCheck },
                        { status: 'in_transit', label: 'Shipped', icon: Truck },
                        { status: 'out_for_delivery', label: 'Arrived', icon: MapPin },
                        { status: 'delivered', label: 'Success', icon: PackageCheck },
                      ].map((stage, index) => {
                        const statusOrder = ['booked', 'packing', 'in_transit', 'out_for_delivery', 'delivered'];
                        const currentIndex = statusOrder.indexOf(shipment.currentStatus);
                        const stageIndex = statusOrder.indexOf(stage.status);
                        const isCompleted = currentIndex > stageIndex || (currentIndex === stageIndex && shipment.currentStatus === 'delivered');
                        const isActive = shipment.currentStatus === stage.status;

                        return (
                          <div key={stage.status} className="relative flex md:flex-col items-center gap-3 flex-1">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all duration-700 ${
                              isCompleted ? 'bg-indigo-500 border-indigo-500 text-white shadow-[0_4px_12px_rgba(99,102,241,0.5)] scale-105' :
                              isActive ? 'bg-indigo-500/20 border-indigo-400 text-indigo-400 animate-pulse' :
                              'bg-white/5 border-white/30 text-white/50 border-white/10'
                            }`}>
                              <stage.icon size={16} />
                            </div>
                            <p className={`text-[9px] font-black uppercase tracking-widest ${isActive ? 'text-indigo-400' : isCompleted ? 'text-white' : 'text-white/60'} text-center underline-offset-4 ${isActive ? 'underline decoration-indigo-500/50' : ''}`}>
                              {stage.label}
                            </p>
                            {index < 4 && (
                              <div className="hidden md:block absolute left-[calc(100%-1.25rem)] top-5 w-[calc(100%-1.5rem)] h-[1.5px] bg-white/20 z-0">
                                <div className={`h-full bg-indigo-500 transition-all duration-1000 ${isCompleted ? 'w-full' : 'w-0'} shadow-[0_0_8px_rgba(99,102,241,1)]`} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Activity Logs (Toggled) */}
                  {showFullLogs && (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-500 pt-6 border-t border-white/15 space-y-4">
                       <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400">Detailed Activity Vault</h4>
                       <div className="space-y-4 relative pl-6 border-l border-white/15 ml-1">
                          {shipment.updates.slice().reverse().map((update: any, idx: number) => (
                            <div key={idx} className="relative">
                              <div className={`absolute -left-[30.5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-[#12141e] ${idx === 0 ? 'bg-indigo-400 scale-125 ring-4 ring-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.8)]' : 'bg-white/40'}`} />
                              <div className="flex justify-between items-start gap-4">
                                <div>
                                  <p className="text-xs font-black text-white/95 leading-none">{update.status}</p>
                                  <p className="text-[9px] text-white/60 font-bold uppercase tracking-widest mt-1.5">{update.location}</p>
                                </div>
                                <p className="text-[8px] font-black text-white/50 uppercase whitespace-nowrap bg-white/10 px-2.5 py-1 rounded-md border border-white/10 shadow-sm">{new Date(update.timestamp).toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                              </div>
                            </div>
                          ))}
                       </div>
                    </div>
                  )}

                  <div className="flex justify-center pt-4">
                    <Button 
                      onClick={() => setShowFullLogs(!showFullLogs)}
                      className={`h-11 px-8 rounded-xl font-black text-[9px] tracking-[0.2em] uppercase transition-all duration-300 border border-white/15 shadow-xl ${showFullLogs ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
                    >
                      {showFullLogs ? 'CLOSE ACTIVITY VAULT' : 'EXPAND LOG HISTORY'}
                    </Button>
                  </div>
                </CardContent>

                <div className="bg-white/[0.02] px-8 py-4 text-center border-t border-white/15 relative z-10 backdrop-blur-3xl">
                  <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">
                    Satellite Link Operational • <a href="tel:+917387661300" className="text-white hover:text-indigo-400 transition-colors underline decoration-white/20 underline-offset-4">+91 7387661300</a> • SCPM GROUP
                  </p>
                </div>
              </Card>
            </div>
          )}

          {!shipment && !loading && (
            <p className="mt-8 text-[8px] font-black uppercase tracking-[0.5em] text-white/20 animate-pulse">
              Quantum Secure • Global Logistics • SCPM Group
            </p>
          )}
        </div>
      </section>

      {/* SEO CONTENT SECTION */}
      <section className="py-24 bg-[#0c0d10] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-12 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-white tracking-tighter">Track Your Packers and Movers Shipment in <span className="text-indigo-500">Nagpur</span></h2>
                <div className="prose prose-invert max-w-none text-white/60 leading-relaxed space-y-4 text-sm md:text-base">
                  <p>
                    At Sunita Cargo Packers and Movers, we provide a reliable online cargo tracking system that allows customers to monitor their shipment status in real time. Whether you are shifting your home, relocating your office, or transporting goods to another city, our tracking tool helps you stay informed about your consignment at every stage.
                  </p>
                  <p>
                    Customers can easily track their shipment by entering their phone number or tracking ID in the tracking box above. Once your goods are booked and dispatched, our system updates the shipment status so you can see the current progress of your move.
                  </p>
                  <p>
                    Our professional logistics team ensures safe and timely delivery for local and intercity relocations. We handle household shifting, office relocation, vehicle transport, and cargo logistics services from Nagpur to major cities across India.
                  </p>
                  <p>
                    With our modern transportation network, trained staff, and dedicated support team, we aim to make every relocation process smooth and stress-free.
                  </p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="space-y-8">
                <h3 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-indigo-500 pl-4">Packers and Movers Services in Nagpur</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: Home, title: "Household Shifting Services" },
                    { icon: Building2, title: "Office and Commercial Relocation" },
                    { icon: Car, title: "Car and Bike Transportation" },
                    { icon: LocateFixed, title: "Local Shifting in Nagpur" },
                    { icon: ArrowRightLeft, title: "Intercity Moving Services" },
                    { icon: Package, title: "Secure Packing and Loading" },
                    { icon: Warehouse, title: "Storage and Warehousing Solutions" }
                  ].map((service, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-all group">
                      <service.icon size={20} className="text-indigo-400 mb-3 group-hover:scale-110 transition-transform" />
                      <p className="text-xs font-bold text-white/80">{service.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div className="space-y-8">
                <h3 className="text-xl font-black text-white uppercase tracking-widest border-l-4 border-indigo-500 pl-4">Frequently Asked Questions</h3>
                <div className="grid gap-4">
                  {[
                    { q: "How can I track my cargo shipment?", a: "You can track your shipment by entering your phone number or tracking ID in the tracking box above." },
                    { q: "Is cargo tracking available for moves from Nagpur to other cities?", a: "Yes. Our tracking system works for local shifting within Nagpur and long-distance relocation across India." },
                    { q: "When will tracking updates appear?", a: "Tracking updates are usually available shortly after the shipment is booked and dispatched." },
                    { q: "What if my tracking ID does not work?", a: "If you cannot track your shipment, please contact our customer support team with your booking details." }
                  ].map((faq, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
                      <p className="text-sm font-black text-white flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                        {faq.q}
                      </p>
                      <p className="text-xs text-white/40 leading-relaxed pl-4.5">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="p-8 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/10">
                <h3 className="text-xl font-black text-white mb-6">Why Choose Sunita Cargo Packers and Movers</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Trusted relocation service in Nagpur",
                    "Experienced packing and moving professionals",
                    "Safe and secure transportation",
                    "Real-time shipment tracking",
                    "Affordable pricing with reliable service",
                    "Safe, fast, and dependable moving services"
                  ].map((point, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-indigo-400" />
                      <span className="text-xs font-bold text-white/60">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5">
                <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.2em] text-center">
                  Our goal is to provide safe, fast, and dependable moving services for families and businesses in Nagpur.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
