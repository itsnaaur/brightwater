import FadeIn from './FadeIn'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* MOBILE — image stacks on top */}
      <div className="relative h-[400px] w-full overflow-hidden bg-cream md:hidden">
        <img
          src="/hero-image.png"
          alt="A woman sitting calmly, looking forward with quiet composure"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: '20% 20%' }}
        />
        {/* Smooth bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: '70%',
            background: `linear-gradient(
        to bottom,
        rgba(246,242,234,0) 0%,
        rgba(246,242,234,0.2) 30%,
        rgba(246,242,234,0.6) 55%,
        rgba(246,242,234,0.9) 75%,
        #F6F2EA 100%
      )`,
          }}
        />
      </div>

      {/* Seamless continuation — same bg, no gap */}
      <FadeIn direction="none" duration={0.8} delay={0.2}>
        <div className="relative z-10 bg-cream px-6 pb-10 pt-0 md:hidden">
          <h1 className="mb-5 font-heading text-4xl font-bold leading-[1.1] text-charcoal">
            You don&apos;t have to figure this out <em>alone</em>.
          </h1>
          <p className="mb-8 font-body text-base leading-relaxed text-charcoal-soft">
            Brightwater Family Law has helped Brisbane and Gold Coast families
            through separation, custody and property matters for over 18 years.
            Start with a free 20-minute consultation.
          </p>
          <a
            href="#booking"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-lg bg-sage px-8 py-4 font-body text-base font-medium text-cream transition-colors hover:bg-sage-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          >
            Book your free consultation
          </a>
        </div>
      </FadeIn>

      {/* DESKTOP — image on right half */}
      <div className="absolute inset-0 left-1/2 hidden md:block">
        <img
          src="/hero-image.png"
          alt="A woman sitting calmly, looking forward with quiet composure"
          className="h-full w-full object-cover object-[10%_20%]"
        />
        {/* Left fade into cream */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
      to right,
      #F6F2EA 0%,
      rgba(246,242,234,0.85) 15%,
      rgba(246,242,234,0.5) 30%,
      rgba(246,242,234,0.2) 45%,
      transparent 65%
    )`,
          }}
        />
      </div>

      {/* DESKTOP CONTENT */}
      <div className="relative z-10 mx-auto hidden max-w-7xl px-6 md:block md:px-8">
        <FadeIn direction="none" duration={0.8} delay={0.2}>
          <div className="md:max-w-[52%] md:py-32">
            <h1 className="mb-5 font-heading text-6xl font-bold leading-[1.1] text-charcoal">
              You don&apos;t have to figure this out <em>alone</em>.
            </h1>

            <p className="mb-8 max-w-lg font-body text-lg leading-relaxed text-charcoal-soft">
              Brightwater Family Law has helped Brisbane and Gold Coast families
              through separation, custody and property matters for over 18 years.
              Start with a free 20-minute consultation.
            </p>

            <a
              href="#booking"
              className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-sage px-8 py-4 font-body text-base font-medium text-cream transition-colors hover:bg-sage-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              Book your free consultation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
