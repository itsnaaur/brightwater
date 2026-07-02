import { motion } from 'framer-motion'
import FadeIn from './FadeIn'

const waves = [
  // Top zone
  { path: "M20 40 Q100 10 180 40", delay: 0, duration: 4, x: "2%", y: "2%" },
  { path: "M10 30 Q70 5 140 30 Q210 55 270 25", delay: 1.5, duration: 5, x: "22%", y: "1%" },
  { path: "M0 20 Q60 0 120 20 Q180 40 240 15", delay: 3, duration: 6, x: "42%", y: "3%" },
  { path: "M20 35 Q90 10 160 35", delay: 0.8, duration: 4.5, x: "62%", y: "1%" },
  { path: "M10 25 Q80 5 150 25 Q220 45 290 20", delay: 2.2, duration: 5, x: "78%", y: "4%" },
  { path: "M0 30 Q70 8 140 30", delay: 3.8, duration: 4, x: "90%", y: "2%" },

  // Upper zone
  { path: "M20 40 Q100 15 180 40", delay: 1, duration: 5.5, x: "5%", y: "14%" },
  { path: "M10 30 Q80 5 150 30 Q220 55 290 25", delay: 2.5, duration: 4, x: "25%", y: "12%" },
  { path: "M0 25 Q70 5 140 25", delay: 0.3, duration: 6, x: "48%", y: "15%" },
  { path: "M20 40 Q100 10 180 40", delay: 3.5, duration: 5, x: "68%", y: "13%" },
  { path: "M10 25 Q80 5 150 25 Q220 45 290 20", delay: 1.8, duration: 4.5, x: "85%", y: "16%" },

  // Upper-mid zone
  { path: "M0 30 Q70 8 140 30 Q210 52 280 22", delay: 0.5, duration: 5, x: "3%", y: "26%" },
  { path: "M20 35 Q90 10 160 35", delay: 2, duration: 4, x: "20%", y: "28%" },
  { path: "M10 30 Q80 5 150 30 Q220 55 290 25", delay: 3.2, duration: 6, x: "40%", y: "25%" },
  { path: "M0 20 Q60 0 120 20 Q180 40 240 15", delay: 1.2, duration: 5.5, x: "60%", y: "27%" },
  { path: "M20 40 Q100 15 180 40", delay: 4, duration: 4, x: "78%", y: "24%" },
  { path: "M10 25 Q80 5 150 25", delay: 0.8, duration: 5, x: "92%", y: "28%" },

  // Mid zone
  { path: "M0 30 Q70 8 140 30", delay: 1.5, duration: 4.5, x: "8%", y: "38%" },
  { path: "M20 40 Q100 10 180 40", delay: 3, duration: 5, x: "28%", y: "40%" },
  { path: "M10 30 Q80 5 150 30 Q220 55 290 25", delay: 0.2, duration: 6, x: "48%", y: "37%" },
  { path: "M0 25 Q70 5 140 25 Q210 45 280 20", delay: 2.8, duration: 4, x: "65%", y: "41%" },
  { path: "M20 35 Q90 10 160 35", delay: 1, duration: 5.5, x: "82%", y: "38%" },
  { path: "M10 25 Q80 5 150 25", delay: 3.5, duration: 4, x: "94%", y: "40%" },

  // Lower-mid zone
  { path: "M0 30 Q70 8 140 30 Q210 52 280 22", delay: 0.6, duration: 5, x: "4%", y: "52%" },
  { path: "M20 40 Q100 15 180 40", delay: 2.2, duration: 4.5, x: "22%", y: "55%" },
  { path: "M10 30 Q80 5 150 30", delay: 3.8, duration: 6, x: "42%", y: "50%" },
  { path: "M0 20 Q60 0 120 20 Q180 40 240 15", delay: 1.4, duration: 5, x: "60%", y: "54%" },
  { path: "M20 40 Q100 10 180 40", delay: 0.4, duration: 4, x: "78%", y: "51%" },
  { path: "M10 25 Q80 5 150 25 Q220 45 290 20", delay: 2.8, duration: 5.5, x: "90%", y: "55%" },

  // Lower zone
  { path: "M0 30 Q70 8 140 30", delay: 1.8, duration: 4, x: "6%", y: "65%" },
  { path: "M20 35 Q90 10 160 35", delay: 3.2, duration: 5, x: "25%", y: "68%" },
  { path: "M10 30 Q80 5 150 30 Q220 55 290 25", delay: 0.6, duration: 6, x: "45%", y: "64%" },
  { path: "M0 25 Q70 5 140 25", delay: 2, duration: 4.5, x: "65%", y: "67%" },
  { path: "M20 40 Q100 15 180 40", delay: 3.6, duration: 5, x: "82%", y: "65%" },
  { path: "M10 25 Q80 5 150 25", delay: 1.2, duration: 4, x: "93%", y: "68%" },

  // Bottom zone
  { path: "M0 30 Q70 8 140 30 Q210 52 280 22", delay: 0.9, duration: 5.5, x: "3%", y: "78%" },
  { path: "M20 40 Q100 10 180 40", delay: 2.4, duration: 4, x: "20%", y: "82%" },
  { path: "M10 30 Q80 5 150 30", delay: 3.8, duration: 6, x: "38%", y: "78%" },
  { path: "M0 20 Q60 0 120 20 Q180 40 240 15", delay: 1.6, duration: 5, x: "56%", y: "80%" },
  { path: "M20 35 Q90 10 160 35", delay: 0.3, duration: 4.5, x: "74%", y: "77%" },
  { path: "M10 25 Q80 5 150 25 Q220 45 290 20", delay: 2.8, duration: 5, x: "88%", y: "82%" },

  // Very bottom zone
  { path: "M0 30 Q70 8 140 30", delay: 1.4, duration: 4, x: "8%", y: "90%" },
  { path: "M20 40 Q100 15 180 40", delay: 3, duration: 5.5, x: "30%", y: "92%" },
  { path: "M10 30 Q80 5 150 30 Q220 55 290 25", delay: 0.7, duration: 4, x: "52%", y: "89%" },
  { path: "M0 25 Q70 5 140 25", delay: 2.5, duration: 6, x: "70%", y: "93%" },
  { path: "M20 40 Q100 10 180 40", delay: 1, duration: 4.5, x: "86%", y: "90%" },
]

function WaveBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {waves.map((wave, index) => (
        <motion.svg
          key={index}
          viewBox="0 0 300 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-[180px] md:w-[240px]"
          style={{
            left: wave.x,
            top: wave.y,
          }}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.07, 0.07, 0],
          }}
          transition={{
            duration: wave.duration,
            delay: wave.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3 + 2,
            ease: 'easeInOut',
          }}
        >
          <path
            d={wave.path}
            stroke="#F6F2EA"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </motion.svg>
      ))}
    </div>
  )
}

const steps = [
  {
    question: "What do I do first?",
    answer:
      "Book your free 20-minute consultation using the scheduler below. You don't need to have everything figured out, and you don't need to know the right legal words. Just pick a time that works for you.",
  },
  {
    question: "What will happen in that first call?",
    answer:
      "In your first 20 minutes we'll simply listen. We'll ask a few gentle questions to understand what you're dealing with, and we'll explain your options in plain language. No pressure, no judgment, no legal jargon.",
  },
  {
    question: "What am I committing to?",
    answer:
      "Nothing. The first conversation is completely free and carries no obligation whatsoever. You leave with clarity on where you stand, and the decision about what to do next is entirely yours.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-sage-dark py-24 overflow-hidden relative">

      <WaveBackground />

      <div className="mx-auto max-w-5xl px-6 md:px-8">

        {/* Section header */}
        <FadeIn direction="up">
          <div className="mb-20 max-w-xl">
            <h2 className="font-heading font-bold text-4xl text-cream">
              What happens when you reach out
            </h2>
            <p className="font-body text-base text-cream/70 mt-4 leading-relaxed">
              Not knowing what to expect is often the hardest part.
              Here is exactly what the first conversation looks like.
            </p>
          </div>
        </FadeIn>

        {/* Offset cascading cards */}
        <div className="relative flex flex-col gap-6 md:gap-0">

          {/* Card 1 — left aligned, baseline */}
          <FadeIn direction="up" delay={0.1}>
            <div className="relative md:w-[60%] ml-0 bg-cream rounded-2xl px-8 py-10 md:px-10 md:py-12 shadow-card md:translate-y-0">
              <div className="w-8 h-0.5 bg-sage mb-6" />
              <h3 className="font-heading font-bold text-2xl text-charcoal leading-snug mb-4">
                {steps[0].question}
              </h3>
              <p className="font-body text-sm text-charcoal-soft leading-relaxed">
                {steps[0].answer}
              </p>
            </div>
          </FadeIn>

          {/* Card 2 — right aligned, offset down */}
          <FadeIn direction="up" delay={0.2}>
            <div className="relative md:w-[60%] ml-auto bg-cream/95 rounded-2xl px-8 py-10 md:px-10 md:py-12 shadow-card md:-translate-y-2 md:mt-6">
              <div className="w-8 h-0.5 bg-sage mb-6" />
              <h3 className="font-heading font-bold text-2xl text-charcoal leading-snug mb-4">
                {steps[1].question}
              </h3>
              <p className="font-body text-sm text-charcoal-soft leading-relaxed">
                {steps[1].answer}
              </p>
            </div>
          </FadeIn>

          {/* Card 3 — left aligned, offset down further */}
          <FadeIn direction="up" delay={0.3}>
            <div className="relative md:w-[60%] ml-0 bg-cream/90 rounded-2xl px-8 py-10 md:px-10 md:py-12 shadow-card md:mt-6">
              <div className="w-8 h-0.5 bg-sage mb-6" />
              <h3 className="font-heading font-bold text-2xl text-charcoal leading-snug mb-4">
                {steps[2].question}
              </h3>
              <p className="font-body text-sm text-charcoal-soft leading-relaxed">
                {steps[2].answer}
              </p>
            </div>
          </FadeIn>

        </div>

      </div>
    </section>
  )
}
