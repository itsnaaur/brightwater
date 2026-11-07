# Brightwater Family Law

A single-page marketing site for **Brightwater Family Law**, a fictional boutique family law firm serving Brisbane and the Gold Coast.

I designed and built it as a design assignment during a job application. This repository is the version that was reviewed. The visual design hasn't changed since.

**Live site:** [brightwater-black.vercel.app](https://brightwater-black.vercel.app)

---

## The idea

Visitors to a family law site are usually stressed, often reading late at night and contacting a lawyer for the first time. The page is built around three goals, in order:

1. **Build trust quickly.** The tone is calm, human and premium without feeling cold or corporate.
2. **Show expertise in seconds.** The firm's practice areas and the people behind it come first.
3. **Get one action:** booking a free 20-minute consultation.

Every section leads back to that consultation. On mobile, a sticky booking button stays within reach the whole way down the page.

## Design system

| Token | Hex | Role |
| --- | --- | --- |
| `cream` | `#F6F2EA` | Page background (never pure white) |
| `sand` | `#EAE4D2` | Alternating section background |
| `sage` | `#4F6B58` | The single accent: buttons, links, highlights |
| `sage-dark` | `#33433A` | Deep sections, hover states |
| `charcoal` | `#22211C` | Primary text (never pure black) |
| `charcoal-soft` | `#5B5848` | Secondary text |

- **Type:** headings use Lora 700, and body text uses Public Sans 400 and 500.
- **Motion:** gentle fade-ins on scroll, a rotating testimonial carousel and faint animated waves behind "How it works", which tie back to the logo.
- **Accessibility:** visible focus rings, touch targets of at least 44px, an ARIA-labelled accordion and navigation, and alt text on all images.

## Page structure

| Section | Component |
| --- | --- |
| Sticky header and mobile menu | `Header.tsx` |
| Hero | `Hero.tsx` |
| Practice areas | `PracticeAreas.tsx` |
| Team | `Team.tsx` |
| How it works | `HowItWorks.tsx` |
| Testimonials | `Testimonials.tsx` |
| FAQ | `FAQ.tsx` |
| Final call to action | `FinalCTA.tsx` |
| Booking (Calendly) | `Booking.tsx` |
| Footer | `Footer.tsx` |
| Mobile sticky booking bar | `MobileStickyBar.tsx` |

Shared pieces: `PrimaryButton`, `FadeIn` (scroll animation wrapper), `LogoMark` and `LogoWordmark`.

## Tech stack

- React 18 and TypeScript
- Vite
- Tailwind CSS, with every colour and font defined as theme tokens in `tailwind.config.js`
- Framer Motion for animation
- `react-calendly` for the booking embed
- `lucide-react` for icons

## Running locally

Requires Node 18 or later.

```bash
npm install
cp .env.example .env.local   # then add your Calendly link
npm run dev
```

Open <http://localhost:5173>.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `CALENDLY_URL` | The Calendly scheduling page embedded in the booking section. If it's missing, the section shows a short notice in place of the calendar. |

### Build

```bash
npm run build     # type-check and production build into dist/
npm run preview   # serve the production build locally
```

## Deployment

The site is a static build and is deployed on Vercel. Set `CALENDLY_URL` in **Project → Settings → Environment Variables**, then redeploy.

## Note

Brightwater Family Law, its team members, testimonials and contact details are all fictional. They exist only for this design.
