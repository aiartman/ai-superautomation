import Image from 'next/image'

export default function BlogFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Image 
          src="/icons/ai-logo.png" 
          alt="AI Logo" 
          width={40} 
          height={40} 
          className="object-contain" 
        />
        <p className="text-sm">AI.Superautomation.com • Copyright 2024. All Rights Reserved.</p>
        <p className="text-sm">Made by Humans.</p>
      </div>
    </footer>
  )
} 