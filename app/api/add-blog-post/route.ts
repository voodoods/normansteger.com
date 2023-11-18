import { BlogPostsTable } from "@/lib/db/schema";
import { BlogPost } from "../../blog/models";
import { db } from "@/lib/db";
import { NextApiResponse } from "next";

export async function POST(req: Request, res: NextApiResponse) {
    if (req.method === 'POST') {
      const post = await req.json(); 

      try { 
        const newBlogPostEntry: BlogPost = {
            ...post,
            createdAt: new Date()
        }

        await db.insert(BlogPostsTable).values(newBlogPostEntry);
        res.status(200).json({ message: 'Blog post added successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Error adding blog post' });
      }
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }
