'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Briefcase,
  Zap,
  Repeat2,
  UserCheck,
  FileText,
  MessageSquare,
  Compass,
  CheckCircle2,
  ArrowRight,
  Calendar,
  ChevronDown,
  Building2,
  GraduationCap,
  Phone,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

// ─── Data ────────────────────────────────────────────────────────────────────

const employerServices = [
  {
    id: 'talent-acquisition',
    icon: Users,
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-600',
    tag: 'Most Popular',
    title: 'Talent Acquisition',
    subtitle: 'Full-Cycle Permanent Recruitment',
    desc: 'End-to-end recruitment for permanent roles across IT & Non-IT sectors. We source, screen, and deliver pre-vetted, job-ready candidates who match both skill requirements and company culture.',
    includes: [
      'Candidate sourcing & resume screening',
      'Shortlisting qualified candidates',
      'Interview coordination & scheduling',
      'IT & Non-IT hiring across all levels',
      'Background verification & reference checks',
      'Onboarding support & post-placement follow-up',
    ],
  },
  {
    id: 'executive-hiring',
    icon: Briefcase,
    color: 'bg-indigo-600',
    lightColor: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    tag: 'Leadership',
    title: 'Executive Hiring',
    subtitle: 'C-Suite & Senior Leadership Search',
    desc: "Discreet, thorough executive search for Director, VP, and C-suite roles. We identify and assess transformational leaders who will shape your organisation's future.",
    includes: [
      'Confidential search process',
      'Industry & domain specialist consultant',
      'Competency-based leadership assessment',
      'Board-level reference checks',
      'Compensation benchmarking',
      'Transition & onboarding support',
    ],
  },
  {
    id: 'contract-staffing',
    icon: Zap,
    color: 'bg-violet-600',
    lightColor: 'bg-violet-50',
    textColor: 'text-violet-600',
    tag: 'Flexible',
    title: 'Contract & Permanent Staffing',
    subtitle: 'Flexible Workforce Solutions',
    desc: 'Pre-vetted professionals ready for contract or permanent deployment — project-based, seasonal, or specialised engagements. Including bulk & volume hiring for large-scale requirements.',
    includes: [
      'Contract & permanent staffing options',
      'Skilled & unskilled workforce hiring',
      'Bulk & volume hiring capability',
      'Rapid 48–72 hour deployment',
      'Payroll & compliance management',
      'Scale up or down on demand',
    ],
  },
  {
    id: 'rpo',
    icon: Repeat2,
    color: 'bg-cyan-600',
    lightColor: 'bg-cyan-50',
    textColor: 'text-cyan-600',
    tag: 'Enterprise',
    title: 'US & Global Recruitment',
    subtitle: 'International Hiring Solutions',
    desc: 'End-to-end recruitment support for US and global clients. We source, screen, and deliver job-ready candidates for international markets — with clear communication and quick turnaround.',
    includes: [
      'US staffing & global recruitment',
      'Dedicated account manager',
      'Time-zone aligned communication',
      'Pre-screened, job-ready profiles',
      'IT & Non-IT international hiring',
      'Volume hiring for global clients',
    ],
  },
];

