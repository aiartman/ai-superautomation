'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "../../components/ui/button"
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative overflow-hidden min-h-[800px] flex flex-col">
      {/* Main content container with padding bottom for wave */}
      <div className="container mx-auto px-4 pt-8 pb-48 text-center relative z-10 flex-grow">
        <div className={`transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}>
          <Image 
            src="/images/linkedin-calendar.png" 
            alt="LinkedIn and Calendar icons" 
            width={100} 
            height={75} 
            className="mx-auto mb-12"
            priority
          />
        </div>
        <h1 className="text-6xl font-bold mb-6 font-['loos-normal']">&quot;AI Superautomation&quot;</h1>
        <p className="text-3xl mb-6 ['loos-normal']">10x Your Outreach...Without 10X The Work</p>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg font-['franklin-gothic-atf']">
          Revolutionize your LinkedIn strategy with our cutting-edge &quot;Superautomation&quot; Breakthrough. Reach more prospects, close more deals, all while saving time.
        </p>
        <Button 
          variant="outline" 
          className="group relative mb-20 rounded-full px-12 py-4 text-xl border-2 border-gray-800 bg-[#f2f2f4] overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => router.push('/deals')}
        >
          <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
            View Our Special Offer
          </span>
          <div className="absolute inset-0 bg-gray-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
        </Button>
        <p className="text-sm text-gray-500">&quot;Just Do It&quot; - Nike</p>
      </div>

      {/* Wave background container */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[200px] md:h-[300px] lg:h-[400px]">
        <div className="relative w-full h-full">
          <Image
            src="/images/wave-background.png"
            alt="Wavy background"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  )
}
