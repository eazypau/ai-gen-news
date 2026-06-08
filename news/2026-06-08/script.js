(function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');
  const noResults = document.querySelector('.no-results');

  function applyFilter(category) {
    let visible = 0;
    cards.forEach(function (card) {
      const match = category === 'all' || card.dataset.category === category;
      card.classList.toggle('hidden', !match);
      if (match) visible++;
    });
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });
})();
