'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';
import { blogPosts, CATEGORY_FILTERS, type BlogCategory } from '@/lib/blog/posts';

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('All Posts');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All Posts') {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Banner */}
      <section className="relative bg-gradient-to-br from-[#001a6e] via-[#0040b8] to-[#1e3a8a] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-3">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white">
            Expert Insights &amp; Resources
          </h1>
          <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
            Staying ahead in the ever-changing landscape of recruitment and career growth.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {featuredPost && (
          <Link href={`/blog/${featuredPost.slug}`} className="block mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-[60vh] rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <span className="px-5 py-2 bg-primary rounded-full text-sm font-bold mb-6 inline-block uppercase tracking-wider">
                  Featured Article
                </span>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl">
                  {featuredPost.title}
                </h2>
                <div className="flex items-center gap-6 text-gray-200">
                  <div className="flex items-center gap-2"><User size={18} /> {featuredPost.author}</div>
                  <div className="flex items-center gap-2"><Clock size={18} /> {featuredPost.date}</div>
                  <div className="hidden md:block">{featuredPost.readTime}</div>
                </div>
              </div>
            </motion.div>
          </Link>
        )}

        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${cat === activeCategory ? 'bg-primary border-primary text-white shadow-lg' : 'border-gray-100 text-gray-500 hover:border-primary hover:text-primary'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {gridPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex flex-col group"
            >
              <Link href={`/blog/${post.slug}`} className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-md block">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold text-primary flex items-center gap-2">
                    <Tag size={12} /> {post.category}
                  </span>
                </div>
              </Link>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1"><Clock size={14} /> {post.date}</span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
              </Link>
              <p className="text-gray-600 mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-auto flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all"
              >
                Read Full Article <ArrowRight size={20} />
              </Link>
            </motion.article>
          ))}
        </div>

        <section className="mt-32 bg-gray-950 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
          <h2 className="text-3xl font-bold mb-6">Stay Updated with Hiring Trends</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Get monthly insights into the Chennai job market and leadership strategies delivered to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 focus:ring-primary focus:bg-white/10 transition-all text-white outline-none"
            />
            <button className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-hover shadow-xl transition-all">
              Join Now
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
