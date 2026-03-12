import { motion } from 'framer-motion'

const TICKER = '✦ MATCHA ✦ SPECIALTY KAWA ✦ WROCŁAW ✦ 24/7 ✦ MATCHA ✦ SPECIALTY KAWA ✦ WROCŁAW ✦ 24/7 ✦ '

export default function IdleScreen({ goTo }) {
  return (
    <motion.div
      className="screen"
      style={{ background: '#0D0D0D' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      {/* Status bar / ticker at top */}
      <div className="shrink-0 overflow-hidden py-2.5 relative z-10" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)' }}>
        <div className="marquee-track">
          {[TICKER, TICKER].map((t, i) => (
            <span
              key={i}
              className="font-display text-xs tracking-[0.22em]"
              style={{ color: 'rgba(255,255,255,0.85)', marginRight: '2px' }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Full-screen promo graphic — swap <div> for <img src="/promo.jpg" className="w-full h-full object-cover" /> when photo is ready */}
      <div className="flex-1 relative overflow-hidden">
        {/* Gradient background (placeholder for promo photo) */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(165deg, #47BCD4 0%, #6EC8DC 25%, #9ED4C8 50%, #C8E8C4 75%, #D4F0A8 100%)',
          }}
        />

        {/* Subtle texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(255,255,255,0.18) 0%, transparent 60%)',
          }}
        />

        {/* Bottom gradient for button legibility */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 100%)',
          }}
        />

        {/* Promo content */}
        <div className="absolute inset-0 flex flex-col items-start justify-end p-7 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.55, ease: 'easeOut' }}
          >
            <p
              className="font-display tracking-widest mb-1"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.28em' }}
            >
              KOMBINI
            </p>
            <h1
              className="font-display leading-[0.92]"
              style={{ fontSize: '72px', color: '#fff', textShadow: '0 2px 20px rgba(0,0,0,0.25)' }}
            >
              MATCHA<br />& KAWA
            </h1>
            <p
              className="font-body font-500 mt-3"
              style={{ fontSize: '16px', color: 'rgba(255,255,255,0.82)' }}
            >
              Specialty na wynos — Wrocław 24/7
            </p>
          </motion.div>
        </div>

        {/* Decorative matcha circle top-right */}
        <motion.div
          className="absolute"
          style={{ top: '12%', right: '-8%', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute"
          style={{ top: '6%', right: '4%', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        />
      </div>

      {/* Zamów button */}
      <div className="shrink-0 px-5 pb-6 pt-3 relative z-10" style={{ background: 'transparent' }}>
        <motion.button
          onClick={() => goTo(1)}
          className="w-full rounded-2xl font-display tracking-widest"
          style={{
            background: '#1A4A1A',
            color: '#fff',
            fontSize: '28px',
            padding: '20px 0',
            border: 'none',
            boxShadow: '0 4px 24px rgba(0,0,0,0.35)',
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.45 }}
          whileTap={{ scale: 0.97 }}
        >
          ZAMÓW
        </motion.button>
      </div>
    </motion.div>
  )
}
