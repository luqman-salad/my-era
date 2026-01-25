import React from 'react';
import { ArrowRight, Clock, ChevronRight, Inbox } from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

async function getLatestPosts() {
  const query = `*[_type == "blog"] | order(date desc)[0...3] {
    title,
    "slug": slug.current,
    excerpt,
    date,
    readTime,
    "category": category->title, 
    image
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function Blog() {
  const articles = await getLatestPosts();
  const hasContent = articles && articles.length > 0;

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
          {hasContent && (
            <Link href="/content" className="flex items-center gap-2 text-[#137fec] font-bold hover:gap-4 transition-all group">
              Visit Content Hub <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {hasContent ? (
          /* --- Blog Grid (Displayed when there is content) --- */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((post: any, index: number) => (
              <Link 
                href={`/content/${post.slug}`} 
                key={index} 
                className="group cursor-pointer flex flex-col bg-slate-50 dark:bg-[#0d1117] rounded-[2rem] p-4 border border-slate-200 dark:border-white/5 hover:border-[#137fec]/30 transition-all duration-500"
              >
                <article className="flex flex-col h-full">
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
                        {post.category || "Uncategorized"}
                      </span>
                    </div>
                  </div>

                  <div className="px-2 flex items-center gap-3 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </div>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  <div className="px-2 space-y-3 flex-grow">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#137fec] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="p-2 mt-6 flex items-center gap-1 text-sm font-bold text-[#137fec] group-hover:gap-3 transition-all border-t border-slate-200 dark:border-white/5 pt-6">
                    Read Article <ChevronRight size={16} />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          /* --- Feedback Section (Displayed when no blog posts exist) --- */
          <div className="flex flex-col items-center justify-center py-20 px-6 border-2 border-dashed border-slate-100 dark:border-slate-900 rounded-[3rem] bg-slate-50/50 dark:bg-transparent">
            <div className="p-6 rounded-full bg-slate-100 dark:bg-slate-900 mb-6">
              <Inbox className="text-slate-300 dark:text-slate-700" size={40} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 uppercase tracking-tight">
              Feed Is Quiet
            </h3>
            <p className="text-slate-500 dark:text-slate-500 font-mono text-xs uppercase tracking-[0.2em] text-center max-w-sm">
              Research and logs are being compiled. Check back soon for new deployments.
            </p>
          </div>
        )}

        {/* Bottom Action (Only visible if there is content) */}
        {hasContent && (
          <div className="mt-20 text-center">
            <Link href="/content" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 font-bold text-sm hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all active:scale-95 group">
              Browse Archive
              <span className="opacity-30 group-hover:opacity-100 transition-opacity">/</span>
              <span className="text-[#137fec]">Explore all articles</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}