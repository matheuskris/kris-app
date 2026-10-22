import { headers } from "next/headers";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { DocumentLang } from "@/components/layout/DocumentLang";
import LocaleNotFound from "@/app/[locale]/not-found";
import { defaultLocale, isLocale } from "@/lib/i18n/locales";

export default async function NotFound() {
  const headerStore = await headers();
  const raw = headerStore.get("x-locale");
  const locale = isLocale(raw) ? raw : defaultLocale;

  return (
    <>
      <DocumentLang locale={locale} />
      <Header locale={locale} />
      <LocaleNotFound />
      <Footer locale={locale} />
    </>
  );
}
