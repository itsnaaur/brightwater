import { useState } from 'react'
import { InlineWidget, useCalendlyEventListener } from 'react-calendly'

const CALENDLY_URL = 'https://calendly.com/noemibanaau/30min'

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
          <InlineWidget
            url={CALENDLY_URL}
            pageSettings={{ primaryColor: '4f6b58' }}
            styles={{ minWidth: '320px', height: `${height}px` }}
          />
        </div>
      </div>
    </section>
  )
}
