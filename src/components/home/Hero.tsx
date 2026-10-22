import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/paths";
import { getSiteConfig } from "@/lib/content/site";

export function Hero({ locale }: { locale: Locale }) {
  const site = getSiteConfig(locale);
  const { hero, about } = site;

  return (
    <section className="page-shell relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28">
      <div className="grid items-end gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="z-10 flex flex-col">
          <p className="text-label-md text-on-surface-variant">{site.roleTitle}</p>
          <h1 className="name-in text-display-name mt-4 max-w-3xl text-on-surface">
            {site.brandName}
          </h1>
          <span
            className="name-rule mt-6 block h-px w-24 bg-primary/70"
            aria-hidden
          />
          <p className="text-body-lg mt-8 max-w-xl text-on-surface-variant">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href={localizeHref(locale, hero.primaryCta.href)}
              className="btn-primary text-label-md inline-flex items-center gap-2 px-5 py-2.5"
            >
              {hero.primaryCta.label}
            </Link>
            <Link
              href={localizeHref(locale, hero.secondaryCta.href)}
              className="btn-secondary text-label-md inline-flex items-center gap-2 px-5 py-2.5 text-on-surface"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="portrait-in relative">
          <Image
            src={about.portraitUrl}
            alt={about.portraitAlt}
            width={900}
            height={1100}
            priority
            className="h-[380px] w-full rounded-2xl object-cover object-[center_18%] lg:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
