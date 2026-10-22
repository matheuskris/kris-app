import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/paths";
import { getSiteConfig } from "@/lib/content/site";

export function Footer({ locale }: { locale: Locale }) {
  const { footer } = getSiteConfig(locale);

  return (
    <footer className="w-full py-12">
      <div className="page-shell flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-headline text-[15px] text-on-surface">{footer.precision}</p>
          <p className="text-label-sm mt-2 text-outline">{footer.copyright}</p>
        </div>
        <nav className="text-label-sm flex flex-wrap items-center gap-5 text-on-surface-variant">
          {footer.links.map((link) => (
            <Link
              key={link.href + link.label}
              href={localizeHref(locale, link.href)}
              className="transition-colors hover:text-on-surface"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
