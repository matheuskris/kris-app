"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import { waitForViewTransitionReady } from "@/lib/view-transition";

export function TransitionLink({
  href,
  onNavigate,
  ...props
}: ComponentProps<typeof Link>) {
  const router = useRouter();
  const url = typeof href === "string" ? href : href.pathname ?? "";

  return (
    <Link
      href={href}
      onNavigate={(event) => {
        onNavigate?.(event);
        if (event.defaultPrevented) return;
        if (typeof document === "undefined" || !document.startViewTransition) {
          return;
        }
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }

        event.preventDefault();
        document.startViewTransition(async () => {
          const ready = waitForViewTransitionReady();
          router.push(url);
          await ready;
        });
      }}
      {...props}
    />
  );
}
