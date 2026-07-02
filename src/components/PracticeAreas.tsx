import FadeIn from './FadeIn'

export default function PracticeAreas() {
  const areas = [
    {
      number: '01',
      title: 'Divorce & separation',
      description:
        'Clear, compassionate support when your relationship ends. We help you understand your options and what comes next.',
    },
    {
      number: '02',
      title: 'Property settlements',
      description:
        'Fair division of assets and debts explained in plain English, so you can move forward with confidence.',
    },
    {
      number: '03',
      title: 'Parenting & custody arrangements',
      description:
        'Practical parenting plans that put your children first, with guidance on living arrangements and decision-making.',
    },
    {
      number: '04',
      title: 'Mediation',
      description:
        'A calmer path to resolution. We help you and your former partner find agreement without going to court.',
    },
  ]

  return (
    <section id="practice-areas" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Section header */}
        <FadeIn direction="up">
          <div className="mb-16">
            <h2 className="max-w-md font-heading text-4xl font-bold text-charcoal">
              How we can help
            </h2>
          </div>
        </FadeIn>

        {/* Practice area rows */}
        <div>
          {areas.map((area, index) => (
            <FadeIn key={area.number} direction="left" delay={index * 0.12}>
              <div className="group grid grid-cols-1 items-start gap-4 border-b-0 py-10 md:border-b md:border-[#EAE4D2] md:grid-cols-[120px_1fr_1fr] md:gap-8 md:py-12">
                {/* Large subtle number */}
                <span className="select-none font-heading text-6xl font-bold leading-none text-sage/20 md:text-7xl">
                  {area.number}
                </span>

                {/* Title */}
                <h3 className="pt-1 font-heading text-2xl font-bold leading-snug text-charcoal md:text-3xl">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="pt-1 font-body text-base leading-relaxed text-charcoal-soft">
                  {area.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
