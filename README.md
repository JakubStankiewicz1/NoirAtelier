# 🏢 NoirAtelier - Real Estate Platform

<div align="center">

**🌐 [View Live Demo](https://noiratelier-frontend.onrender.com/) | 💻 [GitHub Repository](https://github.com/JakubStankiewicz1/NoirAtelier)**

</div>

![NoirAtelier](https://img.shields.io/badge/NoirAtelier-Premium%20Real%20Estate-2C3E50?style=for-the-badge)  
![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge)  
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)  
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)

**NoirAtelier** is an elegant, comprehensive real estate platform that combines luxury property management, investment consulting, and premium services in one sophisticated digital experience.

## ✨ About the Project

NoirAtelier represents the pinnacle of real estate digital platforms - where luxury meets functionality. Our comprehensive suite of services includes property management, investment consulting, interior design, and premium rental solutions, all presented through an intuitive and visually stunning interface.

### 🎯 Key Features
- **🏢 Property Management** - Comprehensive property oversight and optimization
- **📈 Investment Consulting** - Expert market analysis and strategic guidance  
- **🎨 Interior Design** - Premium design services for luxury properties
- **🤝 Buy & Sell Support** - End-to-end transaction assistance
- **🏰 Luxury Rentals** - High-end rental property management
- **📍 Location Analysis** - Strategic market positioning insights
- **📱 Fully Responsive** - Perfect performance across all devices
- **⚡ Lightning Fast** - Optimized for maximum performance
<!-- - **🎭 Smooth Animations** - Fluid transitions with Framer Motion -->

---

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────┐
│            NoirAtelier Frontend         │
│          React 19 + Vite 6 SPA          │
│         Port: 1111 (dev) | 3000 (prod)  │
└─────────────────────────────────────────┘
                    │
            ┌───────────────┐
            │   Routing     │
            │ React Router  │
            └───────────────┘
                    │
    ┌──────────────────────────────────────┐
    │              Services                │
    ├──────────────────────────────────────┤
    │  🏠 Properties    │  📈 Investment  │
    │  🎨 Interior      │  🤝 Buy/Sell    │
    │  🏰 Rentals       │  📍 Location    │
    │  ❓ FAQ           │  📧 Contact     │
    └──────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

| Category | Technology | Version | Application |
|-----------|-------------|---------|--------------|
| **🔧 Framework** | React | 19.1.0 | UI Library |
| **⚡ Build Tool** | Vite | 6.3.5 | Development & Build |
| **🧭 Routing** | React Router DOM | 7.6.0 | Client-side routing |
| **🎭 Animations** | Framer Motion | 12.18.1 | Smooth transitions |
| **🎨 Icons** | React Icons | 5.5.0 | Professional iconography |
| **🎨 Styling** | CSS Modules | - | Component-scoped styles |
| **🖼️ Assets** | WebP/AVIF | - | Optimized images |
| **📱 Responsiveness** | Custom CSS | - | Mobile-first approach |
| **🐳 Deployment** | Docker | - | Containerized deployment |

---

## 🚀 Quick Start

