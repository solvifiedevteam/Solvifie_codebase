'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Transparent navbar over dark hero on all pages (before scroll)
  const transparent = !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 ${
          transparent
            ? 'bg-transparent'
            : 'bg-white/95 backdrop-blur-md'
        } ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Solvifie Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain rounded-lg"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      transparent
                        ? isActive
                          ? 'text-white bg-white/15'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                        : isActive
                          ? 'text-primary bg-primary/8'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                        transparent ? 'bg-white' : 'bg-primary'
                      }`} />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/contact"
                className={`text-sm font-medium transition-colors ${
                  transparent
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                +91 8248020159
              </Link>
              <Link
                href="/contact#booking"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm hover:shadow-md ${
                  transparent
                    ? 'bg-white text-primary hover:bg-blue-50 shadow-black/10'
                    : 'bg-primary text-white hover:bg-primary-hover shadow-primary/20 hover:shadow-primary/30'
                }`}
              >
                <Calendar size={15} />
                Book a Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                transparent
                  ? 'text-white hover:bg-white/10'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 bg-white shadow-2xl md:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Solvifie Logo"
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain rounded-lg"
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 overflow-y-auto px-4 py-4">
                {navLinks.map((link) => {
                  const isActive =
                    link.href === '/'
                      ? pathname === '/'
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3.5 rounded-xl mb-1 font-medium text-[15px] transition-all ${
                        isActive
                          ? 'bg-primary/8 text-primary'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {link.name}
                      <ChevronRight
                        size={16}
                        className={isActive ? 'text-primary' : 'text-gray-400'}
                      />
                    </Link>
                  );
                })}
              </nav>

              {/* Drawer Footer CTA */}
              <div className="px-6 py-6 border-t border-gray-100 space-y-3">
                <Link
                  href="/contact#booking"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-hover transition-all shadow-lg shadow-primary/20"
                >
                  <Calendar size={17} />
                  Book a Consultation
                </Link>
                <a
                  href="tel:+918248020159"
                  className="flex items-center justify-center w-full py-3 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +91 8248020159
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
