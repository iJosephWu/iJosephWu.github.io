# Joseph Wu

Personal portfolio for Joseph Wu, senior software engineer. The site covers Python platforms, AI engineering, experience, selected work, and contact.

Live site: [https://ijosephwu.github.io](https://ijosephwu.github.io)

Content lives in `src/react-app/data/portfolio.ts`. Email and phone are set there. The contact form delivers messages to Joseph through `/api/contact` when the Cloudflare worker is available, and through FormSubmit on GitHub Pages.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run build:pages
npm run preview
```

GitHub Pages serves the static build from `docs/`. Rebuild it with `npm run build:pages`, then copy `dist` to `docs`. The portrait is `public/images/joseph-portrait.jpg`. The downloadable resume is `public/resume/joseph-wu-resume.pdf`.
