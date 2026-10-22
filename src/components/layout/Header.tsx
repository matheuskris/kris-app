"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { locales, localeFromPathname, type Locale } from "@/lib/i18n/locales";
import { localizeHref, switchLocalePath } from "@/lib/i18n/paths";
import { getSiteConfig } from "@/lib/content/site";

function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ratios = new Map<string, number>();

    const pick = () => {
      let best = 0;
      let winner: string | null = null;
      ratios.forEach((ratio, id) => {
        if (ratio > best) {
          best = ratio;
          winner = id;
        }
      });
      setActive(winner);
    };

    const thresholds = Array.from({ length: 21 }, (_, index) => index / 20);
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          ratios.set(id, entry.intersectionRatio);
          pick();
        },
        { threshold: thresholds },
      );
      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, [sectionIds]);

  return active;
}

function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const { chrome } = getSiteConfig(locale);

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  return (
    <div
      className="text-label-sm flex items-center rounded-full border border-outline-variant/50 p-0.5"
      role="group"
      aria-label={chrome.language}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={switchLocalePath(pathname, code, hash)}
            hrefLang={code}
            lang={code}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2 py-0.5 transition-colors ${
              active
                ? "bg-surface-container-high text-on-surface"
                : "text-outline hover:text-on-surface"
            }`}
          >
            {code.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}

export function Header({ locale }: { locale: Locale }) {
  const site = getSiteConfig(locale);
  const sectionIds = useMemo(
    () =>
      site.nav
        .filter((item) => item.href.startsWith("#"))
        .map((item) => item.href.slice(1)),
    [site.nav],
  );
  const activeSection = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const current = localeFromPathname(usePathname()) ?? locale;

  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/25 bg-canvas/80 backdrop-blur-xl">
      <div className="page-shell flex h-16 items-center justify-between gap-4">
        <Link
          href={localizeHref(current, "/")}
          className="font-headline min-w-0 truncate text-[15px] tracking-tight text-on-surface transition-colors hover:text-primary"
        >
          {site.brandMark}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => {
            const sectionId = item.href.startsWith("#")
              ? item.href.slice(1)
              : null;
            const isActive = sectionId ? activeSection === sectionId : false;

            return (
              <Link
                key={item.href}
                href={localizeHref(current, item.href)}
                className={`text-label-md py-1 transition-colors ${
                  isActive
                    ? "text-on-surface"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch locale={current} />
          <Link
            href={localizeHref(current, "/#contact")}
            className="text-label-md hidden text-on-surface-variant transition-colors hover:text-on-surface sm:inline-flex"
          >
            {site.chrome.getInTouch}
          </Link>
          <button
            type="button"
            className="text-label-sm rounded-full border border-outline-variant/50 px-3 py-1 text-on-surface lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? site.chrome.close : site.chrome.menu}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="page-shell flex flex-col gap-3 border-t border-outline-variant/20 py-4 lg:hidden"
        >
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={localizeHref(current, item.href)}
              className="text-label-md text-on-surface-variant"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={localizeHref(current, "/projects")}
            className="text-label-md text-on-surface-variant"
            onClick={() => setOpen(false)}
          >
            {site.chrome.projectsIndex}
          </Link>
          <Link
            href={localizeHref(current, "/blog")}
            className="text-label-md text-on-surface-variant"
            onClick={() => setOpen(false)}
          >
            {site.chrome.blog}
          </Link>
        </nav>
      )}
    </header>
  );
}
