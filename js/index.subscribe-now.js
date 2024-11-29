const form = document.querySelector(".subscribe__form-container");
const emailInput = document.querySelector(".subscribe__input-text");
const modal = document.getElementById("thankYouModal");
const closeModalButton = document.getElementById("closeModal");

modal.style.display = "none";

const errorMessage = document.createElement("p");
errorMessage.className = "error-message";
errorMessage.style.color = "black";
errorMessage.style.marginTop = "50px";
errorMessage.style.display = "none";
form.appendChild(errorMessage);


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();

    if (isValidEmail(email)) {
        errorMessage.style.display = "none";
        modal.style.display = "flex";
    } else {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
    }
});


closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
    emailInput.value = "";
});

