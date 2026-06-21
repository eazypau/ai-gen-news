(function () {
  'use strict';

  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.news-card');
  const noResults = document.getElementById('no-results');

  function filterCards(category) {
    let visible = 0;
    cards.forEach(card => {
      const match = category === 'all' || card.dataset.category === category;
      card.classList.toggle('hidden', !match);
      if (match) visible++;
    });
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterCards(btn.dataset.filter);
    });
  });
})();
