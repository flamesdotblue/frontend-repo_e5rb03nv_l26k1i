import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

export default function HeroSplineCover() {
  return (
    <section className="relative w-full min-h-[70vh] rounded-2xl overflow-hidden shadow-xl">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for glassmorphism depth - don't block Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/60" />
      <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 blur-3xl bg-gradient-to-r from-blue-400/30 via-purple-400/20 to-emerald-400/30" />

      <div className="relative z-10 px-5 sm:px-8 py-10 sm:py-14 flex flex-col items-start sm:items-center text-left sm:text-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm">
            Union Pulse — Modern Analytics for IUOE 39
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-700 text-sm sm:text-base">
            A glassmorphic, mobile-first dashboard with interactive 3D, real-time insights, and export-ready reports.
          </p>
          <div className="mt-5 sm:mt-7 flex flex-wrap gap-3">
            <a href="#kpis" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow-lg hover:shadow-xl transition">
              Explore KPIs
              <ArrowRight className="h-4 w-4" />
            </a>
            <button className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-white/40 px-4 py-2 text-sm text-slate-800 shadow hover:bg-white/90 transition">
              <Download className="h-4 w-4" />
              Export Sample
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
