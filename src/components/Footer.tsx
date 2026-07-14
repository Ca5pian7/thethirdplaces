import { Link } from '@tanstack/react-router'
import { CoffeeBean } from '@/components/icons'

const DISCORD_URL = 'https://discord.gg/thethirdplace'

const pages = [
  { to: '/', label: 'Home' },
  { to: '/journey', label: 'Journey' },
  { to: '/staff', label: 'Staff' },
  { to: '/partners', label: 'Partners' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/moments', label: 'Moments' },
  { to: '/contact', label: 'Contact' },
] as const

function DiscordIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 9.5c1.5 1 5 1 8 0M9 15c-3 0-5-1.5-5-1.5S5 8 6.5 6.5C7.5 5.5 9 5.2 9 5.2l.7 1.3M15 15c3 0 5-1.5 5-1.5S19 8 17.5 6.5C16.5 5.5 15 5.2 15 5.2l-.7 1.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="9.5" cy="12" r="1.3" fill="currentColor" />
      <circle cx="14.5" cy="12" r="1.3" fill="currentColor" />
      <path d="M9 15c0 2-1 3-1 3s5 1.5 8 0c0 0-1-1-1-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  )
}

function XIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-parchment/60">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <CoffeeBean className="h-6 w-6 text-coffee" />
              <span className="font-display text-lg font-semibold text-espresso">
                The Third Place
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-espresso-light">
              A slow corner of the internet for people who like their conversations the way they
              like their coffee &mdash; unhurried.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-espresso">Pages</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-sm text-espresso-light hover:text-espresso hover:underline underline-offset-4"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-espresso">
              Find us elsewhere
            </h3>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join us on Discord"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso-light transition-colors hover:bg-espresso/5 hover:text-espresso"
              >
                <DiscordIcon className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/thethirdplace"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso-light transition-colors hover:bg-espresso/5 hover:text-espresso"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/thethirdplace"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso-light transition-colors hover:bg-espresso/5 hover:text-espresso"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-espresso/10 pt-6 text-xs text-espresso-light/80">
          &copy; {new Date().getFullYear()} The Third Place. A community, not a company.
        </div>
      </div>
    </footer>
  )
}
