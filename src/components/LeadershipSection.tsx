import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';

export const LeadershipSection: React.FC = () => {
  const gavelInfo = profileData.leadership[0];

  return (
    <section id="leadership" className="py-24 md:py-32 border-t border-slate-200/80 bg-white relative">
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
              Leadership & Oratory
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            HCC Gavel Club
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mb-12 leading-relaxed">
            Cultivating leadership, speechcraft, and meeting governance through executive participation.
          </p>

          {/* Featured Leadership Highlight Card */}
          <motion.div 
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-gradient-to-br from-blue-50/70 via-white to-white border border-blue-200/90 rounded-3xl p-8 sm:p-10 md:p-12 shadow-sm transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-blue-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600 text-white mb-4 shadow-sm shadow-blue-600/20">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Executive Role</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {gavelInfo.title}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-blue-700 mt-1">
                  {gavelInfo.organization}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-left md:text-right">
                  <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Affiliation</div>
                  <div className="text-sm font-semibold text-slate-800 mt-0.5">Toastmasters Youth Affiliate</div>
                </div>
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-600/25">
                  <Award className="w-7 h-7" />
                </div>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Overview & Impact
                </h4>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {gavelInfo.description}
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  As an active member and Sergeant at Arms, regular participation involves delivering prepared speeches, impromptu speaking (Table Topics), providing peer evaluations, and strictly upholding parliamentary meeting decorum.
                </p>
              </div>

              <div className="lg:col-span-6 bg-white/80 backdrop-blur-xs rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5 flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  Key Responsibilities as SAA
                </h4>
                <ul className="space-y-4">
                  {gavelInfo.responsibilities.map((resp, idx) => (
                    <motion.li 
                      key={idx} 
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3 text-sm text-slate-700 transition-transform"
                    >
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
