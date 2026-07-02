# Brightwater Family Law — Desktop Site Guide

This document explains every section of the Brightwater single-page website as it appears on **desktop and tablet** (screens `md` and wider, roughly 768px+). It covers what visitors see, what the copy says, how each section is built in code, and what animations run.

---

## Overview

**What it is:** A single scrolling marketing site for a Brisbane/Gold Coast family law firm. One page, many sections, one primary goal: get visitors to book a free 20-minute consultation.

**Section order (top to bottom):**

1. Header (sticky navigation)
2. Hero
3. How we can help (Practice Areas)
4. Team
5. What happens when you reach out (How It Works)
6. Testimonials
7. FAQ
8. Final CTA
9. Booking (Calendly)
10. Footer

**Tech stack:**

| Layer | Technology |
|-------|------------|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS |
| Scroll animations | Framer Motion (`FadeIn` component) |
| Carousel animations | Framer Motion (`AnimatePresence`) |
| Booking widget | `react-calendly` |
| Icons | `lucide-react` |

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

**Brand mark:** `LogoMark.tsx` is an inline SVG of three wave strokes in sage (`#4F6B58`). `LogoWordmark.tsx` renders “Brightwater” + “Family Law” as live text (not an image). The wave mark uses `block self-center` and a `-4px` top margin so it sits vertically centered against the two-line wordmark. Header and Footer logo lockups use `flex items-center gap-3`.

**Decorative dividers:** Standalone horizontal rules and row separators use the exact sand hex `#EAE4D2` (not the Tailwind token) for consistent rendering across browsers. Decorative dividers are **desktop only** — hidden on mobile to avoid inconsistent thin-line rendering between Android Chrome and iOS Safari. Functional borders (FAQ accordion items, header chrome, card frames) are unchanged.

**Primary CTA everywhere:** “Book your free consultation” links to `#booking`.

---

## Shared Animation System — `FadeIn.tsx`

Most sections use a reusable wrapper called `FadeIn`. It is built with Framer Motion.

**How it works:**

- Content starts invisible (and optionally offset or scaled).
- When the element scrolls into view, it animates to full visibility.
- Animation runs **once only** (`viewport: { once: true }`).
- Trigger fires slightly before the element is fully on screen (`margin: '-80px'`).
- Default duration: 0.6s. Easing: custom ease-out `[0.21, 0.47, 0.32, 0.98]`.

**Available directions:**

| Direction | Effect |
|-----------|--------|
| `up` | Fades in while moving up 20px |
| `down` | Fades in while moving down 20px |
| `left` | Fades in while sliding from the left |
| `right` | Fades in while sliding from the right |
| `none` | Pure fade, no movement |
| `scale` | Fades in while scaling from 97% to 100% |

---

## Section 1 — Header

**File:** `src/components/Header.tsx`

### What visitors see

- Sticky bar at the top with cream background and subtle blur.
- Left: wave logo + “Brightwater / Family Law” wordmark (links to top of page).
- Right: horizontal navigation — Practice areas, About, FAQ — plus a sage CTA button.
- The header stays visible while scrolling.

### Content

| Element | Text / Link |
|---------|-------------|
| Logo | Brightwater Family Law |
| Nav link 1 | Practice areas → `#practice-areas` |
| Nav link 2 | About → `#team` |
| Nav link 3 | FAQ → `#faq` |
| CTA button | Book your free consultation → `#booking` |

### How it is built

- `sticky top-0 z-50` keeps it pinned.
- Logo anchor uses `flex items-center gap-3` to vertically center `LogoMark` against `LogoWordmark`.
- Navigation uses `hidden md:flex` — only visible on desktop.
- Hamburger menu is `md:hidden` — hidden on desktop.
- `PrimaryButton.tsx` is the shared CTA component.
- Menu open/close state uses React `useState`.

### Animation

- No scroll animation on the header itself.
- Button has CSS hover transition (`hover:bg-sage-dark`).

---

## Section 2 — Hero

**File:** `src/components/Hero.tsx`

### What visitors see (desktop)

- Split layout: text on the left (~52% width), photo on the right half of the screen.
- Large headline, supporting paragraph, and sage CTA button.
- Photo bleeds to the right edge with a multi-stop cream gradient fading into the image from the left.
- Generous vertical padding (`py-32`).

### Content

| Element | Copy |
|---------|------|
| Headline | You don't have to figure this out *alone*. |
| Subhead | Brightwater Family Law has helped Brisbane and Gold Coast families through separation, custody and property matters for over 18 years. Start with a free 20-minute consultation. |
| CTA | Book your free consultation |

