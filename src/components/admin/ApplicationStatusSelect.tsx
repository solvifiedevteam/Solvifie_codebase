'use client';

import { useRouter } from 'next/navigation';
import { updateApplicationStatus } from '@/lib/actions/applications';

const STATUSES = ['new', 'shortlisted', 'interviewed', 'rejected'];

export default function ApplicationStatusSelect({
  id,
  currentStatus,
}: {
  id: string;
  currentStatus: string;
}) {
  const router = useRouter();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    await updateApplicationStatus(id, e.target.value);
    router.refresh();
  };

  return (
    <select
      value={currentStatus}
      onChange={handleChange}
      className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s.charAt(0).toUpperCase() + s.slice(1)}
        </option>
      ))}
    </select>
  );
}
