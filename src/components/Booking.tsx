import { useState } from 'react'
import { InlineWidget, useCalendlyEventListener } from 'react-calendly'

// Set CALENDLY_URL in .env.local (dev) or your host's environment settings.
const CALENDLY_URL = import.meta.env.CALENDLY_URL

export default function Booking() {
  const [height, setHeight] = useState(700)

  useCalendlyEventListener({
    onPageHeightResize: (event) => {
      const nextHeight = event.data.payload?.height
      if (typeof nextHeight === 'number' && nextHeight > 0) {
        setHeight(nextHeight)
      }
    },
  })

  return (
    <section id="booking" className="bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <h2 className="font-heading text-3xl text-charcoal md:text-4xl">
          Ready to take the first step?
        </h2>
        <p className="mt-4 font-body text-base leading-relaxed text-charcoal-soft md:text-lg">
          Book your free 20-minute consultation below. No pressure, no obligation,
          just clarity on where you stand.
        </p>

        <div className="mt-10 overflow-hidden rounded-lg border border-sand bg-cream shadow-card">
          {CALENDLY_URL ? (
            <InlineWidget
              url={CALENDLY_URL}
              pageSettings={{ primaryColor: '4f6b58' }}
              styles={{ minWidth: '320px', height: `${height}px` }}
            />
          ) : (
            <p className="px-6 py-16 font-body text-sm text-charcoal-soft">
              Booking calendar unavailable. Set <code>CALENDLY_URL</code> to show it.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
