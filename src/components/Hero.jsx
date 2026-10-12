import { useMagnetic } from '../hooks/useMagnetic.js'

const ROLES = ['Développeur web & mobile', "Cofondateur d'ORYZA", 'Fondateur de SANKORA HAUSS']

export default function Hero() {
  const magnetic = useMagnetic()

  return (
    <header className="hero">
      <span className="mono kicker">Développeur full-stack · Dakar, Sénégal</span>
      <h1>
        <span className="line"><span>Adama</span></span>
        <span className="line"><span>Dabo<em className="s">.</em></span></span>
      </h1>
      <div className="hero-row">
        <p>Je conçois et je code des produits numériques utiles, du premier écran jusqu'à la mise en production.</p>
        <div>
          <span className="mono">Aujourd'hui</span>
          <div className="roles" aria-live="off">
            <ul>
              {ROLES.map((role) => (
                <li key={role}>{role}</li>
              ))}
              {/* The first role again, so the loop restarts without a jump. */}
              <li aria-hidden="true">{ROLES[0]}</li>
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
