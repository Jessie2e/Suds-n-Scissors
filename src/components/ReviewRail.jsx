import { Star, ArrowUpRight } from 'lucide-react'
import FacebookIcon from './FacebookIcon'
import { business, facebookReviews, facebookReviewSummary } from '../data'

export default function ReviewRail({ compact = false }) {
  if (!facebookReviews?.length) return null

  return (
    <div className={`review-rail-wrap ${compact ? 'review-rail-wrap--compact' : ''}`}>
      <div className="review-rail-heading">
        <div>
          <p className="eyebrow eyebrow--gold">Kind words from Facebook</p>
          <h3>Happy pups. Happy people.</h3>
          {facebookReviewSummary && <p className="review-rail-summary">{facebookReviewSummary}</p>}
        </div>
        <a href={business.facebook} target="_blank" rel="noreferrer">
          <FacebookIcon size={17} /> See more <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="review-rail" aria-label="Selected Facebook reviews">
        {facebookReviews.map((review, index) => (
          <article className="review-quote-card" key={`${review.name}-${index}`}>
            <div className="review-quote-stars" aria-label="5 stars">
              {[1,2,3,4,5].map(star => <Star key={star} size={14} fill="currentColor" />)}
            </div>
            <blockquote>“{review.quote}”</blockquote>
            <footer>
              <strong>{review.name}</strong>
              {review.detail && <span>{review.detail}</span>}
            </footer>
          </article>
        ))}
      </div>
    </div>
  )
}
