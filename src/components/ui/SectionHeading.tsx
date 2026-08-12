export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sage-dark mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-bark leading-tight text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-bark-light leading-relaxed">{description}</p>
      )}
    </div>
  )
}
