# qneo-starter-web

Minimal Next.js starter for qneolabs.

## Deploy (quick)

1) Push this repo to GitHub

2) Vercel → New Project → import this repo → Deploy

3) Vercel → Project → Settings → Domains → Add [qneolabs.com](http://qneolabs.com)

4) Cloudflare → DNS → add:

- A  @  76.76.21.21  (DNS only, gray cloud)
- CNAME  www  [cname.vercel-dns.com](http://cname.vercel-dns.com)  (DNS only, gray cloud)

5) Back in Vercel → Verify domain → Set [qneolabs.com](http://qneolabs.com) as Primary → add redirect www → apex

## Files included (minimal)

- app/layout.tsx
- app/page.tsx
- app/contact/page.tsx
- app/services/page.tsx
- public/site.webmanifest
- public/favicon.svg
- next.config.js
- package.json
- tsconfig.json

## Contact links

- Email: [quantumneolabs@gmail.com](mailto:quantumneolabs@gmail.com)
- Call: tel:+66911691606
- WhatsApp: https://wa.me/66911691606

## Notes

- Add PNG favicons later: favicon-32.png, favicon-16.png, apple-touch-icon.png
- Theme color: #0A84FF
- If Vercel asks for a TXT verification, add it in Cloudflare DNS exactly as shown