### How it is built

- Desktop image block: `absolute inset-0 left-1/2 hidden md:block` — occupies right 50%.
- Image: `/hero-image.png` with `object-[10%_20%]` crop positioning.
- Left gradient overlay is an inline `linear-gradient` from solid cream to transparent at 65%.
- Text container: `max-w-7xl` centered, content capped at `max-w-[52%]`.
- Headline: `text-6xl` on desktop.
- Mobile-specific blocks use `md:hidden` and are not rendered on desktop.

### Animation

- Text block wrapped in `<FadeIn direction="none" duration={0.8} delay={0.2}>`.
- Pure fade — no vertical movement. Quiet, calm entrance.

---

## Section 3 — How We Can Help (Practice Areas)

**File:** `src/components/PracticeAreas.tsx`  
**Anchor:** `#practice-areas`

### What visitors see (desktop)

- Cream background, wide container (`max-w-7xl`).
- Section title, then four editorial rows in a three-column grid:
  - Column 1: large faded number (01–04)
  - Column 2: service title
  - Column 3: description
- Rows separated by bottom borders using `md:border-b md:border-[#EAE4D2]` (desktop only).

### Content

| # | Title | Description |
|---|-------|-------------|
| 01 | Divorce & separation | Clear, compassionate support when your relationship ends… |
| 02 | Property settlements | Fair division of assets and debts explained in plain English… |
| 03 | Parenting & custody arrangements | Practical parenting plans that put your children first… |
| 04 | Mediation | A calmer path to resolution… |

### How it is built

- Data stored in a `areas` array inside the component; mapped to rows with `.map()`.
- Grid: `md:grid-cols-[120px_1fr_1fr]` — fixed 120px number column.
- Numbers styled `text-sage/20` at `text-7xl` for a subtle editorial look.
- Row dividers: `border-b-0 md:border-b md:border-[#EAE4D2]` — explicit hex, no borders on mobile.
- `divide-y` is **not** used on the parent (breaks inside animation wrappers); each row has its own border on desktop.

### Animation

| Element | Animation |
|---------|-----------|
| Section header | `FadeIn direction="up"` |
| Row 01 | `FadeIn direction="left" delay={0}` |
| Row 02 | `FadeIn direction="left" delay={0.12}` |
| Row 03 | `FadeIn direction="left" delay={0.24}` |
| Row 04 | `FadeIn direction="left" delay={0.36}` |

Rows slide in from the left sequentially — deliberate, left-to-right reveal.

---

## Section 4 — Team

**File:** `src/components/Team.tsx`  
**Anchor:** `#team`

### What visitors see (desktop)

- Sand background.
- Section header with title + intro paragraph.
- **Featured card:** Catherine Walsh in a wide horizontal card (55% image / 45% bio), tall image (520px).
- **Three associate cards** in a horizontal row below (`grid-cols-3`).

### Content

| Person | Role | Bio summary |
|--------|------|-------------|
| Catherine Walsh | Principal Solicitor | 18 years' experience. Leads with warmth and courtroom experience. |
| James Okonkwo | Senior Associate | Explains complex property matters clearly. |
| Priya Sharma | Solicitor | Parenting arrangements, calm practical approach. |
| Emma Lindqvist | Solicitor | Mediation and early resolution. |

### How it is built

- Team data in a `team` array with a `featured: true` flag on Catherine.
- `principal` and `associates` split via `.find()` and `.filter()`.
- Photos from `/public/` (e.g. `catherine-walsh.png`).
- Photo crops tuned per person with `object-cover` position classes.
- Cards use `rounded-2xl`, `bg-cream`, `shadow-card`.

### Animation

| Element | Animation |
|---------|-----------|
| Section header | `FadeIn direction="up"` |
| Catherine card | `FadeIn direction="scale" duration={0.8} delay={0.1}` |
| James card | `FadeIn direction="up" delay={0.1}` |
| Priya card | `FadeIn direction="up" delay={0.22}` |
| Emma card | `FadeIn direction="up" delay={0.34}` |

Catherine scales up gently; associates fade up in sequence.

---

## Section 5 — What Happens When You Reach Out (How It Works)

**File:** `src/components/HowItWorks.tsx`  
**Anchor:** `#how-it-works`

### What visitors see (desktop)

