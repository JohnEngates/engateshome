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