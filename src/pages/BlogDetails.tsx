import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogData } from "../api/blogApi";
import { Helmet } from "react-helmet-async";

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseUrl = "https://helpdeskbellennummer.com/blog";

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const data = await BlogData(slug);
        setBlog(data?.blog || null);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    loadBlog();
  }, [slug]);

  // ✅ Forceert verwijdering van inline achtergronden en kleuren uit de HTML
  const cleanContent = (html) => {
    if (!html) return "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const elementsWithStyle = doc.querySelectorAll("*[style]");
    elementsWithStyle.forEach((el) => {
      el.style.backgroundColor = "transparent";
      el.style.color = "inherit";
    });

    return doc.body.innerHTML;
  };

  const extractDescription = (html, length = 155) => {
    if (!html) return "";
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const plainText = doc.body.textContent || doc.body.innerText || "";
    const cleanText = plainText.replace(/\s+/g, " ").trim();
    return cleanText.length > length
      ? cleanText.substring(0, length) + "..."
      : cleanText;
  };

  if (loading) {
    return (
      <article className="max-w-4xl mx-auto px-4 py-10 animate-pulse">
        <div className="h-4 w-32 bg-gray-700 rounded mb-6"></div>

        <div className="w-full h-64 md:h-96 bg-gray-700 rounded-xl mb-8"></div>

        <div className="h-10 w-3/4 bg-gray-700 rounded mb-4"></div>

        <div className="h-4 w-40 bg-gray-700 rounded mb-8"></div>

        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-700 rounded"></div>
          <div className="h-4 w-full bg-gray-700 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-700 rounded"></div>
          <div className="h-4 w-full bg-gray-700 rounded mt-8"></div>
          <div className="h-4 w-4/5 bg-gray-700 rounded"></div>
        </div>
      </article>
    );
  }

  if (!blog)
    return (
      <p className="text-center mt-10 text-red-500 font-bold">
        Blog niet gevonden
      </p>
    );

  const dynamicDescription =
    blog.metaDescription || blog.excerpt || extractDescription(blog.content);

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <Helmet>
        <title>{blog.metaTitle || blog.title}</title>
        <meta name="description" content={dynamicDescription} />
        <link rel="canonical" href={`${baseUrl}/${slug}`} />
        <meta property="og:title" content={blog.metaTitle || blog.title} />
        <meta property="og:description" content={dynamicDescription} />
        <meta property="og:image" content={blog.image?.url} />
        <meta property="og:url" content={`${baseUrl}/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.metaTitle || blog.title} />
        <meta name="twitter:description" content={dynamicDescription} />
        <meta name="twitter:image" content={blog.image?.url} />
      </Helmet>

      <Link
        to="/blog"
        className="text-blue-400 hover:text-blue-300 transition-colors mb-6 inline-block font-medium"
      >
        ← Back
      </Link>

      <img
        src={blog.image?.url}
        alt={blog.image?.alt || blog.title}
        className="w-full h-auto object-cover rounded-xl shadow-2xl mb-8 border border-gray-800"
      />

      <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
        {blog.title}
      </h1>

      <div className="text-gray-500 text-sm mb-8">
        Gepubliceerd op{" "}
        {new Date(blog.createdAt).toLocaleDateString("nl-NL", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>

      <div className="blog-render-container">
        <div
          dangerouslySetInnerHTML={{
            __html: cleanContent(blog.content),
          }}
        />
      </div>

      <style>{`
        /* 1. Global Reset binnen de container voor een clean "Dark Mode" gevoel */
        .blog-render-container * {
          background-color: transparent !important;
          color: #e5e7eb !important; /* Iets zachter wit voor leesbaarheid */
          border-color: #374151 !important;
        }

        /* 2. Typografie */
        .blog-render-container h1, 
        .blog-render-container h2, 
        .blog-render-container h3 { 
          color: #ffffff !important; 
          margin-top: 2.5rem; 
          margin-bottom: 1.25rem; 
          font-weight: 700;
          line-height: 1.25;
        }
        
        .blog-render-container h1 { font-size: 2.25rem; }
        .blog-render-container h2 { font-size: 1.875rem; border-bottom: 1px solid #1f2937; pb-2; }
        .blog-render-container h3 { font-size: 1.5rem; }

        .blog-render-container p { 
          margin-bottom: 1.5rem; 
          line-height: 1.85; 
          font-size: 1.125rem;
          color: #d1d5db !important;
        }

        /* 3. Lijsten */
        .blog-render-container ul { list-style-type: disc !important; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .blog-render-container ol { list-style-type: decimal !important; padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .blog-render-container li { margin-bottom: 0.75rem; }

        /* 4. Tabellen */
        .blog-render-container table { 
          width: 100%; 
          border-collapse: collapse; 
          margin: 2rem 0; 
          font-size: 0.95rem;
        }
        .blog-render-container table td, 
        .blog-render-container table th { 
          border: 1px solid #374151; 
          padding: 1rem; 
          text-align: left;
        }
        .blog-render-container table th {
          background-color: #111827 !important;
          font-weight: bold;
        }

        /* 5. Links */
        .blog-render-container a { 
          color: #60a5fa !important; 
          text-decoration: underline !important; 
          transition: color 0.2s;
        }
        .blog-render-container a:hover {
          color: #93c5fd !important;
        }

        /* 6. Afbeeldingen binnen de content */
        .blog-render-container img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin: 2rem 0;
        }
      `}</style>
    </article>
  );
};

export default BlogDetails;
