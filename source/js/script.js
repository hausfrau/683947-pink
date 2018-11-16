// var minWidthTablet = window.matchMedia("(min-width: 660px)");
var menuOpen = null;
var minWidthDesktop = window.matchMedia('(min-width: 960px)');
var maxWidthTablet = window.matchMedia('(max-width: 959px)');
var menuButton = document.querySelector('.main-nav__button');
var buttonSvgOpen = document.querySelector('.button-svg__open');
var buttonSvgClose = document.querySelector('.button-svg__close');
// var menuWrapper = document.querySelector(".main-nav__wrapper");
// var mainNav = document.querySelector('.main-nav');

var pageHeader = document.querySelector('.page-header');
// var pageHeaderMain = document.querySelector('.page-header--main');
// var pageHeaderPhoto = document.querySelector('.page-header--photo');
// var pageHeaderForm = document.querySelector('.page-header--form');

// var mainNavLogoWrapper = document.querySelector('.main-nav__logo-wrapper');

// pageHeader.classList.remove('page-header--nojs');

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
    /* pageHeader.classList.remove('page-header--nav-closed');
    menuButton.classList.add('main-nav__button--close');
    menuButton.classList.remove('main-nav__button--open');*/
  } else {
    addMenuCloseClass();
    menuOpen = false;
    /* pageHeader.classList.add('page-header--nav-closed');
    menuButton.classList.add('main-nav__button--open');
    menuButton.classList.remove('main-nav__button--close');*/
  }
};

var toggleMenuCloseClass = function () {
  console.log('minWidthDesktop.matches = ' + minWidthDesktop.matches);
  if (!minWidthDesktop.matches) {
    addMenuCloseClass();
    /* pageHeader.classList.add('page-header--nav-closed');
    menuButton.classList.add('main-nav__button--open');
    menuButton.classList.remove('main-nav__button--close');*/
    menuButton.style.display = 'inline-block';
  } else {
    // if (pageHeader.classList.contains('page-header--nav-closed')) {
    removeMenuCloseClass();
    menuButton.style.display = 'none';
    /* pageHeader.classList.remove('page-header--nav-closed');
    menuButton.classList.add('main-nav__button--close');
    menuButton.classList.remove('main-nav__button--open');
    menuButton.style.display = 'none';*/
    // }
  }

  /* if (pageHeader.classList.contains('page-header--nav-closed')) {
    pageHeader.classList.remove('page-header--nav-closed');
    buttonSvgClose.style.display = 'inline-block';
    buttonSvgOpen.style.display = 'none';
    // pageHeader.classList.add('page-header--nav-opened');
    // setOpenMenuStyle();
  } else {
    pageHeader.classList.add('page-header--nav-closed');
    buttonSvgOpen.style.display = 'inline-block';
    buttonSvgClose.style.display = 'none';
    // pageHeader.classList.remove('page-header--nav-opened');
    // setCloseMenuStyle();
  }*/


};

window.addEventListener('resize', function (event) {
  if (minWidthDesktop.matches) {
    console.log('desktop');
    // if (pageHeader.classList.contains('page-header--nav-closed')) {
      removeMenuCloseClass();
      menuButton.style.display = 'none';
    // }
  } else {
    menuButton.style.display = 'inline-block';
    // if (maxWidthTablet.matches) {
      console.log('not desktop');
      if (menuOpen == null || !menuOpen) {
        addMenuCloseClass();

      }
    }
  //}
});

/*
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes*/


/*
var setOpenMenuStyle = function () {
  pageHeader.style.backgroundPositionY = "258px";
  if (pageHeaderPhoto != null) {
    if (minWidthDesktop.matches) {
      pageHeaderPhoto.style.minHeight = "496px";
    } else if (minWidthTablet.matches) {
      pageHeaderPhoto.style.minHeight = "1005px";
    } else {
      pageHeaderPhoto.style.minHeight = "496px";
    }
  } else if (pageHeaderForm != null) {
    pageHeaderForm.style.minHeight = "495px";
  }
  mainNav.style.backgroundColor = "#283645";
  mainNavLogoWrapper.style.backgroundColor = "#283645";
};

var setCloseMenuStyle = function () {
  pageHeader.style.backgroundPositionY = "0";
  // pageHeaderMain.style.backgroundPositionY = "0";
  if (pageHeaderPhoto != null) {
    pageHeaderPhoto.style.minHeight = "238px";
  } else if (pageHeaderForm != null) {
    pageHeaderForm.style.minHeight = "236px";
  }
  mainNav.style.backgroundColor = "transparent";
  mainNavLogoWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
};*/

/* menuButton.addEventListener("click", function () {
  console.log("menuButton clicked") ;
}); */

menuButton.addEventListener('click', toggleMenuButton/* function () {
  if (pageHeader.classList.contains('page-header--nav-closed')) {
    pageHeader.classList.remove('page-header--nav-closed');
    buttonSvgClose.style.display = 'inline-block';
    buttonSvgOpen.style.display = 'none';
    // pageHeader.classList.add('page-header--nav-opened');
    // setOpenMenuStyle();
  } else {
    pageHeader.classList.add('page-header--nav-closed');
    buttonSvgOpen.style.display = 'inline-block';
    buttonSvgClose.style.display = 'none';
    // pageHeader.classList.remove('page-header--nav-opened');
    // setCloseMenuStyle();
  }*/
  /* if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
    setOpenMenuStyle();
  } else {
    mainNav.classList.add('main-nav--closed');
    mainNav.classList.remove('main-nav--opened');
    setCloseMenuStyle();
  }
}*/);

/* menuWrapper.addEventListener("click", function () {
  console.log("menuWrapper clicked");
});*/

/* mainNav.addEventListener("click", function (evt) {

  var element = evt.target;

  while (!element.classList.contains("main-nav__button") && element.parentElement) {
    element = element.parentElement;
  }

  console.log("element = " + element);
}); */


/*
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});*/

/* if (pageHeaderMain != null) {
  pageHeaderMain.style.backgroundPositionY = "0";
  mainNav.style.backgroundColor = "transparent";
  mainNavLogoWrapper.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
}*/

// setCloseMenuStyle();
toggleMenuCloseClass();
