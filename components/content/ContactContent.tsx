"use client";

import { Send, User, MessageSquare, CheckCircle, AlertCircle, Loader2, AtSign } from "lucide-react";
import { useState } from "react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

type FormStatus = "idle" | "sending" | "success" | "error";

const web3formsAccessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactContent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    if (!web3formsAccessKey?.trim()) {
      console.error(
        "Missing NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY. Add it to .env.local (see .env.example)."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          name: name,
          email: email.trim(),
          message: message,
          from_name: "Portfolio Contact Form",
          subject: "New portfolio contact message",
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        // Reset to idle after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        console.error("Web3Forms Error:", result);
        setStatus("error");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug">
            Let's create something <span className="text-accent italic underline decoration-accent/30 underline-offset-4 md:underline-offset-8">unforgettable</span> together.
          </h3>
          <p className="text-zinc-500 font-medium leading-relaxed text-sm md:text-base max-w-2xl">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. 
            Feel free to reach out through the form or my social links below.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSend} className="space-y-3">
          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-accent/5 border border-accent/10 text-accent/50 group-focus-within:text-accent group-focus-within:border-accent/40 transition-all">
              <User size={16} />
            </div>
            <input
              type="text"
              name="name"
              required
              placeholder="Your name"
              className="w-full bg-white/5 border border-white/5 rounded-xl py-2.5 pl-11 pr-4 text-sm font-normal focus:outline-none focus:border-accent/40 focus:bg-white/10 transition-all placeholder:text-zinc-500 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === "sending"}
            />
          </div>

          <div className="relative group">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-accent/5 border border-accent/10 text-accent/50 group-focus-within:text-accent group-focus-within:border-accent/40 transition-all">
              <AtSign size={16} />
            </div>
            <input
              type="email"
              name="email"
              required
              placeholder="Your email"
              autoComplete="email"
              className="w-full bg-white/5 border border-white/5 rounded-xl py-2.5 pl-11 pr-4 text-sm font-normal focus:outline-none focus:border-accent/40 focus:bg-white/10 transition-all placeholder:text-zinc-500 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "sending"}
            />
          </div>

          <div className="relative group">
            <div className="absolute left-3 top-3 p-1.5 rounded-lg bg-accent/5 border border-accent/10 text-accent/50 group-focus-within:text-accent group-focus-within:border-accent/40 transition-all">
              <MessageSquare size={16} />
            </div>
            <textarea
              name="message"
              required
              placeholder="Your message"
              rows={5}
              className="w-full bg-white/5 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-sm font-normal focus:outline-none focus:border-accent/40 focus:bg-white/10 transition-all placeholder:text-zinc-500 resize-none text-white min-h-[120px]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={status === "sending"}
            ></textarea>
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className={`w-full py-3 text-sm font-semibold rounded-xl transition-all flex items-center justify-center gap-2 active:scale-[0.99] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed ${
              status === "success"
                ? "bg-emerald-500 text-white"
                : status === "error"
                ? "bg-red-500 text-white"
                : "bg-white text-black hover:bg-accent hover:text-white glow-accent transition-colors"
            }`}
          >
            {status === "sending" && (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending…
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle size={16} /> Message sent
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle size={16} /> Could not send — try again
              </>
            )}
            {status === "idle" && (
              <>
                Send message <Send size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
