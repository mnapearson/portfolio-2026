# Portfolio 2026

Minimal, gallery-inspired personal website for Michaela Arratoon Pearson.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## Deploy (Vercel)

1. Push the repo to GitHub.
2. Import into Vercel and deploy.
3. Update the `SITE_URL` in `lib/site.ts` after you have the final domain.

## Content editing

- Site constants (title, description, URL, last updated): `lib/site.ts`
- Home (About + overview): `app/page.tsx`
- Projects page: `app/projects/page.tsx`
- Products page: `app/products/page.tsx`
- Productions data: `content/productions.json`
- Productions pages: `app/productions/page.tsx` and `app/productions/[slug]/page.tsx`
- Global styling and layout: `app/globals.css` and `app/layout.tsx`
