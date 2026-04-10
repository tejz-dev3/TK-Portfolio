"use client";

import { User, Mail, MapPin, Briefcase } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/contact";

export default function AboutContent() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left">
        <div className="w-24 h-24 rounded-3xl glass flex items-center justify-center border-white/10 shrink-0 shadow-2xl">
          <User size={48} className="text-accent" strokeWidth={1.5} />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">            
            <span className="text-accent">Frontend Developer</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
            Frontend Developer experienced in building scalable, responsive, and high-performance 
            web applications using React, Next.js, and TypeScript.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { icon: Mail, label: "Email", value: CONTACT_EMAIL },
          { icon: MapPin, label: "Location", value: "Bangalore, India" },
          { icon: Briefcase, label: "Experience", value: "3.7+ Years" },
          { icon: User, label: "Availability", value: "Full-time / Permanent" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
            <item.icon size={18} className="text-accent-secondary" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">{item.label}</p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
