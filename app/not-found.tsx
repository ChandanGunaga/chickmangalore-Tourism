import Link from 'next/link'
import { Home, MapPin, Compass, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-9xl md:text-[200px] font-bold text-transparent bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text opacity-20">
            404
          </div>
          
          {/* Floating Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <MapPin className="h-16 w-16 text-primary-600 animate-bounce" />
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent-500 rounded-full animate-ping" />
            </div>
          </div>
          
          {/* Orbiting Compass */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-spin" style={{ animationDuration: '8s' }}>
              <Compass className="h-8 w-8 text-gray-400 absolute -top-16 left-0" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Lost in the Journey?
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto">
          Oops! It seems like you've wandered off the beaten path. 
          The page you're looking for doesn't exist, but don't worry – 
          every great adventure has unexpected detours!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
          >
            <Home className="h-5 w-5" />
            <span>Return Home</span>
          </Link>
          
          <Link
            href="/destinations"
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg border border-gray-200"
          >
            <MapPin className="h-5 w-5" />
            <span>Explore Destinations</span>
          </Link>
        </div>

        {/* Popular Links */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Destinations', href: '/destinations', icon: MapPin },
              { name: 'Experiences', href: '/experiences', icon: Compass },
              { name: 'Blog', href: '/blog', icon: Home },
            ].map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center space-x-3 p-3 rounded-lg hover:bg-primary-50 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5 text-primary-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-gray-700 group-hover:text-primary-700 font-medium">
                    {link.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Fun Quote */}
        <div className="mt-12 text-gray-500 italic">
          "Not all those who wander are lost" – J.R.R. Tolkien
        </div>

        {/* Breadcrumb */}
        <nav className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-300"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Go back to homepage</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}