import { useState } from 'react'

export default function BeforeAfter({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  initialPosition = 75,
}) {
  const [position, setPosition] = useState(initialPosition)

  return (
    <div className="before-after" style={{ '--position': `${position}%` }}>
      <img src={before} alt={`${beforeLabel} grooming`} className="before-after__image" />
      <div className="before-after__after">
        <img src={after} alt={`${afterLabel} grooming`} className="before-after__image" />
      </div>
      <span className="before-after__tag before-after__tag--before">{beforeLabel}</span>
      <span className="before-after__tag before-after__tag--after">{afterLabel}</span>
      <div className="before-after__line" aria-hidden="true"><span>↔</span></div>
      <input
        className="before-after__range"
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="Drag to compare before and after"
      />
    </div>
  )
}
