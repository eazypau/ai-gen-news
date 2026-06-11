document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards   = document.querySelectorAll('.card');
  const count   = document.getElementById('article-count');

  function updateCount(visible) {
    if (count) count.textContent = `Showing ${visible} article${visible !== 1 ? 's' : ''}`;
  }

  function filterCards(category) {
    let visible = 0;
    cards.forEach(card => {
      const match = category === 'all' || card.dataset.category === category;
      card.classList.toggle('hidden', !match);
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

  // init
  updateCount(cards.length);
});
