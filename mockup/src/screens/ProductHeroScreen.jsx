import { motion } from 'framer-motion'
import { DrinkCup } from '../components/DrinkCup'

export default function ProductHeroScreen({ goTo, selectedDrink: drink, onAddToCart }) {
  if (!drink) return null

  const isMatcha = drink.category === 'matcha'
  const accent   = drink.accent
  const topBg    = isMatcha ? '#0D1F0D' : '#180A00'

  return (
    <motion.div
      className="screen"
      style={{ background: '#0D0D0D' }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
    >
      {/* Top colored zone — ~48% height */}
      <div
        className="shrink-0 relative overflow-hidden flex flex-col"
        style={{ background: topBg, height: '46%' }}
      >
        {/* Back button */}
        <div className="px-5 pt-8">
          <button
            onClick={() => goTo(1)}
            className="flex items-center gap-1.5 font-body font-700 text-sm"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            Menu
          </button>
        </div>

        {/* Cup centered */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Glow */}
          <div className="absolute w-48 h-48 rounded-full blur-3xl"
            style={{ background: accent, opacity: 0.18 }} />
          <motion.div
            className="animate-float relative z-10"
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          >
            <DrinkCup drink={drink} size={172} />
          </motion.div>
        </div>

        {/* Category badge bottom-right */}
        <div className="absolute bottom-4 right-5">
          <span className="font-body font-800 text-xs tracking-[0.2em] px-3 py-1.5 rounded-full"
            style={{ background: `${accent}22`, color: accent, border: `1px solid ${accent}40` }}>
            {isMatcha ? 'MATCHA' : 'KAWA'}
          </span>
        </div>
      </div>

      {/* Bottom white card — 54% */}
      <div
        className="flex-1 flex flex-col px-6 pt-6 pb-6 overflow-hidden"
        style={{ background: '#F5F4F0' }}
      >
        {/* Name + price */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            {drink.isBestseller && (
              <span className="inline-block font-body font-800 text-[10px] tracking-[0.15em] px-2.5 py-1 rounded-full mb-2"
                style={{ background: '#FFD600', color: '#0D0D0D' }}>
                BESTSELLER
              </span>
            )}
            <h1 className="font-display text-5xl leading-none text-[#0D0D0D]">
              {drink.name.toUpperCase()}
            </h1>
          </div>
          <div className="shrink-0 text-right pt-1">
            <span className="font-body font-900 text-2xl" style={{ color: accent }}>
              {drink.price.toFixed(2).replace('.', ',')}
            </span>
            <span className="font-body font-700 text-sm text-[#0D0D0D] ml-0.5">zł</span>
          </div>
        </div>

        {/* Description */}
        <p className="font-body font-400 text-sm leading-relaxed text-[#555] mb-4">
          {drink.description}
        </p>

        {/* Ingredients */}
        <div className="flex flex-wrap gap-2 mb-5">
          {drink.ingredients.map(ing => (
            <span key={ing}
              className="font-body font-600 text-xs px-3 py-1.5 rounded-full"
              style={{ background: '#E8E8E4', color: '#444' }}>
              {ing}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => goTo(3)}
            className="flex-1 py-4 rounded-2xl font-body font-700 text-sm tracking-wide transition-all active:scale-[0.97]"
            style={{ background: '#E8E8E4', color: '#333' }}
          >
            PERSONALIZUJ
          </button>
          <button
            onClick={() => onAddToCart()}
            className="flex-[1.5] py-4 rounded-2xl font-body font-900 text-sm tracking-wide transition-all active:scale-[0.97]"
            style={{ background: accent, color: '#0D0D0D' }}
          >
            DO KOSZYKA →
          </button>
        </div>
      </div>
    </motion.div>
  )
}
