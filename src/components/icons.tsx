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

export function DiscordIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 9.5c1.5 1 5 1 8 0M9 15c-3 0-5-1.5-5-1.5S5 8 6.5 6.5C7.5 5.5 9 5.2 9 5.2l.7 1.3M15 15c3 0 5-1.5 5-1.5S19 8 17.5 6.5C16.5 5.5 15 5.2 15 5.2l-.7 1.3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="9.5" cy="12" r="1.3" fill="currentColor" />
      <circle cx="14.5" cy="12" r="1.3" fill="currentColor" />
      <path d="M9 15c0 2-1 3-1 3s5 1.5 8 0c0 0-1-1-1-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  )
}

export function XIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export function LeafIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M10 38C6 24 14 8 38 8c2 22-12 32-28 30Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M12 36C20 26 28 18 36 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export function PineconeIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M24 4c9 8 13 20 13 32 0 10-6 20-13 24-7-4-13-14-13-24 0-12 4-24 13-32Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      <path
        d="M13 20c5 2 17 2 22 0M12 30c6 2.5 18 2.5 24 0M13 40c5 2 17 2 22 0"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function MushroomIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <path
        d="M8 22C8 12 15 6 24 6s16 6 16 16c-6 3-26 3-32 0Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.14"
      />
      <circle cx="17" cy="15" r="1.6" fill="currentColor" />
      <circle cx="27" cy="12" r="1.4" fill="currentColor" />
      <circle cx="24" cy="19" r="1.3" fill="currentColor" />
      <path
        d="M18 22v12a6 6 0 0 0 12 0V22"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PawPrintIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <ellipse cx="24" cy="32" rx="11" ry="9" fill="currentColor" opacity="0.9" />
      <ellipse cx="9" cy="18" rx="5" ry="6.5" fill="currentColor" opacity="0.9" />
      <ellipse cx="22" cy="10" rx="5" ry="6.5" fill="currentColor" opacity="0.9" />
      <ellipse cx="35" cy="14" rx="5" ry="6.5" fill="currentColor" opacity="0.9" />
      <ellipse cx="41" cy="26" rx="4.5" ry="6" fill="currentColor" opacity="0.9" />
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
