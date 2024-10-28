import type { Metadata } from 'next'
import './globals.css'

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
      <body className="font-['loos-normal']">{children}</body>
    </html>
  )
}
