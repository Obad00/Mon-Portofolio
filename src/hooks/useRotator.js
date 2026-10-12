import { useEffect, useState } from 'react'
import { useReducedMotion } from './useMediaQuery.js'

// Cycles through `count` items, one visible at a time. `current` is the item on
// screen, `leaving` the one sliding out (null once its exit is over).
// With reduced motion the first item stays put.
export function useRotator(count, intervalMs = 2600, exitMs = 800) {
  const [state, setState] = useState({ current: 0, leaving: null })
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced || count < 2) return
    let exitTimer = 0
    const timer = window.setInterval(() => {
      setState(({ current }) => ({ current: (current + 1) % count, leaving: current }))
      window.clearTimeout(exitTimer)
      exitTimer = window.setTimeout(() => setState((s) => ({ ...s, leaving: null })), exitMs)
    }, intervalMs)
    return () => {
      window.clearInterval(timer)
      window.clearTimeout(exitTimer)
    }
  }, [count, intervalMs, exitMs, reduced])

  return reduced ? { current: 0, leaving: null } : state
}
