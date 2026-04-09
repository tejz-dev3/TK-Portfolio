"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Code2, Mail, BriefcaseBusiness, Phone } from "lucide-react";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_TEL,
  GMAIL_COMPOSE_HREF,
  LINKEDIN_PROFILE_URL,
} from "@/lib/contact";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hireMenuOpen, setHireMenuOpen] = useState(false);
  const hireMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!hireMenuRef.current) return;
      if (!hireMenuRef.current.contains(event.target as Node)) {
        setHireMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? "h-16 glass" : "h-20 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white shadow-lg shadow-accent/20">
            <Code2 size={18} />
          </div>
          <span className="text-lg font-bold tracking-tight text-white uppercase tracking-[0.1em]">Tejaswini</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-accent transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="relative" ref={hireMenuRef}>
            <motion.button
              type="button"
              onClick={() => setHireMenuOpen((prev) => !prev)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-5 py-2.5 bg-accent text-white text-[10px] font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all glow-accent flex items-center justify-center gap-2"
            >
              Hire Me
              <BriefcaseBusiness size={14} />
            </motion.button>

            {hireMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 top-12 w-72 rounded-xl border border-white/10 bg-zinc-900/95 backdrop-blur-md p-2 shadow-2xl"
              >
                <a
                  href={GMAIL_COMPOSE_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-lg px-3 py-2 text-zinc-200 hover:bg-white/10 transition-colors"
                >
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <span className="text-xs">
                    Email me
                    <span className="block text-zinc-400 mt-0.5">Opens compose with role details template</span>
                  </span>
                </a>
                <a
                  href={LINKEDIN_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 rounded-lg px-3 py-2 text-zinc-200 hover:bg-white/10 transition-colors"
                >
                  <span className="mt-0.5 shrink-0">
                    <LinkedinIcon size={16} />
                  </span>
                  <span className="text-xs">
                    View LinkedIn
                    <span className="block text-zinc-400 mt-0.5">See profile and message directly</span>
                  </span>
                </a>
                <a
                  href={CONTACT_PHONE_TEL}
                  className="flex items-start gap-3 rounded-lg px-3 py-2 text-zinc-200 hover:bg-white/10 transition-colors"
                >
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span className="text-xs">
                    Call me
                    <span className="block text-zinc-400 mt-0.5">{CONTACT_PHONE_DISPLAY}</span>
                  </span>
                </a>
                <p className="px-3 pt-1 pb-2 text-[11px] text-zinc-500">
                  Primary contact: {CONTACT_EMAIL}
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass border-b border-white/5 flex flex-col p-6 gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-zinc-400"
            >
              {link.name}
            </a>
          ))}
          <a
            href={GMAIL_COMPOSE_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-white"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
            <Mail size={14} />
          </a>
          <a
            href={CONTACT_PHONE_TEL}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-200"
            onClick={() => setIsOpen(false)}
          >
            Call Me
            <Phone size={14} />
          </a>
        </motion.div>
      )}
    </nav>
  );
}
