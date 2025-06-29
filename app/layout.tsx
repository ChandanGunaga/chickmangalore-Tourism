import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'


const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chikmangalore Tourism - Explore the Coffee Land of Karnataka',
  description: 'Discover the best of Chikmangalore: coffee estates, hills, waterfalls, and unique experiences. Plan your perfect getaway to the heart of Karnataka.',
  keywords: 'chikmangalore, tourism, karnataka, coffee, hills, waterfalls, trekking, nature, travel',
  authors: [{ name: 'Chikmangalore Tourism' }],
  creator: 'Chikmangalore Tourism',
  publisher: 'Chikmangalore Tourism',
  openGraph: {
    title: 'Chikmangalore Tourism - Explore the Coffee Land of Karnataka',
    description: 'Discover the best of Chikmangalore: coffee estates, hills, waterfalls, and unique experiences.',
    url: 'https://chikmangaloretourism.com',
    siteName: 'Chikmangalore Tourism',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=630',
        width: 1200,
        height: 630,
        alt: 'Chikmangalore hills and coffee estates',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chikmangalore Tourism - Explore the Coffee Land of Karnataka',
    description: 'Discover the best of Chikmangalore: coffee estates, hills, waterfalls, and unique experiences.',
    images: ['https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=630'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}