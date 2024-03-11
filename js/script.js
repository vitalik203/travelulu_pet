const burgerBtn = document.querySelector(".burger__line");

burgerBtn.addEventListener("click", function () {
  document.querySelector(".burger__body").classList.toggle("hidden");
  document.querySelector(".header__logo").classList.toggle("hidden");
  document.querySelector(".header__logo-light").classList.toggle("hidden");
});
