// Cartoon mascot characters for the KOMBINI kiosk

// Round matcha blob character with star eyes
export function MatchaCharacter({ size = 120, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="60" cy="112" rx="32" ry="6" fill="#0D0D0D" opacity="0.12" />
      {/* Body */}
      <circle cx="60" cy="66" r="48" fill="#B5FF47" />
      <circle cx="60" cy="66" r="48" fill="none" stroke="#0D0D0D" strokeWidth="3" />
      {/* Left arm */}
      <path d="M17 75 Q5 62 11 48" stroke="#0D0D0D" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="11" cy="46" r="5" fill="#B5FF47" stroke="#0D0D0D" strokeWidth="3" />
      {/* Right arm */}
      <path d="M103 75 Q115 62 109 48" stroke="#0D0D0D" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="109" cy="46" r="5" fill="#B5FF47" stroke="#0D0D0D" strokeWidth="3" />
      {/* Left eye — star */}
      <path d="M43 60 l1.8 5.5h5.8l-4.7 3.4 1.8 5.5-4.7-3.4-4.7 3.4 1.8-5.5-4.7-3.4h5.8z"
        fill="#0D0D0D" />
      {/* Right eye — star */}
      <path d="M77 60 l1.8 5.5h5.8l-4.7 3.4 1.8 5.5-4.7-3.4-4.7 3.4 1.8-5.5-4.7-3.4h5.8z"
        fill="#0D0D0D" />
      {/* Smile */}
      <path d="M44 82 Q60 96 76 82" stroke="#0D0D0D" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Blush left */}
      <ellipse cx="36" cy="82" rx="7" ry="5" fill="#FF9D3D" opacity="0.45" />
      {/* Blush right */}
      <ellipse cx="84" cy="82" rx="7" ry="5" fill="#FF9D3D" opacity="0.45" />
      {/* Leaf on head */}
      <path d="M52 20 Q60 8 68 20 Q60 28 52 20z" fill="#00CC44" stroke="#0D0D0D" strokeWidth="2" />
      <path d="M60 20 L60 28" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// Coffee cup character with sunglasses
export function CoffeeCharacter({ size = 120, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="60" cy="112" rx="30" ry="6" fill="#0D0D0D" opacity="0.12" />
      {/* Steam lines */}
      <path d="M38 32 Q35 24 38 16" stroke="#FF9D3D" strokeWidth="3" strokeLinecap="round" />
      <path d="M52 28 Q49 18 52 8" stroke="#FF9D3D" strokeWidth="3" strokeLinecap="round" />
      <path d="M66 30 Q63 20 66 12" stroke="#FF9D3D" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 32 Q77 24 80 16" stroke="#FF9D3D" strokeWidth="3" strokeLinecap="round" />
      {/* Cup body */}
      <path d="M24 50 L30 104 Q30 108 34 108 L86 108 Q90 108 90 104 L96 50 Z"
        fill="#FF9D3D" stroke="#0D0D0D" strokeWidth="3" strokeLinejoin="round" />
      {/* Handle */}
      <path d="M90 62 Q108 62 108 78 Q108 94 90 94"
        stroke="#0D0D0D" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Lid */}
      <rect x="18" y="40" width="84" height="14" rx="7" fill="#0D0D0D" />
      {/* Lid highlight */}
      <rect x="22" y="43" width="30" height="4" rx="2" fill="white" opacity="0.15" />
      {/* Left sunglass lens */}
      <rect x="28" y="60" width="26" height="18" rx="8" fill="#0D0D0D" />
      {/* Left lens shine */}
      <circle cx="35" cy="66" r="3" fill="white" opacity="0.35" />
      {/* Right sunglass lens */}
      <rect x="64" y="60" width="26" height="18" rx="8" fill="#0D0D0D" />
      {/* Right lens shine */}
      <circle cx="71" cy="66" r="3" fill="white" opacity="0.35" />
      {/* Sunglasses bridge */}
      <path d="M54 69 L64 69" stroke="#0D0D0D" strokeWidth="3" strokeLinecap="round" />
      {/* Smile */}
      <path d="M40 90 Q60 102 80 90" stroke="#0D0D0D" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Blush left */}
      <ellipse cx="32" cy="88" rx="6" ry="4" fill="#FF3D7F" opacity="0.4" />
      {/* Blush right */}
      <ellipse cx="88" cy="88" rx="6" ry="4" fill="#FF3D7F" opacity="0.4" />
    </svg>
  )
}

