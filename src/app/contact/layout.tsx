import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Sunita Cargo Packers Movers Nagpur',
  description: 'Get in touch with Sunita Cargo Packers Movers in Nagpur. Visit our head office at Dawalameti, Amravati Road, or call our 24/7 helpline at +91 7387661300 for a free moving quote.',
  keywords: 'Contact Packers and Movers Nagpur, Transport Company Phone Number Nagpur, Sunita Cargo Packers Contact, Nagpur Moving Quote',
  openGraph: {
    title: 'Contact Sunita Cargo Packers Movers Nagpur',
    description: 'Get an instant quote or 24/7 support for your relocation needs.',
    url: 'https://sunitacargopackersmovers.com/contact',
    type: 'website',
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
