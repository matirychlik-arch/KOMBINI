import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ScatteredStars, StarFill, Sparkle } from '../components/Decorations'

const COUNTDOWN = 6
const TICKER = '★ YOUR DRINK IS READY ★ PICK IT UP BELOW ★ YOUR DRINK IS READY ★ PICK IT UP BELOW ★ '

export default function PickupScreen({ onReset, cart }) {
  const [count, setCount] = useState(COUNTDOWN)
  const drink = cart[cart.length - 1]?.drink

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => {
        if (c <= 1) { clearInterval(id); onReset(); return 0 }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [onReset])

  return (
    <motion.div
      className="screen relative"
      style={{ background: '#00CC44' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Stars */}
      <ScatteredStars color="#0D0D0D" opacity={0.2} count={9} />

      {/* Top ticker */}
      <div className="shrink-0 overflow-hidden py-3" style={{ background: '#0D0D0D' }}>
        <div className="marquee-track">
          {[TICKER, TICKER].map((t, i) => (
            <span key={i} className="font-body font-800 text-xs tracking-[0.2em]"
              style={{ color: '#00CC44' }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-7 relative z-10">

        {/* Big checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
          className="w-36 h-36 rounded-full flex items-center justify-center"
          style={{
            background: '#fff',
            border: '4px solid #0D0D0D',
            boxShadow: '6px 6px 0px #0D0D0D',
          }}
        >
          <motion.svg width="64" height="64" viewBox="0 0 56 56" fill="none">
            <motion.path
              d="M10 28L23 41L46 16"
              stroke="#00CC44"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            />
          </motion.svg>
        </motion.div>

        {/* Headline */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h1 className="font-display leading-none text-[#0D0D0D]" style={{ fontSize: '72px' }}>
              YOUR DRINK
            </h1>
            <h1 className="font-display leading-none text-[#0D0D0D]" style={{ fontSize: '72px' }}>
              IS READY!
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <p className="font-body font-700 text-base mt-3 text-[#0D0D0D] opacity-60">
              {drink?.name || 'your order'} · pick it up below ↓
            </p>
          </motion.div>
        </div>

        {/* Bouncing arrows */}
        <motion.div
          className="flex flex-col items-center gap-1"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {[1, 0.55, 0.2].map((op, i) => (
            <svg key={i} width="32" height="20" viewBox="0 0 32 20" fill="none">
              <path d="M3 3L16 16L29 3" stroke="#0D0D0D" strokeWidth="3.5"
                strokeLinecap="round" strokeLinejoin="round" style={{ opacity: op }}/>
            </svg>
          ))}
        </motion.div>

        {/* Scan QR label */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-3 px-5 py-3 rounded-2xl"
          style={{
            background: '#0D0D0D',
            border: '2px solid #0D0D0D',
            boxShadow: '3px 3px 0px rgba(0,0,0,0.2)',
          }}
        >
          {/* Mini QR placeholder */}
          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect x="2" y="2" width="10" height="10" rx="1.5" fill="#0D0D0D"/>
              <rect x="16" y="2" width="10" height="10" rx="1.5" fill="#0D0D0D"/>
              <rect x="2" y="16" width="10" height="10" rx="1.5" fill="#0D0D0D"/>
              <rect x="4" y="4" width="6" height="6" rx="0.5" fill="white"/>
              <rect x="18" y="4" width="6" height="6" rx="0.5" fill="white"/>
              <rect x="4" y="18" width="6" height="6" rx="0.5" fill="white"/>
              <rect x="17" y="17" width="3" height="3" fill="#0D0D0D"/>
              <rect x="22" y="17" width="3" height="3" fill="#0D0D0D"/>
              <rect x="17" y="22" width="3" height="3" fill="#0D0D0D"/>
              <rect x="22" y="22" width="3" height="3" fill="#0D0D0D"/>
            </svg>
          </div>
          <div>
            <p className="font-body font-800 text-xs text-white">scan for rewards ×</p>
            <p className="font-body font-500 text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
              kombini app
            </p>
          </div>
        </motion.div>
      </div>

      {/* Countdown */}
      <div className="shrink-0 px-8 pb-8 flex flex-col items-center gap-3 relative z-10">
        <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.15)' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: '#0D0D0D' }}
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: COUNTDOWN, ease: 'linear' }}
          />
        </div>
        <p className="font-body font-600 text-sm text-[#0D0D0D] opacity-55">
          back to start in {count}s
        </p>
        <button
          onClick={onReset}
          className="px-10 py-3.5 rounded-full font-body font-800 text-sm active:scale-95 transition-transform"
          style={{
            background: '#0D0D0D',
            color: '#00CC44',
            border: '2.5px solid #0D0D0D',
            boxShadow: '3px 3px 0px rgba(0,0,0,0.2)',
          }}
        >
          new order ★
        </button>
      </div>
    </motion.div>
  )
}
