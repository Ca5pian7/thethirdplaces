import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold transition-all duration-200 ease-out focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none'

const variants: Record<Variant, string> = {
  primary:
    'bg-bark text-cream px-6 py-3 shadow-[0_6px_18px_-6px_rgba(46,53,36,0.45)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(46,53,36,0.5)] active:translate-y-0',
  secondary:
    'bg-sage text-cream px-6 py-3 shadow-[0_6px_18px_-6px_rgba(76,112,72,0.45)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(76,112,72,0.5)] active:translate-y-0',
  ghost:
    'bg-transparent text-bark border border-bark/25 px-6 py-3 hover:bg-bark/5 hover:-translate-y-0.5',
}

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: ReactNode
  variant?: Variant
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function LinkButton({
  children,
  variant = 'primary',
  className = '',
  ...props
}: {
  children: ReactNode
  variant?: Variant
  className?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
