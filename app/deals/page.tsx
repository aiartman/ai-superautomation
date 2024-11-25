"use client"

import { useState } from 'react'
import { Button } from "@/app/components/ui/button"
import { Card } from "@/app/components/ui/card"
import { ChevronDown, ChevronUp, Play, ShoppingCart, Star, Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import Script from 'next/script'

const testimonials = [
  { name: "Sarah L.", role: "Marketing Director", comment: "AI Superautomation revolutionized our workflow. We&apos;ve seen a 300% increase in productivity!" },
  { name: "John D.", role: "Tech Entrepreneur", comment: "This tool is a game-changer. It is like having a team of 10 Really Good Salespeople at your fingertips." },
  { name: "Emily R.", role: "Sales Manager", comment: "Seriously blown away by the results. My LinkedIn connections are through the roof!" },
  { name: "Michael K.", role: "Small Business Owner", comment: "AI Superautomation paid for itself within a week. My only regret is not getting it sooner!" },
]

const BlackFridayDeal = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null)
  const router = useRouter()
  const [showWistiaVideo, setShowWistiaVideo] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index)
  }

  const faqItems = [
    {
      question: "What makes this Black Friday deal special?",
      answer: "Our AI Superautomation service is offered at an unprecedented 93% discount, providing enterprise-level LinkedIn automation at a fraction of the cost. This deal is exclusively available during Black Friday."
    },
    {
      question: "How quickly can I see results?",
      answer: "Many clients see a significant increase in LinkedIn connections and leads within the first week. However, for optimal results, we recommend using the service for at least a month to allow the AI to fully optimize your outreach strategy."
    },
    {
      question: "Is there a money-back guarantee?",
      answer: "We don't offer a money-back guarantee, but we do offer a 100% satisfaction guarantee. If you're not satisfied with the results, simply reach out to our support team and personally fix the issue to the best of our ability."
    },
    {
      question: "How does AI Superautomation compare to hiring a VA?",
      answer: "AI Superautomation offers 24/7 operation, consistent performance, and advanced data-driven optimization that a human VA simply can&apos;t match. Plus, at this Black Friday price, it is a fraction of the cost of hiring a full-time VA."
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Include Wistia Scripts */}
      {showWistiaVideo && (
        <>
          <Script
            src="https://fast.wistia.com/embed/medias/sc5aal2t39.jsonp"
            strategy="lazyOnload"
          />
          <Script
            src="https://fast.wistia.com/assets/external/E-v1.js"
            strategy="lazyOnload"
          />
        </>
      )}

      {/* Header Section */}
      <header className="bg-white py-4 px-6 shadow-md relative z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-800 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-center flex-1 md:flex-none md:justify-start">
            <Link href="/">
              <Image 
                src="/images/logo.png" 
                alt="AI Superautomation Logo" 
                width={50} 
                height={50} 
                className="object-contain"
              />
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="/" className="text-gray-800 hover:text-gray-600">Home</Link></li>
              <li>
                <button onClick={() => scrollToSection('offer')} className="text-gray-800 hover:text-gray-600">
                  Offer
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-800 hover:text-gray-600">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="text-gray-800 hover:text-gray-600">
                  FAQ
                </button>
              </li>
            </ul>
          </nav>

          <Button 
            variant="outline" 
            className="rounded-[20px] px-6 border-2 border-gray-800 text-gray-800 hover:bg-gray-100"
            onClick={() => router.push('/contact')}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-x-0 top-[72px] bg-white shadow-lg z-50 md:hidden">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/" 
                    className="block py-2 text-gray-800 hover:text-gray-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      scrollToSection('offer')
                      setIsMobileMenuOpen(false)
                    }} 
                    className="block w-full text-left py-2 text-gray-800 hover:text-gray-600"
                  >
                    Offer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      scrollToSection('testimonials')
                      setIsMobileMenuOpen(false)
                    }} 
                    className="block w-full text-left py-2 text-gray-800 hover:text-gray-600"
                  >
                    Testimonials
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      scrollToSection('faq')
                      setIsMobileMenuOpen(false)
                    }} 
                    className="block w-full text-left py-2 text-gray-800 hover:text-gray-600"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Finally! &quot;AI Superautomation&quot; LinkedIn Breakthrough Revealed
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 md:mb-12">
              Discover how fast it can revolutionize your Business with our Black Friday Deal
            </p>
            <div className="relative max-w-3xl mx-auto aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-2xl mb-8">
              {showWistiaVideo ? (
                <div className="relative w-full h-full">
                  <iframe
                    src="https://fast.wistia.net/embed/iframe/sc5aal2t39?autoPlay=1&seo=false"
                    title="Wistia Video"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
                  ></iframe>
                </div>
              ) : (
                <div
                  className="relative w-full h-full cursor-pointer group"
                  onClick={() => setShowWistiaVideo(true)}
                >
                  <Image
                    src="/images/video-thumbnail.gif" // Ensure this GIF is in your public/images folder
                    alt="Video thumbnail"
                    fill
                    className="object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
                    <Button
                      className="cosmic-button flex items-center space-x-2 transform scale-100 group-hover:scale-105 transition-transform duration-300"
                    >
                      <Play className="h-5 w-5" />
                      <span>Play Video</span>
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <Button
              className="bg-gray-800 hover:bg-gray-700 text-white text-lg md:text-xl py-4 md:py-6 px-8 md:px-12 rounded-lg flex items-center justify-center mx-auto transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
              onClick={() => router.push('/checkout')}
            >
              <ShoppingCart className="mr-2" /> Get The Deal Now
            </Button>
          </div>
        </section>

        {/* Deal Section */}
        <section id="offer" className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-8 md:mb-12">Your Exclusive Black Friday Offer</h2>
            <Card className="max-w-4xl mx-auto p-4 md:p-8 bg-gray-100 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">AI Superautomation: Black Friday Special</h3>
                  <p className="text-lg md:text-xl text-gray-600">Limited Time Offer - 93% OFF</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">$99</p>
                  <p className="text-xl md:text-2xl text-gray-600"><span className="line-through">$1230</span></p>
                </div>
              </div>
              <div className="mb-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Here&apos;s what you&apos;ll get in your &quot;test drive&quot; of AI Super-Automation:</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 text-grey-300">1.</span>
                      <span>A premium LinkedIn account – yours for a fraction of the cost (valued at $150)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-grey-500">2.</span>
                      <span>A state-of-the-art automation tool – turning hours into mere minutes (valued at $80)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-grey-500">3.</span>
                      <span>Exclusive video guides – showing you how to zero in on your dream clients (valued at $500)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-grey-500">4.</span>
                      <span>24/7 direct access to our team of experts – because you&apos;re never stuck alone (valued at $500)</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-lg font-semibold text-gray-800">Total value: $1230</p>
                    <p className="text-2xl font-bold text-gray-800 mt-2">Your investment: Just $99</p>
                  </div>
                </div>
              </div>
              <Button 
                className="w-full bg-gray-800 hover:bg-gray-700 text-white text-xl py-6 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                onClick={() => router.push('/checkout')}
              >
                <ShoppingCart className="mr-2" /> Claim Your Black Friday Deal Now
              </Button>
              <p className="mt-4 text-sm text-gray-600 text-center">
                This offer is valid only for the Black Friday period. Don&apos;t miss out on this incredible opportunity!
              </p>
            </Card>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-4 italic">
                    &quot;{testimonial.comment}&quot;
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 md:py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="mb-4 md:mb-6">
                  <button
                    className="flex items-center justify-between w-full text-left text-lg md:text-xl font-semibold bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    onClick={() => toggleQuestion(index)}
                  >
                    <span className="text-gray-800 pr-8">{item.question}</span>
                    {activeQuestion === index ? <ChevronUp className="text-gray-600 flex-shrink-0" /> : <ChevronDown className="text-gray-600 flex-shrink-0" />}
                  </button>
                  {activeQuestion === index && (
                    <div className="bg-gray-50 p-4 md:p-6 rounded-b-lg mt-2 shadow-inner">
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gray-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Don&apos;t Miss This Once-in-a-Year Opportunity</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">Join the AI revolution and supercharge your LinkedIn growth today!</p>
            <Button 
              className="bg-white hover:bg-gray-200 text-gray-800 text-lg md:text-xl py-4 px-6 md:px-8 rounded-lg w-full md:w-auto"
              onClick={() => router.push('/checkout')}
            >
              Claim Your Black Friday Deal Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default BlackFridayDeal 