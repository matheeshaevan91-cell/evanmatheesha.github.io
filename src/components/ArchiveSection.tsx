import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, ChevronDown, Sparkles, Award, GraduationCap, BookOpen, Code2 } from 'lucide-react';
import { profileData } from '../data/profile';

interface ArchiveItem {
  number: string;
  category: string;
  title: string;
  role: string;
  affiliation: string;
  status: string;
  statusColor: string;
  period: string;
  description: string;
  extendedDetails: string[];
  tags: string[];
}

export const ArchiveSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const archiveItems: ArchiveItem[] = [
    {
      number: '01',
      category: 'LEADERSHIP & GOVERNANCE',
      title: 'HCC Gavel Club',
      role: 'Sergeant at Arms (SAA) & Active Member',
      affiliation: 'Toastmasters International Youth Affiliate',
      status: 'Active Executive',
      statusColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      period: '2025 — Present',
      description: 'Serving as Sergeant at Arms, upholding parliamentary decorum, managing room logistics, and advancing public speaking and impromptu speechcraft (Table Topics) under Toastmasters International youth guidelines.',
      extendedDetails: [
        'Enforcing meeting decorum, punctuality, and parliamentary procedures during official Gavel sessions.',
        'Executing room readiness, physical stage management, and executive meeting administration.',
        'Participating as an active speaker, speech evaluator, and Table Topics impromptu speaker.',
        'Fostering a supportive, encouraging platform for fellow youth leaders and orators.'
      ],
      tags: ['Toastmasters Affiliate', 'SAA Executive', 'Meeting Decorum', 'Table Topics', 'Parliamentary Rules']
    },
    {
      number: '02',
      category: 'ACADEMIC FOUNDATION',
      title: 'De Mazenod College',
      role: 'Secondary School Student',
      affiliation: 'Premier Catholic Educational Institution',
      status: 'Current Student',
      statusColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      period: 'Active',
      description: 'Pursuing comprehensive secondary education with an emphasis on analytical reasoning, academic discipline, and active contribution to the Mazenodian school ethos.',
      extendedDetails: [
        'Balanced commitment to curriculum excellence and analytical problem-solving.',
        'Active participant in school community events and ethical student governance.',
        'Developing foundational competence in mathematical and scientific disciplines.'
      ],
      tags: ['De Mazenod College', 'Academic Rigor', 'Analytical Thinking', 'Secondary Education']
    },
    {
      number: '03',
      category: 'LANGUAGE & CERTIFICATION',
      title: 'Cambridge Assessment English',
      role: 'PET (Preliminary English Test) Level Certification',
      affiliation: 'Cambridge University Press & Assessment',
      status: 'In Progress / Candidate',
      statusColor: 'text-amber-400 border-amber-500/30 bg-amber-500/10',
      period: 'Candidate',
      description: 'Actively preparing for the Cambridge Preliminary English Test (CEFR B1 level), systematically elevating written composition, listening comprehension, and formal conversational fluency.',
      extendedDetails: [
        'Targeting Cambridge CEFR B1 benchmark for international linguistic competency.',
        'Rigorous drills in formal essays, structured comprehension, and grammatical accuracy.',
        'Practicing spontaneous verbal articulation and professional communication.'
      ],
      tags: ['Cambridge English', 'PET Level Candidate', 'CEFR B1', 'Formal Composition', 'Fluency']
    },
    {
      number: '04',
      category: 'ACADEMY GRADUATE',
      title: 'De Mazenod Edexel English Academy',
      role: 'English Academy Graduate & Alumnus',
      affiliation: 'Language & Speech Academy',
      status: 'Completed',
      statusColor: 'text-zinc-400 border-zinc-700 bg-zinc-800/40',
      period: 'Graduate',
      description: 'Graduated from structured foundational and intermediate English language coursework, mastering linguistic grammar, composition, and presentation techniques.',
      extendedDetails: [
        'Completed structured curriculum covering syntactical precision and spoken clarity.',
        'Developed early foundational confidence for subsequent public speaking at Gavel Club.'
      ],
      tags: ['Edexel Academy', 'Academy Graduate', 'Grammar Mastery', 'Speech Foundations']
    },
    {
      number: '05',
      category: 'SOFTWARE & DEVELOPMENT',
      title: 'Advanced Programming & Web Engineering',
      role: 'Web Developer & Independent Learner',
      affiliation: 'Self-Directed Engineering & Modern Tech',
      status: 'Actively Building',
      statusColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      period: 'Ongoing',
      description: 'Exploring modern programming paradigms, component-driven UI architecture, TypeScript type safety, and responsive design systems to create fast, human-centered interfaces.',
      extendedDetails: [
        'Designing modular frontends with React, modern JavaScript (ESNext), and Tailwind CSS.',
        'Experimenting with state management, layout transitions, and micro-interactions.',
        'Applying clean code principles, semantic HTML, and performant asset loading.'
      ],
      tags: ['TypeScript', 'React', 'Tailwind CSS', 'Web Architecture', 'Clean Code']
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="archive" className="py-24 md:py-32 border-t border-zinc-800/80 bg-zinc-950 relative">
      {/* Anchor for backward compatibility with #education and #leadership */}
      <div id="education" className="absolute -top-10" />
      <div id="leadership" className="absolute -top-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Marker (Aashish Thakuri Style) */}
          <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            <span className="text-blue-500">//</span>
            <span>02. Selected Archive / Pursuits</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Academic foundation, club leadership & code.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                A timeline of educational milestones at De Mazenod College, executive service at HCC Gavel Club, and technical explorations.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-400 hidden sm:block">
              [ 05 ARCHIVES INDEXED ]
            </div>
          </div>

          {/* Editorial Archive List Cards */}
          <div className="space-y-4">
            {archiveItems.map((item, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className="rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all overflow-hidden"
                >
                  <div
                    onClick={() => toggleExpand(index)}
                    className="p-6 sm:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 group"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      {/* Big Monospace Index */}
                      <span className="text-2xl sm:text-3xl font-mono font-bold text-zinc-400 group-hover:text-blue-400 transition-colors shrink-0 pt-0.5">
                        {item.number}
                      </span>

                      <div>
                        {/* Category & Status Pill */}
                        <div className="flex flex-wrap items-center gap-2.5 mb-2">
                          <span className="text-[11px] font-mono tracking-wider text-blue-400 uppercase">
                            // {item.category}
                          </span>
                          <span className="text-zinc-700">•</span>
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono border ${item.statusColor}`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            {item.status}
                          </span>
                        </div>

                        {/* Title & Role */}
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-zinc-300 mt-1">
                          {item.role} <span className="text-zinc-400">({item.affiliation})</span>
                        </p>

                        <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed max-w-3xl">
                          {item.description}
                        </p>

                        {/* Tag Chips */}
                        <div className="flex flex-wrap gap-2 mt-4">
                          {item.tags.map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-950/80 border border-zinc-800 text-zinc-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expand Trigger Icon */}
                    <div className="flex items-center justify-between md:justify-end gap-3 pt-4 md:pt-0 border-t md:border-t-0 border-zinc-800/60">
                      <span className="text-[11px] font-mono text-zinc-400 group-hover:text-zinc-300">
                        {isExpanded ? '[ Collapse ]' : '[ Inspect ]'}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:text-white"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Collapsible Details Drawer */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2 border-t border-zinc-800/80 bg-zinc-950/60"
                      >
                        <div className="pt-4">
                          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                            <span>Detailed Operational Scope & Achievements</span>
                          </h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {item.extendedDetails.map((detail, dIdx) => (
                              <li
                                key={dIdx}
                                className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/80"
                              >
                                <span className="text-blue-400 font-mono mt-0.5">›</span>
                                <span className="leading-snug">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
