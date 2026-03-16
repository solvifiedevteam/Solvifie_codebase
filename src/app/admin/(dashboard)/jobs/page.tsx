import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import StatusBadge from '@/components/admin/StatusBadge';
import JobActions from '@/components/admin/JobActions';
import { Plus } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminJobsPage() {
  const supabase = await createClient();

  const { data: jobs } = await supabase
    .from('jobs')
    .select('*, applications:applications(count)')
    .order('created_at', { ascending: false });

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-heading">
            Jobs
          </h1>
          <p className="text-sm text-gray-500">Manage all job postings</p>
        </div>
        <Link
          href="/admin/jobs/new"
          className="shrink-0 flex items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all"
        >
          <Plus size={16} /> New Job
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {jobs && jobs.length > 0 ? (
          <>
            {/* Mobile cards — visible below sm */}
            <div className="sm:hidden divide-y divide-gray-100">
              {jobs.map((job) => {
                const appCount = Array.isArray(job.applications)
                  ? job.applications[0]?.count ?? 0
                  : 0;
                return (
                  <div key={job.id} className="p-4 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/admin/jobs/${job.id}/edit`}
                        className="font-semibold text-gray-900 hover:text-primary transition-colors leading-snug"
                      >
                        {job.title}
                      </Link>
                      <StatusBadge status={job.status} />
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
                      <span>{job.location}</span>
                      <span className="text-gray-300">·</span>
                      <span>{job.job_type}</span>
                      {appCount > 0 && (
                        <>
                          <span className="text-gray-300">·</span>
                          <Link
                            href={`/admin/applications?job=${job.id}`}
                            className="text-primary font-bold hover:underline"
                          >
                            {appCount} apps
                          </Link>
                        </>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-gray-400">
                        {new Date(job.created_at).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </span>
                      <JobActions jobId={job.id} status={job.status} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop table — visible from sm up */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 text-left">
                    <th className="px-6 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Title
                    </th>
                    <th className="px-4 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Location
                    </th>
                    <th className="px-4 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Type
                    </th>
                    <th className="px-4 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                    <th className="px-4 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Apps
                    </th>
                    <th className="px-4 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Created
                    </th>
                    <th className="px-4 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {jobs.map((job) => {
                    const appCount = Array.isArray(job.applications)
                      ? job.applications[0]?.count ?? 0
                      : 0;
                    return (
                      <tr
                        key={job.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <Link
                            href={`/admin/jobs/${job.id}/edit`}
                            className="font-medium text-gray-900 hover:text-primary transition-colors"
                          >
                            {job.title}
                          </Link>
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {job.location}
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {job.job_type}
                        </td>
                        <td className="px-4 py-4">
                          <StatusBadge status={job.status} />
                        </td>
                        <td className="px-4 py-4">
                          {appCount > 0 ? (
                            <Link
                              href={`/admin/applications?job=${job.id}`}
                              className="text-primary font-bold hover:underline"
                            >
                              {appCount}
                            </Link>
                          ) : (
                            <span className="text-gray-400">0</span>
                          )}
                        </td>
                        <td className="px-4 py-4 text-gray-500 text-xs">
                          {new Date(job.created_at).toLocaleDateString(
                            'en-IN',
                            {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            }
                          )}
                        </td>
                        <td className="px-4 py-4">
                          <JobActions jobId={job.id} status={job.status} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="px-6 py-16 text-center">
            <p className="text-gray-400 mb-4">No jobs created yet</p>
            <Link
              href="/admin/jobs/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-hover transition-all"
            >
              <Plus size={16} /> Create your first job
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
