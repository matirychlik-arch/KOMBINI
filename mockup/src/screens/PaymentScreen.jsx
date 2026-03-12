import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PaymentScreen({ goTo, total }) {
  useEffect(() => {
    const t = setTimeout(() => goTo(6), 2800)
    return () => clearTimeout(t)
  }, [goTo])

  return (
    <motion.div
      className="screen"
      style={{ background: '#C41B7A' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Back */}
      <div className="shrink-0 px-6 pt-8">
        <button onClick={() => goTo(4)}
          className="flex items-center gap-1.5 font-body font-700 text-sm"
          style={{ color: 'rgba(255,255,255,0.5)' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          Wróć
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-10">
        {/* Animated card */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 220 }}
          className="relative"
        >
          {/* Pulse rings */}
          <div className="absolute inset-[-28px] rounded-full border-2 border-white animate-ripple" style={{ opacity: 0.3 }} />
          <div className="absolute inset-[-14px] rounded-full border border-white animate-ripple" style={{ opacity: 0.4, animationDelay: '0.6s' }} />

          {/* Card illustration */}
          <div
            className="w-44 h-28 rounded-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
              border: '1.5px solid rgba(255,255,255,0.25)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="absolute top-5 left-5 w-10 h-7 rounded-md" style={{ background: 'rgba(255,214,0,0.8)' }} />
            {/* NFC symbol */}
            <div className="absolute top-5 right-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 12a6 6 0 006 6" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>
                <path d="M3 12a9 9 0 009 9" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                <path d="M9 12a3 3 0 003 3" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
              </svg>
            </div>
            <div className="absolute bottom-4 left-5 right-5 h-px bg-white opacity-10" />
            <div className="absolute bottom-3 right-5 flex gap-1">
              <div className="w-5 h-5 rounded-full bg-white opacity-20" />
              <div className="w-5 h-5 rounded-full bg-white opacity-15 -ml-2" />
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center">
          <h2 className="font-display text-[72px] leading-none text-white">ZAPŁAĆ</h2>
          <p className="font-body font-500 text-base mt-3" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Przyłóż kartę lub telefon do terminala
          </p>
        </div>

        {/* Amount pill */}
        <div
          className="px-10 py-5 rounded-3xl"
          style={{ background: 'rgba(0,0,0,0.25)' }}
        >
          <p className="font-body font-600 text-xs tracking-[0.2em] text-center mb-1.5"
            style={{ color: 'rgba(255,255,255,0.55)' }}>
            DO ZAPŁATY
          </p>
          <p className="font-display text-6xl text-white text-center">
            {total.toFixed(2).replace('.', ',')} zł
          </p>
        </div>
      </div>

      {/* Processing dots */}
      <div className="shrink-0 pb-14 flex flex-col items-center gap-3">
        <div className="flex gap-2">
          {[0, 1, 2].map(i => (
            <motion.div key={i}
              className="w-2 h-2 rounded-full bg-white"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.28 }}
            />
          ))}
        </div>
        <p className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Oczekiwanie na płatność…
        </p>
      </div>
    </motion.div>
  )
}
