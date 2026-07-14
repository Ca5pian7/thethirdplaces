import { createFileRoute } from '@tanstack/react-router'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { CoffeeBean, SteamWisp } from '@/components/icons'

export const Route = createFileRoute('/journey')({
  component: JourneyPage,
})

type Milestone = {
  date: string
  title: string
  body: string
  tone: 'sage' | 'caramel' | 'clay'
  future?: boolean
}

const milestones: Milestone[] = [
  {
    date: 'March 2021',
    title: 'Five chairs around a voice call',
    body: 'The Third Place started as a private voice channel for six university friends scattered across three continents who missed talking over coffee between lectures.',
    tone: 'caramel',
  },
  {
    date: 'August 2021',
    title: 'First 100 members',
    body: 'A Reddit post titled "we built a cafe that never closes" brought in our first wave of strangers. Somehow, none of them left.',
    tone: 'sage',
  },
  {
    date: 'January 2022',
    title: 'Daily Brew goes live',
    body: 'Our signature voice hangout launched as a standing 7am invite with no agenda, just the sound of people making coffee in nine different kitchens.',
    tone: 'caramel',
  },
  {
    date: 'June 2022',
    title: '"Sunday Slow Chats" and 18 language channels',
    body: 'What began as one Spanish-practice thread grew into a rotating slate of Sunday conversation circles, each with its own regulars and its own inside jokes.',
    tone: 'sage',
  },
  {
    date: 'November 2022',
    title: 'Passing 1,000 members',
    body: 'We hit four digits the same week our first moderator, Amara, proposed the community charter that still governs how we handle conflict today.',
    tone: 'clay',
  },
  {
    date: 'April 2023',
    title: 'Featured in Discord\'s community showcase',
    body: 'A three-line mention in a showcase newsletter sent 600 new members through the door in a single weekend. We spent the following month just learning names.',
    tone: 'caramel',
  },
  {
    date: 'September 2023',
    title: 'Partnership with Night Owls Study Hall',
    body: 'Our first cross-server partnership brought a shared study-and-chat night that still runs every other Thursday, moderated jointly by both communities.',
    tone: 'sage',
  },
  {
    date: 'February 2024',
    title: 'The Warm Cup Drive',
    body: 'Members organized a two-week fundraiser for a Nairobi youth shelter, raising 3,842 dollars entirely through art auctions and a 24-hour co-op gaming marathon.',
    tone: 'clay',
  },
  {
    date: 'Today',
    title: '4,127 members, 63 countries',
    body: 'The table has grown, but the pot is still always on. We now host 96 voice hangouts a week across every time zone we can reach.',
    tone: 'caramel',
  },
  {
    date: 'What\'s next',
    title: 'Thirty language channels, three cities',
    body: 'We are working toward thirty active language-exchange channels and a pilot for small in-person meetups in Lagos, Manila, and Lisbon.',
    tone: 'sage',
    future: true,
  },
]

function JourneyPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 85% 0%, rgba(139,168,136,0.18), transparent), radial-gradient(ellipse 60% 40% at 0% 20%, rgba(198,139,86,0.16), transparent)',
          }}
          aria-hidden="true"
        />
        <SteamWisp className="absolute left-10 top-8 h-20 w-14 text-espresso/20 animate-float-slower hidden sm:block" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our Story"
              title="From a five-person voice call to a standing table for thousands"
              description="Every community has an origin story. Ours smells like instant coffee and 2am timezone math. Here is how The Third Place grew up, one small decision at a time."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-4 sm:py-8">
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-2.5 sm:left-4 top-2 bottom-2 border-l-2 border-espresso/15" aria-hidden="true" />

          <ol className="flex flex-col gap-12 sm:gap-16">
            {milestones.map((m, i) => (
              <li key={m.title} className="relative">
                <span
                  className="absolute -left-8 sm:-left-12 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-cream ring-4 ring-cream"
                  aria-hidden="true"
                >
                  <CoffeeBean className={`h-4 w-4 ${m.future ? 'text-sage' : 'text-coffee'}`} />
                </span>

                <ScrollReveal direction={i % 2 === 0 ? 'left' : 'right'} delay={Math.min(i, 4) * 60}>
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge tone={m.tone}>{m.date}</Badge>
                      {m.future && <Badge tone="sage">Looking ahead</Badge>}
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-espresso sm:text-3xl">
                      {m.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-espresso-light">{m.body}</p>
                  </div>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}
