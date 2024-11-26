const header = document.querySelector(".header");
const burger = header.querySelector(".header__burger");
const navContainer = header.querySelector(".header__nav-container");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navContainer.classList.toggle("active");
});


const btn = header.getElementById("testBtn");
btn.addEventListener("click", () => {
    console.log("active btn");
});