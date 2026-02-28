'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Target,
  Eye,
  Users,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Phone,
  Calendar,
  Briefcase,
  TrendingUp,
  Award,
  Clock,
  Shield,
  Zap,
  Heart,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
  { number: '500+', label: 'Successful Placements', icon: TrendingUp },
  { number: '200+', label: 'Client Companies', icon: Briefcase },
  { number: '8+', label: 'Years of Expertise', icon: Award },
  { number: '48h', label: 'Avg. Response Time', icon: Clock },
];

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    desc: 'We operate with full transparency — no hidden fees, no surprises. Every commitment we make is one we keep.',
  },
  {
    icon: Heart,
    title: 'People-Centred',
    desc: 'Behind every hire is a person whose career matters. We take that responsibility seriously for both candidates and clients.',
  },
  {
    icon: Zap,
    title: 'Results-Driven',
    desc: 'We measure our success by yours — quality placements, long-term retention, and measurable business impact.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We deep-dive into your culture, goals, and exact requirements to build a precise candidate profile.',
  },
  {
    step: '02',
    title: 'Sourcing',
    desc: 'We tap our curated network of 10,000+ professionals and active candidates across Chennai and India.',
  },
  {
    step: '03',
    title: 'Vetting',
    desc: 'Rigorous multi-stage screening — skills, cultural fit, background verification, and reference checks.',
  },
  {
    step: '04',
    title: 'Placement',
    desc: 'We support onboarding and provide post-placement check-ins to ensure long-term success.',
  },
];

const industries = [
  'Startups & Growing Companies',
  'Small & Medium Businesses',
  'Corporate HR Teams',
  'Founders & CEOs',
  'IT & Technology Firms',
  'Manufacturing',
  'Healthcare',
  'Retail & E-Commerce',
  'US & International Clients',
  'Logistics & Supply Chain',
];

const whyPoints = [
  'Verified & quality profiles — every candidate is screened before submission',
  'Faster hiring — we deliver suitable candidates quickly, without delays',
  'Clear & transparent communication at every stage of the process',
  'End-to-end recruitment support from sourcing to final selection',
  'IT & Non-IT hiring across permanent, contract, and bulk requirements',
  'US & global recruitment with dedicated support for international clients',
];

