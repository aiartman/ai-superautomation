import type { Metadata } from 'next'
import './globals.css'
import Footer from './components/ui/Footer'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'AI Superautomation',
  description: 'Revolutionize your LinkedIn strategy with our cutting-edge Superautomation Breakthrough',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ojm4dkx.css" />
      </head>
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
