import { motion } from 'framer-motion'
import { MatchaCharacter, CoffeeCharacter } from '../components/Characters'
import { ScatteredStars, Sparkle, StarFill, Bolt } from '../components/Decorations'

const TICKER = '✦ MATCHA ✦ SPECIALTY KAWA ✦ WROCŁAW ✦ 24/7 ✦ MATCHA ✦ SPECIALTY KAWA ✦ WROCŁAW ✦ 24/7 ✦ '

export default function IdleScreen({ goTo }) {
  return (
    <motion.div
      className="screen relative"
      style={{ background: '#FFD600' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      onClick={() => goTo(1)}
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Scattered stars overlay */}
      <ScatteredStars color="#0D0D0D" opacity={0.22} count={10} />

      {/* Extra decorative bolts */}
      <motion.div
        className="absolute top-[18%] right-[8%]"
        animate={{ rotate: [0, 15, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Bolt size={36} color="#0D0D0D" />
      </motion.div>
      <motion.div
        className="absolute bottom-[28%] left-[6%]"
        animate={{ rotate: [0, -15, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      >
        <Bolt size={28} color="#0D0D0D" />
      </motion.div>

      {/* Top ticker */}
      <div className="shrink-0 overflow-hidden py-3" style={{ background: '#0D0D0D' }}>
        <div className="marquee-track">
          {[TICKER, TICKER].map((t, i) => (
            <span key={i} className="font-body font-700 text-xs tracking-[0.18em]"
              style={{ color: '#FFD600' }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-between px-6 py-4 relative z-10">

        {/* OMG HI label */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="w-full flex justify-center mt-2"
        >
          <div
            className="px-6 py-2 rounded-full font-display text-3xl tracking-wide"
            style={{
              background: '#0D0D0D',
              color: '#FFD600',
              border: '3px solid #0D0D0D',
            }}
          >
            OMG HI :)
          </div>
        </motion.div>

        {/* Characters + KOMBINI center block */}
        <div className="flex-1 flex flex-col items-center justify-center gap-3 w-full">

          {/* Characters row */}
          <motion.div
            className="flex items-end justify-center gap-4 w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 180 }}
          >
            {/* Matcha character */}
            <div className="animate-float" style={{ animationDelay: '0s' }}>
              <MatchaCharacter size={108} />
            </div>

            {/* Center KOMBINI text */}
            <motion.div
              className="text-center flex-1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
            >
              <div
                className="font-display leading-none"
                style={{ fontSize: '96px', color: '#0D0D0D', lineHeight: 0.9 }}
              >
                KOM
              </div>
              <div
                className="font-display leading-none"
                style={{ fontSize: '96px', color: '#0D0D0D', lineHeight: 0.9 }}
              >
                BINI
              </div>
            </motion.div>

            {/* Coffee character */}
            <div className="animate-float" style={{ animationDelay: '0.5s' }}>
              <CoffeeCharacter size={108} />
            </div>
          </motion.div>

          {/* Specialty line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex items-center gap-3"
          >
            <div className="h-px flex-1" style={{ background: 'rgba(0,0,0,0.2)' }} />
            <p className="font-body font-700 text-sm tracking-[0.2em] uppercase"
              style={{ color: 'rgba(0,0,0,0.5)' }}>
              specialty matcha & kawa
            </p>
            <div className="h-px flex-1" style={{ background: 'rgba(0,0,0,0.2)' }} />
          </motion.div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex gap-3 mt-1"
          >
            <span
              className="px-5 py-2.5 rounded-full font-body font-800 text-sm tracking-wide"
              style={{
                background: '#B5FF47',
                color: '#0D0D0D',
                border: '2.5px solid #0D0D0D',
                boxShadow: '3px 3px 0px #0D0D0D',
              }}
            >
              ✦ MATCHA
            </span>
            <span
              className="px-5 py-2.5 rounded-full font-body font-800 text-sm tracking-wide"
              style={{
                background: '#FF9D3D',
                color: '#0D0D0D',
                border: '2.5px solid #0D0D0D',
                boxShadow: '3px 3px 0px #0D0D0D',
              }}
            >
              ✦ KAWA
            </span>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col items-center gap-3 pb-2"
        >
          {/* Sparkle above button */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, 45, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkle size={20} color="#0D0D0D" />
          </motion.div>

          {/* CTA pill button */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
            className="px-10 py-4 rounded-full font-display text-2xl tracking-wider cursor-pointer"
            style={{
              background: '#0D0D0D',
              color: '#FFD600',
              border: '3px solid #0D0D0D',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.3)',
            }}
          >
            tap to start ★
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
