import type { ReactNode } from 'react'

export function Badge({
  children,
  tone = 'sage',
}: {
  children: ReactNode
  tone?: 'sage' | 'honey' | 'berry'
}) {
  const tones: Record<string, string> = {
    sage: 'bg-sage/15 text-sage-dark border-sage/30',
    honey: 'bg-honey/15 text-trunk border-honey/40',
    berry: 'bg-berry/15 text-berry border-berry/30',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
