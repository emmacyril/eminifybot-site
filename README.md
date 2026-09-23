<p align="center"><img src="app/icon.svg" width="72" alt="Emi"></p>

<h1 align="center">eminifybot.com</h1>

<p align="center">The landing page for <a href="https://github.com/emmacyril/EminifyBot">EminifyBot</a>, your AI team in a chat app.</p>

---

Built with **Next.js 16** (App Router), **React 19** and **TypeScript**. No UI framework: one hand-written stylesheet with light and dark themes driven by CSS variables.

## What's on the page

| Section | Component | Notes |
|---|---|---|
| Hero and live demo | `components/Hero.tsx`, `components/AppDemo.tsx` | A scripted replica of the app. Visitors switch organisation, pick bots, approve actions and type. |
| Download | `components/Downloads.tsx` | Direct links to the newest installers, read from GitHub Releases and refreshed hourly (`lib/release.ts`). |
| Features | `components/Features.tsx` | Real app screenshots from `public/screenshots/`. |
| Give each bot a job | `components/BotJobs.tsx` | Role picker driving a phone preview. |
| Pricing | `components/Pricing.tsx` | Monthly and yearly toggle. Plans live in `lib/content.ts`. |

All copy and demo data are in `lib/content.ts`, so wording changes never touch layout code.

## Develop

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

## Deploy

Import this repository in Vercel. It detects Next.js; no settings or environment variables are needed. Add `eminifybot.com` under Project → Domains.

## Screenshots

`public/screenshots/*.png` are captured from the real EminifyBot app running against an isolated test instance. Replace a file with the same name to update it; a feature card only shows an image when its file exists.
