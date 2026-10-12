import { marquee } from '../data/skills.js'

export default function Marquee() {
  return (
    <div className="marquee" role="group" aria-label="Technologies">
      <div className="track">
        {marquee.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
        {/* Second copy: the track slides by half its width, then loops. */}
        {marquee.map((tech) => (
          <span key={`${tech}-copy`} aria-hidden="true">{tech}</span>
        ))}
      </div>
    </div>
  )
}
