import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Office Relocation Services',
  description: 'Zero operational downtime and safe transport of IT equipment with our professional office relocation services.',
};

export default function OfficeRelocationPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Office Relocation Services</h1>
      <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
        Zero operational downtime, safe transport of IT equipment (servers, PCs), and organized file transfer.
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Choose Our Office Shifting?</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Minimal Downtime:</strong> We understand business hours. We move you swiftly so you can get back to work.</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>IT Equipment Handling:</strong> Specialized packing for servers, desktops, and delicate electronics.</p>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-3 text-xl">✓</span>
              <p><strong>Weekend Schedules:</strong> We operate 24/7 and can schedule your move over the weekend.</p>
            </li>
          </ul>
        </div>
        <div className="bg-muted rounded-xl p-8 shadow-sm border border-border">
          <h3 className="text-2xl font-semibold mb-4">Our Process</h3>
          <ol className="list-decimal list-inside space-y-3">
            <li>Detailed floor plan mapping</li>
            <li>IT equipment specialized packing</li>
            <li>Secure and organized transit</li>
            <li>Setup assistance at the new location</li>
            <li>Post-move support</li>
          </ol>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold mb-2">Can you move over the weekend?</h4>
            <p className="text-muted-foreground">Yes, we operate 24/7 to suit your business hours and ensure zero downtime.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">How do you handle confidential documents?</h4>
            <p className="text-muted-foreground">We use secure, sealed containers for sensitive files and documents.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
