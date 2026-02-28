const statusColors: Record<string, string> = {
  active: 'bg-green-50 text-green-700 border-green-200',
  closed: 'bg-gray-100 text-gray-600 border-gray-200',
  draft: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  new: 'bg-blue-50 text-blue-700 border-blue-200',
  shortlisted: 'bg-purple-50 text-purple-700 border-purple-200',
  interviewed: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  rejected: 'bg-red-50 text-red-600 border-red-200',
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-flex px-2.5 py-0.5 rounded-lg text-xs font-bold border capitalize ${
        statusColors[status] || 'bg-gray-100 text-gray-600 border-gray-200'
      }`}
    >
      {status}
    </span>
  );
}
