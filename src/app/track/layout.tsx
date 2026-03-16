import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Track Your Packers and Movers Shipment in Nagpur | Sunita Cargo',
  description: 'Monitor your shipment status in real time with Sunita Cargo Packers and Movers. Enter your phone number or tracking ID to track your relocation from Nagpur.',
};

export default function TrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
