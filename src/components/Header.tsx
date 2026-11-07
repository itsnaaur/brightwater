import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import LogoMark from './LogoMark'
import LogoWordmark from './LogoWordmark'
import PrimaryButton from './PrimaryButton'

const navLinks = [
  { label: 'Practice areas', href: '#practice-areas' },
  { label: 'About', href: '#team' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a
          href="#"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          aria-label="Brightwater Family Law, back to top"
        >
          <LogoMark />
          <LogoWordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-charcoal transition-colors hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              {link.label}
            </a>
          ))}
          <PrimaryButton />
        </nav>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center text-charcoal md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-sand bg-cream px-5 py-6 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block min-h-[44px] py-2 font-body text-base font-medium text-charcoal hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <PrimaryButton onClick={closeMenu} className="w-full" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
