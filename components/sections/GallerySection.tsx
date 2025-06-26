'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Instagram, X, ChevronLeft, ChevronRight, Heart, Share, Download } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=800&fit=crop',
    caption: 'Mullayanagiri Peak at sunrise, Western Ghats',
    location: 'Chikmagalur, Karnataka',
    category: 'nature',
    likes: 1247
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=800&fit=crop',
    caption: 'Coffee plantations in the morning mist',
    location: 'Baba Budangiri, Karnataka',
    category: 'coffee',
    likes: 2156
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&h=800&fit=crop',
    caption: 'Hebbe Falls in full flow',
    location: 'Kemmangundi, Karnataka',
    category: 'waterfall',
    likes: 1834
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=800&fit=crop',
    caption: 'Serene Hirekolale Lake',
    location: 'Chikmagalur, Karnataka',
    category: 'lake',
    likes: 1567
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=800&h=800&fit=crop',
    caption: 'Wildlife at Bhadra Sanctuary',
    location: 'Lakkavalli, Karnataka',
    category: 'wildlife',
    likes: 2245
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&h=800&fit=crop',
    caption: 'Coffee Museum exhibits',
    location: 'Chikmagalur, Karnataka',
    category: 'culture',
    likes: 3167
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&h=800&fit=crop',
    caption: 'Jhari Falls hidden in the forest',
    location: 'Chikmagalur, Karnataka',
    category: 'waterfall',
    likes: 2834
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=800&fit=crop',
    caption: 'Coffee beans drying in the sun',
    location: 'Chikmagalur, Karnataka',
    category: 'coffee',
    likes: 1456
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=800&h=800&fit=crop',
    caption: 'Temple architecture in Chikmagalur',
    location: 'Chikmagalur, Karnataka',
    category: 'culture',
    likes: 4123
  }
]

const categories = ['all', 'landscape', 'beach', 'culture']

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)
  const [likedImages, setLikedImages] = useState<number[]>([])

  const filteredImages = galleryImages.filter(img => 
    selectedCategory === 'all' || img.category === selectedCategory
  )

  const toggleLike = (id: number) => {
    setLikedImages(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const openLightbox = (index: number) => {
    setLightboxImage(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return
    
    const newIndex = direction === 'prev' 
      ? (lightboxImage - 1 + filteredImages.length) % filteredImages.length
      : (lightboxImage + 1) % filteredImages.length
    
    setLightboxImage(newIndex)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Instagram className="h-4 w-4" />
            <span>Photo Gallery</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Captured Moments
            <span className="block text-gradient">of Wonder</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get inspired by stunning photography from our travelers around the world. 
            Every picture tells a story of adventure and discovery.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? 'bg-accent-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-accent-50 hover:text-accent-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.url}
                alt={image.caption}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-semibold mb-1">{image.caption}</p>
                <p className="text-sm text-white/80 mb-3">{image.location}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Heart 
                      className={`h-5 w-5 cursor-pointer transition-colors ${
                        likedImages.includes(image.id) 
                          ? 'text-red-500 fill-red-500' 
                          : 'text-white hover:text-red-400'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(image.id)
                      }}
                    />
                    <span className="text-sm">{image.likes + (likedImages.includes(image.id) ? 1 : 0)}</span>
                  </div>
                  
                  <button
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 px-3 py-1 rounded-full text-sm transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Share
                  </button>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Load More Photos
          </button>
        </div>

        {/* Social CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
            <Instagram className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">
              Share Your Adventure
            </h3>
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Tag us @tourismPro in your travel photos for a chance to be featured in our gallery!
            </p>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg border border-white/30 transition-all duration-300 transform hover:scale-105">
              Follow @TourismPro
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateLightbox('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => navigateLightbox('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image */}
            <div className="relative">
              <Image
                src={filteredImages[lightboxImage].url}
                alt={filteredImages[lightboxImage].caption}
                width={800}
                height={800}
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                <h3 className="text-xl font-semibold mb-1">
                  {filteredImages[lightboxImage].caption}
                </h3>
                <p className="text-white/80">
                  {filteredImages[lightboxImage].location}
                </p>
                
                <div className="flex items-center space-x-4 mt-4">
                  <button className="flex items-center space-x-2 hover:text-red-400 transition-colors">
                    <Heart className="h-5 w-5" />
                    <span>{filteredImages[lightboxImage].likes}</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
                    <Share className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 hover:text-green-400 transition-colors">
                    <Download className="h-5 w-5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}