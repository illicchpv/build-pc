(() => {
  const modalButton = document.querySelector('.modal__button');
  const modal = document.querySelector('.modal');
  const courseButton = document.querySelector('.course__button');
  let modalClose = document.querySelector('.modal__close');
  if (!modalClose) {
    modalClose = document.createElement('button');
    modalClose.type = 'button';
    modalClose.textContent = '❌';
    modalClose.classList.add('modal__close');
    document.querySelector('.modal__inner').appendChild(modalClose);
  }

  courseButton.addEventListener('click', () => {
    modal.classList.add('active');
  });

  modalButton.addEventListener('click', () => {
    modal.classList.add('active');
  });

  modal.addEventListener('click', (e) => {
    // console.log('e.target.classList: ', e.target.classList);
    // if (e.target.classList.contains('modal')) {
    //   modal.classList.remove('active');
    // }
    if (!e.target.closest('.modal__inner')) {
      modal.classList.remove('active');
    }
  });

  modalClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });
})();

