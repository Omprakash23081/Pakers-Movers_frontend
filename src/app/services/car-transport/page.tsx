import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Car Transport Services',
  description: 'Door-to-door car pickup and delivery, closed car carrier trucks, and full transit insurance.',
};

export default function CarTransportPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Car Transport Services</h1>
      <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        Secure, scratch-free vehicle transportation. Door-to-door pickup and delivery.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Choose Our Car Transport?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Closed Car Carriers:</strong> We use specialized closed carriers to protect your vehicle from weather and road debris.</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Door-to-Door Delivery:</strong> We pick up your car from your doorstep and deliver it exactly where you need it.</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Transit Insurance:</strong> Complete peace of mind with our comprehensive transit insurance coverage.</p>
            </li>
          </ul>
        </div>
        <div className="bg-muted rounded-xl p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
          <ol className="list-decimal list-inside space-y-3">
            <li>Vehicle inspection report and condition check</li>
            <li>Secure lashing inside the carrier</li>
            <li>GPS tracking during transit</li>
            <li>Delivery and final sign-off</li>
          </ol>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-8 md:p-12 mb-20 text-center border border-border shadow-sm">
        <h2 className="text-3xl font-bold mb-4">Pricing Insight</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Based on car type (Hatchback, Sedan, SUV) and distance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-background rounded-lg border border-border">
            <h4 className="font-semibold text-xl mb-2">Hatchback</h4>
            <p className="text-muted-foreground">Contact for estimate</p>
          </div>
          <div className="p-6 bg-background rounded-lg border border-border">
            <h4 className="font-semibold text-xl mb-2">Sedan</h4>
            <p className="text-muted-foreground">Contact for estimate</p>
          </div>
          <div className="p-6 bg-background rounded-lg border border-border">
            <h4 className="font-semibold text-xl mb-2">SUV / Luxury</h4>
            <p className="text-muted-foreground">Contact for estimate</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Is my car insured during transit?</h4>
            <p className="text-muted-foreground">Yes, comprehensive transit insurance is provided for all car transports.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Can I pack personal belongings in the car?</h4>
            <p className="text-muted-foreground">For safety and regulatory reasons, we recommend not keeping personal belongings in the car during transport.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
