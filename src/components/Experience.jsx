import { engagements, experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience">
      <div className="sec-head">
        <h2 className="rv">Expérience<em className="s"> pro</em></h2>
        <span className="count">(depuis 2019)</span>
      </div>

      <ol className="xp">
        {experience.map((job) => (
          <li key={`${job.from}-${job.org}`} style={{ '--c': job.c }}>
            <div className="when">
              <b>{job.from}</b>
              {job.now ? (
                <span className="now"><span className="dot" aria-hidden="true" />{job.to}</span>
              ) : (
                job.to
              )}
            </div>
            <div>
              <h3>{job.role}</h3>
              <div className="org">{job.org}</div>
            </div>
            <ul>
              {job.pts.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <div className="side">
        {engagements.map(([title, text]) => (
          <div key={title}>
            <span className="mono">Engagement</span>
            <strong>{title}</strong>
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
