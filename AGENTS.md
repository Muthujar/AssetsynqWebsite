<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Standalone marketing site (Next.js 16 + React 19); no backend or `.env` dependencies. Dependencies are installed automatically by the environment update script (`npm install`). Standard scripts are in `package.json`: `npm run dev` (webpack; defaults to port `3000` — set `PORT` to avoid clashing with the other apps, e.g. `PORT=3001 npm run dev`), `npm run build`, `npm run lint` (eslint; currently only `no-img-element` warnings).
