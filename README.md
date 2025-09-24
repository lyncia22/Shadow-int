# Shadow Interior (React + Vite + Express)

Modern interior design site with multiple pages (Home, Services, Portfolio, About, Contact), navy + dark orange theme, logo, and a contact API.

## Tech Stack
- React 18 + Vite
- React Router
- TypeScript
- Express (API)
- Zod (form validation)

## Project Structure
- `client/` — React front-end (Vite)
  - `src/pages/` — Route pages
  - `src/components/` — Shared UI
  - `src/data/portfolio.ts` — Sample data
  - `public/logo.svg` — App logo
  - `vite.config.ts` — Dev server with proxy to `/api`
- `server/` — Express backend
  - `index.js` — API routes (`/api/health`, `/api/contact`)

## Run Locally
Open two terminals.

1) Backend
```
cd server
npm install
npm start
```
Server: http://localhost:5000

2) Frontend
```
cd client
npm install
npm run dev
```
Frontend: http://localhost:5173

The frontend proxies `/api/*` to the backend during development.

## Customization
- Colors are defined in `client/src/styles.css` as CSS variables `--navy` and `--orange`.
- Update `client/src/data/portfolio.ts` with your projects.
- Replace `client/public/logo.svg` with your brand logo.

## Notes
The contact API logs messages to the server console. Integrate with email/DB when ready.
