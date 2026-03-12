// Abstract cup SVG illustrations — category-aware
export function DrinkCup({ drink, size = 200 }) {
  const isMatcha = drink.category === 'matcha'
  const isIced = drink.isIced
  const accent = drink.accent

  if (isMatcha && isIced) return <IcedMatchaCup size={size} accent={accent} />
  if (isMatcha) return <HotMatchaCup size={size} accent={accent} />
  if (isIced) return <IcedCoffeeCup size={size} accent={accent} />
  return <HotCoffeeCup size={size} accent={accent} />
}

function HotMatchaCup({ size, accent }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 200 220" fill="none">
      {/* Steam lines */}
      <path d="M75 30 Q80 20 75 10" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M100 25 Q105 12 100 2" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
      <path d="M125 30 Q120 20 125 10" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      {/* Cup body */}
      <path d="M45 55 L55 185 Q55 195 65 195 L135 195 Q145 195 145 185 L155 55 Z"
        fill="#1C1C1C" />
      {/* Matcha liquid layer */}
      <clipPath id="cup-clip-hm">
        <path d="M45 55 L55 185 Q55 195 65 195 L135 195 Q145 195 145 185 L155 55 Z"/>
      </clipPath>
      <g clipPath="url(#cup-clip-hm)">
        <rect x="40" y="110" width="120" height="90" fill={accent} opacity="0.85"/>
        {/* Milk foam layer */}
        <ellipse cx="100" cy="110" rx="55" ry="8" fill="#F5F0E6" opacity="0.9"/>
        {/* Matcha swirl */}
        <path d="M80 108 Q100 100 120 108" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.6"/>
      </g>
      {/* Cup rim */}
      <ellipse cx="100" cy="55" rx="55" ry="9" fill="#252525"/>
      <ellipse cx="100" cy="55" rx="55" ry="9" fill="none" stroke="#3A3A3A" strokeWidth="1"/>
      {/* Cup handle */}
      <path d="M145 90 Q175 90 175 115 Q175 140 145 140" stroke="#2A2A2A" strokeWidth="8" fill="none" strokeLinecap="round"/>
      {/* Matcha dot on top */}
      <circle cx="100" cy="50" r="4" fill={accent} opacity="0.8"/>
    </svg>
  )
}

function IcedMatchaCup({ size, accent }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 200 220" fill="none">
      {/* Straw */}
      <rect x="118" y="20" width="7" height="110" rx="3.5" fill="#FF3D7F" opacity="0.9"/>
      {/* Cup body (clear/transparent effect) */}
      <path d="M45 60 L55 185 Q55 195 65 195 L135 195 Q145 195 145 185 L155 60 Z"
        fill="#1A1A1A" />
      <path d="M45 60 L55 185 Q55 195 65 195 L135 195 Q145 195 145 185 L155 60 Z"
        fill="none" stroke="#2D2D2D" strokeWidth="1.5"/>
      {/* Ice blocks */}
      <clipPath id="cup-clip-im">
        <path d="M45 60 L55 185 Q55 195 65 195 L135 195 Q145 195 145 185 L155 60 Z"/>
      </clipPath>
      <g clipPath="url(#cup-clip-im)">
        {/* Matcha layer at bottom */}
        <rect x="40" y="150" width="120" height="50" fill={accent} opacity="0.8"/>
        {/* Milk layer */}
        <rect x="40" y="100" width="120" height="55" fill="#E8F4E8" opacity="0.6"/>
        {/* Ice cubes */}
        <rect x="55" y="75" width="30" height="25" rx="4" fill="rgba(200,240,255,0.4)" stroke="rgba(200,240,255,0.6)" strokeWidth="1"/>
        <rect x="95" y="80" width="28" height="22" rx="4" fill="rgba(200,240,255,0.35)" stroke="rgba(200,240,255,0.5)" strokeWidth="1"/>
        <rect x="70" y="105" width="25" height="20" rx="4" fill="rgba(200,240,255,0.3)" stroke="rgba(200,240,255,0.5)" strokeWidth="1"/>
      </g>
      {/* Cup rim */}
      <ellipse cx="100" cy="60" rx="55" ry="9" fill="#252525"/>
      {/* Lid */}
      <ellipse cx="100" cy="57" rx="57" ry="10" fill="#1E1E1E" stroke="#333" strokeWidth="1"/>
      <ellipse cx="100" cy="54" rx="40" ry="5" fill="#2A2A2A"/>
    </svg>
  )
}

