'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Send, Clock, ExternalLink } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-gray-900">Get in Touch</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">We're here to answer your questions and help you grow. Reach out to the Solvifie team today.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-primary text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden h-full flex flex-col justify-between"
                        >
                            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>

                            <div>
                                <h3 className="text-2xl font-bold mb-10">Contact Information</h3>
                                <div className="space-y-8">
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-blue-100 text-sm font-bold uppercase mb-1">Our Location</p>
                                            <p className="text-lg">8, Venkata Balaji Apartment, Ponniamman Kovil Street, Aalapakkam, Chennai – 600116</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-blue-100 text-sm font-bold uppercase mb-1">Phone Number</p>
                                            <a href="tel:+917010264814" className="text-2xl font-bold">+91 7010264814</a>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-blue-100 text-sm font-bold uppercase mb-1">Email Address</p>
                                            <a href="mailto:Business@solvifie.com" className="text-lg">Business@solvifie.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-10 border-t border-white/20 flex gap-4">
                                <a href="https://wa.me/917010264814" target="_blank" className="flex-1 bg-white text-primary flex items-center justify-center gap-2 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all">
                                    <MessageCircle /> WhatsApp Us
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 h-full"
                        >
                            <h3 className="text-2xl font-bold mb-8 text-gray-900">Send us a message</h3>
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary transition-all" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Service Interested In</label>
                                    <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer">
                                        <option>Talent Acquisition</option>
                                        <option>Executive Hiring</option>
                                        <option>Resume Review</option>
                                        <option>Career Consulting</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">Your Message</label>
                                    <textarea rows={5} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-none focus:ring-2 focus:ring-primary transition-all"></textarea>
                                </div>
                                <div className="md:col-span-2 pt-4">
                                    <button className="w-full py-5 bg-gray-950 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary hover:shadow-2xl transition-all group">
                                        Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="mt-20 rounded-[3rem] overflow-hidden shadow-xl h-96 relative group grayscale hover:grayscale-0 transition-all duration-700">
                    {/* Replace with real iframe later */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9535697621415!2d80.15852937583686!3d13.038234813337905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52613134907103%3A0x679468087799e03c!2sVenkata%20Balaji%20Apartment!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <Clock size={20} />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase">Office Hours</p>
                            <p className="font-bold">Mon - Sat: 9:00 AM - 7:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <motion.a
                href="https://wa.me/917010264814"
                target="_blank"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="fixed bottom-10 right-10 z-[100] w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all border-4 border-white"
            >
                <MessageCircle size={32} />
            </motion.a>
        </div>
    );
};

export default ContactPage;
