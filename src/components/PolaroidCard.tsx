import { motion } from 'framer-motion'
import type { Memory } from '../types'

type PolaroidCardProps = {
  memory: Memory
  onSelect: (memory: Memory) => void
}

function PolaroidCard({ memory, onSelect }: PolaroidCardProps) {
  const tilt = ((memory.id.charCodeAt(0) + memory.id.length * 3) % 5) - 2

  return (
    <motion.button
      className="polaroid"
      onClick={() => onSelect(memory)}
      whileHover={{ rotate: 1.5, y: -6 }}
      whileTap={{ scale: 0.98 }}
      style={{ rotate: `${tilt}deg` }}
    >
      <div className="polaroid__image">
        <img src={memory.image} alt={memory.title} loading="lazy" />
      </div>
      <div className="polaroid__meta">
        <h3>{memory.title}</h3>
        <p>{memory.caption}</p>
        <span className="eyebrow">{memory.date}</span>
      </div>
    </motion.button>
  )
}

export default PolaroidCard
