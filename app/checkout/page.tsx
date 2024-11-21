'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import Image from "next/image"
import { Space_Grotesk } from 'next/font/google'
import { useRouter } from 'next/navigation'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

const testimonials = [
  { name: "Sarah L.", role: "Marketing Director", comment: "AI Superautomation revolutionized our workflow. We've seen a 300% increase in productivity!" },
  { name: "John D.", role: "Tech Entrepreneur", comment: "This tool is a game-changer. It's like having a team of AI experts at your fingertips." },
  { name: "Emily R.", role: "Data Scientist", comment: "The AI models are incredibly advanced. I'm amazed at how it handles complex tasks with ease." },
  { name: "Michael K.", role: "Small Business Owner", comment: "AI Superautomation paid for itself within a week. My only regret is not getting it sooner!" },
]

// Add interfaces for type safety
interface RevolutInstance {
  payWithPopup: (config: RevolutPaymentConfig) => void;
}

interface RevolutPaymentConfig {
  onSuccess: () => void;
  onError: (error: Error) => void;
  onCancel: () => void;
  name: string;
  email: string;
}

interface OrderResponse {
  token: string;
  error?: string;
}

interface ErrorDetails {
  message: string;
  code?: string;
  [key: string]: unknown;
}

declare global {
  interface Window {
    RevolutCheckout?: (token: string) => Promise<RevolutInstance>;
  }
}

export default function TestPayment() {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorDetails, setErrorDetails] = useState<ErrorDetails | null>(null)
  const [email, setEmail] = useState('test@example.com')
  const [name, setName] = useState('')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Load Revolut Checkout script
  useEffect(() => {
    if (!window.RevolutCheckout) {
      const script = document.createElement('script')
      script.src = 'https://sandbox-merchant.revolut.com/embed.js'
      script.async = true
      script.onload = () => {
        console.log('Revolut script loaded successfully')
      }
      script.onerror = () => setError('Failed to load Revolut Checkout script.')
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    } else {
      console.log('Revolut script already loaded')
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const handlePayment = async () => {
    setIsLoading(true)
    setError(null)
    setErrorDetails(null)

    try {
      console.log('Creating order...')

      if (name.trim().split(' ').length < 2) {
        throw new Error('Please enter your full name (first and last name)')
      }

      const apiResponse = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
        }),
      })

      const data: OrderResponse = await apiResponse.json()
      console.log('Order creation response:', data)

      if (!apiResponse.ok) {
        throw new Error(data.error || 'Failed to create order')
      }

      // Initialize Revolut Checkout and use payWithPopup
      if (!window.RevolutCheckout) {
        throw new Error('Revolut Checkout not loaded')
      }

      const instance: RevolutInstance = await window.RevolutCheckout(data.token)

      instance.payWithPopup({
        onSuccess() {
          console.log('Payment successful!')
          setError(null)
          router.push('/success')
        },
        onError(error: Error) {
          console.error('Payment error:', error)
          setError(error.message || 'Payment failed')
        },
        onCancel() {
          console.log('Payment cancelled by the user.')
          setError('Payment cancelled')
        },
        name,
        email,
      })
    } catch (error: unknown) {
      console.error('Error:', error)
      setError(error instanceof Error ? error.message : 'An unknown error occurred')
      if (error && typeof error === 'object' && 'details' in error) {
        setErrorDetails(error.details as ErrorDetails)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleContinue = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && name) {
      await handlePayment()
    }
  }

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Button 
            variant="ghost"
            onClick={() => router.back()}
            className="inline-flex items-center text-sm text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Order Summary */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="AI Superautomation Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className={`text-2xl font-bold tracking-tight ${spaceGrotesk.className}`}>AI Superautomation</h1>
                <p className="mt-1 text-gray-600">Black Friday Special</p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className={`font-medium ${spaceGrotesk.className}`}>AI Superautomation Package</h2>
                  <p className="mt-1 text-sm text-gray-600">One-time purchase</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">$99.00</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between">
                  <span className="font-medium">Total due today</span>
                  <span className="font-semibold">$99.00</span>
                </div>
              </div>
            </div>

            {/* Testimonial Section - Visible only on desktop */}
            <div className="hidden lg:block bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">From verified customers</span>
              </div>
              <p className="text-sm text-gray-600 italic">&quot;{testimonials[currentTestimonial].comment}&quot;</p>
              <p className="text-xs text-gray-500 mt-2">- {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].role}</p>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <Card className="border-gray-200 shadow-none">
            <CardHeader className="border-b border-gray-200 pb-6">
              <CardTitle className={`text-2xl font-bold tracking-tight ${spaceGrotesk.className}`}>Payment</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleContinue} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-gray-200 focus:border-black focus:ring-black transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-gray-200 focus:border-black focus:ring-black transition-colors"
                  />
                </div>
                <Button type="submit" disabled={isLoading} className="w-full bg-black hover:bg-gray-900 text-white rounded-full border border-transparent hover:border-black transition-colors">
                  {isLoading ? 'Processing...' : 'Pay Now'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-md">
            <h2 className="font-semibold">Error:</h2>
            <pre className="mt-2 whitespace-pre-wrap">{error}</pre>
            {errorDetails && (
              <>
                <h3 className="font-semibold mt-2">Details:</h3>
                <pre className="mt-2 whitespace-pre-wrap">
                  {JSON.stringify(errorDetails, null, 2)}
                </pre>
              </>
            )}
          </div>
        )}

        {/* Testimonial Section - Visible only on mobile and tablet */}
        <div className="mt-8 lg:hidden bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">From verified customers</span>
          </div>
          <p className="text-sm text-gray-600 italic">&quot;{testimonials[currentTestimonial].comment}&quot;</p>
          <p className="text-xs text-gray-500 mt-2">- {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].role}</p>
        </div>
      </div>
    </div>
  )
} 