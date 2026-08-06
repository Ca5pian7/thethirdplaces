import { useState } from 'react'
import type { FormEvent } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button, LinkButton } from '@/components/ui/Button'
import { DiscordIcon, InstagramIcon, XIcon } from '@/components/icons'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

const DISCORD_URL = 'https://discord.gg/https://discord.gg/WBkpNH96pf'

function encode(data: Record<string, string>): string {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}


const inputClasses =
  'w-full rounded-xl border border-espresso/20 bg-cream/50 px-4 py-3 text-espresso placeholder:text-espresso-light/60 transition-colors focus-visible:outline-none focus-visible:border-coffee'

function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name,
          email,
          message,
          'bot-field': honeypot,
        }),
      })

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`)
      }

      setSubmitted(true)
    } catch {
      setError('Something went wrong sending your message. Please try again in a moment.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 pb-6 pt-16 sm:px-8 sm:pt-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Get in touch"
            title="Pull up a chair and say hello"
            description="Questions, feedback, or partnership ideas — we read every message and write back like real people, because we are."
          />
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <ScrollReveal direction="left" className="lg:col-span-3">
            <Card className="p-7 sm:p-9">
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
                  <h3 className="font-display text-2xl font-semibold text-espresso sm:text-3xl">
                    Thank you &mdash; we'll write back soon.
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-espresso-light">
                    Your note is in good hands. Someone from the team reads every message that
                    comes through this form, usually over their own cup of coffee.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <input type="hidden" name="form-name" value="contact" />

                  <div
                    className="hidden"
                    aria-hidden="true"
                  >
                    <label htmlFor="bot-field">Do not fill this out</label>
                    <input
                      id="bot-field"
                      name="bot-field"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-espresso">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={inputClasses}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-espresso">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClasses}
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-espresso">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`${inputClasses} resize-none`}
                      placeholder="What's on your mind?"
                    />
                  </div>

                  {error && (
                    <p className="text-sm font-medium text-clay" role="alert">
                      {error}
                    </p>
                  )}

                  <Button type="submit" disabled={isSubmitting} className="self-start">
                    {isSubmitting ? 'Sending…' : 'Send message'}
                  </Button>
                </form>
              )}
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={90} className="lg:col-span-2">
            <Card className="flex h-full flex-col gap-8 p-7 sm:p-9">
              <div>
                <h3 className="font-display text-xl font-semibold text-espresso">
                  Join us on Discord
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso-light">
                  Most conversations happen in real time, not in an inbox. Come find your regulars.
                </p>
                <LinkButton
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="mt-4 w-full"
                >
                  Join our Discord
                </LinkButton>
              </div>

              <div className="border-t border-espresso/10 pt-6">
                <h3 className="font-display text-lg font-semibold text-espresso">
                  Partnering with us
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-espresso-light">
                  We love collaborating with other communities on joint events, trivia nights, and
                  cross-server hangouts. Drop a note in the form with the details, or find us in
                  the #partnerships channel on Discord and we'll take it from there.
                </p>
              </div>

              <div className="mt-auto border-t border-espresso/10 pt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-espresso">
                  Find us elsewhere
                </h3>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join us on Discord"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso-light transition-colors hover:bg-espresso/5 hover:text-espresso"
                  >
                    <DiscordIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://instagram.com/thethirdplace"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso-light transition-colors hover:bg-espresso/5 hover:text-espresso"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/thethirdplace"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on X"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-espresso/15 text-espresso-light transition-colors hover:bg-espresso/5 hover:text-espresso"
                  >
                    <XIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
