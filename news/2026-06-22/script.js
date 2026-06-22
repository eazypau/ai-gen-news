(function () {
  'use strict';

  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');
  const countEl = document.getElementById('article-count');
  const noResults = document.getElementById('no-results');

  let activeFilter = 'all';

  function updateCount(visible) {
    if (countEl) countEl.textContent = `Showing ${visible} article${visible !== 1 ? 's' : ''}`;
  }

  function applyFilter(filter) {
    activeFilter = filter;
    let visible = 0;

    cards.forEach(card => {
      const cat = card.dataset.category;
      const show = filter === 'all' || cat === filter;
      card.classList.toggle('hidden', !show);
      if (show) visible++;
    });

    filterBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    updateCount(visible);
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.filter));
  });

  applyFilter('all');
})();
