import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Command, Code2 } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "Beranda" },
    { id: "about", label: "Tentang" },
    { id: "skills", label: "Keahlian" },
    { id: "projects", label: "Proyek" },
    { id: "experience", label: "Eksperiens" },
    { id: "social-hub", label: "Hub Sosial" },
    { id: "contact", label: "Hubungi" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="navbar-widget"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/85 backdrop-blur-md border-b border-zinc-900/50 shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="logo-btn"
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none"
          >
            <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/30 group-hover:border-indigo-500 group-hover:bg-indigo-500/20 transition-all duration-300">
              <Code2 className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight bg-gradient-to-r from-white via-zinc-100 to-indigo-200 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </button>

          {/* Desktop Nav */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-zinc-900/40 border border-zinc-800/40 p-1.5 rounded-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  id={`nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-300 cursor-pointer focus:outline-none ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-indigo-600 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Call To Action */}
          <div className="hidden md:block">
            <button
              id="cta-contact-btn"
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-500/10 hover:bg-indigo-600 border border-indigo-500/30 hover:border-indigo-500 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer focus:outline-none"
            >
              Hubungi Saya
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-800/65 transition-colors focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-zinc-900/60 bg-[#0E0E0E]/98 backdrop-blur-xl absolute top-full left-0 w-full overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-6">
              {navItems.map((item, index) => (
                <button
                  id={`mobile-nav-link-${item.id}`}
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left block px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    activeSection === item.id
                      ? "bg-indigo-600 text-white shadow-md font-semibold"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/65"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  id="mobile-cta-contact-btn"
                  onClick={() => scrollToSection("contact")}
                  className="w-full py-2.5 text-center text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl shadow-md cursor-pointer focus:outline-none"
                >
                  Hubungi Saya
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
