import { CalendarDays, DoorOpen, Fence, Heart, ShieldCheck, Snowflake, Sparkles, Trees } from 'lucide-react'
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

export default function Boarding() {
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
