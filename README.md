# Pat Famous — Casting Website

A polished, mobile-friendly casting site for Pat Famous, built as a static Next.js website for GitHub and Netlify.

## What is included

- Casting-focused home page
- About and casting-range sections
- Organized headshot and lifestyle galleries
- Netlify-ready casting inquiry form
- Thank-you page
- Responsive mobile and desktop layouts
- Search and social metadata

## Photo organization

- `source-assets/headshots/` contains the original high-resolution headshot files.
- `source-assets/originals/` contains the original lifestyle photos.
- `public/images/` contains web-optimized copies used by the live site.

Keep the files in `source-assets/` as the originals. If a website image is replaced, create an optimized copy in `public/images/` and keep the same filename so the layout updates automatically.

## Preview locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Publish with GitHub and Netlify

1. Push this folder to a new GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project**.
3. Connect the GitHub repository.
4. Netlify will read `netlify.toml`, build the site, and publish the `out` folder automatically.

The contact form appears under **Forms** in Netlify after the first successful production deploy.
