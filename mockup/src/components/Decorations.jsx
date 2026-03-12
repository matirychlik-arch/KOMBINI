// Reusable decorative SVG elements for the KOMBINI cartoon aesthetic

export function StarFill({ size = 24, color = '#0D0D0D', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
        fill={color}
      />
    </svg>
  )
}

export function StarOutline({ size = 24, color = '#0D0D0D', strokeWidth = 2, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Sparkle({ size = 24, color = '#0D0D0D', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2 L13.2 10.8 L22 12 L13.2 13.2 L12 22 L10.8 13.2 L2 12 L10.8 10.8 Z" fill={color} />
    </svg>
  )
}

export function Bolt({ size = 24, color = '#0D0D0D', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill={color} />
    </svg>
  )
}

export function Heart({ size = 24, color = '#FF3D7F', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill={color}
      />
    </svg>
  )
}

export function Plus({ size = 24, color = '#0D0D0D', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 4v16M4 12h16" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

// A scattered overlay of stars — place as absolute-positioned overlay inside a `relative overflow-hidden` container
export function ScatteredStars({ color = '#0D0D0D', opacity = 0.18, count = 10 }) {
  // Fixed positions to avoid hydration issues / random re-renders
  const positions = [
    { x: 8,  y: 6,  size: 14, rot: 15  },
    { x: 88, y: 4,  size: 18, rot: -20 },
    { x: 75, y: 15, size: 10, rot: 30  },
    { x: 20, y: 18, size: 22, rot: 5   },
    { x: 50, y: 8,  size: 12, rot: -10 },
    { x: 92, y: 35, size: 16, rot: 25  },
    { x: 5,  y: 45, size: 20, rot: -35 },
    { x: 62, y: 52, size: 10, rot: 45  },
    { x: 30, y: 72, size: 16, rot: -15 },
    { x: 85, y: 70, size: 14, rot: 20  },
    { x: 15, y: 88, size: 12, rot: 35  },
    { x: 55, y: 85, size: 18, rot: -25 },
  ].slice(0, count)

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
      {positions.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: `rotate(${p.rot}deg)`,
          }}
        >
          <StarFill size={p.size} color={color} />
        </div>
      ))}
    </div>
  )
}

// Outline star cluster — for bright backgrounds
export function ScatteredStarsOutline({ color = '#0D0D0D', opacity = 0.25, count = 8 }) {
  const positions = [
    { x: 6,  y: 8,  size: 16, rot: 10  },
    { x: 85, y: 6,  size: 20, rot: -15 },
    { x: 70, y: 20, size: 12, rot: 28  },
    { x: 22, y: 22, size: 24, rot: 8   },
    { x: 48, y: 10, size: 14, rot: -8  },
    { x: 90, y: 40, size: 18, rot: 22  },
    { x: 4,  y: 50, size: 22, rot: -30 },
    { x: 60, y: 55, size: 12, rot: 42  },
  ].slice(0, count)

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
      {positions.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            transform: `rotate(${p.rot}deg)`,
          }}
        >
          <StarOutline size={p.size} color={color} strokeWidth={2.5} />
        </div>
      ))}
    </div>
  )
}

// Dot grid pattern as background texture
export function DotGrid({ color = '#0D0D0D', opacity = 0.08 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage: `radial-gradient(circle, ${color} 1.5px, transparent 1.5px)`,
        backgroundSize: '24px 24px',
      }}
    />
  )
}
