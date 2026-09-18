import { ArrowRight, Heart, Newspaper, Scissors, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'
import { groomers } from '../data'

export default function About() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="shell page-hero__inner">
          <Reveal>
            <p className="eyebrow eyebrow--gold">Meet your groomers</p>
            <h1>People who love dogs.<br/><em>And know their coats.</em></h1>
            <p>A growing team with different strengths, one-on-one experience, and a shared goal: make the visit feel better for the dog.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream team-section">
        <div className="shell">
          <Reveal className="section-heading section-heading--center">
            <p className="eyebrow">The hands behind the happy faces</p>
            <h2>Meet the Suds ’n Scissors team.</h2>
          </Reveal>
          <div className="team-grid">
            {groomers.map((groomer, i) => (
              <Reveal key={groomer.name} delay={i * 70}>
                <article className="team-card">
                  <div className="team-card__image">
                    <img src={groomer.image} alt="Recent groom at Suds 'n Scissors" />
                    <span><Scissors size={15}/> Recent shop groom</span>
                  </div>
                  <div className="team-card__copy">
                    <p className="eyebrow">{groomer.role}</p>
                    <h2>{groomer.name}</h2>
                    <strong>{groomer.years}</strong>
                    <p>{groomer.bio}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
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
            <Reveal delay={150}><div><Scissors/><h3>Experience</h3><p>A team with complementary skills, creative instincts, and years of hands-on grooming.</p></div></Reveal>
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