function HotCoffeeCup({ size, accent }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 200 220" fill="none">
      {/* Steam */}
      <path d="M80 32 Q85 20 80 8" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M100 26 Q105 14 100 2" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.85"/>
      <path d="M120 32 Q115 20 120 8" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
      {/* Saucer */}
      <ellipse cx="100" cy="200" rx="65" ry="9" fill="#222222"/>
      {/* Cup body */}
      <path d="M55 65 L62 185 Q62 193 72 193 L128 193 Q138 193 138 185 L145 65 Z"
        fill="#1C1C1C"/>
      <clipPath id="cup-clip-hc">
        <path d="M55 65 L62 185 Q62 193 72 193 L128 193 Q138 193 138 185 L145 65 Z"/>
      </clipPath>
      <g clipPath="url(#cup-clip-hc)">
        {/* Coffee liquid */}
        <rect x="50" y="105" width="105" height="95" fill={accent} opacity="0.75"/>
        {/* Foam layer */}
        <ellipse cx="100" cy="105" rx="46" ry="7" fill="#F5E8D0" opacity="0.9"/>
        {/* Latte art hint */}
        <path d="M85 103 Q100 97 115 103" stroke={accent} strokeWidth="1.5" fill="none" opacity="0.5"/>
      </g>
      {/* Rim */}
      <ellipse cx="100" cy="65" rx="46" ry="8" fill="#252525"/>
      <ellipse cx="100" cy="65" rx="46" ry="8" fill="none" stroke="#3A3A3A" strokeWidth="1"/>
      {/* Handle */}
      <path d="M138 90 Q165 90 165 118 Q165 146 138 146"
        stroke="#2A2A2A" strokeWidth="10" fill="none" strokeLinecap="round"/>
      <path d="M138 90 Q162 90 162 118 Q162 146 138 146"
        stroke="#363636" strokeWidth="6" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

function IcedCoffeeCup({ size, accent }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 200 220" fill="none">
      {/* Straw */}
      <rect x="115" y="15" width="7" height="115" rx="3.5" fill={accent} opacity="0.9"/>
      {/* Cup */}
      <path d="M40 60 L52 190 Q52 198 62 198 L138 198 Q148 198 148 190 L160 60 Z"
        fill="#1A1A1A"/>
      <path d="M40 60 L52 190 Q52 198 62 198 L138 198 Q148 198 148 190 L160 60 Z"
        fill="none" stroke="#2D2D2D" strokeWidth="1.5"/>
      <clipPath id="cup-clip-ic">
        <path d="M40 60 L52 190 Q52 198 62 198 L138 198 Q148 198 148 190 L160 60 Z"/>
      </clipPath>
      <g clipPath="url(#cup-clip-ic)">
        {/* Coffee at bottom */}
        <rect x="35" y="155" width="130" height="50" fill={accent} opacity="0.75"/>
        {/* Mid layer */}
        <rect x="35" y="110" width="130" height="50" fill={accent} opacity="0.35"/>
        {/* Ice cubes */}
        <rect x="50" y="75" width="32" height="26" rx="5" fill="rgba(200,230,255,0.3)" stroke="rgba(200,230,255,0.5)" strokeWidth="1"/>
        <rect x="90" y="80" width="28" height="24" rx="5" fill="rgba(200,230,255,0.25)" stroke="rgba(200,230,255,0.4)" strokeWidth="1"/>
        <rect x="115" y="72" width="25" height="22" rx="5" fill="rgba(200,230,255,0.3)" stroke="rgba(200,230,255,0.5)" strokeWidth="1"/>
        <rect x="62" y="108" width="30" height="24" rx="5" fill="rgba(200,230,255,0.2)" stroke="rgba(200,230,255,0.4)" strokeWidth="1"/>
      </g>
      {/* Lid */}
      <ellipse cx="100" cy="58" rx="60" ry="10" fill="#222"/>
      <ellipse cx="100" cy="55" rx="42" ry="5.5" fill="#2A2A2A"/>
    </svg>
  )
}
