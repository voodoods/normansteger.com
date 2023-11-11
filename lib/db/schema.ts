import {
    pgTable,
    serial,
    text,
    timestamp,
} from 'drizzle-orm/pg-core';

export const BlogPostsTable = pgTable(
    'blog_posts',
    {
      id: serial('id').primaryKey(),
      slug: text('slug'),
      title: text('title').notNull(),
      summary: text('summary').notNull(),
      content: text('content').notNull(),
      tags: text('tags'),
      createdAt: timestamp('created_at').defaultNow().notNull(),
      updatedAt: timestamp('updated_at'),
    }
  );

  export type BlogPostTable = typeof BlogPostsTable;
