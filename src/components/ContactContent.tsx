'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calendar,
  ChevronDown,
  Building2,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

// ─── Data ────────────────────────────────────────────────────────────────────

const quickContacts = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 8248020159',
    href: 'tel:+918248020159',
    color: 'bg-blue-50 text-primary hover:bg-primary hover:text-white',
    desc: 'Mon–Sat, 9AM–7PM',
  },
  {
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    value: 'Chat Instantly',
    href: 'https://wa.me/918248020159',
    color: 'bg-green-50 text-green-600 hover:bg-green-500 hover:text-white',
    desc: 'Typically replies in minutes',
  },
  {
    icon: Mail,
    label: 'Email Us',
    value: 'business@solvifie.com',
    href: 'mailto:business@solvifie.com',
    color: 'bg-violet-50 text-violet-600 hover:bg-violet-600 hover:text-white',
    desc: 'Response within 24 hours',
  },
];

const officeHours = [
  { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM', open: true },
  { day: 'Saturday', time: '10:00 AM – 5:00 PM', open: true },
  { day: 'Sunday', time: 'Closed', open: false },
];

const services = [
  'Talent Acquisition',
  'Executive Hiring',
  'Contract Staffing',
  'Recruitment Process Outsourcing (RPO)',
  'Career Placement',
  'Resume Enhancement',
  'Interview Preparation',
  'Career Consulting',
  'Other',
];

const faqs = [
  {
    q: 'How quickly can you respond to my enquiry?',
    a: 'We respond to all enquiries within 24 business hours. For urgent requirements, call us directly at +91 8248020159 or WhatsApp us for an immediate response.',
  },
  {
    q: 'Is the initial consultation really free?',
    a: 'Yes, completely free. Our first consultation is a no-obligation conversation to understand your needs. We only proceed if we are confident we can add genuine value for you.',
  },
  {
    q: 'Can I visit your Chennai office?',
    a: 'Absolutely. Our office is at 8, Venkata Balaji Apartment, Ponniamman Kovil Street, Aalapakkam, Chennai – 600116. We are open Monday to Saturday. Please call ahead to schedule an appointment.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      {...fadeUp}
      transition={{ delay: index * 0.08 }}
      className="border border-gray-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-[15px]">{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="shrink-0 text-primary"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <p className="px-6 py-4 text-gray-600 text-[15px] leading-relaxed border-t border-gray-100 bg-blue-50/40">
            {a}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

type FormState = 'idle' | 'submitting' | 'success';

export default function ContactContent() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    enquiryType: 'employer',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setFormState('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setFormState('idle');
        return;
      }

      setFormState('success');
    } catch {
      setError('Something went wrong. Please try again.');
      setFormState('idle');
    }
  };

  const inputClass =
    'w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all';
  const labelClass = 'block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5';

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-16 bg-gradient-to-br from-[#001a6e] via-[#0040b8] to-[#1e3a8a]">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a6e]/50 via-transparent to-transparent" />
        <motion.div
          className="absolute top-[-8%] right-[-4%] w-[420px] h-[420px] rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #818cf8, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-blue-300/80 text-sm mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Contact</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6"
          >
            <Building2 size={13} />
            Get in Touch
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.06] mb-5"
          >
            Let&apos;s Start a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-200 to-violet-300">
              Conversation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-blue-100/85 max-w-xl mx-auto mb-10"
          >
            Whether you&apos;re hiring, job-seeking, or just exploring — our team is ready
            to help. Free consultation, no commitment.
          </motion.p>

          {/* Quick contact pills in hero */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a
              href="tel:+918248020159"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/25 text-white text-sm font-semibold rounded-xl hover:bg-white/20 backdrop-blur transition-all"
            >
              <Phone size={15} /> +91 8248020159
            </a>
            <a
              href="https://wa.me/918248020159"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500/80 border border-green-400/40 text-white text-sm font-semibold rounded-xl hover:bg-green-500 backdrop-blur transition-all"
            >
              <WhatsAppIcon size={15} /> WhatsApp Now
            </a>
            <a
              href="mailto:business@solvifie.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/25 text-white text-sm font-semibold rounded-xl hover:bg-white/20 backdrop-blur transition-all"
            >
              <Mail size={15} /> business@solvifie.com
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Quick Connect Cards ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-10 border-b border-gray-100" aria-label="Contact options">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {quickContacts.map(({ icon: Icon, label, value, href, color, desc }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-white hover:shadow-md transition-all duration-200 ${color}`}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-current/10 group-hover:bg-white/20 transition-colors">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-70 mb-0.5">{label}</p>
                  <p className="font-bold text-[15px] leading-tight">{value}</p>
                  <p className="text-xs opacity-60 mt-0.5">{desc}</p>
                </div>
                <ArrowRight size={16} className="ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Grid: Info + Form ─────────────────────────────────────────── */}
      <section className="py-20" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left: Contact Info Card */}
            <div className="lg:col-span-4 space-y-6">
              {/* Info panel */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-[#0040b8] to-[#3730a3] text-white rounded-[2rem] p-8 overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-xl font-bold mb-7">Contact Information</h2>
                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-blue-200/70 text-xs font-bold uppercase tracking-wider mb-1">Phone</p>
                        <a href="tel:+918248020159" className="font-bold text-lg hover:text-blue-200 transition-colors">
                          +91 8248020159
                        </a>
                      </div>
                    </div>
                    {/* Email */}
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-blue-200/70 text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                        <a href="mailto:business@solvifie.com" className="font-semibold text-[15px] hover:text-blue-200 transition-colors break-all">
                          business@solvifie.com
                        </a>
                      </div>
                    </div>
                    {/* Address */}
                    <div className="flex gap-4">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-blue-200/70 text-xs font-bold uppercase tracking-wider mb-1">Office</p>
                        <p className="text-[15px] leading-relaxed text-blue-50/90">
                          8, Venkata Balaji Apartment,<br />
                          Ponniamman Kovil Street,<br />
                          Aalapakkam, Chennai – 600116
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/15">
                    <a
                      href="https://wa.me/918248020159"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-400 text-white rounded-xl font-bold text-sm transition-all shadow-lg"
                    >
                      <WhatsAppIcon size={17} />
                      WhatsApp Us Now
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Office Hours card */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[1.5rem] border border-gray-100 shadow-sm p-7"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock size={17} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map(({ day, time, open }) => (
                    <div key={day} className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{day}</span>
                      <span
                        className={`text-sm font-semibold ${
                          open ? 'text-gray-900' : 'text-gray-400'
                        }`}
                      >
                        {time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-xs text-gray-500 font-medium">Currently accepting enquiries</p>
                  </div>
                </div>
              </motion.div>

              {/* Book a Call CTA */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-gray-50 rounded-[1.5rem] border border-gray-100 p-7"
              >
                <Calendar size={22} className="text-primary mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Prefer a scheduled call?</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  Book a free 30-minute consultation at a time that suits you.
                </p>
                <Link
                  href="#booking"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  Book a time slot <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10"
              >
                <div className="mb-8">
                  <h2 id="contact-form-heading" className="text-2xl font-extrabold text-gray-900 mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-gray-500 text-sm">
                    Fill in the form below and a member of our team will get back to you within 24 hours.
                  </p>
                </div>

                {error && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-3 rounded-xl text-sm mb-5">
                    <span className="shrink-0">⚠</span>
                    {error}
                  </div>
                )}

                {formState === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                      <CheckCircle2 size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Thank you for reaching out. Our team will get back to you within 24 business hours.
                    </p>
                    <button
                      onClick={() => { setFormState('idle'); setError(''); setForm({ name: '', email: '', phone: '', service: '', enquiryType: 'employer', message: '' }); }}
                      className="mt-6 text-sm font-bold text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Enquiry type toggle */}
                    <div className="mb-7">
                      <p className={labelClass}>I am a</p>
                      <div className="flex gap-3">
                        {[
                          { value: 'employer', label: 'Hiring / Employer' },
                          { value: 'candidate', label: 'Job Seeker' },
                          { value: 'other', label: 'Other' },
                        ].map(({ value, label }) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setForm((f) => ({ ...f, enquiryType: value }))}
                            className={`px-4 py-2 rounded-xl text-sm font-bold border-2 transition-all ${
                              form.enquiryType === value
                                ? 'border-primary bg-primary text-white shadow-sm'
                                : 'border-gray-200 text-gray-600 hover:border-primary/40'
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Ravi Kumar"
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          className={inputClass}
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email Address <span className="text-red-400">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="ravi@company.com"
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          className={inputClass}
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className={labelClass}>Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          className={inputClass}
                        />
                      </div>

                      {/* Service */}
                      <div>
                        <label htmlFor="service" className={labelClass}>
                          Service Interested In <span className="text-red-400">*</span>
                        </label>
                        <select
                          id="service"
                          required
                          value={form.service}
                          onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                          className={`${inputClass} cursor-pointer`}
                        >
                          <option value="" disabled>Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="md:col-span-2">
                        <label htmlFor="message" className={labelClass}>
                          Your Message <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          required
                          placeholder="Tell us about your requirements, timeline, and how we can help…"
                          value={form.message}
                          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {/* Submit */}
                      <div className="md:col-span-2 pt-2">
                        <button
                          type="submit"
                          disabled={formState === 'submitting'}
                          className="w-full flex items-center justify-center gap-2.5 py-4 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all disabled:opacity-70"
                        >
                          {formState === 'submitting' ? (
                            <>
                              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                              Sending…
                            </>
                          ) : (
                            <>
                              Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-3">
                          We respect your privacy. Your details will never be shared with third parties.
                        </p>
                      </div>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ───────────────────────────────────────────────────── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8" aria-label="Office location">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeUp}
            className="rounded-[2.5rem] overflow-hidden shadow-xl h-[420px] relative group"
          >
            <iframe
              title="Solvifie Consultancy Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9535697621415!2d80.15852937583686!3d13.038234813337905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52613134907103%3A0x679468087799e03c!2sVenkata%20Balaji%20Apartment!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map overlay badge */}
            <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm">Solvifie Consultancy</p>
                <p className="text-xs text-gray-500 leading-snug">
                  Ponniamman Kovil St, Aalapakkam, Chennai – 600116
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Venkata+Balaji+Apartment+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto shrink-0 text-xs font-bold text-primary hover:underline whitespace-nowrap"
              >
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50" aria-labelledby="faq-contact">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 id="faq-contact" className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
              Common Questions
            </h2>
            <p className="text-gray-500 text-[15px]">Quick answers before you reach out.</p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section id="booking" className="py-20 bg-white" aria-labelledby="booking-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#0040b8] to-[#4f46e5] rounded-[2.5rem] px-10 py-16 md:py-20 text-white text-center overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-blue-200/80 text-sm font-bold uppercase tracking-widest mb-4">
                Free · No Commitment
              </p>
              <h2 id="booking-cta" className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                Book a Free 30-Minute Consultation
              </h2>
              <p className="text-blue-100/80 max-w-xl mx-auto mb-10 text-lg">
                Speak directly with one of our recruitment experts. We&apos;ll listen,
                advise, and tell you exactly how we can help — zero sales pressure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+918248020159"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-blue-50 shadow-lg transition-all"
                >
                  <Phone size={18} /> Call Now: +91 8248020159
                </a>
                <a
                  href="https://wa.me/918248020159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-400 shadow-lg transition-all"
                >
                  <WhatsAppIcon size={18} /> WhatsApp Us
                </a>
              </div>
              <p className="text-blue-200/50 text-sm mt-8">
                Mon–Fri 9AM–7PM · Sat 10AM–5PM · Response within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <motion.a
        href="https://wa.me/918248020159"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-400 border-4 border-white transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon size={26} />
      </motion.a>
    </div>
  );
}
