// BlogSection.jsx

import BlogCard from "./BlogCard";
import { getSiteData } from "@/helpers/getStaticData";

export default function BlogSection() {
    const {blogPosts} =  getSiteData
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      
      <h2 className="text-3xl font-bold mb-8 text-center">
        Latest Blog Posts
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

    </section>
  );
}