'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const metrics = [
  { value: '70%', label: 'Reduction of manual & repetitive tasks' },
  { value: '50%', label: 'Reduction in overall hiring time' },
  { value: '40%', label: 'Increase in candidate show-up rate' },
  { value: '24/7', label: 'Candidate engagement across multilingual markets' },
];

export default function ImpactStats() {
  return (
    <section className="relative bg-gradient-to-br from-[#001a6e] via-[#0040b8] to-[#1e3a8a] overflow-hidden py-24">
      {/* Radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.07),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,20,80,0.5),transparent_70%)] pointer-events-none" />
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Label chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-blue-200 text-xs font-bold uppercase tracking-widest backdrop-blur-sm font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300 inline-block" />
            Our Impact
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center leading-snug mb-14 font-heading max-w-3xl mx-auto"
        >
          Engage thousands of candidates in{' '}
          <span className="text-blue-200">minutes — not weeks</span> — at a
          fraction of traditional hiring cost, effort and turnaround time
          starting day one.
        </motion.h2>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6 flex flex-col gap-3 hover:bg-white/12 transition-colors duration-300"
            >
              {/* Value */}
              <span className="text-3xl sm:text-4xl font-bold text-white leading-none tracking-tight font-heading">
                {m.value}
              </span>

              {/* Accent line */}
              <div className="w-8 h-px bg-blue-300/50 rounded-full" />

              {/* Label */}
              <p className="text-blue-100/70 text-sm leading-relaxed font-sans">
                {m.label}
              </p>

              {/* Checkmark */}
              <CheckCircle2
                size={16}
                className="text-blue-300/60 shrink-0"
                strokeWidth={2}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
