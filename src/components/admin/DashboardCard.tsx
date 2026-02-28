import type { LucideIcon } from 'lucide-react';

export default function DashboardCard({
  label,
  value,
  icon: Icon,
  color = 'primary',
}: {
  label: string;
  value: string | number;
  icon: LucideIcon;
  color?: string;
}) {
  const colorMap: Record<string, string> = {
    primary: 'bg-primary/10 text-primary',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    orange: 'bg-orange-100 text-orange-600',
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100">
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${
            colorMap[color] || colorMap.primary
          }`}
        >
          <Icon size={22} />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-500">{label}</p>
        </div>
      </div>
    </div>
  );
}
