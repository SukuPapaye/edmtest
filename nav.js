// nav.js — injects shared navbar + footer, highlights active link

(function () {
  const pages = [
    { label: "Concept & Design",      href: "concept-design.html",      id: "concept-design" },
    { label: "RFP Process",           href: "rfp-process.html",          id: "rfp-process" },
    { label: "Project Management",    href: "project-management.html",   id: "project-management" },
    { label: "Audit",                 href: "audit.html",                id: "audit" },
    { label: "Gallery",               href: "gallery.html",              id: "gallery" },
    { label: "Solutions & Innovations", href: "solutions-innovations.html", id: "solutions-innovations" },
    { label: "Live Projects",         href: "live-projects.html",        id: "live-projects" },
    { label: "Contact",               href: "contact.html",              id: "contact" },
  ];

  const currentFile = location.pathname.split("/").pop() || "index.html";

  const logoSVG = `
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="17" stroke="#c0392b" stroke-width="2.5"/>
      <circle cx="20" cy="20" r="10" stroke="#888" stroke-width="1.5"/>
      <ellipse cx="20" cy="20" rx="20" ry="8" stroke="#c0392b" stroke-width="1.2" opacity="0.5"/>
    </svg>`;

  const prefix = currentFile === "index.html" || currentFile === "" ? "pages/" : "";
  const homeHref = currentFile === "index.html" || currentFile === "" ? "index.html" : "../index.html";

  const navLinks = pages.map(p => {
    const href = (currentFile === "index.html" || currentFile === "") ? `pages/${p.href}` : p.href;
    const active = currentFile === p.href ? " active" : "";
    return `<a class="nav-link${active}" href="${href}">${p.label}</a>`;
  }).join("\n        ");

  const navbar = `
<nav class="navbar">
  <a class="navbar-brand" href="${homeHref}">
    <div class="navbar-logo">${logoSVG}</div>
    <div>
      <div class="navbar-title"><span>ED</span>Media</div>
      <span class="navbar-subtitle">Media Projects &amp; Solutions</span>
    </div>
  </a>
  <div class="navbar-sep"></div>
  <nav class="navbar-nav">
    ${navLinks}
  </nav>
  <div class="navbar-contact">
    <span class="navbar-phone"><span>+33</span> 6 89 98 00 89 &nbsp;/&nbsp; <span>+41</span> 79 701 94 37</span>
  </div>
</nav>`;

  const footer = `
<footer class="site-footer">
  <span class="footer-copy">&copy; ${new Date().getFullYear()} EDMedia &mdash; Media Projects &amp; Solutions</span>
  <div class="footer-links">
    <a class="footer-link" href="#">Legal Notice</a>
    <a class="footer-link" href="#">Privacy Policy</a>
    <a class="footer-link" href="#">Terms of Use</a>
    <a class="footer-link" href="#">Cookie Policy</a>
  </div>
  <span class="footer-email">Contact: <a href="mailto:ederval@edmedia.tv">ederval@edmedia.tv</a></span>
</footer>`;

  // Insert navbar before <main>
  const main = document.querySelector("main");
  if (main) {
    main.insertAdjacentHTML("beforebegin", navbar);
  }

  // Insert footer after <main>
  const mainEl = document.querySelector("main");
  if (mainEl) {
    mainEl.insertAdjacentHTML("afterend", footer);
  }
})();