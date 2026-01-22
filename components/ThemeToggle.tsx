"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex items-center gap-1 p-1.5 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-full shadow-2xl shadow-black/10">
        
        {/* Light Mode */}
        <button
          onClick={() => setTheme('light')}
          className={`p-2 rounded-full transition-all ${
            theme === 'light' 
            ? 'bg-[#137fec] text-white shadow-lg shadow-[#137fec]/20' 
            : 'text-slate-400 hover:text-slate-600'
          }`}
          title="Light Mode"
        >
          <Sun size={16} />
        </button>

        {/* System Mode */}
        <button
          onClick={() => setTheme('system')}
          className={`p-2 rounded-full transition-all ${
            theme === 'system' 
            ? 'bg-[#137fec] text-white shadow-lg shadow-[#137fec]/20' 
            : 'text-slate-400 hover:text-slate-600'
          }`}
          title="System Default"
        >
          <Monitor size={16} />
        </button>

        {/* Dark Mode */}
        <button
          onClick={() => setTheme('dark')}
          className={`p-2 rounded-full transition-all ${
            theme === 'dark' 
            ? 'bg-[#137fec] text-white shadow-lg shadow-[#137fec]/20' 
            : 'text-slate-400 hover:text-slate-600'
          }`}
          title="Dark Mode"
        >
          <Moon size={16} />
        </button>
        
      </div>
    </div>
  );
}