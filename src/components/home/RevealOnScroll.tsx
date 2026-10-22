"use client";

import { useLayoutEffect } from "react";

export function RevealOnScroll({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = document.querySelectorAll(".reveal-item");

    if (reduce) {
      elements.forEach((element) => element.classList.add("reveal-visible"));
      return;
    }

    document.documentElement.classList.add("reveal-armed");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      document.documentElement.classList.remove("reveal-armed");
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
