import shots from 'virtual:project-shots'

// Cover of a project: the real capture when public/projects/<id>.webp exists,
// otherwise the generated artwork (orb, fake UI and initials).
export default function Cover({ project }) {
  const hasShot = shots.includes(project.id)

  return (
    <div className="cover" style={{ '--bg': project.bg, '--a': project.c }}>
      {hasShot ? (
        <img src={`${import.meta.env.BASE_URL}projects/${project.id}.webp`} alt="" decoding="async" />
      ) : (
        <>
          <span className="orb" />
          {project.sym ? (
            <SankoraSymbol />
          ) : (
            <>
              <span className="ui"><i /><i /><i /><b /></span>
              <span className="mark">{project.t.length <= 5 ? project.t : project.t.slice(0, 2)}</span>
            </>
          )}
        </>
      )}
    </div>
  )
}

function SankoraSymbol() {
  return (
    <svg className="sym" viewBox="0 0 120 120" preserveAspectRatio="xMaxYMax meet" aria-hidden="true">
      <circle cx="60" cy="60" r="56" fill="#031633" stroke="#fff" strokeWidth="3" />
      <rect x="25" y="42" width="6" height="36" rx="3" fill="#fff" />
      <rect x="89" y="42" width="6" height="36" rx="3" fill="#fff" />
      <path d="M44 60 V82 M76 60 V38" stroke="#fff" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path
        d="M74 26 A16 16 0 0 0 44 34 V60 H76 V86 A16 16 0 0 1 46 94"
        fill="none"
        stroke="#E7BD43"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
