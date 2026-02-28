import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Tag, User } from 'lucide-react';
import {
  blogPosts,
  getBlogPostBySlug,
  getRelatedBlogPosts,
} from '@/lib/blog/posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The requested article is not available.',
    };
  }

  return {
    title: `${post.title} | Solvifie Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://solvifie.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://solvifie.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAtIso,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 720,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedBlogPosts(post, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAtIso,
    dateModified: post.publishedAtIso,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Solvifie Consultancy',
      logo: {
        '@type': 'ImageObject',
        url: 'https://solvifie.com/Solvifie_logo1.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://solvifie.com/blog/${post.slug}`,
    },
    image: post.image,
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="pt-28 pb-20 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to blog
          </Link>

          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-4">
              <Tag size={12} /> {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.date}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[420px] object-cover"
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {post.excerpt}
          </p>

          <div className="space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                <div className="space-y-4 mb-6">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <ul className="space-y-2">
                  {section.checklist.map((item) => (
                    <li key={item} className="text-gray-700 flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-12 p-8 rounded-3xl bg-gray-50 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaways</h2>
            <ul className="space-y-3">
              {post.keyTakeaways.map((item) => (
                <li key={item} className="text-gray-700 flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {post.faq.map((item) => (
                <div key={item.question} className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="pb-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="group p-6 rounded-2xl border border-gray-100 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-bold text-primary uppercase tracking-wide">{relatedPost.category}</span>
                  <h3 className="text-lg font-bold text-gray-900 mt-3 mb-3 group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">{relatedPost.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Read Article <ArrowRight size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
