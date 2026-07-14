export function CoffeeBean({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <ellipse cx="32" cy="32" rx="22" ry="30" fill="currentColor" opacity="0.9" />
      <path
        d="M32 4C26 14 26 50 32 60"
        stroke="var(--color-cream)"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  )
}

export function SteamWisp({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 80" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 78C10 78 22 66 10 54C-2 42 10 30 10 30"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M26 70C26 70 38 58 26 46C14 34 26 22 26 22"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  )
}

export function CupIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 16h26v14a13 13 0 0 1-13 13v0A13 13 0 0 1 8 30V16Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M34 19h3a5 5 0 0 1 0 10h-3"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M14 8c0 2-2 2-2 4M22 8c0 2-2 2-2 4M30 8c0 2-2 2-2 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function ChatBubbleIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 12h32v20H20l-8 8v-8H8V12Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="17" cy="22" r="1.8" fill="currentColor" />
      <circle cx="24" cy="22" r="1.8" fill="currentColor" />
      <circle cx="31" cy="22" r="1.8" fill="currentColor" />
    </svg>
  )
}

export function PeopleIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <circle cx="17" cy="16" r="6" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="33" cy="18" r="5" stroke="currentColor" strokeWidth="2.2" />
      <path
        d="M6 40c1-8 6-12 11-12s10 4 11 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M28 30c4.5 0.4 8 4 9 10"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function StringLightsIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 24" fill="none" className={className} aria-hidden="true">
      <path d="M2 4c10 10 20 10 30 0s20-10 30 0" stroke="currentColor" strokeWidth="1.6" opacity="0.6" />
      <circle cx="10" cy="8.5" r="2.4" fill="currentColor" />
      <circle cx="24" cy="13" r="2.4" fill="currentColor" />
      <circle cx="38" cy="10" r="2.4" fill="currentColor" />
      <circle cx="52" cy="6" r="2.4" fill="currentColor" />
    </svg>
  )
}
