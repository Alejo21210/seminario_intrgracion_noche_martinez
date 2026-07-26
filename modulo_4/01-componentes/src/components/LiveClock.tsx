import { useState, useEffect } from 'react'

export default function LiveClock() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <p style={{ fontFamily: 'monospace', fontSize: 28, margin: 0, letterSpacing: 2 }}>
      {time.toLocaleTimeString('es-ES')}
    </p>
  )
}
