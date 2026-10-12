import { useRef, useState } from 'react'
import { useFollowPointer } from '../hooks/useFollowPointer.js'
import Cover from './Cover.jsx'

// Cover that floats behind the cursor while a project row is hovered.
export default function Preview({ project }) {
  const ref = useRef(null)
  useFollowPointer(ref, 0.12)

  // Keep the last cover on screen while the preview fades out.
  const [shown, setShown] = useState(project)
  if (project && project !== shown) setShown(project)

  return (
    <div className={project ? 'preview on' : 'preview'} ref={ref} aria-hidden="true">
      {shown && (
        <div className="cv">
          <Cover project={shown} />
        </div>
      )}
    </div>
  )
}
