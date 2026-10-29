# Umang Srivastav — Responsive Portfolio (React + Vite)

This website is implemented from the screenshot supplied in the conversation, including a dark navy theme, blue accents, mobile menu, hero, skills, about, projects, experience, contact form, and footer.

## Run locally

Install Node.js 20.19+ or 22+, then from this folder:

```bash
npm install
npm run dev
```

Visit the local URL shown by Vite (usually http://localhost:5173).

## Before publishing

1. Edit `src/config.js`: your email and LinkedIn are already configured; update any remaining optional social profile URLs and project URLs. Project entries are **examples** and project preview images are cropped from the user-provided reference screenshot; replace them with screenshots of your real work.
2. Your supplied resume has been added as `public/resume.pdf`, and the "Download Resume" link points to it.
3. If you wish, replace `public/images/hero-portrait.png` with your own photo or portrait illustration and update the hero styling accordingly. The provided image is a crop from the user-provided screenshot.
4. Experience, company names, dates, and project descriptions have been adapted from your supplied resume. Review the text before publishing.

## Contact form

The form validates fields and opens a drafted email using the visitor's default mail app (`mailto:`). It **does not** deliver messages server-side. For server-side submissions, connect Formspree, EmailJS, Netlify Forms, or your own backend.

## Deploy

```bash
npm run build
npm run preview
```

Deploy `dist/` to any static host. For Vercel or Netlify, import the repository; configuration files are included.

## Structure

- `src/App.jsx` — portfolio sections and interactions
- `src/config.js` — profile, contact, and projects
- `src/style.css` — responsive styles
- `public/images/` — design reference image crops
- `index.html` — entry HTML

## Profile photo

Your supplied profile photograph is now included at `public/images/umang-profile.png` and displayed in the hero section. The original photo is used without changing your appearance.
