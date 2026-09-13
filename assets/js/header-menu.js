const header = document.querySelector('.topbar');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-navigation');

menuButton?.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation?.addEventListener('click', event => {
  if (event.target.closest('a')) {
    header.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});
