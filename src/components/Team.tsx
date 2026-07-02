import FadeIn from './FadeIn'

const team = [
  {
    name: 'Catherine Walsh',
    role: 'Principal Solicitor',
    credential: "18 years' experience",
    bio: 'Eighteen years helping Queensland families find steadier ground. Catherine leads with warmth, clarity, and deep courtroom experience when it matters.',
    image: '/catherine-walsh.png',
    featured: true,
  },
  {
    name: 'James Okonkwo',
    role: 'Senior Associate',
    bio: 'James has a gift for explaining complex property matters in language that actually makes sense.',
    image: '/james-okonkwo.png',
  },
  {
    name: 'Priya Sharma',
    role: 'Solicitor',
    bio: 'Priya specialises in parenting arrangements and brings a calm, practical approach to emotionally charged conversations.',
    image: '/priya-sharma.png',
  },
  {
    name: 'Emma Lindqvist',
    role: 'Solicitor',
    bio: 'Emma supports clients through mediation and early resolution. She believes most families deserve a path that avoids unnecessary conflict.',
    image: '/emma-lindqvist.png',
  },
]

export default function Team() {
  const principal = team.find((t) => t.featured)
  const associates = team.filter((t) => !t.featured)

  return (
    <section id="team" className="bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Section header */}
        <FadeIn direction="up">
          <div className="mb-16">
            <h2 className="max-w-lg font-heading text-4xl font-bold text-charcoal">
              The people you&apos;ll actually be working with
            </h2>
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-charcoal-soft">
              You won&apos;t be passed between strangers. Our small team knows your
              story and stays with you from first call to resolution.
            </p>
          </div>
        </FadeIn>

        {/* Catherine — wide feature row */}
        {principal && (
          <FadeIn direction="scale" duration={0.8} delay={0.1}>
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-cream shadow-card">
              <div className="grid grid-cols-1 md:grid-cols-[55%_45%]">
                {/* Image — taller, more commanding */}
                <div className="relative h-[360px] md:h-[520px]">
                  <img
                    src={principal.image}
                    alt={principal.name}
                    className="absolute inset-0 h-full w-full object-cover object-[center_70%]"
                  />
                  {/* Subtle bottom fade on mobile */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cream/30 to-transparent md:hidden" />
                </div>

                {/* Bio — vertically centered, generous padding */}
                <div className="flex flex-col justify-center px-8 py-10 md:px-14 md:py-16">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="h-px w-8 bg-sage" />
                    <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-sage">
                      Principal Solicitor
                    </span>
                  </div>
                  <h3 className="mb-2 font-heading text-3xl font-bold text-charcoal md:text-4xl">
                    {principal.name}
                  </h3>
                  <p className="mb-6 font-body text-sm font-medium text-sage">
                    {principal.credential}
                  </p>
                  <p className="font-body text-base leading-relaxed text-charcoal-soft">
                    {principal.bio}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Associates — three columns, unified system */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {associates.map((member, index) => (
            <FadeIn key={member.name} direction="up" delay={0.1 + index * 0.12}>
              <div className="flex flex-col overflow-hidden rounded-2xl bg-cream shadow-card">
                {/* Photo */}
                <div className="relative h-[340px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className={`absolute inset-0 h-full w-full object-cover ${
                      member.name === 'Priya Sharma'
                        ? 'object-[center_70%]'
                        : 'object-[center_60%]'
                    }`}
                  />
                </div>

                {/* Text */}
                <div className="flex flex-1 flex-col px-6 py-7">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-px w-5 bg-sage/50" />
                    <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-sage">
                      {member.role}
                    </p>
                  </div>
                  <h3 className="mb-3 font-heading text-xl font-bold text-charcoal">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-charcoal-soft">
                    {member.bio}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
