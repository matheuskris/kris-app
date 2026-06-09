"use client";

import Image from "next/image";
import { FormEvent } from "react";
import { siteConfig } from "@/lib/content/site";

export function ContactSection() {
  const { contact } = siteConfig;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <section
      id="contact"
      className="mx-auto mb-xl max-w-container-max px-gutter py-xl"
    >
      <div className="reveal-item mx-auto mb-lg max-w-2xl text-center">
        <h2 className="text-headline-lg mb-sm">{contact.title}</h2>
        <p className="text-body-md text-on-surface-variant">
          {contact.subtitle}
        </p>
      </div>

      <div className="reveal-item delay-100 mx-auto grid max-w-4xl grid-cols-1 items-center gap-lg md:grid-cols-[1fr_auto]">
        <form
          onSubmit={handleSubmit}
          className="bento-card flex flex-col gap-md rounded-xl bg-surface/40 p-md backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 gap-md md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-label-md text-on-surface-variant"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-white/10 bg-surface-container-lowest px-4 py-3 text-on-surface transition-colors focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-label-md text-on-surface-variant"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="hello@example.com"
                className="w-full rounded-lg border border-white/10 bg-surface-container-lowest px-4 py-3 text-on-surface transition-colors focus:border-primary focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-label-md text-on-surface-variant"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-lg border border-white/10 bg-surface-container-lowest px-4 py-3 text-on-surface transition-colors focus:border-primary focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="primary-btn ml-auto w-full rounded-full px-6 py-3 text-label-md text-white md:w-max"
          >
            Send Message
          </button>
        </form>

        <div className="mx-auto shrink-0 overflow-hidden rounded-xl border border-white/10 shadow-2xl md:mx-0">
          <Image
            src={contact.avatarUrl}
            alt={contact.avatarAlt}
            width={240}
            height={240}
            className="h-48 w-48 object-cover md:h-60 md:w-60"
          />
        </div>
      </div>
    </section>
  );
}
