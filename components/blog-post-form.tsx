"use client";
import { useState } from "react";

const BlogPostForm = () => {
    const [title, setTitle] = useState<string>("");
    const [slug, setSlug] = useState<string>("");
    const [summary, setSummary] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [tags, setTags] = useState<string>("");
  
    const handleSubmit = async () => {
      const post = {
        title,
        slug,
        summary,
        content,
        tags
      };
      const response = await fetch('/api/add-blog-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (response.ok) {
        setTitle("");
        setSlug("");
        setSummary("");
        setContent("");
        setTags("");
      }
    } 
  
    return (
        <div className="w-full xl:w-1/2">
          <input 
            className="mb-4 text-black"
            type="text" 
            placeholder="Title..." 
            defaultValue={title} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} 
          /><br/>
          <input 
            className="mb-4 text-black"
            type="text" 
            placeholder="my-slug..." 
            defaultValue={slug} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSlug(e.target.value)} 
          /><br/>
          <textarea
            className="mb-4 text-black"
            placeholder="Summary..."
            defaultValue={summary}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setSummary(e.target.value)} 
          ></textarea><br/>
          <textarea
            className="mb-4 text-black"
            placeholder="Content..."
            defaultValue={content}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)} 
          ></textarea><br/>
        <input 
            className="mb-4 text-black"
            type="text" 
            placeholder="tag1, tag2, tag3..." 
            defaultValue={tags} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTags(e.target.value)} 
          /><br/>
          <button className="button bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Add Blog Entry</button>
        </div>
    )
  }

  export default BlogPostForm
  