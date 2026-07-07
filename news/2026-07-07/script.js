(function () {
  'use strict';

  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.news-card');
  const countEl = document.querySelector('.news-count');

  function updateCount(visible) {
    if (countEl) countEl.textContent = `Showing ${visible} article${visible !== 1 ? 's' : ''}`;
  }

  function filterCards(category) {
    let visible = 0;
    cards.forEach(card => {
      const match = category === 'all' || card.dataset.category === category;
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });
    updateCount(visible);
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCards(btn.dataset.filter);
    });
  });

  // Initialise count
  updateCount(cards.length);
})();
