import React from 'react';
import { BookOpen, Mic, Code2, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-zinc-800/80 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Monospace Section Marker */}
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-blue-500">//</span>
            <span>01. About & Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-12 max-w-3xl leading-tight">
            Turning curiosity into disciplined leadership and clean digital craft.
          </h2>

          {/* Narrative Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Main Bio Paragraphs */}
            <div className="lg:col-span-7 space-y-6 text-zinc-400 leading-relaxed text-base sm:text-lg">
              <p>
                I am <span className="text-white font-medium">Evan Matheesha</span>, a 14-year-old student at the renowned <span className="text-white font-medium">De Mazenod College</span>. My perspective is shaped by a balance of classical academic discipline, public leadership, and technical exploration.
              </p>
              <p>
                In communication and youth governance, I serve as the <span className="text-white font-medium">Sergeant at Arms (SAA)</span> and active member at the <span className="text-white font-medium">HCC Gavel Club</span> (affiliated with Toastmasters International). Here, I coordinate meeting decorum, practice parliamentary rules, and hone impromptu speaking confidence.
              </p>
              <p>
                Parallel to my school and club commitments, I am actively advancing my understanding of <span className="text-white font-medium">modern programming concepts</span> and web development. My goal is to build interfaces and applications that are intuitive, fast, and structured with clean architecture.
              </p>
            </div>

            {/* Core Focus Pillars Cards (Aashish Thakuri Dark Bento) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 text-blue-400 flex items-center justify-center shrink-0 border border-zinc-700">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      // Pillar 01
                    </div>
                    <h3 className="text-base font-bold text-white mt-0.5">Academic Rigor</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                      De Mazenod College student, former De Mazenod Edexel English Academy graduate, and on the path to Cambridge PET certification.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 text-blue-400 flex items-center justify-center shrink-0 border border-zinc-700">
                    <Mic className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      // Pillar 02
                    </div>
                    <h3 className="text-base font-bold text-white mt-0.5">HCC Gavel Club (SAA)</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                      Maintaining meeting decorum, managing room setup, and advancing stage presence through Toastmasters guidelines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-zinc-700 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 text-blue-400 flex items-center justify-center shrink-0 border border-zinc-700">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                      // Pillar 03
                    </div>
                    <h3 className="text-base font-bold text-white mt-0.5">Web Craft & Logic</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                      Diving into advanced programming paradigms, component systems, and crafting responsive user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
