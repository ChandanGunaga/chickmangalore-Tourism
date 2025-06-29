'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Star, MapPin, ArrowRight, Heart, Camera } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: 'Mullayanagiri',
    location: 'Chikmagalur, Karnataka',
    rating: 4.9,
    reviews: 3120,
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1644132394073-e9bcd572aaac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Mullayanagiri is the highest peak in Karnataka, famous for its misty mornings, lush greenery, and panoramic views of the Western Ghats. A must-visit for trekkers and nature lovers.',
    highlights: ['Trekking', 'Sunrise', 'Western Ghats', 'Kannada Culture'],
    category: 'Nature'
  },
  {
    id: 2,
    name: 'Baba Budangiri',
    location: 'Chikmagalur, Karnataka',
    rating: 4.8,
    reviews: 2100,
    price: 'Free',
    image: 'https://images.unsplash.com/photo-1627556022897-4bb68faaad3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A sacred mountain range known for its Sufi shrine, coffee plantations, and the legend of Baba Budan who brought coffee to India. Experience the spiritual and natural beauty of Karnataka.',
    highlights: ['Sufi Shrine', 'Coffee Estates', 'Hiking', 'Local Legends'],
    category: 'Spiritual'
  },
  {
    id: 3,
    name: 'Hebbe Falls',
    location: 'Kemmangundi, Karnataka',
    rating: 4.7,
    reviews: 1850,
    price: 'Entry Fee',
    image: 'https://bynekaadu.com/wp-content/uploads/2024/03/Trekking-and-Sightseeing.png',
    description: 'A spectacular waterfall hidden in the forests of Kemmangundi. The journey to Hebbe Falls is an adventure through coffee estates and thick jungle.',
    highlights: ['Waterfall', 'Nature', 'Adventure', 'Jeep Ride'],
    category: 'Nature'
  },
  {
    id: 4,
    name: 'Hirekolale Lake',
    location: 'Chikmagalur, Karnataka',
    rating: 4.6,
    reviews: 950,
    price: 'Free',
    image: 'https://bynekaadu.com/wp-content/uploads/2024/04/How-to-Reach-Hirekolale-Lake-Chikmagalur.png',
    description: 'A peaceful lake surrounded by hills, perfect for a picnic or a quiet evening. Enjoy the sunset with a view of the Western Ghats.',
    highlights: ['Lake', 'Sunset', 'Picnic', 'Photography'],
    category: 'Nature'
  },
  {
    id: 5,
    name: 'Bhadra Wildlife Sanctuary',
    location: 'Lakkavalli, Karnataka',
    rating: 4.8,
    reviews: 1200,
    price: 'Entry Fee',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJC0F_x_3WMc_pE6SKX4uzVUmdFFzrxAOpgg&s',
    description: 'A haven for wildlife lovers, Bhadra is home to tigers, elephants, and hundreds of bird species. Take a safari and experience the wild side of Karnataka.',
    highlights: ['Wildlife', 'Safari', 'Bird Watching', 'Indian Forest'],
    category: 'Wildlife'
  },
  {
    id: 6,
    name: 'Coffee Museum',
    location: 'Chikmagalur, Karnataka',
    rating: 4.5,
    reviews: 800,
    price: 'Entry Fee',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8mbR4rmq4uVeAGGC5tiHQo8X8x8hfTVJEZA&s',
    description: 'Learn about the journey of coffee from bean to cup. The museum showcases the rich coffee culture of Karnataka and the story of Chikmagalur as the coffee land of India.',
    highlights: ['Museum', 'Coffee', 'History', 'Karnataka Heritage'],
    category: 'Culture'
  }
]

const categories = ['All', 'Islands', 'Cultural', 'Nature', 'Tropical', 'Mountains']

export function FeaturedDestinations() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [likedItems, setLikedItems] = useState<number[]>([])

  const filteredDestinations = destinations.filter(dest =>
    activeCategory === 'All' || dest.category === activeCategory
  )

  const toggleLike = (id: number) => {
    setLikedItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section id="destinations" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MapPin className="h-4 w-4" />
            <span>Featured Destinations</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Amazing
            <span className="block text-gradient">Destinations</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover handpicked destinations that offer unique experiences, 
            breathtaking views, and unforgettable memories.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {destination.category}
                </div>
                
                {/* Like Button */}
                <button
                  onClick={() => toggleLike(destination.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      likedItems.includes(destination.id)
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-600'
                    }`}
                  />
                </button>

                {/* Photo Count */}
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-sm flex items-center space-x-1">
                  <Camera className="h-4 w-4" />
                  <span>24+</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Location & Rating */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {destination.name}
                    </h3>
                    <p className="text-gray-600 flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{destination.location}</span>
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-1 bg-yellow-100 px-2 py-1 rounded-lg">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-yellow-700">
                      {destination.rating}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {destination.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {destination.price}
                    </p>
                    <p className="text-sm text-gray-500">
                      {destination.reviews.toLocaleString()} reviews
                    </p>
                  </div>
                  
                  <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                    <span>Explore</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            View All Destinations
            <ArrowRight className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  )
}