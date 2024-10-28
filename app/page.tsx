import dynamic from 'next/dynamic'

const FeaturesSection = dynamic(() => import('./components/features/FeaturesSection'))
const PricingSection = dynamic(() => import('./components/pricing/PricingSection'))
const FaqSection = dynamic(() => import('./components/features/FaqSection'))
const Header = dynamic(() => import('./components/ui/Header'))
const Footer = dynamic(() => import('./components/ui/Footer'))
const HeroSection = dynamic(() => import('./components/features/HeroSection'))
const CaseStudySection = dynamic(() => import('./components/features/CaseStudySection'))

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CaseStudySection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
