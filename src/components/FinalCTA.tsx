import PrimaryButton from './PrimaryButton'
import FadeIn from './FadeIn'

export default function FinalCTA() {
  return (
    <section className="bg-sage-dark py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <FadeIn direction="up" duration={0.7} delay={0.1}>
          <div className="text-center">
            <h2 className="text-3xl text-cream md:text-4xl">
              When you&apos;re ready, we&apos;re here.
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-cream/90 md:text-lg">
              Book a free 20-minute consultation and leave knowing exactly where you
              stand. No commitment, no pressure. Just a conversation with someone who
              understands Queensland family law.
            </p>
            <div className="mt-8">
              <PrimaryButton />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
