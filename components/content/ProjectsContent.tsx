"use client";

import { ExternalLink, FolderOpen } from "lucide-react";

const projects = [
  {
    title: "VibeLearn",
    description: "A swipe-first micro-learning app that generates AI-powered study cards with quick quizzes and streak-based retention.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "AI"],
    link: "https://vibe-learn-with-ai.vercel.app/",
    github: "https://github.com/tejz-dev3/vibe-learn-with-AI"
  },
  {
    title: "Aura E-commerce",
    description: "A premium e-commerce shopping experience with high-performance real-time search and smooth UI/UX.",
    tags: ["Javascript, React", "Next.js", "TailwindCSS"],
    link: "https://aura-ecommerce-five.vercel.app/",
    github: "https://github.com/tejz-dev3/aura-ecommerce"
  }
];

export default function ProjectsContent() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 overflow-visible">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="group relative p-6 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-accent/30 hover:bg-zinc-900/60 transition-all cursor-default"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-2xl bg-accent/5 border border-accent/20 text-accent">
              <FolderOpen size={24} />
            </div>
            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <a href={project.github || "https://github.com/tejz-dev3"} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-zinc-400 mb-6 font-medium leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
