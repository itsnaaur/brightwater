import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonialSets = [
  {
    featured: {
      quote:
        "I was overwhelmed and didn't know where to start. Catherine didn't make me feel silly for not knowing the right questions to ask. She just listened and helped me understand what I could actually do next. For the first time in weeks I felt like I could breathe.",
      name: "Sarah M.",
      context: "Parenting arrangements, Brisbane",
    },
    secondary: [
      {
        quote:
          "Every other firm made me feel like a case number. Brightwater explained our property settlement step by step. I finally felt like someone was on my side.",
        name: "David & Li T.",
        context: "Property settlement, Gold Coast",
      },
      {
        quote:
          "We were dreading going to court. James guided us through mediation and we reached an agreement in three sessions. I wish we had called sooner.",
        name: "Michelle R.",
        context: "Mediation, Brisbane",
      },
    ],
  },
  {
    featured: {
      quote:
        "We were dreading going to court. James guided us through mediation and we reached an agreement in three sessions. I wish we had called sooner.",
      name: "Michelle R.",
      context: "Mediation, Brisbane",
    },
    secondary: [
      {
        quote:
          "I was overwhelmed and didn't know where to start. Catherine didn't make me feel silly for not knowing the right questions to ask. She just listened and helped me understand what I could actually do next.",
        name: "Sarah M.",
        context: "Parenting arrangements, Brisbane",
      },
      {
        quote:
          "Every other firm made me feel like a case number. Brightwater explained our property settlement step by step. I finally felt like someone was on my side.",
        name: "David & Li T.",
        context: "Property settlement, Gold Coast",
      },
    ],
  },
  {
    featured: {
      quote:
        "Every other firm made me feel like a case number. Brightwater explained our property settlement step by step. I finally felt like someone was on my side.",
      name: "David & Li T.",
      context: "Property settlement, Gold Coast",
    },
    secondary: [
      {
        quote:
          "We were dreading going to court. James guided us through mediation and we reached an agreement in three sessions. I wish we had called sooner.",
        name: "Michelle R.",
        context: "Mediation, Brisbane",
      },
      {
        quote:
          "I was overwhelmed and didn't know where to start. Catherine didn't make me feel silly for not knowing the right questions to ask. She just listened and helped me understand what I could actually do next.",
        name: "Sarah M.",
        context: "Parenting arrangements, Brisbane",
      },
    ],
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialSets.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const set = testimonialSets[current]

  return (
    <section id="testimonials" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">

        {/* Section header */}
        <div className="mb-16 max-w-xl">
          <h2 className="font-heading font-bold text-4xl text-charcoal">
            What clients tell us after that first call
          </h2>
        </div>

        {/* Featured testimonial */}
        <div className="relative min-h-[280px] md:min-h-[220px] mb-16">
          <AnimatePresence>
            <motion.div
              key={`featured-${current}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, position: 'absolute' }}
              transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="mb-16 max-w-3xl relative"
            >
              <p className="font-heading text-2xl md:text-3xl text-charcoal leading-relaxed italic mb-8">
                "{set.featured.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-sage" />
                <div>
                  <p className="font-body text-sm font-medium text-charcoal">
                    {set.featured.name}
                  </p>
                  <p className="font-body text-xs text-charcoal-soft">
                    {set.featured.context}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-px w-full bg-[#EAE4D2] mb-16" />

        {/* Two secondary quotes */}
        <div className="relative min-h-[180px]">
          <AnimatePresence>
            <motion.div
              key={`secondary-${current}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12, position: 'absolute' }}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative"
            >
              {set.secondary.map((item, index) => (
                <div key={index}>
                  <p className="font-body text-base text-charcoal-soft leading-relaxed italic mb-6">
                    "{item.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="h-px w-6 bg-sage/50" />
                    <div>
                      <p className="font-body text-sm font-medium text-charcoal">
                        {item.name}
                      </p>
                      <p className="font-body text-xs text-charcoal-soft">
                        {item.context}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="flex items-center gap-3 mt-16 mb-16">
          {testimonialSets.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-500 rounded-full ${
                index === current
                  ? 'w-8 h-2 bg-sage'
                  : 'w-2 h-2 bg-sage/25 hover:bg-sage/50'
              }`}
              aria-label={`View testimonial set ${index + 1}`}
            />
          ))}
        </div>

        <div className="hidden md:block">
          {/* Divider */}
          <div className="hidden md:block h-px w-full bg-[#EAE4D2] mb-16" />

          {/* Trust signals */}
          <div className="flex flex-row gap-16">
            <p className="font-body text-sm text-charcoal-soft">
              A small team. You work with the same people throughout.
            </p>
            <p className="font-body text-sm text-charcoal-soft">
              Plain English advice, never legal jargon for its own sake.
            </p>
            <p className="font-body text-sm text-charcoal-soft">
              Serving Brisbane and the Gold Coast for over a decade.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
