'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { deleteJob, toggleJobStatus } from '@/lib/actions/jobs';
import { Pencil, Trash2, Power } from 'lucide-react';
import Link from 'next/link';

export default function JobActions({
  jobId,
  status,
}: {
  jobId: string;
  status: string;
}) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to permanently delete this job and all its applications?')) return;
    setDeleting(true);
    await deleteJob(jobId);
    router.refresh();
  };

  const handleToggle = async () => {
    await toggleJobStatus(jobId, status);
    router.refresh();
  };

  return (
    <div className="flex items-center gap-1">
      <Link
        href={`/admin/jobs/${jobId}/edit`}
        className="p-2 text-gray-500 hover:text-primary hover:bg-primary/10 rounded-lg transition-all"
        title="Edit"
      >
        <Pencil size={16} />
      </Link>
      <button
        onClick={handleToggle}
        className={`p-2 rounded-lg transition-all ${
          status === 'active'
            ? 'text-orange-500 hover:bg-orange-50'
            : 'text-green-500 hover:bg-green-50'
        }`}
        title={status === 'active' ? 'Close job' : 'Activate job'}
      >
        <Power size={16} />
      </button>
      <button
        onClick={handleDelete}
        disabled={deleting}
        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all disabled:opacity-50"
        title="Delete"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
}
