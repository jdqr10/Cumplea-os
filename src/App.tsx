import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import FinalMessage from './components/FinalMessage'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import LoveLetter from './components/LoveLetter'
import MemoryModal from './components/MemoryModal'
import MusicSection from './components/MusicSection'
import NavBar from './components/NavBar'
import SinceCounter from './components/SinceCounter'
// import Timeline from './components/Timeline'
import type { Memory /*, TimelineItem*/ } from './types'
import heroImage from './assets/foto_portada.jpeg'
import './App.css'

const loveLetterParagraphs = [
  'Hoy celebro tu vida y todo lo que hemos construido juntos. Cada momento que hemos caminado de la mano me recuerdan por qué eres mi lugar seguro.',
  'Espero que Dios te regale un año lleno de sueños cumplidos, salud y momentos inolvidables. Que sigas brillando con esa luz única que tienes y que nunca pierdas esa capacidad de querer tan grande que te caracteriza.',
  'Gracias por elegirme cada día. Prometo seguir sumando historias. Sabes que siempre estaré aquí para ti, aunque la vida nos presente desafíos.',
  'Te amo amorcito de mi vida  💙.',
]

const memories: Memory[] = [
  {
    id: 'parque',
    title: 'Nuestro primer pueblo',
    caption: 'Visita a nuestro primer pueblo juntos🛣️.',
    date: 'Abr',
    image: new URL('./assets/primer_pueblo.jpeg', import.meta.url).href,
  },
  {
    id: 'cafe',
    title: 'Amor y amistad',
    caption: 'Amor y amistad, haciendo lo que mas nos gusta, comer😅.',
    date: 'Sep',
    image: new URL('./assets/amor_amistad.jpeg', import.meta.url).href,
  },
  {
    id: 'viaje',
    title: 'Halloween juntos',
    caption: 'Disfraces, risas y el susto más tierno del mundo🎃.',
    date: 'Oct',
    image: new URL('./assets/halloween.jpeg', import.meta.url).href,
  },
  {
    id: 'lluvia',
    title: 'Nuestra primera navidad',
    caption: 'Nuestra primera navidad, viendo las lucesitas con el amor🎄.',
    date: 'Dic',
    image: new URL('./assets/navidad.jpeg', import.meta.url).href,
  },
]

// const timeline: TimelineItem[] = [
//   {
//     id: 'encuentro',
//     title: 'Nos miramos',
//     description: 'Un cruce de miradas que cambió todos mis planes.',
//     date: '2019',
//   },
//   {
//     id: 'viaje-1',
//     title: 'Primer viaje',
//     description: 'Descubrimos que somos el mejor equipo incluso perdidos.',
//     date: '2020',
//   },
//   {
//     id: 'mudanza',
//     title: 'Hogar juntos',
//     description: 'Llenamos de libros, plantas y risas nuestro rincón.',
//     date: '2022',
//   },
//   {
//     id: 'hoy',
//     title: 'Hoy',
//     description: 'Sigo eligiéndote en cada pequeño gesto cotidiano.',
//     date: '2024',
//   },
// ]

const finalMessage =
  'Brindo por ti, por nosotros y por todos los capítulos que aún no conocemos. Que este año te regale todo lo que mereces y vivamos más aventuras juntos.'

const SECRET_CODE = '060425'

type Stage = 'code' | 'greeting' | 'content'

