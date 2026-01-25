"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Code2, Command, Github, Cpu, Globe, Zap, ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setLoading(prev => (prev >= 100 ? 100 : prev + 2));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    // Reduced py-24 to py-12 on mobile
    <section className="relative min-h-screen flex items-center justify-center py-12 md:py-24 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
      
      {/* Reduced px-6 to px-4 on mobile */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-center">
          
          {/* LEFT: STRATEGIC BRANDING */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Empire Engine v4.0</span>
              </div>
              
              {/* Responsive Text Size: text-5xl on mobile, text-8xl on desktop */}
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9] md:leading-[0.85]">
                Design.<br />
                Build.<br />
                <span className="text-[#137fec]">Scale.</span>
              </h1>
              
              <p className="max-w-md text-base md:text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Specializing in high-performance digital infrastructure and interfaces that redefine user expectation.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-5">
              <Link 
                href="/projects"
                suppressHydrationWarning
                className="group h-14 md:h-16 px-8 md:px-10 bg-[#137fec] text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3 text-sm md:text-base"
              >
                View Projects <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              
              <a 
                href="https://github.com/luqman-salad" 
                target="_blank"
                rel="noopener noreferrer"
                className="size-14 md:size-16 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-white/5 transition-all rounded-2xl text-slate-600 dark:text-slate-400"
              >
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* RIGHT: SYSTEM CORE */}
          <div className="lg:col-span-7 relative w-full">
            {/* Reduced outer padding on mobile from p-2 to p-1 */}
            <div className="relative z-20 bg-slate-50 dark:bg-[#0d1117] rounded-[2rem] md:rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-2xl p-1 md:p-2">
              <div className="bg-white dark:bg-black/20 rounded-[1.8rem] md:rounded-[2rem] overflow-hidden border border-slate-100 dark:border-white/5">
                
                {/* Header: Identity Bar */}
                <div className="p-4 md:p-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="size-10 md:size-12 rounded-full border-2 border-[#137fec] p-0.5 overflow-hidden">
                      <img src="/luqman.jpg" className="w-full h-full object-cover rounded-full grayscale" alt="Engineer" />
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-black text-slate-900 dark:text-white">Luqman Salad</h4>
                      <p className="text-[8px] md:text-[10px] font-mono text-slate-400 uppercase tracking-widest">Lead Systems Architect</p>
                    </div>
                  </div>
                  <div className="hidden sm:flex gap-2">
                    {[0, 1, 2].map((i) => (
                      <div key={i} className={`h-1.5 w-8 rounded-full ${i === 0 ? 'bg-[#137fec]' : 'bg-slate-200 dark:bg-white/10'}`} />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-12">
                  {/* Vertical Menu */}
                  <div className="col-span-3 border-r border-slate-100 dark:border-white/5 p-2 md:p-4 space-y-1 md:space-y-2">
                    {[
                      { icon: Activity, label: 'Health' },
                      { icon: Cpu, label: 'Comp' },
                      { icon: ShieldCheck, label: 'Safe' },
                      { icon: Globe, label: 'Edge' }
                    ].map((item, i) => (
                      <button 
                        key={i} 
                        suppressHydrationWarning 
                        onClick={() => setActiveTab(i)}
                        className={`w-full flex flex-col items-center gap-1 p-2 md:p-3 rounded-xl transition-all ${activeTab === i ? 'bg-slate-50 dark:bg-white/5 shadow-inner text-[#137fec]' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                      >
                        <item.icon size={16} className="md:size-[18px]" />
                        <span className="text-[7px] md:text-[9px] font-bold uppercase">{item.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Content Panel */}
                  <div className="col-span-9 p-4 md:p-8">
                    <div className="flex justify-between items-end mb-4 md:mb-8">
                      <div className="space-y-0.5 md:space-y-1">
                        <span className="text-[8px] md:text-[10px] font-mono text-[#137fec] font-bold tracking-tighter">METRIC_01</span>
                        <h2 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Optimization</h2>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl md:text-4xl font-black text-[#137fec]">
                          {mounted ? loading : 0}% 
                        </span>
                        <p className="text-[7px] md:text-[9px] font-mono text-slate-400">LATENCY</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 md:gap-4">
                      <div className="p-3 md:p-5 rounded-xl md:rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-2 md:space-y-4">
                        <div className="flex items-center gap-2">
                          <Zap size={12} className="text-amber-500" />
                          <span className="text-[8px] md:text-[10px] font-black uppercase text-slate-400">Ping</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-lg md:text-2xl font-black text-slate-900 dark:text-white">18</span>
                          <span className="text-[8px] md:text-xs font-bold text-slate-400">ms</span>
                        </div>
                      </div>
                      <div className="p-3 md:p-5 rounded-xl md:rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-2 md:space-y-4">
                        <div className="flex items-center gap-2">
                          <Activity size={12} className="text-[#137fec]" />
                          <span className="text-[8px] md:text-[10px] font-black uppercase text-slate-400">Uptime</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-lg md:text-2xl font-black text-slate-900 dark:text-white">100</span>
                          <span className="text-[8px] md:text-xs font-bold text-slate-400">%</span>
                        </div>
                      </div>
                    </div>

                    {/* Scanning Visualizer - Hidden on very small screens to save space */}
                    <div className="mt-4 md:mt-6 h-12 md:h-20 w-full bg-slate-50 dark:bg-white/5 rounded-lg md:rounded-xl overflow-hidden relative border border-slate-100 dark:border-white/5">
                       <div className="absolute inset-0 flex items-center justify-around px-2 md:px-4">
                         {[30, 60, 40, 80, 50, 90, 70, 40, 60, 30].map((h, i) => (
                           <div 
                             key={i} 
                             className="w-1 md:w-2 bg-[#137fec] rounded-full transition-all duration-500"
                             style={{ 
                               height: mounted ? `${(h * loading) / 100}%` : '0%', 
                               opacity: (i + 1) / 10 
                             }}
                           />
                         ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Floating Badge: Scaled down and hidden on mobile to avoid overlap */}
            <div className="absolute -bottom-4 -left-4 z-30 bg-slate-900 text-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl hidden md:block border border-white/10">
              <div className="flex items-center gap-4">
                <div className="size-8 md:size-10 rounded-full bg-[#137fec] flex items-center justify-center">
                  <ShieldCheck className="size-[18px] md:size-[20px]" />
                </div>
                <div>
                  <p className="text-[8px] md:text-[10px] font-mono text-white/40 leading-none mb-1">STATUS</p>
                  <p className="text-xs md:text-sm font-bold tracking-tight uppercase">Active</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}