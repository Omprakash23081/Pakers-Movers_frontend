import React from 'react';

interface LocalBusinessSchemaProps {
  city?: string;
}

export default function LocalBusinessSchema({ city = 'Nagpur' }: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "name": "Sunita Cargo Packers Movers",
    "alternateName": "Sunita Cargo Packers & Movers Nagpur",
    "description": `IBA-approved packers and movers in ${city}. 15+ years experience in house shifting, office relocation, and vehicle transport with 100% safety guarantee.`,
    "url": "https://sunitacargopackersmovers.com",
    "logo": "https://sunitacargopackersmovers.com/logo.png",
    "image": "https://sunitacargopackersmovers.com/og-image.jpg",
    "telephone": "+917387661300",
    "email": "info.sunitacargopackersmovers@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 78 B, Sariputra Housing society, Ganesh Nagar, Dawalameti, Amravati Road, Wadi",
      "addressLocality": city,
      "postalCode": "440023",
      "addressRegion": "MH",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1647,
      "longitude": 79.0011
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
    "sameAs": [
      "https://www.facebook.com/sunitacargopackersmovers",
      "https://www.instagram.com/sunitacargopackersmovers"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1250"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
