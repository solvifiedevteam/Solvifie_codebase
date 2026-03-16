import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import StatusBadge from '@/components/admin/StatusBadge';
import ApplicationStatusSelect from '@/components/admin/ApplicationStatusSelect';
import { FileText } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; job?: string }>;
}) {
  const params = await searchParams;
  const supabase = await createClient();

  let query = supabase
    .from('applications')
    .select('*, job:jobs(title, slug)')
    .order('applied_at', { ascending: false });

  if (params.status) {
    query = query.eq('status', params.status);
  }
  if (params.job) {
    query = query.eq('job_id', params.job);
  }

  const { data: applications } = await query;

  const statusFilters = ['all', 'new', 'shortlisted', 'interviewed', 'rejected'];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 font-heading">
          Applications
        </h1>
        <p className="text-sm text-gray-500">
          {applications?.length || 0} total applications
        </p>
      </div>

      {/* Status Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {statusFilters.map((s) => {
          const isActive =
            s === 'all' ? !params.status : params.status === s;
          const href =
            s === 'all'
              ? '/admin/applications'
              : `/admin/applications?status=${s}`;
          return (
            <Link
              key={s}
              href={href}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-sm font-bold transition-all border ${
                isActive
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-primary/40'
              }`}
            >
              {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
            </Link>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {applications && applications.length > 0 ? (
          <>
            {/* Mobile cards — visible below sm */}
            <div className="sm:hidden divide-y divide-gray-100">
              {applications.map((app) => {
                const job = Array.isArray(app.job) ? app.job[0] : app.job;
                return (
                  <div key={app.id} className="p-4 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <p className="font-semibold text-gray-900 truncate">
                          {app.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {app.email}
                        </p>
                      </div>
                      <Link
                        href={`/admin/applications/${app.id}`}
                        className="shrink-0 text-primary text-xs font-bold hover:underline"
                      >
                        View
                      </Link>
                    </div>
                    <p className="text-sm text-gray-600">
                      {job?.title || '—'}
                    </p>
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <ApplicationStatusSelect
                        id={app.id}
                        currentStatus={app.status}
                      />
                      <div className="flex items-center gap-2 shrink-0">
                        {app.resume_url && (
                          <span className="inline-flex items-center gap-1 text-primary text-xs font-medium">
                            <FileText size={13} /> Resume
                          </span>
                        )}
                        <span className="text-xs text-gray-400">
                          {new Date(app.applied_at).toLocaleDateString(
                            'en-IN',
                            { day: 'numeric', month: 'short' }
                          )}
                        </span>
                      </div>
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
                      Candidate
                    </th>
                    <th className="px-4 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Position
                    </th>
                    <th className="px-4 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Resume
                    </th>
                    <th className="px-4 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Status
                    </th>
                    <th className="px-4 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Applied
                    </th>
                    <th className="px-4 py-4 font-bold text-xs uppercase tracking-wider text-gray-500">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {applications.map((app) => {
                    const job = Array.isArray(app.job) ? app.job[0] : app.job;
                    return (
                      <tr
                        key={app.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <p className="font-medium text-gray-900">
                            {app.name}
                          </p>
                          <p className="text-gray-500 text-xs">{app.email}</p>
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {job?.title || '—'}
                        </td>
                        <td className="px-4 py-4">
                          {app.resume_url ? (
                            <span className="inline-flex items-center gap-1 text-primary text-xs font-medium">
                              <FileText size={14} /> Attached
                            </span>
                          ) : (
                            <span className="text-gray-400 text-xs">None</span>
                          )}
                        </td>
                        <td className="px-4 py-4">
                          <ApplicationStatusSelect
                            id={app.id}
                            currentStatus={app.status}
                          />
                        </td>
                        <td className="px-4 py-4 text-gray-500 text-xs">
                          {new Date(app.applied_at).toLocaleDateString(
                            'en-IN',
                            {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            }
                          )}
                        </td>
                        <td className="px-4 py-4">
                          <Link
                            href={`/admin/applications/${app.id}`}
                            className="text-primary text-xs font-bold hover:underline"
                          >
                            View
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="px-6 py-16 text-center text-gray-400 text-sm">
            No applications found
          </div>
        )}
      </div>
    </div>
  );
}
