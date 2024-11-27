document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".index-want__form");
  const inputs = form.querySelectorAll("input, textarea");
  const successMessageContainer = document.getElementById("success-message"); // Отримуємо контейнер для повідомлення

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Блокуємо стандартну відправку форми

    let isValid = true;

    // Очистити попередні помилки
    inputs.forEach((input) => {
      input.classList.remove("error");
    });

    // Перевірка полів форми
    inputs.forEach((input) => {
      // Перевірка на обов'язкові поля
      if (input.required && !input.value.trim()) {
        input.classList.add("error"); // Підсвічування поля з помилкою
        isValid = false;
      }

      // Додатково перевірка для email
      if (input.type === "email" && input.value.trim()) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA6]{2,}$/;
        if (!emailPattern.test(input.value.trim())) {
          input.classList.add("error"); // Якщо email некоректний
          isValid = false;
        }
      }
    });

    // Якщо форма не валідна, зупиняємо подальші дії
    if (!isValid) {
      console.log("Форма не валідна!"); // Лог для відлагодження
      return; // Зупиняємо подальші дії
    } else {
      // Форма валідна, виводимо повідомлення
      console.log("Форма валідна, відправляємо..."); // Лог для відлагодження

      // Показуємо повідомлення про успіх
      successMessageContainer.textContent = "Форма успішно надіслана!";
      successMessageContainer.style.display = "block"; // Показуємо повідомлення

      // Приховуємо повідомлення через кілька секунд
      setTimeout(function () {
        successMessageContainer.style.display = "none"; // Приховуємо повідомлення через 4 секунди
      }, 4000);
    }
  });
});
