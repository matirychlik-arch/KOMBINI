import { motion } from 'framer-motion'

export default function RewardScreen({ goTo }) {
  return (
    <motion.div
      className="screen"
      style={{ background: '#3A0870' }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
    >
      {/* Starburst lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div key={i}
            className="absolute w-0.5 rounded-full origin-center"
            style={{
              height: '55%',
              background: 'linear-gradient(to top, rgba(255,61,127,0.5), transparent)',
              transform: `rotate(${i * 36}deg)`,
              transformOrigin: 'center 100%',
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: [0, 0.8, 0.4] }}
            transition={{ delay: 0.2 + i * 0.05, duration: 0.7 }}
          />
        ))}
      </div>

      {/* Floating particles */}
      {['#B5FF47', '#FF3D7F', '#FFD600', '#B5FF47', '#FF3D7F'].map((c, i) => (
        <motion.div key={i}
          className="absolute w-2.5 h-2.5 rounded-full"
          style={{ background: c, left: `${15 + i * 16}%`, top: `${18 + (i % 3) * 18}%` }}
          animate={{ y: [-8, -24, -8], scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2 + i * 0.4, repeat: Infinity, delay: i * 0.25 }}
        />
      ))}

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center gap-7 relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 280 }}
          className="text-8xl"
        >
          🎁
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body font-800 text-sm tracking-[0.22em] uppercase mb-2"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            Masz nagrodę!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <span className="font-display text-[88px] leading-none" style={{ color: '#FF3D7F' }}>
              +50
            </span>
            <br />
            <span className="font-display text-3xl text-white">KOMBINI PUNKTÓW</span>
          </motion.div>
        </div>

        {/* Progress card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="w-full max-w-[280px] p-5 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <div className="flex justify-between items-center mb-3">
            <p className="font-body font-600 text-xs tracking-wider" style={{ color: 'rgba(255,255,255,0.45)' }}>
              DO DARMOWEGO NAPOJU
            </p>
            <p className="font-body font-900 text-sm text-white">50 / 200</p>
          </div>
          <div className="w-full h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <div className="h-full rounded-full" style={{ width: '25%', background: '#FF3D7F' }} />
          </div>
          <p className="font-body text-xs mt-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Jeszcze 150 punktów — prawie jesteś!
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="shrink-0 px-8 pb-10 relative z-10">
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          onClick={() => goTo(9)}
          className="w-full py-5 rounded-2xl font-body font-900 text-base tracking-wide active:scale-[0.97] transition-transform"
          style={{ background: '#FF3D7F', color: '#fff' }}
        >
          ODBIERZ NAPÓJ →
        </motion.button>
      </div>
    </motion.div>
  )
}
