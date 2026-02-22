'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-indigo-600 to-violet-700 opacity-90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] animate-pulse"></div>
            </div>

            {/* Floating Geometric Shapes (Anti-Gravity) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/10 w-32 h-32 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 animate-float"
                    initial={{ y: 0, rotate: 0 }}
                />
                <motion.div
                    className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full backdrop-blur-md border border-white/10 animate-float-delayed"
                />
                <motion.div
                    className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-white/10 rounded-full border border-white/20 animate-float"
                />
                <motion.div
                    className="absolute top-1/2 right-10 w-16 h-16 bg-white/5 rounded-lg rotate-45 border border-white/10 animate-float-delayed"
                />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        Building Teams. <br />
                        <span className="text-white/80">Powering Growth.</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-50">
                        Chennai's premier Recruitment & Development Consultancy providing scalable talent acquisition and workforce solutions for modern businesses.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="tel:+917010264814"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-white text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all shadow-xl"
                        >
                            <Phone size={20} />
                            Call Now
                        </motion.a>
                        <motion.a
                            href="https://wa.me/917010264814"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-all shadow-xl"
                        >
                            <MessageCircle size={20} />
                            WhatsApp
                        </motion.a>
                        <motion.a
                            href="#booking"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-primary border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all shadow-xl"
                        >
                            <Calendar size={20} />
                            Book Consultation
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent opacity-50"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
