import { createClient } from '@/lib/supabase/server';
import { Briefcase, Users, UserPlus, TrendingUp } from 'lucide-react';
import DashboardCard from '@/components/admin/DashboardCard';
import StatusBadge from '@/components/admin/StatusBadge';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const supabase = await createClient();

  // Fetch stats
  const [
    { count: activeJobs },
    { count: totalApplications },
    { count: newApplications },
    { data: recentApplications },
  ] = await Promise.all([
    supabase
      .from('jobs')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active'),
    supabase
      .from('applications')
      .select('*', { count: 'exact', head: true }),
    supabase
      .from('applications')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'new')
      .gte('applied_at', new Date(Date.now() - 7 * 86400000).toISOString()),
    supabase
      .from('applications')
      .select('id, name, email, status, applied_at, job:jobs(title)')
      .order('applied_at', { ascending: false })
      .limit(5),
  ]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-heading">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Overview of jobs and applications
          </p>
        </div>
        <Link
          href="/admin/jobs/new"
          className="shrink-0 px-4 py-2.5 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary-hover shadow-lg shadow-primary/20 transition-all"
        >
          + Post New Job
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <DashboardCard
          label="Active Jobs"
          value={activeJobs || 0}
          icon={Briefcase}
          color="primary"
        />
        <DashboardCard
          label="Total Applications"
          value={totalApplications || 0}
          icon={Users}
          color="purple"
        />
        <DashboardCard
          label="New This Week"
          value={newApplications || 0}
          icon={UserPlus}
          color="green"
        />
        <DashboardCard
          label="Conversion Rate"
          value={
            totalApplications && activeJobs
              ? `${Math.round((totalApplications / Math.max(activeJobs, 1)) * 10) / 10} avg`
              : '—'
          }
          icon={TrendingUp}
          color="orange"
        />
      </div>

      {/* Recent Applications */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-gray-900">Recent Applications</h2>
          <Link
            href="/admin/applications"
            className="text-sm text-primary font-medium hover:underline"
          >
            View all
          </Link>
        </div>

        {recentApplications && recentApplications.length > 0 ? (
          <div className="divide-y divide-gray-50">
            {recentApplications.map((app) => {
              const job = Array.isArray(app.job) ? app.job[0] : app.job;
              return (
                <Link
                  key={app.id}
                  href={`/admin/applications/${app.id}`}
                  className="flex items-center justify-between px-4 sm:px-6 py-4 hover:bg-gray-50 transition-colors gap-3"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 truncate">
                      {app.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {job?.title || 'Unknown position'}
                    </p>
                    <p className="text-xs text-gray-400 truncate sm:hidden">
                      {app.email}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-3 shrink-0">
                    <StatusBadge status={app.status} />
                    <span className="text-xs text-gray-400">
                      {new Date(app.applied_at).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                      })}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="px-6 py-12 text-center text-gray-400 text-sm">
            No applications yet
          </div>
        )}
      </div>
    </div>
  );
}
