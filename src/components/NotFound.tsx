import { Link } from '@tanstack/react-router'
import { PawPrintIcon } from '@/components/icons'

export function NotFound() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(217,164,65,0.20), transparent)',
        }}
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-2xl flex-col items-center px-5 py-24 text-center sm:py-32">
        <PawPrintIcon className="h-14 w-14 text-trunk/30" aria-hidden="true" />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-sage-dark">
          404
        </p>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-bark sm:text-4xl">
          Looks like this trail's gone cold.
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-bark-light">
          The page you're looking for must have wandered off into the trees. Let's get you back
          to a seat that exists.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-bark px-7 py-3.5 text-base font-semibold text-cream shadow-[0_10px_28px_-8px_rgba(46,53,36,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-8px_rgba(46,53,36,0.55)]"
        >
          Back to The Third Café
        </Link>
      </div>
    </div>
  )
}
