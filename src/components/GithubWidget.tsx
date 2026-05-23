import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, GitFork, Star, Users, BookOpen, ExternalLink, 
  Search, RefreshCw, AlertCircle, Share2, Twitter, Info 
} from "lucide-react";
import { GithubProfile, GithubRepo } from "../types";

export default function GithubWidget() {
  const [username, setUsername] = useState("Rif-del");
  const [searchInput, setSearchInput] = useState("Rif-del");
  const [profile, setProfile] = useState<GithubProfile | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fallback data in case the rate limit is hit or network is offline
  const fallbackProfile: GithubProfile = {
    login: "Rif-del",
    avatar_url: "https://avatars.githubusercontent.com/u/10000000?v=4",
    name: "RIFKI",
    bio: "Full Stack Engineer & AI enthusiast based in Barru, Indonesia. Student of Informatics Engineering at Universitas Islam Makassar.",
    public_repos: 12,
    followers: 125,
    following: 84,
    html_url: "https://github.com/Rif-del"
  };

  const fallbackRepos: GithubRepo[] = [
    {
      id: 1,
      name: "smart-narrative-ai",
      description: "Interactive story generation platform powered by Google Gemini API server nodes, styled with Framer.",
      html_url: "https://github.com/Rif-del/smart-narrative-ai",
      stargazers_count: 32,
      forks_count: 8,
      language: "TypeScript"
    },
    {
      id: 2,
      name: "minimal-kinetic-ui",
      description: "A gorgeous, high-performance UI library focusing on physical spring animations and layout animations.",
      html_url: "https://github.com/Rif-del/minimal-kinetic-ui",
      stargazers_count: 24,
      forks_count: 3,
      language: "React"
    },
    {
      id: 3,
      name: "express-vite-bundle",
      description: "Production ready template bundling vite and express with streamlined TypeScript build triggers.",
      html_url: "https://github.com/Rif-del/express-vite-bundle",
      stargazers_count: 18,
      forks_count: 5,
      language: "JavaScript"
    }
  ];

  const fetchGithubData = async (user: string) => {
    setLoading(true);
    setError(null);
    try {
      // Fetch User profile details
      const profileRes = await fetch(`https://api.github.com/users/${user}`);
      if (!profileRes.ok) {
        if (profileRes.status === 404) {
          throw new Error("Pengguna GitHub tidak ditemukan");
        } else if (profileRes.status === 403) {
          throw new Error("Batas akses API tercapai. Menggunakan data lokal.");
        } else {
          throw new Error("Gagal memuat profil GitHub");
        }
      }
      const profileData: GithubProfile = await profileRes.json();
      setProfile(profileData);

      // Fetch repos sorted by updated
      const reposRes = await fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=4`);
      if (reposRes.ok) {
        const reposData: GithubRepo[] = await reposRes.json();
        // filter forks or just show the top ones
        setRepos(reposData);
      }
    } catch (err: any) {
      console.warn("GitHub API error, using rich backup local data:", err.message);
      setError(err.message);
      // fallback
      setProfile(fallbackProfile);
      setRepos(fallbackRepos);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData(username);
  }, [username]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setUsername(searchInput.trim());
    }
  };

  return (
    <section id="social-hub" className="py-24 relative overflow-hidden bg-[#0A0A0A] border-b border-zinc-900/50">
      
      {/* Glow blobs background */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-violet-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4"
          >
            <Share2 className="w-3.5 h-3.5 animate-pulse" />
            <span>05 . HUB SOSIAL & GITHUB WIDGET</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Integrasi Profil & Aktivitas <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">GitHub Real-Time</span>
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-4" />
        </div>

        {/* Search tool & social card layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left: Input searching and quick status */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#0E0E0E] border border-zinc-900 rounded-2xl">
              <h3 className="font-display font-bold text-sm sm:text-base text-white mb-3 flex items-center gap-2">
                <Search className="w-4 h-4 text-indigo-400" />
                Cari Akun GitHub
              </h3>
              <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
                Ketik username GitHub apa saja untuk memuat portofolio proyek aslinya langsung dari server REST API GitHub.
              </p>

              {/* Form searching */}
              <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-4">
                <input
                  id="github-username-input"
                  type="text"
                  placeholder="Contoh: Rif-del"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  className="flex-1 bg-[#0A0A0A] border border-zinc-900 focus:border-indigo-500 rounded-xl px-3 py-2 text-xs font-mono text-white placeholder-zinc-800 focus:outline-none transition-colors"
                />
                <button
                  id="search-github-btn"
                  type="submit"
                  disabled={loading}
                  className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition-colors font-semibold cursor-pointer disabled:opacity-50 focus:outline-none"
                >
                  {loading ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : "Muat"}
                </button>
              </form>

              {/* API Notice / Info */}
              <div className="flex gap-2 p-3 bg-[#0A0A0A]/40 border border-zinc-900/60 rounded-xl text-[10px] text-zinc-500 leading-normal">
                <Info className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  Informasi diambil dinamis. Jika Anda melihat data default, itu berarti batas kuota pencarian IP pengakses telah dipenuhi.
                </span>
              </div>
            </div>

            {/* Quick social links widgets */}
            <div className="p-6 bg-[#0E0E0E] border border-zinc-900 rounded-2xl space-y-4">
              <h4 className="font-display font-semibold text-xs uppercase text-zinc-400 tracking-wider">
                Platform Media Sosial
              </h4>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  id="link-social-hub-github"
                  href="https://github.com/Rif-del"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0A0A0A] border border-zinc-900 hover:border-zinc-800 hover:bg-[#0E0E0E] text-zinc-300 hover:text-white transition-all text-xs"
                >
                  <Github className="w-4 h-4 text-zinc-400" />
                  GitHub Account
                </a>
                <a
                  id="link-social-hub-twitter"
                  href="https://twitter.com/rifkhisiddo"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#0A0A0A] border border-zinc-900 hover:border-zinc-800 hover:bg-[#0E0E0E] text-zinc-300 hover:text-white transition-all text-xs"
                >
                  <Twitter className="w-4 h-4 text-sky-400" />
                  Twitter / X
                </a>
              </div>
            </div>
          </div>

          {/* Right: The GitHub profile details and repository feed */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center p-12 bg-[#0E0E0E] border border-zinc-900 rounded-2xl h-[420px]"
                >
                  <RefreshCw className="w-8 h-8 text-indigo-500 animate-spin mb-4" />
                  <p className="text-sm font-mono text-zinc-400">Menghubungi Server GitHub...</p>
                </motion.div>
              ) : profile ? (
                <motion.div
                  key="profile-loaded"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6"
                >
                  {/* Profile Summary block */}
                  <div className="p-6 sm:p-8 bg-gradient-to-br from-indigo-950/20 via-violet-950/10 to-[#0A0A0A] border border-zinc-905/70 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6">
                    <img
                      src={profile.avatar_url}
                      alt={profile.login}
                      className="w-20 h-20 rounded-full border-2 border-indigo-500/40 bg-[#0A0A0A] shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="flex-1 text-center sm:text-left space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h3 className="font-display font-bold text-lg text-white">
                            {profile.name || profile.login}
                          </h3>
                          <p className="text-xs font-mono text-indigo-400">@{profile.login}</p>
                        </div>
                        
                        <a
                          id="btn-visit-github-profile"
                          href={profile.html_url}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-200 hover:text-white rounded-lg transition-all w-fit mx-auto sm:mx-0"
                        >
                          Kunjungi Profil
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                        {profile.bio || "Pengguna ini belum mengatur bio singkatnya di platform GitHub."}
                      </p>

                      {/* Mini follower count counters */}
                      <div className="flex gap-4 items-center justify-center sm:justify-start pt-2">
                        <div className="flex items-center gap-1 text-zinc-400 font-mono text-xs">
                          <Users className="w-3.5 h-3.5 text-indigo-400" />
                          <span><b>{profile.followers}</b> Pengikut</span>
                        </div>
                        <div className="flex items-center gap-1 text-zinc-400 font-mono text-xs">
                          <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                          <span><b>{profile.public_repos}</b> Repositori</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Repositories header and feed */}
                  <div>
                    <h4 className="font-display font-bold text-xs uppercase text-zinc-400 tracking-wider mb-4 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-indigo-400" />
                      Proyek Publik Terkini di GitHub
                    </h4>

                    {repos.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {repos.map((repo) => (
                           <a
                            id={`live-repo-link-${repo.id}`}
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="p-5 bg-[#0E0E0E] border border-zinc-900 hover:border-indigo-500/30 rounded-xl hover:bg-[#0E0E0E]/90 transition-all flex flex-col justify-between group"
                          >
                            <div>
                              <div className="flex items-center justify-between gap-2 mb-2">
                                <h5 className="font-display font-bold text-sm text-white group-hover:text-indigo-400 transition-colors truncate">
                                  {repo.name}
                                </h5>
                                <ExternalLink className="w-3 h-3 text-slate-600 group-hover:text-indigo-400" />
                              </div>
                              <p className="text-zinc-400 text-[11px] sm:text-xs leading-normal mb-3.5 line-clamp-2">
                                {repo.description || "Tidak ada rincian deskripsi singkat yang disediakan untuk repositori ini."}
                              </p>
                            </div>

                            <div className="flex items-center justify-between border-t border-[#0A0A0A] pt-3">
                              {repo.language && (
                                <span className="font-mono text-[10px] text-indigo-300">
                                  {repo.language}
                                </span>
                              )}
                              
                              <div className="flex items-center gap-2.5 text-zinc-500 group-hover:text-zinc-400 transition-colors">
                                <span className="flex items-center gap-0.5 font-mono text-[10px]">
                                  <Star className="w-3 h-3 text-amber-400 shrink-0" />
                                  {repo.stargazers_count}
                                </span>
                                <span className="flex items-center gap-0.5 font-mono text-[10px]">
                                  <GitFork className="w-3 h-3 text-sky-400 shrink-0" />
                                  {repo.forks_count}
                                </span>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="p-12 text-center bg-[#0E0E0E] border border-zinc-900 rounded-xl text-zinc-400 text-xs">
                        Tidak ada repositori publik yang ditemukan.
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
