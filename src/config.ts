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
  title: "John Engates",
  description: "AI Researcher exploring Agentic AI, multi-agent systems, and their applications in cybersecurity and quantum-ready computing. Former CTO at Rackspace. Former Field CTO at Cloudflare.",
  author: {
    name: "John Engates",
    bio: "Currently deep in research on Agentic AI and experimenting with swarms of autonomous AI agents to explore new frontiers in collective intelligence and emergent behaviors. After three decades at the forefront of Internet innovation—including leadership roles as Field CTO at Cloudflare and CTO at Rackspace—I'm now focused on pushing the boundaries of what's possible when AI agents collaborate, learn, and solve complex problems together.",
    avatar: "/engates1x1.png"
  },
  social: {
    github: "https://github.com/JohnEngates",
    twitter: "https://x.com/jengates",
    linkedin: "https://www.linkedin.com/in/jengates/",
    email: "jengates@gmail.com"
  },
  siteUrl: "https://engateshome.jengates.workers.dev"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;