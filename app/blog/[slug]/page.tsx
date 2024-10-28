'use client'

import Image from 'next/image'
import VideoSection from '@/app/components/blog/VideoSection'
import CaseStudyButton from '@/app/components/blog/CaseStudyButton'
import BlogHeader from '@/app/components/blog/BlogHeader'
import BlogContent from '@/app/components/blog/BlogContent'
import BlogFooter from '@/app/components/blog/BlogFooter'

export default function BlogPost() {
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

      <BlogFooter />
    </div>
  )
} 