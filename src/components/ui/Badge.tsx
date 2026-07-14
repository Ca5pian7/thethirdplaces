import type { ReactNode } from 'react'

export function Badge({
  children,
  tone = 'sage',
}: {
  children: ReactNode
  tone?: 'sage' | 'caramel' | 'clay'
}) {
  const tones: Record<string, string> = {
    sage: 'bg-sage/15 text-sage-dark border-sage/30',
    caramel: 'bg-caramel/15 text-coffee border-caramel/40',
    clay: 'bg-clay/15 text-clay border-clay/30',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
