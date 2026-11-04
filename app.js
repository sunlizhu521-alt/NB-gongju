(function () {
  'use strict';
  const themeKey = 'nb-gongju-theme';
  try {
    if (localStorage.getItem(themeKey) === 'dark') document.documentElement.dataset.theme = 'dark';
  } catch (_) {}
  document.getElementById('themeToggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? '' : 'dark';
    if (next) document.documentElement.dataset.theme = next;
    else delete document.documentElement.dataset.theme;
    try { localStorage.setItem(themeKey, next || 'light'); } catch (_) {}
  });
  PaymentTool.mount(document.getElementById('toolPanel'));
})();
