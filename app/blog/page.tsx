import { NextPage } from "next";
import BlogPostForm from "@/components/blog-post-form";
import BlogPostList, { BlogPostListProps } from "@/components/blog-post-list";
import { getBlogPosts } from "@/components/get-blog-posts";
import { BlogPost } from "./models";

const BlogPage: NextPage = async () => {
    return (
      <main className="min-h-screen flex-col items-center justify-between p-5 pb-0 md:p-12 xl:p-24 xl:pb-0">
        <BlogPostForm />
        <BlogPostList />
      </main>
    );
 }

export default BlogPage;
