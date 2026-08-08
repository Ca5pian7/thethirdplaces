import { createFileRoute } from '@tanstack/react-router'
import {
  Star,
  Megaphone,
  Sparkles,
  Users2,
  Video,
  Paintbrush,
  Code2,
  Radio,
  Crown,
  Gift,
  Handshake,
  BadgeCheck,
} from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { LinkButton } from '@/components/ui/Button'
import { CoffeeBean } from '@/components/icons'

export const Route = createFileRoute('/creators')({
  head: () => ({
    meta: [
      {
        title: 'Creator Program — The Third Café',
      },
      {
        name: 'description',
        content:
          'Perks, shoutouts, and collabs for YouTubers who join the Creator Program at The Third Café.',
      },
    ],
  }),
  component: CreatorsPage,
})

// TODO: point this at the real Creator Program application form or Discord
// application channel once it exists — currently falls back to the general invite.
const APPLY_URL = 'https://discord.gg/WBkpNH96pf'

const perks = [
  {
    icon: Star,
    title: 'Custom creator role & badge',
    body: 'A distinct role and profile badge so the community can spot your work and follow along.',
  },
  {
    icon: Megaphone,
    title: 'Shoutouts across the TTC network(Only Partnered Creator)',
    body: "Your uploads, streams, and drops get shared in our announcement channels and across TTC's growing network of communities.",
  },
  {
    icon: Sparkles,
    title: 'Early access to events & features',
    body: 'First look at new events, channels, and experiments before they open up to everyone else.',
  },
  {
    icon: Users2,
    title: 'Collabs with other creators',
    body: "Introductions to other creators at the table, for the collabs that work better as a duet than a solo act.",
  },
]

const lookingFor = [
  {
    icon: Video,
    title: 'Content creators',
    body: 'YouTubers and video essayists making anything from vlogs to deep dives — regular uploads welcome, viral ones not required.',
  },
]

const partneredPerks = [
  {
    icon: Crown,
    title: 'Partnered Creator badge & role',
    body: 'A distinct badge and role that marks you out as a Partnered Creator — the top tier of the program.',
  },
  {
    icon: Megaphone,
    title: 'Priority shoutouts across the TTC network',
    body: 'Your uploads and drops get front-of-line placement in announcement channels and across the wider TTC network, ahead of standard Creator Program shoutouts.',
  },
  {
    icon: Gift,
    title: 'Exclusive giveaways & sponsorship opportunities',
    body: "First access to giveaways, merch drops, and sponsorship opportunities that come through the server.",
  },
  {
    icon: Handshake,
    title: 'A direct line to staff & the Creator Team',
    body: 'Ongoing check-ins with the Creator Team for feedback, collab introductions, and a say in how the program evolves.',
  },
]

const verifiedPoints = [
  {
    icon: BadgeCheck,
    title: 'Who it recognizes',
    body: 'Musicians, artists, streamers, developers, and other notable figures who already carry a following or reputation outside the server.',
  },
  {
    icon: Sparkles,
    title: 'How it works',
    body: "Verified isn't applied for through a form — reach out to staff with a link to your work or profile and the team reviews it case by case.",
  },
  {
    icon: Users2,
    title: 'How it differs from the Creator Program',
    body: "Verified is recognition, not access — it doesn't include Creator Program perks like shoutouts or collab introductions. It just makes sure the community knows who they're talking to.",
  },
]

const steps = [
  {
    title: 'Join the Discord',
    body: 'Pull up a chair as the Creator Program lives inside The Third Café server.',
  },
  {
    title: 'Checkout Requirements & Fill out the application',
    body: 'First u need to checkout the requirements and then fill a short form about what you make and where people can find it. 500+ Subscriber minimums or it will be free if +10 k Subscribers.',
  },
  {
    title: 'Chat with the Creator Team',
    body: 'A quick, low-pressure conversation to figure out where you fit and get your role set up.',
  },
]

function CreatorsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 75% 55% at 10% 0%, rgba(198,139,86,0.20), transparent), radial-gradient(ellipse 60% 45% at 100% 20%, rgba(181,101,74,0.16), transparent)',
          }}
          aria-hidden="true"
        />
        <CoffeeBean className="absolute right-10 top-16 h-14 w-14 text-clay/20 animate-float hidden sm:block" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Creator Program"
              title="Pull up a chair, bring your craft"
              description="The Creator Program exists to help YouTubers grow alongside the community instead of shouting into it alone. Bring what you make, and we'll help people find it."
            />
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <div className="mt-8">
              <LinkButton href={APPLY_URL} target="_blank" rel="noopener noreferrer" variant="primary">
                Apply to the Creator Program
              </LinkButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What you get */}
      <section className="mx-auto max-w-7xl px-5 py-4 sm:px-8 sm:py-8">
        <ScrollReveal>
          <SectionHeading eyebrow="What you get" title="Perks for showing up and making things" />
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, i) => {
            const Icon = perk.icon
            return (
              <ScrollReveal key={perk.title} delay={(i % 4) * 90}>
                <Card className="flex h-full flex-col gap-4 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-caramel/15 text-coffee">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-espresso">{perk.title}</h3>
                  <p className="text-sm leading-relaxed text-espresso-light">{perk.body}</p>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* Partnered Creator */}
      <section className="border-y border-espresso/10 bg-parchment/50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Next level"
              title="Partnered Creator — for the ones who've grown with us"
              description="Partnered Creator is the top tier of the program, reserved for members who've stuck around, stayed active, and grown alongside the community. It isn't a separate application — it's offered to Creator Program members the Creator Team sees consistently showing up."
            />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partneredPerks.map((perk, i) => {
              const Icon = perk.icon
              return (
                <ScrollReveal key={perk.title} delay={(i % 4) * 90}>
                  <Card className="flex h-full flex-col gap-4 p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-clay/15 text-clay">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-espresso">{perk.title}</h3>
                    <p className="text-sm leading-relaxed text-espresso-light">{perk.body}</p>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who we're looking for */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Who we're looking for"
            title="If you make things, there's a seat for you"
            description="The program isn't limited to one kind of creator — it's for anyone building an audience or a body of work who'd rather do it with company."
          />
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {lookingFor.map((item, i) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} delay={(i % 4) * 90}>
                <Card className="flex h-full items-start gap-4 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-espresso">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-espresso-light">{item.body}</p>
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </section>

      {/* How to apply */}
      <section className="border-y border-espresso/10 bg-parchment/50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <ScrollReveal>
            <SectionHeading eyebrow="How to apply" title="Three steps, no gatekeeping" />
          </ScrollReveal>
          <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 100} as="li">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso font-display text-lg font-semibold text-cream">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-espresso">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso-light">{step.body}</p>
              </ScrollReveal>
            ))}
          </ol>
          <ScrollReveal delay={200}>
            <div className="mt-12 flex justify-center">
              <LinkButton href={APPLY_URL} target="_blank" rel="noopener noreferrer" variant="primary">
                Apply to the Creator Program
              </LinkButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Verified role */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Recognition"
            title="Verified — for the well-known faces at the table"
            description="Verified is a separate role from the Creator Program, given to artists, creators, developers, and other well-known figures joining the server, so the community can recognize who they're talking to right away."
          />
        </ScrollReveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {verifiedPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <ScrollReveal key={point.title} delay={i * 100}>
                <Card className="flex h-full flex-col gap-4 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/15 text-sage-dark">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-espresso">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-espresso-light">{point.body}</p>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </section>
    </div>
  )
}