const candidateServices = [
  {
    id: 'career-placement',
    icon: UserCheck,
    color: 'bg-emerald-600',
    lightColor: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    tag: 'Most Popular',
    title: 'Career Placement',
    subtitle: 'Personalised Job Matching',
    desc: "Access exclusive, unadvertised opportunities across Chennai's leading employers. Our consultants match you with roles that align with your skills, values, and ambitions.",
    includes: [
      'Profile & skills assessment',
      'Access to exclusive job openings',
      'Direct employer introductions',
      'Interview preparation coaching',
      'Offer negotiation support',
      'Post-placement career guidance',
    ],
  },
  {
    id: 'resume-enhancement',
    icon: FileText,
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-500',
    tag: 'Quick Win',
    title: 'Resume Enhancement',
    subtitle: 'ATS-Optimised Professional Profile',
    desc: 'A professionally written, ATS-compatible resume that passes automated filters and captures recruiters\' attention within seconds.',
    includes: [
      'ATS keyword optimisation',
      'Industry-specific formatting',
      'Achievement-focused rewriting',
      'LinkedIn profile alignment',
      '2 revision rounds included',
      'Turnaround within 72 hours',
    ],
  },
  {
    id: 'interview-preparation',
    icon: MessageSquare,
    color: 'bg-pink-600',
    lightColor: 'bg-pink-50',
    textColor: 'text-pink-600',
    tag: 'High Impact',
    title: 'Interview Preparation',
    subtitle: 'Coaching & Mock Interview Sessions',
    desc: 'Structured one-on-one coaching that prepares you for every stage — from technical rounds to final salary negotiations — so you walk in with confidence.',
    includes: [
      'Role-specific question bank',
      'Live mock interview sessions',
      'Behavioural & STAR technique coaching',
      'Technical interview guidance',
      'Salary & offer negotiation strategy',
      'Post-interview feedback analysis',
    ],
  },
  {
    id: 'career-consulting',
    icon: Compass,
    color: 'bg-teal-600',
    lightColor: 'bg-teal-50',
    textColor: 'text-teal-600',
    tag: 'Strategic',
    title: 'Career Consulting',
    subtitle: 'Your Personal Career Strategist',
    desc: 'One-on-one strategic sessions to help you map your career trajectory, identify gaps, leverage your strengths, and move decisively toward your professional goals.',
    includes: [
      'In-depth career audit session',
      'Industry & role suitability mapping',
      'Skills gap analysis & upskilling plan',
      'Networking & personal branding strategy',
      'Promotion & leadership readiness',
      'Ongoing monthly check-in support',
    ],
  },
];

