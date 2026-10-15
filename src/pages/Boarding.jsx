import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, CalendarDays, DoorOpen, Fence, Heart, ShieldCheck, Snowflake, Sparkles, Trees } from 'lucide-react'
import Reveal from '../components/Reveal'
import { business } from '../data'

const features = [
  { icon: DoorOpen, title: 'Private 5×7 suites', text: 'Each boarding guest gets a separate space rather than being placed into a shared kennel setup.' },
  { icon: Trees, title: 'Individual outdoor run', text: 'Private outdoor access connects directly to each suite through a doggy door.' },
  { icon: Snowflake, title: 'Climate controlled', text: 'Indoor boarding stays comfortable while still giving pups safe access to fresh air.' },
  { icon: Fence, title: 'Fenced play area', text: 'Additional outdoor space gives staff room for movement, play, and individualized enrichment.' },
  { icon: ShieldCheck, title: 'Households stay separate', text: 'Dogs from different households are not integrated during their boarding stays.' },
  { icon: Heart, title: 'Intentionally limited capacity', text: 'The team keeps boarding capacity controlled so each guest can receive attentive care.' },
]

const boardingPhotos = [
  { file: 'happyboardingpup.jpg', width: 1599, height: 1204, alt: 'Happy small dog beside a pink bed and toys in an indoor boarding suite', caption: 'A cozy place to settle in' },
  { file: 'happyboardingpupwithsticks.jpg', width: 1204, height: 1599, alt: 'Golden retriever carrying sticks in the fenced grassy boarding play area', caption: 'Room for outdoor fun' },
  { file: 'outdoorkennelwithdog-boarding.jpg', width: 1536, height: 2048, alt: 'Dog peeking through the doggy door from an outdoor run into a boarding suite', caption: 'A little hello from the run' },
  { file: 'happyboardingpupsamedog.jpg', width: 1536, height: 2048, alt: 'Small boarding guest looking up beside a pink bed indoors', caption: 'Little guests, big smiles' },
  { file: 'outdoorboardingkennelnodog.jpg', width: 1536, height: 2048, alt: 'Indoor boarding suite with a dog bed and doggy door opening to an outdoor run', caption: 'A bed inside, fresh air outside' },
]

export default function Boarding() {
  const photosRef = useRef(null)
  const [ends, setEnds] = useState({ start: true, end: false })
  useEffect(() => {
    const rail = photosRef.current
    const update = () => setEnds({ start: rail.scrollLeft <= 2, end: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2 })
    update()
    rail.addEventListener('scroll', update, { passive: true })
    const observer = new ResizeObserver(update)
    observer.observe(rail)
    return () => { rail.removeEventListener('scroll', update); observer.disconnect() }
  }, [])
  const movePhoto = (direction) => {
    const rail = photosRef.current
    const positions = [...rail.children].map((card) => card.offsetLeft - rail.children[0].offsetLeft)
    const target = direction > 0 ? positions.find((x) => x > rail.scrollLeft + 2) : positions.findLast((x) => x < rail.scrollLeft - 2)
    rail.scrollTo({ left: target ?? (direction > 0 ? rail.scrollWidth : 0), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }
  return (
    <>
      <section className="page-hero page-hero--boarding">
        <div className="page-hero__image-overlay" />
        <div className="shell page-hero__inner page-hero__inner--narrow">
          <Reveal>
            <p className="eyebrow eyebrow--gold">Sleepovers, Suds style</p>
            <h1>Private boarding.<br/><em>More peace of mind.</em></h1>
            <p>Thoughtful boarding spaces designed to give each dog room, outdoor access, and care without mixing unfamiliar households.</p>
            <a className="btn btn--gold" href={business.phoneHref}><CalendarDays size={18}/> Ask about a stay</a>
          </Reveal>
        </div>
      </section>

      <section className="section section--white boarding-stays" aria-labelledby="boarding-stays-title">
        <div className="shell">
          <Reveal className="section-heading section-heading--center">
            <p className="eyebrow">A peek at their stay</p>
            <h2 id="boarding-stays-title">Cozy inside. Happy outside.</h2>
            <p>Comfy places to rest, fresh air to enjoy, and a few happy faces from boarding life.</p>
          </Reveal>
          <div className="boarding-stays__controls">
            <p id="boarding-photo-hint">Swipe to see the pups and their spaces.</p>
            <div>
              <button type="button" aria-label="Previous boarding photo" aria-controls="boarding-stay-photos" disabled={ends.start} onClick={() => movePhoto(-1)}><ChevronLeft size={20}/></button>
              <button type="button" aria-label="Next boarding photo" aria-controls="boarding-stay-photos" disabled={ends.end} onClick={() => movePhoto(1)}><ChevronRight size={20}/></button>
            </div>
          </div>
          <div className="boarding-stays__photos" id="boarding-stay-photos" ref={photosRef} tabIndex={0} role="region" aria-label="Boarding photos" onKeyDown={(event) => {
            if (window.matchMedia('(max-width: 1024px)').matches && ['ArrowLeft', 'ArrowRight'].includes(event.key)) {
              event.preventDefault()
              movePhoto(event.key === 'ArrowRight' ? 1 : -1)
            }
          }}>
            {boardingPhotos.map((photo) => (
              <figure className="boarding-stays__photo" key={photo.file}>
                <img src={`/assets/${photo.file}`} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async"/>
                <figcaption>{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream boarding-features">
        <div className="shell">
          <Reveal className="section-heading section-heading--center">
            <p className="eyebrow">Built for comfort + safety</p>
            <h2>A better kind of boarding setup.</h2>
          </Reveal>
          <div className="feature-card-grid">
            {features.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 3) * 60}>
                <article className="feature-card"><Icon/><h3>{title}</h3><p>{text}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--forest boarding-extras">
        <div className="shell boarding-extras__grid">
          <Reveal>
            <p className="eyebrow eyebrow--gold">Add a little extra happy</p>
            <h2>Optional boarding enrichment.</h2>
            <p>Want a little extra one-on-one attention while your pup stays? Ask about available boarding add-ons.</p>
            <div className="boarding-addons">
              <span><Sparkles/> One-on-one outdoor time</span>
              <span><Sparkles/> Lick mats</span>
              <span><Sparkles/> Extra enrichment time</span>
            </div>
            <p className="small-note">Current boarding and add-on rates are confirmed directly with the team.</p>
            <a className="btn btn--gold" href={business.phoneHref}>Call for boarding pricing</a>
          </Reveal>
          <Reveal className="boarding-extras__media" delay={100}>
            <video src="/assets/facility-tour.mp4" poster="/assets/facility-tour-poster.jpg" controls playsInline muted />
          </Reveal>
        </div>
      </section>

      <section className="section section--white boarding-photo-section">
        <div className="shell boarding-photo-grid">
          <Reveal><img src="/assets/exterior-day.jpg" alt="Suds 'n Scissors new facility exterior"/></Reveal>
          <Reveal delay={90}><img src="/assets/nightimesudsexterior.jpg" alt="Suds 'n Scissors facility at night"/></Reveal>
          <Reveal className="boarding-photo-copy" delay={150}>
            <div className="boarding-photo-copy__title">
              <p className="eyebrow">A home base made for dogs</p>
              <h2>Come see it for yourself.</h2>
            </div>
            <div className="boarding-photo-copy__body">
              <p>Questions about routines, medications, food, behavior, or special needs? Call before booking and the team can talk through the best fit for your dog.</p>
              <a className="btn btn--dark" href={business.phoneHref}>Talk with the team</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
