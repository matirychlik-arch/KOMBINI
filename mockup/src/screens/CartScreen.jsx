import { motion } from 'framer-motion'
import { SYRUPS } from '../data/drinks'

function sweetnessLabel(v) {
  return { less: 'Mniej słodka', normal: 'Normalna słodkość', extra: 'Extra słodka' }[v]
}

function syrupLabel(id) {
  return SYRUPS.find(s => s.id === id)?.name || id
}

export default function CartScreen({ goTo, cart, setCart, total, onReset }) {
  const removeItem = (id) => setCart(prev => prev.filter(item => item.id !== id))

  return (
    <motion.div
      className="w-full h-full flex flex-col bg-bg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
    >
      {/* Header */}
      <div className="px-5 pt-8 pb-6 shrink-0 flex items-center justify-between">
        <button
          onClick={() => goTo(1)}
          className="flex items-center gap-2 font-body text-sm font-600 text-muted"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Dodaj więcej
        </button>
        <h2 className="font-display text-3xl text-white">ZAMÓWIENIE</h2>
        <button onClick={onReset} className="font-body text-xs text-muted font-600 underline">
          Wyczyść
        </button>
      </div>

      {/* Items list */}
      <div className="kiosk-scroll px-5 flex-1">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 gap-3">
            <p className="font-body text-muted text-sm">Koszyk jest pusty</p>
            <button
              onClick={() => goTo(1)}
              className="px-6 py-3 rounded-xl font-body text-sm font-700"
              style={{ background: '#B5FF47', color: '#090909' }}
            >
              Wybierz napój
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 pb-4">
            {cart.map((item, idx) => (
              <CartItem
                key={item.id}
                item={item}
                index={idx + 1}
                onRemove={() => removeItem(item.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="shrink-0 px-5 pb-8 pt-4 border-t border-border">
          {/* Total */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-body text-sm text-muted font-600">
              {cart.length} {cart.length === 1 ? 'napój' : 'napoje'}
            </span>
            <span className="font-body text-xs text-muted">w tym 8% VAT</span>
          </div>
          <div className="flex items-center justify-between mb-5">
            <span className="font-body text-base font-700 text-white">Łącznie do zapłaty</span>
            <span className="font-display text-4xl" style={{ color: '#FF3D7F' }}>
              {total.toFixed(2).replace('.', ',')} zł
            </span>
          </div>

          <button
            onClick={() => goTo(5)}
            className="w-full py-5 rounded-2xl font-body text-base font-800 tracking-wider transition-all active:scale-[0.97]"
            style={{ background: '#FF3D7F', color: '#fff' }}
          >
            ZAPŁAĆ →
          </button>
        </div>
      )}
    </motion.div>
  )
}

function CartItem({ item, index, onRemove }) {
  const { drink, customization, price } = item
  const hasCustomizations = customization.sweetness !== 'normal'
    || customization.syrup
    || customization.extraEspresso

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="p-4 rounded-2xl"
      style={{ background: '#141414', border: '1px solid #222' }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {/* Index */}
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center font-body text-xs font-800 shrink-0 mt-0.5"
            style={{ background: drink.accent + '20', color: drink.accent }}
          >
            {index}
          </div>
          {/* Drink info */}
          <div>
            <p className="font-body text-sm font-700 text-white">{drink.name}</p>
            {hasCustomizations && (
              <div className="mt-1.5 flex flex-col gap-0.5">
                {customization.sweetness !== 'normal' && (
                  <p className="font-body text-[11px] text-muted">
                    · {sweetnessLabel(customization.sweetness)}
                  </p>
                )}
                {customization.syrup && (
                  <p className="font-body text-[11px] text-muted">
                    · Syrop: {syrupLabel(customization.syrup)}
                  </p>
                )}
                {customization.extraEspresso && (
                  <p className="font-body text-[11px] text-muted">
                    · Extra espresso +2 zł
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="font-body font-800 text-sm" style={{ color: drink.accent }}>
            {price.toFixed(2).replace('.', ',')} zł
          </span>
          <button
            onClick={onRemove}
            className="font-body text-[10px] text-muted font-600 hover:text-white transition-colors"
          >
            usuń
          </button>
        </div>
      </div>
    </motion.div>
  )
}
