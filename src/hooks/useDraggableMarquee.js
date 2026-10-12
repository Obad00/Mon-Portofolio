import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useMediaQuery.js'

const AUTO_SPEED = -0.6 // px per frame
const FRICTION = 0.94

// Endless strip driven by requestAnimationFrame: scrolls on its own, pauses under
// the mouse, and can be dragged with a finger or the mouse, with momentum.
// The track must hold its content twice: the offset loops modulo half its width.
// With reduced motion it does not scroll by itself but stays draggable.
export function useDraggableMarquee() {
  const marqueeRef = useRef(null)
  const trackRef = useRef(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const marquee = marqueeRef.current
    const track = trackRef.current
    if (!marquee || !track) return

    const auto = reduced ? 0 : AUTO_SPEED
    let offset = 0
    let velocity = 0
    let dragging = false
    let hovered = false
    let lastX = 0
    let lastTime = 0
    let half = track.scrollWidth / 2
    let frame = 0
    let alive = true

    const measure = () => {
      half = track.scrollWidth / 2
    }
    const onPointerDown = (event) => {
      dragging = true
      lastX = event.clientX
      lastTime = performance.now()
      velocity = 0
      marquee.classList.add('drag')
      marquee.setPointerCapture(event.pointerId)
    }
    const onPointerMove = (event) => {
      if (!dragging) return
      const dx = event.clientX - lastX
      const now = performance.now()
      offset += dx
      velocity = dx / Math.max(1, (now - lastTime) / 16.7)
      lastX = event.clientX
      lastTime = now
    }
    const onPointerUp = () => {
      dragging = false
      marquee.classList.remove('drag')
    }
    // Mouse only: a touch never "leaves", it would keep the strip paused.
    const onPointerEnter = (event) => {
      if (event.pointerType === 'mouse') hovered = true
    }
    const onPointerLeave = () => {
      hovered = false
    }
    const loop = () => {
      if (!dragging) {
        velocity *= FRICTION
        offset += velocity + (hovered || Math.abs(velocity) > 0.5 ? 0 : auto)
      }
      if (half) offset = ((offset % half) - half) % half
      track.style.transform = `translate3d(${offset}px,0,0)`
      frame = requestAnimationFrame(loop)
    }

    marquee.addEventListener('pointerdown', onPointerDown)
    marquee.addEventListener('pointermove', onPointerMove)
    marquee.addEventListener('pointerup', onPointerUp)
    marquee.addEventListener('pointercancel', onPointerUp)
    marquee.addEventListener('pointerenter', onPointerEnter)
    marquee.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('resize', measure)
    document.fonts?.ready.then(() => {
      if (alive) measure()
    })
    frame = requestAnimationFrame(loop)

    return () => {
      alive = false
      cancelAnimationFrame(frame)
      marquee.removeEventListener('pointerdown', onPointerDown)
      marquee.removeEventListener('pointermove', onPointerMove)
      marquee.removeEventListener('pointerup', onPointerUp)
      marquee.removeEventListener('pointercancel', onPointerUp)
      marquee.removeEventListener('pointerenter', onPointerEnter)
      marquee.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('resize', measure)
      marquee.classList.remove('drag')
    }
  }, [reduced])

  return { marqueeRef, trackRef }
}
