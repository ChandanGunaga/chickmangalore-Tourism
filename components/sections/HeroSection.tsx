'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronDown, Play, Search, Calendar, Users, MapPin } from 'lucide-react'

const heroImages = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop',
    title: 'Mullayanagiri Peak',
    subtitle: 'Trek to Karnataka highest point and enjoy breathtaking views.'
  },
  {
    url: 'https://images.unsplash.com/photo-1633437805600-2c58bf56663c?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Coffee Plantations',
    subtitle: 'Walk through lush coffee estates and experience the aroma of Chikmangalore.'
  },
  {
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1920&h=1080&fit=crop',
    title: 'Hebbe Falls',
    subtitle: 'Marvel at the beauty of cascading waterfalls in the heart of nature.'
  }
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.querySelector('#featured-destinations')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.url}
              alt={image.title}
              fill
              className="object-cover scale-110 animate-float"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container-custom">
          <div className={`max-w-4xl transition-all duration-1000 transform ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Welcome to
              <span className="block text-gradient bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Chikmangalore Tourism
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              {heroImages[currentImage].subtitle} Discover the best of Chikmangalore: coffee, hills, waterfalls, and more.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary flex items-center space-x-2 text-lg px-8 py-4">
                <Search className="h-5 w-5" />
                <span>Explore Destinations</span>
              </button>
              
              <button className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4">
                <Play className="h-5 w-5" />
                <span>Watch Experience</span>
              </button>
            </div>

            {/* Quick Search Bar */}
            <div className="glass rounded-2xl p-6 max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Destination</span>
                  </label>
                  <select className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="">Where to go?</option>
                    <option value="mountains">Mountains</option>
                    <option value="beaches">Beaches</option>
                    <option value="cities">Cities</option>
                    <option value="heritage">Heritage Sites</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Check-in</span>
                  </label>
                  <input
                    type="date"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Check-out</span>
                  </label>
                  <input
                    type="date"
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-white/80 text-sm font-medium flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Guests</span>
                  </label>
                  <select className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-500">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4+ Guests</option>
                  </select>
                </div>
              </div>
              
              <button className="w-full md:w-auto mt-4 btn-primary px-8 py-3">
                Search Adventures
              </button>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage
                  ? 'bg-white scale-110'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce-slow"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}