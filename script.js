document.querySelectorAll('.accordeon-item_caption').forEach((item) => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      parent.classList.toggle('active');
    });
  });