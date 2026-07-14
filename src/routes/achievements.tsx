import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useScrollReveal } from '@/lib/useScrollReveal'

export const Route = createFileRoute('/achievements')({
  component: AchievementsPage,
})

const counters = [
  { value: 4127, label: 'members and counting', suffix: '' },
  { value: 58940, label: 'messages sent this month', suffix: '' },
  { value: 142, label: 'community events hosted', suffix: '' },
  { value: 37, label: 'countries represented', suffix: '' },
]

type BadgeTone = 'sage' | 'caramel' | 'clay'

const achievements: Array<{
  category: string
  tone: BadgeTone
  title: string
  description: string
  span?: boolean
}> = [
  {
    category: 'Event Winner',
    tone: 'clay',
    title: 'Trivia Night Champion — Priya Nakamura',
    description:
      'Six-time undefeated champion of our Friday Trivia Night, including a legendary sweep of the all-café-history themed round.',
  },
  {
    category: 'Event Winner',
    tone: 'clay',
    title: 'Karaoke Cup — Diego Fuentes',
    description:
      'Took home the inaugural Karaoke Cup with a rendition of a 2000s power ballad that is still referenced in #daily-brew.',
  },
  {
    category: 'Milestone',
    tone: 'sage',
    title: 'Server boosted to Level 3 by community vote',
    description:
      'Members pooled boosts over a single weekend to unlock higher-quality voice channels and a new emoji slate, all without staff asking.',
    span: true,
  },
  {
    category: 'Event Winner',
    tone: 'clay',
    title: 'Cozy Games Speedrun — Team Chamomile',
    description:
      'Fastest cooperative clear of a cozy farming sim during our Cozy Games Weekend, edging out four other teams by eleven seconds.',
  },
  {
    category: 'Milestone',
    tone: 'sage',
    title: 'First member-run coffee-tasting livestream',
    description:
      'A member walked 200 concurrent viewers through a comparative tasting of three single-origin roasts, live from their kitchen.',
  },
  {
    category: 'Recognition',
    tone: 'caramel',
    title: "Featured in Discord's community showcase newsletter",
    description:
      'The Third Place was highlighted in the Spring 2025 community showcase for our approach to slow, low-pressure conversation channels.',
    span: true,
  },
  {
    category: 'Recognition',
    tone: 'caramel',
    title: 'Nominated for "Best Small Community" fan award',
    description:
      'Nominated by members of a partner server for an independent community awards roundup celebrating servers under 10,000 members.',
  },
]

function AnimatedCounter({
  value,
  label,
  suffix = '',
}: {
  value: number
  label: string
  suffix?: string
}) {
  const ref = useScrollReveal<HTMLDivElement>()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setDisplay(value)
      return
    }

    let frame: number
    let started = false

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true
            const duration = 1500
            const start = performance.now()

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(Math.round(eased * value))
              if (progress < 1) {
                frame = requestAnimationFrame(tick)
              }
            }
            frame = requestAnimationFrame(tick)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [ref, value])

  return (
    <div ref={ref}>
      <div className="font-display text-3xl font-semibold text-espresso sm:text-4xl">
        {display.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-1 text-sm text-espresso-light">{label}</div>
    </div>
  )
}

function AchievementsPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones, champions, and small wins worth remembering"
          description="Numbers that grow every week, and the people and moments that made this place feel like more than a server."
        />
      </ScrollReveal>

      {/* Animated counters */}
      <div className="mt-12 rounded-3xl border border-espresso/10 bg-parchment/50 px-6 py-10 sm:px-10">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {counters.map((counter, i) => (
            <ScrollReveal key={counter.label} delay={i * 90}>
              <AnimatedCounter value={counter.value} label={counter.label} suffix={counter.suffix} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Achievement cards */}
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {achievements.map((item, i) => (
          <ScrollReveal
            key={item.title}
            delay={(i % 4) * 90}
            className={item.span ? 'sm:col-span-2' : ''}
          >
            <Card className={`flex h-full flex-col gap-4 ${item.span ? 'p-8' : 'p-7'}`}>
              <Badge tone={item.tone}>{item.category}</Badge>
              <h3 className="font-display text-xl font-semibold text-espresso">{item.title}</h3>
              <p className="text-sm leading-relaxed text-espresso-light">{item.description}</p>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
