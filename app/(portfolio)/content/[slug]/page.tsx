import React from 'react';
import Link from 'next/link';
import { 
  Share2, ArrowLeft, Mail, ShieldCheck, 
  Facebook, Twitter, Linkedin 
} from 'lucide-react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';

// 1. Updated Fetch: Added category->title dereferencing
async function getArticle(slug: string) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    date,
    readTime,
    "category": category->title, 
    image,
    content,
    "excerpt": excerpt
  }`;
  
  return await client.fetch(query, { slug });
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function JournalDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold dark:text-white">Article not found</h2>
          <Link href="/content" className="text-[#137fec] font-bold">Return to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-32 pb-20 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* --- LEFT SIDEBAR: TOC & SHARE --- */}
        <aside className="hidden lg:block lg:col-span-2 sticky top-32 space-y-10">
          <Link href="/content" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#137fec] transition-colors">
            <ArrowLeft size={14} /> Back
          </Link>

          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white mb-6">
              Table of Contents
            </h3>
            <ul className="space-y-4 text-[13px] font-medium text-slate-500 border-l border-slate-100 dark:border-slate-800">
              <li className="pl-4 text-[#137fec] font-black">Introduction</li>
              <li className="pl-4 hover:text-[#137fec] cursor-pointer transition-all hover:translate-x-1">Analysis</li>
              <li className="pl-4 hover:text-[#137fec] cursor-pointer transition-all hover:translate-x-1">Conclusion</li>
            </ul>
          </div>

          <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
            <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-4">Share</h3>
            <div className="flex flex-col gap-4 text-slate-400">
              <Facebook size={18} className="hover:text-[#137fec] cursor-pointer transition-colors" />
              <Twitter size={18} className="hover:text-[#137fec] cursor-pointer transition-colors" />
              <Linkedin size={18} className="hover:text-[#137fec] cursor-pointer transition-colors" />
            </div>
          </div>
        </aside>

        {/* --- MIDDLE COLUMN: ARTICLE --- */}
        <main className="lg:col-span-7">
          <header className="mb-10 space-y-6">
            <nav className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#137fec] flex items-center gap-2">
              Journal <span className="text-slate-300">/</span> {article.category}
            </nav>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
              {article.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-y border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white text-xs font-bold">LS</div>
                <div>
                  <div className="text-sm font-black text-slate-900 dark:text-white">Luqman Salad</div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase">
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} • {article.readTime}
                  </div>
                </div>
              </div>
              <button className="p-2 rounded-lg bg-slate-50 dark:bg-slate-900 text-slate-400 hover:text-[#137fec]">
                <Share2 size={18} />
              </button>
            </div>

            <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 mt-8">
              {article.image && (
                <img 
                  src={urlFor(article.image).width(1200).url()} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                  alt={article.title}
                />
              )}
            </div>
          </header>

          <article className="prose prose-slate dark:prose-invert max-w-none 
            prose-p:text-lg prose-p:leading-relaxed prose-p:text-slate-600 dark:prose-p:text-slate-400
            prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-slate-900 dark:prose-headings:text-white
            prose-strong:text-[#137fec] dark:prose-strong:text-[#137fec]
            prose-a:text-[#137fec] prose-a:no-underline hover:prose-a:underline">
            
            <PortableText value={article.content} />
            
          </article>
        </main>

        {/* --- RIGHT SIDEBAR: SUBSCRIBE --- */}
        <aside className="hidden lg:block lg:col-span-3 sticky top-32">
          <div className="p-8 rounded-[2rem] bg-slate-900 dark:bg-[#0d1117] border border-slate-200 dark:border-slate-800 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="size-12 rounded-2xl bg-[#137fec]/10 flex items-center justify-center text-[#137fec]">
                <Mail size={24} />
              </div>
              <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-500 uppercase font-bold tracking-tighter">
                <ShieldCheck size={12} /> Verified Sync
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-white font-black uppercase tracking-tight text-xl leading-none">
                Get the <br /> <span className="text-[#137fec]">Full Log.</span>
              </h4>
              <p className="text-slate-400 text-xs font-medium leading-relaxed">
                Join 2,000+ engineers receiving deep-dives on AI & Production Engineering.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <input 
                type="email" 
                placeholder="operator@system.dev" 
                className="w-full bg-black/40 border border-slate-700 rounded-xl px-4 py-3 text-xs font-mono text-white outline-none focus:border-[#137fec] transition-colors"
              />
              <button className="w-full bg-[#137fec] text-white py-3.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#137fec] transition-all shadow-lg shadow-[#137fec]/20">
                Subscribe Now
              </button>
            </div>

            <p className="text-[9px] text-center text-slate-500 font-mono uppercase tracking-widest">
              No Spam. Just Code.
            </p>
          </div>
        </aside>

      </div>
    </div>
  );
}