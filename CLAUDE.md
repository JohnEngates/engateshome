# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog and portfolio website built with Astro and deployed on Cloudflare Workers. The site features a bold, minimalist design inspired by the Volks Typo theme.

## Essential Commands

```bash
# Development
npm run dev          # Start local development server (http://localhost:4321)
npm run preview      # Build and preview with Wrangler locally

# Build & Deploy
npm run build        # Build for production
npm run deploy       # Build and deploy to Cloudflare Workers

# Type Generation
npm run cf-typegen   # Generate TypeScript types for Cloudflare bindings
```

## Architecture Overview

### Content Management
- Blog posts live in `src/content/blog/` as Markdown/MDX files
- Content schema defined in `src/content/config.ts` using Zod validation
- Dynamic routes generated from content collections

### Styling System
- Global styles in `src/styles/global.css` using CSS variables
- Theme colors: Monotone palette with red accent (#dc2626)
- Typography: Oswald (headings), Roboto Condensed, Work Sans (body), JetBrains Mono (code)
- Dark mode implemented via `data-theme` attribute and CSS variables
- 8px grid unit system for consistent spacing

### Cloudflare Workers Integration
- Configuration in `wrangler.jsonc` - DO NOT modify compatibility_date without testing
- Static assets served via Cloudflare's edge network
- Ready for KV, R2, D1, and other Cloudflare bindings
- Platform proxy enabled for local development

### Component Structure
- Layout wrapper in `src/layouts/Layout.astro` includes Header and theme initialization
- All pages must use Layout component for consistent navigation and styling
- Theme initialization script (`public/theme-init.js`) prevents flash of unstyled content

## Key Configuration Files

- `src/config.ts` - Site metadata, author info, social links
- `astro.config.mjs` - Astro and Cloudflare adapter settings
- `wrangler.jsonc` - Cloudflare Workers deployment configuration

## Important Deployment Notes

- Site URL: https://engateshome.jengates.workers.dev
- Always run `npm run build` before `wrangler deploy`
- The adapter warning about server-rendered pages can be ignored for static sites
- Assets are automatically optimized and served from Cloudflare's edge

## Content Patterns & Best Practices

### Speaking Page Structure
- Events organized chronologically by year (newest first)
- Each year section uses `<div class="year-section">` with `<h3 class="year-header">YYYY</h3>`
- Featured/highlighted events use classes: `appearance-card highlight special`
- Event structure includes: title, context line, description, optional images, and link
- Standard image dimensions: 800x600 for single photos, 400x300 for photo grids

### Photo Management
- All site images stored in `/src/assets/images/site/`
- Use descriptive filenames: `event-name-location-1.jpg`
- Import images at top of Astro files for proper optimization
- Multiple photos for single event should use custom container class (e.g., `.nyse-bell-photos`)
- Always add `clickable` class to images for lightbox functionality

### Lightbox Gallery Implementation
- Located in `/public/lightbox.js` with automatic initialization
- Multi-image containers automatically become navigable galleries
- Supported containers: `.whitehouse-photos`, `.nyse-bell-photos`, `.wozniak-photos`, `.cloudflare-chicago-photos`, `.achievement-photos`
- Navigation: Arrow keys (← →), on-screen buttons, ESC to close
- Shows image counter (e.g., "2 / 4") for galleries
- Special handling for White House photos split across two containers

### Board Positions (Advisory Page)
- Board types displayed as tags: "Public Company Board" or "Private Company Board"
- Tags positioned top-right with `align-items: flex-start` to prevent centering issues
- Focus areas typically include:
  - Digital transformation / technology strategy
  - Cybersecurity and risk management
  - E-commerce and omnichannel strategy
- Links to company websites use `target="_blank" rel="noopener"`

### CSS Grid Patterns
- Two-column grids: `.nyse-bell-photos`, `.cloudflare-chicago-photos`
- Three-column grid: `.whitehouse-photos`
- All grids responsive to single column on mobile (768px breakpoint)
- Standard gap: `calc(var(--grid-unit) * 2)` between items

## Common Development Tasks

### Adding a Speaking Engagement
1. Import event images at top of `speaking.astro`
2. Find appropriate year section or create new one
3. Add event article with proper classes
4. For multiple photos:
   - Create container with descriptive class
   - Add to lightbox.js multi-image selectors
   - Add grid CSS and mobile responsive rules
5. Test lightbox navigation for photo galleries

### Updating Board Positions
1. Edit `src/pages/advisory.astro`
2. Maintain consistent focus areas across similar roles
3. Ensure board type tags align properly
4. Update company descriptions to reflect current status

### Git Commit Convention
Always include Claude Code attribution in commits:
```
🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

## Custom Commands

- `/deploy` - Builds and deploys to Cloudflare Workers (runs `npm run deploy`)
- Always verify changes locally before deploying
- Check deployment status at https://engateshome.jengates.workers.dev