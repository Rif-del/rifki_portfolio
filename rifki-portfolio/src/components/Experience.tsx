import { useState } from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, GraduationCap, History, Sparkles } from "lucide-react";
import { EXPERIENCES } from "../data";
import { Experience as ExperienceType } from "../types";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<"all" | "work" | "education">("all");

  const filteredExperiences = activeTab === "all"
    ? EXPERIENCES
    : EXPERIENCES.filter(exp => exp.type === activeTab);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      
      {/* Background blobs */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4"
          >
            <History className="w-3.5 h-3.5" />
            <span>04 . RIWAYAT KARIR</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Petualangan Profesional & <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Akademis</span>
          </motion.h2>
          <div className="w-12 h-1 bg-violet-500 rounded-full mt-4" />
        </div>

        {/* Filters Toggles */}
        <div className="flex justify-center gap-3 mb-16">
          <div className="bg-[#0E0E0E] p-1 rounded-xl border border-zinc-900 flex items-center">
            <button
              id="exp-filter-all"
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors focus:outline-none cursor-pointer ${
                activeTab === "all" ? "bg-indigo-600 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Semua Riwayat
            </button>
            <button
              id="exp-filter-work"
              onClick={() => setActiveTab("work")}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors focus:outline-none cursor-pointer ${
                activeTab === "work" ? "bg-indigo-600 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Pekerjaan
            </button>
            <button
              id="exp-filter-education"
              onClick={() => setActiveTab("education")}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors focus:outline-none cursor-pointer ${
                activeTab === "education" ? "bg-indigo-600 text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              Pendidikan
            </button>
          </div>
        </div>

        {/* Timeline representation */}
        <div className="relative max-w-3xl mx-auto pl-6 sm:pl-8 border-l-2 border-zinc-900/80 space-y-12">
          {filteredExperiences.map((exp: ExperienceType, index: number) => {
            const IsWork = exp.type === "work";
            return (
              <motion.div
                id={`exp-timeline-node-${exp.id}`}
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Visual Circle Bubble marker on the Left margin */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 p-1.5 sm:p-2 rounded-full border bg-[#0A0A0A] transition-all duration-300 group-hover:scale-110 group-hover:border-indigo-500 text-zinc-400 group-hover:text-indigo-400 border-zinc-900 shadow-md">
                  {IsWork ? <Briefcase className="w-4 h-4 sm:w-4 sm:h-4" /> : <GraduationCap className="w-4 h-4 sm:w-4 sm:h-4" />}
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 bg-[#0E0E0E] border border-zinc-900 rounded-2xl hover:border-zinc-800/80 transition-colors shadow-lg">
                  
                  {/* Job/School Title Info Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-indigo-400 font-semibold">{exp.company}</p>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0A0A0A] border border-zinc-900 rounded-lg text-zinc-400 text-xs font-mono shrink-0 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul id={`exp-bullets-${exp.id}`} className="space-y-2.5 text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 list-none pl-0">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-400 mt-2 shrink-0 animate-pulse" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 bg-indigo-500/5 text-indigo-300/80 border border-indigo-500/20 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
