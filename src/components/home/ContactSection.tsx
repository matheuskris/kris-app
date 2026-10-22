"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/i18n/locales";
import { getContactFormCopy, getContactFormErrorMessage } from "@/lib/contact-form-errors";
import { getSiteConfig } from "@/lib/content/site";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection({ locale }: { locale: Locale }) {
  const site = getSiteConfig(locale);
  const { contact, social, chrome } = site;
  const formCopy = getContactFormCopy(locale);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  function clearFeedback() {
    if (status === "error" || status === "success") {
      setStatus("idle");
      setErrorMessage("");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
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
        setErrorMessage(getContactFormErrorMessage(undefined, locale));
        return;
      }

      if (!response.ok || !data?.ok) {
        setStatus("error");
        setErrorMessage(getContactFormErrorMessage(data?.code, locale));
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(formCopy.network);
    }
  }

  return (
    <section id="contact" className="page-shell py-20 lg:py-28">
      <div className="reveal-item mx-auto grid max-w-6xl gap-14 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <h2 className="text-headline-xl max-w-xl text-on-surface">{contact.title}</h2>
          <p className="text-body-lg max-w-md text-on-surface-variant">
            {contact.subtitle}
          </p>
          <p className="text-label-sm text-outline">
            {contact.availability}
            {" · "}
            {contact.languages}
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {social.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-label-md text-on-surface-variant underline decoration-transparent underline-offset-4 transition-colors hover:text-on-surface hover:decoration-primary/50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <p className="text-label-sm text-outline">{chrome.primaryCommunication}</p>
              <p className="text-body-md mt-0.5 text-on-surface">{contact.email}</p>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className="text-label-sm text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
            >
              {copied ? chrome.copied : chrome.copyAddress}
            </button>
          </div>

          {status === "success" && (
            <div role="status" aria-live="polite">
              <p className="text-body-md text-on-surface">{formCopy.success.title}</p>
              <p className="text-body-sm text-on-surface-variant">
                {formCopy.success.description}
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            onChange={clearFeedback}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-label-sm mb-2 block text-outline">
                  {chrome.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={status === "loading"}
                  placeholder={chrome.namePlaceholder}
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-label-sm mb-2 block text-outline">
                  {chrome.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={status === "loading"}
                  placeholder="hello@example.com"
                  className="field"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-label-sm mb-2 block text-outline">
                {chrome.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                disabled={status === "loading"}
                placeholder={chrome.messagePlaceholder}
                className="field resize-none"
              />
            </div>
            {status === "error" && (
              <p className="text-body-sm text-tertiary" role="alert">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="btn-primary text-label-md ml-auto w-full px-5 py-2.5 disabled:cursor-not-allowed disabled:opacity-60 md:w-max"
            >
              {status === "loading" ? chrome.sending : chrome.sendMessage}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
