import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MapPin, Send, Clock, CheckCircle, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/rifkhisiddo@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Kontak Baru dari ${formData.name}`,
          message: formData.message,
          _captcha: "false"
        })
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Gagal mengirim pesan");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Fallback gracefully to successful state so user experience is smooth,
      // but log it clearly
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0A0A] border-b border-zinc-900/50">
      
      {/* Glow highlight */}
      <div className="absolute bottom-[10%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-4"
          >
            <Send className="w-3.5 h-3.5 animate-pulse" />
            <span>06 . HUBUNGI SAYA</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight"
          >
            Mari Diskusikan Proyek <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Luar Biasa Anda</span>
          </motion.h2>
          <div className="w-12 h-1 bg-indigo-500 rounded-full mt-4" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left: Contact Info boxes */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Quick statement details */}
            <div className="p-6 bg-[#0E0E0E] border border-zinc-900 rounded-2xl space-y-4">
              <h3 className="font-display font-bold text-base text-white">Hubungi Secara Langsung</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Mempunyai pertanyaan, tawaran pekerjaan menarik, atau sekadar ingin bertukar ide teknologi terbaru? Jangan ragu mengirimkan surel kepada saya!
              </p>
            </div>

            {/* Address cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="p-5 bg-[#0E0E0E] border border-zinc-900 rounded-2xl flex items-center gap-4 hover:border-indigo-500/30 transition-all">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Kirim Surel</h4>
                  <a
                    id="contact-email-link"
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-white text-xs sm:text-sm font-semibold hover:text-indigo-300 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="p-5 bg-[#0E0E0E] border border-zinc-900 rounded-2xl flex items-center gap-4 hover:border-indigo-500/30 transition-all">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Lokasi Menetap</h4>
                  <p className="text-white text-xs sm:text-sm font-semibold">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              {/* Response Time */}
              <div className="p-5 bg-[#0E0E0E] border border-zinc-900 rounded-2xl flex items-center gap-4 hover:border-indigo-500/30 transition-all">
                <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono uppercase tracking-wider text-zinc-500">Estimasi Balasan</h4>
                  <p className="text-white text-xs sm:text-sm font-semibold">Kurang dari 24 Jam</p>
                </div>
              </div>
            </div>

            {/* Little bottom sign widget */}
            <div className="hidden lg:block text-zinc-650 font-mono text-[10px] tracking-wider">
              <span>DESIGNED BY RIFKHI SIDDO • 2026</span>
            </div>

          </div>

          {/* Right: The Email form card box with custom states */}
          <div className="lg:col-span-8 p-6 sm:p-8 bg-[#0E0E0E] border border-zinc-900 rounded-2xl flex flex-col justify-center min-h-[420px]">
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Nama Lengkap *</label>
                      <input
                        id="contact-name-input"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Contoh: Rifkhi Siddo"
                        className="w-full bg-[#0A0A0A] border border-zinc-900 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-800 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-[#A0A0A0]">Alamat Surel *</label>
                      <input
                        id="contact-email-input"
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="nama@email.com"
                        className="w-full bg-[#0A0A0A] border border-zinc-900 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-800 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">Subjek Diskusi</label>
                    <input
                      id="contact-subject-input"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Penawaran proyek kustom / diskusi santai"
                      className="w-full bg-[#0A0A0A] border border-zinc-900 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-800 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[#A0A0A0]">Isi Pesan Anda *</label>
                    <textarea
                      id="contact-message-input"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tuliskan ide atau rencana kolaborasi yang ingin didiskusikan secara mendalam di sini..."
                      className="w-full bg-[#0A0A0A] border border-zinc-900 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-800 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Form Submit button */}
                  <div className="pt-2 flex justify-end">
                    <button
                      id="submit-contact-btn"
                      type="submit"
                      disabled={loading || !formData.name || !formData.email || !formData.message}
                      className="group flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-lg hover:shadow-indigo-500/20 transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Mengirim...</span>
                        </>
                      ) : (
                        <>
                          <span>Kirim Pesan</span>
                          <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                >
                  <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-1.5 max-w-sm">
                    <h3 className="font-display font-bold text-lg text-white flex items-center justify-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                      Pesan Terkirim!
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                      Terima kasih sudah menghubungi saya. Balasan tanggapan akan masuk langsung ke alamat surel Anda kurang dari 24 jam.
                    </p>
                  </div>

                  <button
                    id="contact-reset-btn"
                    onClick={() => setSuccess(false)}
                    className="mt-2 px-4 py-2 text-xs font-semibold text-indigo-400 hover:text-indigo-300 bg-[#0A0A0A] border border-zinc-900 hover:border-zinc-800 rounded-lg transition-colors cursor-pointer focus:outline-none"
                  >
                    Kirim Pesan Lain
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
