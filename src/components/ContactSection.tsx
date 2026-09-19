import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ExternalLink, 
  Download, 
  Send, 
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'motion/react';
import { profileData } from '../data/profile';

interface ContactSectionProps {
  onCopySuccess: (message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopySuccess }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [noteSent, setNoteSent] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    onCopySuccess(`Copied ${label} to clipboard!`);
    setTimeout(() => {
      setCopiedKey(null);
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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const mailtoSubject = encodeURIComponent(
      subject.trim() ? `[Portfolio Message] ${subject}` : `Hello from ${senderName || 'Visitor'}`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Evan,\n\n${message}\n\nFrom: ${senderName || 'Visitor'}`
    );

    window.location.href = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setNoteSent(true);
    setTimeout(() => setNoteSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-zinc-800/80 bg-zinc-950 relative">
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
            <span>04. Intake & Connect</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Let&apos;s build, converse, or connect.
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Open to discussions about school projects, Toastmasters Gavel Club activities, and web development ideas.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-400 hidden sm:block">
              [ DIRECT COMM LINK ]
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            {/* Direct Terminals Column */}
            <div className="lg:col-span-6 space-y-4">
              {/* Email Terminal Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                        // Electronic Mail
                      </div>
                      <div className="text-sm sm:text-base font-mono font-semibold text-white truncate max-w-[240px] sm:max-w-none">
                        {profileData.email}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/70">
                  <a
                    href={`mailto:${profileData.email}`}
                    id="direct-send-email-btn"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Mail</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(profileData.email, 'Email address')}
                    id="copy-contact-email-btn"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-300 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 transition-all cursor-pointer"
                  >
                    {copiedKey === 'Email address' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Terminal Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-blue-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">
                        // Voice Line
                      </div>
                      <div className="text-sm sm:text-base font-mono font-semibold text-white">
                        {profileData.phone}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/70">
                  <a
                    href={`tel:${profileData.phone}`}
                    id="direct-call-phone-btn"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Now</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(profileData.phone, 'Phone number')}
                    id="copy-contact-phone-btn"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-300 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 transition-all cursor-pointer"
                  >
                    {copiedKey === 'Phone number' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Instagram & vCard Duo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={profileData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-instagram-card-btn"
                  className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      // Social
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="text-sm font-mono font-bold text-white group-hover:text-blue-400 transition-colors">
                    @{profileData.instagramHandle}
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1">
                    Instagram Profile ↗
                  </div>
                </a>

                <button
                  type="button"
                  onClick={handleDownloadVCard}
                  id="contact-download-vcard-btn"
                  className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all flex flex-col justify-between text-left group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      // Contact Card
                    </span>
                    <Download className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-sm font-mono font-bold text-white group-hover:text-white transition-colors">
                    Download vCard
                  </div>
                  <div className="text-[11px] text-zinc-400 mt-1">
                    Direct sync (.vcf)
                  </div>
                </button>
              </div>
            </div>

            {/* Terminal Message Composer Box */}
            <div className="lg:col-span-6 bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-blue-400" />
                    <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                      Message Console
                    </h3>
                  </div>
                  <div className="text-[10px] font-mono text-zinc-400">
                    STATUS: READY
                  </div>
                </div>
                <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                  Compose a dispatch below to automatically populate and launch your default email client.
                </p>

                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1.5 uppercase">
                      Sender Name / Organization
                    </label>
                    <input
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Fellow Gavelier, De Mazenod Peer, Visitor"
                      className="w-full px-3.5 py-2 text-xs font-mono bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-hidden focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1.5 uppercase">
                      Subject Matter
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Gavel Club, Programming Inquiry, Collaboration"
                      className="w-full px-3.5 py-2 text-xs font-mono bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-hidden focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-zinc-400 mb-1.5 uppercase">
                      Message Content
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message here..."
                      className="w-full px-3.5 py-2 text-xs font-mono bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-hidden focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    id="send-message-form-btn"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-mono font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all cursor-pointer shadow-lg shadow-white/5"
                  >
                    <Send className="w-3.5 h-3.5 text-zinc-900" />
                    <span>Dispatch to Mail Client</span>
                  </motion.button>

                  {noteSent && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs font-mono text-emerald-300 mt-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Message formatted & client dispatched!</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
