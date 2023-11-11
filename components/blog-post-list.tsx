import { BlogPost } from "@/app/blog/models";
import { getBlogPosts } from "./get-blog-posts";

export interface BlogPostListProps {
  blogPosts: BlogPost[];
}

const BlogPostList = async () => {
   const { blogPosts } = await getStaticProps();

    return (
        <div className="w-full xl:w-1/2 mt-8">
        <h2 className="text-xl font-semibold text-gray-700">Existing Blog Entries:</h2>
        <ul>
          {blogPosts?.map((post) => (
            <li key={post.slug}>
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    )
}

export async function getStaticProps() {
  const blogPosts = await getBlogPosts();
  return { blogPosts };
}

export default BlogPostList
