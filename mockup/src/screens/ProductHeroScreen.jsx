import { motion } from 'framer-motion'
import { DrinkCup } from '../components/DrinkCup'
import { StarFill, Sparkle, ScatteredStars } from '../components/Decorations'

export default function ProductHeroScreen({ goTo, selectedDrink: drink, onAddToCart }) {
  if (!drink) return null

  const isMatcha = drink.category === 'matcha'
  const accent   = drink.accent
  const topBg    = isMatcha ? '#00CC44' : '#FF6B00'
  const tagline  = isMatcha ? "it's giving ✦ energy ✦" : "smooth & delicious ✦"

  return (
    <motion.div
      className="screen"
      style={{ background: topBg }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
    >
      {/* Top zone — bright category color */}
      <div
        className="shrink-0 relative overflow-hidden flex flex-col"
        style={{ height: '50%' }}
      >
        {/* Background dots */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 1.5px, transparent 1.5px)',
            backgroundSize: '22px 22px',
          }}
        />

        {/* Stars scattered */}
        <ScatteredStars color="#0D0D0D" opacity={0.2} count={7} />

        {/* Decorative large star */}
        <motion.div
          className="absolute top-8 right-8"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        >
          <StarFill size={40} color="rgba(0,0,0,0.15)" />
        </motion.div>

        {/* Back button */}
        <div className="px-5 pt-8 relative z-10">
          <button
            onClick={() => goTo(1)}
            className="flex items-center gap-1.5 font-body font-700 text-sm px-4 py-2 rounded-full"
            style={{ background: 'rgba(0,0,0,0.2)', color: '#0D0D0D' }}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            Menu
          </button>
        </div>

        {/* Cup centered */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          {/* Glow ring behind cup */}
          <div
            className="absolute w-52 h-52 rounded-full"
            style={{ background: 'rgba(255,255,255,0.2)', filter: 'blur(28px)' }}
          />
          <motion.div
            className="animate-float relative z-10"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
          >
            <DrinkCup drink={drink} size={200} />
          </motion.div>

          {/* Sparkle decorations around cup */}
          <motion.div className="absolute top-[15%] left-[20%]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}>
            <Sparkle size={18} color="#0D0D0D" />
          </motion.div>
          <motion.div className="absolute top-[20%] right-[18%]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}>
            <StarFill size={16} color="rgba(0,0,0,0.5)" />
          </motion.div>
          <motion.div className="absolute bottom-[20%] left-[15%]"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}>
            <StarFill size={12} color="rgba(0,0,0,0.4)" />
          </motion.div>
        </div>

        {/* Category badge */}
        <div className="absolute bottom-5 right-5 z-10">
          <span
            className="font-body font-800 text-xs tracking-[0.2em] px-3 py-1.5 rounded-full"
            style={{
              background: '#0D0D0D',
              color: accent,
              border: '2px solid #0D0D0D',
            }}
          >
            {isMatcha ? '✦ MATCHA' : '✦ KAWA'}
          </span>
        </div>
      </div>

      {/* Bottom card */}
      <div
        className="flex-1 flex flex-col px-6 pt-5 pb-6 overflow-hidden"
        style={{ background: '#F5F4F0' }}
      >
        {/* Name + price */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex-1 min-w-0">
            {drink.isBestseller && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-1.5 font-body font-800 text-[10px] tracking-[0.15em] px-3 py-1.5 rounded-full mb-2"
                style={{
                  background: '#FFD600',
                  color: '#0D0D0D',
                  border: '2px solid #0D0D0D',
                  boxShadow: '2px 2px 0px #0D0D0D',
                }}
              >
                <StarFill size={8} color="#0D0D0D" /> BESTSELLER
              </motion.span>
            )}
            <h1
              className="font-display leading-none text-[#0D0D0D]"
              style={{ fontSize: drink.name.length > 16 ? '48px' : '60px' }}
            >
              {drink.name.toUpperCase()}
            </h1>
            <p className="font-body font-500 text-sm mt-1" style={{ color: '#888' }}>
              {tagline}
            </p>
          </div>

          {/* Price circle */}
          <motion.div
            initial={{ scale: 0, rotate: -15 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 240 }}
            className="shrink-0 w-20 h-20 rounded-full flex flex-col items-center justify-center"
            style={{
              background: topBg,
              border: '3px solid #0D0D0D',
              boxShadow: '4px 4px 0px #0D0D0D',
            }}
          >
            <span className="font-body font-900 text-xl leading-none text-[#0D0D0D]">
              {drink.price.toFixed(0)}
            </span>
            <span className="font-body font-700 text-xs text-[#0D0D0D]">zł</span>
          </motion.div>
        </div>

        {/* Description */}
        <p className="font-body font-400 text-sm leading-relaxed text-[#666] mb-3">
          {drink.description}
        </p>

        {/* Ingredients */}
        <div className="flex flex-wrap gap-2 mb-4">
          {drink.ingredients.map(ing => (
            <span key={ing}
              className="font-body font-600 text-xs px-3 py-1.5 rounded-full"
              style={{
                background: '#fff',
                color: '#444',
                border: '1.5px solid #0D0D0D',
              }}
            >
              {ing}
            </span>
          ))}
        </div>

        <div className="flex-1" />

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => goTo(3)}
            className="flex-1 py-4 rounded-2xl font-body font-700 text-sm tracking-wide transition-all active:scale-[0.97]"
            style={{
              background: '#fff',
              color: '#0D0D0D',
              border: '2.5px solid #0D0D0D',
              boxShadow: '3px 3px 0px #0D0D0D',
            }}
          >
            customize
          </button>
          <button
            onClick={() => onAddToCart()}
            className="flex-[1.6] py-4 rounded-2xl font-display text-2xl tracking-wide transition-all active:scale-[0.97]"
            style={{
              background: '#0D0D0D',
              color: accent,
              border: '2.5px solid #0D0D0D',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
            }}
          >
            add to bag ★
          </button>
        </div>
      </div>
    </motion.div>
  )
}
