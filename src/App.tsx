import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp, Terminal, TerminalIcon, Sparkles } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import GithubWidget from "./components/GithubWidget";
import Contact from "./components/Contact";
import { PERSONAL_INFO } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Show or hide "scroll to top" button
      setShowScrollTop(window.scrollY > 400);

      // 2. Active section detection based on view position
      const sections = ["hero", "about", "skills", "projects", "experience", "social-hub", "contact"];
      const scrollPosition = window.scrollY + 200; // offset for better transition triggers

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setActiveSection("hero");
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-indigo-500/25 selection:text-indigo-200">
      
      {/* Structural Top Line Decoration */}
      <div id="top-decor-line" className="h-[3px] w-full bg-gradient-to-r from-indigo-500 via-zinc-800 to-indigo-500 fixed top-0 left-0 z-50 shadow-md shadow-indigo-500/10" />

      {/* Sticky Header Navbar */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Core Pages Container */}
      <main className="relative">
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <GithubWidget />
        <Contact />
      </main>

      {/* Elegant Standard Footer */}
      <footer id="main-footer" className="bg-[#0A0A0A] border-t border-zinc-900/50 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-zinc-900/50 pb-8">
            
            {/* Left brand name details */}
            <div className="text-center md:text-left">
              <h3 className="font-display font-black text-xl text-white tracking-tight flex items-center justify-center md:justify-start gap-2">
                <Terminal className="w-5 h-5 text-indigo-400" />
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-zinc-500 mt-1.5 font-medium">
                Membangun kualitas web responsif bermutu tinggi dengan dedikasi penuh.
              </p>
            </div>

            {/* Right micro detail list */}
            <div className="flex items-center gap-1.5 px-3.5 py-2 bg-[#0E0E0E] rounded-xl border border-zinc-900/60 font-mono text-[10px] text-zinc-500">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>Dikonfigurasi Menggunakan React 19 + Tailwind v4 + Motion</span>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-zinc-500 font-mono">
            <span>© 2026 {PERSONAL_INFO.name}. Hak Cipta Dilindungi Undang-Undang.</span>
            <div className="flex gap-4">
              <a href="https://github.com/Rif-del" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/rifki01/?skipRedirect=true" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://twitter.com/rifkhisiddo" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll-To-Top floating action icon */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="scroll-to-top-btn"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-xl hover:shadow-indigo-500/20 z-40 cursor-pointer border border-indigo-400/20 hover:scale-105 transition-transform focus:outline-none"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
      
    </div>
  );
}
