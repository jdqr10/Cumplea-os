import { useEffect, useState } from 'react'

type SinceCounterProps = {
  start: string
}

type Elapsed = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateElapsed(start: string): Elapsed {
  const startDate = new Date(start).getTime()
  const now = Date.now()
  const diff = Math.max(0, now - startDate)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

function SinceCounter({ start }: SinceCounterProps) {
  const [elapsed, setElapsed] = useState<Elapsed>(() => calculateElapsed(start))

  useEffect(() => {
    const id = setInterval(() => setElapsed(calculateElapsed(start)), 1000)
    return () => clearInterval(id)
  }, [start])

  return (
    <div className="counter">
      <span>Desde nuestra primera charla</span>
      <strong>
        {elapsed.days}d {elapsed.hours}h {elapsed.minutes}m {elapsed.seconds}s
      </strong>
      <small>03 abril 2025</small>
    </div>
  )
}

export default SinceCounter
