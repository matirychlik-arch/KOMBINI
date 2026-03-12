import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const COUNTDOWN = 6

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
      className="screen"
      style={{ background: '#FFD600' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Dark top ticker */}
      <div className="shrink-0 py-3 px-6 overflow-hidden" style={{ background: '#0D0D0D' }}>
        <div className="marquee-track">
          {['✦ NAPÓJ GOTOWY ✦ ODBIERZ ✦ NAPÓJ GOTOWY ✦ ODBIERZ ✦ ',
            '✦ NAPÓJ GOTOWY ✦ ODBIERZ ✦ NAPÓJ GOTOWY ✦ ODBIERZ ✦ '].map((t, i) => (
            <span key={i} className="font-body font-800 text-xs tracking-[0.2em]"
              style={{ color: '#FFD600' }}>{t}</span>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-8">
        {/* Checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.1 }}
          className="w-32 h-32 rounded-full flex items-center justify-center"
          style={{ background: '#0D0D0D' }}
        >
          <motion.svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <motion.path
              d="M10 28L23 41L46 16"
              stroke="#FFD600"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            />
          </motion.svg>
        </motion.div>

        {/* Text */}
        <div className="text-center">
          <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="font-body font-800 text-sm tracking-[0.2em] uppercase mb-2"
            style={{ color: 'rgba(0,0,0,0.45)' }}>
            gotowe!
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            className="font-display leading-none"
            style={{ fontSize: '80px', color: '#0D0D0D' }}>
            ODBIERZ
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="font-body font-700 text-base mt-2"
            style={{ color: 'rgba(0,0,0,0.55)' }}>
            {drink?.name || 'Napój'} na Ciebie czeka ↓
          </motion.p>
        </div>

        {/* Bouncing arrows */}
        <motion.div className="flex flex-col items-center gap-1"
          animate={{ y: [0, 10, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          {[1, 0.55, 0.25].map((op, i) => (
            <svg key={i} width="26" height="16" viewBox="0 0 26 16" fill="none">
              <path d="M2 2L13 13L24 2" stroke="#0D0D0D" strokeWidth="3"
                strokeLinecap="round" strokeLinejoin="round" style={{ opacity: op }}/>
            </svg>
          ))}
        </motion.div>
      </div>

      {/* Countdown */}
      <div className="shrink-0 px-8 pb-10 flex flex-col items-center gap-3">
        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.15)' }}>
          <motion.div className="h-full rounded-full" style={{ background: '#0D0D0D' }}
            initial={{ width: '100%' }} animate={{ width: '0%' }}
            transition={{ duration: COUNTDOWN, ease: 'linear' }}
          />
        </div>
        <p className="font-body font-600 text-sm" style={{ color: 'rgba(0,0,0,0.5)' }}>
          Powrót za {count}s
        </p>
        <button onClick={onReset}
          className="mt-1 px-8 py-3 rounded-full font-body font-800 text-sm active:scale-95 transition-transform"
          style={{ background: '#0D0D0D', color: '#FFD600' }}>
          Nowe zamówienie
        </button>
      </div>
    </motion.div>
  )
}
