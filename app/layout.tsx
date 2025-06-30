import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { chikmangaloreImages } from '@/lib/image-config'


const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chikmangalore Tourism - Experience the Coffee Land of Karnataka',
  description: 'Discover the beauty of Chikmangalore, Karnataka\'s coffee capital. Explore Mullayanagiri Peak, Hebbe Falls, coffee plantations, and ancient temples. Plan your perfect getaway to the Western Ghats.',
  keywords: 'Chikmangalore, Karnataka, Coffee Plantations, Mullayanagiri, Hebbe Falls, Western Ghats, Tourism, Trekking, Wildlife',
  authors: [{ name: 'Chikmangalore Tourism' }],
  creator: 'Chikmangalore Tourism',
  publisher: 'Chikmangalore Tourism',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chikmangaloretourism.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Chikmangalore Tourism - Experience the Coffee Land of Karnataka',
    description: 'Discover the beauty of Chikmangalore, Karnataka\'s coffee capital. Explore Mullayanagiri Peak, Hebbe Falls, coffee plantations, and ancient temples.',
    url: 'https://chikmangaloretourism.com',
    siteName: 'Chikmangalore Tourism',
    images: [chikmangaloreImages.mullayanagiri],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chikmangalore Tourism - Experience the Coffee Land of Karnataka',
    description: 'Discover the beauty of Chikmangalore, Karnataka\'s coffee capital. Explore Mullayanagiri Peak, Hebbe Falls, coffee plantations, and ancient temples.',
    images: [chikmangaloreImages.mullayanagiri],
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
  verification: {
    google: 'your-google-verification-code',
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