import type { ReactNode } from 'react'
import { useScrollReveal } from '@/lib/useScrollReveal'

type Direction = 'up' | 'left' | 'right'

const classFor: Record<Direction, string> = {
  up: 'reveal',
  left: 'reveal-left',
  right: 'reveal-right',
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref as never}
      className={`${classFor[direction]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
