'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Briefcase,
  IndianRupee,
  Clock,
  ArrowLeft,
  Share2,
} from 'lucide-react';
import Link from 'next/link';
import type { Job } from '@/lib/types/database';
import ApplicationForm from './ApplicationForm';

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Posted today';
  if (days === 1) return 'Posted yesterday';
  if (days < 7) return `Posted ${days} days ago`;
  if (days < 30) return `Posted ${Math.floor(days / 7)} weeks ago`;
  return `Posted ${Math.floor(days / 30)} months ago`;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function JobDetail({ job }: { job: Job }) {
  const handleShare = async () => {
    const url = `${window.location.origin}/jobs/${job.slug}`;
    if (navigator.share) {
      await navigator.share({ title: job.title, url });
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <motion.nav {...fadeUp} className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link
            href="/"
            className="hover:text-primary transition-colors"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            href="/jobs"
            className="hover:text-primary transition-colors"
          >
            Jobs
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate">
            {job.title}
          </span>
        </motion.nav>

        {/* Back + Share */}
        <motion.div {...fadeUp} className="flex items-center justify-between mb-8">
          <Link
            href="/jobs"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Back to all jobs
          </Link>
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary bg-white border border-gray-200 rounded-xl hover:border-primary/40 transition-all"
          >
            <Share2 size={16} /> Share
          </button>
        </motion.div>

        {/* Job Header */}
        <motion.div
          {...fadeUp}
          className="bg-white p-8 sm:p-10 rounded-[2rem] border border-gray-100 shadow-sm mb-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-heading mb-2">
                {job.title}
              </h1>
              <p className="text-gray-500 text-sm">{timeAgo(job.created_at)}</p>
            </div>
            <span className="px-4 py-1.5 bg-blue-50 text-primary rounded-full text-sm font-bold uppercase tracking-wide">
              {job.job_type}
            </span>
          </div>

          {/* Meta Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-gray-100 py-6 mb-8">
            <div className="space-y-1">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                Location
              </p>
              <p className="font-semibold flex items-center gap-1.5">
                <MapPin size={14} className="text-gray-400" /> {job.location}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                Experience
              </p>
              <p className="font-semibold flex items-center gap-1.5">
                <Briefcase size={14} className="text-gray-400" />{' '}
                {job.experience}
              </p>
            </div>
            {job.salary && (
              <div className="space-y-1">
                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                  Salary
                </p>
                <p className="font-semibold flex items-center gap-1.5">
                  <IndianRupee size={14} className="text-gray-400" />{' '}
                  {job.salary}
                </p>
              </div>
            )}
            <div className="space-y-1">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">
                Posted
              </p>
              <p className="font-semibold flex items-center gap-1.5">
                <Clock size={14} className="text-gray-400" />{' '}
                {new Date(job.created_at).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4">Job Description</h2>
            <div
              className="prose prose-gray max-w-none text-gray-600 leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-2"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </div>

          {/* Skills */}
          {job.skills.length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-4">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 bg-blue-50 text-primary rounded-full text-sm font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Apply Section */}
        <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
          <ApplicationForm jobId={job.id} jobTitle={job.title} />
        </motion.div>
      </div>
    </div>
  );
}
