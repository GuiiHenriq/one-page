// Scroll Suave Link Interno
const linkInterno = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);

  section.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

linkInterno.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});


// Menu Mobile
const buttonOpen = document.querySelector('.btn-open');
const buttonClose = document.querySelector('.btn-close');
const menu = document.querySelector('.header-menu ul');

function openMenu() {
  menu.classList.toggle('ativo');
}

function closeMenu() {
  menu.classList.toggle('ativo');
}

buttonOpen.addEventListener('click', openMenu);
buttonClose.addEventListener('click', closeMenu);