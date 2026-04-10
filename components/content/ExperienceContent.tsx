"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Block Stack Pvt Ltd",
    role: "Software Engineer - 2",
    period: "Dec 2025 – Present",
    status: "current",
    highlights: [
      "Built a scalable crypto & fiat wallet dashboard (NitroPay) with real-time balances, transactions, and market insights using Next.js, TypeScript, and Redux Toolkit.",
      "Developed admin modules for user management, asset configuration, and transaction monitoring with role-based access control.",
      "Integrated REST APIs for wallet operations, asset management, and transaction tracking with dynamic data tables and filtering.",
      "Implemented analytics dashboards with charts for transaction activity, user distribution, and system metrics in NitroPay Admin.",
      "Designed responsive, data-driven interfaces with reusable components, improving usability and consistency.",
      "Applied lazy loading and optimized rendering for large datasets, enhancing performance and scalability.",
    ],
  },
  {
    company: "Tradelabz Fintech LLP",
    role: "Frontend Developer",
    period: "Jun 2024 – Jun 2025",
    status: "past",
    highlights: [
      "Built a high-performance trading platform using ReactJS, Redux Toolkit, and WebSockets, enabling live market updates with sub-second latency.",
      "Integrated RESTful APIs and customized TradingView charts, enhancing technical analysis features and improving decision-making speed by 30%.",
      "Translated Figma designs into responsive Material-UI components, ensuring cross-device accessibility and reducing UI defects by 20%.",
      "Implemented lazy loading and code splitting, reducing page load time by 40% and improving scalability.",
      "Delivered sprint features consistently on time in Agile/Scrum environment, improving team velocity by 15%.",
    ],
  },
  {
    company: "Speroware Technologies",
    role: "Frontend Developer",
    period: "May 2022 – Jun 2024",
    status: "past",
    highlights: [
      "Designed and deployed a responsive furniture e-commerce platform using ReactJS, TailwindCSS, and Redux, improving customer engagement and increasing session duration by 25%.",
      "Applied lazy loading, memoization, and code splitting, improving Core Web Vitals and reducing load time by 40%.",
      "Developed advanced product filtering, dynamic listings, and real-time cart updates, boosting product discoverability and conversion rates.",
      "Coordinated with backend and design teams, ensuring smooth integration and timely feature releases.",
    ],
  },
];

export default function ExperienceContent() {
  return (
    <div className="space-y-0 relative">
      {/* Vertical Timeline Line */}
      <div className="absolute left-[19px] md:left-[23px] top-4 bottom-4 w-px bg-gradient-to-b from-accent via-accent/30 to-transparent" />

      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
          className="relative pl-14 md:pl-16 pb-12 last:pb-0 group"
        >
          {/* Timeline Dot */}
          <div
            className={`absolute left-2.5 md:left-3.5 top-1 w-4 h-4 rounded-full border-2 z-10 transition-all duration-300 ${exp.status === "current"
              ? "bg-accent border-accent shadow-lg shadow-accent/40 animate-pulse"
              : "bg-zinc-800 border-zinc-600 group-hover:bg-accent group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/30"
              }`}
          />

          {/* Card */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all duration-500 hover:bg-white/[0.06] group-hover:shadow-xl group-hover:shadow-accent/5">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Briefcase
                    size={18}
                    className="text-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-white tracking-tight">
                    {exp.company}
                  </h3>
                  <p className="text-xs md:text-sm font-semibold text-accent">
                    {exp.role}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                {exp.status === "current" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent/15 text-accent border border-accent/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Current
                  </span>
                )}
              </div>
            </div>

            {/* Period */}
            <div className="flex items-center gap-2 mb-3">
              <Calendar size={12} className="text-zinc-500" />
              <span className="text-xs text-zinc-500 font-medium tracking-wide">
                {exp.period}
              </span>
            </div>

            {/* Highlights */}
            <ul className="space-y-2 mt-1">
              {exp.highlights.map((point, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed">
                  <span className="mt-2 w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
