'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Heart, Star } from 'lucide-react';
import Link from 'next/link';

const ServicesPage = () => {
    return (
        <div className="pt-24 min-h-screen">
            {/* Header */}
            <section className="bg-primary py-20 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48 animate-float"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-5xl font-extrabold mb-6">Our Solutions</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Comprehensive recruitment and career development services tailored for the Chennai market.
                    </p>
                </div>
            </section>

            {/* For Employers */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-center mb-16">
                        <div className="flex-1 order-2 md:order-1">
                            <span className="text-primary font-bold uppercase tracking-widest mb-4 block">For Organizations</span>
                            <h2 className="text-4xl font-bold mb-8">Scale Your Team with Confidence</h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="mt-1"><ShieldCheck className="text-primary" /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Permanent Hiring</h4>
                                        <p className="text-gray-600">Full-cycle recruitment for long-term growth and cultural stability.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><Zap className="text-primary" /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Contract Staffing</h4>
                                        <p className="text-gray-600">Agile workforce solutions for project-specific or seasonal needs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><Star className="text-primary" /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Recruitment Process Outsourcing (RPO)</h4>
                                        <p className="text-gray-600">We manage your entire recruitment function, acting as an extension of your team.</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/contact#booking"
                                className="mt-10 inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-hover transition-all shadow-lg"
                            >
                                Schedule a Consultation <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="rounded-[3rem] overflow-hidden shadow-2xl rotate-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                                    alt="Employers"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Candidates */}
            <section className="py-24 bg-section-alt">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="rounded-[3rem] overflow-hidden shadow-2xl -rotate-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=600&fit=crop"
                                    alt="Candidates"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                        <div className="flex-1">
                            <span className="text-indigo-600 font-bold uppercase tracking-widest mb-4 block">For Talent</span>
                            <h2 className="text-4xl font-bold mb-8">Navigate Your Career Path</h2>

                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="mt-1"><Heart className="text-indigo-600" /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Job Opportunities</h4>
                                        <p className="text-gray-600">Access to exclusive roles across Chennai's top tech and business firms.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><CheckCircle2 className="text-indigo-600" /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Resume Enhancement</h4>
                                        <p className="text-gray-600">Polishing your professional profile to catch the eye of top recruiters.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-1"><Star className="text-indigo-600" /></div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">Career Consulting</h4>
                                        <p className="text-gray-600">Personalized coaching to help you reach your maximum potential.</p>
                                    </div>
                                </div>
                            </div>

                            <Link
                                href="/contact#booking"
                                className="mt-10 inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg"
                            >
                                Schedule a Consultation <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
