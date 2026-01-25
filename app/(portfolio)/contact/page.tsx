"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Send, Facebook, Loader2, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] pt-32 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* --- LEFT SIDE: Contact Info --- */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Let’s Collaborate
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium max-w-md leading-relaxed">
              Have a project in mind or want to discuss the future of AI? I’m always open to new opportunities and technical deep dives.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="flex items-center gap-5 group">
              <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-[#137fec] ring-1 ring-slate-200 dark:ring-white/5 group-hover:bg-[#137fec] group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Email Me</p>
                <p className="text-base font-bold text-slate-900 dark:text-white tracking-tight">luqmansalad00@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="size-12 rounded-full bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-[#137fec] ring-1 ring-slate-200 dark:ring-white/5 group-hover:bg-[#137fec] group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Based In</p>
                <p className="text-base font-bold text-slate-900 dark:text-white tracking-tight">Mogadishu, BN,</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4 pt-4">
            <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Connect with me</p>
            <div className="flex gap-4">
              {[
                { icon: <Github size={20} />, href: "https://github.com/luqman-salad" },
                { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/luqmansalad" },
                { icon: <Twitter size={20} />, href: "https://twitter.com/luqman_salad" },
                { icon: <Facebook size={20} />, href: "https://facebook.com/luqmansalad00" },
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="size-10 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-white hover:bg-slate-800 dark:hover:bg-slate-800 transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: The Form Card --- */}
        <div className="lg:col-span-7">
          <div className="bg-slate-50 dark:bg-[#0d1117] border border-slate-200 dark:border-white/5 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transition-colors duration-300">
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
                <div className="size-20 rounded-full bg-[#137fec]/10 flex items-center justify-center text-[#137fec]">
                  <CheckCircle2 size={40} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">Message Sent</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-mono text-xs uppercase tracking-widest mt-2">
                    Uplink established successfully.
                  </p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                >
                  New_Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-900 dark:text-white px-1">Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe" 
                      className="w-full bg-white dark:bg-[#161b22] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-[#137fec]/50 transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-900 dark:text-white px-1">Email</label>
                    <input 
                      required
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com" 
                      className="w-full bg-white dark:bg-[#161b22] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-[#137fec]/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-900 dark:text-white px-1">Subject</label>
                  <input 
                    required
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="Project Inquiry" 
                    className="w-full bg-white dark:bg-[#161b22] border border-slate-200 dark:border-white/10 rounded-xl px-5 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-[#137fec]/50 transition-all"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-900 dark:text-white px-1">Message</label>
                  <textarea 
                    required
                    rows={6} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell me about your vision..." 
                    className="w-full bg-white dark:bg-[#161b22] border border-slate-200 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:ring-2 focus:ring-[#137fec]/50 transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-xs font-mono uppercase tracking-tighter">
                    Error: Transmission failed. Please try again.
                  </p>
                )}

                <button 
                  disabled={status === 'loading'}
                  type="submit" 
                  className="w-full bg-[#137fec] hover:bg-[#1b8eff] text-white py-5 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 transition-all group shadow-lg shadow-[#137fec]/20 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>Processing <Loader2 size={18} className="animate-spin" /></>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}