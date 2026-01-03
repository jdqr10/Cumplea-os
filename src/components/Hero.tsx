import { motion } from 'framer-motion'

type HeroProps = {
  id?: string
  headline: string
  subtext: string
  image: string
}

function Hero({ headline, subtext, image, id }: HeroProps) {
  return (
    <header className="hero" id={id}>
      <motion.div
        className="hero__card"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero__text">
          <p className="eyebrow">Feliz cumpleaños, mi amor</p>
          <h1>{headline}</h1>
          <p className="lead">{subtext}</p>
        </div>
        <motion.div
          className="hero__photo"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="photo-frame">
            <img src={image} alt="Nosotros" loading="lazy" />
            <span className="photo-note">Por siempre contigo</span>
          </div>
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Hero
