'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const CTACards = [
    {
        icon: <Briefcase size={40} />,
        title: "For Employers",
        description: "Looking to build a talented team? We connect you with pre-screened professionals who match your culture and goals.",
        cta: "Browse Talent Solutions",
        link: "/services"
    },
    {
        icon: <Users size={40} />,
        title: "For Candidates",
        description: "Ready for your next career move? Get matched with opportunities that align with your skills and aspirations.",
        cta: "Explore Career Opportunities",
        link: "/services"
    }
];

const ProfessionalCTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Journey Today</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Join hundreds of satisfied employers and successful candidates who have transformed their careers and businesses with Solvifie.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {CTACards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-gray-100 p-10 rounded-2xl hover:border-primary transition-all hover:shadow-xl"
                        >
                            <div className="absolute top-6 right-6 p-4 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-all group-hover:bg-primary">
                                <div className="text-primary group-hover:text-white transition-colors">{card.icon}</div>
                            </div>

                            <div className="pr-20">
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">{card.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>

                                <motion.a
                                    href={card.link}
                                    whileHover={{ x: 5 }}
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                                >
                                    {card.cta}
                                    <ArrowRight size={20} />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Direct Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-primary to-indigo-600 rounded-2xl p-12 text-white text-center"
                >
                    <h3 className="text-3xl font-bold mb-4">Don't Wait—Let's Start Talking</h3>
                    <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                        Contact us today for a free consultation. Our team is ready to discuss how we can help you achieve your recruitment and career goals.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
                        <motion.a
                            href="tel:+918248020159"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
                        >
                            📞 +91 8248020159
                        </motion.a>
                        <motion.a
                            href="https://wa.me/918248020159"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-all"
                        >
                            <WhatsAppIcon size={17} /> WhatsApp Now
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProfessionalCTA;
