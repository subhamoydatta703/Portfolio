"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";
import { Menu, X } from "lucide-react";

export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);
  const lenis = useLenis();

  const navItems = [
    { name: "About", id: "about", num: "01" },
    { name: "Work", id: "work", num: "02" },
    { name: "Tech", id: "tech-stack", num: "03" },
    { name: "Contact", id: "contact", num: "04" },
  ];

  // Scroll-aware visibility & backdrop
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setHasScrolled(y > 80);
      if (y > lastScrollY.current && y > 300) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    if (lenis) {
      lenis.scrollTo(`#${id}`, {
        offset: 0,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" as const }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-5 md:px-12 transition-all duration-500 ${
          hasScrolled
            ? "bg-[#050505]/75 backdrop-blur-xl border-b border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent"
        }`}
      >
        <button
          onClick={() => handleScrollTo("hero")}
          className="font-heading font-bold text-lg tracking-tighter uppercase relative z-10 group cursor-none focus:outline-none flex items-center gap-2"
          data-cursor-hover
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse" />
          <span className="text-white group-hover:text-[#00f0ff] transition-colors duration-300">SUBHAMOY</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 relative z-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleScrollTo(item.id)}
                className="relative px-3 py-1 font-sans text-xs tracking-[0.2em] uppercase cursor-none focus:outline-none group flex flex-col items-center"
                data-cursor-hover
              >
                <span
                  className={`transition-colors duration-300 font-medium ${
                    isActive ? "text-[#00f0ff]" : "text-white/40 group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#00f0ff] rounded-full shadow-[0_0_8px_#00f0ff]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-10 text-white cursor-none focus:outline-none"
          data-cursor-hover
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.header>

      {/* Mobile Fullscreen Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[49] bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-12"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                onClick={() => handleScrollTo(item.id)}
                className="text-4xl font-heading font-bold uppercase tracking-tight text-white/80 hover:text-white transition-colors focus:outline-none"
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
