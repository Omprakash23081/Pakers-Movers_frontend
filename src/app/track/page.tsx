"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { Search, Map, PackageCheck, Truck, Phone, ChevronRight, Clock, MapPin } from 'lucide-react';

export default function TrackShipment() {
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setLoading(true);
    setError('');
    setShipment(null);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://pakers-movers-backend.onrender.com/api';
      const res = await fetch(`${baseUrl}/shipments/track/${trackingId.toUpperCase()}`);
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

  const getStatusProgress = (status: string) => {
    switch (status) {
      case 'booked': return 10;
      case 'packing': return 30;
      case 'in_transit': return 65;
      case 'out_for_delivery': return 90;
      case 'delivered': return 100;
      default: return 0;
    }
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col">
      <section className="bg-gradient-to-br from-primary/10 to-background pt-20 pb-32 border-b border-border flex-grow flex items-center justify-center relative overflow-hidden">

        {/* Background Maps Illustration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
            <PackageCheck size={16} className="mr-2" />
            Real-Time Live Tracking
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 mt-2 text-balance">
            Track Your <span className="text-primary">Shipment</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 text-balance leading-relaxed">
            Enter your AWB / Consignment number provided during booking to instantly check the live status of your cargo.
          </p>

          <Card className="shadow-stripe border-white/20 glass-panel relative overflow-hidden text-left bg-background p-2 max-w-2xl mx-auto rounded-2xl mb-12">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-sm font-medium ml-1">Consignment ID or tracking number</label>
                  <div className="relative">
                    <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      className="w-full h-14 pl-12 pr-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-lg font-medium tracking-wide uppercase"
                      placeholder="e.g. SSD-NGP-8921"
                      value={trackingId}
                      onChange={(e) => setTrackingId(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex items-end">
                  <Button type="submit" disabled={loading} size="lg" className="w-full md:w-auto h-14 px-8 text-lg rounded-xl shadow-apple whitespace-nowrap">
                    {loading ? 'Searching...' : 'Track Now'}
                  </Button>
                </div>
              </form>
              {error && (
                <div className="mt-4 p-4 rounded-xl bg-destructive/10 text-destructive text-sm font-medium border border-destructive/20 text-center">
                  {error}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Tracking Result */}
          {shipment && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-2xl mx-auto text-left">
              <Card className="border-primary/20 shadow-2xl overflow-hidden rounded-3xl bg-secondary/5 backdrop-blur-xl">
                <div className="bg-primary/10 px-8 py-6 border-b border-primary/10 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Status</p>
                    <h2 className="text-2xl font-bold text-foreground capitalize tracking-tight flex items-center gap-2">
                      <Truck className="w-6 h-6 text-primary" />
                      {shipment.currentStatus.replace(/_/g, ' ')}
                    </h2>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Transit ID</p>
                    <p className="text-lg font-bold font-mono tracking-tighter text-foreground">{shipment.trackingId}</p>
                  </div>
                </div>

                <CardContent className="p-8 space-y-10">
                  {/* Route & Driver Info */}
                  <div className="grid md:grid-cols-2 gap-8 p-6 rounded-2xl bg-primary/5 border border-primary/10">
                    <div className="space-y-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">Service Route</p>
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-foreground">{shipment.origin}</span>
                          <ChevronRight className="w-4 h-4 text-primary" />
                          <span className="font-bold text-foreground">{shipment.destination}</span>
                        </div>
                      </div>
                    </div>

                    {/* Driver Detail - Highlighting this as per user request */}
                    {shipment.driverName && (
                      <div className="space-y-2 border-l border-primary/20 md:pl-8">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary">In-Charge Driver</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-lg font-bold text-foreground">{shipment.driverName}</p>
                            <div className="flex gap-4 mt-1">
                              {shipment.driverPhone && <p className="text-xs text-muted-foreground font-medium">{shipment.driverPhone}</p>}
                              {shipment.vehicleNumber && (
                                <p className="text-xs text-primary font-bold uppercase">Vehicle: {shipment.vehicleNumber}</p>
                              )}
                            </div>
                          </div>
                          {shipment.driverPhone && (
                            <a
                              href={`tel:${shipment.driverPhone}`}
                              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
                              title="Contact Driver"
                            >
                              <Phone className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                      <span className="text-muted-foreground">Journey Progress</span>
                      <span className="text-primary">{getStatusProgress(shipment.currentStatus)}%</span>
                    </div>
                    <div className="w-full bg-border h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary shadow-lg shadow-primary/20 transition-all duration-1000"
                        style={{ width: `${getStatusProgress(shipment.currentStatus)}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Journey Timeline - Flipkart style */}
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-black uppercase tracking-widest text-foreground flex items-center gap-2">
                        <Map className="w-4 h-4 text-primary" />
                        Shipment Journey
                      </h3>
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground bg-secondary/20 px-2 py-1 rounded">
                        Updated {new Date(shipment.updates[shipment.updates.length - 1]?.timestamp).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-2 px-2 pb-4">
                      {/* Connecting Line (Desktop) */}
                      <div className="hidden md:block absolute left-10 right-10 top-[22px] h-0.5 bg-border z-0">
                        <div
                          className="h-full bg-primary transition-all duration-1000 shadow-[0_0_8px_rgba(var(--primary),0.5)]"
                          style={{ width: `${getStatusProgress(shipment.currentStatus)}%` }}
                        />
                      </div>

                      {/* Connecting Line (Mobile) */}
                      <div className="md:hidden absolute left-[22px] top-6 bottom-6 w-0.5 bg-border z-0">
                        <div
                          className="w-full bg-primary transition-all duration-1000"
                          style={{ height: `${getStatusProgress(shipment.currentStatus)}%` }}
                        />
                      </div>

                      {[
                        { status: 'booked', label: 'Booked', icon: MapPin, prefix: 'at' },
                        { status: 'packing', label: 'Packing', icon: PackageCheck, prefix: 'at' },
                        { status: 'in_transit', label: 'In Transit', icon: Truck, prefix: 'shipped at' },
                        { status: 'out_for_delivery', label: 'Out for Delivery', icon: Truck, prefix: 'at' },
                        { status: 'delivered', label: 'Delivered', icon: PackageCheck, prefix: 'at' },
                      ].map((stage, index) => {
                        const statusOrder = ['booked', 'packing', 'in_transit', 'out_for_delivery', 'delivered'];
                        const currentIndex = statusOrder.indexOf(shipment.currentStatus);
                        const stageIndex = statusOrder.indexOf(stage.status);

                        const isCompleted = currentIndex > stageIndex || (currentIndex === stageIndex && shipment.currentStatus === 'delivered');
                        const isActive = shipment.currentStatus === stage.status && shipment.currentStatus !== 'delivered';

                        // Find the update for this stage to get the date and time
                        const update = shipment.updates.find((u: any) =>
                          u.status.toLowerCase().replace(/_/g, ' ') === stage.label.toLowerCase() ||
                          (stage.status === 'booked' && u.status.toLowerCase().includes('booked'))
                        );

                        const formatDateTime = (dateStr: string) => {
                          const d = new Date(dateStr);
                          return {
                            date: d.toLocaleDateString(),
                            time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                          };
                        };

                        const dateTime = update ? formatDateTime(update.timestamp) : null;

                        return (
                          <div key={stage.status} className="relative z-10 flex md:flex-col items-center gap-4 md:gap-3 flex-1">
                            <div className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${isCompleted ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' :
                              isActive ? 'bg-background border-primary text-primary shadow-lg ring-4 ring-primary/10' :
                                'bg-background border-border text-muted-foreground'
                              }`}>
                              <stage.icon size={20} className={isActive ? 'animate-pulse' : ''} />
                            </div>
                            <div className="text-left md:text-center">
                              <p className={`text-sm font-bold ${isActive ? 'text-primary' : isCompleted ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {stage.label}
                              </p>
                              {dateTime && (
                                <p className="text-[10px] text-muted-foreground font-medium mt-0.5 leading-tight">
                                  {stage.prefix} {dateTime.date} <br className="hidden md:block" /> {dateTime.time}
                                </p>
                              )}
                              {!dateTime && isActive && (
                                <p className="text-[10px] text-primary font-bold mt-0.5">In Progress</p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Activities Detail - Secondary View */}
                  <div className="space-y-6 pt-6 border-t border-border">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      Detailed Activity Logs
                    </h3>
                    <div className="space-y-4 relative pl-5">
                      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/50"></div>
                      {shipment.updates.slice().reverse().map((update: any) => (
                        <div key={idx} className="relative">
                          <div className={`absolute -left-[22px] top-1.5 w-2 h-2 rounded-full border border-background ${idx === 0 ? 'bg-primary ring-2 ring-primary/20' : 'bg-muted-foreground/30'}`}></div>
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-xs font-bold text-foreground flex items-center gap-1.5">
                                {update.status}
                              </p>
                              {update.location && (
                                <span className="text-[10px] text-muted-foreground flex items-center gap-1 mt-0.5">
                                  <MapPin className="w-2.5 h-2.5" />
                                  {update.location}
                                </span>
                              )}
                            </div>
                            <div className="text-right">
                              <span className="block text-[10px] text-muted-foreground font-bold">{new Date(update.timestamp).toLocaleDateString()}</span>
                              <span className="block text-[9px] text-muted-foreground/70 font-medium">{new Date(update.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <div className="bg-secondary/10 px-8 py-5 text-center">
                  <p className="text-xs text-muted-foreground">
                    Need help? Contact our support at <a href="tel:+917387661300" className="text-primary font-bold">+91 7387661300</a>
                  </p>
                </div>
              </Card>
            </div>
          )}

          {!shipment && (
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Map size={16} /> GPS integrated trucks update location every 15 minutes.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
