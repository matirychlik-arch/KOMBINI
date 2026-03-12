import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { DrinkCup } from '../components/DrinkCup'
import { ScatteredStars, StarFill, Sparkle } from '../components/Decorations'

const DURATION = 3500

const STEPS = [
  'measuring ingredients…',
  'preparing your drink…',
  'mixing it up…',
  'almost ready!',
]

export default function PreparationScreen({ goTo, cart }) {
  const [progress, setProgress] = useState(0)
  const drink  = cart[cart.length - 1]?.drink
  const accent = drink?.accent || '#B5FF47'
  const isMatcha = drink?.category === 'matcha'
  // Bright background per category
  const bgColor = isMatcha ? '#B5FF47' : '#FF9D3D'
  const textColor = '#0D0D0D'

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
      className="screen relative"
      style={{ background: bgColor }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Stars */}
      <ScatteredStars color="#0D0D0D" opacity={0.15} count={8} />

      {/* Top headline */}
      <div className="shrink-0 px-6 pt-12 text-center relative z-10">
        <motion.h2
          className="font-display text-[#0D0D0D] leading-none"
          style={{ fontSize: '52px' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          MAKING YOUR
        </motion.h2>
        <motion.h2
          className="font-display text-[#0D0D0D] leading-none"
          style={{ fontSize: '52px' }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          DRINK ★
        </motion.h2>
        <p className="font-body font-700 text-base mt-2 text-[#0D0D0D] opacity-55">
          ~{Math.max(0, Math.ceil(DURATION / 1000 * (1 - progress)))} sec
        </p>
      </div>

      {/* Cup */}
      <div className="flex-1 flex flex-col items-center justify-center gap-5 relative z-10">
        <div className="relative">
          {/* Glow behind cup */}
          <div
            className="absolute inset-0 rounded-full blur-3xl scale-125"
            style={{ background: 'rgba(255,255,255,0.4)' }}
          />
          <motion.div
            className="relative z-10"
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {drink && <DrinkCup drink={drink} size={210} />}
          </motion.div>

          {/* Orbiting sparkles */}
          <motion.div
            className="absolute top-0 left-[-20px]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '20px 105px' }}
          >
            <Sparkle size={16} color="#0D0D0D" />
          </motion.div>
          <motion.div
            className="absolute top-0 right-[-20px]"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '-20px 105px' }}
          >
            <StarFill size={14} color="rgba(0,0,0,0.4)" />
          </motion.div>
        </div>

        {/* Step dots progress */}
        <div className="flex gap-3">
          {STEPS.map((_, i) => (
            <motion.div
              key={i}
              className="rounded-full transition-all duration-300"
              style={{
                width: i < Math.ceil(progress * STEPS.length) ? '20px' : '8px',
                height: '8px',
                background: i < Math.ceil(progress * STEPS.length)
                  ? '#0D0D0D'
                  : 'rgba(0,0,0,0.2)',
              }}
            />
          ))}
        </div>

        {/* Step text */}
        <motion.p
          key={step}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-body font-600 text-sm text-[#0D0D0D] opacity-60"
        >
          {step}
        </motion.p>
      </div>

      {/* Progress bar */}
      <div className="shrink-0 px-8 pb-14 relative z-10">
        <div
          className="w-full h-3 rounded-full overflow-hidden"
          style={{ background: 'rgba(0,0,0,0.15)' }}
        >
          <motion.div
            className="h-full rounded-full"
            style={{ background: '#0D0D0D' }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Drink name */}
        <p className="font-body font-700 text-sm mt-4 text-center text-[#0D0D0D] opacity-50 tracking-wider">
          {drink?.name?.toUpperCase() || 'NAPÓJ'}
        </p>
      </div>
    </motion.div>
  )
}
