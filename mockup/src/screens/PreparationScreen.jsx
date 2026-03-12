import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DrinkCup } from '../components/DrinkCup'

const DURATION = 3500

const STEPS = [
  'Odmierzam składniki…',
  'Przygotowuję matchę…',
  'Mieszam z mlekiem…',
  'Prawie gotowe!',
]

export default function PreparationScreen({ goTo, cart }) {
  const [progress, setProgress] = useState(0)
  const drink = cart[cart.length - 1]?.drink
  const accent = drink?.accent || '#B5FF47'
  const bgColor = drink?.category === 'matcha' ? '#0D1F0D' : '#180A00'
  const step = STEPS[Math.min(Math.floor(progress * STEPS.length), STEPS.length - 1)]

  useEffect(() => {
    const start = Date.now()
    let raf
    const tick = () => {
      const pct = Math.min((Date.now() - start) / DURATION, 1)
      setProgress(pct)
      if (pct < 1) raf = requestAnimationFrame(tick)
      else goTo(8)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [goTo])

  return (
    <motion.div
      className="screen"
      style={{ background: bgColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Top label */}
      <div className="shrink-0 px-6 pt-12 text-center">
        <p className="font-body font-700 text-xs tracking-[0.25em] mb-2"
          style={{ color: 'rgba(255,255,255,0.4)' }}>
          PRZYGOTOWUJĘ
        </p>
        <h2 className="font-display text-6xl text-white">
          {drink?.name?.toUpperCase() || 'NAPÓJ'}
        </h2>
      </div>

      {/* Cup animation — fills 50% */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6">
        {/* Glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-3xl scale-150"
            style={{ background: accent, opacity: 0.15 }} />
          <motion.div
            className="relative z-10"
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {drink && <DrinkCup drink={drink} size={190} />}
          </motion.div>
        </div>

        {/* Step text */}
        <motion.p
          key={step}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-body font-600 text-sm"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          {step}
        </motion.p>
      </div>

      {/* Progress bar */}
      <div className="shrink-0 px-8 pb-14">
        <div className="flex justify-between mb-2">
          <span className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Czas oczekiwania
          </span>
          <span className="font-body font-700 text-xs" style={{ color: accent }}>
            ~{Math.max(0, Math.ceil(DURATION / 1000 * (1 - progress)))}s
          </span>
        </div>
        <div className="w-full h-1.5 rounded-full overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div className="h-full rounded-full transition-all duration-100"
            style={{ width: `${progress * 100}%`, background: accent }} />
        </div>
        {/* Step dots */}
        <div className="flex justify-center gap-2 mt-5">
          {STEPS.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{ background: i < Math.ceil(progress * STEPS.length) ? accent : 'rgba(255,255,255,0.15)' }} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
