import Link from "next/link";
import { siteConfig } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-outline-variant/10 bg-background px-gutter py-16">
      <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-xs md:flex-row">
        <div className="text-headline-md text-on-surface opacity-80 transition-opacity hover:opacity-100">
          {siteConfig.brandName}
        </div>

        <p className="text-body-md text-primary opacity-80">
          {siteConfig.footer.copyright}
        </p>

        <nav className="flex gap-md">
          {siteConfig.footer.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-body-md text-on-surface-variant opacity-80 transition-colors hover:text-primary hover:opacity-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
