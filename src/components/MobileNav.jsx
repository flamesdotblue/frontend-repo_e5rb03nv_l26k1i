import { BarChart3, Settings } from 'lucide-react';

export default function MobileNav() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur-md bg-white/30 border-b border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-300 flex items-center justify-center shadow-md">
            <BarChart3 className="h-5 w-5 text-white" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-slate-800">IUOE 39 Analytics</p>
            <p className="text-[11px] text-slate-500">Union Pulse</p>
          </div>
        </div>
        <button className="inline-flex items-center gap-2 text-slate-700 bg-white/50 hover:bg-white/70 border border-white/40 rounded-full px-3 py-1.5 shadow-sm transition">
          <Settings className="h-4 w-4" />
          <span className="text-sm">Settings</span>
        </button>
      </div>
    </header>
  );
}
