'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-950 text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="text-3xl font-bold text-white">
                            Solvifie
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Chennai's leading recruitment & development consultancy focused on scalable success and culture-fit hiring.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all group">
                                    <Icon size={18} className="text-gray-400 group-hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Jobs', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors flex items-center group">
                                        <ArrowUpRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Services</h4>
                        <ul className="space-y-4">
                            {['Talent Acquisition', 'Executive Hiring', 'Contract Staffing', 'Resume Review', 'Career Consulting'].map((item) => (
                                <li key={item} className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Contact Us</h4>
                        <ul className="space-y-6">
                            <li className="flex gap-4 text-gray-400">
                                <MapPin className="text-primary shrink-0" size={20} />
                                <span>8, Venkata Balaji Apartment, Ponniamman Kovil Street, Aalapakkam, Chennai – 600116</span>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Phone className="text-primary shrink-0" size={20} />
                                <a href="tel:+917010264814" className="hover:text-white transition-colors">7010264814</a>
                            </li>
                            <li className="flex items-center gap-4 text-gray-400">
                                <Mail className="text-primary shrink-0" size={20} />
                                <a href="mailto:Business@solvifie.com" className="hover:text-white transition-colors">Business@solvifie.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {currentYear} Solvifie Consultancy. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
