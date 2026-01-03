import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

type MusicSectionProps = {
  spotifyEmbedUrl?: string
  fallbackAudio?: string
  dedication: string
}

function MusicSection({
  spotifyEmbedUrl,
  fallbackAudio,
  dedication,
}: MusicSectionProps) {
  return (
    <section className="section" id="musica">
      <SectionHeader
        label="Nuestra canción"
        title="Un sonido que nos recuerda"
        highlight="lo nuestro"
      />
      <motion.div
        className="music"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <p className="music__dedication">{dedication}</p>
        {spotifyEmbedUrl ? (
          <div className="music__player">
            <iframe
              src={spotifyEmbedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              title="Playlist de nosotros"
              loading="lazy"
            />
          </div>
        ) : null}
        {!spotifyEmbedUrl && fallbackAudio ? (
          <audio className="music__audio" controls src={fallbackAudio}>
            Tu navegador no soporta audio HTML5.
          </audio>
        ) : null}
      </motion.div>
    </section>
  )
}

export default MusicSection