- Dark sage background (`bg-sage-dark`).
- Cream headline and subhead.
- Three floating cream cards in a cascading zigzag:
  - Card 1: left-aligned, 60% width
  - Card 2: right-aligned, 60% width, slightly offset down
  - Card 3: left-aligned, 60% width, offset further down
- Each card has a sage accent line, question heading, and answer text.
- Slightly different cream opacities per card (`bg-cream`, `bg-cream/95`, `bg-cream/90`).
- **Living background:** 48 faint animated wave SVGs drift and fade across the entire section.

### Content

| Card | Question | Answer theme |
|------|----------|--------------|
| 1 | What do I do first? | Book via scheduler below, no prep needed |
| 2 | What will happen in that first call? | Listen, gentle questions, plain language |
| 3 | What am I committing to? | Nothing — free, no obligation |

### How it is built

- `WaveBackground` component renders 48 `motion.svg` elements positioned across 8 vertical zones.
- Each wave independently animates opacity `[0 → 0.07 → 0.07 → 0]` on a loop with unique delay, duration, and random `repeatDelay`.
- Waves use cream stroke `#F6F2EA` at 7% peak opacity — subtle water movement on-brand.
- Cards are hard-coded (not mapped) to control left/right alignment and offsets.
- Desktop offsets: `ml-auto`, `md:-translate-y-2`, `md:mt-6` create the cascade.
- `pointer-events-none` on background so waves never block clicks.

### Animation

| Element | Animation |
|---------|-----------|
| Section header | `FadeIn direction="up"` |
| Card 1 | `FadeIn direction="up" delay={0.1}` |
| Card 2 | `FadeIn direction="up" delay={0.2}` |
| Card 3 | `FadeIn direction="up" delay={0.3}` |
| Background waves | Continuous Framer Motion opacity loop (always running) |

---

## Section 6 — Testimonials

**File:** `src/components/Testimonials.tsx`  
**Anchor:** `#testimonials`

### What visitors see (desktop)

- Cream background.
- Section title.
- **Large featured quote** (italic, `text-3xl`) with name and context below.
- Horizontal divider (`hidden md:block`, `#EAE4D2`).
- **Two secondary quotes** side by side (`grid-cols-2`).
- Pill-shaped progress indicators (3 dots).
- Second divider + three trust signal lines in a horizontal row (wrapped in `hidden md:block` — desktop only).

### Content — three rotating sets

Each set contains one featured quote and two secondary quotes. All three client stories rotate:

| Client | Context |
|--------|---------|
| Sarah M. | Parenting arrangements, Brisbane |
| David & Li T. | Property settlement, Gold Coast |
| Michelle R. | Mediation, Brisbane |

**Trust signals (static, desktop only):**

- A small team. You work with the same people throughout.
- Plain English advice, never legal jargon for its own sake.
- Serving Brisbane and the Gold Coast for over a decade.

### How it is built

- `testimonialSets` array holds 3 complete layouts.
- `useState` tracks `current` set index.
- `useEffect` + `setInterval` rotates every **6 seconds**.
- Progress pill buttons let users jump to any set manually.
- `AnimatePresence` handles crossfade between sets (no `mode="wait"` — exit and enter overlap).
- Exiting content uses `position: 'absolute'` so new content fades in underneath without a blank gap.
- Fixed `min-h` containers prevent layout jump during transitions.
- **Dividers:** both standalone divider lines use `hidden md:block h-px w-full bg-[#EAE4D2]`. The second divider and trust signals are wrapped together in `<div className="hidden md:block">`. No decorative divider lines render on mobile.

### Animation

| Element | Animation |
|---------|-----------|
| Featured quote | Crossfade: opacity + y shift, 0.9s |
| Secondary quotes | Crossfade: 0.9s with 0.05s delay |
| Progress pills | CSS `transition-all duration-500` on width/color |
| Section header & trust signals | No animation |

---

## Section 7 — FAQ

**File:** `src/components/FAQ.tsx`  
**Anchor:** `#faq`

### What visitors see (desktop)

- Sand background, narrower container (`max-w-3xl`).
- Title + intro paragraph.
- Cream accordion card with 6 questions.
- One question open at a time; chevron rotates when open.
- First question open by default.
- Accordion item borders (`border-b border-sand`) are **functional** — they remain visible on all screen sizes and were not changed by the decorative divider fix.

### Content — 6 questions

1. Is the consultation really free and no-obligation?
2. What happens during the 20-minute call?
3. How do I know if Brightwater is the right fit for my situation?
4. How much will it cost if I go ahead?
5. Is everything I tell you confidential?
6. How long does the family law process usually take?

