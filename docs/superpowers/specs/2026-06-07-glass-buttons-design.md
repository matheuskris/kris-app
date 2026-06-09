# Glass Button System — Design Spec

**Date:** 2026-06-07
**Status:** Approved

## Summary

Replace all existing button styles with a consistent Crystal Shimmer glassmorphism system. Every button on the site shares one of two variants (primary or secondary), plus a compact icon-button variant for project cards. A light-sweep shimmer runs across each button on hover, giving a glass-refracting-light feel.

## Visual Design

**Crystal Shimmer style:**
- Frosted glass base: `backdrop-filter: blur(12px)` + semi-transparent background
- Inset top highlight: `inset 0 1px 0 rgba(255,255,255,0.35)` simulates a glass rim
- On hover: a diagonal light sweep (`::after` pseudo-element) crosses the button left-to-right, the background brightens, and the button lifts with `translateY(-2px) scale(1.03)`
- Transition: `0.4s cubic-bezier(0.16, 1, 0.3, 1)` — spring-like, not linear

**Primary variant** (`glass-btn-primary`):
- Background: `linear-gradient(135deg, rgba(123,120,255,0.30) → rgba(88,86,214,0.22))`
- Border: `1px solid rgba(194,193,255,0.35)`
- Text: white
- Shadow at rest: `0 4px 20px rgba(123,120,255,0.22)` + inset highlight
- Shadow on hover: `0 8px 36px rgba(123,120,255,0.50)` + brighter inset highlight

**Secondary variant** (`glass-btn-secondary`):
- Background: `rgba(255,255,255,0.04)` — nearly transparent
- Border: `1px solid rgba(255,255,255,0.12)`
- Text: `rgba(255,255,255,0.75)` → `#fff` on hover
- Border lifts to `rgba(194,193,255,0.45)` on hover with a faint purple glow
- Same shimmer sweep, subtler overall

**Icon button variant** (`glass-icon-btn`):
- 40×40px circle, same glass base, more neutral at rest
- Hover: purple tint emerges, border brightens, scale(1.08)
- Same shimmer sweep scaled to fit

## Architecture

### CSS — `src/app/globals.css`

Three classes: **`.primary-btn`** (rewritten in place — existing usages in Hero and ContactSection require no HTML changes), **`.secondary-btn`** (new), and **`.glass-icon-btn`** (new). Each class carries its own `::after` shimmer rule — no shared base class needed since the backgrounds differ enough that a common selector would complicate overrides without benefit.

### Components to update

| File | Change |
|---|---|
| `src/app/globals.css` | Rewrite `.primary-btn`; add `.secondary-btn`, `.glass-icon-btn` |
| `src/components/home/Hero.tsx` | Add `secondary-btn` class to the secondary CTA link |
| `src/components/projects/ProjectCard.tsx` | Replace inline classes with `glass-icon-btn` |

The contact form submit button (`ContactSection.tsx`) already uses `primary-btn` — it picks up the new style with no changes needed.

## Behaviour

- `active:scale-95` stays on primary buttons for a satisfying press feel
- No changes to routing, form submission logic, or accessibility attributes
- `will-change: transform` kept to hint the GPU before hover animations start

## Out of Scope

- No changes to form inputs, nav links, or any non-button interactive elements
- No new dependencies
