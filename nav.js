const btnDOM = document.querySelector('.dropdown-menu');
const navDOM = document.querySelector('.nav-style');
const toggleDOM = document.querySelector('.menu-icon');

document.addEventListener('click', e => {
  const isDropdownBtn = e.target.matches('[data-dropdown-button]');
  if (!isDropdownBtn && e.target.closest('[data-dropdown]') != null) return;

  const currentDropdown = isDropdownBtn
    ? e.target.closest('[data-dropdown]')
    : null;

  document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
    if (dropdown === currentDropdown) {
      dropdown.classList.toggle('active');
      if (dropdown.classList.contains('active')) {
        dropdown.querySelector('.dropdown-menu').style.position = 'static';
      } else {
        dropdown.querySelector('.dropdown-menu').style.position = 'absolute';
      }
    } else {
      dropdown.classList.remove('active');
      dropdown.querySelector('.dropdown-menu').style.position = 'absolute';
    }
  });
});

toggleDOM.addEventListener('click', () => {
  const visibility = navDOM.getAttribute('data-visible');

  if (visibility === 'false') {
    navDOM.setAttribute('data-visible', true);
    toggleDOM.setAttribute('aria-expanded', true);
    toggleDOM.style.position = 'fixed';
  } else {
    navDOM.setAttribute('data-visible', false);
    toggleDOM.setAttribute('aria-expanded', false);
    toggleDOM.style.position = 'absolute';
  }
});
