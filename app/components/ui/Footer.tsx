import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center">
            <Image 
              src="/icons/ai-logo.png" 
              alt="AI Logo" 
              width={40} 
              height={40} 
              className="mr-4" 
            />
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-4">
              <Link href="/privacy" className="text-sm hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <span className="text-gray-500">•</span>
              <Link href="/terms" className="text-sm hover:text-gray-300 transition-colors">
                Terms & Conditions
              </Link>
              <span className="text-gray-500">•</span>
              <Link href="/refund" className="text-sm hover:text-gray-300 transition-colors">
                Refund Policy
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              AI.Superautomation.com • Copyright 2024. All Rights Reserved.
            </p>
          </div>
          
          <p className="text-sm">Made by Humans.</p>
        </div>
      </div>
    </footer>
  )
}
