import { motion } from 'framer-motion'
import { SYRUPS } from '../data/drinks'
import { StarFill, ScatteredStars } from '../components/Decorations'

const sweetnessLabel = v => ({ less: 'light sweet', normal: null, extra: 'extra sweet' }[v])
const syrupName      = id => SYRUPS.find(s => s.id === id)?.name

export default function CartScreen({ goTo, cart, setCart, total, onReset }) {
  const removeItem = id => setCart(prev => prev.filter(i => i.id !== id))

  return (
    <motion.div
      className="screen relative"
      style={{ background: '#0D0D0D' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.3 }}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Header */}
      <div className="shrink-0 px-5 pt-8 pb-5 flex items-center justify-between relative z-10">
        <button onClick={() => goTo(1)}
          className="flex items-center gap-1.5 font-body font-700 text-sm px-4 py-2 rounded-full"
          style={{ background: '#1A1A1A', color: '#888', border: '1.5px solid #2A2A2A' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          add more
        </button>
        <div className="flex items-center gap-2">
          <h2 className="font-display text-4xl text-white">YOUR BAG</h2>
          <motion.div
            animate={{ rotate: [0, 20, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <StarFill size={18} color="#FFD600" />
          </motion.div>
        </div>
        <button onClick={onReset}
          className="font-body text-xs font-700 px-3 py-2 rounded-full"
          style={{ background: '#1A1A1A', color: '#555', border: '1.5px solid #2A2A2A' }}>
          clear
        </button>
      </div>

      {/* Items */}
      <div className="scroll-area px-5 relative z-10">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 gap-4">
            <div className="text-5xl">🫗</div>
            <p className="font-body text-sm text-[#444]">your bag is empty</p>
            <button onClick={() => goTo(1)}
              className="px-6 py-3 rounded-full font-body font-800 text-sm"
              style={{
                background: '#B5FF47',
                color: '#0D0D0D',
                border: '2px solid #B5FF47',
                boxShadow: '3px 3px 0px rgba(255,255,255,0.1)',
              }}>
              ✦ pick a drink
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3 pb-4">
            {cart.map((item, idx) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.06 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: '#fff',
                  border: '2.5px solid #0D0D0D',
                  boxShadow: '4px 4px 0px #0D0D0D',
                }}
              >
                {/* Top accent strip */}
                <div className="h-1" style={{ background: item.drink.accent }} />

                <div className="p-4 flex items-start gap-3">
                  {/* Index badge */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center font-display text-xl shrink-0"
                    style={{ background: item.drink.accent, color: '#0D0D0D' }}
                  >
                    {idx + 1}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="font-display text-[22px] leading-tight text-[#0D0D0D]">
                      {item.drink.name.toUpperCase()}
                    </p>
                    {/* Customization details */}
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {[
                        sweetnessLabel(item.customization.sweetness),
                        item.customization.milk && item.customization.milk !== 'oat' && `${item.customization.milk} milk`,
                        item.customization.syrup && `${syrupName(item.customization.syrup)} syrup`,
                        item.customization.extraEspresso && 'extra espresso',
                      ].filter(Boolean).map((line, i) => (
                        <span key={i}
                          className="font-body text-[11px] font-600 px-2 py-0.5 rounded-full"
                          style={{ background: '#F2F2F2', color: '#555', border: '1px solid #ddd' }}>
                          · {line}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 flex flex-col items-end gap-2">
                    <span className="font-body font-900 text-base text-[#0D0D0D]">
                      {item.price.toFixed(2).replace('.', ',')} zł
                    </span>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="font-body text-[11px] font-700 px-3 py-1 rounded-full"
                      style={{ background: '#FFE5E5', color: '#CC2222' }}>
                      remove
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="shrink-0 px-5 pb-8 pt-4 relative z-10" style={{ borderTop: '1px solid #1E1E1E' }}>
          <div className="flex items-center justify-between mb-1">
            <span className="font-body font-600 text-sm text-[#444]">
              {cart.length} {cart.length === 1 ? 'item' : 'items'}
            </span>
            <span className="font-body text-xs text-[#333]">incl. VAT</span>
          </div>
          <div className="flex items-baseline justify-between mb-5">
            <span className="font-body font-600 text-base text-[#555]">subtotal</span>
            <span className="font-display text-[56px] leading-none text-white">
              {total.toFixed(2).replace('.', ',')}
              <span className="text-3xl ml-1 text-[#555]">zł</span>
            </span>
          </div>
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => goTo(5)}
            className="w-full py-5 rounded-2xl font-display text-3xl tracking-wide"
            style={{
              background: '#FFD600',
              color: '#0D0D0D',
              border: '3px solid #0D0D0D',
              boxShadow: '5px 5px 0px #0D0D0D',
            }}
          >
            checkout ★
          </motion.button>
        </div>
      )}
    </motion.div>
  )
}
