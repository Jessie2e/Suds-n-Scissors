import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import FacebookIcon from '../components/FacebookIcon'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import { business, galleryImages } from '../data'

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <section className="page-hero page-hero--gallery">
        <div className="shell page-hero__inner">
          <Reveal>
            <p className="eyebrow eyebrow--gold">Fresh cuts + familiar faces</p>
            <h1>Proof that clean dogs<br/><em>have more fun.</em></h1>
            <p>A few pups, transformations, bath-time moments, and one extremely photogenic bunny.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream gallery-page">
        <div className="shell">
          <div className="masonry-grid">
            {galleryImages.map((item, i) => (
              <Reveal key={`${item.src}-${i}`} delay={(i % 4) * 45}>
                <button className={`gallery-tile gallery-tile--${(i % 4) + 1}`} onClick={() => setSelected(item.src)}>
                  <img src={item.src} alt={item.name ? `${item.name} at Suds 'n Scissors` : "Suds 'n Scissors grooming client"} loading="lazy" />
                  <span className="gallery-view">View <ArrowUpRight size={15}/></span>
                  {item.name && <strong className="gallery-name">{item.name}</strong>}
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark social-feed">
        <div className="shell social-feed__grid">
          <Reveal>
            <p className="eyebrow eyebrow--gold">Fresh from Facebook</p>
            <h2>More dogs. More videos.<br/><em>More personality.</em></h2>
            <p>The gallery above uses photos stored directly on this site. The live Facebook feed here is separate, so new posts can keep rolling in between site updates.</p>
            <a className="btn btn--outline-gold" href={business.facebook} target="_blank" rel="noreferrer"><FacebookIcon size={18}/> Open Facebook</a>
          </Reveal>
          <Reveal className="facebook-embed" delay={100}>
            <iframe
              title="Suds 'n Scissors Facebook feed"
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsudsnscissorsllc&tabs=timeline&width=500&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
              width="500"
              height="640"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </Reveal>
        </div>
      </section>

      <Lightbox src={selected} onClose={() => setSelected(null)} />
    </>
  )
}
