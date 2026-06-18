(function () {
  'use strict';

  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.card');
  const info    = document.querySelector('.results-info');

  function updateCount(visible) {
    if (info) info.textContent = visible + ' article' + (visible !== 1 ? 's' : '') + ' shown';
  }

  function filterCards(category) {
    let count = 0;
    cards.forEach(function (card) {
      const match = category === 'all' || card.dataset.category === category;
      card.classList.toggle('hidden', !match);
      if (match) count++;
    });
    updateCount(count);
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      filterCards(btn.dataset.filter);
    });
  });

  // initialise
  updateCount(cards.length);
})();
