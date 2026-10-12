import { useEffect } from 'react'

// Makes an element trail the mouse: writes the eased position in --x / --y on
// the element, the CSS decides how to use them. `ease` is the share of the
// remaining distance covered each frame (higher = snappier).
export function useFollowPointer(ref, ease) {
  useEffect(() => {
    const el = ref.current
    if (!el) return

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let cx = x
    let cy = y
    let frame = 0

    const paint = () => {
      el.style.setProperty('--x', `${cx}px`)
      el.style.setProperty('--y', `${cy}px`)
    }
    const loop = () => {
      const dx = x - cx
      const dy = y - cy
      if (Math.abs(dx) > 0.05 || Math.abs(dy) > 0.05) {
        cx += dx * ease
        cy += dy * ease
        paint()
      }
      frame = requestAnimationFrame(loop)
    }
    const onMove = (event) => {
      x = event.clientX
      y = event.clientY
    }

    paint()
    window.addEventListener('mousemove', onMove, { passive: true })
    frame = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [ref, ease])
}
