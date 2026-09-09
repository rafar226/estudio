/* Interacciones de navegación para la alternativa 2. */
(() => {
  const previousBind = bind;

  function navigate(route) {
    const pageY = window.scrollY;
    const sidebar = document.querySelector('.sidebar');
    const sidebarY = sidebar ? sidebar.scrollTop : 0;

    state.page = route;
    history.pushState(null, '', `#${route}`);
    app();

    requestAnimationFrame(() => {
      window.scrollTo({ top: pageY, behavior: 'auto' });
      document.querySelector('.sidebar')?.scrollTo({ top: sidebarY, behavior: 'auto' });
    });
  }

  bind = function () {
    previousBind();

    document.querySelectorAll('.side-group').forEach(group => group.classList.remove('open'));
    document.querySelectorAll('[data-nav-group]').forEach(button => {
      button.onclick = () => button.closest('.side-group').classList.toggle('open');
    });

    const notices = document.querySelector('.topbar > .outline[data-go="inicio"]');
    if (notices) {
      notices.classList.add('header-notices');
      notices.textContent = 'Avisos';
      notices.removeAttribute('data-go');
      notices.onclick = () => toast('No hay nuevas notificaciones');
    }

    document.querySelectorAll('[data-go]').forEach(button => {
      button.onclick = () => navigate(button.dataset.go);
    });
  };

  if (state.page !== 'login') app();
})();
