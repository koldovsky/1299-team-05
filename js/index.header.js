document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger");
    const navContainer = document.querySelector(".header__nav-container");

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        navContainer.classList.toggle("active");
    });
});