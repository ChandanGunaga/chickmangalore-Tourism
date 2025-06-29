// Centralized image configuration for Chikmangalore Tourism
export const chikmangaloreImages = {
  // Hero and main images
  coffeePlantations: 'https://images.unsplash.com/photo-1633437805600-2c58bf56663c?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  hebbeFalls: 'https://images.unsplash.com/photo-1526498716079-a8a720f2f87f?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  natureScenery: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  mountainView: 'https://images.unsplash.com/photo-1628497517516-af58a301f80d?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  temple: 'https://media.istockphoto.com/id/1222391134/photo/hindu-ancient-temple-with-breathtaking-stone-hand-art-work-for-spiritual-enlightenment.jpg?s=1024x1024&w=is&k=20&c=OfW-LLBOxHhVp1f9fc9vFjNrraQ8unWBYvKn2gWP7d4=',
  coffeeBeans: 'https://cdn.pixabay.com/photo/2024/10/20/14/51/coffee-9135194_1280.jpg',
  
  // Destination images
  kudremukhPeak: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/3f/c1/ed/the-full-view.jpg?w=1600&h=-1&s=1',
  kudremukhPark: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/07/d2/73/photo1jpg.jpg?w=1000&h=-1&s=1',
  bhadraWildlife: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/55/ec/7e/20160102-103625-largejpg.jpg?w=1000&h=800&s=1',
  kalasaWaterfalls: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/f4/e3/6e/madugundi-water-falls.jpg?w=1000&h=800&s=1',
  shriShankara: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/5a/0c/de/few-snaps-in-sringeri.jpg?w=1000&h=-1&s=1',
  babaBudangiri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/6d/00/ea/enroute-baba-budangiri.jpg?w=1000&h=-1&s=1',
  mullayanagiri: 'https://karnatakatourism.org/wp-content/uploads/2020/06/chikmagalur3.jpg',
  hebbeFallsDest: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/56/3e/a3/hebbe-falls.jpg?w=1400&h=800&s=1',
  coffeeEstates: 'https://images.unsplash.com/photo-1633437805600-2c58bf56663c?w=800&h=600&fit=crop',
  zPoint: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/17/44/b2/z-point.jpg?w=1400&h=800&s=1',
  
  // Additional images for variety
  forest: 'https://cdn.pixabay.com/photo/2021/06/25/23/27/forest-6364913_1280.jpg',
  festival: 'https://cdn.pixabay.com/photo/2016/11/18/13/53/festival-of-lights-1834690_1280.jpg',
  sunset: 'https://images.unsplash.com/photo-1723223347480-88a85ffafe29?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  
  // Profile images for testimonials (using coffee-related images as placeholders)
  profile1: 'https://images.unsplash.com/photo-1633437805600-2c58bf56663c?w=150&h=150&fit=crop',
  profile2: 'https://images.unsplash.com/photo-1526498716079-a8a720f2f87f?w=150&h=150&fit=crop',
  profile3: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=150&h=150&fit=crop',
  profile4: 'https://images.unsplash.com/photo-1628497517516-af58a301f80d?w=150&h=150&fit=crop',
  profile5: 'https://media.istockphoto.com/id/1222391134/photo/hindu-ancient-temple-with-breathtaking-stone-hand-art-work-for-spiritual-enlightenment.jpg?w=150&h=150&fit=crop',
  profile6: 'https://cdn.pixabay.com/photo/2024/10/20/14/51/coffee-9135194_1280.jpg',
};

// Helper function to get random images for variety
export const getRandomImages = (count: number) => {
  const imageUrls = Object.values(chikmangaloreImages);
  const shuffled = [...imageUrls].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Helper function to get images by category
export const getImagesByCategory = (category: 'nature' | 'culture' | 'adventure' | 'coffee') => {
  const categoryMap = {
    nature: [chikmangaloreImages.hebbeFalls, chikmangaloreImages.natureScenery, chikmangaloreImages.forest],
    culture: [chikmangaloreImages.temple, chikmangaloreImages.shriShankara, chikmangaloreImages.festival],
    adventure: [chikmangaloreImages.kudremukhPeak, chikmangaloreImages.mullayanagiri, chikmangaloreImages.zPoint],
    coffee: [chikmangaloreImages.coffeePlantations, chikmangaloreImages.coffeeBeans, chikmangaloreImages.coffeeEstates]
  };
  return categoryMap[category] || [];
}; 