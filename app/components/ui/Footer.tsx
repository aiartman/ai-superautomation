import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/ai-logo.png"
            alt="AI Superautomation Logo"
            width={40}
            height={40}
            className="mr-2"
          />
        </Link>
        <p className="text-sm">
          AiSuperautomation.com &middot; Copyright 2024. All Rights Reserved.
        </p>
        <p className="text-sm">Made by Humans.</p>
      </div>
    </footer>
  )
}
