import React from 'react';
import { ArrowUpRight, Folder, Github } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

// 1. Fetch Project Categories
async function getProjectCategories() {
  const query = `*[_type == "category" && type == "project"] {
    _id,
    title
  }`;
  return await client.fetch(query);
}

// 2. Fetch Projects with dereferenced category
async function getAllProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    description,
    "category": category->title, 
    image,
    tags,
    github,
    link
  }`;
  return await client.fetch(query);
}

export default async function ProjectsPage() {
  // Fetch both in parallel
  const [projects, categories] = await Promise.all([
    getAllProjects(),
    getProjectCategories()
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-[#137fec] font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <span className="size-2 rounded-full bg-[#137fec] animate-pulse" />
            Artifacts & Systems
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-6">
            Selected <span className="text-slate-400 dark:text-slate-600">Works.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A collection of technical systems, architectural designs, and high-performance 
            applications built with modern engineering principles.
          </p>
        </header>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-16">
          <button className="px-5 py-2 rounded-full bg-[#137fec] text-white text-xs font-bold uppercase tracking-widest">
            All Projects
          </button>
          {categories.map((cat: any) => (
            <button 
              key={cat._id} 
              className="px-5 py-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest hover:border-[#137fec] hover:text-[#137fec] transition-all"
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any) => (
            <div 
              key={project._id} 
              className="group relative bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-[#137fec] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                {project.image && (
                  <img 
                    src={urlFor(project.image).width(1200).url()} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex flex-col gap-1">
                    <div className="p-3 w-fit bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                      <Folder className="text-[#137fec]" size={20} />
                    </div>
                    {/* Displaying the Dereferenced Category */}
                    <span className="text-[10px] font-black text-[#137fec] uppercase tracking-tighter mt-2">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-slate-400 hover:text-[#137fec] transition-colors"
                      >
                        <ArrowUpRight size={22} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#137fec] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag: string) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-200/50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}