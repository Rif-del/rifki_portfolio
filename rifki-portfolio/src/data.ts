import { Project, Skill, Experience, SocialLink } from "./types";

export const PERSONAL_INFO = {
  name: "RIFKI",
  title: "Creative Full Stack Developer & AI Integrator",
  bio: "Saya adalah seorang Software Engineer yang berfokus membangun pengalaman web interaktif yang halus, intuitif, dan fungsional. Sangat menyukai perpaduan antara tipografi presisi, animasi transisi yang memanjakan mata, dan integrasi teknologi kecerdasan buatan masa kini.",
  email: "rifkhisiddo@gmail.com",
  location: "Barru, Indonesia",
  resumeUrl: "#",
};

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "AI Narrative Engine",
    description: "Platform pembuat narasi interaktif berbasis teks yang didukung oleh Gemini AI, lengkap dengan analisis percabangan cerita.",
    category: "AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Typescript", "Gemini API", "Tailwind CSS", "Motion"],
    demoUrl: "https://story-ai.example.com",
    githubUrl: "https://github.com/Rif-del/story-ai",
    longDescription: "AI Narrative Engine adalah asisten penulisan kreatif kolaboratif yang menganalisis arah alur cerita pengguna secara real-time. Memanfaatkan generasi teks cerdas untuk menyarankan pilihan plot bercabang ganda lengkap dengan bobot emosi karakter.",
    features: [
      "Integrasi Gemini API server-side untuk pemrosesan cerdas",
      "Peta visual interaktif yang menampilkan diagram alur plot cerita",
      "Visualisasi emosi karakter dinamis menggunakan grafik d3",
      "Penyimpanan otomatis draf cerita ke LocalStorage lokal"
    ]
  },
  {
    id: "proj-2",
    title: "Kineta - Minimal E-Commerce",
    description: "Toko retail minimalis modern dengan sistem transisi halaman tanpa hambatan, keranjang interaktif, dan animasi mikro.",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    tags: ["React 19", "Vite", "Motion", "Tailwind CSS", "Context API"],
    demoUrl: "https://kineta.example.com",
    githubUrl: "https://github.com/Rif-del/kineta-shop",
    longDescription: "Kineta mengedepankan prinsip desain minimalis asal Swiss dengan fokus utama pada kenyamanan berbelanja. Setiap interaksi dari memilih variasi ukuran hingga animasi drop ke keranjang dirancang untuk menjaga fokus pengguna.",
    features: [
      "Shopping cart fluid yang meluncur halus dari sisi kanan layar",
      "Halaman detail produk dengan slider foto sentuh/swipe responsif",
      "Simulasi checkout aman dengan notifikasi keberhasilan yang memuaskan",
      "Optimasi pemuatan lazy image untuk kecepatan performa tinggi"
    ]
  },
  {
    id: "proj-3",
    title: "OmniTask Collaborative Board",
    description: "Aplikasi manajemen tugas ala Kanban yang interaktif dengan pelacakan aktivitas dan visualisasi beban kerja tim.",
    category: "Full Stack",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    tags: ["Express.js", "Node.js", "Vite", "Recharts", "WebSockets"],
    demoUrl: "https://omnitask.example.com",
    githubUrl: "https://github.com/Rif-del/omni-task",
    longDescription: "Sistem koordinasi tugas berkinerja tinggi yang dirancang untuk kelompok kerja produktif. Menyediakan laporan visual berupa bagan produktivitas harian yang dihitung secara dinamis.",
    features: [
      "Operasi seret-dan-lepas (drag-and-drop) card tugas secara mulus",
      "Analisis produktivitas terintegrasi menggunakan komponen Recharts",
      "Sistem komentar beralur dan label penunjang tugas berwarna kontras",
      "Arsitektur server Express yang terintegrasi rapi dengan bundle Vite"
    ]
  },
  {
    id: "proj-4",
    title: "Aura - Sleep & Mindfulness",
    description: "Aplikasi musik relaksasi mental dan latihan pernapasan dengan generator frekuensi audio gelombang otak.",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    tags: ["iOS/Android Native Style", "Web Audio API", "Tailwind CSS", "Motion"],
    demoUrl: "https://aura-zen.example.com",
    githubUrl: "https://github.com/Rif-del/aura-mindfulness",
    longDescription: "Dirancang khusus dengan tema warna malam yang redup (low contrast) yang ramah mata. Menawarkan generator audio latar belakang ambient interaktif seperti rintik hujan, kabut malam, dan nyala api unggun.",
    features: [
      "Alat pengatur tempo napas (Breathing Coach) visual yang menyusut dan mengembang",
      "Audio mixer berlapis menggunakan HTML5 Web Audio API",
      "Waktu mundur (sleep timer) dengan penurunan volume suara linear mandiri",
      "Grafik tren ketenangan harian yang melacak riwayat meditasi"
    ]
  }
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "React / Vite", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 98, category: "Frontend" },
  { name: "Motion (Framer)", level: 88, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  
  // Backend
  { name: "Node.js & Express", level: 88, category: "Backend" },
  { name: "GraphQL & REST APIs", level: 90, category: "Backend" },
  { name: "PostgreSQL & Prisma", level: 82, category: "Backend" },
  { name: "Firebase (Firestore/Auth)", level: 85, category: "Backend" },

  // Tools & Cloud
  { name: "Docker & Cloud Run", level: 78, category: "Tools & Cloud" },
  { name: "Git & GitHub CI/CD", level: 90, category: "Tools & Cloud" },
  { name: "Figma UI/UX Design", level: 84, category: "Tools & Cloud" },
  { name: "Gemini AI & OpenAI API", level: 85, category: "Tools & Cloud" }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Full Stack Engineer",
    company: "HighTech Labs Indonesia",
    duration: "2024 - Sekarang",
    description: [
      "Memimpin perancangan frontend dashboard analitik perusahaan menggunakan React 18, TypeScript, dan Tailwind CSS, mengurangi latency rendering sebesar 40%.",
      "Mengintegrasikan layanan AI kustom untuk mengotomatisasi penyusunan laporan rutin korporat, menghemat waktu operasional departemen terkait hingga 12 jam/minggu.",
      "Mengembangkan arsitektur Express server yang modular dan meluncurkannya ke wadah Cloud Run berkecepatan tinggi dengan integrasi auto-scaler."
    ],
    tags: ["React", "Typescript", "Express", "Node.js", "Docker", "Gemini API"],
    type: "work"
  },
  {
    id: "exp-2",
    role: "Core Frontend Developer",
    company: "Creative Dev Studio",
    duration: "2022 - 2024",
    description: [
      "Mengerjakan 15+ aplikasi web interaktif komersial berkualitas tinggi dengan fokus utama pada animasi mikro halus menggunakan Framer Motion.",
      "Berkolaborasi dengan tim UI/UX Designer untuk mempercepat proses handoff dengan menyusun library komponen visual Tailwind tersinkronisasi.",
      "Menerapkan penyesuaian SEO tingkat lanjut pada framework Next.js sehingga mampu mendongkrak skor organic traffic klien rata-rata sebesar 65%."
    ],
    tags: ["React", "Next.js", "Motion", "Tailwind CSS", "Figma", "Redux"],
    type: "work"
  },
  {
    id: "exp-3",
    role: "S1 Teknik Informatika",
    company: "Universitas Islam Makassar",
    duration: "2022 - Sekarang",
    description: [
      "Mengambil program studi Teknik Informatika dengan pencapaian IPK 3.70.",
      "Aktif dalam pengerjaan proyek perangkat lunak akademis, riset pemrograman mandiri, dan studi algoritma komputasi.",
      "Mengintegrasikan keahlian pengembangan aplikasi full stack langsung dengan implementasi model kecerdasan buatan."
    ],
    tags: ["Teknik Informatika", "Algorithms", "Web Development", "Software Engineering"],
    type: "education"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "GitHub",
    url: "https://github.com/Rif-del",
    icon: "Github",
    color: "from-zinc-900 via-zinc-800 to-black hover:ring-zinc-700/50",
    username: "@Rif-del",
    followers: "125+"
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/rifki01/?skipRedirect=true",
    icon: "Linkedin",
    color: "from-blue-600 to-indigo-700 hover:ring-blue-500/50",
    username: "RIFKI",
    followers: "500+"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/rifkhisiddo",
    icon: "Twitter",
    color: "from-sky-400 to-blue-500 hover:ring-sky-400/50",
    username: "@rifkhisiddo",
    followers: "230"
  },
  {
    platform: "Instagram",
    url: "https://instagram.com/rifkhisiddo",
    icon: "Instagram",
    color: "from-pink-600 via-purple-600 to-orange-500 hover:ring-pink-500/50",
    username: "@rifkhisiddo",
    followers: "1.2k"
  }
];
