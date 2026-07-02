import LogoMark from './LogoMark'
import LogoWordmark from './LogoWordmark'

export default function Footer() {
  return (
    <footer className="border-t border-sage-dark/20 bg-sage-dark py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark />
              <LogoWordmark variant="light" />
            </div>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-cream/80">
              Helping Brisbane and Gold Coast families find steadier ground since
              2006.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
            <div>
              <h3 className="font-body text-sm font-medium uppercase tracking-[0.15em] text-cream/70">
                Contact
              </h3>
              <ul className="mt-3 space-y-2 font-body text-sm text-cream/90">
                <li>
                  <a
                    href="mailto:hello@brightwaterfamilylaw.com.au"
                    className="hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                  >
                    hello@brightwaterfamilylaw.com.au
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-body text-sm font-medium uppercase tracking-[0.15em] text-cream/70">
                Service areas
              </h3>
              <ul className="mt-3 space-y-2 font-body text-sm text-cream/90">
                <li>Brisbane</li>
                <li>Gold Coast</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-8 pb-24 md:pb-0">
          <p className="font-body text-xs leading-relaxed text-cream/60">
            &copy; {new Date().getFullYear()} Brightwater Family Law. All rights
            reserved. Queensland Law Society member (fictional reference for
            demonstration purposes).
          </p>
        </div>
      </div>
    </footer>
  )
}
