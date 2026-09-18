import { useState } from 'react'
import { Heart, ImagePlus, MessageCircleHeart, Send, Star } from 'lucide-react'
import FacebookIcon from '../components/FacebookIcon'
import Reveal from '../components/Reveal'
import ReviewRail from '../components/ReviewRail'
import { business, facebookReviews } from '../data'

export default function Reviews() {
  const [status, setStatus] = useState('idle')
  const endpoint = import.meta.env.VITE_REVIEW_FORM_ENDPOINT

  async function handleSubmit(event) {
    event.preventDefault()
    if (!endpoint) {
      setStatus('facebook')
      return
    }
    setStatus('sending')
    try {
      const response = await fetch(endpoint, { method: 'POST', body: new FormData(event.currentTarget), headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('Unable to send')
      event.currentTarget.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <section className="page-hero page-hero--reviews">
        <div className="shell page-hero__inner">
          <Reveal>
            <p className="eyebrow eyebrow--gold">Tell us about your pup</p>
            <h1>Happy dog?<br/><em>We want the story.</em></h1>
            <p>Share a review, a favorite photo, or a little note about your visit.</p>
          </Reveal>
        </div>
      </section>

      <section className="section section--cream reviews-section">
        <div className="shell reviews-grid">
          <Reveal className="review-invite">
            <div className="review-stars" aria-label="Five stars">{[1,2,3,4,5].map(i => <Star key={i} fill="currentColor"/>)}</div>
            <p className="eyebrow">Reviews help local businesses grow</p>
            <h2>Leave some love.</h2>
            <p>Facebook is the easiest live review option right now — and it keeps your feedback connected to the business page.</p>
            <a className="btn btn--dark" href={business.facebook} target="_blank" rel="noreferrer"><FacebookIcon size={18}/> Review us on Facebook</a>
            <div className="review-note"><Heart/><span>Photos of freshly groomed pups are extremely encouraged.</span></div>
          </Reveal>

          <Reveal className="review-form-card" delay={100}>
            <div className="review-form-card__header"><MessageCircleHeart/><div><p className="eyebrow">Website review form</p><h2>Share your visit</h2></div></div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <label>Your name<input name="name" required placeholder="Your name" /></label>
              <label>Your pup’s name<input name="dogName" placeholder="Dog's name" /></label>
              <label>Your review<textarea name="review" required rows="5" placeholder="Tell us about your visit…" /></label>
              <label className="file-field"><ImagePlus/><span>Add a photo <small>JPG or PNG</small></span><input type="file" name="photo" accept="image/png,image/jpeg" /></label>
              <button className="btn btn--gold btn--full" type="submit" disabled={status === 'sending'}><Send size={17}/>{status === 'sending' ? 'Sending…' : 'Send review'}</button>
              {status === 'sent' && <p className="form-status form-status--ok">Thank you! Your review was sent.</p>}
              {status === 'error' && <p className="form-status form-status--error">That didn’t go through. Please use Facebook for now.</p>}
              {status === 'facebook' && <p className="form-status">The website upload form will go live once its form endpoint is connected. For now, please use the Facebook button.</p>}
            </form>
          </Reveal>
        </div>
      </section>

      {facebookReviews.length > 0 && (
        <section className="section section--dark review-highlights">
          <div className="shell">
            <ReviewRail />
          </div>
        </section>
      )}
    </>
  )
}
