import { type Locale, locales } from "@/lib/i18n/locales";

export function localizeHref(locale: Locale, href: string): string {
  if (/^(https?:|mailto:)/.test(href)) return href;
  if (href.startsWith("#")) return `/${locale}/${href}`;
  if (href.startsWith("/")) {
    return href === "/" ? `/${locale}` : `/${locale}${href}`;
  }
  return href;
}

export function switchLocalePath(pathname: string, locale: Locale, hash = ""): string {
  const stripped = pathname.replace(/^\/(en|pt)(?=\/|$)/, "");
  const next = stripped === "" || stripped === "/" ? `/${locale}` : `/${locale}${stripped}`;
  return `${next}${hash}`;
}

export function alternatePaths(pathname: string): Record<Locale | "x-default", string> {
  return {
    en: switchLocalePath(pathname, "en"),
    pt: switchLocalePath(pathname, "pt"),
    "x-default": switchLocalePath(pathname, "en"),
  };
}

export { locales };
