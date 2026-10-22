import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { DocumentLang } from "@/components/layout/DocumentLang";
import { isLocale, locales, type Locale } from "@/lib/i18n/locales";
import { alternatePaths } from "@/lib/i18n/paths";
import { getSiteConfig } from "@/lib/content/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};

  const site = getSiteConfig(raw);
  const title = `${site.brandName} — ${site.roleTitle}`;
  const headerStore = await headers();
  const pathname = headerStore.get("x-pathname") ?? `/${raw}`;
  const languages = alternatePaths(pathname);

  return {
    title,
    description: site.tagline,
    alternates: { languages },
    openGraph: {
      title,
      description: site.tagline,
      type: "website",
      locale: raw === "pt" ? "pt_BR" : "en_US",
      alternateLocale: raw === "pt" ? ["en_US"] : ["pt_BR"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: site.tagline,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  return (
    <>
      <DocumentLang locale={locale} />
      <Header locale={locale} />
      {children}
      <Footer locale={locale} />
    </>
  );
}
