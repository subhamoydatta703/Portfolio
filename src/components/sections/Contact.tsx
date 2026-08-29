"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "../ui/SocialIcons";
import MagneticButton from "../ui/MagneticButton";

const socials = [
  { icon: GithubIcon, href: "https://github.com/subhamoydatta703", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/subhamoy-datta", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/codebysubhamoy", label: "X" },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "subhamoydatta703@gmail.com";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      data-section
      className="relative w-full min-h-screen py-32 px-4 md:px-12 lg:px-24 flex flex-col justify-center transition-colors duration-700 hover:bg-white/[0.02]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="relative z-10 w-full"
      >
        {/* Section label */}
        <p className="text-[#00f0ff] text-xs tracking-[0.3em] uppercase font-mono mb-4">
          {"// Get In Touch"}
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-16 mt-8">
            {/* Left: CTA */}
            <div className="flex-1">
              <h2 className="text-5xl md:text-8xl font-heading font-black uppercase leading-[0.85] tracking-tighter mb-8">
                <span className="text-white">LET&apos;S BUILD</span>
                <br />
                <span className="text-cyan-accent">TOGETHER</span>
              </h2>
              <p className="font-sans text-lg text-white/60 leading-relaxed max-w-lg mb-10">
                I&apos;m always interested in hearing about new projects,
                creative collaborations, or opportunities to push the
                boundaries of what&apos;s possible on the web.
              </p>

              {/* Email with copy button */}
              <div className="flex items-center gap-3 flex-wrap">
                <MagneticButton strength={0.3}>
                  <a
                    href={`mailto:${email}`}
                    data-cursor-hover
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-sans font-bold tracking-wider text-sm uppercase hover:bg-[#00f0ff] hover:shadow-[0_0_40px_rgba(0,240,255,0.3)] transition-all duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    {email}
                  </a>
                </MagneticButton>

                <button
                  onClick={handleCopy}
                  data-cursor-hover
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300 cursor-none"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-white/50" />
                  )}
                </button>

                {copied && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-emerald-400 text-sm font-mono"
                  >
                    Copied!
                  </motion.span>
                )}
              </div>
            </div>

            {/* Right: Social links */}
            <div className="flex flex-col justify-center gap-6">
              <p className="text-xs tracking-[0.3em] uppercase font-mono text-white/20 mb-2">
                Socials
              </p>
              {socials.map((social) => (
                <MagneticButton key={social.label} strength={0.4}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="flex items-center gap-4 px-6 py-3 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-[#00f0ff]/30 hover:bg-[#00f0ff]/5 transition-all duration-300 group"
                  >
                    <social.icon className="w-5 h-5 text-white/40 group-hover:text-[#00f0ff] transition-colors" />
                    <span className="text-sm font-sans text-white/50 group-hover:text-white/80 transition-colors tracking-wide">
                      {social.label}
                    </span>
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>

        {/* Footer */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-white/15 text-xs font-mono tracking-wider">
          <p>© {new Date().getFullYear()} Subhamoy Datta. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Designed & Built with ♡</p>
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[40vw] bg-gradient-to-t from-[#00f0ff]/5 via-[#a855f7]/3 to-transparent rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
