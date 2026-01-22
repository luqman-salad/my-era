import React from 'react';
import { ArrowRight, Clock, ChevronRight } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

async function getLatestPosts() {
  // Updated query: category->title dereferences the reference to get the name
  const query = `*[_type == "blog"] | order(date desc)[0...3] {
    title,
    "slug": slug.current,
    excerpt,
    date,
    readTime,
    "category": category->title, 
    image
  }`;
  return await client.fetch(query);
}

export default async function Blog() {
  const articles = await getLatestPosts();

  return (
    <section className="py-24 bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#137fec]/10 text-[#137fec] text-[10px] font-black uppercase tracking-widest">
              Knowledge Base
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Latest from the Blog
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl font-medium">
              Weekly deep dives into AI engineering, web performance, and the future of tech.
            </p>
          </div>
          <Link href="/content" className="flex items-center gap-2 text-[#137fec] font-bold hover:gap-4 transition-all group">
            Visit Content Hub <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((post: any, index: number) => (
            <Link 
              href={`/content/${post.slug}`} 
              key={index} 
              className="group cursor-pointer flex flex-col bg-slate-50 dark:bg-[#0d1117] rounded-[2rem] p-4 border border-slate-200 dark:border-white/5 hover:border-[#137fec]/30 transition-all duration-500"
            >
              <article className="flex flex-col h-full">
                {/* Image Container */}
                <div className="relative aspect-[16/10] rounded-[1.5rem] overflow-hidden mb-6">
                  {post.image && (
                    <img 
                      src={urlFor(post.image).width(800).url()} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 dark:bg-[#050505]/80 backdrop-blur-md text-[#137fec] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-xl">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="px-2 flex items-center gap-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                {/* Content */}
                <div className="px-2 space-y-3 flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#137fec] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
                
                {/* Read More Link */}
                <div className="p-2 mt-6 flex items-center gap-1 text-sm font-bold text-[#137fec] group-hover:gap-3 transition-all border-t border-slate-200 dark:border-white/5 pt-6">
                  Read Article <ChevronRight size={16} />
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Bottom Action */}
        <div className="mt-20 text-center">
          <Link href="/content" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 font-bold text-sm hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all active:scale-95 group">
            Browse Archive
            <span className="opacity-30 group-hover:opacity-100 transition-opacity">/</span>
            <span className="text-[#137fec]">Explore all articles</span>
          </Link>
        </div>
      </div>
    </section>
  );
}