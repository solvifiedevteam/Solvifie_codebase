'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const stats = [
    { icon: <TrendingUp className="text-white" size={32} />, number: "500+", label: "Successful Placements", color: "bg-blue-600" },
    { icon: <Users className="text-white" size={32} />, number: "200+", label: "Client Companies", color: "bg-purple-600" },
    { icon: <Award className="text-white" size={32} />, number: "8+", label: "Years Experience", color: "bg-indigo-600" },
    { icon: <Clock className="text-white" size={32} />, number: "48H", label: "Average Response Time", color: "bg-violet-600" },
];

const StatCard = ({ icon, number, label, color, index }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className={`${color} p-8 rounded-2xl text-white shadow-lg hover:shadow-2xl transition-shadow`}
    >
        <div className="mb-4 p-3 bg-white/20 rounded-lg w-fit">{icon}</div>
        <h3 className="text-4xl font-bold mb-2">{number}</h3>
        <p className="text-white/90 font-medium">{label}</p>
    </motion.div>
);

const StatsSection = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Solvifie?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Trusted by leading companies across India with proven expertise in recruitment and talent development.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} index={index} />
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold text-gray-900 mb-8">Our Core Strengths</h3>
                        <ul className="space-y-4">
                            {[
                                "Data-driven recruitment strategies tailored to your needs",
                                "Access to extensive talent pool across Chennai and India",
                                "Rigorous screening and assessment processes",
                                "Post-placement support and long-term retention focus",
                                "Expert HR consulting and workforce planning",
                                "Quick turnaround times without compromising quality"
                            ].map((strength, idx) => (
                                <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="flex items-start gap-3 text-gray-700"
                                >
                                    <div className="mt-1 p-1 bg-blue-100 rounded-full flex-shrink-0">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    </div>
                                    <span className="font-medium">{strength}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-12 rounded-2xl shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Find Your Perfect Match?</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Whether you're looking to hire top talent or advance your career, Solvifie Consultancy has 8+ years of proven expertise in connecting the right people with the right opportunities.
                        </p>
                        <div className="space-y-3">
                            <a
                                href="tel:+918248020159"
                                className="block w-full bg-primary text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-blue-700 transition-colors"
                            >
                                Call Now
                            </a>
                            <a
                                href="https://wa.me/918248020159"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-green-600 transition-colors"
                            >
                                <WhatsAppIcon size={17} /> Message on WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
