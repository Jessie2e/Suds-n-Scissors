import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SwipeControls({ railRef, railId, label }) {
  const [ends, setEnds] = useState({ start: true, end: false })

  useEffect(() => {
    const rail = railRef.current
    const update = () => setEnds({
      start: rail.scrollLeft <= 2,
      end: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2,
    })
    update()
    rail.addEventListener('scroll', update, { passive: true })
    const observer = new ResizeObserver(update)
    observer.observe(rail)
    return () => {
      rail.removeEventListener('scroll', update)
      observer.disconnect()
    }
  }, [railRef])

  const move = (direction) => {
    const rail = railRef.current
    const cards = [...rail.children]
    const positions = cards.map((card) => card.getBoundingClientRect().left - rail.getBoundingClientRect().left + rail.scrollLeft - rail.clientLeft)
    const target = direction > 0
      ? positions.find((position) => position > rail.scrollLeft + 2)
      : positions.findLast((position) => position < rail.scrollLeft - 2)
    rail.scrollTo({
      left: target ?? (direction > 0 ? rail.scrollWidth : 0),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    })
  }

  return (
    <div className="pricing-swipe-controls">
      <p>Swipe the cards below to {label}</p>
      <div className="pricing-swipe-controls__buttons">
        <button type="button" aria-label={`Previous ${label === 'compare services' ? 'service' : 'extra'}`} aria-controls={railId} disabled={ends.start} onClick={() => move(-1)}><ChevronLeft size={20} /></button>
        <button type="button" aria-label={`Next ${label === 'compare services' ? 'service' : 'extra'}`} aria-controls={railId} disabled={ends.end} onClick={() => move(1)}><ChevronRight size={20} /></button>
      </div>
    </div>
  )
}
