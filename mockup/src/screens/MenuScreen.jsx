import { useState } from 'react'
import { motion } from 'framer-motion'
import { DRINKS } from '../data/drinks'
import { DrinkCup } from '../components/DrinkCup'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
}

export default function MenuScreen({ goTo, cart, total, onSelectDrink }) {
  const [activeTab, setActiveTab] = useState('matcha')

  const filtered = DRINKS.filter(d => d.category === activeTab)

  return (
    <motion.div
      className="w-full h-full flex flex-col bg-bg"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
    >
      {/* Header */}
      <div className="px-5 pt-8 pb-4 flex items-center justify-between shrink-0">
        <div className="font-display text-4xl" style={{ color: '#B5FF47' }}>KOMBINI</div>
        {cart.length > 0 && (
          <button
            onClick={() => goTo(4)}
            className="flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm font-700"
            style={{ background: '#FF3D7F', color: '#fff' }}
          >
            <span>Koszyk</span>
            <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-xs font-800"
              style={{ color: '#FF3D7F' }}>
              {cart.length}
            </span>
          </button>
        )}
      </div>

      {/* Category tabs */}
      <div className="px-5 flex gap-3 shrink-0 mb-5">
        {[
          { id: 'matcha', label: 'Matcha', accent: '#B5FF47' },
          { id: 'coffee', label: 'Kawa', accent: '#F5A623' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="flex-1 py-3 rounded-2xl font-body text-sm font-700 tracking-wider transition-all duration-200"
            style={activeTab === tab.id
              ? { background: tab.accent, color: '#090909' }
              : { background: '#1C1C1C', color: '#6B6B6B', border: '1px solid #2A2A2A' }
            }
          >
            {tab.label.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Section label */}
      <div className="px-5 mb-3 shrink-0">
        <p className="font-body text-xs font-600 tracking-[0.2em] text-muted uppercase">
          {activeTab === 'matcha' ? '5 napojów' : '6 napojów'} · menu dzień 1
        </p>
      </div>

      {/* Drink grid */}
      <div className="kiosk-scroll px-5 pb-8">
        <motion.div
          key={activeTab}
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-3"
        >
          {filtered.map(drink => (
            <motion.div key={drink.id} variants={item}>
              <DrinkCard drink={drink} onSelect={onSelectDrink} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

function DrinkCard({ drink, onSelect }) {
  const isMatcha = drink.category === 'matcha'

  return (
    <button
      onClick={() => onSelect(drink)}
      className="w-full text-left rounded-2xl p-4 flex items-center gap-4 active:scale-[0.98] transition-transform duration-100"
      style={{ background: '#141414', border: `1px solid #222` }}
    >
      {/* Accent bar */}
      <div className="w-1 h-14 rounded-full shrink-0" style={{ background: drink.accent }} />

      {/* Drink info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-body text-base font-700 text-white leading-tight truncate">
            {drink.name}
          </span>
          {drink.isBestseller && (
            <span className="shrink-0 text-[10px] font-700 tracking-wider px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(255,61,127,0.15)', color: '#FF3D7F' }}>
              HIT
            </span>
          )}
          {drink.isIced && (
            <span className="shrink-0 text-[10px] font-600 tracking-wider px-2 py-0.5 rounded-full"
              style={{ background: 'rgba(100,200,255,0.1)', color: '#64C8FF' }}>
              ICE
            </span>
          )}
        </div>
        <p className="font-body text-xs text-muted leading-snug line-clamp-1">
          {drink.description}
        </p>
        <div className="mt-2 flex items-center gap-2">
          {drink.ingredients.map(ing => (
            <span key={ing} className="text-[10px] font-body font-600 text-muted tracking-wide px-2 py-0.5 rounded-md"
              style={{ background: '#1C1C1C' }}>
              {ing}
            </span>
          ))}
        </div>
      </div>

      {/* Price + cup mini */}
      <div className="shrink-0 flex flex-col items-end gap-2">
        <div className="w-10 h-10 opacity-70">
          <DrinkCup drink={drink} size={40} />
        </div>
        <span className="font-body font-800 text-base" style={{ color: drink.accent }}>
          {drink.price.toFixed(2).replace('.', ',')} zł
        </span>
      </div>
    </button>
  )
}
