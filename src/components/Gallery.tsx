import { motion } from 'framer-motion'
import type { Memory } from '../types'
import PolaroidCard from './PolaroidCard'
import SectionHeader from './SectionHeader'

type GalleryProps = {
  memories: Memory[]
  onSelect: (memory: Memory) => void
}

function Gallery({ memories, onSelect }: GalleryProps) {
  return (
    <section className="section" id="galeria">
      <SectionHeader
        label="Galería"
        title="Nuestros"
        highlight="recuerdos favoritos"
      />
      <motion.div
        className="gallery"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <PolaroidCard memory={memory} onSelect={onSelect} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Gallery
