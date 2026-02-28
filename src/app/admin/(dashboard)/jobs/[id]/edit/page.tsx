import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import JobForm from '@/components/admin/JobForm';
import { updateJob } from '@/lib/actions/jobs';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: job } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single();

  if (!job) notFound();

  const boundAction = updateJob.bind(null, id);

  return (
    <div>
      <Link
        href="/admin/jobs"
        className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary mb-6 transition-colors"
      >
        <ArrowLeft size={16} /> Back to jobs
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 font-heading mb-8">
        Edit Job: {job.title}
      </h1>

      <JobForm job={job} action={boundAction} />
    </div>
  );
}
