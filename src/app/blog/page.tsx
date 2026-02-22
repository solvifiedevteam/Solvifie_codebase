'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';
import Link from 'next/link';

const blogPosts = [
    {
        id: 1,
        title: 'Hiring Trends in Chennai: What to Expect in 2026',
        excerpt: 'The Chennai job market is evolving rapidly. From IT corridors to manufacturing hubs, here is what employers are looking for.',
        category: 'Market Trends',
        author: 'Solvifie Editorial',
        date: 'Feb 20, 2026',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
    },
    {
        id: 2,
        title: 'How to Build High-Performance Teams in Scale-ups',
        excerpt: 'Scaling a team is more than just hiring. It is about culture-fit, role clarity, and strategic workforce planning.',
        category: 'Leadership',
        author: 'Expert Consultant',
        date: 'Feb 15, 2026',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop'
    },
    {
        id: 3,
        title: 'Resume Tips for 2026: Standing Out in the AI Era',
        excerpt: 'AI screening is everywhere. Learn how to optimize your resume for both machines and human recruiters.',
        category: 'Career Advice',
        author: 'Senior Recruiter',
        date: 'Feb 10, 2026',
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
    },
    {
        id: 4,
        title: 'Interview Preparation Guide for Chennai Tech Firms',
        excerpt: 'A comprehensive guide on tackling technical and behavioral rounds in Chennai\'s most competitive companies.',
        category: 'Interview Prep',
        author: 'Solvifie Coach',
        date: 'Feb 05, 2026',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop'
    }
];

const BlogPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="mb-16 text-center">
                    <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-gray-900">Expert Insights & Resources</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">Staying ahead in the ever-changing landscape of recruitment and career growth.</p>
                </div>

                {/* Featured Post */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative h-[60vh] rounded-[3rem] overflow-hidden mb-20 group cursor-pointer shadow-2xl"
                >
                    <img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12 text-white">
                        <span className="px-5 py-2 bg-primary rounded-full text-sm font-bold mb-6 inline-block uppercase tracking-wider">
                            Featured Article
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight max-w-4xl">
                            {blogPosts[0].title}
                        </h2>
                        <div className="flex items-center gap-6 text-gray-200">
                            <div className="flex items-center gap-2"><User size={18} /> {blogPosts[0].author}</div>
                            <div className="flex items-center gap-2"><Clock size={18} /> {blogPosts[0].date}</div>
                        </div>
                    </div>
                </motion.div>

                {/* Categories */}
                <div className="flex flex-wrap gap-4 mb-16 justify-center">
                    {['All Posts', 'Market Trends', 'Leadership', 'Career Advice', 'Interview Prep', 'Case Studies'].map((cat, idx) => (
                        <button
                            key={idx}
                            className={`px-6 py-2 rounded-full font-bold transition-all border-2 ${idx === 0 ? 'bg-primary border-primary text-white shadow-lg' : 'border-gray-100 text-gray-500 hover:border-primary hover:text-primary'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {blogPosts.slice(1).map((post, idx) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col group cursor-pointer"
                        >
                            <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-md">
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
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <span className="flex items-center gap-1"><Clock size={14} /> {post.date}</span>
                                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 mb-6 line-clamp-2">
                                {post.excerpt}
                            </p>
                            <div className="mt-auto flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all">
                                Read Full Article <ArrowRight size={20} />
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* Newsletter */}
                <section className="mt-32 bg-gray-950 rounded-[3rem] p-12 md:p-20 text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                    <h2 className="text-3xl font-bold mb-6">Stay Updated with Hiring Trends</h2>
                    <p className="text-gray-400 mb-10 max-w-xl mx-auto">Get monthly insights into the Chennai job market and leadership strategies delivered to your inbox.</p>
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
