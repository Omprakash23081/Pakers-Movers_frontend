import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'House Shifting Services',
  description: 'Stress-free, secure, and affordable house shifting services. Full packing and unpacking included.',
};

export default function HouseShiftingPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">House Shifting Services</h1>
      <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        Stress-free, minimal disruption, full packing and unpacking included. We make moving homes easy.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Choose Our House Shifting?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Zero-Damage Policy:</strong> We use multi-layer bubble wrapping, customized cartons, and foam edge guards.</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Transparent Pricing:</strong> No hidden charges. The quote we give is the price you pay.</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Dedicated Move Manager:</strong> One point of contact from packing to unloading.</p>
            </li>
          </ul>
        </div>
        <div className="bg-muted rounded-xl p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
          <ol className="list-decimal list-inside space-y-3">
            <li>Pre-move survey and planning</li>
            <li>Segregation of fragile/heavy items</li>
            <li>Expert packing using premium materials</li>
            <li>Careful loading and secure transit</li>
            <li>Unpacking and placing items at destination</li>
          </ol>
        </div>
      </div>

      <div className="bg-card rounded-2xl p-8 md:p-12 mb-20 text-center border border-border shadow-sm">
        <h2 className="text-3xl font-bold mb-4">Pricing Insight</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Cost depends on your BHK size, floor level, and distance.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-background rounded-lg border border-border">
            <h4 className="font-semibold text-xl mb-2">1 BHK Shifting</h4>
            <p className="text-muted-foreground">Starting from ₹4,000</p>
          </div>
          <div className="p-6 bg-background rounded-lg border border-border">
            <h4 className="font-semibold text-xl mb-2">2 BHK Shifting</h4>
            <p className="text-muted-foreground">Starting from ₹6,000</p>
          </div>
          <div className="p-6 bg-background rounded-lg border border-border">
            <h4 className="font-semibold text-xl mb-2">3+ BHK Shifting</h4>
            <p className="text-muted-foreground">Starting from ₹9,500</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">How long does local house shifting take?</h4>
            <p className="text-muted-foreground">Usually 4-8 hours for a standard 2 BHK.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Do you provide packing materials?</h4>
            <p className="text-muted-foreground">Yes, all materials are included in the quote.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