const faqs = [
  {
    question: 'What makes Solvifie different from other recruitment firms in Chennai?',
    answer:
      'Solvifie combines deep local market expertise with global recruitment standards. We offer personalised solutions, rigorous cultural-fit assessments, and post-placement support — ensuring long-term success for both employers and candidates. Our consultants are industry veterans with 8+ years of hands-on experience in the Chennai market.',
  },
  {
    question: 'Do you serve both employers and job seekers?',
    answer:
      'Yes. We provide end-to-end recruitment and HR solutions for organisations of all sizes, as well as career consulting, resume enhancement, and placement services for job seekers across Chennai and India.',
  },
  {
    question: 'Which industries does Solvifie specialise in?',
    answer:
      'We have deep expertise across IT & technology, finance, healthcare, manufacturing, retail, and professional services. Our sector-specific consultants understand domain nuances and source candidates with the right technical and cultural fit.',
  },
  {
    question: 'How long does the recruitment process take?',
    answer:
      'Most placements are completed within 2–4 weeks. Executive and senior leadership searches may take longer to ensure the ideal fit. We guarantee full transparency and regular updates throughout the process.',
  },
  {
    question: 'How can I get started with Solvifie Consultancy?',
    answer:
      'Simply call us at +91 8248020159, WhatsApp us, or fill out the contact form on our website. We will schedule a free consultation to understand your requirements and propose a tailored recruitment strategy.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      {...fadeUp}
      transition={{ delay: index * 0.06 }}
      className="border border-gray-200 rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-[15px] leading-snug">{question}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-primary"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-7 py-5 text-gray-600 leading-relaxed border-t border-gray-100 bg-blue-50/40 text-[15px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AboutContent() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[72vh] flex items-center justify-center overflow-hidden pt-20 pb-16">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001a6e] via-[#0040b8] to-[#1e3a8a]" />
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a6e]/60 via-transparent to-transparent" />

        {/* Glow orbs */}
        <motion.div
          className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #818cf8, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-8%] w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #60a5fa, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-blue-300/80 text-sm mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">About Us</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6"
          >
            <Users size={13} />
            Our Story
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.06] mb-6"
          >
            Building Chennai&apos;s Most{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-200 to-violet-300">
              Trusted Recruitment Partner
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="text-lg md:text-xl text-blue-100/85 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            For over 8 years, Solvifie Consultancy has connected exceptional talent with
            visionary organisations — fuelling growth across Chennai, Tamil Nadu, and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/contact#booking"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary rounded-xl font-bold text-sm hover:bg-blue-50 shadow-lg shadow-black/20 transition-all"
            >
              <Calendar size={16} />
              Book a Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/25 backdrop-blur text-white rounded-xl font-bold text-sm hover:bg-white/20 transition-all"
            >
              Explore Our Services
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────────────── */}
      <section className="bg-primary py-12" aria-label="Key statistics">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ number, label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-2">
                  <Icon size={22} className="text-blue-200/70" />
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">{number}</p>
                <p className="text-blue-200/80 text-sm font-medium mt-1">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Are ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="who-we-are">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            {/* Left: text */}
            <motion.div {...fadeUp}>
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
                Our Story
              </p>
              <h2 id="who-we-are" className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                Who We Are
              </h2>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  Solvifie Recruitment Services is a professional talent acquisition partner helping
                  businesses find the right people — quickly and efficiently. We understand that
                  hiring the right talent is critical and often time-consuming.
                </p>
                <div className="relative py-4">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                    alt="Solvifie Team Collaboration"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl pointer-events-none" />
                </div>
                <p>
                  That&apos;s why we streamline the recruitment process, ensuring companies receive
                  high-quality, carefully screened candidates who match both skill requirements and
                  company culture. From startups to established enterprises, we provide customised
                  recruitment solutions designed to save time, reduce hiring risks, and improve
                  workforce quality.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-hover transition-all shadow-md shadow-primary/20"
                >
                  Talk to Our Team <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+918248020159"
                  className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Phone size={15} className="text-primary" />
                  +91 8248020159
                </a>
              </div>
            </motion.div>

            {/* Right: Image and Highlight Card */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern Office in Chennai"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 shadow-xl"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-8">Why Businesses Choose Us</h3>
                <ul className="space-y-5">
                  {whyPoints.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle2
                        size={19}
                        className="text-primary shrink-0 mt-0.5"
                      />
                      <span className="text-[15px] leading-snug">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-950" aria-labelledby="mission-vision">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 id="mission-vision" className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Our mission and vision shape every conversation, every search, every placement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative p-10 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden"
            >
              <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                <Target size={26} className="text-primary" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">Our Mission</p>
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                Simplifying Recruitment for Sustainable Growth
              </h3>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                To simplify recruitment through smart sourcing and structured screening — delivering
                verified, job-ready candidates quickly, building long-term partnerships based on trust
                and performance, and supporting businesses with end-to-end hiring solutions across industries.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-10 rounded-[2rem] bg-white/5 border border-white/10 overflow-hidden"
            >
              <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-indigo-600/20 flex items-center justify-center">
                <Eye size={26} className="text-indigo-400" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">Our Vision</p>
              <h3 className="text-2xl font-bold text-white mb-4 leading-snug">
                A Trusted Global Recruitment Partner
              </h3>
              <p className="text-gray-400 leading-relaxed text-[15px]">
                To become a trusted global recruitment partner known for delivering reliable,
                efficient, and high-quality hiring solutions — connecting businesses with the
                right talent across India, the US, and international markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Visual Break ─────────────────────────────────────────────────── */}
      <section className="h-[450px] relative overflow-hidden my-12">
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop"
          alt="Strategy and Success"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h3 className="text-white text-3xl md:text-5xl font-black tracking-tight drop-shadow-2xl">
              Driven by Excellence. Powered by People.
            </h3>
          </div>
        </div>
      </section>

      {/* ── Core Values ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="our-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              What We Stand For
            </p>
            <h2 id="our-values" className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
              These principles guide every decision we make and every relationship we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group p-9 rounded-[2rem] border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={24} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50" aria-labelledby="our-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              How We Work
            </p>
            <h2 id="our-process" className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Our Proven 4-Step Process
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
              A transparent, structured approach that consistently delivers the right candidates
              within the right timeframe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden lg:block absolute top-[3.25rem] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              aria-hidden="true"
            />

            {processSteps.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Step number bubble */}
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-sm font-extrabold mb-6 relative z-10">
                  {step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ───────────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-labelledby="industries">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Our Clients
            </p>
            <h2 id="industries" className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Who We Work With
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto text-[15px]">
              No matter the size of your organisation, we deliver the same dedication and quality.
              We proudly support businesses across India, the US, and international markets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {industries.map((ind, i) => (
              <motion.span
                key={ind}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold bg-gray-50 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all cursor-default"
              >
                {ind}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
              Got Questions?
            </p>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-[15px]">
              Everything you need to know about working with Solvifie Consultancy.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="cta-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#0040b8] to-[#4f46e5] rounded-[2.5rem] px-10 py-16 md:py-20 text-white text-center overflow-hidden shadow-2xl"
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="relative z-10">
              <p className="text-blue-200/80 text-sm font-bold uppercase tracking-widest mb-4">
                Ready to take the next step?
              </p>
              <h2 id="cta-heading" className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                Let&apos;s Build Your Dream Team Together
              </h2>
              <p className="text-blue-100/80 max-w-xl mx-auto mb-10 text-lg">
                Whether you&apos;re hiring your first employee or scaling a 100-person team,
                Solvifie has the expertise and network to make it happen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#booking"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-blue-50 shadow-lg transition-all"
                >
                  <Calendar size={18} />
                  Book a Free Consultation
                </Link>
                <a
                  href="https://wa.me/918248020159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white rounded-xl font-bold hover:bg-white/20 backdrop-blur transition-all"
                >
                  <WhatsAppIcon size={18} />
                  WhatsApp Us
                </a>
              </div>

              <p className="text-blue-200/60 text-sm mt-8">
                Free consultation · No commitment · Response within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
