document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".index-want__form");
  const modal = document.getElementById("modal");
  const successMessage = document.getElementById("success-message");
  const closeModalButton = document.getElementById("close-modal");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Запобігаємо стандартному надсиланню форми

    // Показуємо повідомлення про успішну відправку
    successMessage.classList.add("show");

    // Показуємо модальне вікно
    modal.classList.add("show");

    // Закриття модального вікна по кліку на кнопку
    closeModalButton.addEventListener("click", function () {
      modal.classList.remove("show"); // Ховаємо модальне вікно
      successMessage.classList.remove("show"); // Ховаємо успішне повідомлення
    });

    // Закриття модального вікна, якщо клікнути за межами вікна
    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.remove("show"); // Ховаємо модальне вікно
        successMessage.classList.remove("show"); // Ховаємо успішне повідомлення
      }
    });

    // Через 4 секунди ховаємо повідомлення
    setTimeout(function () {
      successMessage.classList.remove("show");
    }, 4000); // 4 секунди, можна налаштувати по потребі

    // Можна також очистити форму після успішної відправки
    form.reset();
  });
});
