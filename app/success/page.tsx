'use client'

import { useEffect } from 'react'
import { Card } from "@/app/components/ui/card"
import { CheckCircle } from 'lucide-react'
import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"

export default function SuccessPage() {
  useEffect(() => {
    // You can add analytics tracking here
    console.log('Payment success page loaded')
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/logo.png"
          alt="AI Superautomation Logo"
          width={50}
          height={50}
          className="mx-auto"
        />
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Payment Successful!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Thank you for your purchase. We&apos;ve sent you an email with your order details.
            </p>
          </div>

          <div className="mt-8">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="text-lg font-medium text-gray-900">Next Steps</h3>
                <ul className="mt-4 text-sm text-gray-600 space-y-2">
                  <li>1. Check your email for order confirmation</li>
                  <li>2. Access your AI Superautomation dashboard</li>
                  <li>3. Set up your LinkedIn automation preferences</li>
                  <li>4. Start growing your network!</li>
                </ul>
              </div>

              <div className="flex flex-col space-y-4">
                <Link href="/dashboard" className="w-full">
                  <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                    Go to Dashboard
                  </Button>
                </Link>
                <Link href="/" className="w-full">
                  <Button variant="outline" className="w-full">
                    Return to Home
                  </Button>
                </Link>
              </div>

              <div className="text-center text-sm text-gray-600">
                <p>Need help getting started?</p>
                <a 
                  href="mailto:support@aisuperautomation.com" 
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Contact our support team
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
} 