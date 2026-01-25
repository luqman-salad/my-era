"use client";

import Link from 'next/link';
import { Terminal, Moon, Sun, Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Content', href: '/content' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md transition-all duration-300 my-2 md:my-5 mx-4 md:mx-10 lg:mx-20 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
        
        {/* Left Side: Brand/Logo */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <div className="bg-[#137fec] p-2 rounded-xl text-white shadow-lg shadow-[#137fec]/30 group-hover:rotate-6 transition-transform">
            <Terminal strokeWidth={2.5} className="w-5 h-5 md:w-6 md:h-6" />
          </div>
          <h2 className="text-lg md:text-xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
            LUQMAN.DEV
          </h2>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 hover:text-[#137fec] dark:hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Theme Toggle - Added suppressHydrationWarning */}
          <button
            suppressHydrationWarning
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors h-10 w-10 flex items-center justify-center"
          >
            {mounted && (
              theme === 'dark' ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-slate-600" />
              )
            )}
          </button>

          <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1 hidden md:block" />

          {/* FIX: Removed nested <button>, styled the <Link> directly */}
          <Link 
            href="/contact" 
            className="hidden sm:flex bg-[#137fec] hover:bg-[#137fec]/90 text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-[#137fec]/20 items-center gap-2"
          >
            Let's Talk
            <ArrowRight size={14} />
          </Link>

          {/* Mobile Menu Toggle */}
          <button 
            suppressHydrationWarning
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-900 dark:text-white z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="p-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl hover:text-[#137fec] transition-all"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-slate-100 dark:bg-slate-800 my-2" />
            
            {/* FIX: Changed button to Link for mobile as well */}
            <Link 
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-[#137fec] text-white p-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}