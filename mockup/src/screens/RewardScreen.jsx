import { motion } from 'framer-motion'

const POINTS = 50

export default function RewardScreen({ goTo }) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-between bg-bg relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      {/* Background star burst */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-24 rounded-full origin-bottom"
            style={{
              background: `linear-gradient(to top, rgba(255,61,127,0.4), transparent)`,
              transform: `rotate(${i * 30}deg) translateY(-60px)`,
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: [0, 1, 0.5] }}
            transition={{ delay: 0.3 + i * 0.04, duration: 0.6 }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 2 === 0 ? '#FF3D7F' : '#B5FF47',
            left: `${15 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [-10, -30, -10],
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}

      <div className="pt-10" />

      {/* Main content */}
      <div className="flex flex-col items-center gap-6 px-8 text-center z-10">
        {/* Star emoji big */}
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 250 }}
          className="text-7xl"
        >
          🎁
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-sm font-700 tracking-[0.2em] text-muted uppercase mb-2"
          >
            Masz nagrodę!
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="font-display text-6xl text-glow-pink"
            style={{ color: '#FF3D7F' }}
          >
            +{POINTS}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-display text-2xl text-white mt-1"
          >
            KOMBINI PUNKTÓW
          </motion.p>
        </div>

        {/* Reward card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full max-w-[280px] p-5 rounded-2xl text-left"
          style={{
            background: 'linear-gradient(135deg, rgba(255,61,127,0.12), rgba(181,255,71,0.08))',
            border: '1px solid rgba(255,61,127,0.25)',
          }}
        >
          <p className="font-body text-xs text-muted mb-3 tracking-wider uppercase">Twoje konto</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-body text-xs text-muted">Punkty ogółem</p>
              <p className="font-display text-3xl text-white">{POINTS}</p>
            </div>
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
              style={{ background: 'rgba(255,61,127,0.15)' }}
            >
              ⭐
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <p className="font-body text-[11px] text-muted">
              Zbierz 200 punktów i zdobądź darmowy napój!
            </p>
            <div className="mt-2 w-full h-1.5 rounded-full overflow-hidden" style={{ background: '#2A2A2A' }}>
              <div className="h-full rounded-full" style={{ width: '25%', background: '#FF3D7F' }} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="pb-10 w-full px-8 z-10">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          onClick={() => goTo(9)}
          className="w-full py-5 rounded-2xl font-body text-base font-800 tracking-wider transition-all active:scale-[0.97]"
          style={{ background: '#FF3D7F', color: '#fff' }}
        >
          ODBIERZ NAPÓJ →
        </motion.button>
      </div>
    </motion.div>
  )
}
