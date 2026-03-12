import { motion } from 'framer-motion'
import { SYRUPS } from '../data/drinks'

const sweetnessLabel = v => ({ less: 'Mniej słodka', normal: null, extra: 'Extra słodka' }[v])
const syrupName      = id => SYRUPS.find(s => s.id === id)?.name

export default function CartScreen({ goTo, cart, setCart, total, onReset }) {
  const removeItem = id => setCart(prev => prev.filter(i => i.id !== id))

  return (
    <motion.div
      className="screen"
      style={{ background: '#0D0D0D' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="shrink-0 px-6 pt-8 pb-5 flex items-center justify-between">
        <button onClick={() => goTo(1)}
          className="flex items-center gap-1.5 font-body font-700 text-sm"
          style={{ color: '#666' }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          Dodaj więcej
        </button>
        <h2 className="font-display text-3xl text-white">ZAMÓWIENIE</h2>
        <button onClick={onReset}
          className="font-body text-xs font-700 underline"
          style={{ color: '#555' }}>
          Wyczyść
        </button>
      </div>

      {/* Items */}
      <div className="scroll-area px-6">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 gap-4">
            <p className="font-body text-sm text-[#555]">Koszyk jest pusty</p>
            <button onClick={() => goTo(1)}
              className="px-6 py-3 rounded-xl font-body font-800 text-sm"
              style={{ background: '#B5FF47', color: '#0D0D0D' }}>
              Wybierz napój
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 pb-4">
            {cart.map((item, idx) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-2xl flex items-start gap-3"
                style={{ background: '#1A1A1A', border: '1px solid #2A2A2A' }}
              >
                {/* Index dot */}
                <div className="w-6 h-6 rounded-full flex items-center justify-center font-body font-900 text-xs shrink-0 mt-0.5"
                  style={{ background: `${item.drink.accent}20`, color: item.drink.accent }}>
                  {idx + 1}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-body font-800 text-sm text-white">{item.drink.name}</p>
                  {/* Customization details */}
                  {[
                    sweetnessLabel(item.customization.sweetness),
                    item.customization.syrup && `Syrop: ${syrupName(item.customization.syrup)}`,
                    item.customization.extraEspresso && 'Extra espresso +2 zł',
                  ].filter(Boolean).map((line, i) => (
                    <p key={i} className="font-body text-[11px] mt-0.5" style={{ color: '#666' }}>· {line}</p>
                  ))}
                </div>

                <div className="shrink-0 flex flex-col items-end gap-2">
                  <span className="font-body font-900 text-sm" style={{ color: item.drink.accent }}>
                    {item.price.toFixed(2).replace('.', ',')} zł
                  </span>
                  <button onClick={() => removeItem(item.id)}
                    className="font-body text-[10px] font-700" style={{ color: '#444' }}>
                    usuń
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="shrink-0 px-6 pb-8 pt-4" style={{ borderTop: '1px solid #1E1E1E' }}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-body font-600 text-sm" style={{ color: '#555' }}>
              {cart.length} {cart.length === 1 ? 'napój' : 'napoje'}
            </span>
            <span className="font-body text-xs" style={{ color: '#444' }}>w tym VAT</span>
          </div>
          <div className="flex items-baseline justify-between mb-5">
            <span className="font-body font-700 text-base text-white">Łącznie</span>
            <span className="font-display text-5xl" style={{ color: '#FF3D7F' }}>
              {total.toFixed(2).replace('.', ',')} zł
            </span>
          </div>
          <button
            onClick={() => goTo(5)}
            className="w-full py-5 rounded-2xl font-body font-900 text-base tracking-wide active:scale-[0.97] transition-transform"
            style={{ background: '#FF3D7F', color: '#fff' }}
          >
            ZAPŁAĆ →
          </button>
        </div>
      )}
    </motion.div>
  )
}
