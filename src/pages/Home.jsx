import { Link } from 'react-router-dom'
import { CalendarDays, Phone, House, Heart, ShieldCheck, MapPin, ArrowRight, PawPrint, Newspaper, Scissors } from 'lucide-react'
import FacebookIcon from '../components/FacebookIcon'
import Bubbles from '../components/Bubbles'
import Reveal from '../components/Reveal'
import BeforeAfter from '../components/BeforeAfter'
import ReviewRail from '../components/ReviewRail'
import { business } from '../data'

const heroDogs = ['dog3.jpg', 'dog5.jpg', 'dog1.jpg']

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__content shell">
          <Reveal className="hero__copy">
            <p className="eyebrow eyebrow--gold">Grooming + boarding in Cullman, Alabama</p>
            <h1>Fresh cuts.<br/>Happy pups.<br/><em>Sleepovers too.</em><span className="hand-heart">♡</span></h1>
            <p className="hero__lead">Thoughtful, lower-stress grooming and private boarding in a beautiful space built around comfort, safety, and dogs being dogs.</p>
            <div className="hero__buttons">
              <a className="btn btn--gold" href={business.phoneHref}><CalendarDays size={18}/> Book a groom</a>
              <a className="btn btn--outline" href={business.phoneHref}><Phone size={18}/> {business.phoneDisplay}</a>
            </div>
            <div className="hero__trust">
              <span><Scissors/> Skilled grooming</span>
              <span><Heart/> One-on-one care</span>
              <span><ShieldCheck/> Private boarding</span>
            </div>
          </Reveal>

          <Reveal className="hero__visual" delay={120}>
            <div className="hero__frame hero__frame--rotating">
              {heroDogs.map((img, i) => (
                <img
                  key={img}
                  className={`hero__slide hero__slide--${i + 1}`}
                  src={`/assets/${img}`}
                  alt={i === 0 ? "Freshly groomed dog at Suds 'n Scissors" : ''}
                  aria-hidden={i !== 0}
                />
              ))}
              <div className="hero__frame-note">Good dogs.<br/>Brighter days. ♡</div>
            </div>
            <div className="hero__badge"><PawPrint/> one-on-one care</div>
          </Reveal>
        </div>
        <div className="hero__marquee" aria-hidden="true">
          <div>GROOM <span>•</span> BOARD <span>•</span> BELONG <span>•</span> GROOM <span>•</span> BOARD <span>•</span> BELONG <span>•</span></div>
        </div>
      </section>

      <section className="services section section--cream">
        <Bubbles />
        <div className="shell services__inner">
          <Reveal className="section-heading section-heading--center">
            <p className="eyebrow">Pamper · play · stay</p>
            <h2>Our Services</h2>
            <p>Choose the care your pup needs — from a simple suds-up to a full transformation or a cozy overnight stay.</p>
          </Reveal>
          <div className="service-grid">
            <Reveal delay={40}>
              <Link to="/pricing" className="service-card">
                <div className="service-card__icon"><span>✂</span></div>
                <h3>Grooming</h3>
                <p>Baths, tidy-ups, full grooms, and finishing touches tailored to your pup’s coat and comfort.</p>
                <span className="text-link">See grooming prices <ArrowRight size={17}/></span>
              </Link>
            </Reveal>
            <Reveal delay={100}>
              <Link to="/boarding" className="service-card service-card--green">
                <div className="service-card__icon"><House/></div>
                <h3>Boarding</h3>
                <p>Private spaces, individual outdoor runs, and thoughtful care without mixing unrelated dogs.</p>
                <span className="text-link">Explore boarding <ArrowRight size={17}/></span>
              </Link>
            </Reveal>
            <Reveal delay={160}>
              <Link to="/pricing#extras" className="service-card">
                <div className="service-card__icon"><PawPrint/></div>
                <h3>Specialty Care</h3>
                <p>Seasonal scents, paw care, creative finishing details, and extras for a little more polish.</p>
                <span className="text-link">See the extras <ArrowRight size={17}/></span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="facility section section--dark">
        <div className="shell facility__grid">
          <Reveal className="facility__copy">
            <p className="eyebrow eyebrow--gold">Built for happier visits</p>
            <h2>A beautiful space.<br/><em>Made for dogs.</em></h2>
            <p>The expanded Suds ’n Scissors facility is designed for calmer, more comfortable care — with walk-in tubs, open grooming space, and thoughtful setups for dogs who need a little extra patience.</p>
            <div className="facility__facts">
              <span><ShieldCheck/> Safety-first setup</span>
              <span><Heart/> Lower-stress grooming</span>
              <span><House/> Private boarding spaces</span>
            </div>
            <Link className="btn btn--outline-gold" to="/about">Meet the team <ArrowRight size={18}/></Link>
          </Reveal>
          <Reveal className="facility__media" delay={120}>
            <div className="facility__photo facility__photo--primary"><img src="/assets/dogbath1.jpg" alt="Dog being bathed at Suds 'n Scissors"/></div>
            <div className="facility__photo facility__photo--secondary"><img src="/assets/dogbath.jpg" alt="Bath time at Suds 'n Scissors"/></div>
          </Reveal>
        </div>
      </section>

      <section className="section section--white transformations section--bubbly">
        <Bubbles />
        <div className="shell section--bubbly__content">
          <Reveal className="section-heading section-heading--split">
            <div>
              <p className="eyebrow">Fresh pups · big smiles</p>
              <h2>A little groom magic.</h2>
            </div>
            <p>Drag the gold line to see a couple of glow-ups from the grooming table.</p>
          </Reveal>
          <div className="before-grid">
            <Reveal><BeforeAfter before="/assets/dogbefore1.jpg" after="/assets/dogafter1.jpg" /></Reveal>
            <Reveal delay={100}><BeforeAfter before="/assets/dogbath2.jpg" after="/assets/dogbath2after.jpg" beforeLabel="Bath time" afterLabel="Finished" /></Reveal>
          </div>
        </div>
      </section>

      <section className="location-band">
        <div className="shell location-band__grid">
          <Reveal className="location-band__photo location-band__video">
            <video src="/assets/facility-tour.mp4" poster="/assets/facility-tour-poster.jpg" autoPlay muted loop playsInline controls={false} />
            <span>Take a look around</span>
          </Reveal>
          <Reveal className="location-band__copy" delay={120}>
            <p className="eyebrow eyebrow--gold">Visit us in Cullman ♡</p>
            <h2>Easy to find.<br/><em>Hard to leave.</em></h2>
            <p>Come see the new space and meet the team. Call or message to plan your pup’s next grooming appointment or boarding stay.</p>
            <a className="location-row" href={business.mapsHref} target="_blank" rel="noreferrer"><MapPin/> <span>{business.address}</span></a>
            <a className="location-row" href={business.phoneHref}><Phone/> <span>{business.phoneDisplay}</span></a>
            <a className="location-row" href={business.facebook} target="_blank" rel="noreferrer"><FacebookIcon/> <span>Message us on Facebook</span></a>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream happy-faces section--bubbly">
        <Bubbles />
        <div className="shell section--bubbly__content">
          <Reveal className="section-heading section-heading--center">
            <p className="eyebrow">Real dogs. Real personality.</p>
            <h2>A Few Happy Faces <span className="script-heart">♡</span></h2>
          </Reveal>
          <div className="face-strip">
            {['bella-dog.jpg','charlie-dog.jpg','crimson-dog.jpg','dog6.jpg'].map((img, i) => (
              <Reveal delay={i * 60} key={img}><Link to="/gallery"><img src={`/assets/${img}`} alt="Suds 'n Scissors grooming client" /></Link></Reveal>
            ))}
          </div>
          <Reveal className="center-cta"><Link className="btn btn--dark" to="/gallery">See the gallery <ArrowRight size={18}/></Link></Reveal>
        </div>
      </section>

      <section className="section section--forest family family--combined">
        <div className="shell family__shell">
          <div className="family__grid">
          <Reveal className="family__copy">
            <p className="eyebrow eyebrow--gold">More than grooming</p>
            <h2>We’re a family for their paws.</h2>
            <p>Personal, one-on-one care is still the heart of everything here — just with more room to groom, board, and help dogs feel at ease.</p>
            <div className="family__feature">
              <Newspaper size={21}/>
              <div>
                <strong>Featured in The Cullman Tribune</strong>
                <span>The expanded facility and team were featured in August 2026.</span>
              </div>
              <a href="https://www.cullmantribune.com/2026/08/22/suds-n-scissors-expands-with-new-grooming-boarding-facility/" target="_blank" rel="noreferrer">Read <ArrowRight size={15}/></a>
            </div>
            <Link className="text-link text-link--light" to="/about">Meet the groomers <ArrowRight size={17}/></Link>
          </Reveal>
          <div className="value-grid">
            <Reveal delay={40}><div className="value-card"><Scissors/><h3>Experienced care</h3><p>Skilled grooming shaped around coat, comfort, and personality.</p></div></Reveal>
            <Reveal delay={100}><div className="value-card"><Heart/><h3>Stress-aware visits</h3><p>A calmer approach built around the dog in front of us.</p></div></Reveal>
            <Reveal delay={160}><div className="value-card"><ShieldCheck/><h3>Safe boarding</h3><p>Private spaces, controlled outdoor access, and thoughtful separation.</p></div></Reveal>
          </div>
          </div>
          <ReviewRail compact />
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta__inner">
          <Reveal>
            <p className="eyebrow eyebrow--gold">Ready when your pup is</p>
            <h2>Good dogs deserve brighter days.</h2>
            <div className="hero__buttons hero__buttons--center">
              <a className="btn btn--gold" href={business.phoneHref}><CalendarDays size={18}/> Book now</a>
              <a className="btn btn--outline" href={business.facebook} target="_blank" rel="noreferrer"><FacebookIcon size={18}/> Message us</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
