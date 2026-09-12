/* ---------- Smooth scroll untuk anchor link di navbar ---------- */
function initSmoothScroll() {
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
 
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initSmoothScroll();
});
 