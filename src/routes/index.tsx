import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { Sparkles } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import {
  CoffeeBean,
  SteamWisp,
  ChatBubbleIcon,
  PeopleIcon,
  CupIcon,
  DiscordIcon,
  InstagramIcon,
  XIcon,
} from '@/components/icons'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const DISCORD_URL = 'https://discord.gg/uEDrEgxb8r'

const socials = [
  { href: DISCORD_URL, label: 'Discord', Icon: DiscordIcon },
  { href: 'https://instagram.com/thethirdplace', label: 'Instagram', Icon: InstagramIcon },
  { href: 'https://x.com/thethirdplace', label: 'X', Icon: XIcon },
] as const

const stats = [
  { value: '105', label: 'members from 63 countries' },
  { value: '3989', label: 'conversations this week' },
  { value: '321', label: 'cups of coffee "shared" in #chat' },
  { value: '1', label: 'weekly voice hangouts hosted' },
]

const teasers = [
  {
    to: '/network' as const,
    title: 'The Network',
    body: 'One network, many tables — see the communities connected to The Third Café.',
    icon: Sparkles,
  },
  {
    to: '/journey' as const,
    title: 'Our Journey',
    body: 'From a little cafe to The Third Café.',
    icon: CupIcon,
  },
  {
    to: '/staff' as const,
    title: 'Meet the Staff',
    body: 'Eleven people across nine time zones who keep the lights warm and the chat kind.',
    icon: PeopleIcon,
  },
  {
    to: '/partners' as const,
    title: 'Our Partners',
    body: 'Communities we trust enough to send our own members to when they visit.',
    icon: ChatBubbleIcon,
  },
  {
    to: '/creators' as const,
    title: 'Creator Program',
    body: 'Grow alongside the community — perks and collabs for creators who join the table.',
    icon: CupIcon,
  },
  {
    to: '/achievements' as const,
    title: 'Achievements',
    body: 'Milestones, trivia champions, and the members who made this place what it is.',
    icon: CupIcon,
  },
  {
    to: '/moments' as const,
    title: 'Moments',
    body: 'A gallery of the small, ordinary things that made this community feel like home.',
    icon: ChatBubbleIcon,
  },
  {
    to: '/contact' as const,
    title: 'Get in Touch',
    body: 'Questions, partnership ideas, or just want to say hello? Pull up a chair.',
    icon: PeopleIcon,
  },
]

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 20% -10%, rgba(198,139,86,0.20), transparent), radial-gradient(ellipse 70% 50% at 100% 10%, rgba(139,168,136,0.18), transparent)',
          }}
          aria-hidden="true"
        />
        <CoffeeBean className="absolute -left-4 top-24 h-16 w-16 text-coffee/20 animate-float" aria-hidden="true" />
        <CoffeeBean className="absolute right-8 top-10 h-10 w-10 text-clay/20 animate-float-slower" aria-hidden="true" />
        <SteamWisp className="absolute right-16 bottom-10 h-24 w-16 text-espresso/30 animate-float-slower hidden sm:block" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sage-dark">
              Social &middot; Make Friends &middot; Connect
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] text-espresso sm:text-5xl md:text-6xl">
              Not your first place. Not your second. Just <span className="italic text-coffee">The Third Café.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-espresso-light">
              We are a Discord table for people who miss the feeling of a good caf&eacute; &mdash;
              slow mornings, long conversations, and regulars who remember your order. Pull up a
              chair. The pot's always on.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-base font-semibold text-cream shadow-[0_10px_28px_-8px_rgba(58,43,34,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-8px_rgba(58,43,34,0.55)]"
              >
                Join the Discord
              </a>
              <Link
                to="/journey"
                className="inline-flex items-center gap-2 rounded-full border border-espresso/20 px-7 py-3.5 text-base font-semibold text-espresso transition-all hover:-translate-y-0.5 hover:bg-espresso/5"
              >
                Read our story
              </Link>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <span className="text-sm text-espresso-light">Find us elsewhere:</span>
              <div className="flex items-center gap-2">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-espresso/15 text-espresso-light transition-colors hover:bg-espresso/5 hover:text-espresso"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-espresso/10 bg-parchment/50">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 90}>
                <div>
                  <div className="font-display text-3xl font-semibold text-espresso sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-espresso-light">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teasers */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Explore"
            title="Everything happens around the table"
            description="A quick look at the people, moments, and milestones that make up the community."
          />
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teasers.map((teaser, i) => {
            const Icon = teaser.icon
            return (
              <ScrollReveal key={teaser.to} delay={(i % 3) * 90}>
                <Link to={teaser.to} className="block h-full">
                  <Card className="flex h-full flex-col gap-4 p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-espresso">
                      {teaser.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-espresso-light">{teaser.body}</p>
                    <span className="mt-auto text-sm font-semibold text-coffee">
                      Take a look &rarr;
                    </span>
                  </Card>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>
      </section>
    </div>
  )
}
