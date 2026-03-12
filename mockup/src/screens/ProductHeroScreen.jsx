import { motion } from 'framer-motion'
import { DrinkCup } from '../components/DrinkCup'

export default function ProductHeroScreen({ goTo, selectedDrink: drink, onAddToCart }) {
  if (!drink) return null
  const isMatcha = drink.category === 'matcha'
  const accent = drink.accent

  return (
    <motion.div
      className="w-full h-full flex flex-col bg-bg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
    >
      {/* Back button */}
      <div className="px-5 pt-8 shrink-0">
        <button
          onClick={() => goTo(1)}
          className="flex items-center gap-2 font-body text-sm font-600 text-muted active:text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
          </svg>
          Menu
        </button>
      </div>

      {/* Hero cup — large and centered */}
      <motion.div
        className="flex-1 flex flex-col items-center justify-center px-8 relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: 'backOut' }}
      >
        {/* Glow behind cup */}
        <div
          className="absolute w-52 h-52 rounded-full blur-3xl opacity-20"
          style={{ background: accent }}
        />
        <div className="animate-float">
          <DrinkCup drink={drink} size={200} />
        </div>
      </motion.div>

      {/* Info panel */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.45 }}
        className="shrink-0 px-5 pb-8 flex flex-col gap-5"
      >
        {/* Name + price row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              {drink.isBestseller && (
                <span className="text-[10px] font-700 tracking-[0.15em] px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(255,61,127,0.15)', color: '#FF3D7F' }}>
                  BESTSELLER
                </span>
              )}
            </div>
            <h1 className="font-display text-5xl leading-none text-white">
              {drink.name.toUpperCase()}
            </h1>
          </div>
          <div className="shrink-0 text-right">
            <div className="font-display text-4xl leading-none" style={{ color: accent }}>
              {drink.price.toFixed(2).replace('.', ',')}
            </div>
            <div className="font-body text-sm font-600 text-muted">zł</div>
          </div>
        </div>

        {/* Description */}
        <p className="font-body text-sm font-400 text-muted leading-relaxed">
          {drink.description}
        </p>

        {/* Ingredients */}
        <div className="flex flex-wrap gap-2">
          {drink.ingredients.map(ing => (
            <span key={ing}
              className="text-xs font-body font-600 px-3 py-1.5 rounded-full"
              style={{ background: '#1C1C1C', color: '#FAFAF9', border: '1px solid #2A2A2A' }}>
              {ing}
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => goTo(3)}
            className="flex-1 py-4 rounded-2xl font-body text-sm font-700 tracking-wider transition-all active:scale-[0.97]"
            style={{ background: '#1C1C1C', color: '#FAFAF9', border: '1px solid #2A2A2A' }}
          >
            PERSONALIZUJ
          </button>
          <button
            onClick={() => onAddToCart()}
            className="flex-[1.6] py-4 rounded-2xl font-body text-sm font-800 tracking-wider transition-all active:scale-[0.97]"
            style={{ background: accent, color: '#090909' }}
          >
            DO KOSZYKA →
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
