import { useEffect, useState } from 'react'

// Drives the intro: a counter that climbs to 100, then the curtain lifts
// ('leaving') and the loader is unmounted ('gone').
export function useLoader(enabled) {
  const [count, setCount] = useState(0)
  const [phase, setPhase] = useState('counting')

  useEffect(() => {
    if (!enabled || phase !== 'counting') return
    const timer = window.setInterval(() => {
      setCount((n) => Math.min(100, n + Math.ceil(Math.random() * 9)))
    }, 45)
    return () => window.clearInterval(timer)
  }, [enabled, phase])

  useEffect(() => {
    if (!enabled) return
    if (phase === 'counting' && count >= 100) {
      const timer = window.setTimeout(() => setPhase('leaving'), 250)
      return () => window.clearTimeout(timer)
    }
    if (phase === 'leaving') {
      const timer = window.setTimeout(() => setPhase('gone'), 1200)
      return () => window.clearTimeout(timer)
    }
  }, [enabled, phase, count])

  return { count, phase }
}
