'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, IndianRupee, Clock } from 'lucide-react';
import type { Job } from '@/lib/types/database';

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return 'Today';
  if (days === 1) return 'Yesterday';
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
  return `${Math.floor(days / 30)} months ago`;
}

export default function JobCard({
  job,
  index = 0,
}: {
  job: Job;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
    >
      <Link
        href={`/jobs/${job.slug}`}
        className="block bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
      >
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <p className="text-lg text-gray-500 font-medium">
              {job.client_name || 'Solvifie Client'}
            </p>
          </div>
          <span className="px-4 py-1 bg-blue-50 text-primary rounded-full text-sm font-bold uppercase tracking-wide shrink-0">
            {job.job_type}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin size={18} className="text-gray-400" /> {job.location}
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Briefcase size={18} className="text-gray-400" /> {job.experience}
          </div>
          {job.salary && (
            <div className="flex items-center gap-2 text-gray-600">
              <IndianRupee size={18} className="text-gray-400" /> {job.salary}
            </div>
          )}
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={18} className="text-gray-400" />{' '}
            {timeAgo(job.created_at)}
          </div>
        </div>

        {job.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {job.skills.slice(0, 4).map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {job.skills.length > 4 && (
              <span className="px-3 py-1 text-gray-400 text-xs font-medium">
                +{job.skills.length - 4} more
              </span>
            )}
          </div>
        )}

        <div className="w-full py-4 bg-gray-950 text-white rounded-xl font-bold group-hover:bg-primary transition-all text-center">
          View Details & Apply
        </div>
      </Link>
    </motion.div>
  );
}
