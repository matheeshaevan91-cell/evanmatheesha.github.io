import React, { useState, useEffect } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl shadow-black/40 py-3.5' 
          : 'bg-zinc-950/40 backdrop-blur-xs border-b border-zinc-900/60 py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo & Identity */}
        <a 
          href="#top" 
          id="nav-logo"
          className="flex items-center gap-3.5 group text-left"
        >
          <motion.div 
            whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white font-mono font-bold text-sm tracking-wider shadow-inner group-hover:border-zinc-700 transition-colors"
          >
            EM
          </motion.div>
          <div>
            <div className="font-display font-bold text-white tracking-tight leading-tight group-hover:text-blue-400 transition-colors text-base">
              {profileData.name}
            </div>
            <div className="text-[11px] font-mono text-zinc-400 hidden sm:flex items-center gap-2 mt-0.5">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for ideas
              </span>
              <span className="text-zinc-600">•</span>
              <span>14 Y/O</span>
            </div>
          </div>
        </a>

        {/* Section Navigation Links (Aashish Thakuri Monospace Style) */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-mono text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors py-1 flex items-center gap-1.5 group">
            <span className="text-zinc-600 group-hover:text-blue-400 transition-colors">01.</span>
            <span>About</span>
          </a>
          <a href="#archive" className="hover:text-white transition-colors py-1 flex items-center gap-1.5 group">
            <span className="text-zinc-600 group-hover:text-blue-400 transition-colors">02.</span>
            <span>Archive</span>
          </a>
          <a href="#skills" className="hover:text-white transition-colors py-1 flex items-center gap-1.5 group">
            <span className="text-zinc-600 group-hover:text-blue-400 transition-colors">03.</span>
            <span>Orbit</span>
          </a>
          <a href="#contact" className="hover:text-white transition-colors py-1 flex items-center gap-1.5 group">
            <span className="text-zinc-600 group-hover:text-blue-400 transition-colors">04.</span>
            <span>Contact</span>
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.96 }}
            href={profileData.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-instagram-link"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-zinc-300 bg-zinc-900/90 hover:bg-zinc-800 hover:text-white border border-zinc-800 rounded-xl transition-all"
            title="Open Instagram"
          >
            <span>Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
          </motion.a>
          <motion.button
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            onClick={onContactClick}
            id="nav-contact-btn"
            className="inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2 text-xs font-mono font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-xl shadow-lg shadow-white/5 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-900" />
            <span>Connect</span>
          </motion.button>
        </div>
      </div>
    </header>
  );
};
