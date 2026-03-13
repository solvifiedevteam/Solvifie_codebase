'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Anish S.',
        role: 'HR Director',
        industry: 'IT Services',
        content: "Solvifie helped us scale our engineering team significantly. Their understanding of culture-fit is unparalleled in Chennai.",
        rating: 5,
        initials: 'AS',
        color: 'bg-blue-600',
    },
    {
        name: 'Priya M.',
        role: 'Product Manager',
        industry: 'SaaS',
        content: "Professional and efficient. They didn't just find me a job; they found me the right career path. Highly recommended for candidates.",
        rating: 5,
        initials: 'PM',
        color: 'bg-purple-600',
    },
    {
        name: 'Rajesh K.',
        role: 'Founder',
        industry: 'Technology',
        content: "Excellent service and great follow-up. Solvifie understands the dynamic needs of Chennai startups.",
        rating: 5,
        initials: 'RK',
        color: 'bg-indigo-600',
    }
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 rounded-3xl bg-section-alt border border-gray-100 relative"
                        >
                            <Quote className="absolute top-6 right-8 text-primary/10" size={60} />

                            <div className="flex gap-1 mb-6">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>

                            <p className="text-gray-700 italic mb-8 relative z-10">&quot;{t.content}&quot;</p>

                            <div className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-sm`}>
                                    {t.initials}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                                    <p className="text-sm text-gray-500">{t.role} · {t.industry}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

