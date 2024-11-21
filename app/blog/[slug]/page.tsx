'use client'

import { useState, useEffect } from 'react'
import VideoSection from '@/app/components/blog/VideoSection'
import CaseStudyButton from '@/app/components/blog/CaseStudyButton'
import BlogHeader from '@/app/components/blog/BlogHeader'
import BlogContent from '@/app/components/blog/BlogContent'

export default function BlogPost() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#f2f3f5] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f2f3f5] font-['franklin-gothic-atf',_sans-serif] font-medium text-[#2c2f36]">
      <BlogHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-[30%] md:pt-48 hidden md:block">
              <VideoSection />
            </div>

            <BlogContent />
          </div>

          <div className="flex justify-between items-center mt-8">
            <a href="#" className="hover:underline transition-all duration-300">
              Read Previous Page
            </a>
            <CaseStudyButton />
          </div>
        </div>
      </main>
    </div>
  )
} 