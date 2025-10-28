import { PieChart, LineChart, Users, CreditCard, Smartphone, Download } from 'lucide-react';

function FeatureCard({ icon: Icon, title, description, accent }) {
  return (
    <div className="rounded-2xl bg-white/50 backdrop-blur-lg border border-white/40 p-5 shadow-md hover:shadow-lg transition group">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-white shadow ${accent}`}>
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-slate-900 font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-slate-600">{description}</p>

      {/* Mini chart previews */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="col-span-2 h-16 rounded-lg bg-gradient-to-tr from-slate-100 to-slate-50 relative overflow-hidden">
          <svg className="absolute inset-0" viewBox="0 0 200 64" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              points="0,50 30,40 60,45 90,30 120,35 150,20 180,25 200,15"
            />
            <polyline
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="3"
              points="0,56 30,52 60,48 90,44 120,38 150,34 180,28 200,22"
            />
          </svg>
        </div>
        <div className="h-16 rounded-lg bg-gradient-to-tr from-slate-100 to-slate-50 relative grid place-items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500" />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="text-[11px] px-2 py-1 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20">CSV</span>
          <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">XLSX</span>
          <span className="text-[11px] px-2 py-1 rounded-full bg-purple-500/10 text-purple-600 border border-purple-500/20">JSON</span>
        </div>
        <button className="inline-flex items-center gap-2 text-sm text-slate-700 bg-white/70 hover:bg-white/90 border border-white/40 rounded-full px-3 py-1.5 shadow">
          <Download className="h-4 w-4" /> Export
        </button>
      </div>
    </div>
  );
}

export default function FeatureShowcase() {
  return (
    <section className="w-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-slate-900">Highlights</h2>
        <p className="text-xs text-slate-600">Interactive, export-ready insights</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FeatureCard
          icon={Users}
          title="Member Directory"
          description="Search, filter, and view member engagement with glassy modals."
          accent="bg-gradient-to-br from-blue-500 to-blue-400"
        />
        <FeatureCard
          icon={LineChart}
          title="Session Analytics"
          description="Device usage, timing, and activity trends at a glance."
          accent="bg-gradient-to-br from-purple-500 to-purple-400"
        />
        <FeatureCard
          icon={CreditCard}
          title="Payments & Dues"
          description="Track collections, pending balances, and export financials."
          accent="bg-gradient-to-br from-emerald-500 to-emerald-400"
        />
        <FeatureCard
          icon={PieChart}
          title="Engagement Metrics"
          description="Distribution by activity level with actionable breakdowns."
          accent="bg-gradient-to-br from-amber-500 to-amber-400"
        />
      </div>

      <div className="mt-6 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/40 p-5">
        <div className="flex items-center gap-2 mb-2">
          <Smartphone className="h-5 w-5 text-slate-800" />
          <h3 className="font-semibold text-slate-900">Mobile-first glassmorphism</h3>
        </div>
        <p className="text-sm text-slate-600">
          Built with TailwindCSS and shadcn-inspired components, optimized for phones and tablets with buttery 3D interactions.
        </p>
      </div>
    </section>
  );
}