### Requirements
- **Node.js** 18+ (recommended 20+)
- **npm** or **yarn**
- **Git**
- **Docker** (optional, for containerized deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/JakubStankiewicz1/NoirAtelier
cd NoirAtelier

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# 🎉 Application available at http://localhost:1111
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server (port 1111)

# Production  
npm run build        # Build for production
npm run start        # Start production server (port 3000)
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint check
```

---

## � Project Structure

```
NoirAtelier-1/
├── 📄 README.md                    # Project documentation
├── 📄 render.yaml                  # Render deployment config
├── 🐳 Dockerfile                   # Docker configuration
├── 📋 deploy.ps1                   # PowerShell deployment script
│
└── 🌐 frontend/                    # React Application
    ├── 📋 package.json             # Dependencies & scripts
    ├── ⚙️ vite.config.js           # Vite configuration
    ├── 📋 eslint.config.js         # ESLint rules
    ├── 📄 index.html               # Entry HTML
    │
    ├── 📁 public/                  # Static assets
    │   └── 🖼️ vite.svg
    │
    └── 📁 src/                     # Source code
        ├── 📄 main.jsx             # App entry point
        ├── 📄 App.jsx              # Main App component
        ├── 🎨 App.css              # Global styles
        ├── 🎨 index.css            # Root styles
        │
        ├── 🖼️ assets/              # Images & media
        │   ├── HomeHeroImage*.jpg/jpeg
        │   ├── PropertiesCollection*.jpg
        │   ├── ContactForm*.webp
        │   └── assets.js           # Asset exports
        │
        ├── 📱 components/          # Reusable components
        │   ├── 🧭 Navbar/          # Navigation
        │   ├── 🏠 Home*/           # Homepage components
        │   ├── 🏢 Properties*/     # Property components
        │   ├── 🎨 InteriorDesign*/ # Design components
        │   ├── 📈 Investment*/     # Consulting components
        │   ├── 🤝 BuySellSupport*/ # Transaction support
        │   ├── 🏰 LuxuryRentals*/  # Rental components
        │   ├── 📍 LocationAnalysis*/ # Analysis components
        │   ├── ❓ Faq*/            # FAQ components
        │   ├── 📧 Contact*/        # Contact components
        │   └── 👥 About*/          # About components
        │
        ├── 📊 data/                # Static data & content
        │   └── [Various data files]
        │
        └── 📄 pages/               # Route components
            ├── 🏠 Home/            # Homepage
            ├── 🏢 Properties/      # Property listings
            ├── ℹ️ About/           # About page
            ├── 📧 Contact/         # Contact page
            ├── ❓ Faq/             # FAQ page
            ├── 📝 Blog/            # Blog section
            ├── 🎨 InteriorDesign/  # Interior design
            ├── 📈 InvestmentConsulting/ # Investment services
            ├── 🤝 BuySellSupport/  # Transaction support
            ├── 🏰 LuxuryRentals/   # Luxury rentals
            ├── 📍 LocationAnalysis/ # Location analysis
            └── 🏢 PropertyManagement/ # Property management
```

---

## 🎨 Design System

### 🎨 Color Palette
```css
/* Primary Colors */
--primary-dark: #2C3E50      /* Main navigation, headers */
--primary-white: #FFFFFF     /* Background, contrast text */
--accent-gold: #D4AF37       /* Luxury accents, hover states */
--text-dark: #2C3E50         /* Primary text */
--text-light: #7F8C8D        /* Secondary text */

/* Additional */
--background-light: #F8F9FA  /* Section backgrounds */
--border-light: #E9ECEF      /* Subtle borders */
--shadow: rgba(0,0,0,0.1)    /* Box shadows */
```

### 🔤 Typography
```css
/* Professional Fonts */
.cormorant-garamond-regular  /* Elegant headings, luxury branding */
.inter-regular               /* Clean body text, UI elements */  
.playfair-display           /* Premium accent text */
```

### 📱 Responsive Breakpoints
```css
/* Mobile First Approach */
@media (max-width: 480px)   /* Mobile phones */
@media (max-width: 768px)   /* Tablets */ 
@media (max-width: 992px)   /* Small desktops */
@media (max-width: 1200px)  /* Large desktops */
@media (min-width: 1400px)  /* Extra large screens */
```

---

<!-- ## 🏢 Services & Features

### 🏠 **Property Management**
- **Portfolio Optimization** - Maximize investment returns
- **Tenant Relations** - Professional tenant management
- **Maintenance Oversight** - Property upkeep and repairs
- **Financial Reporting** - Detailed performance analytics

### 📈 **Investment Consulting**
- **Market Analysis** - In-depth market research
- **Portfolio Planning** - Strategic investment guidance
- **Risk Assessment** - Comprehensive risk evaluation
- **ROI Optimization** - Maximize investment potential

### 🎨 **Interior Design**
- **Luxury Design** - Premium interior solutions
- **Space Planning** - Optimal layout optimization
- **Project Management** - End-to-end design oversight
- **Custom Solutions** - Tailored design approaches

### 🤝 **Buy & Sell Support**
- **Transaction Management** - Complete deal facilitation
- **Market Valuation** - Professional property appraisal
- **Legal Support** - Documentation and compliance
- **Client Advocacy** - Dedicated client representation

### � **Luxury Rentals**
- **Premium Properties** - High-end rental portfolio
- **Concierge Services** - White-glove tenant experience
- **Marketing Excellence** - Professional property promotion
- **Quality Assurance** - Strict property standards

### 📍 **Location Analysis**
- **Market Research** - Comprehensive area analysis
- **Growth Projections** - Future development insights
- **Investment Potential** - Location-based ROI analysis
- **Strategic Positioning** - Optimal location selection -->

---

<!-- ## 🚀 Deployment

### 🌐 Render (Recommended)
```bash
# Automatic deployment with render.yaml
# Just push to GitHub and connect to Render

# Manual deployment
git add .
git commit -m "Deploy to production"
git push origin main

# Render will automatically build and deploy
```

### 🐳 Docker Deployment
```bash
# Build Docker image
docker build -t noiratelier .

# Run container locally
docker run -p 3000:3000 noiratelier

# Production deployment
docker build -t noiratelier-prod .
docker run -d -p 80:3000 --name noiratelier-app noiratelier-prod
```

### 📦 Static Hosting
```bash
# Build for production
cd frontend
npm run build

# Deploy 'dist' folder to:
# - Vercel, Netlify, GitHub Pages
# - AWS S3, Azure Static Web Apps
# - Railway, Heroku, etc.
``` -->
<!-- 
---

## ⚡ Performance Optimizations

### 🎯 Built-in Optimizations
- **⚡ Vite HMR** - Lightning-fast development
- **🖼️ Image Optimization** - WebP/AVIF formats
- **📦 Code Splitting** - Automatic route-based splitting  
- **🗜️ Compression** - Gzip/Brotli ready
- **🚀 Lazy Loading** - Images and components
- **♻️ Tree Shaking** - Unused code elimination
- **🎭 Animation Optimization** - Framer Motion performance

### 📊 Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s  
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.0s
- **Lighthouse Score**: 90+

---

## 🔧 Development

### 🛠️ Local Development
```bash
# Hot reload development
npm run dev

# Production preview
npm run build && npm run preview

# Code quality check
npm run lint
```

### 📋 Development Guidelines
- **Component Structure** - Organized by feature/page
- **CSS Modules** - Scoped styling approach
- **Responsive First** - Mobile-first development
- **Performance Focus** - Optimized images and code
- **Accessibility** - WCAG compliant components

---

## 🗺️ Roadmap

### v1.1 (In Progress)
- [ ] **🌐 Multi-language Support** - Polish/English interface
- [ ] **📧 Contact Form Integration** - Functional contact forms
- [ ] **🗺️ Interactive Maps** - Property location mapping
- [ ] **📊 Analytics Dashboard** - Performance tracking
- [ ] **🔍 Advanced Search** - Enhanced property filtering

### v1.2 (Planned)
- [ ] **👤 User Authentication** - Client portal access
- [ ] **📱 Mobile App** - React Native companion
- [ ] **🤖 AI Chatbot** - Automated customer support
- [ ] **📈 Real-time Market Data** - Live market updates
- [ ] **💼 CRM Integration** - Customer relationship management

### v2.0 (Future)
- [ ] **🏢 Property Marketplace** - Buy/sell platform
- [ ] **💳 Payment Integration** - Online transactions
- [ ] **📊 Advanced Analytics** - Detailed reporting dashboard
- [ ] **🔗 API Development** - Third-party integrations
- [ ] **🌍 International Expansion** - Multi-market support

---

## 🆘 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### Port Conflicts
```bash
# Development: Port 1111
# Production: Port 3000
# Change in vite.config.js if needed
```

#### Docker Issues
```bash
# Check logs
docker logs <container-name>

# Rebuild image
docker build --no-cache -t noiratelier .
```

#### Render Deployment
- Check build logs in Render dashboard
- Verify `render.yaml` configuration
- Ensure all dependencies are in `package.json`

--- -->

## 📞 Support & Contact

### 💬 Communication Channels
- **🐛 Issues**: GitHub Issues for bug reports
- **💡 Features**: GitHub Discussions for suggestions
<!-- - **📧 Business**: contact@noiratelier.com -->
- **💼 Partnerships**: partnerships@noiratelier.com

<!-- ### 📚 Resources
- **📖 Documentation**: Comprehensive guides (planned)
- **🎥 Tutorials**: Video walkthroughs (planned)
- **🔧 API Docs**: Technical documentation (v2.0)
- **🎨 Design System**: Style guide (planned) -->
<!-- 
---

## 📄 License

This project is available under the **MIT License**.

```
MIT License - Open source with attribution required
```

--- -->

<!-- <div align="center"> -->

## 🏢 NoirAtelier - Where Luxury Meets Excellence

**Redefining Premium Real Estate Services**

[![Deploy to Render](https://img.shields.io/badge/Deploy%20to-Render-black?style=for-the-badge&logo=render)](https://render.com/deploy)
[![Deploy to Vercel](https://img.shields.io/badge/Deploy%20to-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/new)

---

*"NoirAtelier represents the pinnacle of real estate excellence, where sophisticated technology meets unparalleled service quality."*

**⭐ If this project helps you, please give it a star!**

</div>
