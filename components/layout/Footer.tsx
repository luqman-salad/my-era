"use client";

import React from 'react';
import { Mail, Github, Linkedin, Terminal, ArrowUpRight, } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-100 dark:border-slate-800/50 bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Row: Brand and Main Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white tracking-tighter">
              <Terminal size={16} className="text-[#137fec]" />
              LUQMAN.DEV
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Building high-performance digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <Link href="https://github.com/luqman-salad" target="_blank" className="text-xs font-bold text-slate-500 hover:text-[#137fec] transition-colors flex items-center gap-1">
              GITHUB <ArrowUpRight size={12} />
            </Link>
            <Link href="https://linkedin.com/in/luqmansalad" target="_blank" className="text-xs font-bold text-slate-500 hover:text-[#137fec] transition-colors flex items-center gap-1">
              LINKEDIN <ArrowUpRight size={12} />
            </Link>
            <Link href="https://facebook.com/luqmansalad00" target="_blank" className="text-xs font-bold text-slate-500 hover:text-[#137fec] transition-colors flex items-center gap-1">
              Facebook <ArrowUpRight size={12} />
            </Link>
          </div>
        </div>

        {/* Bottom Row: Metadata & Legal (Enhanced Visibility) */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between gap-4 font-mono text-[11px] text-slate-600 dark:text-slate-300 tracking-widest uppercase">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-slate-900 dark:text-white">© {currentYear}</span>
            <span className="hidden md:block opacity-50">|</span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              System Active
            </span>
          </div>
          
          <div className="flex gap-6 font-medium">
            <a href="/privacy" className="hover:text-[#137fec] dark:hover:text-[#137fec] transition-colors">
              Privacy Policy
            </a>
            <span className="hidden md:block opacity-50">|</span>
            <a href="/terms" className="hover:text-[#137fec] dark:hover:text-[#137fec] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}