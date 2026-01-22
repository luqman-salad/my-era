"use client";

import React from 'react';
import { 
  SiJavascript, SiVuedotjs, SiAngular, SiOpenjdk, 
  SiPhp, SiSwift, SiRust, SiWordpress, 
  SiLaravel, SiAmazonwebservices, SiReact, SiNodedotjs, SiPython 
} from 'react-icons/si';

const techStack = [
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Vue.js", Icon: SiVuedotjs },
  { name: "Angular", Icon: SiAngular },
  { name: "Java", Icon: SiOpenjdk },
  { name: "PHP", Icon: SiPhp },
  { name: "Swift", Icon: SiSwift },
  { name: "Rust", Icon: SiRust },
  { name: "WordPress", Icon: SiWordpress },
  { name: "Laravel", Icon: SiLaravel },
  { name: "AWS", Icon: SiAmazonwebservices },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Python", Icon: SiPython },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-white dark:bg-transparent overflow-hidden border-y border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.4em]">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            Core Stack & Industry Standard Integration
          </div>
        </div>
      </div>

      {/* The Marquee Container */}
      <div className="relative flex overflow-hidden group">
        {/* Added min-w-full and flex-nowrap to ensure the animation has space to travel */}
        <div className="flex flex-nowrap min-w-full animate-marquee hover:[animation-play-state:paused] items-center gap-24 py-4">
          {/* Use 4 copies to ensure the screen is ALWAYS full even on ultrawide monitors */}
          {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 flex items-center justify-center grayscale opacity-40 group-hover:opacity-60 hover:!opacity-100 hover:!grayscale-0 transition-all duration-500 cursor-crosshair text-slate-900 dark:text-white"
            >
              <tech.Icon size={40} className="md:size-12" />
            </div>
          ))}
        </div>

        {/* Gradient Fades - Forced to your background-dark hex for dark mode */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10" />
      </div>

      {/* Metrics */}
      <div className="max-w-6xl mx-auto px-6 mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-slate-100 dark:border-white/5 pt-16">
          {[
            { label: "Successful Sprints", value: "140+" },
            { label: "System Uptime", value: "99.9%" },
            { label: "Client Satisfaction", value: "100%" },
            { label: "Cloud Deployments", value: "50+" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-3xl font-display font-black text-slate-900 dark:text-white tracking-tighter transition-colors">
                {stat.value}
              </span>
              <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}