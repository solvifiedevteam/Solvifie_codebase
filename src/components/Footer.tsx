'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUpRight, Calendar } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Jobs', href: '/jobs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  'Talent Acquisition',
  'Executive Hiring',
  'Contract & Permanent Staffing',
  'US & Global Recruitment',
  'IT & Non-IT Hiring',
  'Bulk & Volume Hiring',
];

// Inline SVGs for brand icons (lucide-react deprecated them)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const socials = [
  { Icon: LinkedInIcon, href: 'https://www.linkedin.com/company/solvifie/', label: 'LinkedIn' },
  { Icon: InstagramIcon, href: 'https://www.instagram.com/solvifie?igsh=OHZ5ZGM5Ynhld2R2', label: 'Instagram' },
  { Icon: FacebookIcon, href: 'https://www.facebook.com/share/1GczecWCGR/', label: 'Facebook' },
  { Icon: YouTubeIcon, href: 'https://www.youtube.com/@solvifie', label: 'YouTube' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Top decorative gradient bar */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      {/* CTA Strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
              Ready to scale your team?
            </p>
            <h3 className="text-2xl font-bold text-white">
              Let's build something great together.
            </h3>
          </div>
          <Link
            href="/contact#booking"
            className="shrink-0 flex items-center gap-2 px-7 py-3.5 bg-primary rounded-xl font-bold text-sm hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:shadow-xl"
          >
            <Calendar size={16} />
            Book a Free Consultation
          </Link>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Solvifie Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain rounded-lg"
              />
              <span className="text-2xl font-bold tracking-tight">Solvifie</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Chennai&apos;s trusted Recruitment & HR Consultancy connecting
              high-potential talent with visionary organisations for over 4 years.
            </p>

            {/* Contact Pills */}
            <div className="space-y-3">
              <a
                href="tel:+918248020159"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={14} className="text-primary" />
                </span>
                +91 8248020159
              </a>
              <a
                href="mailto:business@solvifie.com"
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={14} className="text-primary" />
                </span>
                business@solvifie.com
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} className="text-primary" />
                </span>
                <span className="leading-relaxed">
                  8, Venkata Balaji Apartment, Ponniamman Kovil St, Aalapakkam,
                  Chennai – 600116
                </span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2 pt-2">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-primary shrink-0"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-primary shrink-0"
                    />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours & Accreditation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              Office Hours
            </h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Monday – Friday</span>
                <span className="text-white font-medium">9AM – 7PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-medium">10AM – 5PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-gray-600">Closed</span>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-white/4 border border-white/8">
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                4+ Years of Excellence
              </p>
              <p className="text-sm text-gray-400">
                Trusted by 500+ organisations across India.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 order-2 sm:order-1">
            <p className="text-xs text-gray-500">
              © {currentYear} Solvifie Consultancy. All rights reserved.
            </p>
            <span className="hidden sm:block w-px h-3 bg-white/10" />
            <p className="text-xs text-gray-600">
              GST: 33DLVPA4521B1ZJ
            </p>
            <span className="hidden sm:block w-px h-3 bg-white/10" />
            <p className="text-xs text-gray-600">
              Designed by{' '}
              <a
                href="https://siruailabs.pages.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Siru AI Labs
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6 order-1 sm:order-2">
            <Link
              href="/privacy"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="w-px h-3 bg-white/10" />
            <Link
              href="/terms"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
            <span className="w-px h-3 bg-white/10" />
            <Link
              href="/sitemap"
              className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
      />
    </footer>
  );
};

export default Footer;
