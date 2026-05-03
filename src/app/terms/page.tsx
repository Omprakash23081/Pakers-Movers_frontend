import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Sunita Cargo Packers Movers',
  description: 'Terms of Service for Sunita Cargo Packers Movers',
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the services of Sunita Cargo Packers Movers, you agree to comply with and be bound by these Terms of Service.</p>
        
        <h2>2. Services Provided</h2>
        <p>We provide packing, moving, transportation, and storage services. All services are subject to availability and our prior assessment.</p>
        
        <h2>3. Estimates and Pricing</h2>
        <p>Estimates provided online or over the phone are subject to change based on a physical survey of the goods to be moved.</p>
        
        <h2>4. Liability and Insurance</h2>
        <p>While we take the utmost care in handling your belongings, we recommend purchasing transit insurance for comprehensive coverage during the move.</p>
        
        <h2>5. Contact</h2>
        <p>For any questions regarding these terms, please contact us at info.sunitacargopackersmovers@gmail.com.</p>
      </div>
    </div>
  );
}
