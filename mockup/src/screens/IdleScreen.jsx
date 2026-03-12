import { motion } from 'framer-motion'

// Ticker text repeated so seamless loop works
const TICKER = '✦ MATCHA ✦ SPECIALTY KAWA ✦ WROCŁAW ✦ 24/7 ✦ MATCHA ✦ SPECIALTY KAWA ✦ WROCŁAW ✦ 24/7 ✦ '

export default function IdleScreen({ goTo }) {
  return (
    <motion.div
      className="screen"
      style={{ background: '#FFD600' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      onClick={() => goTo(1)}
    >
      {/* Top ticker */}
      <div
        className="shrink-0 overflow-hidden py-2.5"
        style={{ background: '#0D0D0D' }}
      >
        <div className="marquee-track">
          {[TICKER, TICKER].map((t, i) => (
            <span key={i} className="font-body font-700 text-xs tracking-[0.18em] mr-0"
              style={{ color: '#FFD600' }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-between px-8 py-6">

        {/* Center block — KOMBINI + subtitle */}
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          {/* Big logo */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
            className="text-center"
          >
            <div className="font-display text-[108px] leading-none tracking-tight" style={{ color: '#0D0D0D' }}>
              KOM
            </div>
            <div className="font-display text-[108px] leading-none tracking-tight" style={{ color: '#0D0D0D' }}>
              BINI
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-body font-700 text-base tracking-widest text-center uppercase"
            style={{ color: 'rgba(0,0,0,0.5)' }}
          >
            specialty matcha & kawa
          </motion.p>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex gap-3 mt-2"
          >
            <span
              className="px-5 py-2.5 rounded-full font-body font-800 text-sm tracking-wide"
              style={{ background: '#0D1F0D', color: '#B5FF47' }}
            >
              MATCHA
            </span>
            <span
              className="px-5 py-2.5 rounded-full font-body font-800 text-sm tracking-wide"
              style={{ background: '#180A00', color: '#FF9D3D' }}
            >
              KAWA
            </span>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col items-center gap-5 pb-4"
        >
          {/* Pulsing dot */}
          <div className="relative w-14 h-14 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full animate-ping_slow"
              style={{ background: 'rgba(0,0,0,0.2)' }} />
            <div className="absolute inset-[10px] rounded-full animate-ping_slow"
              style={{ background: 'rgba(0,0,0,0.15)', animationDelay: '0.5s' }} />
            <div className="w-4 h-4 rounded-full" style={{ background: '#0D0D0D' }} />
          </div>

          <p className="font-body font-900 text-base tracking-[0.22em] uppercase"
            style={{ color: '#0D0D0D' }}>
            DOTKNIJ ABY ZACZĄĆ
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
