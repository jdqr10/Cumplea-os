import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import type { Memory } from '../types'

type MemoryModalProps = {
  memory: Memory | null
  onClose: () => void
}

function MemoryModal({ memory, onClose }: MemoryModalProps) {
  if (!memory) return null

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="modal__backdrop"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 180, damping: 22 }}
        >
          <div className="modal__image">
            <img src={memory.image} alt={memory.title} loading="lazy" />
          </div>
          <div className="modal__content">
            <h3>{memory.title}</h3>
            <p>{memory.caption}</p>
            <span className="eyebrow">{memory.date}</span>
            <button className="ghost" onClick={onClose}>
              Cerrar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}

export default MemoryModal
