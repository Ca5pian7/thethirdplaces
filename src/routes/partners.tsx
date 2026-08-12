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
  honey: 'bg-honey/20 text-trunk',
  berry: 'bg-berry/20 text-berry',
  trunk: 'bg-trunk/15 text-trunk',
}

const partners = [
  {
    slug: 'Vp9J4VFmF9',
    name: 'Buddy Bunker',
    initials: 'BB',
    tone: 'trunk',
    description:
      'Buddy Bunker your new online Home! From chatting, gaming and fun activities we have everything, and you are guaranteed to make friends along the way!',
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
                <Badge tone="honey">Valued Partner</Badge>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-bark">{partner.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bark-light">
                  {partner.description}
                </p>
              </div>
              <LinkButton
                variant="ghost"
                href={`https://discord.gg/${partner.slug}`}
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
