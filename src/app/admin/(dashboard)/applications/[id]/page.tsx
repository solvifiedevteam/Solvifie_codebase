import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
import {
  ArrowLeft,
  Mail,
  Phone,
  FileText,
  Download,
  Calendar,
  Briefcase,
} from 'lucide-react';
import ApplicationStatusSelect from '@/components/admin/ApplicationStatusSelect';

export const dynamic = 'force-dynamic';

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: application } = await supabase
    .from('applications')
    .select('*, job:jobs(title, slug, location)')
    .eq('id', id)
    .single();

  if (!application) notFound();

  const job = Array.isArray(application.job)
    ? application.job[0]
    : application.job;

  // Generate signed URL for resume download
  let resumeDownloadUrl: string | null = null;
  if (application.resume_url) {
    const { data } = await supabase.storage
      .from('resumes')
      .createSignedUrl(application.resume_url, 3600); // 1 hour
    resumeDownloadUrl = data?.signedUrl || null;
  }

  return (
    <div>
      <Link
        href="/admin/applications"
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft size={16} /> Back to applications
      </Link>

      <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-heading">
            {application.name}
          </h1>
          <p className="text-sm text-gray-500">
            Applied for{' '}
            <span className="font-medium text-gray-700">
              {job?.title || 'Unknown position'}
            </span>
          </p>
        </div>
        <ApplicationStatusSelect
          id={application.id}
          currentStatus={application.status}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Contact Details */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-4">
              Contact Information
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gray-400" />
                <a
                  href={`mailto:${application.email}`}
                  className="text-primary hover:underline text-sm"
                >
                  {application.email}
                </a>
              </div>
              {application.phone && (
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gray-400" />
                  <a
                    href={`tel:${application.phone}`}
                    className="text-sm text-gray-700"
                  >
                    {application.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-3">
                <Calendar size={16} className="text-gray-400" />
                <span className="text-sm text-gray-600">
                  Applied on{' '}
                  {new Date(application.applied_at).toLocaleDateString(
                    'en-IN',
                    {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                    }
                  )}
                </span>
              </div>
            </div>
          </div>

          {/* Message */}
          {application.message && (
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-4">
                Cover Message
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-wrap">
                {application.message}
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Resume */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100">
            <h2 className="font-bold text-gray-900 mb-4">Resume</h2>
            {resumeDownloadUrl ? (
              <a
                href={resumeDownloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-primary/10 text-primary rounded-xl hover:bg-primary/20 transition-all"
              >
                <FileText size={18} />
                <span className="text-sm font-bold flex-1">
                  Download Resume
                </span>
                <Download size={16} />
              </a>
            ) : (
              <p className="text-sm text-gray-400">No resume uploaded</p>
            )}
          </div>

          {/* Job Info */}
          {job && (
            <div className="bg-white p-6 rounded-2xl border border-gray-100">
              <h2 className="font-bold text-gray-900 mb-4">
                Position Details
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className="text-gray-400" />
                  <span className="text-sm text-gray-700">{job.title}</span>
                </div>
                {job.location && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      {job.location}
                    </span>
                  </div>
                )}
                <Link
                  href={`/admin/jobs`}
                  className="text-primary text-sm font-medium hover:underline block mt-2"
                >
                  View Job Posting
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
