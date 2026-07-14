import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { CoffeeBean } from '@/components/icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/journey', label: 'Journey' },
  { to: '/staff', label: 'Staff' },
  { to: '/partners', label: 'Partners' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/moments', label: 'Moments' },
  { to: '/contact', label: 'Contact' },
] as const

const DISCORD_URL = 'https://discord.gg/WBkpNH96pf'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-espresso/10 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <CoffeeBean className="h-6 w-6 text-coffee group-hover:text-clay transition-colors" />
          <span className="font-display text-xl font-semibold tracking-tight text-espresso">
            The Third Café
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === '/' }}
              className="rounded-full px-4 py-2 text-sm font-medium text-espresso-light transition-colors hover:bg-espresso/5 hover:text-espresso"
              activeProps={{ className: 'bg-espresso/8 text-espresso' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            Join Discord
          </a>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center justify-center rounded-full p-2.5 text-espresso hover:bg-espresso/5"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="lg:hidden border-t border-espresso/10 bg-cream px-5 pb-6 pt-2"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-espresso-light hover:bg-espresso/5 hover:text-espresso"
                  activeProps={{ className: 'bg-espresso/8 text-espresso' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-espresso px-5 py-3 text-sm font-semibold text-cream"
          >
            Join Discord
          </a>
        </nav>
      )}
    </header>
  )
}
