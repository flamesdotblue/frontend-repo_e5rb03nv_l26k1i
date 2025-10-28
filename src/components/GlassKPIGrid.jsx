import { Users, Activity, CreditCard, LineChart } from 'lucide-react';

const KPICard = ({ icon: Icon, value, title, subtitle, color }) => (
  <div className="flex-1 min-w-[140px] sm:min-w-[180px] rounded-2xl bg-white/50 backdrop-blur-lg border border-white/40 shadow-md p-4">
    <div className="flex items-center justify-between">
      <div className={`h-10 w-10 rounded-xl flex items-center justify-center shadow ${color}`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      {subtitle && (
        <span className="text-[11px] text-slate-600">{subtitle}</span>
      )}
    </div>
    <div className="mt-3">
      <p className="text-xs uppercase tracking-wide text-slate-500">{title}</p>
      <p className="text-2xl font-semibold text-slate-900">{value}</p>
    </div>
  </div>
);

export default function GlassKPIGrid() {
  return (
    <section id="kpis" className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <KPICard
          icon={Users}
          title="Total Members"
          value="1,691"
          subtitle="+12"
          color="bg-gradient-to-br from-blue-500 to-blue-400"
        />
        <KPICard
          icon={Activity}
          title="Active Members"
          value="260"
          subtitle="15.4% rate"
          color="bg-gradient-to-br from-emerald-500 to-emerald-400"
        />
        <KPICard
          icon={CreditCard}
          title="Pending Dues"
          value="1,431"
          subtitle="-3"
          color="bg-gradient-to-br from-rose-500 to-rose-400"
        />
        <KPICard
          icon={LineChart}
          title="Total Sessions"
          value="1,370"
          subtitle="52.1% mobile"
          color="bg-gradient-to-br from-purple-500 to-purple-400"
        />
      </div>
    </section>
  );
}
