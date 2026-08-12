import type { HTMLAttributes, ReactNode } from 'react'

export function Card({
  children,
  className = '',
  ...props
}: { children: ReactNode; className?: string } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-3xl bg-white/70 border border-bark/10 shadow-[0_8px_30px_-12px_rgba(46,53,36,0.25)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_16px_36px_-14px_rgba(46,53,36,0.35)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
