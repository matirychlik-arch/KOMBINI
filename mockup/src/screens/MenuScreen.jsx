import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DRINKS } from '../data/drinks'

const TABS = [
  { id: 'matcha', label: 'MATCHA', bg: '#0D1F0D', accent: '#B5FF47' },
  { id: 'coffee', label: 'KAWA',   bg: '#180A00', accent: '#FF9D3D' },
]

export default function MenuScreen({ goTo, cart, onSelectDrink }) {
  const [tab, setTab] = useState('matcha')
  const active = TABS.find(t => t.id === tab)
  const drinks = DRINKS.filter(d => d.category === tab)

  return (
    <motion.div
      className="screen"
      style={{ background: active.bg }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="shrink-0 px-5 pt-8 pb-4 flex items-center justify-between">
        <span className="font-display text-4xl" style={{ color: active.accent }}>KOMBINI</span>
        {cart.length > 0 && (
          <button
            onClick={() => goTo(4)}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-body font-800 text-sm"
            style={{ background: '#FF3D7F', color: '#fff' }}
          >
            Koszyk · {cart.length}
          </button>
        )}
      </div>

      {/* Category tabs */}
      <div className="shrink-0 px-5 pb-5 flex gap-2">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="flex-1 py-3.5 rounded-2xl font-body font-800 text-sm tracking-widest transition-all duration-200"
            style={tab === t.id
              ? { background: t.accent, color: '#0D0D0D' }
              : { background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.35)', border: '1px solid rgba(255,255,255,0.1)' }
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Drinks list */}
      <div className="scroll-area px-5 pb-6">
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
                transition={{ delay: i * 0.06 }}
                onClick={() => onSelectDrink(drink)}
                className="w-full text-left rounded-2xl p-5 active:scale-[0.98] transition-transform"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: `1px solid rgba(255,255,255,0.09)`,
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    {/* Name row */}
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-body font-800 text-[17px] text-white leading-snug">
                        {drink.name}
                      </span>
                      {drink.isBestseller && (
                        <span className="text-[10px] font-800 tracking-wider px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(255,61,127,0.2)', color: '#FF3D7F' }}>
                          HIT
                        </span>
                      )}
                      {drink.isIced && (
                        <span className="text-[10px] font-700 tracking-wider px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(120,200,255,0.15)', color: '#78C8FF' }}>
                          ICE
                        </span>
                      )}
                    </div>
                    {/* Description */}
                    <p className="font-body font-400 text-sm leading-snug"
                      style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {drink.description}
                    </p>
                  </div>
                  {/* Price */}
                  <div className="shrink-0 font-body font-900 text-xl"
                    style={{ color: active.accent }}>
                    {drink.price.toFixed(2).replace('.', ',')}
                    <span className="text-sm font-700 ml-0.5">zł</span>
                  </div>
                </div>

                {/* Ingredients tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {drink.ingredients.map(ing => (
                    <span key={ing}
                      className="font-body font-600 text-[11px] px-2.5 py-1 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>
                      {ing}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="w-6 h-0.5 rounded-full" style={{ background: active.accent }} />
                  <span className="font-body font-600 text-xs"
                    style={{ color: active.accent, opacity: 0.7 }}>
                    dotknij aby zamówić →
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
