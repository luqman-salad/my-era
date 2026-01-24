"use client";

import React from 'react';
import { Send, Terminal } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 px-4 transition-colors duration-300">
      {/* Container: Authority Dark/Black with Slate border */}
      <div className="relative mx-auto overflow-hidden rounded-3xl bg-slate-900 dark:bg-[#0d1117] p-8 md:p-16 border border-slate-200 dark:border-slate-800 shadow-2xl">
        
        {/* Subtle Terminal Glow in Background */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 size-96 bg-[#137fec]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 size-64 bg-emerald-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="text-center md:text-left space-y-3">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-[#137fec]/10 border border-[#137fec]/20 text-[#137fec] text-[10px] font-black uppercase tracking-widest mb-2">
              <Terminal size={12} /> Knowledge Sync
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
              Stay in the <span className="text-slate-500">loop.</span>
            </h2>
            <p className="text-slate-400 font-mono text-xs uppercase tracking-tight">
              Weekly insights on AI, Tech & Engineering.
            </p>
          </div>

          <form 
            className="w-full max-w-md p-1.5 bg-black/40 backdrop-blur-md border border-slate-700 rounded-full flex items-center group focus-within:border-[#137fec] transition-colors"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="operator@system.dev" 
              className="flex-1 bg-transparent border-none px-6 py-3 text-white placeholder:text-slate-600 font-mono text-sm outline-none w-full"
              required
            />
            <button 
              type="submit"
              className="bg-white dark:bg-slate-100 text-slate-900 px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-[#137fec] hover:text-white transition-all flex items-center gap-2"
            >
              Sbscribe <Send size={14} strokeWidth={3} />
            </button>
          </form>

        </div>

        {/* Bottom Status Bar - Authority Style */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-30">
           <div className="flex items-center gap-1.5 text-[8px] font-mono text-emerald-500">
             <div className="size-1 rounded-full bg-emerald-500 animate-pulse" /> ENCRYPTED CONNECTION
           </div>
        </div>
      </div>
    </section>
  );
}