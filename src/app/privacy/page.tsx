import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sunita Cargo Packers Movers',
  description: 'Privacy Policy for Sunita Cargo Packers Movers',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        
        <h2>1. Introduction</h2>
        <p>At Sunita Cargo Packers Movers, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>
        
        <h2>2. Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, phone number, and moving details when you use our website or services.</p>
        
        <h2>3. How We Use Your Information</h2>
        <p>We use your information to provide moving estimates, coordinate your relocation, and communicate with you about our services.</p>
        
        <h2>4. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
        
        <h2>5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at info.sunitacargopackersmovers@gmail.com.</p>
      </div>
    </div>
  );
}
