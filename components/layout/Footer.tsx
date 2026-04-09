"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { CONTACT_EMAIL, GMAIL_COMPOSE_HREF } from "@/lib/contact";

const GithubIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const TwitterIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="w-full py-16 border-t border-white/5 bg-zinc-900/40">
      <div className="section-container">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center space-y-12"
        >
          <div className="flex items-center justify-center gap-8">
            {[
              { label: "Github", href: "https://github.com/tejz-dev3", icon: GithubIcon },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/tejaswini-k-a4561122a/", icon: LinkedinIcon },
              { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
              {
                label: "Email",
                href: GMAIL_COMPOSE_HREF,
                icon: ({ size }: { size: number }) => <Mail size={size} />,
                title: "Compose email in Gmail (To: " + CONTACT_EMAIL + ")",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={"title" in social ? social.title : undefined}
                className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/40 hover:text-accent transition-all group"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <p className="text-[10px] md:text-xs font-black text-zinc-600 uppercase tracking-[0.4em] leading-loose">
            &copy; {currentYear} DESIGNED & CODED BY <span className="text-accent underline decoration-accent/20">TEJASWINI KANIKE</span>. <br />
            ALL RIGHTS RESERVED // BUILT WITH NEXT.JS 16
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
