"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import { notifyViewTransitionReady } from "@/lib/view-transition";

export function ViewTransitionReady() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    notifyViewTransitionReady();
  }, [pathname]);

  return null;
}
