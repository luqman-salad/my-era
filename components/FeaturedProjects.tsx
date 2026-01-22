// components/Projects.tsx
import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

// The "GROQ" query to get your projects
async function getProjects() {
  // Updated query to dereference category
  const query = `*[_type == "project"] | order(_createdAt desc)[0...3] {
    title,
    year,
    "category": category->title, 
    description,
    image, 
    tags,
    github,
    link
  }`;
  const projects = await client.fetch(query);
  return projects;
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section className="py-20">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-12 px-2">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#137fec]/10 text-[#137fec] text-[10px] font-black uppercase tracking-widest">
            Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg font-medium">Selected engineering and AI initiatives.</p>
        </div>
        
        <a href="/projects" className="hidden sm:flex text-[#137fec] font-bold text-sm hover:underline items-center gap-2 group transition-all">
          View all projects
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project: any, index: number) => (
          <div key={index} className="group flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 dark:border-white/5 bg-white dark:bg-[#0d1117] transition-all duration-500 hover:border-[#137fec]/30 hover:shadow-2xl hover:shadow-[#137fec]/5">
            
            {/* Image Section */}
            <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-800 relative overflow-hidden m-3 rounded-[1.5rem]">
              <img 
                src={urlFor(project.image).width(1000).url()} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 dark:bg-[#050505]/80 backdrop-blur-md text-[#137fec] text-[10px] font-black uppercase px-3 py-1.5 rounded-xl shadow-lg">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col p-6 pt-2 flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 dark:text-slate-500 text-xs font-black tracking-widest">{project.year}</span>
                <div className="flex gap-3">
                   {project.github && (
                     <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#137fec] transition-colors">
                       <Github size={19} />
                     </a>
                   )}
                   {project.link && (
                     <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#137fec] transition-colors">
                       <ExternalLink size={19} />
                     </a>
                   )}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#137fec] transition-colors tracking-tight">
                {project.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2 font-medium">
                {project.description}
              </p>

              {/* Tags & Footer */}
              <div className="mt-auto pt-5 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-3">
                {project.tags?.map((tag: string) => (
                  <span 
                    key={tag} 
                    className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider bg-slate-50 dark:bg-white/5 px-2 py-1 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile-only View All Link */}
      <div className="mt-12 flex justify-center sm:hidden">
        <a href="/projects" className="text-[#137fec] font-bold text-sm flex items-center gap-2 px-6 py-3 rounded-full bg-[#137fec]/5">
          View all projects <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}