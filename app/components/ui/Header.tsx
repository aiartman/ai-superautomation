'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "./button"

interface HeaderProps {
  logoSrc?: string
}

export default function Header({ logoSrc }: HeaderProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <header className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <div className="w-12 h-12" /> {/* Placeholder for logo */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Super Features', 'FAQ', 'Pricing'].map((item, index) => (
            <div key={index} className="h-6" /> // Placeholder for nav items
          ))}
        </nav>
        <div className="w-24 h-10" /> {/* Placeholder for button */}
      </header>
    )
  }

  return (
    <header className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
      <Link href="/" className="relative w-12 h-12">
        <Image 
          src={logoSrc || "/icons/ai-logo.png"} 
          alt="AI Logo" 
          width={48}
          height={48}
          className="object-contain" 
          priority
        />
      </Link>
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
