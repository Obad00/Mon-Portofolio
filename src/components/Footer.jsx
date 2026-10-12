import { useEffect, useState } from 'react'

const dakarTime = () =>
  new Date().toLocaleTimeString('fr-FR', { timeZone: 'Africa/Dakar', hour: '2-digit', minute: '2-digit' })

const YEAR = new Date().getFullYear()

export default function Footer() {
  const [time, setTime] = useState(dakarTime)

  useEffect(() => {
    const timer = window.setInterval(() => setTime(dakarTime()), 30000)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <footer className="wrap">
      <span className="mono">© {YEAR} Adama Dabo</span>
      <span className="mono">Dakar · {time}</span>
    </footer>
  )
}
