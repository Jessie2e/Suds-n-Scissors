import { useMemo, useState } from 'react'
import { ArrowRight, CalendarDays, Check, Droplets, Info, Palette, Sparkles, WandSparkles } from 'lucide-react'
import Reveal from '../components/Reveal'
import { addOns, business, groomingServices, includedServices, weightGroups } from '../data'

export default function Pricing() {
  const [weight, setWeight] = useState('small')
  const selected = useMemo(() => weightGroups.find((group) => group.id === weight), [weight])

  return (
    <>
      <section className="page-hero page-hero--pricing">
        <div className="shell pricing-hero__grid">
          <Reveal className="pricing-hero__copy">
            <p className="eyebrow eyebrow--gold">Straightforward grooming prices</p>
            <h1>Pick the pup.<br/><em>See the price.</em></h1>
            <p>Select your dog’s weight range to compare all three core grooming packages — and preview the pup size while you browse.</p>
          </Reveal>

          <Reveal className="pricing-hero__visual" delay={110}>
            <div className="pricing-hero-blob" key={selected.id}>
              <div className="pricing-hero-blob__shadow" aria-hidden="true" />
              <div className="pricing-hero-blob__shape">
                <img src={selected.image} alt={`${selected.label} dog example`} />
              </div>
              <div className="pricing-hero-blob__meta">
                <span>Selected pup size</span>
                <strong>{selected.label}</strong>
                <small>{selected.range}</small>
              </div>
              <div className="pricing-hero-blob__doodle pricing-hero-blob__doodle--green" aria-hidden="true" />
              <div className="pricing-hero-blob__dots" aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <div className="pricing-hero-blob__swirl" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream pricing-tool">
        <div className="shell">
          <Reveal className="weight-picker-wrap">
            <p className="weight-picker__label">My dog weighs…</p>
            <div className="weight-picker" role="radiogroup" aria-label="Dog weight range">
              {weightGroups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  className={weight === group.id ? 'is-active' : ''}
                  onClick={() => setWeight(group.id)}
                  role="radio"
                  aria-checked={weight === group.id}
                >
                  <strong>{group.label}</strong>
                  <span>{group.range}</span>
                </button>
              ))}
            </div>
          </Reveal>

          <div className="price-card-grid">
            {groomingServices.map((service, i) => (
              <Reveal key={service.name} delay={i * 70}>
                <article className={`price-card ${i === 2 ? 'price-card--feature' : ''}`}>
                  {i === 2 && <div className="price-card__ribbon"><Sparkles size={15}/> full glow-up</div>}
                  <p className="eyebrow">{service.eyebrow}</p>
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                  <div className="price-card__price">
                    <span>{selected.label} · {selected.range}</span>
                    <strong>{service.prices[weight]}</strong>
                  </div>
                  <a className="btn btn--dark btn--full" href={business.phoneHref}><CalendarDays size={17}/> Book this service</a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="price-note">
            <Info />
            <div>
              <strong>“Oodles” + $5 or more</strong>
              <p>Because Poodle-mix coat types often require extra product, brushing, drying, and grooming time, all grooming services for “Oodles” are $5+ additional.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--white included-section">
        <div className="shell included-grid">
          <Reveal>
            <p className="eyebrow">The good stuff is included</p>
            <h2>Every core service includes:</h2>
            <div className="included-list">
              {includedServices.map((item) => <span key={item}><Check size={17}/>{item}</span>)}
            </div>
          </Reveal>
          <Reveal className="pricing-sign-card" delay={100}>
            <img src="/assets/pricing-sign.jpg" alt="Suds 'n Scissors in-store grooming price board"/>
            <p>Original in-store pricing board</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream specialty-pricing" id="extras">
        <div className="shell">
          <Reveal className="section-heading section-heading--split specialty-pricing__heading">
            <div>
              <p className="eyebrow">Specialty care + extras</p>
              <h2>The useful stuff.<br/><em>And the fun stuff.</em></h2>
            </div>
            <p>Add a little polish, practical care, or personality to a grooming appointment. Current options can vary, so ask when you book.</p>
          </Reveal>

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

          <Reveal className="specialty-cta specialty-pricing__cta">
            <div>
              <p className="eyebrow">Not sure what to add?</p>
              <h2>Tell us about your pup.</h2>
              <p>The team can help match extras to coat needs, comfort, and the look you’re going for.</p>
            </div>
            <a className="btn btn--dark" href={business.phoneHref}>Ask about current options <ArrowRight size={18}/></a>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark price-disclaimer">
        <div className="shell price-disclaimer__inner">
          <div>
            <p className="eyebrow eyebrow--gold">One more thing</p>
            <h2>Coats have personalities too.</h2>
          </div>
          <p>Final pricing may change based on coat condition, skin condition, grooming behavior, and the time or product needed to safely achieve the best result. Call or message if you’re unsure which service fits your pup.</p>
        </div>
      </section>
    </>
  )
}
