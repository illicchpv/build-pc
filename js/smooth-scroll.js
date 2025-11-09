const navBar = document.querySelector('.header__nav');
const links = navBar.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const section = document.querySelector(targetId);
    // section?.scrollIntoView({
    //   block: 'start',
    //   behavior: 'smooth',
    // });
    if (section) {
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  });
});
