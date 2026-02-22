import Image from "next/image";

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      
      <div className="relative">
           <Image src={blog?.image} className="w-full h-52 object-cover object-top" width={400} height={100}/>
        <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
          {blog.readTime}
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {blog.description}
        </p>

        <a
          href={blog.link}
          className="text-blue-600 font-medium hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}