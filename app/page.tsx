import FeaturesSection from "./components/features/FeaturesSection"
import PricingSection from "./components/pricing/PricingSection"
import FaqSection from "./components/features/FaqSection"
import Header from "./components/ui/Header"
import HeroSection from "./components/features/HeroSection"
import CaseStudySection from "./components/features/CaseStudySection"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header logoSrc="/images/logo.svg" />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CaseStudySection />
        <PricingSection />
        <FaqSection />
      </main>
    </div>
  )
}
