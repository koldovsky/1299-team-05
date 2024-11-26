const header = document.querySelector(".header");
const burger = document.querySelector(".header__burger");
const navContainer = document.querySelector(".header__nav-container");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navContainer.classList.toggle("active");
  main.classList.toggle("active");
  footer.classList.toggle("active");
});


const btn = document.getElementById("testBtn");
btn.addEventListener("click", () => {
    console.log("active btn");
});