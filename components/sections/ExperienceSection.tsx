'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Mountain, Waves, Building2, Palette, Camera, ArrowRight } from 'lucide-react'

const experiences = [
  {
    id: 'coffee-tour',
    title: 'Coffee Plantation Tour',
    subtitle: 'Experience the Aroma of Chikmagalur',
    description: 'Walk through lush coffee estates, learn about the traditional Indian coffee-making process, and taste fresh filter coffee. Meet local planters and enjoy the greenery.',
    icon: Mountain,
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=600&fit=crop',
    features: ['Estate Walk', 'Coffee Tasting', 'Meet Planters', 'Kannada Hospitality'],
    color: 'from-green-600 to-green-400',
  },
  {
    id: 'trekking',
    title: 'Trekking Adventures',
    subtitle: 'Explore the Western Ghats',
    description: 'Trek to Mullayanagiri, Baba Budangiri, and Kudremukh. Enjoy the monsoon mists, wildflowers, and the thrill of the Ghats. Local guides available.',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
    features: ['Guided Treks', 'Monsoon Views', 'Wildflowers', 'Local Guides'],
    color: 'from-blue-500 to-green-500',
  },
  {
    id: 'waterfalls',
    title: 'Waterfall Exploration',
    subtitle: 'Discover Hidden Falls',
    description: 'Visit Hebbe Falls, Jhari Falls, and Shanti Falls. Enjoy a refreshing dip and picnic with local snacks like Maddur vada and filter coffee.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&h=600&fit=crop',
    features: ['Waterfall Visits', 'Swimming', 'Picnic', 'Local Snacks'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'temple-tour',
    title: 'Temple Tour',
    subtitle: 'Spiritual Journey',
    description: 'Explore ancient temples like Sringeri Sharada Peetha, Horanadu Annapoorneshwari, and Kalasa. Experience Karnataka\'s spiritual heritage and architecture.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=800&h=600&fit=crop',
    features: ['Temple Visits', 'Kannada Culture', 'Peaceful Surroundings', 'Architecture'],
    color: 'from-yellow-500 to-orange-400'
  }
];

export function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState('adventure')
  
  const currentExperience = experiences.find(exp => exp.id === activeExperience) || experiences[0]

  return (
    <section id="experiences" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Camera className="h-4 w-4" />
            <span>Unique Experiences</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tailored Experiences
            <span className="block text-gradient">For Every Traveler</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you seek adventure, relaxation, culture, or creativity, 
            we craft personalized experiences that match your interests and passions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Experience Selector */}
          <div className="space-y-6">
            {experiences.map((experience) => {
              const Icon = experience.icon
              const isActive = experience.id === activeExperience
              
              return (
                <button
                  key={experience.id}
                  onClick={() => setActiveExperience(experience.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? 'bg-gradient-to-r ' + experience.color + ' text-white shadow-2xl'
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      isActive ? 'bg-white/20' : 'bg-white'
                    }`}>
                      <Icon className={`h-6 w-6 ${
                        isActive ? 'text-white' : 'text-gray-700'
                      }`} />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">
                        {experience.title}
                      </h3>
                      <p className={`text-sm mb-3 ${
                        isActive ? 'text-white/90' : 'text-gray-500'
                      }`}>
                        {experience.subtitle}
                      </p>
                      <p className={`text-sm leading-relaxed ${
                        isActive ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {experience.description}
                      </p>
                      
                      {isActive && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {experience.features.map((feature) => (
                            <span
                              key={feature}
                              className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <ArrowRight className={`h-5 w-5 transition-transform ${
                      isActive ? 'text-white rotate-90' : 'text-gray-400'
                    }`} />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Side - Active Experience Image */}
          <div className="relative">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={currentExperience.image}
                alt={currentExperience.title}
                fill
                className="object-cover transition-all duration-700"
                key={currentExperience.id}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />
              
              {/* Content Overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  {currentExperience.title}
                </h3>
                <p className="text-white/90 mb-4">
                  {currentExperience.subtitle}
                </p>
                
                <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-lg border border-white/30 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                  <span>Explore {currentExperience.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${currentExperience.color}`}>
                  <currentExperience.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Premium</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">4.9★</p>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Decide? Let Us Help!
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our travel experts will help you choose the perfect experience based on your preferences and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Get Personalized Recommendations
              </button>
              <button className="btn-secondary bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                View All Experiences
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}