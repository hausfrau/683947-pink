var menuButton = document.querySelector(".main-nav__button");
var menuWrapper = document.querySelector(".main-nav__wrapper");
var mainNav = document.querySelector(".main-nav");

menuButton.addEventListener("click", function () {
  console.log("menuButton clicked") ;
});

menuWrapper.addEventListener("click", function () {
  console.log("menuWrapper clicked");
});

mainNav.addEventListener("click", function (evt) {

  var element = evt.target;

  while (!element.classList.contains("main-nav__button") && element.parentElement) {
    element = element.parentElement;
  }

  console.log("element = " + element);
});
