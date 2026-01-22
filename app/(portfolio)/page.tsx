import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import LatestPosts from '@/components/LatestPosts';
import LogoMarquee from '@/components/LogoMarquee';
import TechStack from '@/components/TechStack';
import Authority from '@/components/Authority';
import Newsletter from '@/components/Newsletter';
import ContactCTA from '@/components/ContactCTA';

// 1. Ensure it is a standard function or arrow function
export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <LogoMarquee />
        <TechStack />
        <FeaturedProjects />
        <Authority />
        <LatestPosts />
        <Newsletter />
        <ContactCTA />
      </div>
    </div>
  );
}

