import React from 'react';
import { Database, Cpu, Globe, Terminal, Code2, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: "Frontend",
    icon: <Globe className="text-slate-400 group-hover:text-[#137fec] transition-colors" size={24} />,
    tools: [
      { name: "Next.js", icon: "nextdotjs" },
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Tailwind", icon: "tailwindcss" },
      { name: "Framer", icon: "framer" }
    ]
  },
  {
    title: "Backend & Cloud",
    icon: <Database className="text-slate-400 group-hover:text-[#137fec] transition-colors" size={24} />,
    tools: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Python", icon: "python" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "AWS", icon: "amazonaws" },
      { name: "Docker", icon: "docker" }
    ]
  },
  {
    title: "AI & Data",
    icon: <Cpu className="text-slate-400 group-hover:text-[#137fec] transition-colors" size={24} />,
    tools: [
      { name: "OpenAI", icon: "openai" },
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
      { name: "Pandas", icon: "pandas" },
      { name: "Jupyter", icon: "jupyter" }
    ]
  },
  {
    title: "Engineering",
    icon: <Terminal className="text-slate-400 group-hover:text-[#137fec] transition-colors" size={24} />,
    tools: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Linux", icon: "linux" },
      { name: "Postman", icon: "postman" },
      { name: "Vercel", icon: "vercel" }
    ]
  }
];

export default function TechStack() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">
          Capabilities & Toolkit
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white mb-6 uppercase leading-none">
          TECHNICAL <span className="text-slate-400 dark:text-slate-600">EXPERTISE.</span>
        </h2>
        <p className="text-slate-500 max-w-2xl text-lg font-medium leading-relaxed">
          A specialized stack focused on high-performance architecture, 
          autonomous AI systems, and scalable cloud infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <div 
            key={idx}
            className="group p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d1117] hover:border-[#137fec]/50 transition-all duration-500"
          >
            <div className="mb-8 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 w-fit group-hover:scale-110 group-hover:bg-[#137fec]/10 transition-all duration-500">
              {category.icon}
            </div>
            
            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">
              {category.title}
            </h3>

            <div className="space-y-2">
              {category.tools.map((tool) => (
                <div 
                  key={tool.name}
                  className="flex items-center gap-3 p-2 rounded-xl border border-transparent hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all group/tool"
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${tool.icon}/94a3b8`} 
                    alt={tool.name}
                    className="size-4 grayscale group-hover/tool:grayscale-0 group-hover/tool:brightness-125 transition-all"
                  />
                  <span className="text-xs font-mono font-bold text-slate-500 dark:text-slate-400 group-hover/tool:text-white transition-colors">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Authority-Style CTA Section */}
      <div className="mt-20 p-8 md:p-12 rounded-3xl bg-slate-900 dark:bg-[#0d1117] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 size-64 bg-[#137fec]/5 blur-3xl rounded-full" />
        
        <div className="flex items-center gap-6 relative z-10">
          <div className="hidden sm:flex size-16 rounded-2xl bg-slate-800 border border-slate-700 items-center justify-center text-[#137fec]">
            <Code2 size={32} />
          </div>
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-black text-white uppercase tracking-tight">System Integration Ready.</h4>
            <p className="text-slate-400 font-mono text-xs uppercase tracking-widest mt-1">Currently accepting high-impact consulting projects.</p>
          </div>
        </div>

        <button className="relative z-10 w-full md:w-auto bg-white text-slate-900 px-10 py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#137fec] hover:text-white transition-all shadow-2xl flex items-center justify-center gap-2">
         Get in Touch <ArrowRight size={16} strokeWidth={3} />
        </button>
      </div>
    </section>
  );
}