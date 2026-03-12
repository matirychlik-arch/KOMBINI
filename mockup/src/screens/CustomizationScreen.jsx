import { motion } from 'framer-motion'
import { SYRUPS } from '../data/drinks'

const SWEETNESS = [
  { id: 'less',   label: 'Mniej' },
  { id: 'normal', label: 'Normalna' },
  { id: 'extra',  label: 'Extra' },
]

export default function CustomizationScreen({ goTo, selectedDrink: drink, customization, setCustomization, onAddToCart }) {
  if (!drink) return null

  const accent = drink.accent
  const setSweetness = v => setCustomization(c => ({ ...c, sweetness: v }))
  const toggleSyrup  = v => setCustomization(c => ({ ...c, syrup: c.syrup === v ? null : v }))
  const toggleShot   = () => setCustomization(c => ({ ...c, extraEspresso: !c.extraEspresso }))
  const total = drink.price + (customization.extraEspresso ? 2 : 0)

  return (
    <motion.div
      className="screen"
      style={{ background: '#F5F4F0' }}
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header — colored */}
      <div
        className="shrink-0 px-6 pt-8 pb-5"
        style={{ background: drink.category === 'matcha' ? '#0D1F0D' : '#180A00' }}
      >
        <button
          onClick={() => goTo(2)}
          className="flex items-center gap-1.5 font-body font-700 text-sm mb-4"
          style={{ color: 'rgba(255,255,255,0.45)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          Wstecz
        </button>
        <h2 className="font-display text-4xl text-white">PERSONALIZUJ</h2>
        <p className="font-body font-700 text-base mt-1" style={{ color: accent }}>
          {drink.name}
        </p>
      </div>

      {/* Sections */}
      <div className="scroll-area px-6 py-5">

        {/* Sweetness */}
        <Section label="SŁODKOŚĆ" note="bez dopłaty">
          <div className="flex gap-2">
            {SWEETNESS.map(opt => (
              <button key={opt.id} onClick={() => setSweetness(opt.id)}
                className="flex-1 py-3.5 rounded-xl font-body font-800 text-sm transition-all active:scale-95"
                style={customization.sweetness === opt.id
                  ? { background: accent, color: '#0D0D0D' }
                  : { background: '#E8E8E4', color: '#777' }
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
        </Section>

        {/* Syrups */}
        <Section label="SYROP" note="opcjonalnie">
          <div className="grid grid-cols-4 gap-2">
            {SYRUPS.map(s => (
              <button key={s.id} onClick={() => toggleSyrup(s.id)}
                className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl transition-all active:scale-95"
                style={customization.syrup === s.id
                  ? { background: `${s.color}28`, border: `1.5px solid ${s.color}` }
                  : { background: '#E8E8E4', border: '1.5px solid transparent' }
                }
              >
                <div className="w-8 h-8 rounded-full" style={{ background: s.color }} />
                <span className="font-body font-700 text-[10px] text-center leading-tight"
                  style={{ color: customization.syrup === s.id ? '#0D0D0D' : '#888' }}>
                  {s.name}
                </span>
              </button>
            ))}
          </div>
        </Section>

        {/* Extra espresso (latte only) */}
        {drink.allowExtraEspresso && (
          <Section label="EXTRA ESPRESSO" note="+2,00 zł">
            <button onClick={toggleShot}
              className="w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all active:scale-[0.98]"
              style={customization.extraEspresso
                ? { background: `${accent}22`, border: `1.5px solid ${accent}` }
                : { background: '#E8E8E4', border: '1.5px solid transparent' }
              }
            >
              <div>
                <p className="font-body font-800 text-sm text-[#0D0D0D] text-left">Dodatkowy shot</p>
                <p className="font-body font-500 text-xs text-[#888] text-left mt-0.5">Mocniejsze espresso · +2 zł</p>
              </div>
              <div className="w-12 h-6 rounded-full transition-all duration-200 relative"
                style={{ background: customization.extraEspresso ? accent : '#ccc' }}>
                <div className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200"
                  style={{ left: customization.extraEspresso ? '28px' : '4px' }} />
              </div>
            </button>
          </Section>
        )}
      </div>

      {/* Footer */}
      <div className="shrink-0 px-6 pb-8 pt-3 border-t border-[#DDD]">
        <div className="flex items-center justify-between mb-4">
          <span className="font-body font-600 text-sm text-[#888]">Cena łączna</span>
          <span className="font-body font-900 text-3xl" style={{ color: accent }}>
            {total.toFixed(2).replace('.', ',')} zł
          </span>
        </div>
        <button
          onClick={() => onAddToCart(customization)}
          className="w-full py-4 rounded-2xl font-body font-900 text-base tracking-wide transition-all active:scale-[0.97]"
          style={{ background: accent, color: '#0D0D0D' }}
        >
          DO KOSZYKA →
        </button>
      </div>
    </motion.div>
  )
}

function Section({ label, note, children }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-body font-900 text-xs tracking-[0.2em] text-[#0D0D0D] uppercase">{label}</h3>
        <span className="font-body font-500 text-[11px] text-[#AAA]">{note}</span>
      </div>
      {children}
    </div>
  )
}
