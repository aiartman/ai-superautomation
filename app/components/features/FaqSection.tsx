'use client'

import { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import { faqs, type FAQ } from '../../lib/data/features'

export default function FaqSection() {
  const [mounted, setMounted] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section id="faq" className="bg-gray-200 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-4">
            {faqs.map((faq: FAQ, index: number) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div 
                  className="flex items-center justify-between p-4 cursor-pointer"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-gray-400">Q</span>
                    <span className="text-xl text-gray-800">{faq.question}</span>
                  </div>
                  <ChevronRight className={`h-6 w-6 transition-transform duration-300 ${openFaqIndex === index ? 'transform rotate-90' : ''}`} />
                </div>
                {openFaqIndex === index && (
                  <div className="p-4 bg-gray-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="relative h-full">
            <div className="absolute right-0 top-0 w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="80" stroke="#4B5563" strokeWidth="2"/>
                <circle cx="100" cy="100" r="60" stroke="#4B5563" strokeWidth="2"/>
                <circle cx="100" cy="100" r="40" stroke="#4B5563" strokeWidth="2"/>
                <path d="M100 20A80 80 0 0 1 180 100" stroke="#4B5563" strokeWidth="4"/>
                <path d="M100 40A60 60 0 0 1 160 100" stroke="#4B5563" strokeWidth="4"/>
                <path d="M100 60A40 40 0 0 1 140 100" stroke="#4B5563" strokeWidth="4"/>
                <circle cx="100" cy="100" r="5" fill="#4B5563"/>
                <g transform="translate(140, 140)">
                  <circle cx="0" cy="0" r="30" fill="#4B5563"/>
                  <path d="M-15 0L15 0M0 -15L0 15" stroke="white" strokeWidth="4"/>
                </g>
                <g transform="translate(40, 150)">
                  <circle cx="0" cy="0" r="20" fill="#4B5563"/>
                  <path d="M0 -10L0 0L10 0" stroke="white" strokeWidth="2"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
