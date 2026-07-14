import { createFileRoute } from '@tanstack/react-router'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { LinkButton } from '@/components/ui/Button'

export const Route = createFileRoute('/partners')({
  component: PartnersPage,
})

const monogramTones: Record<string, string> = {
  sage: 'bg-sage/20 text-sage-dark',
  caramel: 'bg-caramel/20 text-coffee',
  clay: 'bg-clay/20 text-clay',
  coffee: 'bg-coffee/15 text-coffee',
}

const partners = [
  {
    slug: 'chapter-and-verse',
    name: 'Chapter & Verse',
    initials: 'C&V',
    tone: 'coffee',
    description:
      'A cozy book club server running two parallel reads a month, one comfort pick and one that stretches you. Their margin-notes channel is basically a second book club.',
  },
  {
    slug: 'the-slow-mornings-collective',
    name: 'The Slow Mornings Collective',
    initials: 'SM',
    tone: 'sage',
    description:
      'A journaling and slow-living community built around gentle daily prompts and a no-hustle-culture rule. They co-host our Sunday reflection threads.',
  },
  {
    slug: 'small-batch-roasters-guild',
    name: 'Small Batch Roasters Guild',
    initials: 'SBR',
    tone: 'caramel',
    description:
      'Independent coffee roasters and home-brewing obsessives trading tasting notes, bean sourcing tips, and the occasional pour-over meltdown.',
  },
  {
    slug: 'tandem-language-exchange',
    name: 'Tandem Table',
    initials: 'TT',
    tone: 'clay',
    description:
      'A language exchange server pairing learners across 40+ languages for voice practice. Several of our members met their study partners here.',
  },
  {
    slug: 'meeple-and-mug',
    name: 'Meeple & Mug',
    initials: 'M&M',
    tone: 'sage',
    description:
      'A board games community that runs weekly async Codenames and a monthly "teach me your favorite game" voice night. Endlessly patient with rules explanations.',
  },
  {
    slug: 'hearthlight-cozy-gaming',
    name: 'Hearthlight Cozy Gaming',
    initials: 'HL',
    tone: 'caramel',
    description:
      'Dedicated to cozy and low-stakes video games, farm sims to walking simulators. Their screenshot channel is pure comfort scrolling.',
  },
]

function PartnerLogo({ initials, tone }: { initials: string; tone: string }) {
  return (
    <div
      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl font-display text-2xl font-semibold ${monogramTones[tone]}`}
      aria-hidden="true"
    >
      {initials}
    </div>
  )
}

function PartnersPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Our Partners"
          title="Communities we'd send our own members to"
          description="We only partner with Discord communities we've spent real time in ourselves — places with the same slow, welcoming spirit we try to keep here."
        />
      </ScrollReveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((partner, i) => (
          <ScrollReveal
            key={partner.slug}
            delay={(i % 3) * 100}
            className={i % 5 === 2 ? 'lg:translate-y-6' : i % 5 === 4 ? 'lg:-translate-y-3' : ''}
          >
            <Card className={`flex h-full flex-col gap-5 p-7 ${i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
              <div className="flex items-start justify-between gap-4">
                <PartnerLogo initials={partner.initials} tone={partner.tone} />
                <Badge tone="caramel">Valued Partner</Badge>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-espresso">{partner.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso-light">
                  {partner.description}
                </p>
              </div>
              <LinkButton
                variant="ghost"
                href={`https://discord.gg/placeholder-${partner.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto self-start"
              >
                Visit
              </LinkButton>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
