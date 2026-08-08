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
    date: '13 July 2026',
    title: 'The Creation of The Third Café',
    body: 'DK, Kai & Some friends started the creation of The Third Café',
    tone: 'caramel',
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
              title="This is beginning of The Third Café"
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
