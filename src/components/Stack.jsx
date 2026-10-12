import { skills } from '../data/skills.js'
import { pad } from '../utils/format.js'

const total = skills.reduce((n, [, list]) => n + list.length, 0)

export default function Stack() {
  return (
    <section id="stack">
      <div className="sec-head">
        <h2 className="rv">Stack<em className="s"> technique</em></h2>
        <span className="stack-total">{total} technologies</span>
      </div>

      <div className="stack">
        {skills.map(([group, list]) => (
          <div className="grp" key={group}>
            <h3>
              {group}
              <sup>{pad(list.length)}</sup>
            </h3>
            <div className="tags">
              {list.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
