"use client";

import React, { useEffect, useState } from 'react';
import { Github, Code2, Cpu, Rocket, Search, GitBranch, Activity } from 'lucide-react';

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "Analyzing project requirements, defining the AI architecture, and selecting the optimal tech stack.",
    icon: <Search size={20} />,
  },
  {
    title: "Rapid Prototyping",
    desc: "Building a functional MVP with focus on core logic, LLM integration, and system scalability.",
    icon: <Cpu size={20} />,
  },
  {
    title: "Refinement & Testing",
    desc: "Iterative development cycles, prompt engineering optimization, and rigorous unit testing.",
    icon: <Code2 size={20} />,
  },
  {
    title: "Deployment & Scale",
    desc: "CI/CD automation and cloud deployment with real-time monitoring and performance tuning.",
    icon: <Rocket size={20} />,
  }
];

export default function Authority({ username = "your-github-username" }: { username?: string }) {
  const [lastActivity, setLastActivity] = useState({ commit: "Initializing...", repo: "" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Fetch real-time commit data to prove activity
    fetch(`https://api.github.com/users/${username}/events/public`)
      .then(res => res.json())
      .then(events => {
        const push = events.find((e: any) => e.type === "PushEvent");
        if (push) {
          setLastActivity({
            commit: push.payload.commits[0].message,
            repo: push.repo.name.split('/')[1]
          });
        }
      })
      .catch(() => setLastActivity({ commit: "System Synchronized", repo: "active-repo" }));
  }, [username]);

  if (!mounted) return <div className="min-h-[600px]" />;

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 space-y-20">
      
      {/* GitHub Authority Header: Focus on Activity over Volume */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#137fec]/10 border border-[#137fec]/20 text-[#137fec] text-[10px] font-black uppercase tracking-widest">
            <Activity size={12} className="animate-pulse" /> Live Development Feed
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
            ALWAYS BUILDING.<br />
            <span className="text-slate-400 text-3xl md:text-5xl">NEVER STATIC.</span>
          </h2>
          
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium leading-relaxed max-w-md">
            My work is defined by the quality of my architecture and the consistency of my output. I specialize in rapid deployment and scalable AI systems.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-bold dark:text-white">
              <div className="size-2 rounded-full bg-emerald-500" /> Open for Collaboration
            </div>
            <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs font-bold dark:text-white">
              <GitBranch size={14} className="text-[#137fec]" /> Production Ready
            </div>
          </div>
        </div>

        {/* The Terminal: Builds professional trust regardless of follower count */}
        <div className="lg:col-span-6">
          <div className="bg-[#0d1117] rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono">
            <div className="px-4 py-2 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
               <div className="flex gap-1.5">
                <div className="size-2 rounded-full bg-red-500/30" />
                <div className="size-2 rounded-full bg-amber-500/30" />
                <div className="size-2 rounded-full bg-emerald-500/30" />
              </div>
              <span className="text-[9px] text-slate-500 uppercase tracking-widest">dev@system: ~</span>
            </div>
            <div className="p-6 text-xs md:text-sm space-y-3">
              <div className="flex gap-2 text-slate-400">
                <span className="text-emerald-500 font-bold">$</span> 
                <span>cat current_sprint.md</span>
              </div>
              <div className="text-slate-300 pl-4 py-2 border-l border-[#137fec]/30 italic">
                "Currently refactoring core modules for high-concurrency LLM processing."
              </div>
              <div className="flex gap-2 text-slate-400 pt-2">
                <span className="text-emerald-500 font-bold">$</span> 
                <span>git log --oneline -n 1</span>
              </div>
              <div className="text-[#137fec] font-bold">
                {lastActivity.repo ? `[${lastActivity.repo}] ` : ''}{lastActivity.commit}
              </div>
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] text-emerald-500/70">
                   <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                   UPTIME: 99.9%
                </div>
                <a 
                  href={`https://github.com/${username}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] text-slate-500 hover:text-[#137fec] underline transition-colors"
                >
                  View Full Logs
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Process Section (Exact code provided) */}
      <div className="pt-20 border-t border-slate-200 dark:border-slate-800">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">The Engineering Process</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">From abstract vision to production-grade software.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector line for desktop */}
              {idx !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-[2px] bg-slate-100 dark:bg-slate-800 -z-10" />
              )}
              
              <div className="space-y-4">
                <div className="size-20 rounded-2xl bg-white dark:bg-[#1c2127] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#137fec] shadow-xl shadow-[#137fec]/5 group-hover:border-[#137fec]/50 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="size-12 rounded-xl bg-slate-50 dark:bg-[#101922] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[#137fec] font-black text-xs uppercase tracking-tighter opacity-50">Step 0{idx + 1}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}