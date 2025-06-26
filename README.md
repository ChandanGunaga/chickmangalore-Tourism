# Tourism Website - Next.js

A modern, responsive tourism website built with Next.js 14, TypeScript, and Tailwind CSS. Features stunning animations, immersive user experience, and production-ready code.

![Tourism Website](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop)

## ✨ Features

- **Modern Design**: Clean, contemporary UI with smooth animations and micro-interactions
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 for optimal performance and SEO
- **Interactive Components**: Dynamic hero section, image galleries, testimonials carousel
- **Accessibility**: WCAG compliant with proper semantic markup and keyboard navigation
- **TypeScript**: Fully typed for better development experience and code reliability
- **Production Ready**: Optimized for production deployment with best practices

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image component
- **Development**: ESLint, Prettier

## 📦 Project Structure

```
tourism-website/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   │   ├── Navbar.tsx    # Navigation component
│   │   └── Footer.tsx    # Footer component
│   └── sections/         # Page sections
│       ├── HeroSection.tsx
│       ├── FeaturedDestinations.tsx
│       ├── ExperienceSection.tsx
│       ├── GallerySection.tsx
│       ├── BlogSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── StatsSection.tsx
│       └── NewsletterSection.tsx
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json         # Dependencies
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tourism-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎨 Customization

### Colors & Branding

Update the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    500: '#0ea5e9',
    600: '#0284c7',
    // ... add your brand colors
  },
}
```

### Content & Images

- Replace placeholder images with your own in the components
- Update text content in each section component
- Modify the navigation links in `components/layout/Navbar.tsx`

### Typography

- Update font families in `tailwind.config.ts`
- Modify text styles in `app/globals.css`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Features Breakdown

### Hero Section
- Dynamic background image carousel
- Animated text and call-to-action buttons
- Interactive search form
- Smooth scroll indicators

### Destinations
- Filterable destination grid
- Interactive cards with hover effects
- Dynamic content loading
- Like/favorite functionality

### Gallery
- Masonry-style photo grid
- Lightbox modal for image viewing
- Category filtering
- Social sharing integration

### Testimonials
- Carousel with auto-play
- Interactive navigation
- Verified customer badges
- Star ratings display

### Blog
- Featured article highlight
- Category-based filtering
- Reading time estimates
- Author information

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Font Optimization**: Google Fonts optimization
- **Bundle Analysis**: Built-in bundle analyzer
- **Caching**: Proper caching headers and strategies

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## 🎨 Design System

### Colors
- **Primary**: Blue tones for main actions and branding
- **Accent**: Pink/red tones for highlights and CTAs
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Headings**: Bold, modern sans-serif
- **Body**: Clean, readable sans-serif
- **UI Elements**: Medium weight for buttons and labels

### Spacing
- Consistent spacing scale based on Tailwind's default system
- Generous whitespace for better readability
- Responsive spacing that adapts to screen size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)
- Inspiration from various tourism websites
- Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)

## 📞 Support

For support and questions:

- Create an issue in the repository
- Email: support@yourproject.com
- Documentation: [Project Wiki](link-to-wiki)

---

**Happy Coding! 🚀✈️**