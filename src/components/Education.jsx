import { education } from '../data/education.js'
import { pad } from '../utils/format.js'

export default function Education() {
  return (
    <section id="parcours">
      <div className="sec-head">
        <h2 className="rv">Parcours<em className="s"> &amp; diplômes</em></h2>
        <span className="count">({pad(education.length)})</span>
      </div>

      <div className="tl">
        <span className="fill" aria-hidden="true" />
        <ol className="tl-list">
          {education.map((item) => (
            <li key={item.t} className={item.dip ? 'dip' : undefined}>
              <div className="ty">
                {item.ty.map((type, i) => (
                  <span key={type} className={i === 0 && item.dip ? 'g' : undefined}>{type}</span>
                ))}
              </div>
              <div>
                <h3>{item.t}</h3>
                <div className="sch">{item.s}</div>
              </div>
              <span className="dt">{item.d}</span>
              <p>{item.p}</p>
              {item.sk.length > 0 && (
                <div className="sk">
                  {item.sk.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
