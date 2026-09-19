import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Download,
  Terminal
} from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';

interface HeroProps {
  onCopySuccess: (text: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onCopySuccess }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      // Format in Sri Lanka time (Asia/Colombo UTC+5:30)
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Colombo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setCurrentTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    onCopySuccess(`Copied ${label} to clipboard!`);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleDownloadVCard = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${profileData.name}`,
      `EMAIL;TYPE=INTERNET:${profileData.email}`,
      `TEL;TYPE=CELL:${profileData.phone}`,
      `TITLE:Student & Sergeant at Arms`,
      `ORG:${profileData.school};HCC Gavel Club`,
      `NOTE:Age ${profileData.age}. Instagram: @${profileData.instagramHandle}`,
      `URL:${profileData.instagramUrl}`,
      'END:VCARD',
    ].join('\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'evan-matheesha.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onCopySuccess('Downloaded contact vCard (.vcf)!');
  };

  return (
    <section className="relative pt-16 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-grid-mesh" id="top">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05,
              }
            }
          }}
          className="flex flex-col items-start text-left max-w-4xl"
        >
          {/* Status & Live Telemetry Pill (Aashish Thakuri style) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            className="inline-flex flex-wrap items-center gap-3 px-4 py-2 rounded-full text-xs font-mono bg-zinc-900/90 border border-zinc-800 text-zinc-300 mb-8 shadow-inner"
          >
            <span className="flex items-center gap-2 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              AVAILABLE FOR IDEAS
            </span>
            <span className="text-zinc-700">//</span>
            <span className="text-zinc-400">COLOMBO, LK (GMT+5:30)</span>
            {currentTime && (
              <>
                <span className="text-zinc-700">//</span>
                <span className="text-zinc-200 font-mono tracking-wider">{currentTime}</span>
              </>
            )}
          </motion.div>

          {/* Main Title & Display Typography (Aashish Thakuri Signature Editorial Style) */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="space-y-1 mb-6"
          >
            <div className="text-sm font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>Personal Portfolio // 2026</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.06]">
              Evan Matheesha.
            </h1>
            <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-zinc-400 tracking-tight leading-[1.1]">
              Curious by nature.
            </div>
            <div className="text-3xl sm:text-5xl md:text-6xl font-bold text-blue-500 tracking-tight leading-[1.1]">
              Building by choice.
            </div>
          </motion.div>

          {/* Bio statement */}
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="text-base sm:text-xl text-zinc-300 max-w-3xl leading-relaxed mb-10 font-normal"
          >
            I am a 14-year-old student at <span className="text-white font-medium underline underline-offset-4 decoration-zinc-700">De Mazenod College</span> and 
            Sergeant at Arms (SAA) at <span className="text-white font-medium underline underline-offset-4 decoration-zinc-700">HCC Gavel Club</span>. 
            Currently exploring advanced programming concepts to engineer clean, expressive web experiences.
          </motion.p>

          {/* Primary Action Buttons */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="flex flex-wrap items-center gap-3.5 mb-14 w-full sm:w-auto"
          >
            {/* Direct Email */}
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={`mailto:${profileData.email}`}
              id="hero-email-btn"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-mono text-xs sm:text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 shadow-xl shadow-white/5 transition-all"
            >
              <Mail className="w-4 h-4 text-zinc-900" />
              <span>Say Hello</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700" />
            </motion.a>

            {/* Direct Call */}
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${profileData.phone}`}
              id="hero-phone-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 transition-all"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>0729258076</span>
            </motion.a>

            {/* Instagram Profile */}
            <motion.a
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              href={profileData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-instagram-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 transition-all group"
            >
              <span>@{profileData.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>

            {/* vCard download */}
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleDownloadVCard}
              id="hero-vcard-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm text-zinc-400 hover:text-white bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
              title="Download contact card"
            >
              <Download className="w-4 h-4" />
              <span>vCard</span>
            </motion.button>
          </motion.div>

          {/* System Telemetry & Role Grid (Aashish Thakuri style) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="w-full grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-10"
          >
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                // 01. Identity
              </div>
              <div className="text-sm font-semibold text-white">
                14 Y/O Student
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Aspiring Engineer
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                // 02. Institution
              </div>
              <div className="text-sm font-semibold text-white">
                De Mazenod College
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Secondary Education
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                // 03. Leadership
              </div>
              <div className="text-sm font-semibold text-white">
                HCC Gavel Club
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Sergeant at Arms (SAA)
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                // 04. Orbit
              </div>
              <div className="text-sm font-semibold text-white">
                Web Architecture
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">
                Advanced Concepts
              </div>
            </div>
          </motion.div>

          {/* Quick Copy Contact Strip */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="w-full bg-zinc-900/40 backdrop-blur-xs border border-zinc-800/90 rounded-2xl p-5 sm:p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Direct Access Terminals</span>
              </div>
              <div className="text-[11px] font-mono text-zinc-400">
                Click copy icon to copy
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {/* Email item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/90 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 text-blue-400 flex items-center justify-center shrink-0 border border-zinc-800">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Email</div>
                    <div className="text-xs sm:text-sm font-mono text-white truncate mt-0.5">
                      {profileData.email}
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleCopy(profileData.email, 'Email')}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors shrink-0 ml-2 cursor-pointer"
                  title="Copy email to clipboard"
                  id="copy-hero-email"
                >
                  {copiedField === 'Email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </motion.button>
              </div>

              {/* Phone item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/90 hover:border-zinc-700 transition-all">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 text-blue-400 flex items-center justify-center shrink-0 border border-zinc-800">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Telephone</div>
                    <div className="text-xs sm:text-sm font-mono text-white truncate mt-0.5">
                      {profileData.phone}
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleCopy(profileData.phone, 'Phone number')}
                  className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-lg transition-colors shrink-0 ml-2 cursor-pointer"
                  title="Copy phone to clipboard"
                  id="copy-hero-phone"
                >
                  {copiedField === 'Phone number' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
