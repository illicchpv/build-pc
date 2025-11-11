(() => {
  const contents = document.querySelectorAll('.program-line__content');

  contents.forEach((el, idx) => {
    const title = el.querySelector('.program-line__title');
    const descr = el.querySelector('.program-line__descr');
    title.addEventListener('click', (e) => {
      const isDescrOpen = descr.classList.contains('active');
      closeAllDescr();
      if (!isDescrOpen) descr.classList.toggle('active');
    });
  });

  function closeAllDescr() {
    contents.forEach((el, idx) => {
      const descr = el.querySelector('.program-line__descr');
      descr.classList.remove('active');
    });
  }
})();