// Reward mascot — chibi character with a drink
export function RewardMascot({ size = 140, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 140 154"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shadow */}
      <ellipse cx="70" cy="148" rx="38" ry="6" fill="#0D0D0D" opacity="0.12" />
      {/* Hoodie body */}
      <path d="M25 100 Q20 140 25 148 L115 148 Q120 140 115 100 Q100 88 70 88 Q40 88 25 100z"
        fill="#B5FF47" stroke="#0D0D0D" strokeWidth="3" strokeLinejoin="round" />
      {/* Hoodie pocket */}
      <path d="M46 120 Q70 116 94 120 Q94 136 70 138 Q46 136 46 120z"
        fill="rgba(0,0,0,0.12)" />
      {/* Head */}
      <circle cx="70" cy="68" r="38" fill="#FFD6B0" />
      <circle cx="70" cy="68" r="38" fill="none" stroke="#0D0D0D" strokeWidth="3" />
      {/* Hair / hood */}
      <path d="M34 58 Q32 30 70 28 Q108 30 106 58 Q96 44 70 44 Q44 44 34 58z"
        fill="#B5FF47" stroke="#0D0D0D" strokeWidth="3" strokeLinejoin="round" />
      {/* Eyes — happy closed crescents */}
      <path d="M52 64 Q57 70 62 64" stroke="#0D0D0D" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M78 64 Q83 70 88 64" stroke="#0D0D0D" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Smile */}
      <path d="M58 78 Q70 88 82 78" stroke="#0D0D0D" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Blush */}
      <ellipse cx="50" cy="78" rx="7" ry="5" fill="#FF9D3D" opacity="0.5" />
      <ellipse cx="90" cy="78" rx="7" ry="5" fill="#FF9D3D" opacity="0.5" />
      {/* Left arm holding cup */}
      <path d="M25 104 Q10 104 8 88 L28 88" stroke="#0D0D0D" strokeWidth="4" strokeLinecap="round" fill="none" />
      {/* Mini drink cup */}
      <rect x="5" y="72" width="26" height="20" rx="3" fill="#00C8D4" stroke="#0D0D0D" strokeWidth="2.5" />
      <rect x="3" y="70" width="30" height="6" rx="3" fill="#0D0D0D" />
      <path d="M13 70 Q18 62 23 70" stroke="#0D0D0D" strokeWidth="2" fill="none" />
      {/* Star on hoodie */}
      <path d="M70 120 l1.4 4.2h4.4l-3.6 2.6 1.4 4.2-3.6-2.6-3.6 2.6 1.4-4.2-3.6-2.6h4.4z"
        fill="#FFD600" />
    </svg>
  )
}

// Tiny inline matcha leaf decoration
export function MatchaLeaf({ size = 32, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M8 24 Q4 12 16 8 Q28 12 24 24 Q20 20 16 20 Q12 20 8 24z"
        fill="#B5FF47" stroke="#0D0D0D" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 20 L16 28" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 14 L14 18 M16 14 L18 18" stroke="#0D0D0D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// Coffee bean decoration
export function CoffeeBean({ size = 28, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" className={className}>
      <ellipse cx="14" cy="14" rx="10" ry="13" fill="#FF9D3D" stroke="#0D0D0D" strokeWidth="2" />
      <path d="M14 3 Q8 10 10 16 Q12 22 14 25" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M14 3 Q20 10 18 16 Q16 22 14 25" stroke="#0D0D0D" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  )
}
