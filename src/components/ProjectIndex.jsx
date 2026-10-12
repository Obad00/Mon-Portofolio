import { useState } from 'react'
import { categories, projects } from '../data/projects.js'
import { useMagnetic } from '../hooks/useMagnetic.js'
import { pad } from '../utils/format.js'

const countIn = (cat) => (cat === 'all' ? projects.length : projects.filter((p) => p.cat === cat).length)

export default function ProjectIndex({ onOpen, onHover }) {
  const [filter, setFilter] = useState('all')
  const magnetic = useMagnetic()

  return (
    <section id="projets">
      <div className="sec-head">
        <h2 className="rv">Projets<em className="s"> choisis</em></h2>
        <span className="count" aria-live="polite">({pad(countIn(filter))})</span>
      </div>

      <div className="filters" role="group" aria-label="Filtrer les projets">
        {categories.map(([key, label]) => (
          <button
            key={key}
            className="chip"
            type="button"
            aria-pressed={key === filter}
            onClick={() => setFilter(key)}
            {...magnetic}
          >
            {label}
            <sup>{countIn(key)}</sup>
          </button>
        ))}
      </div>

      {/* Filtered rows are hidden, not removed: each project keeps its number. */}
      <ul className="index">
        {projects.map((project, i) => (
          <li
            key={project.id}
            className="row"
            hidden={filter !== 'all' && project.cat !== filter}
            style={{ '--c': project.c }}
          >
            <button
              type="button"
              aria-label={`Voir le projet ${project.t}`}
              aria-haspopup="dialog"
              onClick={() => onOpen(project)}
              onPointerEnter={() => onHover(project)}
              onPointerLeave={() => onHover(null)}
            >
              <span className="no">{pad(i + 1)}</span>
              <span className="t">{project.t}</span>
              <span className="d">{project.d}</span>
              <span className="k">{project.k}</span>
              <span className="arr" aria-hidden="true">→</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}
