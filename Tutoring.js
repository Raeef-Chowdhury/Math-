import { animate } from "motion";

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
///////////////////////////////////////////////////////////////
/// PRICING TOGGLE
const priceElements = document.querySelectorAll(".pricing__card--price");
const prices = [300, 1000, 500];

const pricingBtn = document.querySelector(".toggle-input");

// Event listener for the toggle button
pricingBtn.addEventListener("click", function () {
  priceElements.forEach((element, index) => {
    // Update the price text based on the toggle button's state
    if (pricingBtn.checked) {
      element.textContent = `$${prices[index] * 10}`; // 10x increase
    } else {
      element.textContent = `$${prices[index]}`; // Original price
    }
    console.log(element, index);
  });
});
//////////////////////////////////////////////////////////////
//////// FRAMER MOTION

animate(".section", { opacity: 1, rotate: 90 }, { duration: 0.6 });
