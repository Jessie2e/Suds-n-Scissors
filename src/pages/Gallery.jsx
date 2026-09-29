import { useState } from 'react'
import {
  ArrowUpRight,
  PawPrint,
  Scissors,
} from 'lucide-react'
import FacebookIcon from '../components/FacebookIcon'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import { business, galleryImages } from '../data'

const groomerFilters = [
  { label: 'All', value: 'all' },
  { label: 'Kennedy', value: 'Kennedy' },
  { label: 'Bri', value: 'Bri' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const [activeGroomer, setActiveGroomer] = useState('all')

  const facebookFeature = galleryImages[0]

  const filteredImages =
    activeGroomer === 'all'
      ? galleryImages
      : galleryImages.filter(
          (item) => item.groomer === activeGroomer
        )

  return (
    <>
      <section className="page-hero page-hero--gallery">
        <div className="shell page-hero__inner">
          <Reveal>
            <p className="eyebrow eyebrow--gold">
              Fresh cuts + familiar faces
            </p>

            <h1>
              Proof that clean dogs
              <br />
              <em>have more fun.</em>
            </h1>

            <p>
              A few pups, transformations, bath-time moments,
              and one extremely photogenic bunny.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream gallery-page">
        <div className="shell">

          <div className="gallery-filter">
            <span className="gallery-filter__label">
              See grooms by
            </span>

            <div className="gallery-filter__buttons">
              {groomerFilters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={
                    activeGroomer === filter.value
                      ? 'gallery-filter__button is-active'
                      : 'gallery-filter__button'
                  }
                  onClick={() =>
                    setActiveGroomer(filter.value)
                  }
                  aria-pressed={
                    activeGroomer === filter.value
                  }
                >
                  {filter.value !== 'all' && (
                    <Scissors size={14} />
                  )}

                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="masonry-grid">
            {filteredImages.map((item, i) => (
              <Reveal
                key={item.src}
                delay={(i % 4) * 45}
              >
                <button
                  className={`gallery-tile gallery-tile--${(i % 4) + 1}`}
                  onClick={() => setSelected(item.src)}
                >
                  <img
                    src={item.src}
                    alt={
                      item.name &&
                      item.name !== 'name unknown'
                        ? `${item.name} at Suds 'n Scissors`
                        : "Suds 'n Scissors grooming client"
                    }
                    loading="lazy"
                  />

                  <span className="gallery-view">
                    View <ArrowUpRight size={15} />
                  </span>

                  <div className="gallery-tags">
                    <strong className="gallery-name">
                      <PawPrint
                        size={17}
                        strokeWidth={2}
                      />
                      {item.name || 'name unknown'}
                    </strong>

                    {item.groomer && (
                      <span className="gallery-groomer">
                        <Scissors
                          size={14}
                          strokeWidth={2}
                        />
                        {item.groomer}
                      </span>
                    )}
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="gallery-empty">
              <Scissors size={24} />

              <p>
                No grooms have been added for this groomer yet.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="section section--dark social-feed">
        <div className="shell social-feed__grid">

          <Reveal>
            <p className="eyebrow eyebrow--gold">
              Follow along on Facebook
            </p>

            <h2>
              The newest faces
              <br />
              <em>show up there first.</em>
            </h2>

            <p>
              Fresh grooms, happy pups, behind-the-scenes moments,
              and plenty of personality. Follow Suds 'n Scissors on
              Facebook to see what has been happening in the shop lately.
            </p>

            <a
              className="btn btn--outline-gold"
              href={business.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon size={18} />
              Visit Facebook
              <ArrowUpRight size={15} />
            </a>
          </Reveal>

          {facebookFeature && (
            <Reveal
              className="facebook-feature"
              delay={100}
            >
              <a
                className="facebook-feature__link"
                href={business.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Suds 'n Scissors on Facebook"
              >
                <img
                  src={facebookFeature.src}
                  alt={
                    facebookFeature.name &&
                    facebookFeature.name !== 'name unknown'
                      ? `${facebookFeature.name} at Suds 'n Scissors`
                      : "Suds 'n Scissors grooming client"
                  }
                />

                <div className="facebook-feature__shade" />

                <div className="facebook-feature__top">
                  <FacebookIcon size={18} />
                  <span>Suds 'n Scissors</span>
                </div>

                <div className="facebook-feature__bottom">
                  <div>
                    <span>SEE WHAT'S NEW</span>
                    <strong>Fresh from the shop</strong>
                  </div>

                  <span className="facebook-feature__arrow">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </a>
            </Reveal>
          )}

        </div>
      </section>

      <Lightbox
        src={selected}
        onClose={() => setSelected(null)}
      />
    </>
  )
}