'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Workflow, Users } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop"
                        className="w-full h-full object-cover"
                        alt="Office"
                    />
                    <div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-extrabold mb-4"
                    >
                        About Solvifie
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl max-w-2xl mx-auto text-blue-50"
                    >
                        Empowering Chennai's business landscape through strategic talent acquisition and workforce optimization.
                    </motion.p>
                </div>
                {/* Parallax elements */}
                <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10 animate-float"></div>
            </section>

            {/* Sections with Parallax-like feel */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Users className="text-primary" /> Who We Are
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                Solvifie is a Chennai-founded Recruitment & Development Consultancy. We specialize in bridge-building between high-potential talent and visionary organizations.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our approach is deeply rooted in understanding the local market dynamics of Chennai while maintaining global standards in recruitment processes.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-section-alt p-12 rounded-[2rem] border border-gray-100 shadow-xl"
                        >
                            <div className="space-y-12">
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                                        <p className="text-gray-600">To provide scalable people-solutions that drive sustainable growth for businesses of all sizes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="shrink-0 w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white">
                                        <Eye size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                                        <p className="text-gray-600">To be the most trusted partner for talent and growth in South India by 2030.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">A step-by-step approach to ensuring excellence in every placement.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Consultation', desc: 'Deep dive into your needs and culture.' },
                            { step: '02', title: 'Sourcing', desc: 'Leveraging our network for top-tier talent.' },
                            { step: '03', title: 'Vetting', desc: 'Rigorous screening and interview cycles.' },
                            { step: '04', title: 'Placement', desc: 'Ensuring a smooth onboarding experience.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm"
                            >
                                <span className="text-5xl font-black text-primary/5 absolute top-4 right-4">{item.step}</span>
                                <h4 className="text-xl font-bold mb-3 mt-4 text-primary">{item.title}</h4>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
