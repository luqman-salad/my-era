"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Folder, Github, SearchX, Star } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const categoryQuery = `*[_type == "category" && type == "project"] { _id, title }`;
      
      // UPDATED QUERY: 
      // 1. Featured first
      // 2. orderId 1, 2, 3... (asc)
      // 3. Newest fallback
      const projectQuery = `*[_type == "project"] | order(isFeatured desc, orderId asc, _createdAt desc) {
        _id,
        title,
        description,
        orderId,
        isFeatured,
        "category": category->title, 
        image,
        tags,
        github,
        link
      }`;

      const [projectsData, categoriesData] = await Promise.all([
        client.fetch(projectQuery),
        client.fetch(categoryQuery)
      ]);

      setProjects(projectsData);
      setCategories(categoriesData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const filteredProjects = activeCategory === "All Projects"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  if (isLoading) return <div className="min-h-screen bg-white dark:bg-[#050505]" />;

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
          <button 
            onClick={() => setActiveCategory("All Projects")}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              activeCategory === "All Projects" 
              ? "bg-[#137fec] text-white shadow-lg shadow-blue-500/20" 
              : "border border-slate-200 dark:border-slate-800 text-slate-500 hover:border-[#137fec] hover:text-[#137fec]"
            }`}
          >
            All Projects
          </button>
          {categories.map((cat: any) => (
            <button 
              key={cat._id} 
              onClick={() => setActiveCategory(cat.title)}
              className={`px-5 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${
                activeCategory === cat.title
                ? "bg-[#137fec] border-[#137fec] text-white shadow-lg shadow-blue-500/20"
                : "border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:border-[#137fec] hover:text-[#137fec]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: any) => (
              <div 
                key={project._id} 
                className="group relative bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden hover:border-[#137fec] transition-all duration-500"
              >
                {/* Image Container */}
                <div className="aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
                  {project.image && (
                    <img 
                      src={urlFor(project.image).width(1200).url()} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  )}
                  {/* Featured Star Badge */}
                  {project.isFeatured && (
                    <div className="absolute top-4 right-4 bg-[#137fec] p-2 rounded-xl shadow-xl">
                      <Star size={14} className="text-white fill-white" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col gap-1">
                      <div className="p-3 w-fit bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                        <Folder className="text-[#137fec]" size={20} />
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-[10px] font-black text-[#137fec] uppercase tracking-tighter">
                          {project.category}
                        </span>
                        {project.orderId && (
                           <span className="text-[9px] font-mono text-slate-400 dark:text-slate-600">
                             SYS_0{project.orderId}
                           </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                          <Github size={20} />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" className="text-slate-400 hover:text-[#137fec] transition-colors">
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

                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag: string) => (
                      <span key={tag} className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-200/50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-32 px-6 border-2 border-dashed border-slate-100 dark:border-slate-900 rounded-[3rem]">
            <div className="p-6 rounded-full bg-slate-50 dark:bg-slate-900/50 mb-6">
              <SearchX className="text-slate-300 dark:text-slate-700" size={48} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight">
              No Artifacts Found
            </h3>
            <p className="text-slate-500 dark:text-slate-500 font-mono text-sm uppercase tracking-widest text-center max-w-xs">
              This system node is currently empty. Check back for updates.
            </p>
            <button 
              onClick={() => setActiveCategory("All Projects")}
              className="mt-8 text-[#137fec] text-xs font-black uppercase tracking-[0.2em] hover:underline"
            >
              Reset_Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}