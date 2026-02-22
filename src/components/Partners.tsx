'use client';

import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'Innova', logo: 'IN' },
    { name: 'BuildRight', logo: 'BR' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'ChennaiSoft', logo: 'CS' },
];

const Partners = () => {
    return (
        <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-10"
                >
                    Trusted by Leading Organizations in Chennai
                </motion.p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                    {partners.map((partner, idx) => (
                        <motion.div
                            key={partner.name}
                            initial={{ opacity: 0, filter: 'grayscale(100%)' }}
                            whileInView={{ opacity: 0.5, filter: 'grayscale(100%)' }}
                            whileHover={{ opacity: 1, filter: 'grayscale(0%)' }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-3 cursor-pointer group"
                        >
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center font-black text-gray-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                                {partner.logo}
                            </div>
                            <span className="text-xl font-bold text-gray-400 group-hover:text-gray-900 transition-all">
                                {partner.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
