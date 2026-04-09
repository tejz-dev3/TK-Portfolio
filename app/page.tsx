"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import ContactContent from "@/components/content/ContactContent";
import Footer from "@/components/layout/Footer";
import AboutContent from "@/components/content/AboutContent";
import ExperienceContent from "@/components/content/ExperienceContent";
import SkillsContent from "@/components/content/SkillsContent";
import ProjectsContent from "@/components/content/ProjectsContent";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="w-full">
        <Hero />
      </section>

      {/* Content Sections Wrapper */}
      <div className="relative z-10 w-full bg-transparent">
        
        {/* About Section */}
        <Section id="about" title="01 // About Me">
          <AboutContent />
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="02 // Experience" dark>
          <ExperienceContent />
        </Section>

        {/* Skills Section */}
        <Section id="skills" title="03 // Core Expertise">
          <SkillsContent />
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="04 // Selected Works" dark>
          <ProjectsContent />
        </Section>

        {/* Contact Section */}
        <Section id="contact" title="05 // Get In Touch">
           <ContactContent />
        </Section>

        {/* Footer */}
        <Footer />
      </div>

      {/* Global Mesh Decorator */}
      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent pointer-events-none z-[-1]" />
    </main>
  );
}

function Section({ id, title, children, dark = false }: { id: string, title: string, children: React.ReactNode, dark?: boolean }) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 md:scroll-mt-28 w-full py-16 md:py-20 ${dark ? "bg-white/[0.02]" : "bg-transparent"}`}
    >
      <div className="section-container">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="space-y-8 md:space-y-10"
        >
          <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-accent/80 border-l-2 border-accent pl-6">
            {title}
          </h2>
          <div className="mx-auto max-w-4xl">
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
