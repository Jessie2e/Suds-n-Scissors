const bubbles = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 17 + 7) % 96}%`,
  size: `${18 + ((i * 19) % 46)}px`,
  delay: `${-((i * 1.7) % 12)}s`,
  duration: `${11 + ((i * 13) % 10)}s`,
}))

export default function Bubbles() {
  return (
    <div className="bubbles" aria-hidden="true">
      {bubbles.map((bubble, i) => (
        <span key={i} style={{ '--left': bubble.left, '--size': bubble.size, '--delay': bubble.delay, '--duration': bubble.duration }} />
      ))}
    </div>
  )
}
