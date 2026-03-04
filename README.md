# GH.Tools (Garden Horizons Hub)

Near real-time decision-support site for Garden Horizons players:

- Live stock tracker (client polls every 90s)
- Restock countdown + confidence score
- Codes quick copy panel
- Mutation guide pages
- ROI calculator
- 24h stock history page
- Trust pages: About, Contact, Privacy, Terms
- Optional GA4 support via env var
- Canonical + robots metadata and structured data
- Favicon/manifest assets in `public/`

## Tech Choice

- Frontend: Next.js 14 (App Router)
- Rendering: Static export (`output: "export"`)
- Hosting: Cloudflare Pages
- Data update: GitHub Actions + JSON files (no custom backend)

## Local Development

```bash
npm install
npm run dev
```

## Build Static Output

```bash
npm run build
```

Build artifacts are generated in `out/`.

## Deploy to Cloudflare Pages

1. Push repository to GitHub.
2. In Cloudflare dashboard: Pages -> Create project -> Connect to Git.
3. Build settings:
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
4. Environment variables (optional):
   - `NODE_VERSION=20`
   - `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` (optional)
5. Deploy.

## Near Real-Time Data (No Backend)

### Data files

- `public/data/current-stock.json`
- `public/data/stock-history.json`
- `lib/data.ts` (codes + mutation content)

### Auto update every 5 minutes

This repo includes `.github/workflows/update-stock.yml`, which runs every 5 minutes.

Setup steps:

1. Prepare an external JSON feed endpoint that returns:

```json
{
  "source": "Official Discord Digest",
  "lastUpdated": "2026-03-04 17:10 UTC+8",
  "nextRestockAt": "2026-03-04T17:30:00+08:00",
  "confidence": 0.92,
  "items": [
    {
      "name": "Dawn Fruit Seed",
      "rarity": "legendary",
      "buyPrice": 550,
      "expectedSellPrice": 1300,
      "growthMinutes": 42
    }
  ]
}
```

2. Add GitHub secret: `STOCK_FEED_URL`.
3. Workflow writes latest data to `public/data/current-stock.json` and commits.
4. Cloudflare Pages auto redeploys on push.

## Community Correction

Replace the placeholder form link in `components/StockPanel.tsx`:

- `https://forms.gle/your-form-link`

with your own form URL.

## SEO Checklist Implemented

- Canonical URL metadata per core page
- Robots metadata + `robots.txt` + `sitemap.xml`
- Structured data: `WebSite`, `ItemList`, `SoftwareApplication`, `HowTo`, `BreadcrumbList`
- Internal links between stock, calculator, mutations, guides, and trust pages
