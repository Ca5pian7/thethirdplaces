import { createFileRoute } from '@tanstack/react-router'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { ChatBubbleIcon } from '@/components/icons'

export const Route = createFileRoute('/staff')({
  component: StaffPage,
})

type StaffMember = {
  name: string
  slug: string
  role: string
  bio: string
  tone: 'sage' | 'caramel' | 'clay'
  tilt?: string
  offset?: string
}

const staff: StaffMember[] = [
  {
    name: 'Kai',
    slug: 'kai',
    role: 'Cafe Owner',
    bio: 'Hello, I am Kai, I like computer, space & games.',
    tone: 'caramel',
    tilt: 'hover:-rotate-1',
  },
  {
    name: 'DK',
    slug: 'DK',
    role: 'Cafe Owner',
    bio: 'Hi, I am DK, I do coding bots & certifed professional yapper.',
    tone: 'caramel',
    offset: 'hover:-rotate-1',
  },
  {
    name: 'Cesus',
    slug: 'cesus',
    role: 'Assistant Cafe Owner',
    bio: 'Just an ordinary person, who loves helping others whenever she can. She is active and always keeps up a good mood, isn’t afraid of challenges, and specially love music and Math',
    tone: 'clay',
    tilt: 'hover:rotate-1',
  },
  {
    name: 'Huggebugg',
    slug: 'huggebugg',
    role: 'Assistant Cafe Owner',
    bio: 'Runs the Sunday Slow Chats and refuses to let anyone leave without sharing one good thing from their week. Has a backup plan for every backup plan.',
    tone: 'clay',
    offset: 'hover:-rotate-1',
  },
  {
    name: 'Someone',
    slug: 'someone',
    role: 'Cafe Manager',
    bio: 'Turns members\' doodles and half-finished poems into the monthly gallery drops everyone screenshots. Once ran a 30-hour charity art auction on no sleep.',
    tone: 'sage',
    tilt: 'hover:-rotate-1',
  },
  {
    name: 'Billie Eilish',
    slug: 'billie-eilish',
    role: 'Cafe Manager',
    bio: 'Answers ticket number one thousand the same way she answered ticket one: slowly, kindly, and with way too many follow-up questions to make sure you are actually okay.',
    tone: 'sage',
    offset: 'hover:-rotate-1',
  },
  {
    name: 'Umbra',
    slug: 'umbra',
    role: 'Cafe Manager',
    bio: ' Me who plays War of Thunder Everyday',
    tone: 'sage',
    offset: 'hover:-rotate-1',
  },
  {
    name: 'Pat',
    slug: 'pat',
    role: 'Cafe Manager',
    bio: 'Negotiated the Night Owls Study Hall partnership over a single very long voice call and has been the go-between for cross-server events ever since.',
    tone: 'sage',
    offset: 'hover:-rotate-1',
  },
  {
    name: 'Nohagut',
    slug: 'noha',
    role: 'Special Advisor',
    bio: 'Hi,I am Noha, Nice to meet you guys.',
    tone: 'sage',
    offset: 'hover:-rotate-1',
  },
]

function avatarUrl(slug: string) {
  return `/images/staff/${slug}-pfp.png`
}

function StaffPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(198,139,86,0.18), transparent), radial-gradient(ellipse 60% 45% at 100% 30%, rgba(139,168,136,0.16), transparent)',
          }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="The People"
              title="Eleven people, nine time zones, one very long group chat"
              description="They moderate, they organize, they remember your order. Here is who keeps the lights warm at The Third Place."
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((person, i) => (
            <ScrollReveal key={person.name} delay={(i % 3) * 90} className={person.offset ?? ''}>
              <Card className={`flex h-full flex-col gap-4 p-7 ${person.tilt ?? ''}`}>
                <div className="flex items-center gap-4">
                  <img
                    src={avatarUrl(person.slug)}
                    alt={`Portrait avatar of ${person.name}, ${person.role} at The Third Café`}
                    className="h-16 w-16 shrink-0 rounded-full border border-espresso/10 bg-cream-dark"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-tight text-espresso">
                      {person.name}
                    </h3>
                    <div className="mt-1.5">
                      <Badge tone={person.tone}>{person.role}</Badge>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-espresso-light">{person.bio}</p>
                <div className="mt-auto flex items-center gap-3 pt-1">
                  <a
                    href="https://discord.gg/WBkpNH96pf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Message ${person.name} on Discord`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-espresso/5 text-coffee transition-colors hover:bg-espresso/10"
                  >
                    <ChatBubbleIcon className="h-4.5 w-4.5" />
                  </a>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
