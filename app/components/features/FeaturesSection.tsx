'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { features, type Feature } from '../../lib/data/features'

export default function FeaturesSection() {
  const [mounted, setMounted] = useState(false)
  const [activeFeature, setActiveFeature] = useState<number>(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleMouseEnter = (index: number) => {
    if (activeFeature !== index) {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveFeature(index)
        setIsTransitioning(false)
      }, 300)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <section id="features" className="bg-white py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-stretch min-h-[500px]">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 flex flex-col">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Features</h2>
            <p className="text-lg text-[#6a6d75] mb-6">
              Supercharge your LinkedIn Lead Generation with Our Automation Powerhouse
            </p>
            <div className="space-y-6 flex-grow">
              {features.map((feature: Feature, index: number) => (
                <div key={index}>
                  <div
                    className={`flex items-start space-x-4 cursor-pointer mb-4 ${
                      activeFeature === index ? 'bg-gray-50 rounded-lg p-2 -ml-2' : ''
                    }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    <div className="bg-gray-200 rounded-full p-2 flex-shrink-0">
                      <Image
                        src={`/icons/${feature.icon}`}
                        alt={`${feature.title} icon`}
                        width={24}
                        height={24}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                      <p className="text-sm text-[#6a6d75]">{feature.description}</p>
                    </div>
                  </div>
                  {index < features.length - 1 && <hr className="border-gray-200" />}
                </div>
              ))}
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full lg:w-1/2 relative">
            <div
              className={`bg-[#d3d5dd] p-6 lg:p-8 rounded-lg flex flex-col min-h-[500px] transition-all duration-600 ease-in-out transform
                ${isTransitioning ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}
            >
              <div className="relative z-10">
                <h3 
                  className={`text-2xl font-bold text-gray-800 mb-2 transition-all duration-600 ease-in-out transform
                    ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}
                >
                  {features[activeFeature].title}
                </h3>
                <p 
                  className={`text-sm text-[#6a6d75] mb-4 transition-all duration-600 ease-in-out transform
                    ${isTransitioning ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}
                >
                  {features[activeFeature].hoverText}
                </p>
              </div>
              
              <div className="flex-1 relative">
                <div className="w-full h-full relative">
                  <Image
                    src={features[activeFeature].bgImage}
                    alt={`${features[activeFeature].title} illustration`}
                    width={800}
                    height={600}
                    className={`transition-all duration-600 ease-in-out transform
                      ${isTransitioning ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}
                      w-full h-full object-contain`}
                    priority
                    onError={() => {
                      console.error('Image failed to load:', features[activeFeature].bgImage);
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully:', features[activeFeature].bgImage);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
