import React from 'react';
import { ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950 py-12 sm:py-16 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-zinc-800/60">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-zinc-400 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>EVAN MATHEESHA • INDEX 2025</span>
            </div>
            <p className="text-sm text-zinc-400 max-w-md font-sans">
              Student at De Mazenod College, Sergeant at Arms at HCC Gavel Club.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-zinc-400">
            <a
              href={profileData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              [ INSTAGRAM ↗ ]
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-white transition-colors"
            >
              [ EMAIL ↗ ]
            </a>
            <a
              href={`tel:${profileData.phone}`}
              className="hover:text-white transition-colors"
            >
              [ {profileData.phone} ]
            </a>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              id="footer-scroll-top-btn"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
            </motion.button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-400">
          <div>
            COORDINATES: SRI LANKA (6.9271° N, 79.8612° E)
          </div>
          <div>
            HANDCRAFTED WITH PRECISION • EVAN MATHEESHA
          </div>
        </div>
      </div>
    </footer>
  );
};
