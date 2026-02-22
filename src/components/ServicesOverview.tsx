'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, UserCheck, TrendingUp, Users, FileText, Search, Zap, Handshake } from 'lucide-react';

const services = {
    employers: [
        { title: 'Talent Acquisition', icon: <Users className="text-primary" size={24} />, desc: 'Finding the right people for your culture and goals.' },
        { title: 'Executive Hiring', icon: <Briefcase className="text-primary" size={24} />, desc: 'High-level placements for strategic leadership roles.' },
        { title: 'Contract Staffing', icon: <Zap className="text-primary" size={24} />, desc: 'Flexible workforce solutions for project-based needs.' },
        { title: 'Workforce Planning', icon: <TrendingUp className="text-primary" size={24} />, desc: 'Strategic analysis to optimize your future team structure.' },
    ],
    candidates: [
        { title: 'Career Placement', icon: <UserCheck className="text-primary" size={24} />, desc: 'Matching you with companies where you can thrive.' },
        { title: 'Resume Review', icon: <FileText className="text-primary" size={24} />, desc: 'Expert feedback to make your profile stand out.' },
        { title: 'Interview Preparation', icon: <Handshake className="text-primary" size={24} />, desc: 'Coaching to help you ace your next big opportunity.' },
        { title: 'Job Matching', icon: <Search className="text-primary" size={24} />, desc: 'Personalized job recommendations based on your skills.' },
    ]
};

const ServiceCard = ({ title, icon, desc, index }: { title: string, icon: React.ReactNode, desc: string, index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all border border-gray-100 group"
    >
        <div className="mb-4 p-3 bg-blue-50 rounded-xl w-fit group-hover:bg-primary transition-colors">
            {React.cloneElement(icon as React.ReactElement<any>, { className: "group-hover:text-white transition-colors" })}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
);

const ServicesOverview = () => {
    return (
        <section className="py-24 bg-section-alt">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                {/* For Employers */}
                <div className="mb-20">
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                            <Briefcase /> For Employers
                        </h3>
                        <p className="text-gray-600 max-w-2xl">
                            Targeted recruitment and strategic HR solutions to help Chennai businesses scale with the right talent and culture-fit hiring.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.employers.map((s, idx) => (
                            <ServiceCard key={s.title} {...s} index={idx} />
                        ))}
                    </div>
                </div>

                {/* For Candidates */}
                <div>
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-indigo-600 mb-3 flex items-center gap-3">
                            <Users /> For Candidates
                        </h3>
                        <p className="text-gray-600 max-w-2xl">
                            Empowering job seekers in Chennai with expert career consulting, resume enhancement, and personalized job matching services.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.candidates.map((s, idx) => (
                            <ServiceCard key={s.title} {...s} index={idx} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesOverview;
