import { domains, projects } from '../data/projects.js'
import { useCountUp } from '../hooks/useCountUp.js'
import { pad } from '../utils/format.js'

export default function Domains() {
  return (
    <section id="domaines">
      <div className="sec-head">
        <h2 className="rv">Ce que<br /><em className="s">je fais</em></h2>
      </div>
      <div className="domains scale-in">
        {domains.map((domain) => (
          <Domain key={domain.cat} domain={domain} />
        ))}
      </div>
    </section>
  )
}

function Domain({ domain }) {
  const total = projects.filter((p) => p.cat === domain.cat).length
  const [ref, value] = useCountUp(total)

  return (
    <div className="dom">
      <span className="big" ref={ref} aria-label={`${total} projets`} role="img">{pad(value)}</span>
      <div>
        <h3>{domain.t}</h3>
        <p>{domain.p}</p>
      </div>
    </div>
  )
}
