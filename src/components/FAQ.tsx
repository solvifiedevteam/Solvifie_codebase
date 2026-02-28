'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "What services does Solvifie Consultancy provide?",
        answer: "Solvifie Consultancy offers comprehensive HR and recruitment solutions including talent acquisition, executive hiring, contract staffing, workforce planning, career placement, resume review, interview preparation, and strategic HR consulting for businesses across Chennai and India."
    },
    {
        question: "How long does the recruitment process typically take?",
        answer: "Our recruitment timeline typically ranges from 2-4 weeks, depending on the position requirements and seniority level. For executive roles, we may extend the timeline to ensure the best cultural fit and candidate quality. We maintain transparency throughout the process."
    },
    {
        question: "Do you work with both candidates and employers?",
        answer: "Yes, we serve both employers seeking talented professionals and job seekers looking for career opportunities. Our dual-sided approach ensures we match the right talent with the right organizations for mutual success."
    },
    {
        question: "What industries do you specialize in?",
        answer: "We have experience across diverse industries including IT, finance, healthcare, manufacturing, retail, and professional services. Our consultants understand industry-specific requirements and can source candidates with relevant domain expertise."
    },
    {
        question: "How do you ensure cultural fit?",
        answer: "We go beyond qualifications to understand company culture, values, and team dynamics. Our consultants conduct thorough interviews, cultural assessments, and background verification to ensure candidates align with your organization's ethos and long-term goals."
    },
    {
        question: "What is your success rate for placements?",
        answer: "We pride ourselves on high placement success rates and long-term retention. Our strategic approach, thorough vetting process, and post-placement support ensure candidates succeed in their roles and employers find the talent they need."
    },
    {
        question: "Do you provide contract staffing solutions?",
        answer: "Yes, we offer flexible contract staffing solutions for project-based needs, temporary coverage, or specialized skill requirements. Our contract staff are thoroughly vetted and can be onboarded quickly to meet your immediate needs."
    },
    {
        question: "How can I get started with Solvifie Consultancy?",
        answer: "Getting started is simple. Contact us via phone, WhatsApp, or our website. We'll schedule a consultation to understand your needs, discuss our services, and create a customized recruitment or HR strategy tailored to your goals."
    }
];

interface FAQItemProps {
    item: FAQItem;
    index: number;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ item, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors flex items-start justify-between gap-4"
            >
                <h3 className="font-bold text-gray-900 text-lg pr-4">{item.question}</h3>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-1"
                >
                    <ChevronDown className="text-primary" size={20} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-blue-50 border-t border-gray-200"
                    >
                        <p className="p-6 text-gray-700 leading-relaxed">{item.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get answers to common questions about our recruitment and HR consulting services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FAQItemComponent key={index} item={faq} index={index} />
                    ))}
                </div>

                {/* FAQ Schema Markup */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        })
                    }}
                />
            </div>
        </section>
    );
};

export default FAQ;
