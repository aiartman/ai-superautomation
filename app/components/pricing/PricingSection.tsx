'use client'

import { PricingPanel } from './PricingPanel'

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <PricingPanel
            title="Special Offer"
            headline="Exclusive Black Friday Deal"
            price="$100 - One Time"
            features={[
              "One fully managed LinkedIn account (100+ connections)",
              "Automated outreach sequences cloned from YOUR process",
              "Full setup and support"
            ]}
            additionalInfo="Everything is exactly the same as the 'full offer' option except the number of accounts you get."
            idealFor={[
              "Those who already get 2+ clients per month",
              "Already have a proven outreach process on LinkedIn.",
              "Note: Do not Apply if you are a beginner with no experience of closing clients on LinkedIn."
            ]}
            ctaText="Start your Trial"
            footnote="Please Read: We only take in 10 or so trial accounts per month because of the care and time it takes to setup. These spots do tend to fill up quickly. Click on the button above to see if this option is available for the month."
            isDark={true}
          />
          <PricingPanel
            title="Full Offer"
            headline="AI Superautomation: Full Service"
            price="$1500/month"
            features={[
              "10 fully managed LinkedIn account (100+ connections)",
              "Comprehensive automation across all accounts",
              "Full setup and ongoing support",
              "Guaranteed account replacement if something goes down",
              "24-48 hour Setup and Delivery"
            ]}
            idealFor={[
              "Reaching 10x the prospects that you are reaching right now.",
              "If you don't have the energy or the time to scale (and are sick of slowly scaling on LinkedIn)",
              "Potential 3x ROI in first month* (depending on your offer price and closing rate)"
            ]}
            ctaText="Click to continue"
            footnote="Note: This service is eqivalent to hiring 10 VAs or 10 appointment setters. The cost of doing that is not less than $10k-$20k per month. Also, there is no human error, you don't have to worry about management, etc."
          />
        </div>
      </div>
    </section>
  )
}
