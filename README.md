# Serenity Salon and Wellness Spa — Website

A React (Vite) site for Serenity Salon and Wellness Spa, Bilaspur. Built with
`react-router-dom` so more pages can be added easily; right now the router
has a single `/` route (`Home`), and that Home page contains all the
sections (Services, Wellbeing, Visit Us, Contact) as anchored sections.

## Structure

```
src/
  data/siteData.js      // all site content: business info, hero copy, services & pricing, gallery
  components/           // Navbar, TopBar, Hero, TrustStrip, Services, AboutSplit, VisitGallery, ContactCta, Footer
  pages/Home.jsx         // assembles the components above
  App.jsx                 // react-router setup — add new <Route> entries here for future pages
```

## Design

- **Palette**: deep coffee-brown grounds (`--brown-900/950`) with a warm
  gold accent (`--gold-400`) and beige/cream panels (`--beige-100`, `--cream`)
  for cards and the "wellbeing" section — matching the brown & beige brief,
  with light cream text (`--text-light`) set on every brown surface.
- **Type**: Cormorant Garamond (serif, display) + Manrope (sans, body).
- All copy, prices, contact details and services are pulled from
  `src/data/siteData.js` — update that one file to change site content.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
```

## Notes / next steps

- The `gallery` entries in `siteData.js` point to placeholder image paths
  (`/assets/gallery/...`) that don't exist yet. The Home page currently
  renders elegant placeholder cards for these instead of broken images —
  drop real photos into `public/assets/gallery/` and swap the `VisitGallery`
  component to use `<img src={item.image} />` once the client shares photos.
- Pricing menu in `siteData.js` is sourced from the "SAPASHA" Thai Spa menu
  and lists a Raigarh contact — confirm with the client that these exact
  services/prices apply to the Bilaspur branch before publishing.
- Instagram/Justdial links in `business.social` are empty — fill in once
  confirmed.
