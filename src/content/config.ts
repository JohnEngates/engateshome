import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Anonymous'),
    image: image().optional(),
    legacyImage: z.string().optional(), // For backward compatibility
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false),
    technologies: z.array(z.string()).default([]),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    image: image().optional(),
    legacyImage: z.string().optional(), // For backward compatibility
    status: z.enum(['completed', 'in-progress', 'planned']).default('completed'),
  }),
});

export const collections = { blog, projects };