### How it is built

- `faqs` array mapped to `FaqAccordionItem` sub-components.
- `useState<number | null>` tracks which item is open (`openIndex`).
- Click toggles open/closed; clicking open item closes it.
- `hidden={!isOpen}` on answer panel (accessible `aria-expanded` on button).
- Chevron from `lucide-react` with `rotate-180` when open.

### Animation

| Element | Animation |
|---------|-----------|
| Section header | `FadeIn direction="up"` on scroll |
| Accordion items | No entrance animation — only chevron CSS `transition-transform` on open/close |

---

## Section 8 — Final CTA

**File:** `src/components/FinalCTA.tsx`

### What visitors see (desktop)

- Dark sage background, centered narrow content (`max-w-3xl`).
- Headline, body copy, and CTA button — all center-aligned.

### Content

| Element | Copy |
|---------|------|
| Headline | When you're ready, we're here. |
| Body | Book a free 20-minute consultation and leave knowing exactly where you stand. No commitment, no pressure. Just a conversation with someone who understands Queensland family law. |
| CTA | Book your free consultation |

### How it is built

- `PrimaryButton` component for the CTA.
- Centered with `text-center` inside `FadeIn` wrapper.

### Animation

- Entire content block: `FadeIn direction="up" duration={0.7} delay={0.1}` — confident fade up on scroll.

---

## Section 9 — Booking

**File:** `src/components/Booking.tsx`  
**Anchor:** `#booking`

### What visitors see (desktop)

- Sand background, centered layout.
- Title and short intro.
- Embedded Calendly scheduling widget in a cream card with border and shadow.

### Content

| Element | Copy |
|---------|------|
| Headline | Ready to take the first step? |
| Body | Book your free 20-minute consultation below. No pressure, no obligation, just clarity on where you stand. |

### How it is built

- `react-calendly` `InlineWidget` embeds the scheduler.
- Calendly URL: `https://calendly.com/noemibanaau/30min`
- Brand color passed to Calendly: `primaryColor: '4f6b58'` (sage).
- `useCalendlyEventListener` listens for `onPageHeightResize` and dynamically updates widget height so there is no scrollbar inside the iframe.
- Widget sits in `rounded-lg border border-sand bg-cream shadow-card`.

### Animation

- No scroll or entrance animations on this section.

---

## Section 10 — Footer

**File:** `src/components/Footer.tsx`

### What visitors see (desktop)

- Dark sage background with top border.
- Two-column layout: brand block left, contact + service areas right.
- Copyright line at bottom.

### Content

| Element | Copy |
|---------|------|
| Tagline | Helping Brisbane and Gold Coast families find steadier ground since 2006. |
| Email | hello@brightwaterfamilylaw.com.au |
| Service areas | Brisbane, Gold Coast |
| Copyright | © [year] Brightwater Family Law. All rights reserved. |

### How it is built

- `LogoMark` + `LogoWordmark variant="light"` for cream text on dark background.
- Logo lockup uses `flex items-center gap-3` (same vertical alignment as header).
- `flex-row justify-between` on desktop.
- No phone number — single conversion path via email and booking.
- `md:pb-0` on copyright (no extra bottom padding needed on desktop).

### Animation

- None.

---

## Desktop-Only Notes

| Feature | Behavior on desktop |
|---------|---------------------|
| Header nav | Full horizontal links + CTA visible |
| Hamburger menu | Hidden |
| Mobile sticky bar | Hidden (`md:hidden`) |
| Main content bottom padding | None (`md:pb-0`) — sticky bar not needed |
| Hero layout | Side-by-side text and image |
| Practice areas | Three-column grid rows |
| Team associates | Three cards in one row |
| How It Works cards | Zigzag left/right cascade |
| Testimonials secondary | Two columns side by side |
| Testimonials dividers | Both divider lines desktop only (`hidden md:block`, `#EAE4D2`) |
| Practice areas row dividers | `#EAE4D2` borders, desktop only |
| Trust signals + bottom divider | Desktop only (`hidden md:block`) — three lines in a horizontal row |
| Footer | Two-column layout |

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
| Scroll animations | `src/components/FadeIn.tsx` |
| Shared CTA | `src/components/PrimaryButton.tsx` |
| Logo | `src/components/LogoMark.tsx`, `LogoWordmark.tsx` |

---

*Last updated: July 2026 — reflects current codebase state.*
