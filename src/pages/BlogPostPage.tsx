import React, { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  getBlogPostBySlug,
  getRelatedPosts,
  type BlogBlock,
  type BlogPost,
} from "../constants/blogData";

const SITE_URL = "https://vikramaurahospitals.com";

// ─── Inline Markdown ──────────────────────────────────────────────────────────
// Supports **bold** and [link text](url) inside paragraph/bullet text.

const renderInline = (text: string, baseKey: string): React.ReactNode => {
  const regex = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts: React.ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const token = match[0];
    if (token.startsWith("**")) {
      parts.push(<strong key={`${baseKey}-b${i++}`}>{token.slice(2, -2)}</strong>);
    } else {
      const m = token.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (m) {
        const [, label, href] = m;
        const internal = href.startsWith(SITE_URL);
        const to = internal ? href.replace(SITE_URL, "") || "/" : href;
        parts.push(
          internal ? (
            <Link key={`${baseKey}-l${i++}`} to={to} className="text-orange-600 underline underline-offset-2 hover:text-orange-700">
              {label}
            </Link>
          ) : (
            <a key={`${baseKey}-a${i++}`} href={href} target="_blank" rel="noopener noreferrer" className="text-orange-600 underline underline-offset-2 hover:text-orange-700">
              {label}
            </a>
          )
        );
      }
    }
    last = match.index + token.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts.length === 1 && typeof parts[0] === "string" ? parts[0] : <>{parts}</>;
};

// ─── Block Renderers ──────────────────────────────────────────────────────────

const renderBlock = (block: BlogBlock, idx: number): React.ReactNode => {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={idx} className="text-gray-700 leading-relaxed text-base mb-5">
          {renderInline(block.text, `p${idx}`)}
        </p>
      );

    case "heading":
      return block.level === 2 ? (
        <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {block.text}
        </h2>
      ) : (
        <h3 key={idx} className="text-xl font-semibold text-gray-800 mt-8 mb-3">
          {block.text}
        </h3>
      );

    case "bullets":
      return (
        <div key={idx} className="mb-5">
          {block.heading && (
            <p className="font-semibold text-gray-800 mb-2">{block.heading}</p>
          )}
          <ul className="space-y-2">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-2 text-gray-700 text-base">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span>{renderInline(item, `b${idx}-${i}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "numbered":
      return (
        <div key={idx} className="mb-5">
          {block.heading && (
            <p className="font-semibold text-gray-800 mb-2">{block.heading}</p>
          )}
          <ol className="space-y-2 list-none">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-3 text-gray-700 text-base">
                <span className="shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-700 text-xs font-bold flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <span>{renderInline(item, `n${idx}-${i}`)}</span>
              </li>
            ))}
          </ol>
        </div>
      );

    case "image":
      return (
        <figure key={idx} className="my-8">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full rounded-xl object-cover max-h-96"
            loading="lazy"
          />
          {block.caption && (
            <figcaption className="text-sm text-gray-400 text-center mt-2 italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote
          key={idx}
          className="my-8 border-l-4 border-orange-400 bg-orange-50 px-6 py-5 rounded-r-xl"
        >
          <p className="text-gray-800 italic text-lg leading-relaxed mb-2">"{block.text}"</p>
          {block.attribution && (
            <cite className="text-sm text-gray-500 not-italic">— {block.attribution}</cite>
          )}
        </blockquote>
      );

    case "callout": {
      const styles = {
        info: { bg: "bg-blue-50", border: "border-blue-300", icon: "ℹ️", text: "text-blue-800" },
        tip: { bg: "bg-green-50", border: "border-green-300", icon: "💡", text: "text-green-800" },
        warning: { bg: "bg-red-50", border: "border-red-300", icon: "⚠️", text: "text-red-800" },
      };
      const s = styles[block.variant ?? "info"];
      return (
        <div
          key={idx}
          className={`my-6 rounded-xl border-l-4 px-5 py-4 ${s.bg} ${s.border}`}
        >
          <p className={`text-sm font-medium leading-relaxed ${s.text}`}>
            {s.icon} {block.text}
          </p>
        </div>
      );
    }

    default:
      return null;
  }
};

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

