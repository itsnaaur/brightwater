# Brightwater Family Law — Mobile Site Guide

This document explains every section of the Brightwater single-page website as it appears on **mobile phones** (screens below 768px / before the `md` Tailwind breakpoint). It covers what visitors see, what the copy says, how each section is built in code, and what animations run.

---

## Overview

**What it is:** A single scrolling marketing site for a Brisbane/Gold Coast family law firm. One page, many sections, one primary goal: get visitors to book a free 20-minute consultation.

**Section order (top to bottom):**

1. Header (sticky navigation + hamburger menu)
2. Hero
3. How we can help (Practice Areas)
4. Team
5. What happens when you reach out (How It Works)
6. Testimonials
7. FAQ
8. Final CTA
9. Booking (Calendly)
10. Footer
11. **Mobile Sticky Bar** (fixed bottom CTA — mobile only)

**Tech stack:**

| Layer | Technology |
|-------|------------|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Scroll animations | Framer Motion (`FadeIn` component) |
| Carousel animations | Framer Motion (`AnimatePresence`) |
| Booking widget | `react-calendly` |
| Icons | `lucide-react` (hamburger, close, chevron) |

**Source files:** Each section lives in `src/components/`. The page is wired together in `src/App.tsx`.

---

## Design System

**Colors** (defined in `tailwind.config.js`):

| Token | Hex | Usage |
|-------|-----|--------|
| `cream` | `#F6F2EA` | Main light background |
| `sand` | `#EAE4D2` | Alternate section background, dividers |
| `sage` | `#4F6B58` | Brand green, buttons, accents |
| `sage-dark` | `#33433A` | Dark sections (How It Works, Final CTA, Footer) |
| `charcoal` | `#22211C` | Headings |
| `charcoal-soft` | `#5B5848` | Body text |

**Fonts:**

- **Lora** (`font-heading`) — headings and featured quotes
- **Public Sans** (`font-body`) — body copy, labels, buttons

**Brand mark:** `LogoMark.tsx` is an inline SVG of three wave strokes in sage (`#4F6B58`). `LogoWordmark.tsx` renders “Brightwater” + “Family Law” as live text. The wave mark uses `block self-center` and a `-4px` top margin so it aligns vertically with the two-line wordmark in the header and footer lockups (`flex items-center gap-3`).

**Decorative dividers:** All decorative horizontal rules are **hidden on mobile** (`hidden md:block` or `border-b-0 md:border-b`) using explicit sand hex `#EAE4D2`. This prevents thin divider lines from rendering inconsistently across Android Chrome and iOS Safari. Functional borders (FAQ accordion, header, sticky bar, card frames) remain visible.

**Primary CTA everywhere:** “Book your free consultation” links to `#booking`.

---

## Mobile-Only Features

These elements exist only on mobile and are critical to the mobile experience:

### Mobile Sticky Bar

**File:** `src/components/MobileStickyBar.tsx`

- Fixed to the bottom of the screen (`fixed bottom-0 z-50`).
- Hidden on desktop (`md:hidden`).
- Contains a full-width sage CTA button: “Book your free consultation”.
- Cream background with backdrop blur and a soft gradient fade at the top so it does not hard-cut over content.
- Ensures the booking action is always one tap away while scrolling.

### Extra bottom padding

**File:** `src/App.tsx`

- `<main className="pb-24 md:pb-0">` — 96px bottom padding on mobile so the sticky bar does not cover the last section content.
- Footer copyright also has `pb-24 md:pb-0` for the same reason.

### Hamburger navigation

**File:** `src/components/Header.tsx`

- Desktop nav links are hidden (`hidden md:flex`).
- Hamburger icon (Menu / X from lucide-react) shown instead.
- Tapping opens a dropdown panel with nav links and a full-width CTA button.
- Links close the menu on tap via `onClick={closeMenu}`.
- Logo anchor uses `flex items-center gap-3` with vertically centered `LogoMark`.

---

## Shared Animation System — `FadeIn.tsx`

