var menuOpen = null;
var minWidthDesktop = window.matchMedia('(min-width: 960px)');
var menuButton = document.querySelector('.main-nav__button');
var pageHeader = document.querySelector('.page-header');

var removeMenuCloseClass = function () {
  pageHeader.classList.remove('page-header--nav-closed');
  menuButton.classList.add('main-nav__button--close');
  menuButton.classList.remove('main-nav__button--open');

};

var addMenuCloseClass = function () {
  pageHeader.classList.add('page-header--nav-closed');
  menuButton.classList.add('main-nav__button--open');
  menuButton.classList.remove('main-nav__button--close');
};

var toggleMenuButton = function () {
  if (pageHeader.classList.contains('page-header--nav-closed')) {
    removeMenuCloseClass();
    menuOpen = true;
  } else {
    addMenuCloseClass();
    menuOpen = false;
  }
};

var toggleMenuCloseClass = function () {
  if (!minWidthDesktop.matches) {
    addMenuCloseClass();
    menuButton.style.display = 'inline-block';
  } else {
    removeMenuCloseClass();
    menuButton.style.display = 'none';
  }
};

window.addEventListener('resize', function (event) {
  if (minWidthDesktop.matches) {
    removeMenuCloseClass();
    menuButton.style.display = 'none';
  } else {
    menuButton.style.display = 'inline-block';
    if (menuOpen == null || !menuOpen) {
      addMenuCloseClass();

    }
  }
});

menuButton.addEventListener('click', toggleMenuButton);

toggleMenuCloseClass();
