'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { MapPin, Phone, Mail, Loader2, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'https://pakers-movers-backend.onrender.com/api'}/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // Contact form doesn't have these, but backend model might require them if it's shared with QuoteRequest
          movingFrom: 'Contact Page',
          movingTo: 'Contact Page',
          serviceType: 'Inquiry'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || 'Something went wrong. Please try again.'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to connect to the server. Please check if the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-primary/10 to-background pt-8 pb-8 border-b border-border text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 text-balance">
            We&apos;re here to make your relocation seamless. Drop us a message or call our 24/7 hotline for instant support.
          </p>
        </div>
      </section>

      <section className="pt-10 pb-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Contact Details */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you need a quick quote for house shifting, have a question about your ongoing transit, or want to partner with us, our dedicated team in Nagpur is always ready to assist.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg">Head Office (Nagpur)</h3>
                    <p className="text-muted-foreground mt-1 break-words text-sm sm:text-base">Plot No. 78 B, Sariputra Housing society, Ganesh Nagar, Dawalameti, Amravati Road, Wadi, Nagpur, Maharashtra 440023</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg">24/7 Helpline</h3>
                    <p className="text-muted-foreground mt-1 text-lg font-medium">+91 7387661300</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:border-primary/50 transition-colors">
                <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg">Email Address</h3>
                    <p className="text-muted-foreground mt-1 break-all text-sm sm:text-base">info@ssdPackersnagpur.in</p>
                    <p className="text-muted-foreground break-all text-sm sm:text-base">support@ssdPackersnagpur.in</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-3xl p-8 border border-border shadow-apple h-fit">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
                <p className="text-muted-foreground">Thank you for contacting us. Our team will get back to you shortly.</p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <input 
                      type="text" 
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                      placeholder="John" 
                      required 
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                      placeholder="Doe" 
                      required 
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                    placeholder="john@example.com" 
                    required 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" 
                    placeholder="+91 XXXXX XXXXX" 
                    required 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Message / Requirement</label>
                  <textarea 
                    className="w-full p-4 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all min-h-[120px]" 
                    placeholder="I want to shift my 2BHK from Nagpur to Pune next week..." 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg rounded-xl shadow-apple" disabled={loading}>
                  {loading ? <Loader2 className="animate-spin mr-2" /> : "Send Request"}
                </Button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
