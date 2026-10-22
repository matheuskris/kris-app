import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  defaultLocale,
  isLocale,
  localeCookieName,
  localeFromPathname,
  locales,
  type Locale,
} from "@/lib/i18n/locales";

const cookieOptions = {
  path: "/",
  maxAge: 60 * 60 * 24 * 365,
  sameSite: "lax" as const,
};

function negotiateLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(localeCookieName)?.value;
  if (isLocale(saved)) return saved;

  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const tags = header
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter((tag): tag is string => Boolean(tag));

  for (const tag of tags) {
    const base = tag.split("-")[0];
    if (base === "pt") return "pt";
    if (base === "en") return "en";
  }

  return defaultLocale;
}

function continueWithLocale(request: NextRequest, locale: Locale) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.cookies.set(localeCookieName, locale, cookieOptions);
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const localeInPath = localeFromPathname(pathname);

  if (localeInPath && locales.includes(localeInPath)) {
    return continueWithLocale(request, localeInPath);
  }

  const locale = negotiateLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  const response = NextResponse.redirect(url);
  response.cookies.set(localeCookieName, locale, cookieOptions);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|opengraph-image|.*\\..*).*)"],
};
