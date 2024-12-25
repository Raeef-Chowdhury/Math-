const btnOpen = document.querySelector(".nav__icon--open");
const btnClose = document.querySelector(".nav__icon--close");
const header = document.querySelector(".header__nav");

btnOpen.addEventListener("click", function () {
  header.classList.add("nav__mobile");
  btnOpen.style.display = "none";
  btnClose.style.display = "block";
  btnClose.style.opacity = "1";
});

btnClose.addEventListener("click", function () {
  header.classList.remove("nav__mobile");
  btnOpen.style.display = "block";
  btnClose.style.display = "none";
});
