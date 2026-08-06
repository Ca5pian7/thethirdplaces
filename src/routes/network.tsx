import { createFileRoute, Link } from '@tanstack/react-router'
import { Gamepad2, Sparkles, Trophy, Users2, Sprout, Stethoscope, Moon, Fish, Swords, ExternalLink } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { LinkButton } from '@/components/ui/Button'
import { CoffeeBean, SteamWisp, DiscordIcon } from '@/components/icons'

export const Route = createFileRoute('/network')({
  head: () => ({
    meta: [
      {
        title: 'The Network — The Third Café',
      },
      {
        name: 'description',
        content:
          'One network, many tables — explore the growing group of communities connected to The Third Café, including TTC Roblox.',
      },
    ],
  }),
  component: NetworkPage,
})

// TODO: replace with the real TTC Roblox invite link once the server is ready to receive members.
const TTC_ROBLOX_URL = 'https://discord.gg/REPLACE_WITH_TTC_ROBLOX_INVITE'

// TODO: swap `robloxUrl` for each game's real Roblox experience URL (roblox.com/games/<placeId>)
// once TTC Roblox publishes its own experiences — these fall back to a Roblox search for now.
// TODO: swap `discordUrl` for a deep link to that game's dedicated category/channel once TTC
// Roblox's channel structure is finalized — these fall back to the main server invite for now.
const ttcGames = [
  {
    name: 'Grow a Garden 2',
    icon: Sprout,
    robloxUrl: 'https://www.roblox.com/discover/?Keyword=Grow%20a%20Garden%202',
    discordUrl: TTC_ROBLOX_URL,
  },
  {
    name: 'Animals Hospital',
    icon: Stethoscope,
    robloxUrl: 'https://www.roblox.com/discover/?Keyword=Animals%20Hospital',
    discordUrl: TTC_ROBLOX_URL,
  },
  {
    name: '99 Nights',
    icon: Moon,
    robloxUrl: 'https://www.roblox.com/discover/?Keyword=99%20Nights',
    discordUrl: TTC_ROBLOX_URL,
  },
  {
    name: 'Blox Fruits',
    icon: Fish,
    robloxUrl: 'https://www.roblox.com/discover/?Keyword=Blox%20Fruits',
    discordUrl: TTC_ROBLOX_URL,
  },
  {
    name: 'Rivals',
    icon: Swords,
    robloxUrl: 'https://www.roblox.com/discover/?Keyword=Rivals',
    discordUrl: TTC_ROBLOX_URL,
  },
] as const

const games = ttcGames.map((game) => game.name)

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

      {/* TTC Roblox games */}
      <section className="mx-auto max-w-7xl px-5 py-4 sm:px-8 sm:py-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="TTC Roblox"
            title="Jump straight into a game"
            description="Each of these has its own dedicated category inside TTC Roblox. Play the game on Roblox, or join its section on Discord to find teammates first."
          />
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ttcGames.map((game, i) => {
            const Icon = game.icon
            return (
              <ScrollReveal key={game.name} delay={(i % 3) * 90}>
                <Card className="flex h-full flex-col gap-4 p-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage/15 text-sage-dark"
                      role="img"
                      aria-label={`${game.name} game icon`}
                    >
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-base font-semibold leading-snug text-espresso">
                      {game.name}
                    </h3>
                  </div>
                  <div className="mt-auto flex flex-col gap-2">
                    <LinkButton
                      href={game.robloxUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="flex-1 !px-4 !py-2.5 text-sm"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      Play on Roblox
                    </LinkButton>
                    <LinkButton
                      href={game.discordUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="ghost"
                      className="flex-1 !px-4 !py-2.5 text-sm"
                    >
                      <DiscordIcon className="h-4 w-4" />
                      Join in Discord
                    </LinkButton>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
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