const faqs = [
  {
    question: 'What recruitment services does Solvifie offer in Chennai?',
    answer:
      'We offer talent acquisition, executive hiring, contract staffing, and RPO for employers. For job seekers, we provide career placement, resume enhancement, interview coaching, and career strategy consulting.',
  },
  {
    question: "How does Solvifie's talent acquisition process work?",
    answer:
      'Our process has four stages: Discovery (understanding your culture & requirements), Sourcing (tapping our 10,000+ candidate network), Vetting (multi-stage screening, cultural fit assessment, background verification), and Placement (supported onboarding with a 90-day guarantee). Most placements are completed within 2–4 weeks.',
  },
  {
    question: 'Do you offer contract staffing in Chennai?',
    answer:
      'Yes. We deploy pre-vetted contract professionals within 48–72 hours for project-based, seasonal, or specialised needs. We also handle payroll processing and compliance so you can focus on the work.',
  },
  {
    question: 'What is Recruitment Process Outsourcing (RPO)?',
    answer:
      "RPO is when Solvifie manages your entire recruitment function as an embedded extension of your HR team. We handle everything from job profiling and sourcing to offer management and onboarding analytics — giving you a scalable, cost-effective hiring engine.",
  },
  {
    question: 'Can Solvifie help me find a job in Chennai?',
    answer:
      'Absolutely. Register with us and a dedicated career consultant will match you with exclusive openings aligned to your skills and goals. We also offer resume enhancement, interview coaching, and career strategy sessions.',
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof employerServices)[0];
  index: number;
}) {
  const { id, icon: Icon, color, lightColor, textColor, tag, title, subtitle, desc, includes } =
    service;
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
    >
      {/* Card top accent */}
      <div className={`h-1.5 w-full ${color}`} />

      <div className="p-8 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-13 h-13 rounded-2xl ${lightColor} flex items-center justify-center p-3`}>
            <Icon size={24} className={textColor} />
          </div>
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${lightColor} ${textColor}`}
          >
            {tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className={`text-xs font-semibold uppercase tracking-wider ${textColor} mb-4`}>
          {subtitle}
        </p>
        <p className="text-gray-500 text-[15px] leading-relaxed mb-7">{desc}</p>

        {/* Includes list */}
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
            What&apos;s Included
          </p>
          <ul className="space-y-2.5">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-600">
                <CheckCircle2
                  size={15}
                  className={`${textColor} shrink-0 mt-0.5`}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href="/contact#booking"
          className={`mt-8 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all ${color} text-white opacity-90 hover:opacity-100 shadow-sm hover:shadow-md`}
        >
          Get Started <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
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

export default function ServicesContent() {
  const [activeTab, setActiveTab] = useState<'employers' | 'candidates'>('employers');

  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-20 bg-gradient-to-br from-[#001a6e] via-[#0040b8] to-[#1e3a8a]">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001a6e]/50 via-transparent to-transparent" />

        {/* Glow */}
        <motion.div
          className="absolute top-[-10%] right-[-5%] w-[480px] h-[480px] rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #818cf8, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-blue-300/80 text-sm mb-8"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/60">Services</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6"
          >
            <Briefcase size={13} />
            Recruitment & HR Solutions
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.06] mb-6"
          >
            Comprehensive{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-200 to-violet-300">
              HR & Recruitment
            </span>{' '}
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="text-lg md:text-xl text-blue-100/85 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Whether you&apos;re scaling a team or advancing your career, Solvifie has a tailored
            solution for you — backed by 8+ years of expertise in Chennai&apos;s talent market.
          </motion.p>

          {/* Audience toggle */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="inline-flex bg-white/10 border border-white/20 backdrop-blur rounded-2xl p-1.5 gap-1"
          >
            <button
              onClick={() => setActiveTab('employers')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'employers'
                  ? 'bg-white text-primary shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Building2 size={16} /> For Employers
            </button>
            <button
              onClick={() => setActiveTab('candidates')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'candidates'
                  ? 'bg-white text-primary shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <GraduationCap size={16} /> For Job Seekers
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Service Cards ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50" aria-label="Service details">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeTab === 'employers' ? (
              <motion.div
                key="employers"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                      <Building2 size={18} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-900">Employer Solutions</h2>
                  </div>
                  <p className="text-gray-500 max-w-2xl text-[15px] leading-relaxed ml-12">
                    End-to-end recruitment and HR consulting for organisations ready to hire
                    smarter, retain longer, and scale with confidence.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
                  {employerServices.map((svc, i) => (
                    <ServiceCard key={svc.id} service={svc} index={i} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="candidates"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center">
                      <GraduationCap size={18} className="text-white" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-gray-900">Career Services</h2>
                  </div>
                  <p className="text-gray-500 max-w-2xl text-[15px] leading-relaxed ml-12">
                    Personalised services for ambitious professionals — whether you&apos;re hunting
                    for your next role or planning your long-term career trajectory.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
                  {candidateServices.map((svc, i) => (
                    <ServiceCard key={svc.id} service={svc} index={i} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── How It Works strip ────────────────────────────────────────────── */}
      <section className="py-20 bg-primary" aria-labelledby="how-it-works">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 id="how-it-works" className="text-3xl font-extrabold text-white mb-3">
              How We Deliver Results
            </h2>
            <p className="text-blue-200/80 text-[15px]">
              A structured, transparent process from first call to final placement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connector */}
            <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-px bg-white/20" aria-hidden />

            {[
              { n: '01', label: 'Free Consultation', desc: 'We understand your exact needs, culture, and timeline.' },
              { n: '02', label: 'Targeted Sourcing', desc: 'We activate our curated network across Chennai and India.' },
              { n: '03', label: 'Rigorous Vetting', desc: '5-stage screening: skills, culture, references, and background.' },
              { n: '04', label: 'Seamless Placement', desc: 'Onboarding support with post-placement follow-up built in.' },
            ].map(({ n, label, desc }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-white text-primary font-extrabold text-sm flex items-center justify-center mx-auto mb-4 relative z-10 shadow-lg">
                  {n}
                </div>
                <h3 className="text-white font-bold mb-2">{label}</h3>
                <p className="text-blue-200/75 text-[14px] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Two-column CTA split ──────────────────────────────────────────── */}
      <section className="py-20 bg-white" aria-label="Get started">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Start Your Journey Today
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
              Hundreds of employers and professionals have already made the move. Your turn.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-10">
            {/* Employers CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-gray-100 hover:border-primary p-9 rounded-[2rem] transition-all hover:shadow-xl overflow-hidden"
            >
              <div className="absolute top-5 right-5 w-12 h-12 rounded-xl bg-primary/8 group-hover:bg-primary flex items-center justify-center transition-all">
                <Building2 size={22} className="text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 pr-16">For Employers</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-7">
                Looking to hire? Book a free consultation and tell us what you need. We&apos;ll
                build a recruitment strategy around your goals.
              </p>
              <Link
                href="/contact#booking"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold hover:bg-primary-hover shadow-md shadow-primary/20 transition-all"
              >
                <Calendar size={15} /> Book a Free Consultation
              </Link>
            </motion.div>

            {/* Candidates CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-indigo-50 to-violet-50 border-2 border-gray-100 hover:border-indigo-500 p-9 rounded-[2rem] transition-all hover:shadow-xl overflow-hidden"
            >
              <div className="absolute top-5 right-5 w-12 h-12 rounded-xl bg-indigo-600/8 group-hover:bg-indigo-600 flex items-center justify-center transition-all">
                <GraduationCap size={22} className="text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 pr-16">For Job Seekers</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-7">
                Ready for your next move? Register with us today and get matched with exclusive
                opportunities across Chennai&apos;s top employers.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all"
              >
                <UserCheck size={15} /> Register as a Candidate
              </Link>
            </motion.div>
          </div>

          {/* Contact strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 py-6 px-8 bg-gray-50 rounded-2xl border border-gray-100"
          >
            <p className="text-gray-500 text-sm">Prefer to talk directly?</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+918248020159"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-primary transition-colors"
              >
                <Phone size={15} className="text-primary" /> +91 8248020159
              </a>
              <span className="w-px h-4 bg-gray-300 self-center hidden sm:block" />
              <a
                href="https://wa.me/918248020159"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-green-600 transition-colors"
              >
                <WhatsAppIcon size={15} className="text-green-500" /> WhatsApp Us
              </a>
            </div>
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
              Everything you need to know about Solvifie&apos;s recruitment and HR services.
            </p>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} {...faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="bottom-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#0040b8] to-[#4f46e5] rounded-[2.5rem] px-10 py-16 md:py-20 text-white text-center overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="relative z-10">
              <p className="text-blue-200/80 text-sm font-bold uppercase tracking-widest mb-4">
                No Obligation · Free Consultation
              </p>
              <h2 id="bottom-cta" className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                Ready to Experience the Solvifie Difference?
              </h2>
              <p className="text-blue-100/80 max-w-xl mx-auto mb-10 text-lg">
                Talk to a consultant today. We&apos;ll listen, advise, and propose a strategy
                that fits your needs — whether you&apos;re hiring or job-seeking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact#booking"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-blue-50 shadow-lg transition-all"
                >
                  <Calendar size={18} /> Book a Free Consultation
                </Link>
                <a
                  href="https://wa.me/918248020159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 border border-white/25 text-white rounded-xl font-bold hover:bg-white/20 backdrop-blur transition-all"
                >
                  <WhatsAppIcon size={18} /> WhatsApp Us
                </a>
              </div>
              <p className="text-blue-200/50 text-sm mt-8">
                Response within 24 hours · 8+ years of proven expertise
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
