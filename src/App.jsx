import MobileNav from './components/MobileNav';
import HeroSplineCover from './components/HeroSplineCover';
import GlassKPIGrid from './components/GlassKPIGrid';
import FeatureShowcase from './components/FeatureShowcase';
import { Settings, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white text-slate-900">
      <MobileNav />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-6 space-y-6">
        <HeroSplineCover />

        <GlassKPIGrid />

        <FeatureShowcase />
      </main>

      <footer className="mt-8 border-t border-white/40 bg-white/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 grid place-items-center text-white">
              <User className="h-4 w-4" />
            </div>
            <div className="text-sm leading-tight">
              <p className="font-medium">Admin User</p>
              <p className="text-slate-600 text-xs">IUOE 39</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 text-slate-700 bg-white/70 hover:bg-white/90 border border-white/40 rounded-full px-3 py-1.5 shadow">
            <Settings className="h-4 w-4" />
            <span className="text-sm">Settings</span>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
