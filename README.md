# John Engates - Personal Website & Research Portfolio

A modern, minimalist website showcasing AI and cybersecurity research, built with Astro and deployed on Cloudflare Workers.

## 🚀 Overview

This site serves as both a personal portfolio and research hub, featuring:
- **Research Focus**: Agentic AI, multi-agent systems, cybersecurity, and quantum computing
- **Blog**: Insights on AI, distributed systems, and emerging technologies
- **Projects**: Showcase of technical projects and open-source contributions
- **Speaking & Advisory**: Professional engagements and board positions

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator with excellent performance
- **Deployment**: [Cloudflare Workers](https://workers.cloudflare.com/) - Edge computing platform
- **Styling**: CSS Variables with dark mode support
- **Typography**: Oswald (headings), Roboto Condensed, Work Sans (body), JetBrains Mono (code)
- **Development**: TypeScript, Node.js

## 📁 Project Structure

```
/
├── src/
│   ├── assets/         # Images and static assets
│   ├── components/     # Reusable Astro components
│   ├── content/        # Blog posts and project content (Markdown/MDX)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Site pages and routes
│   ├── styles/         # Global CSS styles
│   └── config.ts       # Site configuration
├── public/             # Public assets (favicon, theme scripts)
├── astro.config.mjs    # Astro configuration
├── wrangler.jsonc      # Cloudflare Workers configuration
└── package.json        # Dependencies and scripts
```

## 🔧 Development

### Prerequisites
- Node.js 18+ and npm
- Cloudflare account (for deployment)
- Wrangler CLI (installed automatically)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/JohnEngates/engateshome.git
   cd engateshome
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:4321` to see the site

4. **Build and preview locally**
   ```bash
   npm run preview
   ```

### Key Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Build and preview with Wrangler |
| `npm run deploy` | Build and deploy to Cloudflare Workers |
| `npm run cf-typegen` | Generate TypeScript types for Cloudflare bindings |

## 🚀 Deployment

The site automatically deploys to Cloudflare Workers at [https://engateshome.jengates.workers.dev](https://engateshome.jengates.workers.dev)

### Deploy Process
```bash
npm run deploy
```

Or use the Claude Code custom command:
```bash
/deploy
```

## ✨ Features

### Content Management
- **Blog posts** in `src/content/blog/` using Markdown/MDX
- **Projects** in `src/content/projects/` with rich metadata
- Automatic RSS feed generation
- SEO optimization with meta tags

### Design System
- **Dark Mode**: Automatic theme detection with manual toggle
- **Responsive**: Mobile-first design with progressive enhancement
- **Typography**: Professional font stack optimized for readability
- **Grid System**: 8px unit-based spacing for consistency

### Performance
- Static site generation for fast page loads
- Edge deployment via Cloudflare Workers
- Optimized images with WebP format
- Minimal JavaScript for core functionality

## 📝 Adding Content

### Blog Posts
Create a new `.md` or `.mdx` file in `src/content/blog/`:
```markdown
---
title: "Your Post Title"
date: 2024-01-15
description: "Brief description"
author: "John Engates"
tags: ["AI", "Security"]
---

Your content here...
```

### Projects
Add to `src/content/projects/`:
```markdown
---
title: "Project Name"
description: "Project description"
technologies: ["TypeScript", "AI"]
github: "https://github.com/..."
demo: "https://..."
featured: true
order: 1
---

Project details...
```

## 🎨 Customization

### Site Configuration
Edit `src/config.ts` to update:
- Site title and description
- Social media links
- Author information

### Styling
- Global styles in `src/styles/global.css`
- CSS variables for theming
- Component-specific styles in `.astro` files

## 🤝 Contributing

While this is a personal website, suggestions and bug reports are welcome! Please open an issue on GitHub.

## 📄 License

This project is private and proprietary. All rights reserved.

## 🙏 Acknowledgments

Built with:
- [Claude Code](https://claude.ai/code) - AI pair programming
- [Astro](https://astro.build/) - Static site generator
- [Cloudflare Workers](https://workers.cloudflare.com/) - Edge deployment platform

---

**Live Site**: [https://engateshome.jengates.workers.dev](https://engateshome.jengates.workers.dev)