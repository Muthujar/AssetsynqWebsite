<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

`assetsynq-website` is a single static Next.js 16 marketing site (App Router, `src/app/`); there is no backend, database, API routes, or env vars. Dependencies (`npm install`) are refreshed by the startup update script.

- Run/lint/build commands live in `package.json` scripts (`dev`, `build`, `start`, `lint`). `dev` intentionally uses `next dev --webpack` (not Turbopack), while `build` uses Turbopack — this is expected.
- There is no test framework or test script in this repo.
- The contact/enquiry form has no server; on submit it opens a `wa.me`/`api.whatsapp.com` deep link built in `src/lib/contact.ts`. Testing the form end-to-end only requires the dev server; the WhatsApp handoff needs internet.
