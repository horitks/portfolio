# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Takashi Hori (pori/@t_pori418), built as a static site generator using Nuxt 3. The site showcases personal information, skills, and external links through a modern, responsive design.

## Common Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot reload at localhost:3000
npm run dev

# Build for production (static site generation)
npm run build

# Generate static files for deployment
npm run generate

# Preview the generated static site
npm run preview

# Prepare Nuxt for development (runs automatically after install)
npm run postinstall
```

## Architecture and Key Technologies

### Frontend Stack
- **Nuxt 3**: Vue.js framework configured for static site generation
- **Vue 3**: Frontend framework with Composition API
- **Bulma**: Primary CSS framework for responsive design
- **Nuxt UI + Tailwind CSS**: Additional UI components and utility classes
- **SCSS**: CSS preprocessing for custom styles

### Build and Deployment
- **Static Generation**: Configured for static hosting via `nitro.preset: 'static'`
- **Netlify**: Deployment platform (see `netlify.toml`)
- **Node.js 20.18.0**: Runtime environment

## Project Structure

### Pages and Layout
- `layouts/default.vue`: Main layout with navigation header, content slot, and footer
- `pages/index.vue`: Home page with circular navigation buttons and social links
- `pages/about.vue`: About page with detailed profile information
- Both pages use custom slide transitions (`slide-left`/`slide-right`)

### Component Architecture
- `components/icons/HatenaIcon.vue`: Custom SVG icon component for Hatena blog
- Uses Nuxt's auto-imported components system
- Icons primarily from `@nuxt/icon` with Iconify integration

### Plugins and Utilities
- `plugins/utils.client.js`: Device detection utility (`$getDevice()`)
- `plugins/ga.client.js`: Google Analytics integration (production only)
- Both plugins are client-side only

### Styling System
- `assets/main.scss`: Global styles including:
  - Page transition animations (fade, bounce, slide-left, slide-right)
  - Custom responsive design utilities
  - Word wrapping and container width overrides

### Configuration
- **Static Routes**: Prerendered routes for `/` and `/about`
- **Meta Tags**: Japanese language site with proper SEO tags
- **Runtime Config**: Google Analytics tracking ID from environment variables
- **TypeScript**: Configured with strict mode and Nuxt types

## Development Notes

### Device Detection
The site uses a custom device detection plugin that categorizes devices as:
- `sp`: Mobile phones (iPhone, iPod, Android Mobile)
- `tab`: Tablets (iPad, Android tablets)  
- `other`: Desktop/other devices

### Responsive Design
- Uses Bulma's responsive grid system with custom breakpoints
- Mobile-first approach with `@media screen and (max-width: 768px)`
- Custom hover effects disabled on smart devices for better touch experience

### Analytics
- Google Analytics integration only loads in production
- Automatic page view tracking on route changes
- Tracking ID configured via `GA_TRACKING_ID` environment variable

### Deployment
- Netlify deployment with automatic builds from `npm run generate`
- Static files output to `.output/public` directory
- Node.js 20.18.0 specified in build environment