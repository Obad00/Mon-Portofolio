import { useMagnetic } from '../hooks/useMagnetic.js'
import { useRotator } from '../hooks/useRotator.js'

const ROLES = [
  'Entrepreneur',
  'Développeur web & mobile',
  "Cofondateur d'ORYZA",
  'Fondateur de SANKORA HAUSS',
  'Concepteur de produits',
]

export default function Hero() {
  const magnetic = useMagnetic()
  const { current, leaving } = useRotator(ROLES.length)

  return (
    <header className="hero">
      <span className="mono kicker">Entrepreneur &amp; développeur · Dakar, Sénégal</span>
      <h1>
        <span className="line"><span>Adama</span></span>
        <span className="line"><span>Dabo<em className="s">.</em></span></span>
      </h1>
      <div className="hero-row">
        <p>Je construis des entreprises et les produits numériques qui les font vivre, de l'idée jusqu'à la mise en production.</p>
        <div>
          <span className="mono">Aujourd'hui</span>
          <div className="roles" aria-live="off">
            <ul>
              {ROLES.map((role, i) => (
                <li
                  key={role}
                  className={i === current ? 'on' : i === leaving ? 'out' : undefined}
                  aria-hidden={i !== current}
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <a className="scroll-cue mono" href="#projets" {...magnetic}>
          <i />
          Défiler
        </a>
      </div>
    </header>
  )
}
