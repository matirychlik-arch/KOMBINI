import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ScatteredStars, StarFill, Sparkle } from '../components/Decorations'

export default function PaymentScreen({ goTo, total }) {
  useEffect(() => {
    const t = setTimeout(() => goTo(6), 2800)
    return () => clearTimeout(t)
  }, [goTo])

  return (
    <motion.div
      className="screen relative"
      style={{ background: '#00C8D4' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Stars */}
      <ScatteredStars color="#0D0D0D" opacity={0.18} count={9} />

      {/* Back */}
      <div className="shrink-0 px-6 pt-8 relative z-10">
        <button onClick={() => goTo(4)}
          className="flex items-center gap-1.5 font-body font-700 text-sm px-4 py-2 rounded-full"
          style={{ background: 'rgba(0,0,0,0.15)', color: '#0D0D0D' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          back
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-8 relative z-10">

        {/* Headline */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="font-display leading-none text-[#0D0D0D]" style={{ fontSize: '72px' }}>
            TAP YOUR
          </h2>
          <h2 className="font-display leading-none text-[#0D0D0D]" style={{ fontSize: '72px' }}>
            CARD ★
          </h2>
          <p className="font-body font-600 text-sm mt-2" style={{ color: 'rgba(0,0,0,0.55)' }}>
            contactless only
          </p>
        </motion.div>

        {/* Animated card */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="relative"
        >
          {/* Pulse rings */}
          <div className="absolute inset-[-36px] rounded-full border-4 border-black animate-ripple" style={{ opacity: 0.2 }} />
          <div className="absolute inset-[-18px] rounded-full border-2 border-black animate-ripple" style={{ opacity: 0.3, animationDelay: '0.6s' }} />

          {/* Card body */}
          <div
            className="w-52 h-32 rounded-3xl relative overflow-hidden"
            style={{
              background: '#0D0D0D',
              border: '3px solid #0D0D0D',
              boxShadow: '6px 6px 0px rgba(0,0,0,0.3)',
            }}
          >
            {/* Card shine gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 60%)',
              }}
            />
            {/* Chip */}
            <div
              className="absolute top-5 left-5 w-10 h-7 rounded-md"
              style={{ background: '#FFD600', border: '1px solid rgba(0,0,0,0.3)' }}
            />
            {/* NFC symbol */}
            <div className="absolute top-5 right-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M6 12a6 6 0 006 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.9"/>
                <path d="M3 12a9 9 0 009 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
                <path d="M9 12a3 3 0 003 3" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
              </svg>
            </div>
            {/* Card number placeholder */}
            <div className="absolute bottom-6 left-5 flex gap-2">
              {[0,1,2,3].map(i => (
                <div key={i} className="flex gap-0.5">
                  {[0,1,2,3].map(j => (
                    <div key={j} className="w-1 h-1 rounded-full bg-white opacity-30" />
                  ))}
                </div>
              ))}
            </div>
            {/* Logo circles */}
            <div className="absolute bottom-4 right-5 flex">
              <div className="w-6 h-6 rounded-full" style={{ background: '#FF3D7F', opacity: 0.8 }} />
              <div className="w-6 h-6 rounded-full -ml-3" style={{ background: '#FFD600', opacity: 0.8 }} />
            </div>
          </div>
        </motion.div>

        {/* Amount */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, type: 'spring' }}
          className="text-center"
        >
          <p className="font-body font-600 text-sm tracking-[0.2em] text-[#0D0D0D] opacity-60 mb-1">
            TOTAL
          </p>
          <div
            className="px-10 py-4 rounded-3xl inline-block"
            style={{
              background: '#0D0D0D',
              border: '3px solid #0D0D0D',
              boxShadow: '5px 5px 0px rgba(0,0,0,0.25)',
            }}
          >
            <p className="font-display text-[64px] leading-none text-[#FFD600]">
              {total.toFixed(2).replace('.', ',')}
              <span className="text-4xl ml-2 text-[#FFD600] opacity-60">zł</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Processing dots */}
      <div className="shrink-0 pb-12 flex flex-col items-center gap-3 relative z-10">
        <div className="flex gap-2.5">
          {[0, 1, 2].map(i => (
            <motion.div key={i}
              className="w-3 h-3 rounded-full"
              style={{ background: '#0D0D0D' }}
              animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.28 }}
            />
          ))}
        </div>
        <p className="font-body text-xs font-600 tracking-wider" style={{ color: 'rgba(0,0,0,0.5)' }}>
          waiting for payment…
        </p>
      </div>
    </motion.div>
  )
}
