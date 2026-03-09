// tiny progressive enhancement
(() => {
  const el = document.querySelector('[data-js="year"]');
  if (el) el.textContent = String(new Date().getFullYear());
})();
