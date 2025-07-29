'use client';

import Link from 'next/link';
import blogData from './blogData';

export default function BlogPage() {
  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-4">Our Blogs</h1>
      <p className="text-center text-gray-500 mb-10">
        Brains. Bytes. Blogs. All in One Place.
      </p>

      <div className="flex justify-center mb-10">
        <div className="flex w-full max-w-xl">
          <input
            type="text"
            placeholder="Search our blogs by topic or keywords..."
            className="w-full border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
          />
          <button className="bg-black text-white px-6 py-2 rounded-r-md hover:bg-gray-800">
            Search
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <Link
            href={`/Blog/${blog.slug}`}
            key={blog.id}
            className="group"
          >
            <div className="bg-white rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <span className="inline-block bg-pink-100 text-pink-600 text-sm px-4 py-1 rounded-full mb-2">
                  {blog.category || 'General'} - {blog.readTime || '3 minutes'}
                </span>
                <h2 className="text-lg font-bold mb-2">{blog.title}</h2>
                <div
                  className="text-sm text-gray-600 mb-2"
                  dangerouslySetInnerHTML={{
                    __html: blog.content.slice(0, 180) + '...',
                  }}
                />
                <p className="text-xs text-gray-500">
                  {blog.author || 'Infruevo Team'} - {blog.date}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
