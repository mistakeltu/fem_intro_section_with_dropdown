const btnDOM = document.querySelector('.dropdown-menu');

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
