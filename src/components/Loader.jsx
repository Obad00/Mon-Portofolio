import { useLoader } from '../hooks/useLoader.js'
import { useReducedMotion } from '../hooks/useMediaQuery.js'
import { pad } from '../utils/format.js'

const LETTERS = [...'Adama Dabo']

export default function Loader() {
  const reduced = useReducedMotion()
  const { count, phase } = useLoader(!reduced)

  if (reduced || phase === 'gone') return null

  return (
    <div className={phase === 'leaving' ? 'loader done' : 'loader'} aria-hidden="true">
      <div className="w">
        {LETTERS.map((letter, i) => (
          <span key={i} style={{ animationDelay: `${i * 45}ms` }}>
            {letter === ' ' ? ' ' : letter}
          </span>
        ))}
      </div>
      <span className="n">{pad(count, 3)}</span>
    </div>
  )
}
