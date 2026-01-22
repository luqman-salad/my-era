import React from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

// 1. Fetch Categories marked as "article"
async function getCategories() {
  const query = `*[_type == "category" && type == "article"] {
    _id,
    title,
    "slug": slug.current
  }`;
  return await client.fetch(query);
}

// 2. Fetch all blog posts with dereferenced category
async function getAllPosts() {
  const query = `*[_type == "blog"] | order(date desc) {
    _id,
    title,
    "slug": slug.current,
    "description": excerpt,
    date,
    "category": category->title, 
    image
  }`;
  return await client.fetch(query);
}

export default async function ContentPage() {
  // Fetch data in parallel for better performance
  const [articles, categories] = await Promise.all([
    getAllPosts(),
    getCategories()
  ]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        <header className="mb-16">
          <div className="flex items-center gap-2 text-[#137fec] font-mono text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles size={14} className="animate-pulse" />
            The Multi-Layered Mind
          </div>
          <h1 className="text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
            Journal <span className="text-slate-400 dark:text-slate-600">& Notes.</span>
          </h1>
        </header>

        {/* Categories Filter - Now Dynamic */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button className="px-4 py-1.5 rounded-full border border-[#137fec] bg-[#137fec]/10 text-[#137fec] text-sm font-bold transition-colors">
            All
          </button>
          {categories.map((cat: any) => (
            <button 
              key={cat._id} 
              className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 text-sm font-medium hover:border-[#137fec] hover:text-[#137fec] transition-colors dark:text-slate-300"
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-12">
          {articles.map((article: any) => (
            <div key={article._id} className="group relative grid md:grid-cols-5 gap-8 items-center p-4 -m-4 rounded-[2.5rem] hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-500">
              
              <Link href={`/content/${article.slug}`} className="absolute inset-0 z-10" aria-label={article.title} />

              {/* Thumbnail */}
              <div className="md:col-span-2 overflow-hidden rounded-3xl aspect-[16/9] border border-slate-100 dark:border-slate-800">
                {article.image && (
                   <img 
                    src={urlFor(article.image).width(1000).url()} 
                    alt={article.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                )}
              </div>

              {/* Text Content */}
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-widest text-[#137fec] mb-4">
                  <span className="bg-[#137fec]/10 px-2 py-1 rounded-md">{article.category}</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar size={12} /> {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 dark:text-white group-hover:text-[#137fec] transition-colors mb-4">
                  {article.title}
                </h2>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-xl">
                  {article.description}
                </p>

                <div className="inline-flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white group-hover:gap-4 transition-all">
                  Read Analysis <ArrowRight size={16} className="text-[#137fec]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}