import { Link } from '@tanstack/react-router'
import { LeafIcon, DiscordIcon, InstagramIcon, XIcon } from '@/components/icons'

const DISCORD_URL = 'https://discord.gg/WBkpNH96pf'

const pages = [
  { to: '/', label: 'Home' },
  { to: '/network', label: 'Network' },
  { to: '/journey', label: 'Journey' },
  { to: '/staff', label: 'Staff' },
  { to: '/partners', label: 'Partners' },
  { to: '/creators', label: 'Creators' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/moments', label: 'Moments' },
  { to: '/contact', label: 'Contact' },
] as const

const socials = [
  { href: DISCORD_URL, label: 'Discord', Icon: DiscordIcon },
  { href: 'https://instagram.com/thethirdplace', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://x.com/thethirdplace', label: 'X', Icon: XIcon },
] as const

export function Footer() {
  return (
    <footer className="border-t border-bark/10 bg-parchment/60">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <LeafIcon className="h-6 w-6 text-sage-dark" />
              <span className="font-display text-lg font-semibold text-bark">
                The Third Café
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-bark-light">
              A slow corner of the internet for people who like their conversations the way they
              like their coffee &mdash; unhurried, and best enjoyed somewhere green.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-bark">Pages</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {pages.map((p) => (
                <li key={p.to}>
                  <Link
                    to={p.to}
                    className="text-sm text-bark-light hover:text-bark hover:underline underline-offset-4"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-bark">
              Find us elsewhere
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-sm text-bark-light transition-colors hover:text-bark"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-bark/15">
                      <Icon className="h-4 w-4" />
                    </span>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-bark/10 pt-6 text-xs text-bark-light/80">
          &copy; {new Date().getFullYear()} The Third Café. A community, not a company.
        </div>
      </div>
    </footer>
  )
}
