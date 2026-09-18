import { ArrowRight, Droplets, Palette, Sparkles, WandSparkles } from 'lucide-react'
import Reveal from '../components/Reveal'
import { addOns, business } from '../data'

export default function Specialty() {
  return (
    <>
      <section className="page-hero page-hero--specialty">
        <div className="shell page-hero__inner">
          <Reveal>
            <p className="eyebrow eyebrow--gold">Finishing touches + specialty care</p>
            <h1>The fun stuff.<br/><em>And the useful stuff.</em></h1>
            <p>Seasonal scents, paw care, creative finishes, and grooming extras that can be added based on what your pup needs.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream specialty-cards">
        <div className="shell">
          <div className="specialty-grid">
            <Reveal>
              <article className="specialty-card specialty-card--dark">
                <Droplets/>
                <p className="eyebrow eyebrow--gold">Seasonal</p>
                <h2>Rotating scents + spa touches</h2>
                <p>Ask what’s in season when you book. Seasonal finishing options can change throughout the year.</p>
              </article>
            </Reveal>
            <Reveal delay={80}>
              <article className="specialty-card">
                <Palette/>
                <p className="eyebrow">Creative finish</p>
                <h2>A little extra personality</h2>
                <p>Bows, decorative gems, nail polish, temporary color, and other playful finishing details.</p>
              </article>
            </Reveal>
            <Reveal delay={160}>
              <article className="specialty-card specialty-card--green">
                <WandSparkles/>
                <p className="eyebrow eyebrow--gold">Care extras</p>
                <h2>Practical little upgrades</h2>
                <p>Teeth cleaning, nail grinding, paw balm, finishing fragrance, and other add-ons available by request.</p>
              </article>
            </Reveal>
          </div>

          <Reveal className="addon-cloud">
            {addOns.map((item) => <span key={item}><Sparkles size={15}/>{item}</span>)}
          </Reveal>

          <Reveal className="specialty-cta">
            <div>
              <p className="eyebrow">Not sure what to add?</p>
              <h2>Tell us about your pup.</h2>
              <p>The team can help match extras to coat needs, comfort, and the look you’re going for.</p>
            </div>
            <a className="btn btn--dark" href={business.phoneHref}>Ask about current options <ArrowRight size={18}/></a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
