# Personal Website

A multi-page personal portfolio built with plain HTML, CSS, and JavaScript.
Hosted on GitHub Pages.

## Pages
- `index.html` — About (photo, bio, skills, education, experience)
- `projects.html` — Projects list with tag filtering
- `blogs.html` — Blogs list
- `projects/*.html`, `blogs/*.html` — detail pages

## Customize
- Edit `assets/js/projects-data.js` to add projects.
- Edit `assets/js/blogs-data.js` to add blog posts.
- Edit text in `assets/js/i18n.js` and set `CONTACT_EMAIL`.
- Replace images in `assets/img/`.

## Add a new language later
1. Add a new key (e.g. `zh`) to `I18N` in `assets/js/i18n.js`.
2. Add `"zh"` to the `LANGUAGES` array.
The language switcher and translations update automatically.

## Deploy to GitHub Pages
1. Push this repo to GitHub (e.g. `NolanZhuang/NolanZhuang.github.io` for a
   user site, or any repo for a project site).
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   choose the `main` branch and `/ (root)` folder, then save.
4. Your site will be live at `https://<username>.github.io/` (user site) or
   `https://<username>.github.io/<repo>/` (project site).