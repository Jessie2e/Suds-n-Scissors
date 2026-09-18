import { Link } from 'react-router-dom'

export default function Logo({ light = true, markOnly = false, wordsOnly = false }) {
  const modeClass = markOnly ? 'brand--mark-only' : wordsOnly ? 'brand--words-only' : 'brand--full'

  return (
    <Link to="/" className={`brand ${light ? 'brand--light' : 'brand--dark'} ${modeClass}`} aria-label="Suds 'n Scissors home">
      {!wordsOnly && (
        <span className="brand__mark" aria-hidden="true">
          <img src="/assets/logo.png" alt="" />
        </span>
      )}
      {!markOnly && (
        <span className="brand__words">
          <strong>Suds ’n Scissors</strong>
          <small>Dog Grooming & Boarding</small>
        </span>
      )}
    </Link>
  )
}
