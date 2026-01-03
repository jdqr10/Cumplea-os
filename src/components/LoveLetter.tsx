import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

type LoveLetterProps = {
  paragraphs: string[]
}

function LoveLetter({ paragraphs }: LoveLetterProps) {
  return (
    <section className="section" id="carta">
      <SectionHeader label="Carta de amor" title="Para mi monita linda😍" />
      <motion.div
        className="letter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <div className="letter__paper">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="letter__signature">
          <span>Con todo mi amor,</span>
          <strong>Tu persona favorita</strong>
        </div>
      </motion.div>
    </section>
  )
}

export default LoveLetter
