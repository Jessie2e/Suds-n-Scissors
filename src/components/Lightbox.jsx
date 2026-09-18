import { X } from 'lucide-react'
import { useEffect } from 'react'

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    if (!src) return
    const close = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', close)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', close)
      document.body.style.overflow = ''
    }
  }, [src, onClose])
  if (!src) return null
  return (
    <div className="lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Close image"><X /></button>
      <img src={src} alt="Suds 'n Scissors gallery" onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
