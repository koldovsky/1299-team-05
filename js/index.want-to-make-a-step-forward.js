const form = document.querySelector(".index-want__form");
  const modal = document.getElementById("modal");
  const successMessage = modal ? modal.querySelector("p") : null;
  const closeModalButton = document.getElementById("close-modal");

  // Перевірка на наявність елементів
  if (form && modal && successMessage && closeModalButton) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Запобігаємо стандартному надсиланню форми

      // Показуємо повідомлення про успішну відправку
      successMessage.textContent = "Форма успішно надіслана!";
      modal.classList.add("show");

      // Закриття модального вікна по кліку на кнопку
      closeModalButton.addEventListener("click", function () {
        modal.classList.remove("show"); // Ховаємо модальне вікно
      });

      // Закриття модального вікна, якщо клікнути за межами вікна
      modal.addEventListener("click", function (event) {
        if (event.target === modal) {
          modal.classList.remove("show"); // Ховаємо модальне вікно
        }
      });

      // Через 4 секунди ховаємо повідомлення
      setTimeout(function () {
        modal.classList.remove("show");
      }, 4000); // 4 секунди, можна налаштувати по потребі

      // Очистка форми після успішної відправки
      form.reset();
    });
  } else {
    console.error("Один або кілька елементів не знайдені на сторінці.");
  }
;
