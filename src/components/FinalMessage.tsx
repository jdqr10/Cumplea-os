import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

type FinalMessageProps = {
  message: string
  buttonText: string
  ctaLink?: string
}

function FinalMessage({ message, buttonText, ctaLink }: FinalMessageProps) {
  return (
    <section className="section" id="final">
      <SectionHeader
        label="Un deseo"
        title="Gracias por existir"
        highlight="hoy y siempre"
      />
      <motion.div
        className="final-message"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p>{message}</p>
        {ctaLink ? (
          <a className="primary" href={ctaLink} target="_blank" rel="noreferrer">
            {buttonText}
          </a>
        ) : (
          <button className="primary" type="button">
            {buttonText}
          </button>
        )}
      </motion.div>
    </section>
  )
}

export default FinalMessage
