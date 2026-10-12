import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useMediaQuery.js'

// Counts from 0 to `target` the first time the element scrolls into view.
// Before that (and with reduced motion) the final value is shown.
export function useCountUp(target, stepMs = 120) {
  const ref = useRef(null)
  const [value, setValue] = useState(target)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (reduced || !el || target <= 0) return

    let timer = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return
        observer.disconnect()
        let current = 0
        setValue(0)
        timer = window.setInterval(() => {
          current += 1
          setValue(current)
          if (current >= target) window.clearInterval(timer)
        }, stepMs)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      window.clearInterval(timer)
    }
  }, [target, stepMs, reduced])

  return [ref, reduced ? target : value]
}
