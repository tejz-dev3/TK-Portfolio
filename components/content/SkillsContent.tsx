"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript", icon: "javascript", color: "F7DF1E" },
  { name: "TypeScript", icon: "typescript", color: "3178C6" },
  { name: "React.js", icon: "react", color: "61DAFB" },
  { name: "Next.js", icon: "nextdotjs", color: "ffffff" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
  { name: "HTML5", icon: "html5", color: "E34F26" },
  { name: "CSS3", icon: "css3", color: "1572B6" },
  { name: "GitHub", icon: "github", color: "ffffff" },
  { name: "Bitbucket", icon: "bitbucket", color: "2481f7" },
  { name: "GitLab", icon: "gitlab", color: "e24329" },
  { name: "REST APIs", icon: "postman", color: "FF6C37" },
  { name: "Redux", icon: "redux", color: "764ABC" },
  { name: "Sass", icon: "sass", color: "CC6699" },
  { name: "Jest", icon: "jest", color: "C21325" },
];

export default function SkillsContent() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -3, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-zinc-900/40 border border-white/5 transition-colors cursor-default"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 mb-2 flex items-center justify-center shrink-0">
              <img
                src={skill.name === "CSS3"
                  ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  : `https://cdn.simpleicons.org/${skill.icon}/${skill.color}`}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-[11px] sm:text-xs font-medium text-zinc-400 text-center leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