function HeartField() {
  const hearts = [
    { left: '10%', size: 12, duration: 14, delay: 0 },
    { left: '25%', size: 14, duration: 12, delay: 1.5 },
    { left: '40%', size: 11, duration: 10, delay: 0.7 },
    { left: '55%', size: 13, duration: 15, delay: 2.2 },
    { left: '70%', size: 10, duration: 11, delay: 1.1 },
    { left: '85%', size: 12, duration: 13, delay: 0.3 },
    { left: '15%', size: 9, duration: 9, delay: 2.6 },
    { left: '32%', size: 8, duration: 12, delay: 3.1 },
    { left: '62%', size: 9, duration: 10, delay: 1.8 },
    { left: '78%', size: 11, duration: 16, delay: 0.9 },
    { left: '48%', size: 10, duration: 14, delay: 2.9 },
    { left: '5%', size: 8, duration: 11, delay: 3.4 },
  ]

  return (
    <div className="hearts" aria-hidden>
      {hearts.map((heart, index) => (
        <span
          key={index}
          style={{
            left: heart.left,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

function ConfettiBurst() {
  const pieces = Array.from({ length: 500 })
  const colors = ['#f8b7c6', '#ffd991', '#b3d8ff', '#c1f0d4', '#f3a8c1']

  return (
    <div className="confetti" aria-hidden>
      {pieces.map((_, index) => {
        const left = Math.random() * 100
        const size = 6 + Math.random() * 10
        const delay = Math.random() * 0.6
        const duration = 2.4 + Math.random() * 1.2
        const rotate = Math.random() * 360
        const bg = colors[index % colors.length]
        return (
          <span
            key={index}
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size * 0.35}px`,
              background: bg,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              transform: `rotate(${rotate}deg)`,
            }}
          />
        )
      })}
    </div>
  )
}

function CodeGate({
  code,
  error,
  onChange,
  onSubmit,
}: {
  code: string
  error: boolean
  onChange: (value: string) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}) {
  return (
    <div className="gate">
      <motion.div
        className="gate__card"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="gate__eyebrow">Abre tu regalo</p>
        <h1 className="gate__title">Ingresa el código secreto</h1>
        <form className="gate__form" onSubmit={onSubmit}>
          <input
            type="password"
            inputMode="numeric"
            autoFocus
            placeholder="******"
            value={code}
            onChange={(e) => onChange(e.target.value)}
          />
          {error ? <span className="gate__error">Ups, inténtalo de nuevo.</span> : null}
          <button className="primary" type="submit">
            Entrar
          </button>
        </form>
      </motion.div>
    </div>
  )
}

function GreetingOverlay({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="greeting">
      <motion.div
        className="greeting__content"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">Sorpresa</p>
        <h1>Feliz cumpleaños, mi amor 💙 </h1>
        <p className="lead">
          Un pequeño detalle, que estará por siempre.
        </p>
        <button className="primary" onClick={onContinue}>
          Continuar
        </button>
      </motion.div>
    </div>
  )
}

function App() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null)
  const [stage, setStage] = useState<Stage>('code')
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (stage === 'greeting') {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 4200)
      return () => clearTimeout(timer)
    }
    return undefined
  }, [stage])

  const handleCodeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (code.trim() === SECRET_CODE) {
      setError(false)
      setStage('greeting')
    } else {
      setError(true)
    }
  }

  return (
    <>
      <HeartField />
      <div className="content-layer">
        {showConfetti ? <ConfettiBurst /> : null}
        {stage === 'code' ? (
          <CodeGate
            code={code}
            error={error}
            onChange={(value) => setCode(value)}
            onSubmit={handleCodeSubmit}
          />
        ) : null}

        {stage === 'greeting' ? (
          <GreetingOverlay onContinue={() => setStage('content')} />
        ) : null}

        {stage === 'content' ? (
          <div className="page">
            <NavBar />
            <SinceCounter start="2025-04-03T00:00:00" />
            <Hero
              id="inicio"
              headline="Eres mi persona favorita"
              subtext="Una carta digital para recordarte lo increíble que es compartir la vida contigo."
              image={heroImage}
            />
            <LoveLetter paragraphs={loveLetterParagraphs} />
            <Gallery memories={memories} onSelect={setSelectedMemory} />
            {/* <Timeline events={timeline} /> */}
            <MusicSection
              dedication="Esta canción siempre me lleva a ti. Déjala sonar mientras lees."
              spotifyEmbedUrl="https://open.spotify.com/embed/track/6SxDtbKnsQeUJjXYW76rt3?utm_source=generator"
            />
            <FinalMessage
              message={finalMessage}
              buttonText="Prometo más aventuras"
              ctaLink="#carta"
            />
          </div>
        ) : null}
        <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
      </div>
    </>
  )
}

export default App
