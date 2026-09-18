import { useEffect, useRef, useState } from 'react'

export default function ScissorCursor() {
  const ref = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setEnabled(fine.matches && !reduced.matches)
    sync()
    fine.addEventListener('change', sync)
    reduced.addEventListener('change', sync)
    return () => {
      fine.removeEventListener('change', sync)
      reduced.removeEventListener('change', sync)
    }
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('has-custom-cursor')
    const node = ref.current
    const move = (e) => {
      if (!node) return
      node.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      node.dataset.visible = 'true'
    }
    const down = () => {
      node?.classList.remove('snip')
      void node?.offsetWidth
      node?.classList.add('snip')
    }
    const leave = () => { if (node) node.dataset.visible = 'false' }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerdown', down)
    document.addEventListener('mouseleave', leave)
    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      document.removeEventListener('mouseleave', leave)
    }
  }, [enabled])

  if (!enabled) return null
  return (
    <div className="scissor-cursor" ref={ref} data-visible="false" aria-hidden="true">
      <svg viewBox="0 0 64 64" role="presentation">
        <g className="blade blade--top">
          <path d="M28 30 56 20c2-.8 3.5 1.4 2 3L37 35" />
        </g>
        <g className="blade blade--bottom">
          <path d="M28 34 56 44c2 .8 3.5-1.4 2-3L37 29" />
        </g>
        <circle cx="25" cy="24" r="9" />
        <circle cx="25" cy="40" r="9" />
        <circle className="pivot" cx="33" cy="32" r="2.8" />
      </svg>
      <span className="cursor-spark cursor-spark--one">✦</span>
      <span className="cursor-spark cursor-spark--two">✦</span>
    </div>
  )
}
