# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitors are peers and the public browsing a professional showcase. They are not treated as a hiring funnel first. Other audiences (hiring managers, recruiters, founders) may arrive; conversion is not the stated job of the site.

## Product Purpose

Personal site for Matheus Krisciumas: a remote software engineer based in Brazil. It presents who he is, selected production work, experience, and a way to get in touch.

Success metric: **undecided**. Do not optimize the product around interview volume, lead capture, or a conversion CTA until that is decided.

## Positioning

A bilingual professional showcase of real production systems (healthcare billing, geospatial maps, money movement, a greenfield referral product), not a generic résumé dump or a sales landing page.

## Operating Context

- Routes: localized home (`/{en|pt}`), projects index, blog (empty), 404.
- Home sections: hero, selected work, impact metrics, experience, about, contact.
- Language switch English / Portuguese; default English.
- Contact: LinkedIn as the fastest path; on-site form via Resend; mailto.
- Public site URL: `https://matheuskris.dev`.
- Dev: `npm run dev` (Next.js App Router).

## Capabilities and Constraints

- Confirmed: Next.js App Router, locale prefix `en` | `pt`, static content modules, contact API (`POST /api/contact`), Open Graph image, portrait at `public/profile-pic.jpeg`.
- Open: what “success” means for the site; whether production metrics in current copy are independently verified (they were not marked binding in init).
- Do not invent testimonials, extra clients, extra metrics, or blog posts.

## Brand Commitments

- Name: Matheus Krisciumas. Mark in English chrome: `MATHEUS`.
- Role language in current copy: software engineer / full-stack; remote, Brazil, UTC-3; English and Portuguese.
- Public links: GitHub `https://github.com/matheuskris`, LinkedIn `https://www.linkedin.com/in/matheuskris/`, email `matheuskris@gmail.com`.
- Status: open to conversations; available remotely.
- Keep the on-site contact form and LinkedIn as contact paths.

## Evidence on Hand

Present in current site copy (not independently confirmed during init):

- DBKZ: sole full-stack medical billing, ~R$1.5M/month, 74 hospitals, 25k payment parameters, 4k procedures.
- WITEK: property-map load time cut ~50%; UTM→WGS84; Brazilian notary offices.
- Keiken: async money movement ~R$120k/month; Java/Spring Boot learned on the job.
- Refmed: healthcare referral product from zero (React Native, Next.js, tRPC/Prisma, Firebase chat).
- Production work since 2022; freelance SPA work Aug–Dec 2022.

Assets: `public/profile-pic.jpeg`, `/favicon.ico`.

Absent — do not fabricate: published blog posts, client testimonials, press, third-party logos, extra case studies.

## Product Principles

1. Showcase first: the work and the person lead; the interface should not behave like a conversion funnel until success is defined.
2. Bilingual by default: English and Portuguese stay in lockstep; default locale is English.
3. Real identity only: name, photo, links, location, and availability stay accurate; no invented social proof.
4. Contact stays reachable: LinkedIn plus the on-site form remain first-class, not decorative.
5. Empty is honest: an unpublished blog and missing testimonials stay empty rather than filled with placeholders.
