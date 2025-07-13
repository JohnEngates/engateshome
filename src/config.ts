export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Engates Home",
  description: "Personal blog and portfolio of John Engates",
  author: {
    name: "John Engates",
    bio: "Technology enthusiast, developer, and lifelong learner sharing insights on web development, cloud computing, and modern tech.",
    // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image to public/images/
  },
  social: {
    github: "https://github.com/johnengates",
    twitter: "https://twitter.com/johnengates",
    linkedin: "https://linkedin.com/in/johnengates",
    email: "jengates@gmail.com"
  },
  siteUrl: "https://engateshome.jengates.workers.dev"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;