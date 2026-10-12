import { useRef } from 'react'
import { useFollowPointer } from '../hooks/useFollowPointer.js'

export default function Cursor({ big }) {
  const ref = useRef(null)
  useFollowPointer(ref, 0.25)

  return (
    <div className={big ? 'cursor big' : 'cursor'} ref={ref} aria-hidden="true">
      VOIR
    </div>
  )
}
