interface LogoWordmarkProps {
  variant?: 'light' | 'dark'
}

export default function LogoWordmark({ variant = 'dark' }: LogoWordmarkProps) {
  const isLight = variant === 'light'

  return (
    <div className="flex flex-col">
      <span
        className={`font-heading text-lg font-bold leading-tight md:text-xl ${
          isLight ? 'text-cream' : 'text-charcoal'
        }`}
      >
        Brightwater
      </span>
      <span
        className={`font-body text-[0.65rem] font-medium uppercase tracking-[0.2em] md:text-xs ${
          isLight ? 'text-cream/70' : 'text-charcoal-soft'
        }`}
      >
        Family Law
      </span>
    </div>
  )
}
