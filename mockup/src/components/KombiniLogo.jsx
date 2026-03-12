export function KombiniLogo({ size = 'md', color = '#B5FF47' }) {
  const sizes = { sm: 'text-2xl', md: 'text-4xl', lg: 'text-6xl', xl: 'text-8xl' }
  return (
    <div className={`font-display tracking-widest ${sizes[size]}`} style={{ color }}>
      KOMBINI
    </div>
  )
}

export function KombiniWordmark({ className = '' }) {
  return (
    <svg viewBox="0 0 200 40" className={className} fill="none">
      <text
        x="100" y="32"
        textAnchor="middle"
        fontFamily="'Bebas Neue', sans-serif"
        fontSize="36"
        letterSpacing="4"
        fill="currentColor"
      >
        KOMBINI
      </text>
    </svg>
  )
}
