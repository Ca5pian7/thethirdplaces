import { createFileRoute, Link } from '@tanstack/react-router'
import { Gamepad2, Sparkles, Trophy, Users2 } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { LinkButton } from '@/components/ui/Button'
import { CoffeeBean, SteamWisp } from '@/components/icons'

export const Route = createFileRoute('/network')({
  component: NetworkPage,
})

// TODO: replace with the real TTC Roblox invite link once the server is ready to receive members.
const TTC_ROBLOX_URL = 'https://discord.gg/REPLACE_WITH_TTC_ROBLOX_INVITE'

const games = ['Grow a Garden', 'Animals Hospital', '99 Nights', 'Blox Fruits', 'Rivals']

const whyPoints = [
  {
    icon: Gamepad2,
    title: 'Each community stays focused',
    body: 'A Roblox server can be all Roblox, all the time — no diluting the main café with off-topic channels.',
  },
  {
    icon: Users2,
    title: 'Shared staff standards',
    body: 'Every server in the network is run by people who hold the same line on kindness and moderation.',
  },
  {
    icon: Trophy,
    title: 'One events calendar',
    body: "Tournaments, showcases, and hangouts across the network are coordinated instead of competing for the same weekend.",
  },
]

function NetworkPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 75% 55% at 90% -10%, rgba(139,168,136,0.20), transparent), radial-gradient(ellipse 60% 45% at 0% 30%, rgba(198,139,86,0.16), transparent)',
          }}
          aria-hidden="true"
        />
        <SteamWisp className="absolute left-8 top-10 h-20 w-14 text-espresso/20 animate-float-slower hidden sm:block" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="The Network"
              title="One network, many tables"
              description="The Third Café started as a single server, but the idea behind it — a slow, well-kept community — doesn't have to stay in one room. The TTC network is a growing group of connected communities, each built around its own niche, all sharing the same table manners."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Network cards */}
      <section className="mx-auto max-w-7xl px-5 py-4 sm:px-8 sm:py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ScrollReveal>
            <Card className="flex h-full flex-col gap-5 p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-coffee/15 text-coffee">
                  <CoffeeBean className="h-7 w-7" />
                </div>
                <Badge tone="caramel">Main server</Badge>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-espresso">The Third Café</h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso-light">
                  Our original social and community server — slow conversations, warm company, and
                  the ritual of a shared cup of coffee. The heart of the network.
                </p>
              </div>
              <Link
                to="/"
                className="mt-auto inline-flex items-center gap-2 self-start rounded-full border border-espresso/25 px-6 py-3 text-sm font-semibold text-espresso transition-all hover:-translate-y-0.5 hover:bg-espresso/5"
              >
                Visit The Third Café
              </Link>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={90}>
            <Card className="flex h-full flex-col gap-5 p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sage/15 text-sage-dark">
                  <Gamepad2 className="h-7 w-7" />
                </div>
                <Badge tone="sage">Roblox community</Badge>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-espresso">TTC Roblox</h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso-light">
                  Members pick their games during onboarding and get sorted into dedicated
                  categories for the biggest ones &mdash; {games.join(', ')} &mdash; plus a shared
                  space for smaller games. Comes with guild recruitment, tournaments, showcases, and
                  creator support built in.
                </p>
              </div>
              <LinkButton
                href={TTC_ROBLOX_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                className="mt-auto self-start"
              >
                Join TTC Roblox
              </LinkButton>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={180}>
            <Card className="flex h-full flex-col gap-5 border-dashed p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-clay/15 text-clay">
                  <Sparkles className="h-7 w-7" />
                </div>
                <Badge tone="clay">Coming soon</Badge>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-espresso">
                  More tables on the way
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso-light">
                  We're slowly setting up more communities under the TTC name. If there's a niche
                  you think deserves its own table, tell us on Discord.
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Why a network */}
      <section className="border-y border-espresso/10 bg-parchment/50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Why a network?"
              title="Focused rooms, one shared identity"
              description="Splitting into separate communities lets each one go deep on its own niche without turning the main café into a dozen different conversations at once. What ties them together is everything else."
            />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {whyPoints.map((point, i) => {
              const Icon = point.icon
              return (
                <ScrollReveal key={point.title} delay={i * 100}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso/8 text-coffee">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-espresso">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-espresso-light">{point.body}</p>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
