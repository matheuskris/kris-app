"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/content/site";
import { Magnetic } from "@/components/ui/Magnetic";

function MaterialIcon({ name }: { name: string }) {
  return (
    <span className="material-symbols-outlined text-[18px] leading-none">
      {name}
    </span>
  );
}

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative mx-auto flex min-h-[716px] max-w-container-max flex-col items-center justify-center px-gutter pt-24 text-center">
      <div className="bg-glow" />

      <h1 className="reveal-item text-display-lg mb-sm max-w-4xl leading-tight">
        {hero.headline}{" "}
        <span className="gradient-text">{hero.highlight}</span>{" "}
        {hero.headlineEnd}
      </h1>

      <p className="reveal-item delay-100 text-body-lg mb-lg max-w-2xl text-on-surface-variant">
        {hero.subtitle}
      </p>

      <div className="reveal-item delay-200 flex gap-md">
        <Magnetic>
          <Link
            href={hero.primaryCta.href}
            className="primary-btn flex items-center gap-2 rounded-full px-6 py-3 text-label-md text-white active:scale-95"
          >
            {hero.primaryCta.label}
            <MaterialIcon name="arrow_forward" />
          </Link>
        </Magnetic>

        <Link
          href={hero.secondaryCta.href}
          className="secondary-btn flex items-center justify-center rounded-full px-6 py-3 text-label-md text-on-surface"
        >
          {hero.secondaryCta.label}
        </Link>
      </div>
    </section>
  );
}
