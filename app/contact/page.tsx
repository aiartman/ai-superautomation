'use client'

import { useState } from 'react'

// Define proper types for button props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

// Local Button component with proper typing
function Button({ 
  children, 
  type = 'button',
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-md font-medium transition-colors bg-gray-900 text-white hover:bg-gray-800 font-["franklin-gothic-atf"] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  const [isHovered, setIsHovered] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
  }

  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section with updated background */}
      <section className="relative overflow-hidden bg-[#f2f2f4] min-h-[400px]">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating blobs with updated colors */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-gray-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-gray-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          
          {/* Grid pattern with lighter color */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Diagonal lines with lighter color */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="diagonal-lines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="rgba(0,0,0,0.2)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#diagonal-lines)"/>
            </svg>
          </div>
        </div>

        {/* Content with updated text colors */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 text-gray-800">
              Let&apos;s Connect
            </h1>
            <p className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to supercharge your LinkedIn outreach? We&apos;re here to help you scale your business.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 relative -mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form */}
            <div className="w-full lg:w-2/3">
              <div className="bg-white rounded-lg p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className={`w-full py-4 text-lg font-semibold transition-all duration-300 transform ${
                      isHovered ? 'scale-105' : 'scale-100'
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/3">
              <div className="bg-gray-800 text-white rounded-lg p-8 h-full shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Our Office</h4>
                    <p className="text-gray-300">
                      Evagora Pallikaridi 38<br />
                      Paphos 8010, Cyprus
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
                    <p className="text-gray-300">
                      Email: hello@aisuperautomation.com<br />
                      Phone: (424) 235-1165
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Business Hours</h4>
                    <p className="text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
                {/* Updated SVG colors to match theme */}
                <div className="mt-8">
                  <svg className="w-full h-32" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="50" r="40" stroke="#9CA3AF" strokeWidth="2"/>
                    <circle cx="100" cy="50" r="30" stroke="#9CA3AF" strokeWidth="2"/>
                    <circle cx="100" cy="50" r="20" stroke="#9CA3AF" strokeWidth="2"/>
                    <path d="M100 10A40 40 0 0 1 140 50" stroke="#9CA3AF" strokeWidth="4"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
