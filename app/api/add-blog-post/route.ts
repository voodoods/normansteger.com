import { BlogPostsTable } from "@/lib/db/schema";
import { BlogPost, BlogPostRequestDto } from "../../blog/models";
import { db } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getBlogPosts } from "@/components/get-blog-posts";

export async function POST(req: Request, res: NextApiResponse) {
    if (req.method === 'POST') {
      const post = await req.json(); 

      try { 
        const newBlogPostEntry: BlogPost = {
            ...post,
            createdAt: new Date()
        }

        await db.insert(BlogPostsTable).values(newBlogPostEntry);
        return Response.json({ message: 'Blog post added successfully' });
        //res.status(200).json({ message: 'Blog post added successfully' });
      } catch (error) {
        return Response.json({ message: 'Error adding blog post', error });
        //res.status(500).json({ error: 'Error adding blog post' });
      }
    } else {
      return Response.json({ message: 'Method not allowed' });
      //res.status(405).json({ error: 'Method not allowed' });
    }
  }
