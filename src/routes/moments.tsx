import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CupIcon, ChatBubbleIcon, PeopleIcon, StringLightsIcon } from '@/components/icons'

export const Route = createFileRoute('/moments')({
  component: MomentsPage,
})

function DiceIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="6" y="6" width="36" height="36" rx="8" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="16" cy="16" r="2.4" fill="currentColor" />
      <circle cx="32" cy="16" r="2.4" fill="currentColor" />
      <circle cx="24" cy="24" r="2.4" fill="currentColor" />
      <circle cx="16" cy="32" r="2.4" fill="currentColor" />
      <circle cx="32" cy="32" r="2.4" fill="currentColor" />
    </svg>
  )
}

function BookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 12c-3-3-9-4-16-3v27c7-1 13 0 16 3 3-3 9-4 16-3V9c-7-1-13 0-16 3Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M24 12v27" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

type Tile = {
  gradient: string
  icon: (props: { className?: string }) => React.ReactElement
  caption: string
  aspect: string
  image?: string
}

// To add a real photo: drop the file in public/images/moments/ and set
// `image` to its path (e.g. '/images/moments/your-photo.jpg') on a tile.
// The gradient/icon art is only used as a fallback for tiles without an image.
const tiles: Tile[] = [
  {
    gradient: 'bg-gradient-to-br from-honey/40 to-bark/20',
    icon: CupIcon,
    caption: 'Daily Brew — Tuesday regulars',
    aspect: 'h-72',
    image: '/images/moments/fake.png',
  },
]

function TileArt({
  tile,
  className = '',
  iconClassName = 'h-10 w-10',
}: {
  tile: Tile
  className?: string
  iconClassName?: string
}) {
  const Icon = tile.icon
  return (
    <div className={`relative w-full overflow-hidden ${tile.gradient} ${className}`}>
      {tile.image ? (
        <img
          src={tile.image}
          alt={tile.caption}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Icon className={`absolute inset-0 m-auto text-bark/50 ${iconClassName}`} />
      )}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bark/50 to-transparent p-4 pt-10">
        <p className="font-display text-sm font-semibold text-cream sm:text-base">
          {tile.caption}
        </p>
      </div>
    </div>
  )
}

function MomentsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    if (openIndex === null) return

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpenIndex(null)
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % tiles.length))
      if (e.key === 'ArrowLeft')
        setOpenIndex((i) => (i === null ? i : (i - 1 + tiles.length) % tiles.length))
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [openIndex])

  const current = openIndex === null ? null : tiles[openIndex]

  return (
    <div>
      <section className="mx-auto max-w-7xl px-5 pb-6 pt-16 sm:px-8 sm:pt-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Moments from around the table"
            description="A scrapbook of the small, ordinary things that made this community feel like home. Click any tile for a closer look."
          />
        </ScrollReveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {tiles.map((tile, i) => (
            <ScrollReveal key={tile.caption} delay={(i % 6) * 70} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Open photo: ${tile.caption}`}
                className="block w-full cursor-pointer rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trunk"
              >
                <TileArt
                  tile={tile}
                  className={`${tile.aspect} rounded-2xl shadow-[0_8px_24px_-12px_rgba(46,53,36,0.35)] transition-transform duration-300 hover:scale-[1.02]`}
                />
              </button>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bark/80 p-5 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <TileArt
              tile={current}
              className="h-[60vh] max-h-[520px] rounded-3xl shadow-2xl"
              iconClassName="h-16 w-16"
            />

            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="absolute -top-4 -right-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream text-bark shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trunk"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() =>
                setOpenIndex((i) => (i === null ? i : (i - 1 + tiles.length) % tiles.length))
              }
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-bark shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trunk"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              type="button"
              onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % tiles.length))}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-cream/90 text-bark shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-trunk"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
