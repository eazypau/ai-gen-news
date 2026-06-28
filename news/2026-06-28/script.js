document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.news-card');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const category = btn.dataset.category;

      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      cards.forEach(function (card) {
        if (category === 'All' || card.dataset.category === category) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
});
