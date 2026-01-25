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
                <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
                  <Briefcase size={24} className="text-[#137fec]" />
                  Professional Experience
                </h3>
                <div className="space-y-10 border-l-2 border-slate-100 dark:border-white/5 ml-3 pl-8">
                  {/* Experience Item 1 */}
                  <div className="relative">
                    <div className="absolute -left-[43px] top-1 size-6 rounded-full bg-[#137fec] border-[6px] border-white dark:border-[#050505] shadow-lg shadow-[#137fec]/20" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">Freelance Software Developer</h4>
                      <span className="text-[10px] font-black font-mono px-3 py-1 rounded-full bg-[#137fec]/10 text-[#137fec] uppercase tracking-widest w-fit">
                        2024 — PRESENT
                      </span>
                    </div>
                    <p className="text-[#137fec] font-bold text-sm mb-3">Self-Employed • Remote</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
                      Architecting AI-native applications and scalable SaaS infrastructure. Specializing in integrating LLMs with modern web stacks to automate complex business workflows and enhance user decision-making.
                    </p>
                  </div>

                  {/* Experience Item 2 */}
                  <div className="relative">
                    <div className="absolute -left-[43px] top-1 size-6 rounded-full bg-slate-200 dark:bg-slate-800 border-[6px] border-white dark:border-[#050505]" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">UI-UX Designer</h4>
                      <span className="text-[10px] font-black font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-400 uppercase tracking-widest w-fit">
                        2024 — PRESENT
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 font-bold text-sm mb-3">Self-Employed • Remote</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
                      Crafted high-fidelity prototypes and design systems focused on React ecosystems. Bridged the gap between aesthetics and cloud-native architecture for high-performance web platforms.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Tech Stack */}
            <div className="space-y-12">
              <section className="bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-[2rem] p-8">
                <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white mb-8">
                  <Code2 size={24} className="text-[#137fec]" />
                  Tech Stack
                </h3>
                
                <div className="space-y-6">
                  {/* Category: Frontend */}
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Frontend_Core</p>
                    <div className="flex flex-wrap gap-2">
                      {['Next.js', 'TypeScript', 'Tailwind v4', 'React', 'Figma',].map(tech => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors hover:border-[#137fec]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category: Backend */}
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Backend_Infra</p>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Python', 'PostgreSQL', 'AWS'].map(tech => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 text-xs font-bold transition-colors hover:border-[#137fec]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Category: AI */}
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">AI_Architecture</p>
                    <div className="flex flex-wrap gap-2">
                      {['OpenAI API', 'LangChain', 'Pinecone'].map(tech => (
                        <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#137fec]/5 border border-[#137fec]/20 text-[#137fec] text-xs font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

      </div>
    </div>
  );
}