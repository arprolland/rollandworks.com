// script.js – toggles the slide‑out nav drawer

// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("navToggle");
  const drawer = document.getElementById("navDrawer");

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    drawer.classList.toggle("open");        // slide drawer
    toggleBtn.classList.toggle("active");   // animate icon
  });
});
