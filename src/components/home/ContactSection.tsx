"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import {
  contactFormNetworkErrorMessage,
  contactFormSuccessMessage,
  getContactFormErrorMessage,
} from "@/lib/contact-form-errors";
import { siteConfig } from "@/lib/content/site";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const { contact } = siteConfig;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function clearFeedback() {
    if (status === "error" || status === "success") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      let data: { code?: unknown; ok?: boolean } | null = null;
      try {
        data = (await response.json()) as { code?: unknown; ok?: boolean };
      } catch {
        setStatus("error");
        setErrorMessage(getContactFormErrorMessage(undefined));
        return;
      }

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setErrorMessage(getContactFormErrorMessage(data?.code));
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(contactFormNetworkErrorMessage);
    }
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

      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="reveal-item mx-auto mb-md flex max-w-4xl items-start gap-sm rounded-xl border border-primary/30 bg-primary/10 px-md py-sm backdrop-blur-xl"
        >
          <span
            className="material-symbols-outlined mt-0.5 shrink-0 text-primary"
            aria-hidden="true"
          >
            check_circle
          </span>
          <div>
            <p className="text-body-md text-on-surface">
              {contactFormSuccessMessage.title}
            </p>
            <p className="text-body-md text-on-surface-variant">
              {contactFormSuccessMessage.description}
            </p>
          </div>
        </div>
      )}

      <div className="reveal-item delay-100 mx-auto grid max-w-4xl grid-cols-1 items-center gap-lg md:grid-cols-[1fr_auto]">
        <form
          onSubmit={handleSubmit}
          onChange={clearFeedback}
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
                required
                disabled={status === "loading"}
                placeholder="Your Name"
                className="w-full rounded-lg border border-white/10 bg-surface-container-lowest px-4 py-3 text-on-surface transition-colors focus:border-primary focus:outline-none disabled:opacity-60"
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
                required
                disabled={status === "loading"}
                placeholder="hello@example.com"
                className="w-full rounded-lg border border-white/10 bg-surface-container-lowest px-4 py-3 text-on-surface transition-colors focus:border-primary focus:outline-none disabled:opacity-60"
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
              required
              disabled={status === "loading"}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-lg border border-white/10 bg-surface-container-lowest px-4 py-3 text-on-surface transition-colors focus:border-primary focus:outline-none disabled:opacity-60"
            />
          </div>

          {status === "error" && (
            <p className="text-body-md text-tertiary" role="alert">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="primary-btn ml-auto w-full rounded-full px-6 py-3 text-label-md text-white disabled:cursor-not-allowed disabled:opacity-60 md:w-max"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
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
