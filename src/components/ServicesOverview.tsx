'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, UserCheck, TrendingUp, Users, FileText, Search, Zap, Handshake } from 'lucide-react';

const services = {
    employers: [
        { title: 'Talent Acquisition', icon: <Users className="text-primary" size={24} />, desc: 'End-to-end recruitment solutions for IT & Non-IT roles — candidate sourcing, resume screening, shortlisting, interview coordination, and full recruitment management.' },
        { title: 'Executive Hiring', icon: <Briefcase className="text-primary" size={24} />, desc: 'Specialised leadership recruitment for senior and C-suite positions, ensuring the right fit for your organisation\'s culture and long-term strategic goals.' },
        { title: 'Contract & Permanent Staffing', icon: <Zap className="text-primary" size={24} />, desc: 'Flexible staffing solutions including contract, permanent, bulk, and volume hiring — plus skilled and unskilled workforce placement across industries.' },
        { title: 'US & Global Recruitment', icon: <TrendingUp className="text-primary" size={24} />, desc: 'Dedicated recruitment support for US staffing and international markets, delivering pre-screened, job-ready candidates with quick turnaround and clear communication.' },
    ],
    candidates: [
        { title: 'Career Placement', icon: <UserCheck className="text-primary" size={24} />, desc: 'Personalised job placement services matching your skills, career aspirations, and values with growth-focused organisations across India and global markets.' },
        { title: 'Resume Review', icon: <FileText className="text-primary" size={24} />, desc: 'Professional resume optimisation and ATS compatibility review to make your profile stand out and get noticed by top employers.' },
        { title: 'Interview Preparation', icon: <Handshake className="text-primary" size={24} />, desc: 'Comprehensive interview coaching including industry-specific questions, salary negotiation strategies, and confidence-building techniques.' },
        { title: 'Job Matching', icon: <Search className="text-primary" size={24} />, desc: 'Personalised job search strategy and direct employer introductions based on your skills, experience, and career goals.' },
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
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Recruitment & HR Solutions</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Integrated services designed to connect exceptional talent with leading organizations</p>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
                </div>

                {/* For Employers */}
                <div className="mb-20">
                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                            <Briefcase /> Employer Solutions
                        </h3>
                        <p className="text-gray-600 max-w-3xl leading-relaxed">
                            We provide end-to-end recruitment and HR consulting services to help Chennai-based businesses and enterprises across India scale strategically. From identifying top talent to strategic workforce planning, we handle every aspect of building your dream team.
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
                            <Users /> Career Services for Job Seekers
                        </h3>
                        <p className="text-gray-600 max-w-3xl leading-relaxed">
                            Whether you're starting your career or aiming for a leadership position, our comprehensive career services empower you to achieve your goals. We combine expert guidance with industry connections to open doors to meaningful opportunities.
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
