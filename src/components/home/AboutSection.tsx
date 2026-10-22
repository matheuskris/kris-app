import type { Locale } from "@/lib/i18n/locales";
import { getSiteConfig } from "@/lib/content/site";

export function AboutSection({ locale }: { locale: Locale }) {
  const site = getSiteConfig(locale);
  const { about } = site;

  return (
    <section id="about" className="page-shell py-20 lg:py-28">
      <div className="reveal-item mb-14 max-w-2xl">
        <h2 className="text-headline-lg text-on-surface">{about.title}</h2>
      </div>

      <div className="reveal-item grid grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="text-body-lg flex flex-col gap-5 text-on-surface-variant lg:col-span-7">
          <p className="text-headline-sm text-on-surface">{about.quote}</p>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="lg:col-span-5">
          <p className="text-label-md text-outline">{site.chrome.competenciesHeading}</p>
          <ul className="mt-6 flex flex-col gap-6">
            {about.competencies.map((item) => (
              <li key={item.title}>
                <h3 className="text-headline-sm text-on-surface">{item.title}</h3>
                <p className="text-body-sm mt-1.5 text-on-surface-variant">
                  {item.tools}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
