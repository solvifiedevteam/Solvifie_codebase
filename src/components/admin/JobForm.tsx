'use client';

import { useActionState } from 'react';
import type { Job } from '@/lib/types/database';

const JOB_TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship'];
const STATUSES = ['draft', 'active', 'closed'];

export default function JobForm({
  job,
  action,
}: {
  job?: Job;
  action: (formData: FormData) => Promise<void>;
}) {
  const [error, formAction, isPending] = useActionState(
    async (_prev: string | null, formData: FormData) => {
      try {
        await action(formData);
        return null;
      } catch (e) {
        return e instanceof Error ? e.message : 'Something went wrong';
      }
    },
    null
  );

  return (
    <form action={formAction} className="space-y-6 max-w-3xl">
      {error && (
        <div className="text-red-600 bg-red-50 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="md:col-span-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Job Title *
          </label>
          <input
            name="title"
            required
            defaultValue={job?.title}
            placeholder="e.g. Senior Full Stack Developer"
            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Location *
          </label>
          <input
            name="location"
            required
            defaultValue={job?.location}
            placeholder="e.g. Chennai"
            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Experience *
          </label>
          <input
            name="experience"
            required
            defaultValue={job?.experience}
            placeholder="e.g. 3-5 Yrs"
            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Salary
          </label>
          <input
            name="salary"
            defaultValue={job?.salary || ''}
            placeholder="e.g. 8-12 LPA"
            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Job Type *
          </label>
          <select
            name="job_type"
            required
            defaultValue={job?.job_type || 'Full-time'}
            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          >
            {JOB_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Status
          </label>
          <select
            name="status"
            defaultValue={job?.status || 'draft'}
            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          >
            {STATUSES.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
            Skills (comma-separated)
          </label>
          <input
            name="skills"
            defaultValue={job?.skills?.join(', ')}
            placeholder="e.g. React, Node.js, TypeScript"
            className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-1.5">
          Description * (HTML supported)
        </label>
        <textarea
          name="description"
          required
          rows={12}
          defaultValue={job?.description}
          placeholder="Enter job description... HTML tags like <p>, <ul>, <li>, <strong> are supported."
          className="w-full px-5 py-3.5 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-y font-mono"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={isPending}
          className="px-8 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all disabled:opacity-60"
        >
          {isPending ? 'Saving...' : job ? 'Update Job' : 'Create Job'}
        </button>
        <a
          href="/admin/jobs"
          className="px-8 py-3.5 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-all"
        >
          Cancel
        </a>
      </div>
    </form>
  );
}
