"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/content/site";

const SECTION_IDS = siteConfig.nav
  .filter((item) => item.href.startsWith("#"))
  .map((item) => item.href.slice(1));

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ratios = new Map<string, number>();

    const pick = () => {
      let best = 0;
      let winner: string | null = null;
      ratios.forEach((r, id) => {
        if (r > best) { best = r; winner = id; }
      });
      setActive(winner);
    };

    const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
    const observers = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { ratios.set(id, entry.intersectionRatio); pick(); },
        { threshold: thresholds }
      );
      obs.observe(el);
      return obs;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return active;
}

function MaterialIcon({ name }: { name: string }) {
  return (
    <span className="material-symbols-outlined text-[20px] leading-none">
      {name}
    </span>
  );
}

export function Header() {
  const activeSection = useActiveSection();

  return (
    <header className="glass-nav fixed top-4 left-1/2 z-50 flex w-[95%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full px-6 py-3 shadow-2xl">
      <Link
        href="/"
        className="text-headline-md font-bold tracking-tight text-on-surface"
      >
        {siteConfig.brandName}
      </Link>

      <nav className="hidden items-center gap-md md:flex">
        {siteConfig.nav.map((item) => {
          const sectionId = item.href.startsWith("#") ? item.href.slice(1) : null;
          const isActive = sectionId ? activeSection === sectionId : false;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link text-label-md ${isActive ? "active" : "text-on-surface-variant"}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-xs text-primary">
        {siteConfig.social.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            className="flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:bg-white/5"
          >
            <MaterialIcon name={item.icon} />
          </Link>
        ))}
      </div>
    </header>
  );
}
