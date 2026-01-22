import React from 'react';
import { User, Cpu, Zap, Heart, Code2, Globe, GraduationCap, Briefcase } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <div className="flex items-center gap-2 text-[#137fec] font-mono text-xs font-bold tracking-widest uppercase mb-4">
              <User size={14} />
              Identity Profile
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-8">
              Luqman <span className="text-slate-400 dark:text-slate-600">Salad.</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              I am a System Developer and Technical Strategist focused on building 
              high-fidelity digital experiences. I specialize in the intersection of 
              AI automation and human-centric design.
            </p>
            <p className="text-slate-500 dark:text-slate-500 leading-relaxed">
              My approach is rooted in the "Engineering Mindset"—breaking down complex 
              problems into scalable, efficient, and elegant systems. Whether it's 
              coding an AI agent or optimizing personal productivity, I focus on 
              measurable results.
            </p>
          </div>
          
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl">
            {/* Placeholder for your professional photo */}
            <img 
              src="/luqman.jpg" 
              alt="Luqman Salad"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 to-transparent" />
          </div>
        </div>

        {/* Pillars Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Cpu className="text-[#137fec]" />,
              title: "AI Integration",
              desc: "Deploying intelligent agents and LLMs to automate workflows and enhance decision-making."
            },
            {
              icon: <Zap className="text-[#137fec]" />,
              title: "Productivity",
              desc: "Designing systems that leverage deep work and algorithmic efficiency to maximize output."
            },
            {
              icon: <Heart className="text-[#137fec]" />,
              title: "Personal Dev",
              desc: "Continuously refactoring the mind through stoic principles and technical discipline."
            }
          ].map((pillar, i) => (
            <div key={i} className="p-8 rounded-3xl border border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20">
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Experience & Tools Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-8">
                <Briefcase size={24} className="text-[#137fec]" />
                Experience
              </h3>
              <div className="space-y-8 border-l border-slate-200 dark:border-slate-800 ml-3 pl-8">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 size-5 rounded-full bg-[#137fec] border-4 border-white dark:border-[#050505]" />
                  <span className="text-xs font-mono font-bold text-[#137fec]">2024 — PRESENT</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Senior Systems Developer</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Lead development of AI-native applications and scalable infrastructure.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 size-5 rounded-full bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-[#050505]" />
                  <span className="text-xs font-mono font-bold text-slate-400">2022 — 2024</span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Full Stack Engineer</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">Focused on React ecosystems and cloud-native architecture.</p>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-12">
             <section>
              <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-8">
                <Code2 size={24} className="text-[#137fec]" />
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'TypeScript', 'Tailwind v4', 'Python', 'Node.js', 'PostgreSQL', 'AWS', 'OpenAI API'].map(tech => (
                  <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}