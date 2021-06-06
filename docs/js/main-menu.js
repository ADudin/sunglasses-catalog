const pageHeaderToggle = document.querySelector('.page-header__toggle');
const mainNavigation = document.querySelector('.page-header__main-nav');

pageHeaderToggle.addEventListener('click', (evt) => {
  evt.preventDefault();
  pageHeaderToggle.classList.toggle('page-header__toggle--close');
  pageHeaderToggle.classList.toggle('page-header__toggle--open');
  mainNavigation.classList.toggle('page-header__main-nav--show');
  mainNavigation.classList.toggle('page-header__main-nav--disabled');
})