Most sections use a reusable wrapper called `FadeIn`, built with Framer Motion.

**How it works:**

- Content starts invisible (and optionally offset or scaled).
- When the element scrolls into view, it animates to full visibility.
- Animation runs **once only** — does not repeat when scrolling back up.
- Trigger fires slightly before the element is fully on screen.
- Default duration: 0.6s with a calm custom ease-out curve.

**Available directions:** `up`, `down`, `left`, `right`, `none` (pure fade), `scale`.

On mobile, the same animations run as on desktop. Layout differences below do not change the animation logic.

---

## Section 1 — Header

**File:** `src/components/Header.tsx`

### What visitors see (mobile)

- Sticky bar at top: logo + wordmark on the left, hamburger icon on the right.
- No inline nav links visible.
- Tapping hamburger opens a full-width dropdown below the header with:
  - Practice areas
  - About
  - FAQ
  - Full-width “Book your free consultation” button

### Content

| Element | Text / Link |
|---------|-------------|
| Logo | Brightwater Family Law |
| Nav link 1 | Practice areas → `#practice-areas` |
| Nav link 2 | About → `#team` |
| Nav link 3 | FAQ → `#faq` |
| CTA button | Book your free consultation → `#booking` |

### How it is built

- `useState` toggles `menuOpen` true/false.
- Logo anchor: `flex items-center gap-3` with `LogoMark` (`self-center`, `-4px` margin) beside `LogoWordmark`.
- Menu panel: `md:hidden` — only renders on mobile.
- All tap targets meet 44px minimum height for accessibility.
- `aria-expanded`, `aria-controls`, and `aria-label` on the menu button.

### Animation

- No scroll animation on the header.
- Menu icon swaps between Menu and X instantly (no transition).
- CTA button has CSS hover/active color transition.

---

## Section 2 — Hero

**File:** `src/components/Hero.tsx`

### What visitors see (mobile)

- **Stacked layout** (not side-by-side):
  1. Photo on top — fixed 400px height, full width
  2. Text block below on cream background
- Photo has a bottom gradient fade blending into the cream content area (no visible seam).
- Headline, paragraph, and **full-width CTA button** below the image.

### Content

| Element | Copy |
|---------|------|
| Headline | You don't have to figure this out *alone*. |
| Subhead | Brightwater Family Law has helped Brisbane and Gold Coast families through separation, custody and property matters for over 18 years. Start with a free 20-minute consultation. |
| CTA | Book your free consultation (full width) |

### How it is built

- Mobile image block: `md:hidden`, height `400px`.
- Image crop: `objectPosition: '20% 20%'` (inline style) — tuned for mobile framing.
- Bottom gradient: 70% height multi-stop `linear-gradient` from transparent to cream `#F6F2EA`.
- Text block: separate `div` with `md:hidden`, `px-6 pb-10`.
- Headline: `text-4xl` on mobile (smaller than desktop `text-6xl`).
- CTA: `w-full min-h-[52px]` — full-width tap target.
- Desktop image and text blocks use `hidden md:block` — not shown on mobile.

### Animation

- Mobile text block: `<FadeIn direction="none" duration={0.8} delay={0.2}>`.
- Pure fade — calm entrance with no movement.

---

## Section 3 — How We Can Help (Practice Areas)

**File:** `src/components/PracticeAreas.tsx`  
**Anchor:** `#practice-areas`

### What visitors see (mobile)

- Cream background, full-width with side padding (`px-6`).
- Section title, then four stacked rows.
- Each row stacks vertically: large number → title → description (single column).
- **No row divider lines on mobile** — borders use `border-b-0 md:border-b` so separators only appear on desktop.

### Content

| # | Title | Description |
|---|-------|-------------|
| 01 | Divorce & separation | Clear, compassionate support when your relationship ends… |
| 02 | Property settlements | Fair division of assets and debts explained in plain English… |
| 03 | Parenting & custody arrangements | Practical parenting plans that put your children first… |
| 04 | Mediation | A calmer path to resolution… |

