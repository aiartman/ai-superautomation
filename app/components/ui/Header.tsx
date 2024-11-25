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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  if (!isMounted) {
    return (
      <header className="container mx-auto px-4 py-6 flex items-center justify-between relative z-10">
        <div className="w-12 h-12" />
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Super Features', 'FAQ', 'Pricing'].map((item, index) => (
            <div key={index} className="h-6" />
          ))}
        </nav>
        <div className="w-24 h-10" />
      </header>
    )
  }

  return (
    <header className="container mx-auto px-4 py-6 relative z-50">
      <div className="flex items-center justify-between relative">
        {/* Mobile Navigation - Left */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 hover:text-gray-600 p-2 -ml-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Logo - Center on mobile, Left on desktop */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
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
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <ul className="flex space-x-8">
            {['Home', 'Super Features', 'FAQ', 'Pricing'].map((item, index) => (
              <li key={index}>
                {item === 'Home' ? (
                  <Link 
                    href="/"
                    className="text-gray-800 hover:text-gray-600 font-['Franklin_Gothic_Heavy']"
                  >
                    {item}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-gray-800 hover:text-gray-600 font-['Franklin_Gothic_Heavy']"
                  >
                    {item}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Button */}
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
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[88px] md:hidden bg-white shadow-lg z-50">
          <div className="absolute inset-0 bg-white" />
          <nav className="relative container mx-auto px-4 py-4">
            <ul className="space-y-4">
              {['Home', 'Super Features', 'FAQ', 'Pricing'].map((item, index) => (
                <li key={index}>
                  {item === 'Home' ? (
                    <Link 
                      href="/"
                      className="block w-full text-gray-800 hover:text-gray-600 font-['Franklin_Gothic_Heavy'] py-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                      className="block w-full text-left text-gray-800 hover:text-gray-600 font-['Franklin_Gothic_Heavy'] py-3"
                    >
                      {item}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
