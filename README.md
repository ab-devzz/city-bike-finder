# 🚴 City Bike Finder

An interactive web application for discovering and locating bike-sharing stations in your city. Built with modern web technologies for a seamless user experience.

## ✨ Features

- **Interactive Map**: Real-time map visualization powered by Leaflet with react-leaflet
- **Station Locator**: Find bike-sharing stations near you with detailed information
- **Search & Filter**: Easily search for stations by location or availability
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Type-Safe Development**: Full TypeScript support for robust code quality
- **Modern UI**: Clean and intuitive interface built with Tailwind CSS and shadcn/ui components

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React-based full-stack framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- **Mapping**: [react-leaflet](https://react-leaflet.js.org/) - React wrapper for Leaflet
- **State Management**: Zustand - Lightweight state management
- **Deployment**: [Vercel](https://vercel.com/) - Optimized Next.js hosting

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ab-devzz/city-bike-finder.git
   cd city-bike-finder
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**

   Create a `.env.local` file in the root directory:

   ```bash
   # Add any required API keys or configuration
   NEXT_PUBLIC_MAP_API_KEY=your_api_key_here
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
city-bike-finder/
├── app/                  # Next.js app directory
├── components/          # Reusable React components
├── lib/                 # Utility functions and helpers
├── store/              # State management (Zustand stores)
├── public/             # Static assets
├── styles/             # Global styles
├── next.config.ts      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project dependencies
```

## 🔧 Key Technical Decisions

### Leaflet with SSR

This project uses `react-leaflet` with special handling for Next.js server-side rendering. The map component is dynamically imported with `ssr: false` to prevent hydration mismatches:

```typescript
const MapComponent = dynamic(() => import('@/components/Map'), {
  ssr: false,
  loading: () => <MapSkeleton />
});
```

### Component Library

shadcn/ui provides copy-paste components with full customization, reducing dependency bloat while maintaining design consistency.

### State Management

Zustand stores are used for lightweight global state management without excessive boilerplate.

## 📝 Available Scripts

```bash
# Development
npm run dev           # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

## 🌐 Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/).

### Deploy to Vercel

1. Push your repository to GitHub
2. Connect your GitHub account to Vercel
3. Select this repository and click "Deploy"
4. Configure environment variables in Vercel dashboard
5. Your app will auto-deploy on every push to main

Alternatively, use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Leaflet](https://react-leaflet.js.org/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code:

- Follows the existing code style
- Includes TypeScript type annotations
- Has proper error handling
- Is responsive and accessible

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Abhishek** - Full-stack Developer

- GitHub: [@ab-devzz](https://github.com/ab-devzz)
- LinkedIn: [linkedin.com/in/ab-devzz](https://linkedin.com/in/ab-devzz)

## 🙏 Acknowledgments

- [Leaflet](https://leafletjs.com/) for powerful mapping capabilities
- [Vercel](https://vercel.com/) for excellent Next.js hosting
- Open-source community for amazing tools and libraries

---

**Built with ❤️ by Abhishek**
