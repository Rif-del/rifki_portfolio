import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, ExternalLink, Github, Info, Layers, X } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const categories = ["Semua", "Frontend", "Full Stack", "AI & Machine Learning", "Mobile"];

  const filteredProjects = activeCategory === "Semua"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0A0A0A] border-b border-zinc-900/50">
      
      {/* Background radial highlight */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[450px] h-[450px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>03 . PORTFOLIO PROYEK</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Menyulap Ide Kreatif Menjadi <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Karya Nyata</span>
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-4" />
        </div>

        {/* Filters Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              id={`project-filter-${cat.replace(/\s+/g, "-")}`}
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

        {/* Projects Grid Container */}
        <motion.div
          id="projects-grid"
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index: number) => (
              <motion.div
                id={`project-card-${project.id}`}
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between bg-[#0E0E0E] border border-zinc-900/80 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-colors shadow-lg"
              >
                {/* Project Screen Image */}
                <div className="relative aspect-video w-full overflow-hidden bg-[#121212]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill Overlaid */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono tracking-wider font-semibold uppercase px-2.5 py-1 bg-[#121212]/90 backdrop-blur-md text-indigo-300 rounded-full border border-zinc-905/70">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Info Block */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 bg-[#0A0A0A]/60 text-zinc-400 border border-zinc-900 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Area */}
                  <div className="flex items-center justify-between border-t border-zinc-900/40 pt-4 mt-auto">
                    <button
                      id={`project-details-btn-${project.id}`}
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 text-[11px] font-medium text-indigo-400 hover:text-indigo-300 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      Detail Spesifikasi
                    </button>
                    
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          id={`project-github-link-${project.id}`}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-lg bg-[#0A0A0A] hover:bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-900 transition-all cursor-pointer"
                          title="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          id={`project-demo-link-${project.id}`}
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1 px-2.5 py-1.5 text-[10px] font-semibold bg-indigo-500/10 hover:bg-indigo-600 border border-indigo-500/30 text-indigo-300 hover:text-white rounded-lg transition-all cursor-pointer"
                        >
                          Live Demo
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detailed Specifications Modal (Slide in overlay) */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md cursor-zoom-out"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#0E0E0E] border border-zinc-900/80 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl z-10"
              >
                {/* Image Banner */}
                <div className="relative aspect-video w-full bg-[#121212]">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent" />
                  
                  {/* Close absolute button */}
                  <button
                    id="close-modal-btn"
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-[#0E0E0E]/80 border border-zinc-905/70 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors focus:outline-none cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  
                  {/* Title Overlaid */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[10px] font-mono tracking-widest font-bold uppercase px-2 py-0.5 bg-indigo-600/90 text-white rounded mb-2 inline-block">
                      {selectedProject.category}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Information content */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Long description text */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">Ikhtisar Proyek</h4>
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Highlights/Features */}
                  {selectedProject.features && selectedProject.features.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        Fitur Utama & Keunggulan
                      </h4>
                      <ul id="modal-features-list" className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-400">
                        {selectedProject.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 bg-[#0A0A0A]/40 p-2 rounded border border-zinc-900/60">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech stack used */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2">Teknologi Terpakai</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-xs font-mono px-2.5 py-1 bg-[#0A0A0A] text-zinc-300 border border-zinc-900 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer actions */}
                  <div className="flex items-center justify-between border-t border-zinc-900/60 pt-6 mt-4">
                    <button
                      id="modal-footer-close"
                      onClick={() => setSelectedProject(null)}
                      className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white bg-[#0A0A0A] border border-zinc-900 rounded-lg transition-colors cursor-pointer"
                    >
                      Kembali
                    </button>
                    
                    <div className="flex items-center gap-3">
                      {selectedProject.githubUrl && (
                        <a
                          id="modal-github-btn"
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-[#0A0A0A] border border-zinc-900 rounded-lg transition-all cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                          Repository
                        </a>
                      )}
                      {selectedProject.demoUrl && (
                        <a
                          id="modal-demo-btn"
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-lg hover:shadow-indigo-500/20 transition-all cursor-pointer"
                        >
                          Live Demo
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
