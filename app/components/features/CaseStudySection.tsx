import Image from 'next/image'
import { Button } from '../../components/ui/button'

export default function CaseStudySection() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Case Study: How &quot;AI Superautomation&quot; Tripled Sales
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Discover how we leveraged &quot;AI Superautomation&quot; to generate 400 connection requests per week and tripled our sales in half the time.
            </p>
            <Button 
              className="group relative bg-transparent border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg text-lg font-semibold overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Read Now
              </span>
              <div className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-1/2">
              <Image
                src="/images/ai-superautomation-illustration.png"
                alt="AI Superautomation Illustration"
                width={500}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
