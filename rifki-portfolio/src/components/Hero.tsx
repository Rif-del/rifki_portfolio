import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDownRight, ArrowRight, Github, Linkedin, Sparkles, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeroProps {
  setActiveSection: (sec: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const titles = [
    "Full Stack Developer",
    "UI/UX Enthusiast",
    "AI Integration Specialist",
    "Creative Problem Solver"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = titles[currentTitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setTypedText(currentFullText.substring(0, typedText.length + 1));
        setTypingSpeed(100);

        if (typedText === currentFullText) {
          // Pause at full word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setTypedText(currentFullText.substring(0, typedText.length - 1));
        setTypingSpeed(50);

        if (typedText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTitleIndex]);

  const handleScrollToSec = (id: string) => {
    setActiveSection(id);
    const elem = document.getElementById(id);
    if (elem) {
      const offset = 80;
      const pos = elem.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Background Decorative Glowing Blobs */}
      <div id="glow-blob-1" className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse pointer-events-none" />
      <div id="glow-blob-2" className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] rounded-full bg-violet-500/10 blur-[130px] animate-pulse pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        id="hero-grid-pattern"
        className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Header Info */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status pill */}
            <motion.div
              id="status-pill"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-mono font-medium tracking-wider text-indigo-300">
                Tersedia Untuk Proyek & Kolaborasi
              </span>
            </motion.div>

            {/* Accent Hello */}
            <motion.h3
              id="hero-greeting"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-sm uppercase tracking-widest text-indigo-400 font-bold mb-3"
            >
              Halo, Saya
            </motion.h3>

            {/* Name */}
            <motion.h1
              id="hero-name"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight leading-none mb-4"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Typing Animation Title */}
            <motion.div
              id="hero-typing-wrap"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-10 sm:h-12 flex items-center text-xl sm:text-2xl font-mono text-indigo-300 font-medium mb-6"
            >
              <span>{typedText}</span>
              <span className="w-1.5 h-6 bg-indigo-400 ml-1.5 animate-bounce" />
            </motion.div>

            {/* Personal Biography */}
            <motion.p
              id="hero-bio"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8"
            >
              {PERSONAL_INFO.bio}
            </motion.p>

            {/* Social & Button Panel */}
            <motion.div
              id="hero-actions"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <button
                id="hero-cta-projects"
                onClick={() => handleScrollToSec("projects")}
                className="group flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 cursor-pointer focus:outline-none"
              >
                Lihat Portofolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                id="hero-cta-contact"
                onClick={() => handleScrollToSec("contact")}
                className="flex items-center gap-2 px-6 py-3 text-xs font-semibold text-zinc-300 hover:text-white bg-[#0E0E0E] border border-zinc-900 hover:border-zinc-800 rounded-xl transition-all duration-300 cursor-pointer focus:outline-none"
              >
                Hubungi Kontak
                <ArrowDownRight className="w-4 h-4 text-zinc-400" />
              </button>
            </motion.div>

            {/* Fast Stats info / Social mini link */}
            <motion.div
              id="hero-mini-socials"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-6 text-zinc-500 text-xs border-t border-zinc-900/50 pt-6 w-full max-w-md"
            >
              <span className="font-mono text-[10px] uppercase tracking-wider">Sosial Media:</span>
              <a
                id="hero-social-github"
                href="https://github.com/Rif-del"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span className="font-mono">github</span>
              </a>
              <a
                id="hero-social-linkedin"
                href="https://www.linkedin.com/in/rifki01/?skipRedirect=true"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span className="font-mono">linkedin</span>
              </a>
            </motion.div>

          </div>

          {/* Right Visual Element (Exquisite interactive terminal box) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Visual background card block */}
            <motion.div
              id="interactive-terminal-card"
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-full max-w-sm sm:max-w-md p-6 bg-[#0E0E0E] backdrop-blur-md border border-zinc-900/80 rounded-2xl shadow-2xl overflow-hidden group hover:border-indigo-500/30 transition-colors duration-300"
            >
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between border-b border-zinc-900/80 pb-4 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/70" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-[10px] tracking-wide">
                  <Terminal className="w-3.5 h-3.5 text-zinc-500" />
                  <span>rifkhi-explorer.sh</span>
                </div>
              </div>

              {/* Terminal Content Lines */}
              <div className="font-mono text-xs text-zinc-300 space-y-3.5 leading-relaxed">
                <div>
                  <span className="text-emerald-400">~/rifkhi-portfolio</span>
                  <span className="text-zinc-400 font-semibold mx-1.5">$</span>
                  <span className="text-slate-100">cat developer.json</span>
                </div>
                
                <div className="bg-[#0A0A0A]/40 p-4 rounded-xl border border-zinc-900/60 text-[11px] text-indigo-200/90 space-y-1">
                  <p className="text-neutral-500">{"{"}</p>
                  <p className="pl-4"><span className="text-rose-400">"status"</span>: <span className="text-amber-300">"Aktif Membangun"</span>,</p>
                  <p className="pl-4"><span className="text-rose-400">"peran"</span>: <span className="text-amber-300">"Full Stack / AI Integrator"</span>,</p>
                  <p className="pl-4"><span className="text-rose-400">"fokus"</span>: <span className="text-zinc-400">["React 19", "UI Animasi", "Express", "LLM APIs"]</span>,</p>
                  <p className="pl-4"><span className="text-rose-400">"filosofi"</span>: <span className="text-indigo-400">"Desain indah, performa kencang"</span></p>
                  <p className="text-neutral-500">{"}"}</p>
                </div>

                <div className="pt-2">
                  <span className="text-emerald-400">~/rifkhi-portfolio</span>
                  <span className="text-zinc-400 font-semibold mx-1.5">$</span>
                  <span className="text-slate-100 font-medium">nano core-stack.cfg</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-400">
                  <div className="flex items-center gap-1.5 px-2 py-1.5 rounded bg-[#0A0A0A]/30 border border-zinc-900/50">
                    <Sparkles className="w-3 h-3 text-indigo-400" />
                    <span>Gemini AI SDK</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 rounded bg-[#0A0A0A]/30 border border-zinc-900/50">
                    <Sparkles className="w-3 h-3 text-emerald-400" />
                    <span>React / TypeScript</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 rounded bg-[#0A0A0A]/30 border border-zinc-900/50">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1.5 rounded bg-[#0A0A0A]/30 border border-zinc-900/50">
                    <Sparkles className="w-3 h-3 text-purple-400" />
                    <span>Motion (Animations)</span>
                  </div>
                </div>

                {/* Animated typing prompt indicator */}
                <div className="flex items-center gap-1 text-zinc-500 text-[10px] pt-1">
                  <span className="text-emerald-500">~/rifkhi-portfolio</span>
                  <span className="text-zinc-400">$</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>

              {/* Decorative light circles on bottom corners */}
              <div className="absolute right-0 bottom-0 w-16 h-16 bg-gradient-to-tr from-indigo-500/10 to-transparent blur-md pointer-events-none" />
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
