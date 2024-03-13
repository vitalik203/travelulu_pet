const burgerBtn = document.querySelector(".header__burger-cover");

burgerBtn.addEventListener("click", function () {
  document.querySelector(".burger__line-two").classList.toggle("active");
  document.querySelector(".burger__line-one").classList.toggle("active");
  document.querySelector(".burger__line-three").classList.toggle("active");
  document.querySelector(".burger-body").classList.toggle("hidden");
  document.querySelector(".header__container").classList.toggle("active");
  if (
    document.querySelector(".header__logo").src.endsWith("Travelulu_logo.svg")
  ) {
    document.querySelector(".header__logo").src =
      "img/Travelulu_logo(light).svg";
  } else {
    document.querySelector(".header__logo").src = "img/Travelulu_logo.svg";
  }
});
