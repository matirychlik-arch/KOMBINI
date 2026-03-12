import { motion } from 'framer-motion'

export default function IdleScreen({ goTo }) {
  return (
    <motion.div
      className="w-full h-full flex flex-col items-center justify-between bg-bg relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5 }}
      onClick={() => goTo(1)}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-[-80px] right-[-60px] w-[280px] h-[280px] rounded-full opacity-10 animate-spin_slow"
        style={{ background: 'radial-gradient(circle, #B5FF47, transparent)' }}
      />
      <div
        className="absolute bottom-[-100px] left-[-80px] w-[320px] h-[320px] rounded-full opacity-8"
        style={{ background: 'radial-gradient(circle, #F5A623, transparent)' }}
      />

      {/* Top badge */}
      <div className="pt-12 flex flex-col items-center gap-2">
        <div className="text-xs font-body font-600 tracking-[0.3em] text-muted uppercase px-4 py-1.5 border border-border rounded-full">
          specialty matcha & kawa
        </div>
      </div>

      {/* Center — main logo block */}
      <div className="flex flex-col items-center gap-6">
        {/* KOMBINI logo — massive */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <div
            className="font-display text-[96px] leading-none text-glow-matcha"
            style={{ color: '#B5FF47' }}
          >
            KOM
          </div>
          <div
            className="font-display text-[96px] leading-none"
            style={{ color: '#FAFAF9' }}
          >
            BINI
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-3"
        >
          <div className="w-8 h-px bg-matcha opacity-50" />
          <p className="font-body text-sm font-medium tracking-[0.15em] text-muted uppercase">
            Wrocław · Poland
          </p>
          <div className="w-8 h-px bg-matcha opacity-50" />
        </motion.div>

        {/* Category pills */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex gap-3"
        >
          <span className="px-4 py-2 rounded-full font-body text-xs font-700 tracking-wider"
            style={{ background: 'rgba(181,255,71,0.12)', color: '#B5FF47', border: '1px solid rgba(181,255,71,0.25)' }}>
            MATCHA
          </span>
          <span className="px-4 py-2 rounded-full font-body text-xs font-700 tracking-wider"
            style={{ background: 'rgba(245,166,35,0.12)', color: '#F5A623', border: '1px solid rgba(245,166,35,0.25)' }}>
            SPECIALTY KAWA
          </span>
        </motion.div>
      </div>

      {/* Bottom — tap to start */}
      <div className="pb-14 flex flex-col items-center gap-4">
        {/* Pulsing ring */}
        <div className="relative flex items-center justify-center w-16 h-16">
          <div
            className="absolute inset-0 rounded-full border-2 border-matcha opacity-30 animate-ripple"
            style={{ borderColor: '#B5FF47' }}
          />
          <div
            className="absolute inset-[6px] rounded-full border border-matcha opacity-50 animate-ripple"
            style={{ borderColor: '#B5FF47', animationDelay: '0.4s' }}
          />
          <div
            className="w-3 h-3 rounded-full"
            style={{ background: '#B5FF47' }}
          />
        </div>
        <motion.p
          className="font-body text-sm font-700 tracking-[0.25em] text-white uppercase animate-pulse_glow"
        >
          Dotknij aby zacząć
        </motion.p>
      </div>
    </motion.div>
  )
}
