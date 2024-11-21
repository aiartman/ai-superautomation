'use client'

import Image from 'next/image'
import { Play } from 'lucide-react'

export default function VideoSection() {
  return (
    <div className="bg-[#91949b] p-6 rounded-lg mb-8">
      <h3 className="text-xl font-bold mb-4 text-white">Want to watch the video instead of reading?</h3>
      <p className="mb-4 text-white">That&apos;s an option now.</p>
      <div className="relative group cursor-pointer">
        <Image 
          src="/images/blog/video-thumbnail.svg" 
          alt="Video thumbnail" 
          width={500} 
          height={300} 
          className="rounded-lg w-full transition-transform duration-300 group-hover:scale-[1.02]" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#f2f3f5] rounded-full p-4 transition-transform duration-300 group-hover:scale-110">
            <Play className="w-12 h-12 text-gray-900" />
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  )
} 