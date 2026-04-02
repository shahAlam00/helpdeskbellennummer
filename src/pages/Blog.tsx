import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBlogs } from "../api/blogApi";
import { SEOHead } from "@/components/SEOHead";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogs()
      .then((data) => {
        setBlogs(data?.blogs || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
    <SEOHead
  title="Cybersecurity Blog & Advies | Bel +31 202254839"
  description="Tips over virusverwijdering en hackerpreventie. Bel +31 202254839 voor direct advies van onze cybersecurity experts."
  keywords="cybersecurity tips, blog over computers, virus hulp, veilig internetten, +31 202254839"
  canonical="https://helpdeskbellennummer.com/blog"
/>

      <section className="max-w-7xl mx-auto  py-16">
        <h1 className="text-3xl font-bold mb-8">Blogs</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="border border-primary rounded-xl overflow-hidden animate-pulse"
                >
                  <div className="h-48 w-full bg-gray-200"></div>

                  <div className="p-4">
                    <div className="h-4 w-20 bg-gray-200 rounded mb-2"></div>

                    <div className="h-5 w-3/4 bg-gray-200 rounded mb-3"></div>

                    <div className="space-y-2">
                      <div className="h-3 w-full bg-gray-200 rounded"></div>
                      <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                      <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
                    </div>

                    <div className="h-3 w-16 bg-gray-200 rounded mt-4"></div>
                  </div>
                </div>
              ))
            : blogs.map((blog) => (
                <Link
                  key={blog._id}
                  to={`/blog/${blog.slug}`}
                  className="border border-primary rounded-xl overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={blog.image?.url}
                    alt={blog.image?.alt}
                    className="h-auto w-full object-cover"
                  />

                  <div className="p-4">
                    {blog.isFeatured && (
                      <span className="text-xs bg-yellow-400 px-2 py-1 rounded">
                        Featured
                      </span>
                    )}

                    <h2 className="font-bold text-lg mt-2">{blog.title}</h2>

                    <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <p className="text-xs text-gray-500 mt-3">
                      {blog.readTime} min read
                    </p>
                  </div>
                </Link>
              ))}
        </div>
      </section>
    </>
  );
}
