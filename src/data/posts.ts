export interface Post {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const POSTS: Post[] = [
  {
    slug: "nextjs-app-router",
    title: "Deep Dive into Next.js App Router: Architecture & Mental Model",
    description:
      "Explore how Next.js shifts the paradigm from client-side routing to server-first components, nested layouts, and streaming UI.",
    publishedAt: "Nov 15, 2026",
    readTime: "6 min read",
    category: "Architecture",
    tags: ["Next.js", "React 19", "Web Architecture"],
  },
  {
    slug: "mastering-layouts-templates",
    title: "Layouts vs Templates in Next.js: The Architectural Difference",
    description:
      "Understand the crucial behavioral differences between layout.tsx and template.tsx, state persistence, and when to use which.",
    publishedAt: "Nov 16, 2026",
    readTime: "5 min read",
    category: "Frameworks",
    tags: ["App Router", "State Management", "Performance"],
  },
];
