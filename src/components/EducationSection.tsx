import React from 'react';
import { GraduationCap, Award, CheckCircle2, Clock, BookMarked } from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-slate-200/80 bg-slate-50/60 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Academic Background
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
            Academic foundation at De Mazenod College, alongside specialized English language certifications and academy training.
          </p>

          {/* Education Cards with Stagger & Fluid Hover */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profileData.education.map((item, index) => {
              const isCurrent = item.status === 'Current';
              const isInProgress = item.status === 'In Progress';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className={`bg-white rounded-3xl p-7 sm:p-8 border flex flex-col justify-between shadow-sm transition-all ${
                    isCurrent
                      ? 'border-blue-300 shadow-blue-500/5 ring-1 ring-blue-500/10'
                      : 'border-slate-200/90 hover:border-blue-200 hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Status & Period Badge */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                          isCurrent
                            ? 'bg-blue-50 text-blue-700 border border-blue-200'
                            : isInProgress
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-slate-100 text-slate-700 border border-slate-200'
                        }`}
                      >
                        {isCurrent && <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />}
                        {isInProgress && <Clock className="w-3.5 h-3.5 text-amber-600" />}
                        {!isCurrent && !isInProgress && <CheckCircle2 className="w-3.5 h-3.5 text-slate-500" />}
                        <span>{item.status}</span>
                      </span>

                      <span className="text-xs font-medium text-slate-400">
                        {item.period}
                      </span>
                    </div>

                    {/* Institution & Role */}
                    <div className="mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-4 shadow-2xs">
                        {item.id === 'dmc' ? (
                          <GraduationCap className="w-6 h-6" />
                        ) : item.id === 'pet-cert' ? (
                          <Award className="w-6 h-6" />
                        ) : (
                          <BookMarked className="w-6 h-6" />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug">
                        {item.institution}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-1">
                        {item.role}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="pt-5 border-t border-slate-100 space-y-2.5">
                      {item.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <span className="text-blue-600 font-bold shrink-0 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
