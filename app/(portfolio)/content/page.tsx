"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, FileQuestion } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default function ContentPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const categoryQuery = `*[_type == "category" && type == "article"] {
        _id,
        title,
        "slug": slug.current
      }`;
      const postQuery = `*[_type == "blog"] | order(date desc) {
        _id,
        title,
        "slug": slug.current,
        "description": excerpt,
        date,
        "category": category->title, 
        image
      }`;

      const [postsData, categoriesData] = await Promise.all([
        client.fetch(postQuery),
        client.fetch(categoryQuery)
      ]);

      setArticles(postsData);
      setCategories(categoriesData);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  // Filter logic
  const filteredArticles = activeCategory === "All"
    ? articles
    : articles.filter(art => art.category === activeCategory);

  if (isLoading) return <div className="min-h-screen bg-white dark:bg-[#050505]" />;

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

        {/* Dynamic Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button 
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-1.5 rounded-full border text-sm font-bold transition-all ${
              activeCategory === "All"
              ? "border-[#137fec] bg-[#137fec]/10 text-[#137fec]"
              : "border-slate-200 dark:border-slate-800 text-slate-500 hover:border-[#137fec] hover:text-[#137fec]"
            }`}
          >
            All
          </button>
          {categories.map((cat: any) => (
            <button 
              key={cat._id} 
              onClick={() => setActiveCategory(cat.title)}
              className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all ${
                activeCategory === cat.title
                ? "border-[#137fec] bg-[#137fec]/10 text-[#137fec]"
                : "border-slate-200 dark:border-slate-800 dark:text-slate-300 hover:border-[#137fec] hover:text-[#137fec]"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Content Grid / Empty Feedback */}
        <div className="grid grid-cols-1 gap-12">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article: any) => (
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
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-xl line-clamp-2">
                    {article.description}
                  </p>

                  <div className="inline-flex items-center gap-2 font-bold text-sm text-slate-900 dark:text-white group-hover:gap-4 transition-all">
                    Read Analysis <ArrowRight size={16} className="text-[#137fec]" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* --- EMPTY STATE FEEDBACK --- */
            <div className="py-24 flex flex-col items-center justify-center border-2 border-dashed border-slate-100 dark:border-slate-900 rounded-[3rem] text-center">
              <div className="size-16 bg-slate-50 dark:bg-slate-900 flex items-center justify-center rounded-2xl mb-6">
                <FileQuestion className="text-slate-300 dark:text-slate-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">No Entries in {activeCategory}</h3>
              <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mt-2">
                The archives for this segment are currently empty.
              </p>
              <button 
                onClick={() => setActiveCategory("All")}
                className="mt-6 text-[#137fec] text-[10px] font-black uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
              >
                Return_to_Main
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}