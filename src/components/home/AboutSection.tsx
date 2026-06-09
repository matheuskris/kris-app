import Image from "next/image";
import { siteConfig } from "@/lib/content/site";

export function AboutSection() {
  const { about } = siteConfig;

  return (
    <section
      id="about"
      className="mx-auto max-w-container-max px-gutter py-xl"
    >
      <div className="grid grid-cols-1 items-center gap-lg md:grid-cols-12">
        <div className="reveal-item overflow-hidden rounded-xl border border-white/10 shadow-2xl md:col-span-5">
          <Image
            src={about.portraitUrl}
            alt={about.portraitAlt}
            width={640}
            height={640}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="reveal-item delay-100 flex flex-col gap-md md:col-span-7">
          <h2 className="text-headline-lg">{about.title}</h2>

          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-body-lg text-on-surface-variant"
            >
              {paragraph}
            </p>
          ))}

          <div className="flex flex-wrap gap-sm">
            {about.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-surface-container-high px-3 py-1 text-code text-primary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
