'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Search, Calendar, Users, MapPin, ArrowLeft, ArrowRight, Plus, Minus } from 'lucide-react';
import { chikmangaloreImages } from '@/lib/image-config';

const heroImages = [
  {
    url: chikmangaloreImages.coffeePlantations,
    title: 'Coffee Plantations',
    subtitle: 'Walk through lush coffee estates and experience the aroma of Chikmangalore.'
  },
  
  {
    url: chikmangaloreImages.hebbeFalls,
    title: 'Hebbe Falls',
    subtitle: 'Marvel at the beauty of cascading waterfalls in the heart of nature.'
  },
  {
    url: chikmangaloreImages.natureScenery,
    title: 'Hebbe Falls',
    subtitle: 'Marvel at the beauty of cascading waterfalls in the heart of nature.'
  },
  {
    url: chikmangaloreImages.mountainView,
    title: 'Hebbe Falls',
    subtitle: 'Marvel at the beauty of cascading waterfalls in the heart of nature.'
  },
  {
    url: chikmangaloreImages.temple,
    title: 'Hebbe Falls',
    subtitle: 'Marvel at the beauty of cascading waterfalls in the heart of nature.'
  },
  {
    url: chikmangaloreImages.coffeeBeans,
    title: 'Hebbe Falls',
    subtitle: 'Marvel at the beauty of cascading waterfalls in the heart of nature.'
  },
];

const destinations = [
  {
    url: chikmangaloreImages.kudremukhPeak,
    title: 'Kudremukh Peak',
    subtitle: 'Breathtaking waterfalls'
  },
  {
    url: chikmangaloreImages.kudremukhPark,
    title: 'Kudremukh National Park',
    subtitle: 'Breathtaking waterfalls'
  },
  {
    url: chikmangaloreImages.bhadraWildlife,
    title: 'Bhadra Wildlife Sanctuary',
    subtitle: 'Breathtaking waterfalls'
  },
  {
    url: chikmangaloreImages.kalasaWaterfalls,
    title: 'Kalasa Waterfalls',
    subtitle: 'Breathtaking waterfalls'
  },
  {
    url: chikmangaloreImages.shriShankara,
    title: 'Shri Shankara Matha',
    subtitle: 'Breathtaking waterfalls'
  },
  {
    url: chikmangaloreImages.babaBudangiri,
    title: 'Baba Budangiri',
    subtitle: 'Breathtaking waterfalls'
  },
  {
    url: chikmangaloreImages.mullayanagiri,
    title: 'Mullayanagiri Peak',
    subtitle: 'Highest peak in Karnataka'
  },
  {
    url: chikmangaloreImages.hebbeFallsDest,
    title: 'Hebbe Falls',
    subtitle: 'Breathtaking waterfalls'
  },
  {
    url: chikmangaloreImages.coffeeEstates,
    title: 'Coffee Estates',
    subtitle: 'Aromatic coffee plantations'
  },
  {
    url: chikmangaloreImages.zPoint,
    title: 'Z Point',
    subtitle: 'Breathtaking waterfalls'
  },
  

  
];

const trailCategories = [
  {
    url: chikmangaloreImages.mullayanagiri,
    title: 'Heritage Sites',
    description: 'Explore ancient temples and historical monuments'
  },
  {
    url: chikmangaloreImages.hebbeFallsDest,
    title: 'Adventure Sports',
    description: 'Trekking, rock climbing and water sports'
  },
  {
    url: chikmangaloreImages.coffeeEstates,
    title: 'Nature Trails',
    description: 'Bird watching and wildlife photography',
    featured: true
  },
  {
    url: chikmangaloreImages.zPoint,
    title: 'Cultural Heritage',
    description: 'Local traditions and cultural experiences'
  },
  {
    url: chikmangaloreImages.kudremukhPeak,
    title: 'Hill Stations',
    description: 'Cool climate and scenic beauty'
  },
];

