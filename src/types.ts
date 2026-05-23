export interface Project {
  id: string;
  title: string;
  description: string;
  category: "Frontend" | "Full Stack" | "AI & Machine Learning" | "Mobile";
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  longDescription?: string;
  features?: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  category: "Frontend" | "Backend" | "Tools & Cloud";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  tags: string[];
  type: "work" | "education";
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  color: string;
  username: string;
  followers?: string;
}

export interface GithubProfile {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}
