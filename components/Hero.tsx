"use client";

import React, { useState, useEffect } from 'react';
import { Code2, Command, Github, Cpu, Globe, Zap, ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(prev => (prev >= 100 ? 100 : prev + 2));
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-500">
      
      {/* Pattern background removed as requested */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT: STRATEGIC BRANDING */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Empire Engine v4.0</span>
              </div>
              
              <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.85]">
                Design.<br />
                Build.<br />
                <span className="text-[#137fec]">Scale.</span>
              </h1>
              
              <p className="max-w-md text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Specializing in high-performance digital infrastructure and interfaces that redefine user expectation.
              </p>
            </div>

            <div className="flex flex-wrap gap-5">
              <button className="group h-16 px-10 bg-[#137fec] text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-3">
                Start a Project <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <a href="#" className="size-16 border-2 border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-white/5 transition-all rounded-2xl text-slate-600 dark:text-slate-400">
                <Github size={24} />
              </a>
            </div>
          </div>

          {/* RIGHT: SYSTEM CORE */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-20 bg-slate-50 dark:bg-[#0d1117] rounded-[2.5rem] border border-slate-200 dark:border-white/10 shadow-2xl p-2">
              
              {/* Inner Shell */}
              <div className="bg-white dark:bg-black/20 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-white/5">
                
                {/* Header: Identity Bar */}
                <div className="p-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-full border-2 border-[#137fec] p-0.5">
                      <img src="/luqman.jpg" className="w-full h-full object-cover rounded-full grayscale" alt="Engineer" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 dark:text-white">Luqman Salad</h4>
                      <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Lead Systems Architect</p>
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
                  <div className="col-span-3 border-r border-slate-100 dark:border-white/5 p-4 space-y-2">
                    {[
                      { icon: Activity, label: 'Health' },
                      { icon: Cpu, label: 'Compute' },
                      { icon: ShieldCheck, label: 'Safety' },
                      { icon: Globe, label: 'Edge' }
                    ].map((item, i) => (
                      <button 
                        key={i} 
                        onClick={() => setActiveTab(i)}
                        className={`w-full flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${activeTab === i ? 'bg-slate-50 dark:bg-white/5 shadow-inner text-[#137fec]' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'}`}
                      >
                        <item.icon size={18} />
                        <span className="text-[9px] font-bold uppercase">{item.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Content Panel */}
                  <div className="col-span-9 p-8">
                    <div className="flex justify-between items-end mb-8">
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-[#137fec] font-bold tracking-tighter">PROJECT_METRIC_01</span>
                        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tighter">Optimization</h2>
                      </div>
                      <div className="text-right">
                        <span className="text-4xl font-black text-[#137fec]">{loading}%</span>
                        <p className="text-[9px] font-mono text-slate-400">STABLE_LATENCY</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-4">
                        <div className="flex items-center gap-2">
                          <Zap size={14} className="text-amber-500" />
                          <span className="text-[10px] font-black uppercase text-slate-400">Response</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-slate-900 dark:text-white">18</span>
                          <span className="text-xs font-bold text-slate-400">ms</span>
                        </div>
                      </div>
                      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 space-y-4">
                        <div className="flex items-center gap-2">
                          <Activity size={14} className="text-[#137fec]" />
                          <span className="text-[10px] font-black uppercase text-slate-400">Uptime</span>
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-black text-slate-900 dark:text-white">100</span>
                          <span className="text-xs font-bold text-slate-400">%</span>
                        </div>
                      </div>
                    </div>

                    {/* Scanning Visualizer */}
                    <div className="mt-6 h-20 w-full bg-slate-50 dark:bg-white/5 rounded-xl overflow-hidden relative border border-slate-100 dark:border-white/5">
                       <div className="absolute inset-0 flex items-center justify-around px-4">
                          {[30, 60, 40, 80, 50, 90, 70, 40, 60, 30].map((h, i) => (
                            <div 
                              key={i} 
                              className="w-2 bg-[#137fec] rounded-full transition-all duration-500"
                              style={{ height: `${(h * loading) / 100}%`, opacity: (i + 1) / 10 }}
                            />
                          ))}
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute -bottom-6 -left-6 z-30 bg-slate-900 text-white p-6 rounded-3xl shadow-2xl hidden md:block border border-white/10">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-[#137fec] flex items-center justify-center">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-white/40 leading-none mb-1">SECURITY_STATUS</p>
                  <p className="text-sm font-bold tracking-tight uppercase">Active_Shield</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}