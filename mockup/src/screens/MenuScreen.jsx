import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DRINKS } from '../data/drinks'
import { ScatteredStars, StarFill, Sparkle } from '../components/Decorations'

const TABS = [
  { id: 'matcha', label: 'MATCHA', bg: '#FF2D78', accent: '#B5FF47', textColor: '#0D0D0D' },
  { id: 'coffee', label: 'KAWA',   bg: '#FF6B00', accent: '#FFD600', textColor: '#0D0D0D' },
]

export default function MenuScreen({ goTo, cart, onSelectDrink }) {
  const [tab, setTab] = useState('matcha')
  const active = TABS.find(t => t.id === tab)
  const drinks = DRINKS.filter(d => d.category === tab)

  return (
    <motion.div
      className="screen relative"
      style={{ background: active.bg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Stars overlay */}
      <ScatteredStars color="#0D0D0D" opacity={0.15} count={8} />

      {/* Header */}
      <div className="shrink-0 px-5 pt-8 pb-3 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <span
            className="font-display text-5xl tracking-wider"
            style={{ color: '#0D0D0D' }}
          >
            KOMBINI
          </span>
          <motion.div
            animate={{ rotate: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <StarFill size={22} color="#0D0D0D" />
          </motion.div>
        </div>
        {cart.length > 0 && (
          <button
            onClick={() => goTo(4)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full font-body font-800 text-sm"
            style={{
              background: '#0D0D0D',
              color: '#FFD600',
              border: '2px solid #0D0D0D',
              boxShadow: '3px 3px 0px rgba(0,0,0,0.25)',
            }}
          >
            koszyk ★ {cart.length}
          </button>
        )}
      </div>

      {/* Category tabs */}
      <div className="shrink-0 px-5 pb-4 flex gap-2.5 relative z-10">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="flex-1 py-3.5 rounded-2xl font-display text-2xl tracking-widest transition-all duration-200"
            style={tab === t.id
              ? {
                  background: '#0D0D0D',
                  color: t.accent,
                  border: '3px solid #0D0D0D',
                  boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
                }
              : {
                  background: 'rgba(255,255,255,0.25)',
                  color: 'rgba(0,0,0,0.55)',
                  border: '2.5px solid rgba(0,0,0,0.3)',
                }
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Drinks list */}
      <div className="scroll-area px-5 pb-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-3"
          >
            {drinks.map((drink, i) => (
              <motion.button
                key={drink.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => onSelectDrink(drink)}
                className="w-full text-left rounded-2xl overflow-hidden active:scale-[0.98] transition-transform"
                style={{
                  background: '#fff',
                  border: '2.5px solid #0D0D0D',
                  boxShadow: '4px 4px 0px #0D0D0D',
                }}
              >
                {/* Top accent bar */}
                <div className="h-1.5" style={{ background: active.accent }} />

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      {/* Name row */}
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-display text-[26px] leading-tight text-[#0D0D0D]">
                          {drink.name.toUpperCase()}
                        </span>
                        {drink.isBestseller && (
                          <span
                            className="flex items-center gap-1 text-[11px] font-800 tracking-wide px-2.5 py-1 rounded-full"
                            style={{
                              background: '#FFD600',
                              color: '#0D0D0D',
                              border: '1.5px solid #0D0D0D',
                            }}
                          >
                            <StarFill size={9} color="#0D0D0D" /> HIT
                          </span>
                        )}
                        {drink.isIced && (
                          <span
                            className="text-[11px] font-700 tracking-wide px-2.5 py-1 rounded-full"
                            style={{
                              background: '#E0F4FF',
                              color: '#0070A0',
                              border: '1.5px solid #0070A0',
                            }}
                          >
                            ❄ ICE
                          </span>
                        )}
                      </div>
                      {/* Description */}
                      <p className="font-body font-400 text-sm leading-snug text-[#555]">
                        {drink.description}
                      </p>
                    </div>

                    {/* Price badge */}
                    <div
                      className="shrink-0 w-16 h-16 rounded-full flex flex-col items-center justify-center"
                      style={{
                        background: active.bg,
                        border: '2.5px solid #0D0D0D',
                        boxShadow: '3px 3px 0px #0D0D0D',
                      }}
                    >
                      <span className="font-body font-900 text-[15px] leading-none text-[#0D0D0D]">
                        {drink.price.toFixed(0)}
                      </span>
                      <span className="font-body font-700 text-[10px] text-[#0D0D0D]">zł</span>
                    </div>
                  </div>

                  {/* Ingredients tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {drink.ingredients.map(ing => (
                      <span key={ing}
                        className="font-body font-600 text-[11px] px-2.5 py-1 rounded-lg"
                        style={{
                          background: '#F2F2F2',
                          color: '#555',
                          border: '1px solid #ddd',
                        }}
                      >
                        {ing}
                      </span>
                    ))}
                  </div>

                  {/* Bottom row */}
                  <div className="mt-3 flex items-center justify-end">
                    <span
                      className="font-body font-700 text-xs px-3 py-1.5 rounded-full"
                      style={{
                        background: '#0D0D0D',
                        color: active.accent,
                      }}
                    >
                      zamów →
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
