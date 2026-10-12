import { marquee } from '../data/skills.js'
import { useDraggableMarquee } from '../hooks/useDraggableMarquee.js'

export default function Marquee() {
  const { marqueeRef, trackRef } = useDraggableMarquee()

  return (
    <div className="marquee" role="group" aria-label="Technologies" ref={marqueeRef}>
      <div className="track" ref={trackRef}>
        {marquee.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
        {/* Second copy: the hook loops the offset modulo half the track width. */}
        {marquee.map((tech) => (
          <span key={`${tech}-copy`} aria-hidden="true">{tech}</span>
        ))}
      </div>
    </div>
  )
}
