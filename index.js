/* -----------------------------------------
  Keyboard focus outlines only for Tab users
 ---------------------------------------- */

const handleFirstTab = (e) => {
  if (e.key === "Tab") {
    document.body.classList.add("user-is-tabbing");
    window.removeEventListener("keydown", handleFirstTab);
    window.addEventListener("mousedown", handleMouseDownOnce);
  }
};

const handleMouseDownOnce = () => {
  document.body.classList.remove("user-is-tabbing");
  window.removeEventListener("mousedown", handleMouseDownOnce);
  window.addEventListener("keydown", handleFirstTab);
};

window.addEventListener("keydown", handleFirstTab);

/* -----------------------------------------
  Theme toggle
 ---------------------------------------- */

const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

const getTheme = () => root.getAttribute("data-theme") || "dark";

const updateThemeToggle = (theme) => {
  if (!themeToggle) return;
  const isLight = theme === "light";
  themeToggle.setAttribute("aria-pressed", String(isLight));
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
};

updateThemeToggle(getTheme());

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = getTheme() === "light" ? "dark" : "light";
    root.setAttribute("data-theme", nextTheme);
    try {
      localStorage.setItem("theme", nextTheme);
    } catch (e) {}
    updateThemeToggle(nextTheme);
  });
}

/* -----------------------------------------
  Scroll reveals
 ---------------------------------------- */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
const revealElements = document.querySelectorAll(".reveal");

if (prefersReducedMotion) {
  revealElements.forEach((el) => el.classList.add("is-inview"));
} else if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-inview");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -48px 0px",
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  revealElements.forEach((el) => el.classList.add("is-inview"));
}

/* -----------------------------------------
  Scroll-spy active nav
 ---------------------------------------- */

const sectionIds = ["about", "experience", "skills", "contact"];
const sections = sectionIds
  .map((id) => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll(".sidebar__link[data-section]");

const setActiveLink = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.section === id);
  });
};

if (sections.length && "IntersectionObserver" in window) {
  const spyObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visible[0]) {
        setActiveLink(visible[0].target.id);
      }
    },
    {
      rootMargin: "-20% 0px -55% 0px",
      threshold: [0.1, 0.25, 0.5],
    }
  );

  sections.forEach((section) => spyObserver.observe(section));
}
