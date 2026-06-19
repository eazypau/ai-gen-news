(function () {
  'use strict';

  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.card');

  function setFilter(category) {
    buttons.forEach(b => b.classList.toggle('active', b.dataset.cat === category));
    cards.forEach(c => {
      const match = category === 'all' || c.dataset.cat === category;
      c.classList.toggle('hidden', !match);
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.dataset.cat));
  });

  // Default: show all
  setFilter('all');
})();
