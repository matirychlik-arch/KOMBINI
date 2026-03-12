import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DrinkCup } from '../components/DrinkCup'

const PREP_DURATION = 3500 // ms

export default function PreparationScreen({ goTo, cart }) {
  const [progress, setProgress] = useState(0)
  const lastDrink = cart[cart.length - 1]?.drink

  useEffect(() => {
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const pct = Math.min(elapsed / PREP_DURATION, 1)
      setProgress(pct)
      if (pct < 1) requestAnimationFrame(tick)
      else goTo(8)
    }
    const raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [goTo])

  const accent = lastDrink?.accent || '#B5FF47'

  const steps = [
    'Odmierzam składniki',
    'Przygotowuję matchę',
    'Mieszam z mlekiem',
    'Twój napój jest gotowy',
  ]
  const stepIdx = Math.min(Math.floor(progress * steps.length), steps.length - 1)

  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-between bg-bg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Top label */}
      <div className="pt-12 text-center px-8">
        <p className="font-body text-xs font-700 tracking-[0.25em] text-muted uppercase mb-2">
          PRZYGOTOWUJĘ
        </p>
        <h2 className="font-display text-5xl text-white">
          {lastDrink?.name.toUpperCase() || 'NAPÓJ'}
        </h2>
      </div>

      {/* Animated cup */}
      <div className="flex flex-col items-center gap-8 px-8">
        <motion.div
          className="relative"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          {/* Glow */}
          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-25"
            style={{ background: accent }}
          />
          {lastDrink && <DrinkCup drink={lastDrink} size={180} />}
        </motion.div>

        {/* Step text */}
        <motion.p
          key={stepIdx}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-body text-sm font-600 text-muted text-center"
        >
          {steps[stepIdx]}
        </motion.p>
      </div>

      {/* Progress bar */}
      <div className="pb-14 w-full px-8">
        <div className="flex items-center justify-between mb-2">
          <p className="font-body text-xs text-muted">Czas oczekiwania</p>
          <p className="font-body text-xs font-700" style={{ color: accent }}>
            ~{Math.max(0, Math.ceil(PREP_DURATION / 1000 * (1 - progress)))}s
          </p>
        </div>
        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: '#1C1C1C' }}>
          <motion.div
            className="h-full rounded-full"
            style={{ background: accent, width: `${progress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Dots animation */}
        <div className="flex justify-center gap-2 mt-5">
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                background: i < Math.ceil(progress * 4) ? accent : '#2A2A2A',
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
