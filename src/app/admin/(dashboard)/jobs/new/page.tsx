import JobForm from '@/components/admin/JobForm';
import { createJob } from '@/lib/actions/jobs';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NewJobPage() {
  return (
    <div>
      <Link
        href="/admin/jobs"
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft size={16} /> Back to jobs
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 font-heading mb-8">
        Post New Job
      </h1>

      <JobForm action={createJob} />
    </div>
  );
}
