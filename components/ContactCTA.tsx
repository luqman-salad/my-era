"use client";

import React, { useState } from 'react';
import { Mail, ArrowUpRight, MessageSquare, Check } from 'lucide-react';

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const email = "luqmansalad00@gmail.com";

  const handleEmailClick = (e: React.MouseEvent) => {
    window.location.href = `mailto:${email}?subject=Project Inquiry`;
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="py-24 border-t border-slate-100 dark:border-slate-800/50">
      <div className="max-w-4xl mx-auto text-center px-6">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new projects
        </div>

        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 font-display">
          Have an idea? <br />
          {/* Changed color from Blue to Slate-400/Gray */}
          <span className="text-slate-400 dark:text-slate-500">Let’s build it.</span>
        </h2>

        <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          I help startups and engineers bridge the gap between AI concepts and production-ready applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary Button: Now Black/Gray Authority Colors */}
          <button 
            onClick={handleEmailClick}
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-[#0d1117] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:bg-black dark:hover:bg-black border border-slate-800 transition-all shadow-xl shadow-black/10 relative overflow-hidden"
          >
            {copied ? (
              <>Email Copied! <Check size={18} /></>
            ) : (
              <>Drop an Email <Mail size={18} /></>
            )}
          </button>
          
          <a 
            href="https://wa.me/252616984305" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
          >
            Book a Call <MessageSquare size={18} />
          </a>
        </div>

        {/* Social Proof Link */}
        <div className="mt-12 pt-12 border-t border-slate-100 dark:border-slate-800/50 flex flex-wrap justify-center gap-8 opacity-50 grayscale font-mono text-[11px] tracking-widest uppercase">
          <a href="#" className="flex items-center gap-1 font-bold hover:opacity-100 transition-opacity">
            LinkedIn <ArrowUpRight size={14} />
          </a>
          <a href="#" className="flex items-center gap-1 font-bold hover:opacity-100 transition-opacity">
            X (Twitter) <ArrowUpRight size={14} />
          </a>
          <a href="#" className="flex items-center gap-1 font-bold hover:opacity-100 transition-opacity">
            Read CV <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}