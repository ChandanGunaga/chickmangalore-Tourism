'use client'

import Image from 'next/image'
import { Calendar, Clock, User, ArrowRight, BookOpen, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "A Trekker's Guide to Mullayanagiri",
    excerpt: 'Everything you need to know for a safe and memorable trek to Karnataka highest peak. Tips from local guides and what to pack for the Ghats.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
    author: 'Ravi Kumar',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: 'April 10, 2024',
    readTime: '7 min read',
    category: 'Trekking',
    tags: ['Mullayanagiri', 'Trekking', 'Adventure'],
    featured: true
  },
  {
    id: 2,
    title: "Exploring Chikmagalur's Coffee Estates",
    excerpt: 'A deep dive into the world of Indian coffee, from bean to cup, in the heart of Karnataka. Meet the planters and taste authentic filter coffee.',
    image: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=600&fit=crop',
    author: 'Priya Shetty',
    authorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: 'April 5, 2024',
    readTime: '6 min read',
    category: 'Coffee',
    tags: ['Coffee', 'Plantation', 'Culture'],
  },
  {
    id: 3,
    title: 'Waterfalls of Chikmagalur: Hidden Gems',
    excerpt: 'Discover the most beautiful and lesser-known waterfalls in the region. Local tips for the best time to visit and what to bring.',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&h=600&fit=crop',
    author: 'Anil Rao',
    authorImage: 'https://randomuser.me/api/portraits/men/45.jpg',
    date: 'March 28, 2024',
    readTime: '5 min read',
    category: 'Nature',
    tags: ['Waterfalls', 'Nature', 'Adventure'],
  },
  {
    id: 4,
    title: 'A Day at Bhadra Wildlife Sanctuary',
    excerpt: 'Tips for wildlife lovers and bird watchers visiting Bhadra. What animals to spot and how to book a safari.',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=800&h=600&fit=crop',
    author: 'Megha Patil',
    authorImage: 'https://randomuser.me/api/portraits/women/46.jpg',
    date: 'March 20, 2024',
    readTime: '8 min read',
    category: 'Wildlife',
    tags: ['Wildlife', 'Safari', 'Bird Watching'],
  },
  {
    id: 5,
    title: 'Temple Trails: Spiritual Chikmagalur',
    excerpt: 'A guide to the most revered temples and spiritual sites in the region. Learn about Karnataka temple architecture and rituals.',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?w=800&h=600&fit=crop',
    author: 'Sahana Gowda',
    authorImage: 'https://randomuser.me/api/portraits/women/47.jpg',
    date: 'March 15, 2024',
    readTime: '6 min read',
    category: 'Spiritual',
    tags: ['Temples', 'Spiritual', 'Culture'],
  },
  {
    id: 6,
    title: 'Best Time to Visit Chikmagalur',
    excerpt: 'Weather, festivals, and tips for planning your trip to Chikmagalur. Experience the monsoon magic and local celebrations.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop',
    author: 'Deepak Nair',
    authorImage: 'https://randomuser.me/api/portraits/men/48.jpg',
    date: 'March 10, 2024',
    readTime: '4 min read',
    category: 'Travel Tips',
    tags: ['Travel', 'Tips', 'Seasons']
  }
];

const categories = ['All', 'Adventure', 'Photography', 'Sustainability', 'Culture', 'Beach'];

export function BlogSection() {
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BookOpen className="h-4 w-4" />
            <span>Travel Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest Travel
            <span className="block text-gradient">Insights & Stories</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get inspired by travel stories, expert tips, and destination guides 
            from our community of passionate travelers and local experts.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                    <span className="bg-white/60 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                      {featuredPost.category}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  {/* Author Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                      <div className="flex items-center space-x-3 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{featuredPost.date}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{featuredPost.readTime}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/60 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="btn-primary flex items-center space-x-2">
                    <span>Read Full Story</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-semibold">Trending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <article
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Author & Meta */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                      <div className="flex items-center space-x-2 text-xs text-gray-600">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="text-primary-600 hover:text-primary-700 transition-colors">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <BookOpen className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss a Story
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest travel insights, tips, and destination guides delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Join 25,000+ travelers already subscribed
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}