const FaqAccordion: React.FC<{ faq: Array<{ q: string; a: string }> }> = ({ faq }) => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="mt-12 mb-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faq.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
              aria-expanded={open === i}
            >
              <span className="font-semibold text-gray-900 text-sm pr-4">{item.q}</span>
              <svg
                className={`w-5 h-5 shrink-0 text-orange-500 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {open === i && (
              <div className="px-5 pb-4 bg-white border-t border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed pt-3">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// ─── Follow-up Topics ─────────────────────────────────────────────────────────

const FollowUpTopics: React.FC<{ topics: string[] }> = ({ topics }) => (
  <section className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
      You might also want to read
    </h3>
    <ul className="space-y-2">
      {topics.map((t, i) => (
        <li key={i} className="flex gap-2 items-start text-sm text-gray-700">
          <span className="mt-1 w-4 h-4 shrink-0 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 block" />
          </span>
          {t}
        </li>
      ))}
    </ul>
  </section>
);

// ─── Sidebar TOC ──────────────────────────────────────────────────────────────

const TableOfContents: React.FC<{ post: BlogPost }> = ({ post }) => {
  const headings = post.content.filter((b) => b.type === "heading" && b.level === 2) as Extract<
    BlogBlock,
    { type: "heading" }
  >[];
  if (headings.length < 2) return null;

  return (
    <nav className="bg-gray-50 rounded-xl p-5 mb-6 border border-gray-100">
      <p className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">In this article</p>
      <ol className="space-y-1.5">
        {headings.map((h, i) => (
          <li key={i} className="text-sm text-gray-600 hover:text-orange-600 transition-colors">
            {i + 1}. {h.text}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug ?? "");

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post.slug, post.category, 3);
  const metaDesc = post.metaDescription ?? post.excerpt;
  const canonicalUrl = `${SITE_URL}/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: post.title,
    headline: post.title,
    description: metaDesc,
    url: canonicalUrl,
    datePublished: post.publishedAt,
    ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
    image: post.coverImage,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "MedicalOrganization",
      name: "Vikram Aura Hospital",
      url: SITE_URL,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: canonicalUrl },
      ],
    },
  };

  const faqSchema = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <>
      <Helmet>
        <title>{post.title} | Vikram Aura Hospital Blog</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="article:published_time" content={post.publishedAt} />
        {post.updatedAt && <meta property="article:modified_time" content={post.updatedAt} />}
        <meta property="article:author" content={post.author.name} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDesc} />
        <meta name="twitter:image" content={post.coverImage} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-1.5 text-sm text-gray-500" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-orange-600 transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-700 truncate max-w-xs">{post.title}</span>
            </nav>
          </div>
        </div>

        <article className="max-w-6xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Category + meta */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Link
                  to={`/blog`}
                  className="px-3 py-0.5 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors"
                >
                  {post.category}
                </Link>
                <span className="text-gray-400 text-xs">{post.readTime} min read</span>
                <span className="text-gray-300 text-xs">·</span>
                <time className="text-gray-400 text-xs" dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-gray-100">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-gray-900">{post.author.name}</p>
                  <p className="text-xs text-gray-500">{post.author.role}</p>
                </div>
              </div>

              {/* Cover Image */}
              <img
                src={post.coverImage}
                alt={post.coverImageAlt}
                className="w-full rounded-2xl object-cover max-h-[420px] mb-8"
              />

              {/* Table of Contents (mobile) */}
              <div className="lg:hidden mb-8">
                <TableOfContents post={post} />
              </div>

              {/* Article Body */}
              <div>{post.content.map((block, idx) => renderBlock(block, idx))}</div>

              {/* FAQ Accordion */}
              {post.faq && post.faq.length > 0 && <FaqAccordion faq={post.faq} />}

              {/* Follow-up Topics */}
              {post.followUpTopics && post.followUpTopics.length > 0 && (
                <FollowUpTopics topics={post.followUpTopics} />
              )}

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                    Topics
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Author Bio Card */}
              <div className="mt-10 bg-orange-50 rounded-2xl p-6 flex gap-4 items-start">
                {post.author.avatar ? (
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-14 h-14 rounded-full object-cover border border-orange-200 shrink-0"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-orange-200 flex items-center justify-center text-orange-700 font-bold text-xl shrink-0">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-bold text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-600 mb-2">{post.author.role}</p>
                  <p className="text-sm text-gray-500">
                    The views in this article represent the clinical expertise of our specialist. Always consult a qualified doctor before making medical decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-72 shrink-0">
              <div className="sticky top-6 space-y-6">
                {/* Desktop TOC */}
                <div className="hidden lg:block">
                  <TableOfContents post={post} />
                </div>

                {/* Book Appointment CTA */}
                <div className="bg-gray-900 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-1">Get Expert Advice</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Speak directly with a specialist at Vikram Aura Hospital.
                  </p>
                  <a
                    href="tel:+917022400800"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                  >
                    Call +91 7022 400 800
                  </a>
                  <Link
                    to="/"
                    className="block w-full mt-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 rounded-xl transition-colors text-sm"
                  >
                    Book Appointment
                  </Link>
                </div>

                {/* Related Posts */}
                {related.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {related.map((r) => (
                        <Link
                          key={r.id}
                          to={`/blog/${r.slug}`}
                          className="flex gap-3 group"
                        >
                          <img
                            src={r.coverImage}
                            alt={r.coverImageAlt}
                            className="w-16 h-16 rounded-lg object-cover shrink-0"
                            loading="lazy"
                          />
                          <div>
                            <p className="text-sm font-medium text-gray-800 group-hover:text-orange-600 transition-colors leading-snug line-clamp-2">
                              {r.title}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{r.readTime} min read</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* All articles link */}
                <Link
                  to="/blog"
                  className="flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  ← All health articles
                </Link>
              </div>
            </aside>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPostPage;
