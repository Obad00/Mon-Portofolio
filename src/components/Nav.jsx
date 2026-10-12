const LINKS = [
  ['#projets', 'Projets'],
  ['#experience', 'Expérience'],
  ['#parcours', 'Parcours'],
  ['#stack', 'Stack'],
  ['#apropos', 'À propos'],
  ['#contact', 'Contact'],
]

export default function Nav() {
  return (
    <nav className="nav" aria-label="Navigation principale">
      <a className="logo" href="#top" aria-label="Adama Dabo, retour en haut de page">
        AD<span>.</span>
      </a>
      <ul>
        {LINKS.map(([href, label]) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <span className="mono status">
        <span className="dot" aria-hidden="true" />
        Disponible
      </span>
    </nav>
  )
}
