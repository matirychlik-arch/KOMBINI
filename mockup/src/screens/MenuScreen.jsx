import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DRINKS } from '../data/drinks'
import { DrinkCup } from '../components/DrinkCup'

const TABS = [
  { id: 'matcha', label: 'MATCHA', heading: 'Matcha', accent: '#2D6A2F' },
  { id: 'coffee', label: 'KAWA',   heading: 'Kawa',   accent: '#4A3728' },
]

const BG = '#F2F0EA'
const TILE_BG = '#E8E5DC'
const ACTIVE_TILE = '#2D5A27'
const TEXT_DARK = '#1A3A1A'

export default function MenuScreen({ goTo, cart, onSelectDrink }) {
  const [tab, setTab] = useState('matcha')
  const active = TABS.find(t => t.id === tab)
  const drinks = DRINKS.filter(d => d.category === tab)

  return (
    <motion.div
      className="screen"
      style={{ background: BG }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="shrink-0 px-5 pt-8 pb-2 flex items-start justify-between">
        <div>
          <AnimatePresence mode="wait">
            <motion.h1
              key={tab}
              className="font-display leading-none"
              style={{ fontSize: '64px', color: active.accent, lineHeight: 1 }}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
            >
              {active.heading.toUpperCase()}
            </motion.h1>
          </AnimatePresence>
          <p
            className="font-body font-500 mt-1"
            style={{ fontSize: '20px', color: TEXT_DARK, opacity: 0.7 }}
          >
            Hey, what's up?
          </p>
        </div>

        {cart.length > 0 && (
          <button
            onClick={() => goTo(4)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl font-body font-700 text-sm mt-2"
            style={{
              background: ACTIVE_TILE,
              color: '#fff',
              flexShrink: 0,
            }}
          >
            Koszyk&nbsp;·&nbsp;{cart.length}
          </button>
        )}
      </div>

      {/* Category tabs */}
      <div className="shrink-0 px-5 pt-3 pb-4 flex gap-2">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className="px-6 py-2 rounded-xl font-body font-700 text-sm transition-all duration-200"
            style={tab === t.id
              ? { background: active.accent, color: '#fff' }
              : { background: TILE_BG, color: TEXT_DARK, opacity: 0.6 }
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Drink grid */}
      <div className="scroll-area px-5 pb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="grid gap-3"
            style={{ gridTemplateColumns: '1fr 1fr' }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {drinks.map((drink, i) => (
              <motion.button
                key={drink.id}
                onClick={() => onSelectDrink(drink)}
                className="flex flex-col items-center rounded-2xl overflow-hidden active:scale-[0.97] transition-transform text-left"
                style={{
                  background: drink.isBestseller ? ACTIVE_TILE : TILE_BG,
                  padding: '16px 12px 14px',
                }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {/* Cup illustration */}
                <div className="flex items-center justify-center mb-2" style={{ height: '90px' }}>
                  <DrinkCup drink={drink} size={72} />
                </div>

                {/* Name */}
                <p
                  className="font-body font-700 text-center leading-tight w-full"
                  style={{
                    fontSize: '14px',
                    color: drink.isBestseller ? '#fff' : TEXT_DARK,
                    marginBottom: '4px',
                  }}
                >
                  {drink.name}
                </p>

                {/* Price */}
                <p
                  className="font-body font-500 text-center"
                  style={{
                    fontSize: '13px',
                    color: drink.isBestseller ? 'rgba(255,255,255,0.75)' : 'rgba(26,58,26,0.55)',
                  }}
                >
                  {drink.price.toFixed(2).replace('.', ',')} zł
                </p>

                {/* Badges */}
                {(drink.isBestseller || drink.isIced) && (
                  <div className="flex gap-1 mt-2 flex-wrap justify-center">
                    {drink.isBestseller && (
                      <span
                        className="text-[10px] font-700 px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}
                      >
                        ★ HIT
                      </span>
                    )}
                    {drink.isIced && (
                      <span
                        className="text-[10px] font-700 px-2 py-0.5 rounded-full"
                        style={{
                          background: drink.isBestseller ? 'rgba(255,255,255,0.2)' : 'rgba(0,112,160,0.12)',
                          color: drink.isBestseller ? '#fff' : '#0070A0',
                        }}
                      >
                        ❄ ICE
                      </span>
                    )}
                  </div>
                )}
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
