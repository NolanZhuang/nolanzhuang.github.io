(function () {
    // Base path prefix ("" for root pages, "../" for pages in subfolders).
    function getBase(el) {
      return (el && el.getAttribute("data-base")) || "";
    }
  
    // Current language (persisted in localStorage).
    let currentLang = localStorage.getItem("lang") || "en";
    if (!LANGUAGES.includes(currentLang)) currentLang = "en";
  
    function t(path) {
      return path.split(".").reduce((o, k) => (o ? o[k] : null), I18N[currentLang]) || "";
    }
  
    // ---- Navbar ----
    function renderNavbar() {
      const navbar = document.getElementById("navbar");
      if (!navbar) return;
      const base = getBase(navbar);
      const active = navbar.getAttribute("data-active");
  
      const links = [
        { key: "about", href: base + "index.html" },
        { key: "projects", href: base + "projects.html" },
        { key: "blogs", href: base + "blogs.html" },
      ];
  
      const linksHtml = links
        .map(
          (l) =>
            `<a href="${l.href}" class="${active === l.key ? "active" : ""}"
               data-i18n="nav.${l.key}">${t("nav." + l.key)}</a>`
        )
        .join("");
  
      const langHtml = LANGUAGES.map(
        (lng) =>
          `<button class="lang-btn ${lng === currentLang ? "active" : ""}"
             data-lang="${lng}">${lng.toUpperCase()}</button>`
      ).join("");
  
      navbar.innerHTML = `
        <nav class="navbar container">
          <a class="brand" href="${base}index.html">NZ</a>
          <div class="nav-links">${linksHtml}</div>
          <div class="nav-actions">
            <a class="btn contact-btn" href="mailto:${CONTACT_EMAIL}"
               data-i18n="nav.contact">${t("nav.contact")}</a>
            <div class="lang-switch">${langHtml}</div>
          </div>
        </nav>`;
  
      navbar.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => setLanguage(btn.getAttribute("data-lang")));
      });
    }
  
    // ---- Footer ----
    function renderFooter() {
      const footer = document.getElementById("footer");
      if (!footer) return;
      footer.innerHTML = `<div class="container footer-inner">
        <span data-i18n="footer.copyright">${t("footer.copyright")}</span>
        <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>
      </div>`;
    }
  
    // ---- Apply translations to any element with data-i18n ----
    function applyTranslations() {
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const val = t(el.getAttribute("data-i18n"));
        if (val) el.textContent = val;
      });
    }
  
    function setLanguage(lang) {
      if (!LANGUAGES.includes(lang)) return;
      currentLang = lang;
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
      renderNavbar();
      renderFooter();
      applyTranslations();
    }
  
    // ---- Projects list page ----
    function renderProjects() {
      const grid = document.getElementById("project-grid");
      if (!grid || typeof PROJECTS === "undefined") return;
      const filters = document.getElementById("tag-filters");
  
      const allTags = [...new Set(PROJECTS.flatMap((p) => p.tags))];
      let activeTag = "All";
  
      function draw() {
        grid.innerHTML = PROJECTS.filter(
          (p) => activeTag === "All" || p.tags.includes(activeTag)
        )
          .map(
            (p) => `
          <a class="card" href="${p.page}">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="card-tags">
              ${p.tags.map((tg) => `<span class="tag">${tg}</span>`).join("")}
            </div>
          </a>`
          )
          .join("");
      }
  
      if (filters) {
        const tags = ["All", ...allTags];
        filters.innerHTML = tags
          .map(
            (tg) =>
              `<button class="tag-btn ${tg === activeTag ? "active" : ""}" data-tag="${tg}">${tg}</button>`
          )
          .join("");
        filters.querySelectorAll(".tag-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            activeTag = btn.getAttribute("data-tag");
            filters.querySelectorAll(".tag-btn").forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            draw();
          });
        });
      }
      draw();
    }
  
    // ---- Blogs list page ----
    function renderBlogs() {
      const list = document.getElementById("blog-list");
      if (!list || typeof BLOGS === "undefined") return;
      list.innerHTML = BLOGS.map(
        (b) => `
        <a class="blog-item" href="${b.page}">
          <h3>${b.title}</h3>
          <span class="blog-meta">${b.date}</span>
          <p>${b.excerpt}</p>
        </a>`
      ).join("");
    }
  
    // ---- Init ----
    document.documentElement.lang = currentLang;
    renderNavbar();
    renderFooter();
    applyTranslations();
    renderProjects();
    renderBlogs();
  })();