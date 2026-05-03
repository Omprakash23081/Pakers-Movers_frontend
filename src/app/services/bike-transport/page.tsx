import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bike Transport Services',
  description: 'Scratch-proof bike packing, specialized stands inside trucks, and fast delivery.',
};

export default function BikeTransportPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Bike Transport Services</h1>
      <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        Scratch-proof packing, specialized bike stands inside trucks, and fast delivery.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Choose Our Bike Transport?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Scratch-Proof Packing:</strong> Multi-layer foam and bubble wrap to protect your two-wheeler.</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Specialized Trucks:</strong> We use specialized bike stands and tie-downs inside our trucks to prevent shifting.</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Fast Delivery:</strong> Efficient routing to ensure your bike reaches you as quickly as possible.</p>
            </li>
          </ul>
        </div>
        <div className="bg-muted rounded-xl p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
          <ol className="list-decimal list-inside space-y-3">
            <li>Mirror removal and careful wrapping</li>
            <li>Multi-layer foam and bubble wrapping of the entire bike</li>
            <li>Secure tie-down in the transport vehicle</li>
            <li>Delivery and un-wrapping</li>
          </ol>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Do I need to empty the fuel tank?</h4>
            <p className="text-muted-foreground">Yes, for safety reasons, the fuel tank must be drained prior to transport to prevent fire hazards.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Do you transport superbikes or cruisers?</h4>
            <p className="text-muted-foreground">Yes, we have specialized equipment and experience in safely transporting high-end superbikes and heavy cruisers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
