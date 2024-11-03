import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string().min(5).max(100),
        pubDate: z.date(),
        description: z.string(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog}