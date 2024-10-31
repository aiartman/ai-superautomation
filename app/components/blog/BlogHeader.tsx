import Image from 'next/image'
import Link from 'next/link'

export default function BlogHeader() {
  return (
    <header className="relative bg-[#f2f3f5]">
      <div className="absolute top-0 left-0 w-24 h-full bg-gray-800 transform skew-x-12 origin-top-left z-0"></div>
      <div className="container mx-auto px-4 flex items-center justify-between h-20 relative">
        <div className="flex items-center relative z-10">
          <Link href="/" className="relative w-12 h-12 mr-12">
            <Image 
              src="/icons/ai-logo.png" 
              alt="AI Logo" 
              width={48}
              height={48}
              className="object-contain" 
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="/" 
            className="hover:text-gray-600 font-['franklin-gothic-atf'] font-extrabold text-[#2c2f36]"
          >
            Home
          </Link>
          <Link 
            href="#features" 
            className="hover:text-gray-600 font-['franklin-gothic-atf'] font-extrabold text-[#2c2f36]"
          >
            Super Features
          </Link>
          <Link 
            href="#faq" 
            className="hover:text-gray-600 font-['franklin-gothic-atf'] font-extrabold text-[#2c2f36]"
          >
            FAQ
          </Link>
          <Link 
            href="#pricing" 
            className="hover:text-gray-600 font-['franklin-gothic-atf'] font-extrabold text-[#2c2f36]"
          >
            Pricing
          </Link>
        </nav>
        <Link 
          href="/contact"
          className="px-6 py-2 text-sm font-['franklin-gothic-atf'] font-extrabold border border-gray-300 rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          Contact Us
        </Link>
      </div>
    </header>
  )
} 