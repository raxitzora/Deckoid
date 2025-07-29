import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import blogData from "../blogData";

export async function generateStaticParams() {
  return blogData.map(blog => ({ slug: blog.slug }));
}

export default async function BlogPage({ params }) {
  // Destructure after awaiting
  const { slug } = await params;

  const blog = blogData.find(b => b.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      <div className="flex justify-between text-sm text-gray-500 mb-6">
        <span>{blog.author || "Infruevo Team"}</span>
        <span>{blog.date}</span>
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[400px] object-cover rounded-lg mb-6"
      />

      <div
        className="prose prose-lg prose-p:text-gray-700 prose-h2:mt-6 prose-h2:text-xl prose-li:marker:text-primary"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {blog.popularPosts?.length > 0 && (
        <>
          <hr className="my-10 border-t border-gray-300" />
          <div>
            <h2 className="text-lg font-semibold mb-2">Popular Posts:</h2>
            <ul className="list-disc pl-6 space-y-1">
              {blog.popularPosts.map((post, idx) => (
                <li key={idx}>
                  <Link
                    href={`/Blog/${post.slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
