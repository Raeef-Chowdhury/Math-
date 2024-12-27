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

// ///////////////////////////////////////////////////////
/// Scrolling for line
const aboutSection = document.querySelector(".section__about");
const lineStandard = document.querySelector(".img__line--box--2");
const lineScrolled = document.querySelector(".img__line--box--1");
const heroSection = document.querySelector(".section__hero");

window.addEventListener("scroll", function () {
  let lineLength = lineStandard.offsetHeight;
  const sectionHero = heroSection.clientHeight;
  const scroll = window.scrollY - sectionHero;
  let scrollPercentage = Math.trunc(scroll / 10 + 5);

  const abs = (lineScrolled.style.height = scrollPercentage + "%");
  if (scrollPercentage > 2) {
    lineScrolled.style.zIndex = "-1";
  }
  if (lineScrolled.offsetHeight > lineLength) {
    lineScrolled.style.height = "85%";
  }

  console.log(abs);

  console.log(scrollPercentage);
});