### How it is built

- On mobile: `grid-cols-1` (single column, no `md:grid-cols` applied).
- Row borders: `border-b-0` on mobile, `md:border-b md:border-[#EAE4D2]` on desktop.
- Numbers at `text-6xl` (slightly smaller than desktop `text-7xl`).
- Titles at `text-2xl` (desktop uses `text-3xl`).
- Vertical padding per row: `py-10`.

### Animation

| Element | Animation |
|---------|-----------|
| Section header | `FadeIn direction="up"` on scroll |
| Each row | `FadeIn direction="left"` with staggered delay (`index * 0.12`) |

Same left-slide animation as desktop, but in a single-column stack.

---

## Section 4 — Team

**File:** `src/components/Team.tsx`  
**Anchor:** `#team`

### What visitors see (mobile)

- Sand background.
- Section header (title + intro).
- **Catherine Walsh** — full-width featured card, image on top (360px tall), bio below.
- Subtle cream gradient at bottom of Catherine's photo on mobile only.
- **Three associate cards** stacked vertically (one per row), not side by side.

### Content

| Person | Role |
|--------|------|
| Catherine Walsh | Principal Solicitor — 18 years' experience |
| James Okonkwo | Senior Associate |
| Priya Sharma | Solicitor |
| Emma Lindqvist | Solicitor |

### How it is built

- Catherine card: `grid-cols-1` on mobile (image stacked above bio).
- Image height: `h-[360px]` on mobile vs `h-[520px]` on desktop.
- Mobile-only gradient on Catherine photo: `bg-gradient-to-t from-cream/30 md:hidden`.
- Associates: `grid-cols-1 gap-5` on mobile.
- Each associate card: photo (340px) + text block below.
- Photo crops: Priya at `object-[center_70%]`, others at `object-[center_60%]`.

### Animation

| Element | Animation |
|---------|-----------|
| Section header | `FadeIn direction="up"` |
| Catherine card | `FadeIn direction="scale" duration={0.8} delay={0.1}` |
| Associate cards | `FadeIn direction="up"` staggered: 0.1s, 0.22s, 0.34s |

---

## Section 5 — What Happens When You Reach Out (How It Works)

**File:** `src/components/HowItWorks.tsx`  
**Anchor:** `#how-it-works`

### What visitors see (mobile)

- Dark sage background.
- Cream headline and subhead.
- Three cream cards **stacked vertically** with `gap-6` between them.
- No left/right zigzag on mobile — all cards full width.
- Same sage accent line, question, and answer inside each card.
- Animated wave background still runs across the full section.

### Content

| Card | Question |
|------|----------|
| 1 | What do I do first? |
| 2 | What will happen in that first call? |
| 3 | What am I committing to? |

### How it is built

- Cards use `md:w-[60%]` — on mobile this is ignored, cards are full width.
- Offset classes (`ml-auto`, `md:-translate-y-2`, `md:mt-6`) only apply at `md` breakpoint — no cascade on mobile.
- `flex flex-col gap-6 md:gap-0` — vertical gap on mobile, no gap on desktop (offsets handle spacing there).
- `WaveBackground`: 48 animated SVG waves. Slightly smaller on mobile (`w-[180px]` vs `w-[240px]` on desktop).

### Animation

| Element | Animation |
|---------|-----------|
| Section header | `FadeIn direction="up"` |
| Cards 1, 2, 3 | `FadeIn direction="up"` at 0.1s, 0.2s, 0.3s delays |
| Background waves | Continuous opacity fade loop (always running, 7% peak opacity) |

---

## Section 6 — Testimonials

**File:** `src/components/Testimonials.tsx`  
**Anchor:** `#testimonials`

### What visitors see (mobile)

- Cream background.
- Section title.
- Large featured quote (`text-2xl` on mobile).
- **Two secondary quotes stacked vertically** (not side by side) — no divider line between featured and secondary on mobile.
- Three pill progress indicators.
- **Section ends here on mobile** — no dividers, no trust signals. Keeps the mobile view focused on the rotating quotes and the booking action elsewhere on the page.

