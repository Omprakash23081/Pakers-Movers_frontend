import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sunitacargopackersmovers.com'),
  title: 'Sunita Cargo Packers Movers (Nagpur) | Top Rated Shifting Services',
  description: 'Best Packers and Movers in Nagpur. We provide safe, affordable, and professional home shifting, office relocation, and car transport services across India.',
  keywords: 'Sunita Cargo Packers Movers, Best Packers and Movers Nagpur, House Shifting Service Nagpur, Car and Bike Transport Nagpur, Office Relocation Nagpur',
  openGraph: {
    title: 'Sunita Cargo Packers Movers (Nagpur)',
    description: 'Best Packers and Movers in Nagpur for fast and secure shifting.',
    url: 'https://sunitacargopackersmovers.com',
    siteName: 'Sunita Cargo Packers Movers',
    images: [
      {
        url: 'https://sunitacargopackersmovers.com/og-image.jpg', // Placeholder
        width: 1200,
        height: 630,
        alt: 'Sunita Cargo Packers Movers Nagpur',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

import FloatingButtons from '@/components/layout/FloatingButtons';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sunita Cargo Packers Movers",
  "image": "https://sunitacargopackersmovers.com/og-image.jpg",
  "url": "https://sunitacargopackersmovers.com",
  "telephone": "+917387661300",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plot No. 78 B, Sariputra Housing society, Ganesh Nagar, Dawalameti, Amravati Road, Wadi",
    "addressLocality": "Nagpur",
    "addressRegion": "MH",
    "postalCode": "440023",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.1042,
    "longitude": 79.0527
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        {/* Inject SEO Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-grow pt-[88px]">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