const accommodations = [
  {
    url: chikmangaloreImages.kudremukhPark,
    title: 'Luxury Resorts',
    description: 'Premium stays with world-class amenities'
  },
  {
    url: chikmangaloreImages.kalasaWaterfalls,
    title: 'Heritage Hotels',
    description: 'Experience royal hospitality in historic settings'
  },
  {
    url: chikmangaloreImages.hebbeFalls,
    title: 'Home Stays',
    description: 'Local hospitality and authentic experiences'
  }
];

function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#destinations');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Minimal dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        {/* Supporting Heading */}
        <h2 className="text-lg md:text-2xl font-semibold text-white/90 mb-2 drop-shadow-md tracking-wide">
          Destinations Where Wonders Never End, Adventures Never Stop
        </h2>
        {/* Wavy SVG Accent */}
        <div className="flex justify-center mb-2">
          <svg width="640" height="40" viewBox="0 0 640 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20 Q125 40 250 20 T500 20" stroke="white" strokeWidth="3" fill="none" opacity="0.7" />
            <path d="M500 20 Q625 40 750 20 T1000 20" stroke="white" strokeWidth="3" fill="none" opacity="0.7" />
          </svg>
        </div>
        
        {/* Main Heading with script font */}
        <h1
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-xl"
          style={{ fontFamily: 'Dancing Script, cursive' }}
        >
          Chikmangalore Tourism
        </h1>
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
          Discover the coffee capital of Karnataka with its pristine hills, cascading waterfalls, and rich cultural heritage.
        </p>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
          <button className="bg-white/90 text-gray-900 px-8 py-3 rounded-full font-semibold flex items-center space-x-2 text-lg shadow hover:bg-white transition-all border border-white/80">
            <Search className="h-5 w-5" />
            <span>Explore Destinations</span>
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 text-lg hover:bg-white/10 transition-all">
            <Play className="h-5 w-5" />
            <span>Watch Experience</span>
          </button>
        </div>
      </div>
      {/* Image Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}

function DestinationsSection() {
  const [currentDestination, setCurrentDestination] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const bgImage = destinations[currentDestination].url;

  return (
    <section id="destinations" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Destination Background"
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
          style={{ filter: 'brightness(0.7) saturate(1.2)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
        
        {/* Animated Overlay Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-white/20 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Discover Top Destinations
          </h2>
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-4">
            Where Wonders Never End, Adventures Never Stop
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            From pristine waterfalls to ancient temples, experience the diverse beauty of Chikmangalore's most iconic locations.
          </p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mt-6"></div>
        </div>

        {/* Main Destination Showcase */}
        <div className="relative flex justify-center items-center mb-16">
          {/* Glassmorphism Card */}
          <div 
            className="relative h-96 md:h-[600px] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md bg-white/10 border border-white/20 transition-all duration-700"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Image with enhanced transition */}
            <img
              key={destinations[currentDestination].url}
              src={destinations[currentDestination].url}
              alt={destinations[currentDestination].title}
              className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
              style={{ 
                filter: 'brightness(0.85) saturate(1.1)',
                transform: isHovered ? 'scale(1.05)' : 'scale(1.02)'
              }}
            />
            
            {/* Multiple Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
            
            {/* Floating Elements */}
           
            
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="bg-white/20 backdrop-blur-l p-6 shadow-2xl  relative overflow-hidden">
                {/* Glass Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-white/10"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg"></div>
                    <span className="text-sm font-semibold text-white/90 uppercase tracking-wider backdrop-blur-sm bg-white/10 px-3 py-1 rounded-full">
                      Featured Destination
                    </span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-extrabold mb-4 text-white leading-tight drop-shadow-lg">
                    {destinations[currentDestination].title}
                  </h3>
                  
                  <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed drop-shadow-md">
                    {destinations[currentDestination].subtitle}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-2xl">⭐</span>
                        <span className="text-white font-semibold">4.8/5</span>
                      </div>
                      <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-2xl">👥</span>
                        <span className="text-white font-semibold">10K+ Visitors</span>
                      </div>
                    </div>
                    
                    <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/30 shadow-lg">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Navigation Arrows */}
          <button 
            onClick={() => setCurrentDestination((prev) => (prev - 1 + destinations.length) % destinations.length)}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-gray-800 hover:text-blue-600 rounded-full p-4 shadow-xl transition-all duration-300 scale-100 hover:scale-110 focus:outline-none backdrop-blur-md border border-white/20"
            aria-label="Previous destination"
          >
            <ArrowLeft className="h-8 w-8" />
          </button>
          <button 
            onClick={() => setCurrentDestination((prev) => (prev + 1) % destinations.length)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-gray-800 hover:text-blue-600 rounded-full p-4 shadow-xl transition-all duration-300 scale-100 hover:scale-110 focus:outline-none backdrop-blur-md border border-white/20"
            aria-label="Next destination"
          >
            <ArrowRight className="h-8 w-8" />
          </button>
        </div>

        {/* Destination Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
          {destinations.map((destination, index) => (
            <button
              key={index}
              onClick={() => setCurrentDestination(index)}
              className={`relative group rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 ${
                index === currentDestination ? 'ring-4 ring-white shadow-2xl' : 'shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="aspect-square relative">
                <img
                  src={destination.url}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Active Indicator */}
                {index === currentDestination && (
                  <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                )}
                
                {/* Title Overlay */}
                <div className="absolute bottom-2 left-2 right-2">
                  <h4 className="text-white text-sm font-semibold truncate">
                    {destination.title}
                  </h4>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Quick Stats */}
     
      </div>
    </section>
  );
}

function TrailsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={chikmangaloreImages.natureScenery}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 " />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Pick Your Trail - See Chikmangalore - As Per Your Interest</h2>
          <button className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">View All</button>
        </div>
        
        <div className="flex items-center justify-center space-x-4 mb-8">
          {/* <button className="text-gray-400 hover:text-gray-600">
            <ArrowLeft className="h-8 w-8" />
          </button> */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl">
            {trailCategories.map((category, index) => (
              <div key={index} className={`relative group cursor-pointer ${category.featured ? 'transform scale-110' : ''}`}>
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={category.url}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{category.title}</h3>
                    <p className="text-white/80 text-sm">{category.description}</p>
                  </div>
                  {category.featured && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      EXPLORE
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* <button className="text-gray-400 hover:text-gray-600">
            <ArrowRight className="h-8 w-8" />
          </button> */}
        </div>
      </div>
    </section>
  );
}

function FestivalsSection() {
  const [currentFestival, setCurrentFestival] = useState(0);
  
  const festivals = [
    {
      name: "Coffee Festival",
      date: "January 15-20, 2025",
      description: "Celebrate the rich coffee heritage with plantation tours, tastings, and cultural performances",
      image: chikmangaloreImages.coffeePlantations,
      color: "from-amber-500 to-orange-600",
      icon: "☕",
      highlights: ["Coffee Tastings", "Plantation Tours", "Cultural Shows"]
    },
    {
      name: "Monsoon Magic",
      date: "July 10-15, 2025", 
      description: "Experience the enchanting monsoon season with waterfall treks and nature walks",
      image: chikmangaloreImages.hebbeFalls,
      color: "from-blue-500 to-cyan-600",
      icon: "🌧️",
      highlights: ["Waterfall Treks", "Nature Walks", "Monsoon Photography"]
    },
    {
      name: "Harvest Festival",
      date: "October 5-10, 2025",
      description: "Join the traditional harvest celebrations with folk dances and local cuisine",
      image: chikmangaloreImages.mullayanagiri,
      color: "from-green-500 to-emerald-600",
      icon: "🌾",
      highlights: ["Folk Dances", "Local Cuisine", "Harvest Rituals"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Colorful Background */}
      <div className="absolute inset-0">
        <img
          src={chikmangaloreImages.festival}
          alt="Festival Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Calendar className="h-4 w-4" />
            <span>Cultural Celebrations</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 bg-clip-text text-transparent">
            Fairs & Festivals
          </h2>
          <p className="text-2xl md:text-3xl font-light text-gray-700 mb-4">
            The Life of Chikmangalore
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the vibrant culture and traditions of Chikmangalore through its colorful festivals and celebrations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mt-6"></div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Festival Cards */}
          <div className="space-y-8">
            <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8  relative overflow-hidden">
              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-white/10"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">Upcoming Festivals</h3>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setCurrentFestival((prev) => (prev - 1 + festivals.length) % festivals.length)}
                      className="p-3 backdrop-blur-sm text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/30"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => setCurrentFestival((prev) => (prev + 1) % festivals.length)}
                      className="p-3 backdrop-blur-sm text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/30"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {festivals.map((festival, index) => (
                    <div 
                      key={index}
                      className={`relative p-6 rounded-2xl transition-all duration-500 cursor-pointer ${
                        index === currentFestival 
                          ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl scale-105' 
                          : ' backdrop-blur-sm hover:bg-white/30 text-white hover:scale-102 border border-white/20'
                      }`}
                      onClick={() => setCurrentFestival(index)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`text-3xl ${index === currentFestival ? 'text-white' : 'text-orange-300'}`}>
                            {festival.icon}
                          </div>
                          <div>
                            <h4 className={`font-bold text-lg mb-2 ${index === currentFestival ? 'text-white' : 'text-white'}`}>
                              {festival.name}
                            </h4>
                            <p className={`text-sm mb-2 ${index === currentFestival ? 'text-white/90' : 'text-white/80'}`}>
                              {festival.date}
                            </p>
                            <p className={`text-sm ${index === currentFestival ? 'text-white/80' : 'text-white/70'}`}>
                              {festival.description}
                            </p>
                          </div>
                        </div>
                        <div className={`w-3 h-3 rounded-full ${index === currentFestival ? 'bg-white' : 'bg-orange-300'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/30">
                  <div className="flex items-center justify-between text-sm text-white/80">
                    <span>2024-25 To 2028-29</span>
                    <button className="text-orange-300 font-semibold hover:text-orange-200 transition-colors">
                      View All Festivals →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Featured Festival Display */}
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={festivals[currentFestival].image}
                alt={festivals[currentFestival].name}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out"
              />
              
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className={`absolute inset-0 bg-gradient-to-br ${festivals[currentFestival].color} opacity-30`}></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${festivals[currentFestival].color}`}></div>
                    <span className="text-sm font-semibold text-gray-600">FEATURED FESTIVAL</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {festivals[currentFestival].name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {festivals[currentFestival].description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {festivals[currentFestival].highlights.map((highlight, index) => (
                        <span key={index} className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-semibold">
                      {festivals[currentFestival].date}
                    </span>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-4 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                <div className="bg-white/20 backdrop-blur-md rounded-full p-3 shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExploreSection() {
  const [activeTab, setActiveTab] = useState('District');
  
  const exploreData = {
    District: {
      title: "Chikmangalore District",
      description: "A hill station in Karnataka known for its coffee plantations and the Western Ghats running through its center, offering spectacular views and rich biodiversity.",
      image: chikmangaloreImages.mullayanagiri,
      stats: [
        { label: "Area", value: "7,201 km²" },
        { label: "Population", value: "1.1M+" },
        { label: "Elevation", value: "1,090m" }
      ],
      highlights: ["Coffee Capital", "Western Ghats", "Biodiversity Hotspot"]
    },
    Zone: {
      title: "Tourism Zones",
      description: "Explore different zones of Chikmangalore, each offering unique experiences from adventure sports to spiritual retreats.",
      image: chikmangaloreImages.hebbeFalls,
      stats: [
        { label: "Zones", value: "6" },
        { label: "Attractions", value: "50+" },
        { label: "Activities", value: "25+" }
      ],
      highlights: ["Adventure Zone", "Heritage Zone", "Nature Zone"]
    },
    Experience: {
      title: "Unique Experiences",
      description: "From coffee plantation tours to wildlife safaris, discover authentic experiences that showcase the true essence of Chikmangalore.",
      image: chikmangaloreImages.zPoint,
      stats: [
        { label: "Experiences", value: "30+" },
        { label: "Duration", value: "1-7 days" },
        { label: "Difficulty", value: "All Levels" }
      ],
      highlights: ["Coffee Tours", "Wildlife Safaris", "Cultural Immersion"]
    }
  };

  const currentData = exploreData[activeTab as keyof typeof exploreData];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src={chikmangaloreImages.forest}
          alt="Explore Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
        
        {/* Animated Overlay Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-10 w-24 h-24 border-2 border-white/20 rounded-full animate-pulse animation-delay-2000"></div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🔍</span>
            <span>Discover & Explore</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Explore Chikmangalore
          </h2>
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-4">
            Where Every Path Leads to Adventure
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            From the misty hills of the Western Ghats to the aromatic coffee estates, discover the diverse landscapes and rich culture that make Chikmangalore truly special.
          </p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Interactive Content */}
          <div className="space-y-8">
            {/* Enhanced Tabs */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-2 border border-white/30">
              <div className="flex space-x-1">
                {['District', 'Zone', 'Experience'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeTab === tab
                        ? 'bg-white text-gray-900 shadow-lg'
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Content Card with Glass Effect */}
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 relative overflow-hidden">
              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-white/10"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold text-white">{currentData.title}</h3>
                  <div className="flex space-x-2">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30">
                      <Plus className="h-5 w-5 text-white" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30">
                      <Minus className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
                
                <p className="text-white/90 mb-6 leading-relaxed text-lg">
                  {currentData.description}
                </p>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {currentData.stats.map((stat, index) => (
                    <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentData.highlights.map((highlight, index) => (
                      <span key={index} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Weather Info */}
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-3xl">☁️</span>
                      <div>
                        <div className="text-white font-semibold">28°C</div>
                        <div className="text-white/80 text-sm">Light Rain</div>
                      </div>
                    </div>
                    <div className="text-white/80 text-sm">Perfect for exploration</div>
                  </div>
                </div>
                
                {/* Navigation */}
                <div className="flex space-x-4 mt-6">
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30">
                    <ArrowLeft className="h-6 w-6 text-white" />
                  </button>
                  <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110 border border-white/30">
                    <ArrowRight className="h-6 w-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Image Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                chikmangaloreImages.mullayanagiri,
                chikmangaloreImages.hebbeFalls,
                chikmangaloreImages.zPoint
              ].map((image, index) => (
                <div key={index} className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <img
                    src={image}
                    alt={`Explore ${index + 1}`}
                    className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Interactive Map */}
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30 relative overflow-hidden">
              {/* Glass Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-white/5 via-transparent to-white/10"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Interactive Map</h3>
                
                <div className="relative h-96 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                  <img
                    src={chikmangaloreImages.kudremukhPeak}
                    alt="Interactive Map"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Map Overlay with Location Pins */}
                  <div className="absolute inset-0">
                    {/* Central Location Pin */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-2xl border-4 border-white animate-pulse">
                        <MapPin className="h-8 w-8" />
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap">
                        Chikmangalore
                      </div>
                    </div>
                    
                    {/* Additional Location Pins */}
                    <div className="absolute top-1/4 left-1/4">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/30">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-1/4 right-1/4">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/30">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="absolute top-1/3 right-1/3">
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full border border-white/30">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map Controls */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30">
                      <span className="text-white text-sm">+</span>
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30">
                      <span className="text-white text-sm">-</span>
                    </button>
                  </div>
                </div>
                
                {/* Map Legend */}
                <div className="mt-6 grid grid-cols-3 gap-4">
                  {[
                    { color: "bg-green-500", label: "Nature Spots" },
                    { color: "bg-orange-500", label: "Adventure" },
                    { color: "bg-purple-500", label: "Heritage" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-3 h-3 ${item.color} rounded-full`}></div>
                      <span className="text-white/80 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TripPlannerSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0">
        <img
          src={chikmangaloreImages.sunset}
          alt="Mountains"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-orange-500 mb-4">Trip Planner - Your Personal Itinerary</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our trip planner makes your holiday booking a pleasure. Set the dates and pick your activities - we'll guide you through the rest.
            </p>
            <button className="inline-block text-orange-500 font-semibold border-b-2 border-orange-500 hover:text-orange-600 hover:border-orange-600 transition-colors">
              KNOW MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccommodationSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Plan Your Stay - Choice of Your Accommodation</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={accommodation.url}
                  alt={accommodation.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-bold text-xl mb-2">{accommodation.title}</h3>
                  <p className="text-white/90 text-sm mb-4">{accommodation.description}</p>
                  {index === 2 && (
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      BOOK NOW
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessSection() {
  const businessOpportunities = [
    {
      url: chikmangaloreImages.kalasaWaterfalls,
      title: 'Investor Facilitation Kit',
      description: 'POLICY',
      icon: '📋',
      category: 'Investment'
    },
    {
      url: chikmangaloreImages.shriShankara,
      title: 'Tender List',
      description: 'TENDER',
      icon: '🏗️',
      category: 'Infrastructure'
    },
    {
      url: chikmangaloreImages.babaBudangiri,
      title: 'Tourism Policy Karnataka',
      description: 'TOURISM POLICY KR',
      icon: '📜',
      category: 'Policy'
    },
    {
      url: chikmangaloreImages.coffeeEstates,
      title: 'Eco-Tourism Ventures',
      description: 'ECO-TOURISM',
      icon: '🌿',
      category: 'Sustainability'
    },
    {
      url: chikmangaloreImages.zPoint,
      title: 'Adventure Tourism Licenses',
      description: 'ADVENTURE',
      icon: '🏔️',
      category: 'Adventure'
    },
    {
      url: chikmangaloreImages.mullayanagiri,
      title: 'Heritage Site Management',
      description: 'HERITAGE',
      icon: '🏛️',
      category: 'Heritage'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Investment', 'Infrastructure', 'Policy', 'Sustainability', 'Adventure', 'Heritage'];

  const filteredOpportunities = selectedCategory === 'All' 
    ? businessOpportunities 
    : businessOpportunities.filter(opp => opp.category === selectedCategory);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src={chikmangaloreImages.natureScenery}
          alt="Business Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <span>💼</span>
            <span>Investment Opportunities</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Business Opportunities
          </h2>
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-4">
            Welcome to Chikmangalore
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Discover lucrative investment opportunities in one of Karnataka's most promising tourism destinations.
          </p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-white text-gray-900 shadow-lg'
                  : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Opportunities Grid - Simplified */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredOpportunities.map((opportunity, index) => (
            <div 
              key={index} 
              className="group bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={opportunity.url}
                  alt={opportunity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {opportunity.description}
                  </span>
                </div>
                
                {/* Icon */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                    <span className="text-2xl">{opportunity.icon}</span>
                  </div>
                </div>
              </div>
              
              {/* Content Section - Simplified */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {opportunity.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {opportunity.title}
                </h3>
                
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center text-gray-800 relative overflow-hidden">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Invest in Chikmangalore?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing community of successful entrepreneurs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Download Investment Guide
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
          
          <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>+91 123 456 7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📧</span>
              <span>business@chikmangalore.gov.in</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  const newsItems = [
    {
      id: 1,
      title: "New Eco-Tourism Initiatives Launched",
      excerpt: "Chikmangalore introduces sustainable tourism projects focusing on coffee estate conservation and wildlife protection.",
      image: chikmangaloreImages.kudremukhPark,
      category: "Eco-Tourism",
      date: "Dec 15, 2024",
      readTime: "3 min read",
      featured: true,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 2,
      title: "Festival Calendar 2025 Announced",
      excerpt: "Experience the rich cultural heritage through upcoming festivals including the Coffee Festival and Monsoon Magic celebrations.",
      image: chikmangaloreImages.festival,
      category: "Events",
      date: "Dec 12, 2024",
      readTime: "5 min read",
      featured: false,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 3,
      title: "Infrastructure Development Updates",
      excerpt: "Major road connectivity improvements and new tourist facilities being developed across key destinations.",
      image: chikmangaloreImages.hebbeFalls,
      category: "Infrastructure",
      date: "Dec 10, 2024",
      readTime: "4 min read",
      featured: false,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 4,
      title: "Heritage Site Conservation Program",
      excerpt: "New initiatives to preserve ancient temples and historical monuments in the region.",
      image: chikmangaloreImages.temple,
      category: "Heritage",
      date: "Dec 8, 2024",
      readTime: "6 min read",
      featured: false,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 5,
      title: "Adventure Tourism Expansion",
      excerpt: "New trekking trails and adventure sports facilities opening in the Western Ghats region.",
      image: chikmangaloreImages.zPoint,
      category: "Adventure",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      featured: false,
      color: "from-yellow-500 to-orange-600"
    },
    {
      id: 6,
      title: "Digital Tourism Platform Launch",
      excerpt: "New mobile app and website features to enhance visitor experience and booking convenience.",
      image: chikmangaloreImages.coffeeEstates,
      category: "Technology",
      date: "Dec 3, 2024",
      readTime: "3 min read",
      featured: false,
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Eco-Tourism', 'Events', 'Infrastructure', 'Heritage', 'Adventure', 'Technology'];

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Image Background */}
      <div className="absolute inset-0">
        <img
          src={chikmangaloreImages.mountainView}
          alt="News Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <span>📰</span>
            <span>Latest Updates</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            News & Updates
          </h2>
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-4">
            What is New in Chikmangalore
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Stay informed about the latest developments, events, and initiatives that make Chikmangalore an even more exciting destination.
          </p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mt-6"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-white text-orange-600 shadow-lg'
                  : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured News Section */}
        {featuredNews.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Story</h3>
            <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={featuredNews[0].image}
                alt={featuredNews[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${featuredNews[0].color} text-white`}>
                      {featuredNews[0].category}
                    </span>
                    <span className="text-sm text-gray-600">{featuredNews[0].date}</span>
                    <span className="text-sm text-gray-600">•</span>
                    <span className="text-sm text-gray-600">{featuredNews[0].readTime}</span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-800 mb-3">
                    {featuredNews[0].title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {featuredNews[0].excerpt}
                  </p>
                  
                  <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    Read Full Story →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* News Grid - Horizontal Cards */}
        <div className="space-y-6 mb-12">
          {filteredNews.filter(item => !item.featured).map((item, index) => (
            <div 
              key={item.id} 
              className="group bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${item.color} text-white shadow-lg`}>
                      {item.category}
                    </span>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-500">{item.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors group-hover:underline">
                      Read More →
                    </button>
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <span>📤</span>
                      </button>
                      <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                        <span>💾</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-12 text-center text-gray-800 relative overflow-hidden">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Chikmangalore
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new attractions, events, and special offers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/50"
            />
            <button className="bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">
            Get weekly updates delivered to your inbox
          </p>
        </div>

        {/* Quick Stats */}
       
      </div>
    </section>
  );
}

export default function EnhancedHeroSection() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrailsSection />
      <DestinationsSection />
      <FestivalsSection />
      <ExploreSection />
      <BusinessSection />
      <TripPlannerSection />
      <AccommodationSection />
      <NewsSection />
    </div>
  );
}