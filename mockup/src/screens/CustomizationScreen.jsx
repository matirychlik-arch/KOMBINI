import { motion } from 'framer-motion'
import { SYRUPS } from '../data/drinks'
import { StarFill } from '../components/Decorations'

const SWEETNESS = [
  { id: 'less',   label: 'none',   emoji: '○' },
  { id: 'normal', label: 'light',  emoji: '◑' },
  { id: 'extra',  label: 'sweet',  emoji: '●' },
]

const MILK_OPTIONS = [
  { id: 'oat',    label: 'oat' },
  { id: 'almond', label: 'almond' },
  { id: 'soy',    label: 'soy' },
  { id: 'whole',  label: 'whole' },
]

const ICE_OPTIONS = [
  { id: 'no',      label: 'no ice' },
  { id: 'light',   label: 'light' },
  { id: 'regular', label: 'regular' },
  { id: 'extra',   label: 'extra' },
]

export default function CustomizationScreen({ goTo, selectedDrink: drink, customization, setCustomization, onAddToCart }) {
  if (!drink) return null

  const accent = drink.accent
  const isMatcha = drink.category === 'matcha'
  const topBg = isMatcha ? '#00CC44' : '#FF6B00'

  const setSweetness = v => setCustomization(c => ({ ...c, sweetness: v }))
  const setMilk      = v => setCustomization(c => ({ ...c, milk: v }))
  const setIce       = v => setCustomization(c => ({ ...c, ice: v }))
  const toggleSyrup  = v => setCustomization(c => ({ ...c, syrup: c.syrup === v ? null : v }))
  const toggleShot   = () => setCustomization(c => ({ ...c, extraEspresso: !c.extraEspresso }))
  const total = drink.price + (customization.extraEspresso ? 2 : 0)

  return (
    <motion.div
      className="screen"
      style={{ background: '#0D0D0D' }}
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -32 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header band */}
      <div
        className="shrink-0 px-6 pt-8 pb-5 relative overflow-hidden"
        style={{ background: topBg }}
      >
        {/* Dot texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 1.5px, transparent 1.5px)',
            backgroundSize: '20px 20px',
          }}
        />
        <button
          onClick={() => goTo(2)}
          className="flex items-center gap-1.5 font-body font-700 text-sm mb-3 relative z-10"
          style={{ color: 'rgba(0,0,0,0.55)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          wstecz
        </button>
        <div className="flex items-end justify-between relative z-10">
          <div>
            <h2 className="font-display text-5xl text-[#0D0D0D] leading-none">CUSTOMIZE</h2>
            <p className="font-body font-700 text-sm mt-1 text-[#0D0D0D] opacity-70">
              {drink.name}
            </p>
          </div>
          <div
            className="w-14 h-14 rounded-full flex flex-col items-center justify-center"
            style={{ background: '#0D0D0D', border: '2px solid #0D0D0D' }}
          >
            <span className="font-body font-900 text-[13px] leading-none" style={{ color: accent }}>
              {drink.price.toFixed(0)}
            </span>
            <span className="font-body font-700 text-[10px]" style={{ color: accent }}>zł</span>
          </div>
        </div>
      </div>

      {/* Sections */}
      <div className="scroll-area px-5 py-4 gap-0">

        {/* MILK */}
        <Section label="MILK" accent={accent}>
          <div className="flex gap-2 flex-wrap">
            {MILK_OPTIONS.map(opt => (
              <ToggleBtn
                key={opt.id}
                label={opt.label}
                active={customization.milk === opt.id}
                accent={accent}
                onClick={() => setMilk(opt.id)}
              />
            ))}
          </div>
        </Section>

        {/* SWEETNESS */}
        <Section label="SWEETNESS" accent={accent}>
          <div className="flex gap-2">
            {SWEETNESS.map(opt => (
              <button key={opt.id} onClick={() => setSweetness(opt.id)}
                className="flex-1 py-3 rounded-xl font-body font-800 text-sm transition-all active:scale-95"
                style={customization.sweetness === opt.id
                  ? { background: accent, color: '#0D0D0D', border: `2px solid ${accent}` }
                  : { background: '#1A1A1A', color: '#666', border: '2px solid #2A2A2A' }
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
        </Section>

        {/* ICE */}
        <Section label="ICE" accent={accent}>
          <div className="flex gap-2 flex-wrap">
            {ICE_OPTIONS.map(opt => (
              <ToggleBtn
                key={opt.id}
                label={opt.label}
                active={customization.ice === opt.id}
                accent={accent}
                onClick={() => setIce(opt.id)}
              />
            ))}
          </div>
        </Section>

        {/* SYRUPS */}
        <Section label="EXTRAS" accent={accent} note="syrups">
          <div className="grid grid-cols-4 gap-2">
            {SYRUPS.map(s => (
              <button key={s.id} onClick={() => toggleSyrup(s.id)}
                className="flex flex-col items-center gap-1.5 py-3 px-1 rounded-xl transition-all active:scale-95"
                style={customization.syrup === s.id
                  ? { background: '#fff', border: `2.5px solid ${s.color}` }
                  : { background: '#1A1A1A', border: '2px solid #2A2A2A' }
                }
              >
                <div className="w-7 h-7 rounded-full" style={{ background: s.color, border: '2px solid rgba(0,0,0,0.15)' }} />
                <span className="font-body font-700 text-[10px] text-center leading-tight"
                  style={{ color: customization.syrup === s.id ? '#0D0D0D' : '#555' }}>
                  {s.name}
                </span>
              </button>
            ))}
          </div>
        </Section>

        {/* Extra espresso (latte only) */}
        {drink.allowExtraEspresso && (
          <Section label="EXTRA SHOT" accent={accent} note="+2 zł">
            <button onClick={toggleShot}
              className="w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all active:scale-[0.98]"
              style={customization.extraEspresso
                ? { background: '#fff', border: `2px solid ${accent}` }
                : { background: '#1A1A1A', border: '2px solid #2A2A2A' }
              }
            >
              <div>
                <p className="font-body font-800 text-sm text-left"
                  style={{ color: customization.extraEspresso ? '#0D0D0D' : '#aaa' }}>
                  extra espresso
                </p>
                <p className="font-body font-500 text-xs mt-0.5 text-left"
                  style={{ color: customization.extraEspresso ? '#555' : '#444' }}>
                  stronger kick · +2 zł
                </p>
              </div>
              <div className="w-12 h-6 rounded-full transition-all duration-200 relative"
                style={{ background: customization.extraEspresso ? accent : '#333' }}>
                <div className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200"
                  style={{ left: customization.extraEspresso ? '28px' : '4px' }} />
              </div>
            </button>
          </Section>
        )}

        {/* Spacer */}
        <div className="h-4" />
      </div>

      {/* Footer */}
      <div className="shrink-0 px-5 pb-8 pt-4" style={{ borderTop: '1px solid #1E1E1E' }}>
        <div className="flex items-center justify-between mb-3">
          <span className="font-body font-600 text-sm text-[#555]">total</span>
          <span className="font-display text-4xl" style={{ color: accent }}>
            {total.toFixed(2).replace('.', ',')} zł
          </span>
        </div>
        <button
          onClick={() => onAddToCart(customization)}
          className="w-full py-4 rounded-2xl font-display text-2xl tracking-wide transition-all active:scale-[0.97]"
          style={{
            background: accent,
            color: '#0D0D0D',
            border: `2.5px solid ${accent}`,
            boxShadow: `4px 4px 0px rgba(0,0,0,0.4)`,
          }}
        >
          add to bag ★
        </button>
      </div>
    </motion.div>
  )
}

function Section({ label, note, accent, children }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-2 mb-3">
        <StarFill size={10} color={accent || '#B5FF47'} />
        <h3 className="font-display text-xl tracking-[0.12em]" style={{ color: accent || '#B5FF47' }}>
          {label}
        </h3>
        {note && (
          <span className="font-body font-500 text-[11px] ml-auto" style={{ color: '#444' }}>
            {note}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

function ToggleBtn({ label, active, accent, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2.5 rounded-full font-body font-700 text-sm transition-all active:scale-95"
      style={active
        ? { background: accent, color: '#0D0D0D', border: `2px solid ${accent}` }
        : { background: '#1A1A1A', color: '#666', border: '2px solid #2A2A2A' }
      }
    >
      {label}
    </button>
  )
}
