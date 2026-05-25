# Public Risk Tracker

A lightweight Next.js prototype for a public-record risk dashboard.

## Deploy on Vercel

1. Upload this folder to a new GitHub repository.
2. Go to Vercel and import the repository.
3. Use the default Next.js settings.
4. Deploy.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Editing Officials

Update the static data in:

```text
data/officials.ts
```

## Adding Photos Later

The current build uses initials as photo placeholders. To add images:

1. Add photos to `public/images/`.
2. Add an `image` field to each official object.
3. Replace the avatar initials in `app/page.tsx` with a Next `<Image />` component or a standard `<img />`.

## Important Launch Note

Do not publicly launch with unsourced allegations. Each score should link to verified source records such as meeting minutes, financial disclosures, campaign finance filings, procurement documents, ethics records, or official statements.
