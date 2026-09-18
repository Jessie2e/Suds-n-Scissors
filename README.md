# Suds ’n Scissors Website

A Vite + React website for **Suds ’n Scissors Dog Grooming & Boarding** in Cullman, Alabama.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in Terminal, usually:

```text
http://localhost:5173
```

## Build for production

```bash
npm run build
```

A successful production check should end with `✓ built` and no errors.

## Main pages

- Home
- Pricing — interactive by dog weight
- Boarding
- Gallery — named dog photos + Facebook content
- About — groomer bios
- Reviews

**Specialty Care is now part of the Pricing page** instead of being a separate page. Links to “See the extras” should go to:

```text
/pricing#extras
```

## Main project structure

```text
src/
  components/
  pages/
  App.jsx
  data.js
  main.jsx
  styles.css

public/
  assets/
```

Client photos, videos, the logo, dog-size examples, and gallery dog images belong in:

```text
public/assets/
```

## Current design direction

- Black, cream, warm white, light gray, metallic gold, and restrained forest green
- Gold emblem centered independently in the desktop navigation
- Business name stays on the left side of the header
- Organic / editorial photo shapes where appropriate instead of only standard rectangles
- Light pages use subtle animated bubble texture
- Dark sections use a very subtle moving ambient-light effect
- Custom gold scissors cursor on desktop with a click-to-snip animation
- Scroll reveal effects and restrained hover lift / shadow / image-scale interactions
- Reduced-motion settings disable decorative motion where appropriate

## Home page details

- Rotating main dog image in the hero
- Services cards for Grooming, Boarding, and Specialty Care
- Specialty Care links directly to the extras section on Pricing
- **A beautiful space. Made for dogs.** uses the bath / grooming-space photography in an editorial overlapping composition
- **A little groom magic** uses before/after drag sliders
- **A Few Happy Faces** uses separate dog photos and subtle bubbles
- Real Facebook review carousel
- Facility video and location content
- Footer includes a **Built by 2e Studio** link

## Pricing page

The pricing page lets visitors choose a dog size and updates the service prices.

Weight groups:

- Small — under 19 lbs
- Medium — 20–39 lbs
- Large — 40–69 lbs
- X-Large — 70–99 lbs
- XX-Large — 100+ lbs

The selected dog-size image also changes in the Pricing hero.

Expected image filenames:

```text
smalldog.jpg
mediumdog.jpg
largedog.jpg
xldog.jpg
xxldog.jpg
```

### Grooming prices

**All Suds**

- Small: $50
- Medium: $60
- Large: $70
- X-Large: $90
- XX-Large: $95+

**Suds ’n Trim**

- Small: $60
- Medium: $70
- Large: $80
- X-Large: $100
- XX-Large: $110+

**Suds ’n Scissors — full-body groom**

- Small: $70
- Medium: $80
- Large: $90
- X-Large: $110
- XX-Large: $115+

“Oodles” / Poodle mixes are **$5+ additional** because coat type may require extra product, brushing, drying, and grooming time.

Core services include:

- Ear plucking & cleaning
- Sanitary trim
- Gland expression
- Nail trim
- Paw pads
- Facial wash
- Shampoo

Specialty / add-on content now lives lower on this same page.

## Gallery dog names

Dog image files containing `-dog.jpg` use the text before `-dog` as the dog’s name.

Current named dogs include:

- Bella
- Charlie
- Claude
- Clifford
- Crimson
- Duke
- Elwood
- George
- Lilly
- Mavis
- Oliver
- Roxie
- Ziggy Rainbow

Gallery name labels appear near the bottom of each named photo.

## Facebook reviews currently used

- Shelbi Gray Rolley
- Yvonne Maynard
- Tracy Koehler
- Cherrie Vaughn Verhoff

Current summary copy:

```text
5-star rating · 15 Facebook reviews
```

Only real reviews should be added. Do not invent testimonials.

## Boarding page

Current boarding content includes:

- Private 5×7 suites
- Individual outdoor runs
- Climate-controlled indoor boarding
- Fenced play area
- Separate households
- Intentionally limited capacity

Optional enrichment references:

- One-on-one outdoor time
- Lick mats
- Extra enrichment time

Exact boarding and enrichment pricing still needs owner confirmation.

## Before / after sliders

The grooming transformation sliders currently rest around **75% to the right** when loaded.

The default is controlled in:

```text
src/components/BeforeAfter.jsx
```

Look for:

```jsx
initialPosition = 75
```

## Scissors cursor

The desktop scissors cursor is rotated counter-clockwise and still snips on click.

Its angle is controlled in `src/styles.css`:

```css
.scissor-cursor svg {
  transform: rotate(-120deg);
}
```

More negative values rotate it farther counter-clockwise.

## Important launch items still to confirm

1. **Booking destination** — current booking buttons call `256-444-5923`. Replace with an online booking URL if the owner uses one.
2. **Groomer portraits** — replace temporary work/dog images with actual team portraits when provided.
3. **Favorite breeds** — requested for groomer bios but not yet supplied.
4. **Boarding pricing** — still needs confirmation.
5. **Boarding add-on pricing** — one-on-one time, lick mats, and extra enrichment still need confirmed prices.
6. **Specialty package pricing / exact package contents** — confirm seasonal or preset package details before launch.
7. **Hours** — verify the owner’s current hours before publishing.
8. **QR destination** — decide whether the final QR should point to Facebook or the finished website.
9. **Review form endpoint** — only needed if the site should accept direct review/photo submissions instead of sending visitors to Facebook.

## Business information currently in the site

```text
Suds ’n Scissors
1971 County Rd. 702
Cullman, AL 35055
256-444-5923
```

Business-wide values such as phone, address, Facebook URL, gallery data, reviews, weight groups, and grooming pricing are primarily stored in:

```text
src/data.js
```

## Safety when applying update files

When using one of the small replacement-file ZIPs, **do not replace the whole `src` or `public` folder in Finder**.

Instead:

1. Open the update ZIP.
2. Open its `src` folder.
3. Copy the individual files into the matching folders in the existing project.
4. Choose **Replace** only for those individual files.
5. Leave `public/assets` alone unless an update specifically includes a new image asset.

Before major updates, duplicate the whole project folder as a quick backup.
