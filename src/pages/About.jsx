import { useRef } from 'react'
import { ArrowRight, ChevronLeft, ChevronRight, Heart, Newspaper, Scissors, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'
import { groomers } from '../data'

const shopMoments = [
  {
    src: '/assets/ownerandgroomer3.jpg',
    alt: "Kennedy and Bri together inside Suds 'n Scissors",
    label: 'Behind the salon',
    orientation: 'landscape',
  },
  {
    src: '/assets/workers.jpg',
    alt: 'Kennedy and Bri working together in the salon',
    label: 'Working side by side',
    orientation: 'portrait',
  },
  {
    src: '/assets/ownerandgroomer1.jpg',
    alt: "Kennedy and Bri at Suds 'n Scissors",
    label: 'The faces behind the shears',
    orientation: 'landscape',
  },
  {
    src: '/assets/ownerandgroomer.jpg',
    alt: 'Kennedy and Bri together at the shop',
    label: 'A team built on care',
    orientation: 'landscape',
  },
  {
    src: '/assets/working.jpg',
    alt: "A candid moment inside Suds 'n Scissors",
    label: 'A day at Suds',
    orientation: 'landscape',
  },
]

const kennedyMobilePhotos = [
  {
    src: '/assets/OwnerKennedy.jpg',
    alt: "Kennedy Cudnohufsky at Suds 'n Scissors",
    label: 'Kennedy',
    orientation: 'portrait',
  },
  {
    src: '/assets/brunodog-kennedy.jpg',
    alt: 'A dog groomed by Kennedy',
    label: 'Groomed by Kennedy',
    orientation: 'square',
  },
  {
    src: '/assets/working.jpg',
    alt: "Kennedy working behind the desk at Suds 'n Scissors",
    label: 'Built from the ground up',
    orientation: 'landscape',
  },
]

const briMobilePhotos = [
  {
    src: '/assets/BriConeGroomer.jpg',
    alt: "Brianne Bri Cone at Suds 'n Scissors",
    label: 'Bri',
    orientation: 'portrait',
  },
  {
    src: '/assets/CaneloDog-Bri.jpg',
    alt: 'A dog groomed by Bri',
    label: 'Groomed by Bri',
    orientation: 'square',
  },
]

function Bio({ text }) {
  return (
    <div className="about-bio">
      {text.split('\n\n').map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
  )
}

function CompactBio({ text, name, signature }) {
  const paragraphs = text.split('\n\n').filter(Boolean)
  const [first, ...rest] = paragraphs

  return (
    <div className="compact-story__bio">
      {first && <p className="compact-story__preview">{first}</p>}
      {rest.length > 0 && (
        <details className="compact-story__details">
          <summary>
            <span>Read {name}’s full story</span>
            <span className="compact-story__details-icon" aria-hidden="true">+</span>
          </summary>
          <div className="compact-story__details-body">
            {rest.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {signature && <div className="compact-story__signature">{signature} <Sparkles size={16}/></div>}
          </div>
        </details>
      )}
    </div>
  )
}

function CompactGallery({ photos, ariaLabel }) {
  const trackRef = useRef(null)

  const scrollGallery = (direction) => {
    const track = trackRef.current
    if (!track) return
    track.scrollBy({
      left: direction * track.clientWidth,
      behavior: 'smooth',
    })
  }

  return (
    <div className="compact-gallery">
      <div className="compact-gallery__toolbar">
        <span>Swipe photos</span>
        <div className="compact-gallery__controls" aria-label={`${ariaLabel} controls`}>
          <button type="button" onClick={() => scrollGallery(-1)} aria-label="Previous photo"><ChevronLeft size={18}/></button>
          <button type="button" onClick={() => scrollGallery(1)} aria-label="Next photo"><ChevronRight size={18}/></button>
        </div>
      </div>
      <div className="compact-gallery__track" ref={trackRef} aria-label={ariaLabel}>
        {photos.map((photo) => (
          <figure className={`compact-gallery__card compact-gallery__card--${photo.orientation}`} key={photo.src}>
            <img src={photo.src} alt={photo.alt} />
            <figcaption>{photo.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  const kennedy = groomers.find((groomer) => groomer.name.startsWith('Kennedy'))
  const bri = groomers.find((groomer) => groomer.name.startsWith('Brianne'))
  const carouselRef = useRef(null)

  const scrollMoments = (direction) => {
    const track = carouselRef.current
    if (!track) return

    track.scrollBy({
      left: direction * Math.min(track.clientWidth * 0.82, 760),
      behavior: 'smooth',
    })
  }

  return (
    <>
      <section className="about-showcase">
        <div className="shell about-showcase__grid">
          <Reveal className="about-showcase__copy">
            <p className="eyebrow eyebrow--gold">The people behind the paws</p>
            <h1>Built with heart.<br/><em>Groomed with care.</em></h1>
            <p className="about-showcase__lead">Suds ’n Scissors started with one groomer, one big dream, and a simple belief: dogs deserve to feel safe, understood, and genuinely cared for while they’re here.</p>
            <div className="about-showcase__note">
              <Heart size={18} />
              <span>Locally built. Family loved. Dog obsessed.</span>
            </div>
          </Reveal>

          <Reveal className="about-showcase__visual" delay={100}>
            <div className="about-showcase__main-photo">
              <img src="/assets/ownerandgroomer2.jpg" alt="Kennedy and Bri together at Suds 'n Scissors" />
              <div className="about-showcase__caption">
                <span>Meet the team</span>
                <strong>Kennedy + Bri</strong>
              </div>
            </div>
            <span className="about-showcase__sparkle about-showcase__sparkle--one">✦</span>
            <span className="about-showcase__sparkle about-showcase__sparkle--two">✦</span>
          </Reveal>
        </div>
      </section>

      <section className="section section--white founder-story">
        <div className="story-desktop shell founder-story__grid">
          <Reveal className="founder-story__media">
            <div className="founder-story__portrait">
              <img src="/assets/OwnerKennedy.jpg" alt="Kennedy Cudnohufsky at Suds 'n Scissors" />
            </div>
            <div className="founder-story__dog">
              <img src="/assets/brunodog-kennedy.jpg" alt="A dog groomed by Kennedy" />
              <span><Scissors size={14}/> Groomed by Kennedy</span>
            </div>
            <div className="founder-story__inset">
              <img src="/assets/working.jpg" alt="Kennedy working behind the desk at Suds 'n Scissors" />
              <span>Built from the ground up</span>
            </div>
          </Reveal>

          <Reveal className="founder-story__copy" delay={90}>
            <p className="eyebrow">Owner story</p>
            <h2>Kennedy Cudnohufsky</h2>
            <div className="founder-story__meta">
              <span>Owner + Groomer</span>
              <span>Almost 6 years grooming professionally</span>
            </div>
            <div className="founder-story__quote">
              “This salon truly holds a huge piece of my heart.”
            </div>
            <Bio text={kennedy.bio} />
          </Reveal>
        </div>

        <div className="compact-story shell">
          <Reveal>
            <p className="eyebrow">Owner story</p>
            <div className="compact-story__title-row">
              <h2>Kennedy Cudnohufsky</h2>
              <span className="compact-story__role">Owner + Groomer</span>
            </div>
            <p className="compact-story__quote">“This salon truly holds a huge piece of my heart.”</p>
          </Reveal>
          <Reveal delay={60}>
            <CompactGallery photos={kennedyMobilePhotos} ariaLabel="Kennedy photo gallery" />
          </Reveal>
          <Reveal delay={90}>
            <CompactBio text={kennedy.bio} name="Kennedy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--cream bri-story">
        <div className="story-desktop shell bri-story__grid">
          <Reveal className="bri-story__copy">
            <p className="eyebrow">Meet Bri</p>
            <h2>Brianne “Bri” Cone</h2>
            <div className="founder-story__meta">
              <span>Groomer</span>
              <span>14 years grooming experience</span>
            </div>
            <p className="bri-story__intro">Creative, experienced, endlessly patient — and always up for a little flair.</p>
            <Bio text={bri.bio} />
            <div className="bri-story__signature">Don’t dream it, be it. <Sparkles size={18}/></div>
          </Reveal>

          <Reveal className="bri-story__media" delay={100}>
            <div className="bri-story__portrait">
              <img src="/assets/BriConeGroomer.jpg" alt="Brianne Bri Cone at Suds 'n Scissors" />
            </div>
            <div className="bri-story__dog">
              <img src="/assets/CaneloDog-Bri.jpg" alt="A dog groomed by Bri" />
              <span><Scissors size={14}/> Groomed by Bri</span>
            </div>
          </Reveal>
        </div>

        <div className="compact-story shell">
          <Reveal>
            <p className="eyebrow">Meet Bri</p>
            <div className="compact-story__title-row">
              <h2>Brianne “Bri” Cone</h2>
              <span className="compact-story__role">Groomer · 14 years</span>
            </div>
            <p className="compact-story__intro">Creative, experienced, endlessly patient — and always up for a little flair.</p>
          </Reveal>
          <Reveal delay={60}>
            <CompactGallery photos={briMobilePhotos} ariaLabel="Bri photo gallery" />
          </Reveal>
          <Reveal delay={90}>
            <CompactBio text={bri.bio} name="Bri" signature="Don’t dream it, be it." />
          </Reveal>
        </div>
      </section>

      <section className="section section--dark team-in-action">
        <div className="shell">
          <Reveal className="team-in-action__heading">
            <div>
              <p className="eyebrow eyebrow--gold">Better together</p>
              <h2>Two groomers. One shared standard of care.</h2>
            </div>
            <div className="team-in-action__side">
              <p>Kennedy and Bri bring different experience, style, and strengths to the table — but the goal stays the same: meet each dog where they are and make the visit as positive as possible.</p>
              <div className="team-carousel__controls" aria-label="Shop photo carousel controls">
                <button type="button" onClick={() => scrollMoments(-1)} aria-label="Previous shop photos"><ChevronLeft size={21}/></button>
                <button type="button" onClick={() => scrollMoments(1)} aria-label="Next shop photos"><ChevronRight size={21}/></button>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="team-carousel" delay={80}>
          <div className="team-carousel__track" ref={carouselRef}>
            {shopMoments.map((photo) => (
              <figure className={`team-carousel__slide team-carousel__slide--${photo.orientation}`} key={photo.src}>
                <img src={photo.src} alt={photo.alt} />
                <figcaption>{photo.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="team-carousel__hint">Drag to explore the shop <span>→</span></div>
        </Reveal>
      </section>

      <section className="section section--forest about-values">
        <div className="shell about-values__grid">
          <Reveal>
            <p className="eyebrow eyebrow--gold">The philosophy</p>
            <h2>Work with the dog in front of you.</h2>
            <p>Suds ’n Scissors is set up to work with dogs who may need more patience, more space, or a little extra thought — including anxious dogs and dogs with behavioral challenges, as long as the visit can be completed safely.</p>
          </Reveal>
          <div className="about-values__cards">
            <Reveal delay={50}><div><Heart/><h3>Comfort</h3><p>Care that respects the dog’s stress level, mobility, and individual needs.</p></div></Reveal>
            <Reveal delay={100}><div><Sparkles/><h3>Quality</h3><p>Thoughtful grooming with an eye for coat health, finish, and the details.</p></div></Reveal>
            <Reveal delay={150}><div><Scissors/><h3>Experience</h3><p>Complementary skills, creative instincts, and years of hands-on grooming.</p></div></Reveal>
          </div>
        </div>
      </section>

      <section className="section section--white about-press">
        <div className="shell press__grid">
          <Reveal className="press__image"><img src="/assets/cullmantribunearticle.jpeg" alt="Cullman Tribune article about Suds 'n Scissors"/></Reveal>
          <Reveal className="press__copy" delay={100}>
            <p className="eyebrow">As featured locally</p>
            <h2>From one groomer to a growing team.</h2>
            <p>The Cullman Tribune covered the opening of the expanded facility and the team behind it in August 2026.</p>
            <a className="btn btn--dark" href="https://www.cullmantribune.com/2026/08/22/suds-n-scissors-expands-with-new-grooming-boarding-facility/" target="_blank" rel="noreferrer"><Newspaper size={18}/> Read the story <ArrowRight size={18}/></a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
