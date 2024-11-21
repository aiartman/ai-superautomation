export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-[#f2f2f4] py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 font-['loos-normal']">Refund Policy</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-['loos-normal']">1. Trial Offer Refunds</h2>
            <p className="mb-4">
              For our $100 trial offer, we offer a full refund within 7 days if you&apos;re not satisfied with our service. 
              To be eligible for a refund:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>You must request the refund within 7 days of purchase</li>
              <li>Your account must show evidence of proper usage</li>
              <li>You must provide feedback about why the service didn&apos;t meet your needs</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-['loos-normal']">2. Full Service Refunds</h2>
            <p className="mb-4">
              For our $1500/month full service:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Pro-rated refunds are available within the first 14 days</li>
              <li>After 14 days, refunds are evaluated on a case-by-case basis</li>
              <li>Service cancellations take effect at the end of the current billing cycle</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-['loos-normal']">3. Refund Process</h2>
            <p className="mb-4">To request a refund:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Contact our support team via email</li>
              <li>Provide your account details and reason for refund</li>
              <li>Allow up to 5-7 business days for processing</li>
              <li>Refunds will be issued to the original payment method</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-['loos-normal']">4. Non-Refundable Items</h2>
            <p className="mb-4">The following are not eligible for refunds:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Custom implementation services</li>
              <li>Setup fees</li>
              <li>Services used beyond the refund period</li>
              <li>Accounts that violate our terms of service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 font-['loos-normal']">5. Contact Us</h2>
            <p>
              If you have any questions about our refund policy, please contact us at:
              <br />
              Email: support@aisuperautomation.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 