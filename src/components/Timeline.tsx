import { motion } from 'framer-motion'
import type { TimelineItem } from '../types'
import SectionHeader from './SectionHeader'

type TimelineProps = {
  events: TimelineItem[]
}

function Timeline({ events }: TimelineProps) {
  return (
    <section className="section" id="linea-tiempo">
      <SectionHeader
        label="Línea del tiempo"
        title="Nuestra historia"
        highlight="en momentos"
      />
      <div className="timeline">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className="timeline__item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="timeline__dot" />
            <div className="timeline__card">
              <span className="eyebrow">{event.date}</span>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Timeline
