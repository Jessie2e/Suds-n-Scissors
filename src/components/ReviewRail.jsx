import { Star, ArrowUpRight } from 'lucide-react'
import FacebookIcon from './FacebookIcon'
import {
  business,
  facebookReviews,
  googleReviews,
  reviewSummary,
} from '../data'

export default function ReviewRail({ compact = false }) {
  const reviews = [
    ...(googleReviews || []),
    ...(facebookReviews || []),
  ]

  if (!reviews.length) return null

  return (
    <div
      className={`review-rail-wrap ${
        compact ? 'review-rail-wrap--compact' : ''
      }`}
    >
      <div className="review-rail-heading">
        <div>
          <p className="eyebrow eyebrow--gold">
            Kind words from Google + Facebook
          </p>

          <h3>Happy pups. Happy people.</h3>

          {reviewSummary && (
            <p className="review-rail-summary">
              {reviewSummary}
            </p>
          )}
        </div>

        <div className="review-rail-links">
          <a
            href={business.googleReviews}
            target="_blank"
            rel="noreferrer"
          >
            <Star size={16} />
            Google
            <ArrowUpRight size={14} />
          </a>

          <a
            href={business.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon size={17} />
            Facebook
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <div
        className="review-rail"
        aria-label="Selected Google and Facebook reviews"
      >
        {reviews.map((review, index) => (
          <article
            className="review-quote-card"
            key={`${review.name}-${index}`}
          >
            <div
              className="review-quote-stars"
              aria-label="5 stars"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  fill="currentColor"
                />
              ))}
            </div>

            <blockquote>
              “{review.quote}”
            </blockquote>

            <footer>
              {review.url ? (
                <a
                  className="review-author-link"
                  href={review.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>{review.name}</strong>
                  <ArrowUpRight size={13} />
                </a>
              ) : (
                <strong>{review.name}</strong>
              )}

              {review.detail && (
                <span>{review.detail}</span>
              )}
            </footer>
          </article>
        ))}
      </div>
    </div>
  )
}