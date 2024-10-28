'use client'

import { useState, useEffect } from 'react'

export default function CaseStudyButton() {
  const [isHovering, setIsHovering] = useState(false)
  const [dotPosition, setDotPosition] = useState('left')

  useEffect(() => {
    if (isHovering) {
      const interval = setInterval(() => {
        setDotPosition((prev) => (prev === 'left' ? 'right' : 'left'))
      }, 500)
      return () => clearInterval(interval)
    }
  }, [isHovering])

  return (
    <button
      className="relative bg-gray-800 text-white font-semibold py-3 px-6 rounded-full w-64 transition-all duration-300 ease-in-out hover:bg-gray-700"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false)
        setDotPosition('left')
      }}
    >
      <div className="flex justify-center space-x-1 mb-1">
        <div
          className={`w-2 h-2 rounded-full bg-white transition-all duration-300 ease-in-out ${
            isHovering && dotPosition === 'left' ? 'opacity-100' : 'opacity-50'
          }`}
        ></div>
        <div
          className={`w-2 h-2 rounded-full bg-white transition-all duration-300 ease-in-out ${
            isHovering && dotPosition === 'right' ? 'opacity-100' : 'opacity-50'
          }`}
        ></div>
      </div>
      Read Case Study
    </button>
  )
} 