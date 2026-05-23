import { useState } from "react";
import { motion } from "motion/react";
import { BrainCircuit, Cpu, LayoutGrid, Terminal } from "lucide-react";
import { SKILLS } from "../data";
import { Skill } from "../types";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"Semua" | "Frontend" | "Backend" | "Tools & Cloud">("Semua");

  const categoriesSet = ["Semua", "Frontend", "Backend", "Tools & Cloud"] as const;

  const filteredSkills = activeCategory === "Semua"
    ? SKILLS
    : SKILLS.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Frontend": return <LayoutGrid className="w-4 h-4" />;
      case "Backend": return <Cpu className="w-4 h-4" />;
      default: return <Terminal className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4"
          >
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>02 . KEAHLIAN TEKNIKAL</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Perangkat Kerja & <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Bahasa Andalan</span>
          </motion.h2>
          <div className="w-12 h-1 bg-violet-500 rounded-full mt-4" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoriesSet.map((cat) => (
            <button
              id={`skill-filter-${cat.replace(/\s+/g, "-")}`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 border focus:outline-none cursor-pointer ${
                activeCategory === cat
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-[#0E0E0E] border-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          id="skills-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto"
        >
          {filteredSkills.map((skill: Skill, index: number) => (
            <motion.div
              layout
              id={`skill-bar-${skill.name.replace(/\s+/g, "-")}`}
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className="p-4 bg-[#0E0E0E] border border-zinc-900 rounded-xl hover:border-zinc-800/80 transition-colors"
            >
              {/* Header Info */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-zinc-900 text-indigo-400 border border-zinc-800/80">
                    {getCategoryIcon(skill.category)}
                  </div>
                  <span className="text-sm font-semibold text-white">{skill.name}</span>
                </div>
                <span className="font-mono text-xs font-bold text-indigo-300">{skill.level}%</span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-2 bg-[#0A0A0A] rounded-full overflow-hidden border border-zinc-900/40">
                <motion.div
                  id={`skill-progress-line-${skill.name.replace(/\s+/g, "-")}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Accent Stats Line */}
        <div className="mt-16 text-center">
          <p className="text-zinc-500 text-xs font-mono max-w-md mx-auto">
            *Tingkat keahlian diukur berdasarkan pemahaman konseptual, durasi pengerjaan proyek berskala besar, serta kontribusi open-source.
          </p>
        </div>

      </div>
    </section>
  );
}
