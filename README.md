# Akhila T K | Portfolio

React + Vite portfolio site.

## Run it locally (VS Code)
1. Install Node.js from https://nodejs.org (LTS version).
2. Open this folder in VS Code, then open the terminal (Ctrl + `).
3. Run:
   ```
   npm install
   npm run dev
   ```
4. Open the address it prints (usually http://localhost:5173).

## Change the content
All text lives in `src/data.js`. Edit it and the page updates.

To add a project screenshot: copy the image into `public/projects/`, then in `src/data.js` set
`image: "projects/your-file.png"`. To add a button, set
`links: [{ label: "Visit site", href: "https://..." }]`.

## Get a public link (free)
**Netlify (easiest):** run `npm run build`, then drag the `dist` folder onto https://app.netlify.com/drop.
You get a link like `https://something.netlify.app`. Put that link in LinkedIn and your resume.

**Vercel:** push this folder to GitHub, then import the repo at https://vercel.com/new. Build command `npm run build`, output folder `dist`.
