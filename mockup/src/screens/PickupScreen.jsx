import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const TIMEOUT = 6 // seconds

export default function PickupScreen({ goTo, cart, onReset }) {
  const [countdown, setCountdown] = useState(TIMEOUT)
  const lastDrink = cart[cart.length - 1]?.drink

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(c => {
        if (c <= 1) {
          clearInterval(timer)
          onReset()
          return 0
        }
        return c - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [onReset])

  const accent = lastDrink?.accent || '#B5FF47'

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-between bg-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: accent }}
      />

      <div className="pt-14" />

      {/* Main content */}
      <div className="flex flex-col items-center gap-6 px-8 text-center z-10">
        {/* Big checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
          className="w-28 h-28 rounded-full flex items-center justify-center"
          style={{
            background: `${accent}18`,
            border: `2px solid ${accent}40`,
            boxShadow: `0 0 40px ${accent}30`,
          }}
        >
          <motion.svg
            width="52" height="52" viewBox="0 0 52 52" fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.path
              d="M10 26L21 37L42 16"
              stroke={accent}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
          </motion.svg>
        </motion.div>

        {/* Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-body text-sm font-700 tracking-[0.2em] text-muted uppercase mb-2"
          >
            gotowe!
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-display text-6xl text-white"
            style={{ textShadow: `0 0 30px ${accent}50` }}
          >
            ODBIERZ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-body text-base font-600 mt-2"
            style={{ color: accent }}
          >
            {lastDrink?.name || 'Napój'} czeka na Ciebie
          </motion.p>
        </div>

        {/* Arrow pointing down */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          {[0, 1, 2].map(i => (
            <svg key={i} width="24" height="14" viewBox="0 0 24 14" fill="none"
              style={{ opacity: 1 - i * 0.3 }}>
              <path d="M2 2L12 11L22 2" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ))}
        </motion.div>

        {/* Pickup slot label */}
        <div
          className="px-6 py-3 rounded-2xl"
          style={{ background: `${accent}10`, border: `1px solid ${accent}25` }}
        >
          <p className="font-body text-xs text-muted mb-1 tracking-wider">ODBIÓR NAPOJU</p>
          <p className="font-body text-sm font-700" style={{ color: accent }}>
            Dolny otwór automatu ↓
          </p>
        </div>
      </div>

      {/* Countdown */}
      <div className="pb-12 flex flex-col items-center gap-3 z-10 w-full px-8">
        <div className="w-full h-1 rounded-full overflow-hidden" style={{ background: '#1C1C1C' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: accent }}
            initial={{ width: '100%' }}
            animate={{ width: '0%' }}
            transition={{ duration: TIMEOUT, ease: 'linear' }}
          />
        </div>
        <p className="font-body text-xs text-muted">
          Powrót do ekranu startowego za {countdown}s
        </p>
        <button
          onClick={onReset}
          className="mt-2 px-6 py-2.5 rounded-full font-body text-sm font-700 transition-all active:scale-95"
          style={{ background: '#1C1C1C', color: '#6B6B6B', border: '1px solid #2A2A2A' }}
        >
          Nowe zamówienie
        </button>
      </div>
    </motion.div>
  )
}
