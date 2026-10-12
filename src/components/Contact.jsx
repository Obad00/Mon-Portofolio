import { useEffect, useRef, useState } from 'react'
import { useMagnetic } from '../hooks/useMagnetic.js'

const EMAIL = 'adamafalloudabo@gmail.com'
const PHONES = ['+221 77 142 52 49', '+221 78 794 44 90']
const COPY_LABEL = "Copier l'adresse"

export default function Contact() {
  const addrRef = useRef(null)
  const [label, setLabel] = useState(COPY_LABEL)
  const magnetic = useMagnetic()

  useEffect(() => {
    if (label === COPY_LABEL) return
    const timer = window.setTimeout(() => setLabel(COPY_LABEL), 2200)
    return () => window.clearTimeout(timer)
  }, [label])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setLabel('Adresse copiée')
    } catch {
      // No clipboard access: select the address so it can be copied by hand.
      const range = document.createRange()
      range.selectNodeContents(addrRef.current)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      setLabel('Adresse sélectionnée')
    }
  }

  return (
    <section className="contact" id="contact">
      <span className="mono">Un projet, une idée, une question</span>
      <h2 className="big rv">Travaillons<br /><em className="s">ensemble.</em></h2>
      <div className="mail">
        <a className="addr" href={`mailto:${EMAIL}`} ref={addrRef}>{EMAIL}</a>
        <button className="copy" type="button" onClick={copyEmail} aria-live="polite" {...magnetic}>
          {label}
        </button>
      </div>
      <div className="cgrid">
        <div>
          <span className="mono">Téléphone</span>
          {PHONES.map((phone) => (
            <a key={phone} href={`tel:${phone.replaceAll(' ', '')}`}>{phone}</a>
          ))}
        </div>
        <div>
          <span className="mono">GitHub</span>
          <a href="https://github.com/Obad00" target="_blank" rel="noopener">github.com/Obad00 ↗</a>
        </div>
        <div>
          <span className="mono">Basé à</span>
          <span>Dakar, Sénégal · GMT</span>
        </div>
      </div>
    </section>
  )
}
