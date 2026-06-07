(function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card[data-category]');

  function filterCards(category) {
    cards.forEach(function (card) {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = 'fadeIn 0.3s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      filterCards(btn.dataset.filter);
    });
  });

  // Add fadeIn keyframes dynamically
  var style = document.createElement('style');
  style.textContent = '@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }';
  document.head.appendChild(style);
})();
