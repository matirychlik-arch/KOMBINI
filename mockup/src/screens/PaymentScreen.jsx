import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function PaymentScreen({ goTo, total }) {
  // Simulate payment success after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => goTo(6), 2500)
    return () => clearTimeout(timer)
  }, [goTo])

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-between bg-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.3 }}
    >
      {/* Top */}
      <div className="pt-10 px-5 w-full">
        <button
          onClick={() => goTo(4)}
          className="flex items-center gap-2 font-body text-sm font-600 text-muted"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Wróć
        </button>
      </div>

      {/* Center */}
      <div className="flex flex-col items-center gap-8 px-8 text-center">
        {/* Animated card icon */}
        <motion.div
          className="relative"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          {/* Pulsing rings */}
          <div className="absolute inset-[-30px] rounded-full border-2 animate-ripple"
            style={{ borderColor: '#FF3D7F' }} />
          <div className="absolute inset-[-15px] rounded-full border animate-ripple"
            style={{ borderColor: '#FF3D7F', animationDelay: '0.5s' }} />

          {/* Card SVG */}
          <div
            className="w-36 h-24 rounded-2xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2A2A2A, #1A1A1A)',
              border: '1px solid #3A3A3A',
              boxShadow: '0 0 40px rgba(255,61,127,0.3)'
            }}
          >
            <div className="absolute top-4 left-4 w-10 h-7 rounded-md" style={{ background: '#F5A623', opacity: 0.8 }} />
            <div className="absolute bottom-3 right-4 w-12 h-4 rounded-sm flex items-center gap-1">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF3D7F', opacity: 0.8 }} />
              <div className="w-2.5 h-2.5 rounded-full -ml-1.5" style={{ background: '#F5A623', opacity: 0.8 }} />
            </div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="opacity-20 absolute right-3 top-3">
              <rect width="32" height="32" rx="16" fill="white" />
            </svg>
          </div>
        </motion.div>

        <div>
          <h2 className="font-display text-5xl text-white mb-2">ZAPŁAĆ</h2>
          <p className="font-body text-sm text-muted font-500">Przyłóż kartę lub telefon do terminala</p>
        </div>

        {/* Amount */}
        <div
          className="px-8 py-4 rounded-2xl"
          style={{ background: 'rgba(255,61,127,0.08)', border: '1px solid rgba(255,61,127,0.2)' }}
        >
          <p className="font-body text-xs text-muted mb-1 tracking-wider">DO ZAPŁATY</p>
          <p className="font-display text-5xl" style={{ color: '#FF3D7F' }}>
            {total.toFixed(2).replace('.', ',')} zł
          </p>
        </div>
      </div>

      {/* Processing indicator */}
      <div className="pb-14 flex flex-col items-center gap-3">
        <div className="flex gap-1.5">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{ background: '#FF3D7F' }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
        <p className="font-body text-xs text-muted">Oczekiwanie na płatność...</p>
      </div>
    </motion.div>
  )
}
