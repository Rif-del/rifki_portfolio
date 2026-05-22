import { useState } from "react";
import { motion } from "motion/react";
import { Award, Briefcase, GraduationCap, MapPin, Minimize2, Sparkles, User } from "lucide-react";
import { PERSONAL_INFO } from "../data";
// @ts-expect-error - Vite handles JPEG asset importing automatically
import ikkiPhoto from "../assets/images/ikki.jpeg";
// @ts-expect-error - Vite handles JPG asset importing automatically
import qidotPhoto from "../assets/images/qidot.jpg";

// Real user avatar from GitHub as the default fallback photo
const realPhoto = "https://avatars.githubusercontent.com/u/185617290?v=4";

export default function About() {
  const [imgSrc, setImgSrc] = useState<string>(ikkiPhoto);
  const [fallbackCount, setFallbackCount] = useState(0);

  const handleImgError = () => {
    if (fallbackCount === 0) {
      setImgSrc(realPhoto);
      setFallbackCount(1);
    }
  };

  const stats = [
    { label: "Tahun Pengalaman", value: "4+", icon: Briefcase, color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20" },
    { label: "Proyek Selesai", value: "25+", icon: Award, color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
    { label: "Bahasa Pemrograman", value: "8+", icon: Sparkles, color: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
    { label: "IPK Kumulatif", value: "3.70", icon: GraduationCap, color: "text-rose-400 bg-rose-500/10 border-rose-500/20" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0A0A] border-y border-zinc-900/50">
      
      {/* Decorative Blur Element */}
      <div className="absolute top-[40%] right-[-15%] w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4"
          >
            <User className="w-3.5 h-3.5" />
            <span>01 . TENTANG SAYA</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Membangun Jembatan antara <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Kode & Kreativitas</span>
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio Image & Accent Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-sm aspect-[4/5] rounded-2xl bg-gradient-to-b from-indigo-500/20 to-violet-500/5 p-1 border border-zinc-900 shadow-2xl group overflow-hidden"
            >
              {/* Profile Image with overlay */}
              <div className="absolute inset-1.5 rounded-xl overflow-hidden bg-[#0A0A0A] border border-zinc-900/40">
                <img
                  src={imgSrc}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={handleImgError}
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Overlay card with metadata */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/5 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-bold text-sm text-white">{PERSONAL_INFO.name}</h3>
                      <p className="text-[10px] text-zinc-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-indigo-400" />
                        {PERSONAL_INFO.location}
                      </p>
                    </div>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full">
                      ACTIVE
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-zinc-300/80 italic leading-snug">
                    "Crafting aesthetic code, deploying scalable products."
                  </p>
                </div>
              </div>

              {/* Glowing hover ring */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-indigo-500/30 to-violet-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />
            </motion.div>
          </div>

          {/* Right: Detailed Bio information and Statistics Grid */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-white">
                Siapa RIFKI?
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Halo! Saya adalah seorang pengembang piranti lunak berdedikasi tinggi yang berasal dari Barru dan kini menempuh studi Teknik Informatika di Universitas Islam Makassar.
                Saya suka menuangkan imajinasi visual ke dalam barisan kode terstruktur, menjadikannya
                halaman luar biasa dengan pengalaman navigasi yang responsif dan sangat ringan dijalankan.
              </p>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Di samping pengerjaan sisi klien (frontend), saya juga menguasai pembuatan arsitektur server
                yang handal seperti Node.js Express, basis data relasional/NoSQL, dan otomatisasi menggunakan
                Google Gemini API. Fokus utama saya adalah keselarasan fungsional serta keindahan artistik.
              </p>
            </motion.div>

            {/* Stats Grid with elegant animations */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    id={`stat-card-${index}`}
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="p-4 bg-[#0E0E0E] border border-zinc-900 rounded-xl flex items-center gap-4 hover:border-zinc-800 transition-all duration-300 group shadow-md"
                  >
                    <div className={`p-3 rounded-lg border flex items-center justify-center ${stat.color} group-hover:scale-105 transition-transform duration-300`}>
                      <StatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-mono text-2xl font-bold text-white tracking-tight leading-none">
                        {stat.value}
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-1.5 font-medium uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
