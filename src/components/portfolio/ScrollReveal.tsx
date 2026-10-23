"use client";

import { useEffect, useRef } from "react";

/** Scroll progress drives both directions; nothing depends on a one-time trigger. */
export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = root.current;
    if (!container) return;
    const elements = container.querySelectorAll<HTMLElement>("[data-reveal]");
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const translations = new WeakMap<HTMLElement, number>();
    let frame = 0;

    function update() {
      frame = 0;
      const viewportHeight = window.innerHeight;
      elements.forEach((element) => {
        if (motionPreference.matches) {
          element.style.opacity = "1";
          element.style.transform = "none";
          translations.set(element, 0);
          return;
        }

        // Measure the layout position rather than feeding our own transform
        // back into the next frame's progress calculation.
        const rect = element.getBoundingClientRect();
        const previousTranslation = translations.get(element) ?? 0;
        const top = rect.top - previousTranslation;
        const bottom = rect.bottom - previousTranslation;
        const enter = Math.max(0, Math.min(1, (viewportHeight - top) / Math.min(160, viewportHeight * 0.22)));
        const exit = Math.max(0, Math.min(1, bottom / Math.min(100, viewportHeight * 0.15)));
        const progress = Math.min(enter, exit);
        const translation = enter < 1 ? (1 - enter) * 24 : -(1 - exit) * 16;
        element.style.opacity = String(progress);
        element.style.transform = `translateY(${translation}px)`;
        translations.set(element, translation);
      });
    }

    function scheduleUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    motionPreference.addEventListener("change", scheduleUpdate);
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(container);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      motionPreference.removeEventListener("change", scheduleUpdate);
      observer.disconnect();
      window.cancelAnimationFrame(frame);
      elements.forEach((element) => {
        element.style.removeProperty("opacity");
        element.style.removeProperty("transform");
      });
    };
  }, []);

  return <div className="folio" ref={root}>{children}</div>;
}
