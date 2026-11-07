interface LogoMarkProps {
  className?: string
}

export default function LogoMark({ className = '' }: LogoMarkProps) {
  return (
    <svg
      width="48"
      height="32"
      viewBox="0 0 48 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`block self-center ${className}`}
      style={{ marginTop: '-4px' }}
      aria-hidden="true"
    >
      {/* Upper arc */}
      <path
        d="M8 18 Q24 5 40 18"
        stroke="#4F6B58"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Middle wave */}
      <path
        d="M4 23 Q14 15 24 21 Q34 27 44 19"
        stroke="#4F6B58"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      {/* Lower wave */}
      <path
        d="M2 28 Q12 20 24 26 Q36 32 46 24"
        stroke="#4F6B58"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  )
}