### Content — rotating sets

Three complete testimonial sets rotate every 6 seconds. Each set has one featured quote and two secondary quotes featuring Sarah M., David & Li T., and Michelle R.

**Trust signals (desktop only — not shown on mobile):**

- A small team. You work with the same people throughout.
- Plain English advice, never legal jargon for its own sake.
- Serving Brisbane and the Gold Coast for over a decade.

### How it is built

- `grid-cols-1` for secondary quotes on mobile (desktop uses `md:grid-cols-2`).
- Featured container: `min-h-[280px]` on mobile (taller than desktop `min-h-[220px]` to accommodate longer quotes).
- Secondary container: `min-h-[180px]` prevents layout jump during crossfade.
- Tap pill indicators to jump to any set manually.
- All decorative divider lines use `hidden md:block` — none render on mobile (including the line between featured and secondary quotes).
- The trust signals block also uses `hidden md:block` — completely removed from the mobile DOM flow.

### Animation

| Element | Animation |
|---------|-----------|
| Featured quote | Crossfade with y-shift, 0.9s — exit and enter overlap (no blank gap) |
| Secondary quotes | Crossfade, 0.9s with 0.05s delay |
| Auto-rotate | Every 6 seconds via `setInterval` |
| Progress pills | CSS width/color transition on tap |

---

## Section 7 — FAQ

**File:** `src/components/FAQ.tsx`  
**Anchor:** `#faq`

### What visitors see (mobile)

- Sand background, narrower padding (`px-5`).
- Title at `text-3xl` (desktop uses `text-4xl`).
- Intro paragraph.
- Cream accordion card with 6 tappable questions.
- Tapping a question expands the answer below it.
- Chevron icon rotates when open.

### Content — 6 questions

1. Is the consultation really free and no-obligation?
2. What happens during the 20-minute call?
3. How do I know if Brightwater is the right fit for my situation?
4. How much will it cost if I go ahead?
5. Is everything I tell you confidential?
6. How long does the family law process usually take?

### How it is built

- Accordion uses `useState` — only one item open at a time.
- First question open by default (`openIndex = 0`).
- Question buttons: full width, `min-h-[44px]` for touch targets.
- Answers use `hidden={!isOpen}` with proper `aria-expanded` attributes.
- Accordion `border-b border-sand` separators are functional UI — they remain on mobile (not part of the decorative divider hide rule).

### Animation

| Element | Animation |
|---------|-----------|
| Section header | `FadeIn direction="up"` on scroll |
| Accordion open/close | Chevron CSS `transition-transform rotate-180` only |

---

## Section 8 — Final CTA

**File:** `src/components/FinalCTA.tsx`

### What visitors see (mobile)

- Dark sage background.
- Centered headline (`text-3xl`), body copy, and CTA button.
- Side padding `px-5`.

### Content

| Element | Copy |
|---------|------|
| Headline | When you're ready, we're here. |
| Body | Book a free 20-minute consultation and leave knowing exactly where you stand… |
| CTA | Book your free consultation |

### How it is built

- `PrimaryButton` links to `#booking`.
- Centered layout inside `FadeIn` wrapper.

### Animation

- `FadeIn direction="up" duration={0.7} delay={0.1}` on scroll.

---

## Section 9 — Booking

**File:** `src/components/Booking.tsx`  
**Anchor:** `#booking`

### What visitors see (mobile)

- Sand background, centered text.
- Title and intro paragraph.
- Calendly scheduling widget embedded full width in a cream card.
- Widget height adjusts dynamically as the user navigates Calendly steps.

### Content

| Element | Copy |
|---------|------|
| Headline | Ready to take the first step? |
| Body | Book your free 20-minute consultation below. No pressure, no obligation, just clarity on where you stand. |

### How it is built

