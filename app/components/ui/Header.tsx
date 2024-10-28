'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "./button"

export default function Header() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
      <Image 
        src="/images/logo.svg" 
        alt="AI Superautomation Logo" 
        width={50} 
        height={50}
        priority 
      />
      <nav>
        <ul className="flex space-x-8">
          {['Home', 'Super Features', 'FAQ', 'Pricing'].map((item, index) => (
            <li key={index}>
              <Link 
                href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`} 
                className="text-gray-800 hover:text-gray-600 font-['Franklin_Gothic_Heavy']"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link href="/contact">
        <Button 
          variant="outline" 
          className="group relative rounded-[20px] px-6 py-2 border-2 border-gray-800 overflow-hidden bg-transparent transition-all duration-300"
        >
          <span className="relative z-10 text-gray-800 group-hover:text-white transition-colors duration-300">
            Contact Us
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle,_white_10%,_transparent_50%)] animate-pulse" />
          </div>
        </Button>
      </Link>
    </header>
  )
}
