'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, CheckCircle, Star, ArrowRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const trustBadges = [
    { label: '4+ Years Experience' },
    { label: '500+ Placements' },
    { label: '200+ Client Companies' },
    { label: 'Pan-India Reach' },
];

const industries = ['IT & Tech', 'Finance', 'Healthcare', 'Manufacturing', 'Retail'];

const Hero = () => {
    return (
        <section
            aria-label="Hero — Solvifie Consultancy"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                    src="/herobg_video.mp4"
                />
                {/* Multi-layer overlay for sharp text contrast */}
                {/* Base dark layer */}
                <div className="absolute inset-0 bg-black/55" />
                {/* Blue brand tint */}
                <div className="absolute inset-0 bg-primary/25" />
                {/* Bottom-to-top gradient to anchor content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                {/* Subtle vignette on sides */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
            </div>

            {/* Main content */}
            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">

                {/* Trust badge strip */}
                <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-2 mb-10"
                >
                    {trustBadges.map((badge) => (
                        <span
                            key={badge.label}
                            className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full"
                        >
                            <CheckCircle size={13} className="text-emerald-400 shrink-0" />
                            {badge.label}
                        </span>
                    ))}
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-5"
                >
                    Hiring. Simplified.{' '}
                    <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-200 to-violet-300">
                        Delivered.
                    </span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.22 }}
                    className="lead text-blue-100 font-medium max-w-2xl mx-auto mb-3"
                >
                    Your trusted Recruitment &amp; Talent Acquisition Partner
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.32 }}
                    className="text-base md:text-lg text-blue-200/80 max-w-xl mx-auto mb-10"
                >
                    We make hiring effortless by delivering skilled, pre-screened, and job-ready candidates — exactly when you need them.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.42 }}
                    className="flex flex-col sm:flex-row gap-3 justify-center items-center"
                >
                    <motion.a
                        href="#booking"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="btn w-full sm:w-auto px-7 py-3 text-sm font-bold rounded-xl bg-white text-primary hover:bg-blue-50 shadow-lg shadow-black/20 flex items-center gap-2"
                    >
                        <Calendar size={17} />
                        Book Free Consultation
                    </motion.a>
                    <motion.a
                        href="https://wa.me/918248020159"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="btn w-full sm:w-auto px-7 py-3 text-sm font-bold rounded-xl shadow-lg shadow-black/20 flex items-center gap-2"
                        style={{ background: '#25D366', color: '#fff' }}
                    >
                        <WhatsAppIcon size={17} />
                        WhatsApp Us
                    </motion.a>
                    <motion.a
                        href="tel:+918248020159"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium py-3 px-2"
                        aria-label="Call Solvifie Consultancy"
                    >
                        <Phone size={15} />
                        +91 8248 020159
                    </motion.a>
                </motion.div>

                {/* Social proof strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-white/55 text-sm"
                >
                    <span className="flex items-center gap-2 font-medium">
                        <span className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                            ))}
                        </span>
                        Rated 5/5 by 100+ clients
                    </span>
                    <span className="hidden sm:block w-px h-4 bg-white/20" />
                    <span className="flex flex-wrap justify-center gap-2">
                        {industries.map((ind, i) => (
                            <React.Fragment key={ind}>
                                {i > 0 && <span className="text-white/20">·</span>}
                                <span>{ind}</span>
                            </React.Fragment>
                        ))}
                    </span>
                    <span className="hidden sm:block w-px h-4 bg-white/20" />
                    <a
                        href="/services"
                        className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition-colors font-semibold"
                    >
                        View all services <ArrowRight size={13} />
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/35"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden="true"
            >
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                <div className="w-px h-8 rounded-full bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
