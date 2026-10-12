import { useMemo } from 'react'
import { usePointerEffects } from './useMediaQuery.js'

// Props to spread on a button or link so it leans toward the mouse.
export function useMagnetic() {
  const enabled = usePointerEffects()
  return useMemo(() => {
    if (!enabled) return {}
    return {
      onMouseMove(event) {
        const el = event.currentTarget
        const box = el.getBoundingClientRect()
        const dx = (event.clientX - box.left - box.width / 2) * 0.25
        const dy = (event.clientY - box.top - box.height / 2) * 0.35
        el.style.transform = `translate(${dx}px,${dy}px)`
      },
      onMouseLeave(event) {
        event.currentTarget.style.transform = ''
      },
    }
  }, [enabled])
}
