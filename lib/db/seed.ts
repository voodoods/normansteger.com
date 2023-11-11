import { db, localClient } from "./index";
import { BlogPostsTable } from "./schema";

import "dotenv/config";
import { BlogPost } from "@/app/blog/models";

const blogPosts: Omit<BlogPost, 'id' | 'updatedAt'>[] = [
  {
    slug: "server-side-rendering-nextjs",
    title: "Server Side Rendering with Next.js",
    summary: "An in-depth guide on how to implement server side rendering with Next.js.",
    content: "In this blog post, we will explore the concept of server side rendering (SSR) and how to implement it using Next.js...",
    tags: "Next.js, Server Side Rendering, JavaScript",
    createdAt: new Date()
  }
];

async function seed() {
  // Create table with raw SQL
  const createTable = await localClient.query(`
      CREATE TABLE IF NOT EXISTS blog_posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT,
        title TEXT NOT NULL,
        summary TEXT NOT NULL,
        content TEXT NOT NULL,
        tags TEXT,
        createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP
      );
  `);
  console.log(`Created "blog_posts" table`);

  const insertedBlogPosts: Omit<BlogPost, 'id' | 'updatedAt'>[] = await db
    .insert(BlogPostsTable)
    .values(blogPosts)
    .returning();
  console.log(`Seeded ${insertedBlogPosts.length} blog posts`);

  return {
    createTable,
    insertedBlogPosts,
  };
}

seed().catch((err) => {
  console.error("❌ Seed failed");
  console.error(err);
  process.exit(1);
});
