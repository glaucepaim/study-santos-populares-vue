# 🎉 Santos Populares 2026

A modern web application to discover and manage popular saints festivities across Portugal. Built with Vue 3 and designed for the Portuguese cultural context.

![Santos Populares](https://img.shields.io/badge/Vue-3-42b883) ![License](https://img.shields.io/badge/license-MIT-blue) ![Status](https://img.shields.io/badge/status-active-success)

## 🌟 Features

- 📅 **Event Discovery** — Browse 30+ events across Lisbon, Porto, and Braga
- 🔍 **Advanced Filtering** — Filter by city, event type, date range, and search
- ❤️ **Favorites System** — Save your favorite events with localStorage persistence
- 🎨 **Dual Themes** — Switch between Folk (traditional) and Festive (modern) themes
- 📱 **Fully Responsive** — Mobile-first design that works on all devices
- 🗺️ **Location Integration** — View event locations on Google Maps
- ⏰ **Live Countdown** — Real-time countdown to the next celebration

## 🛠️ Tech Stack

- **Frontend Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Routing:** Vue Router 4
- **Styling:** CSS3 (Custom Properties, Grid, Flexbox)
- **State Management:** Composables pattern
- **Data Persistence:** localStorage API
- **Deployment:** Ready for Vercel/Netlify

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/glaucepaim/study-santos-populares-vue.git

# Navigate to project directory
cd study-santos-populares-vue

# Install dependencies
npm install

# Start development server
npm run dev

```

## 🏗️ Project Structure

```
src/
├── assets/
│   └── styles/
│       ├── theme.css          # CSS variables and themes
│       └── global.css         # Global styles and utilities
├── components/
│   ├── common/                # Reusable components
│   │   ├── LoadingSpinner.vue
│   │   └── EmptyState.vue
│   ├── events/                # Event-related components
│   │   ├── EventCard.vue
│   │   ├── EventGrid.vue
│   │   └── EventFilters.vue
│   ├── home/                  # Homepage components
│   │   ├── HeroSection.vue
│   │   └── CountdownBanner.vue
│   └── layout/                # Layout components
│       ├── AppHeader.vue
│       └── AppFooter.vue
├── composables/               # Vue composables
│   ├── useEvents.js
│   └── useFavorites.js
├── pages/                     # Route pages
│   ├── HomePage.vue
│   ├── EventDetailsPage.vue
│   └── NotFoundPage.vue
├── router/                    # Vue Router configuration
│   └── index.js
├── services/                  # API services
│   └── eventService.js
├── App.vue
└── main.js

```

## 🚀 Key Technical Decisions

- **Composition API** — Modern Vue 3 pattern for better code organization
- **Composables** — Reusable logic extraction (useEvents, useFavorites)
- **CSS Custom Properties** — Theme switching without JavaScript overhead
- **localStorage** — Client-side persistence without backend dependency
- **Vue Router** — SPA navigation with proper state management
- **Mobile-First** — Responsive design starting from mobile breakpoints

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server with HMR

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Lint code (if configured)
```

## 🎯 Future Enhancements

- Backend API with Node.js/Express
- User authentication system
- Event creation and management
- Social sharing features
- Multi-language support (i18n)
- Unit tests with Vitest

## 👨‍💻 Developer
Glauce Paim Santos
Frontend Developer Junior Candidate
[glaucepaim@gmail.com] | [https://www.linkedin.com/in/glauce-paim/]

## 📄 Licença
MIT

