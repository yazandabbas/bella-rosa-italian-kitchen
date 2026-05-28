# Bella Rosa Italian Kitchen Website

This is a static **Astro** website built from the provided restaurant requirements.
It includes:

- Home, Menu, Reservations, Online Ordering, About Us, Gallery, Catering, Contact, Reviews pages
- Featured homepage CTA block for reservations and pickup
- Menu page with both PDF viewer + web text menu
- OpenTable integration controls
- Toast ordering CTA
- Contact, catering inquiry, and newsletter forms that route to `manager@bellarosakitchen.com`
- Google Maps embed and location links
- Click-to-call button
- Social links, testimonial/review section, pop-up announcement, and SEO metadata
- Optional analytics via `PUBLIC_GA_MEASUREMENT_ID`

## Local setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run local development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Files worth updating before launch

- `src/data/site.ts`
  - `restaurant.links.instagram`, `facebook`, `googleReviews`, `yelp`
  - `restaurant.reservation.openTableWidgetUrl`, `restaurant.reservation.openTableButtonUrl`
  - `restaurant.ordering.toastUrl` and `ordering.giftCardUrl`
  - Menu items and photo URLs
- `public/assets/menu.pdf`
  - Replace placeholder with final PDF menu

## Deployment (Vercel)

1. Create/import the project in Vercel.
2. Set framework preset to **Astro** and branch deploy rule.
3. Add optional env var:
   - `PUBLIC_GA_MEASUREMENT_ID` (if using Google Analytics)
4. Deploy.

## Business launch notes

- Add final photos from Maria’s team in `src/pages/gallery.astro` and `src/pages/menu.astro`.
- Set the OpenTable widget IDs/links for production booking and confirmation.
- Replace placeholder copy in `public/assets/menu.pdf` with the final menu PDF.
