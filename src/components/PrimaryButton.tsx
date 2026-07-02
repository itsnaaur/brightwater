interface PrimaryButtonProps {
  href?: string
  className?: string
  onClick?: () => void
}

export default function PrimaryButton({
  href = '#booking',
  className = '',
  onClick,
}: PrimaryButtonProps) {
  const classes = `inline-flex min-h-[44px] items-center justify-center rounded-lg bg-sage px-6 py-3 font-body text-base font-medium text-cream transition-colors hover:bg-sage-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${className}`

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        Book your free consultation
      </button>
    )
  }

  return (
    <a href={href} className={classes}>
      Book your free consultation
    </a>
  )
}
