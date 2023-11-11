"use server";
import { BlogPost } from "@/app/blog/models";
import { db } from "@/lib/db";
import { BlogPostsTable } from "@/lib/db/schema";

export const getBlogPosts = async () => {
  let posts: BlogPost[];

  try {
    const selectResult = await db.select().from(BlogPostsTable).limit(10);

    posts = selectResult.map(({ title, slug, summary, content, tags, createdAt, updatedAt }) => ({
      title, 
      slug: slug ?? null,
      summary,
      content,
      tags: tags ?? null,
      createdAt: createdAt ?? new Date(),
      updatedAt: updatedAt ?? null
    }))
  } catch (error) {
    console.error('Query for blog entries failed:', error);
    posts = [];
  }

  return posts;
};
