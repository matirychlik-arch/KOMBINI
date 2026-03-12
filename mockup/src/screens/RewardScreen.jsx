import { motion } from 'framer-motion'
import { RewardMascot } from '../components/Characters'
import { ScatteredStars, StarFill, Sparkle, Heart } from '../components/Decorations'

export default function RewardScreen({ goTo }) {
  return (
    <motion.div
      className="screen relative"
      style={{ background: '#FF5252' }}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 22 }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.1) 1.5px, transparent 1.5px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Stars overlay */}
      <ScatteredStars color="#FFD600" opacity={0.5} count={10} />

      {/* Decorative hearts */}
      <motion.div className="absolute top-[12%] left-[8%]"
        animate={{ y: [-4, -12, -4], scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0 }}>
        <Heart size={22} color="#FFD600" />
      </motion.div>
      <motion.div className="absolute top-[22%] right-[10%]"
        animate={{ y: [-4, -14, -4], scale: [1, 1.3, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, delay: 0.5 }}>
        <Heart size={16} color="#fff" />
      </motion.div>
      <motion.div className="absolute top-[35%] left-[5%]"
        animate={{ y: [-3, -10, -3], scale: [1, 1.15, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, delay: 0.9 }}>
        <StarFill size={18} color="#FFD600" />
      </motion.div>
      <motion.div className="absolute top-[40%] right-[6%]"
        animate={{ y: [-3, -12, -3], scale: [1, 1.2, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}>
        <Sparkle size={16} color="#fff" />
      </motion.div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-7 text-center gap-5 relative z-10">

        {/* Mascot character */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
          className="animate-float"
        >
          <RewardMascot size={130} />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="font-display leading-none text-white" style={{ fontSize: '58px' }}>
            OMG YOU
          </h2>
          <h2 className="font-display leading-none text-white" style={{ fontSize: '58px' }}>
            GOT A REWARD!
          </h2>
        </motion.div>

        {/* Points */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <div
            className="px-8 py-4 rounded-3xl flex items-baseline gap-2"
            style={{
              background: '#0D0D0D',
              border: '3px solid #0D0D0D',
              boxShadow: '5px 5px 0px rgba(0,0,0,0.25)',
            }}
          >
            <span className="font-display text-[80px] leading-none" style={{ color: '#FFD600' }}>
              +50
            </span>
            <span className="font-display text-3xl text-white">pts</span>
          </div>
          <p className="font-body font-700 text-sm mt-2 text-white opacity-70">
            collect them all! 3/12
          </p>
        </motion.div>

        {/* Progress card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="w-full rounded-2xl overflow-hidden"
          style={{
            background: '#fff',
            border: '2.5px solid #0D0D0D',
            boxShadow: '4px 4px 0px #0D0D0D',
          }}
        >
          <div className="px-5 py-4">
            <div className="flex justify-between items-center mb-2.5">
              <p className="font-body font-700 text-xs tracking-wider text-[#888]">
                TO FREE DRINK
              </p>
              <p className="font-body font-900 text-sm text-[#0D0D0D]">50 / 200</p>
            </div>
            <div className="w-full h-3 rounded-full overflow-hidden" style={{ background: '#F0F0F0', border: '1.5px solid #E0E0E0' }}>
              <div className="h-full rounded-full" style={{ width: '25%', background: '#FF5252' }} />
            </div>
            <p className="font-body text-xs mt-2 text-[#AAA]">
              150 more points — almost there!
            </p>
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="shrink-0 px-6 pb-10 relative z-10">
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => goTo(9)}
          className="w-full py-5 rounded-2xl font-display text-2xl tracking-wide"
          style={{
            background: '#FFD600',
            color: '#0D0D0D',
            border: '3px solid #0D0D0D',
            boxShadow: '5px 5px 0px #0D0D0D',
          }}
        >
          pick up drink ★
        </motion.button>
      </div>
    </motion.div>
  )
}
