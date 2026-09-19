import React from 'react';
import { Code2, Terminal, Mic, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface SkillCategory {
  index: string;
  category: string;
  icon: React.ElementType;
  skills: { name: string; detail: string }[];
}

export const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      index: '01',
      category: 'LANGUAGES & FOUNDATIONS',
      icon: Code2,
      skills: [
        { name: 'TypeScript', detail: 'Type systems & interface design' },
        { name: 'Modern JavaScript', detail: 'ESNext, async/await & DOM APIs' },
        { name: 'Semantic HTML5', detail: 'Accessible, clean document structures' },
        { name: 'Modern CSS3', detail: 'Flexbox, Grid & fluid layouts' }
      ]
    },
    {
      index: '02',
      category: 'FRAMEWORKS & SYSTEMS',
      icon: Layers,
      skills: [
        { name: 'React 19', detail: 'Functional components & hooks' },
        { name: 'Tailwind CSS', detail: 'Utility architectures & design tokens' },
        { name: 'Motion / Animations', detail: 'Fluid gestures & micro-interactions' },
        { name: 'Vite', detail: 'Modern bundling & dev experience' }
      ]
    },
    {
      index: '03',
      category: 'GAVEL LEADERSHIP & ORATORY',
      icon: Mic,
      skills: [
        { name: 'Sergeant at Arms Protocol', detail: 'Session decorum & administration' },
        { name: 'Table Topics', detail: 'Impromptu speaking & quick thinking' },
        { name: 'Speech Evaluation', detail: 'Constructive peer critique' },
        { name: 'Toastmasters Decorum', detail: 'Parliamentary meeting flow' }
      ]
    },
    {
      index: '04',
      category: 'ENGINEERING WORKFLOW',
      icon: Terminal,
      skills: [
        { name: 'VS Code & Extensions', detail: 'Optimized development environment' },
        { name: 'Git & Version Control', detail: 'Branching, commits & repository flow' },
        { name: 'Browser DevTools', detail: 'Element inspection & performance debugging' },
        { name: 'Terminal & CLI', detail: 'Shell navigation & package management' }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 border-t border-zinc-800/80 bg-zinc-950 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Marker */}
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-blue-500">//</span>
            <span>03. Skills in Orbit</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Technical stack, leadership & tools.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                A constellation of technologies, leadership competencies, and developer workflows I cultivate each day.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-400 hidden sm:block">
              [ ORBIT CONSTELLATION ]
            </div>
          </div>

          {/* 4 Bento Cards Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-6 sm:p-8 hover:border-zinc-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-blue-400 shadow-inner">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                            // {group.index}
                          </div>
                          <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wide">
                            {group.category}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {group.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start justify-between gap-3 p-3 rounded-xl bg-zinc-950/70 border border-zinc-800/70 hover:border-zinc-700 transition-colors"
                        >
                          <div>
                            <div className="text-xs sm:text-sm font-semibold text-zinc-200">
                              {skill.name}
                            </div>
                            <div className="text-[11px] text-zinc-400 font-mono mt-0.5">
                              {skill.detail}
                            </div>
                          </div>
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Aashish Thakuri-Style Manifesto Quote Box */}
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 relative overflow-hidden">
            <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Personal Operating Principle</span>
            </div>
            <blockquote className="text-xl sm:text-3xl font-display font-medium text-white tracking-tight leading-snug max-w-4xl">
              &ldquo;Every line of code is an idea brought into reality; every speech is a bridge of confidence built between people.&rdquo;
            </blockquote>
            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="text-blue-400">Evan Matheesha</span>
              <span>//</span>
              <span>De Mazenod College • HCC Gavel Club</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
