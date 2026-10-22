import Link from "next/link";
import { headers } from "next/headers";
import { defaultLocale, isLocale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/paths";
import { getSiteConfig } from "@/lib/content/site";

export default async function NotFound() {
  const headerStore = await headers();
  const raw = headerStore.get("x-locale");
  const locale = isLocale(raw) ? raw : defaultLocale;
  const { pages } = getSiteConfig(locale);

  return (
    <main className="flex min-h-screen items-center bg-canvas pt-16">
      <section className="page-shell py-16">
        <h1 className="text-headline-xl text-on-surface">{pages.notFound.title}</h1>
        <p className="text-body-lg mt-4 max-w-xl text-on-surface-variant">
          {pages.notFound.body}
        </p>
        <Link
          href={localizeHref(locale, "/")}
          className="btn-primary text-label-md mt-8 inline-flex px-5 py-2.5"
        >
          {pages.notFound.cta}
        </Link>
      </section>
    </main>
  );
}