- `react-calendly` `InlineWidget` with `minWidth: '320px'`.
- Height managed by `useCalendlyEventListener` — resizes iframe as Calendly pages change.
- Sage brand color passed to Calendly: `#4F6B58`.
- Important on mobile: widget must be wide enough to be usable — `minWidth 320px` ensures this.

### Animation

- None.

---

## Section 10 — Footer

**File:** `src/components/Footer.tsx`

### What visitors see (mobile)

- Dark sage background.
- Everything stacked vertically:
  - Logo + wordmark + tagline
  - Contact (email)
  - Service areas (Brisbane, Gold Coast)
  - Copyright line
- Extra bottom padding (`pb-24`) so copyright is not hidden behind the sticky CTA bar.

### Content

| Element | Copy |
|---------|------|
| Tagline | Helping Brisbane and Gold Coast families find steadier ground since 2006. |
| Email | hello@brightwaterfamilylaw.com.au |
| Service areas | Brisbane, Gold Coast |

### How it is built

- `flex-col` layout on mobile (desktop uses `md:flex-row`).
- Contact and service areas stack unless screen is `sm` or wider.
- No phone number displayed.

### Animation

- None.

---

## Section 11 — Mobile Sticky Bar (mobile only)

**File:** `src/components/MobileStickyBar.tsx`

### What visitors see

- Always visible fixed bar at the bottom of the screen while scrolling.
- Soft gradient fade above the bar.
- Full-width sage button: “Book your free consultation”.

### How it is built

- `fixed bottom-0 left-0 right-0 z-50 md:hidden`.
- `z-50` matches header z-index — both stay above page content.
- `backdrop-blur-sm` and `bg-cream/95` for a frosted effect.
- Links to `#booking`.

### Animation

- None — always present on mobile.
- Button has CSS color transition on press/hover.

---

## Mobile vs Desktop — Quick Comparison

| Feature | Mobile | Desktop |
|---------|--------|---------|
| Navigation | Hamburger menu | Horizontal links + CTA |
| Sticky bottom CTA | Yes | No |
| Main bottom padding | `pb-24` | None |
| Hero layout | Image stacked above text | Text left, image right |
| Hero headline size | `text-4xl` | `text-6xl` |
| Hero CTA | Full width | Auto width |
| Practice areas | Single column rows, no row dividers | Three-column grid with `#EAE4D2` row borders |
| Team associates | Stacked cards | Three-column row |
| How It Works cards | Stacked full width | Zigzag 60% width cascade |
| Testimonials dividers | Hidden (not rendered) | Both lines visible (`#EAE4D2`) |
| Testimonials secondary | Stacked quotes | Two columns |
| Trust signals + bottom divider | Hidden (not rendered) | Horizontal row below second divider |
| Decorative sand dividers | Hidden on all sections | Visible where specified |
| Logo wave alignment | `self-center` + `-4px` margin in `items-center` flex lockup | Same |
| Footer layout | Stacked | Two columns |
| Wave background size | 180px wide SVGs | 240px wide SVGs |

---

## File Reference

| Section | Component file |
|---------|---------------|
| Page shell | `src/App.tsx` |
| Header | `src/components/Header.tsx` |
| Hero | `src/components/Hero.tsx` |
| Practice Areas | `src/components/PracticeAreas.tsx` |
| Team | `src/components/Team.tsx` |
| How It Works | `src/components/HowItWorks.tsx` |
| Testimonials | `src/components/Testimonials.tsx` |
| FAQ | `src/components/FAQ.tsx` |
| Final CTA | `src/components/FinalCTA.tsx` |
| Booking | `src/components/Booking.tsx` |
| Footer | `src/components/Footer.tsx` |
| Mobile sticky CTA | `src/components/MobileStickyBar.tsx` |
| Scroll animations | `src/components/FadeIn.tsx` |
| Shared CTA | `src/components/PrimaryButton.tsx` |
| Logo | `src/components/LogoMark.tsx`, `LogoWordmark.tsx` |

---

*Last updated: July 2026 — reflects current codebase state.*
