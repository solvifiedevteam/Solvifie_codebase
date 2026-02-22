'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Phone, Calendar, MessageSquare } from 'lucide-react';

const WhySolvifie = () => {
    const points = [
        { title: 'Chennai-based expertise', desc: 'Deep roots in the local market and talent pool.' },
        { title: 'Small Team. High Impact.', desc: 'Dedicated focus on your specific requirements.' },
        { title: 'Culture-Fit Hiring', desc: 'Focusing on values that align with your company.' },
        { title: 'Scalable Development Solutions', desc: 'Helping you grow without the growing pains.' },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Chennai Businesses Trust Us</h2>
                        <div className="space-y-6">
                            {points.map((p, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 bg-blue-50 p-1 rounded-full text-primary">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-900">{p.title}</h4>
                                        <p className="text-gray-600">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                                alt="Our Team"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full -z-10 animate-float"></div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg rotate-12 -z-10 animate-float-delayed"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export const BookingSection = () => {
    return (
        <section id="booking" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-primary to-indigo-700 rounded-[3rem] p-12 md:p-20 text-white text-center shadow-2xl relative overflow-hidden"
            >
                {/* Anti-gravity bits */}
                <div className="absolute top-10 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float-delayed"></div>

                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative z-10">Ready to Grow Your Team?</h2>
                <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10">
                    Book a free consultation with our experts today and discover the Solvifie difference.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
                    <motion.a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                    >
                        <Calendar />
                        Schedule on Calendly
                    </motion.a>

                    <div className="flex gap-4">
                        <motion.a
                            href="tel:+917010264814"
                            whileHover={{ scale: 1.1 }}
                            className="p-5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all text-white shadow-xl"
                            title="Call Us"
                        >
                            <Phone />
                        </motion.a>
                        <motion.a
                            href="https://wa.me/917010264814"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="p-5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-all text-white shadow-xl"
                            title="WhatsApp"
                        >
                            <MessageSquare />
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default WhySolvifie;
