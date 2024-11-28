const form = document.querySelector(".index-want__form");
const modal = document.getElementById("modal");
const overlay = document.querySelector(".index-want__bg"); // Тепер фон через клас
const successMessage = modal ? modal.querySelector("p") : null;
const closeModalButton = document.getElementById("close-modal");

if (form && modal && successMessage && closeModalButton) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігаємо стандартному надсиланню форми

    // Показуємо повідомлення про успішну відправку
    successMessage.textContent = "Thank you!";

    // Показуємо модальне вікно та фон
    modal.classList.add("show");
    overlay.classList.add("show"); // Показуємо фон з напівпрозорим затемненням

    // Закриття модального вікна по кліку на кнопку
    closeModalButton.addEventListener("click", function () {
      modal.classList.remove("show"); // Ховаємо модальне вікно
      overlay.classList.remove("show"); // Ховаємо фон
    });

    // Закриття модального вікна, якщо клікнути за межами вікна
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        modal.classList.remove("show"); // Ховаємо модальне вікно
        overlay.classList.remove("show"); // Ховаємо фон
      }
    });

    // Очистка форми після успішної відправки
    form.reset();
  });
} else {
  console.error("Один або кілька елементів не знайдені на сторінці.");
}