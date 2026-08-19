import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts, BLOG_CATEGORIES } from "../constants/blogData";
import type { BlogPost } from "../constants/blogData";

const SITE_URL = "https://vikramaurahospitals.com";
const OG_IMAGE = "https://website-va.s3.ap-south-1.amazonaws.com/VAH+Logo+Symbol+final+(1)_page-0001.jpg";

const BlogCard: React.FC<{ post: BlogPost; featured?: boolean }> = ({ post, featured }) => (
  <article
    className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col ${
      featured ? "md:flex-row md:items-stretch" : ""
    }`}
  >
    <Link
      to={`/blog/${post.slug}`}
      className={`block overflow-hidden shrink-0 ${
        featured ? "md:w-[42%] md:min-h-[280px]" : "aspect-[16/9]"
      }`}
      aria-label={post.title}
    >
      <img
        src={post.coverImage}
        alt={post.coverImageAlt}
        className={`w-full object-cover transition-transform duration-300 hover:scale-105 ${
          featured ? "h-56 sm:h-64 md:h-full" : "h-full"
        }`}
        loading="lazy"
      />
    </Link>
    <div
      className={`flex flex-col flex-1 p-6 min-w-0 ${
        featured ? "md:p-8 md:justify-center" : ""
      }`}
    >
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
          {post.category}
        </span>
        <span className="text-gray-400 text-xs">{post.readTime} min read</span>
        <span className="text-gray-400 text-xs">·</span>
        <time className="text-gray-400 text-xs" dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>
      <Link to={`/blog/${post.slug}`}>
        <h2
          className={`font-bold text-gray-900 mb-2 hover:text-orange-600 transition-colors leading-snug ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">{post.author.name}</span>
        <Link
          to={`/blog/${post.slug}`}
          className="text-sm font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1 transition-colors"
        >
          Read more
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  </article>
);

const BlogListPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  const featuredPost = filtered.find((p) => p.featured) ?? filtered[0];
  const rest = filtered.filter((p) => p.id !== featuredPost?.id);

  return (
    <>
      <Helmet>
        <title>Health Blog | Vikram Aura Hospital, Bangalore</title>
        <meta
          name="description"
          content="Expert health articles by Vikram Aura Hospital doctors — covering Cardiology, Orthopaedics, Urology, Oncology, Diabetes and more. Practical advice for a healthier life."
        />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:title" content="Health Blog | Vikram Aura Hospital, Bangalore" />
        <meta
          property="og:description"
          content="Expert health articles by Vikram Aura Hospital doctors — covering Cardiology, Orthopaedics, Urology, Oncology, Diabetes and more."
        />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Health Blog | Vikram Aura Hospital, Bangalore" />
        <meta
          name="twitter:description"
          content="Expert health articles by Vikram Aura Hospital doctors."
        />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Vikram Aura Hospital Health Blog",
            url: `${SITE_URL}/blog`,
            description:
              "Expert health articles by Vikram Aura Hospital doctors on various medical specialties.",
            publisher: {
              "@type": "MedicalOrganization",
              name: "Vikram Aura Hospital",
              url: SITE_URL,
            },
            blogPost: blogPosts.slice(0, 5).map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `${SITE_URL}/blog/${p.slug}`,
              datePublished: p.publishedAt,
              author: { "@type": "Person", name: p.author.name },
              description: p.excerpt,
            })),
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-12 text-center">
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-2">
              Health Resources
            </p>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Vikram Aura Health Blog
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Evidence-based articles written by our specialist doctors to help you make informed decisions about your health.
            </p>
          </div>
        </header>

        <div className="max-w-6xl mx-auto px-4 py-10">
          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20 text-lg">
              No posts in this category yet — check back soon.
            </p>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-10">
                  <BlogCard post={featuredPost} featured />
                </div>
              )}

              {/* Rest of Posts */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* CTA Strip */}
        <section className="bg-orange-500 mt-16 py-10 px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            Have a health question for our doctors?
          </h2>
          <p className="text-orange-100 mb-6 max-w-lg mx-auto">
            Book a consultation at Vikram Aura Hospital and get expert, personalised advice.
          </p>
          <a
            href="tel:+917022400800"
            className="inline-block bg-white text-orange-600 font-bold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors"
          >
            Call +91 7022 400 800
          </a>
        </section>
      </main>
    </>
  );
};

export default BlogListPage;
