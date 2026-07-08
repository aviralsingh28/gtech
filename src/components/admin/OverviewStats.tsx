import { BarChart3, Calendar, Inbox, Mail } from "lucide-react";

interface StatProps {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

function StatCard({ label, value, icon, color }: StatProps) {
  return (
    <div className="rounded-xl border border-[#eeede6] bg-white p-5">
      <div className="flex items-center justify-between">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}18`, color }}
        >
          {icon}
        </div>
      </div>
      <p className="mt-4 text-2xl font-semibold text-[#1a1a1a]">{value}</p>
      <p className="mt-0.5 text-[13px] text-[#64748b]">{label}</p>
    </div>
  );
}

interface Props {
  total: number;
  today: number;
  newCount: number;
  readCount: number;
}

export default function OverviewStats({ total, today, newCount, readCount }: Props) {
  return (
    <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatCard
        label="Total Requests"
        value={total}
        color="#f5a623"
        icon={<BarChart3 className="h-5 w-5" />}
      />
      <StatCard
        label="Received Today"
        value={today}
        color="#769bbe"
        icon={<Calendar className="h-5 w-5" />}
      />
      <StatCard
        label="New (3 days)"
        value={newCount}
        color="#e09510"
        icon={<Inbox className="h-5 w-5" />}
      />
      <StatCard
        label="Reviewed"
        value={readCount}
        color="#64748b"
        icon={<Mail className="h-5 w-5" />}
      />
    </div>
  );
}
