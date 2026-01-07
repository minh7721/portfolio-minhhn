/**
 * Dynamic CSS Loader for Tailwind v4 CDN
 * Fetches the external style.css and injects it into a style[type="text/tailwindcss"] tag.
 */
(function () {
  fetch("css/style.css")
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load CSS");
      return response.text();
    })
    .then((css) => {
      const style = document.createElement("style");
      style.type = "text/tailwindcss";
      style.textContent = css;
      document.head.appendChild(style);
    })
    .catch((error) => console.error("Error loading styles:", error));
})();
