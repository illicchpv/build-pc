// console.log('Hello');
// console.log(document.querySelector('.modal__inner'));

// const element = document.querySelector('.header');
// console.log('element: ', element);


// const elements = document.querySelectorAll('div');
// console.dir(elements);

// console.log('elements: ', elements);
// console.log('element[0]: ', elements[1]);

// for (let i = 0; i < elements.length; i++) {
//     console.log(`element[${i}]: `, elements[i]);
// }

// elements.forEach((element, idx, arr) => {
//     console.log(idx, element, arr);
// });

// --------------------------------------------
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