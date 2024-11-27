document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".index-want__form");
  const inputs = form.querySelectorAll("input, textarea");
  const successMessageContainer = document.getElementById("success-message");
  const modal = document.getElementById("modal");
  const closeModalButton = document.getElementById("close-modal");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігаємо стандартному надсиланню форми

    let isValid = true;

    // Перевірка валідності полів
    inputs.forEach((input) => {
      if (input.required && !input.value.trim()) {
        input.classList.add("error");
        isValid = false;
      }
    });

    if (!isValid) {
      return; // Якщо є помилки, не відправляємо форму
    }

    // Якщо форма валідна, показуємо повідомлення
    successMessageContainer.textContent = "Форма успішно надіслана!"; // Текст повідомлення
    successMessageContainer.style.display = "block"; // Показуємо блок повідомлення

    // Показуємо модальне вікно
    modal.classList.add("show");

    // Закриваємо модальне вікно по кліку
    closeModalButton.addEventListener("click", function () {
      modal.classList.remove("show"); // Ховаємо модальне вікно
    });

    // Через 4 секунди ховаємо повідомлення про успішну відправку
    setTimeout(function () {
      successMessageContainer.style.display = "none"; // Ховаємо повідомлення
    }, 4000);
  });
});
