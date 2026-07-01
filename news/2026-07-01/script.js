(function () {
  'use strict';

  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  function setFilter(category) {
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });

    cards.forEach(card => {
      const show = category === 'all' || card.dataset.category === category;
      card.style.display = show ? '' : 'none';
    });

    const visible = document.querySelectorAll('.card:not([style*="none"])').length;
    const countEl = document.getElementById('result-count');
    if (countEl) countEl.textContent = visible + ' article' + (visible !== 1 ? 's' : '');
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.category));
  });

  setFilter('all');
})();
