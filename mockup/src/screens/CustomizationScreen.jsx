import { useState } from 'react'
import { motion } from 'framer-motion'
import { SYRUPS } from '../data/drinks'

const SWEETNESS_OPTIONS = [
  { id: 'less', label: 'Mniej' },
  { id: 'normal', label: 'Normalna' },
  { id: 'extra', label: 'Extra' },
]

export default function CustomizationScreen({ goTo, selectedDrink: drink, customization, setCustomization, onAddToCart }) {
  if (!drink) return null

  const accent = drink.accent

  const setSweetness = (v) => setCustomization(c => ({ ...c, sweetness: v }))
  const setSyrup = (v) => setCustomization(c => ({ ...c, syrup: c.syrup === v ? null : v }))
  const toggleEspresso = () => setCustomization(c => ({ ...c, extraEspresso: !c.extraEspresso }))

  const totalPrice = drink.price + (customization.extraEspresso ? 2 : 0)

  const handleConfirm = () => onAddToCart(customization)

  return (
    <motion.div
      className="w-full h-full flex flex-col bg-bg"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.35 }}
    >
      {/* Header */}
      <div className="px-5 pt-8 pb-4 shrink-0 flex items-center justify-between">
        <button
          onClick={() => goTo(2)}
          className="flex items-center gap-2 font-body text-sm font-600 text-muted"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Wstecz
        </button>
        <h2 className="font-display text-2xl text-white tracking-wide">PERSONALIZUJ</h2>
        <div className="w-14" />
      </div>

      {/* Drink name strip */}
      <div className="mx-5 mb-5 px-4 py-3 rounded-2xl shrink-0"
        style={{ background: `${accent}18`, border: `1px solid ${accent}30` }}>
        <p className="font-body text-xs font-600 tracking-[0.15em] text-muted mb-0.5">TWÓJ WYBÓR</p>
        <p className="font-body text-base font-800" style={{ color: accent }}>{drink.name}</p>
      </div>

      {/* Customization sections */}
      <div className="kiosk-scroll px-5 pb-4">

        {/* Sweetness */}
        <Section title="SŁODKOŚĆ" note="bez dopłaty">
          <div className="flex gap-2">
            {SWEETNESS_OPTIONS.map(opt => (
              <button
                key={opt.id}
                onClick={() => setSweetness(opt.id)}
                className="flex-1 py-3.5 rounded-xl font-body text-sm font-700 transition-all active:scale-95"
                style={customization.sweetness === opt.id
                  ? { background: accent, color: '#090909' }
                  : { background: '#1C1C1C', color: '#6B6B6B', border: '1px solid #2A2A2A' }
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
        </Section>

        {/* Syrup */}
        <Section title="SYROP" note={customization.syrup ? '+ wybrany smak' : 'opcjonalnie'}>
          <div className="grid grid-cols-4 gap-2">
            {SYRUPS.map(syrup => (
              <button
                key={syrup.id}
                onClick={() => setSyrup(syrup.id)}
                className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl transition-all active:scale-95"
                style={customization.syrup === syrup.id
                  ? { background: `${syrup.color}22`, border: `1.5px solid ${syrup.color}` }
                  : { background: '#1C1C1C', border: '1px solid #2A2A2A' }
                }
              >
                <div
                  className="w-8 h-8 rounded-full"
                  style={{ background: syrup.color, opacity: 0.85 }}
                />
                <span className="font-body text-[10px] font-600 text-center leading-tight"
                  style={{ color: customization.syrup === syrup.id ? syrup.color : '#6B6B6B' }}>
                  {syrup.name}
                </span>
              </button>
            ))}
          </div>
          {customization.syrup && (
            <p className="mt-2 text-xs font-body text-muted text-center">
              Dotknij ponownie aby usunąć syrop
            </p>
          )}
        </Section>

        {/* Extra espresso — only for latte drinks */}
        {drink.allowExtraEspresso && (
          <Section title="EXTRA ESPRESSO" note="+2,00 zł">
            <button
              onClick={toggleEspresso}
              className="w-full flex items-center justify-between px-4 py-4 rounded-xl transition-all active:scale-[0.98]"
              style={customization.extraEspresso
                ? { background: 'rgba(245,166,35,0.12)', border: '1.5px solid #F5A623' }
                : { background: '#1C1C1C', border: '1px solid #2A2A2A' }
              }
            >
              <div>
                <p className="font-body text-sm font-700 text-white text-left">Dodatkowy shot</p>
                <p className="font-body text-xs text-muted text-left mt-0.5">Mocniejsze espresso · +2 zł</p>
              </div>
              <div
                className="w-12 h-6 rounded-full relative transition-all duration-200"
                style={{ background: customization.extraEspresso ? '#F5A623' : '#2A2A2A' }}
              >
                <div
                  className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-200"
                  style={{ left: customization.extraEspresso ? '28px' : '4px' }}
                />
              </div>
            </button>
          </Section>
        )}
      </div>

      {/* Footer with price + confirm */}
      <div className="shrink-0 px-5 pb-8 pt-3 border-t border-border">
        <div className="flex items-center justify-between mb-4">
          <span className="font-body text-sm text-muted font-600">Cena łączna</span>
          <span className="font-display text-3xl" style={{ color: accent }}>
            {totalPrice.toFixed(2).replace('.', ',')} zł
          </span>
        </div>
        <button
          onClick={handleConfirm}
          className="w-full py-4 rounded-2xl font-body text-base font-800 tracking-wider transition-all active:scale-[0.97]"
          style={{ background: accent, color: '#090909' }}
        >
          DO KOSZYKA →
        </button>
      </div>
    </motion.div>
  )
}

function Section({ title, note, children }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-body text-xs font-700 tracking-[0.2em] text-white uppercase">{title}</h3>
        <span className="font-body text-[10px] text-muted font-500">{note}</span>
      </div>
      {children}
    </div>
  )
}
