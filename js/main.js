/**
 * Component Loader & Active State Manager
 * Loads header/footer and highlights active menu items
 */

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "components/header.html", () => {
    setActiveLink();
    lucide.createIcons();
  });

  loadComponent("footer", "components/footer.html", () => {
    lucide.createIcons();
  });
});

function loadComponent(elementId, path, callback) {
  const element = document.getElementById(elementId);
  if (!element) return;

  fetch(path)
    .then((response) => {
      if (!response.ok) throw new Error(`Could not load ${path}`);
      return response.text();
    })
    .then((html) => {
      element.outerHTML = html;
      if (callback) callback();
    })
    .catch((error) => {
      console.error(error);
    });
}

function setActiveLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll("nav a");

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Handle blog-detail parent highlighting
  if (currentPath === "blog-detail.html") {
    const blogLink = document.querySelector('nav a[href="blog.html"]');
    if (blogLink) {
      blogLink.classList.add("active");
    }
  }
}
