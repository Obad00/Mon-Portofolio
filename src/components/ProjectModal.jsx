import { useEffect, useRef } from 'react'
import { useMagnetic } from '../hooks/useMagnetic.js'
import { ARROW_OUT } from '../utils/format.js'
import Cover from './Cover.jsx'

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function ProjectModal({ project, open, onClose }) {
  const sheetRef = useRef(null)
  const closeRef = useRef(null)
  const magnetic = useMagnetic()

  useEffect(() => {
    if (!open) return

    // Remember what opened the sheet to hand the focus back on close.
    const opener = document.activeElement
    const sheet = sheetRef.current
    sheet.scrollTop = 0
    closeRef.current.focus({ preventScroll: true })
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }
      if (event.key !== 'Tab') return
      // Focus trap: Tab loops inside the sheet.
      const items = [...sheet.querySelectorAll(FOCUSABLE)]
      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement
      if (!sheet.contains(active)) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && active === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      if (opener instanceof HTMLElement) opener.focus({ preventScroll: true })
    }
  }, [open, onClose])

  return (
    <div className={open ? 'modal open' : 'modal'} aria-hidden={!open} inert={!open}>
      <div className="scrim" onClick={onClose} />
      <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="m-title" ref={sheetRef}>
        <button className="close" type="button" aria-label="Fermer" onClick={onClose} ref={closeRef}>
          ✕
        </button>
        {project && (
          <>
            <div className="hero-cv">
              <Cover project={project} />
            </div>
            <div className="body">
              <div>
                <span className="mono">{project.k}</span>
                <h3 id="m-title">{project.t}</h3>
                <p>{project.desc}</p>
                {project.url ? (
                  <a className="visit" href={project.url} target="_blank" rel="noopener noreferrer" {...magnetic}>
                    Voir le site {ARROW_OUT}
                  </a>
                ) : (
                  <span className="visit off" aria-disabled="true">
                    {project.soon || 'Lien à ajouter'}
                  </span>
                )}
              </div>
              <dl>
                <div><dt>Rôle</dt><dd>{project.role}</dd></div>
                <div><dt>Pour</dt><dd>{project.for}</dd></div>
                <div><dt>Année · statut</dt><dd>{project.year}</dd></div>
                {project.ents && (
                  <div>
                    <dt>Entités</dt>
                    <dd>
                      {project.ents.map(([name, text]) => (
                        <div className="ent" key={name}>
                          <strong>{name}</strong>
                          <span>{text}</span>
                        </div>
                      ))}
                    </dd>
                  </div>
                )}
                <div>
                  <dt>Stack</dt>
                  <dd>
                    <div className="tags">
                      {project.stack.length ? (
                        project.stack.map((tech) => <span key={tech}>{tech}</span>)
                      ) : (
                        <span className="todo">À préciser</span>
                      )}
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
