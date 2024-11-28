const form = document.querySelector(".index-want__form");
const modal = document.getElementById("modal");
const overlay = document.querySelector(".index-want__bg");
const successMessage = modal ? modal.querySelector("p") : null;
const closeModalButton = document.getElementById("close-modal");

if (form && modal && successMessage && closeModalButton) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Самі надсилаємо форму, а не браузер

    // Збір даних форми
    const formData = new FormData(form); // Створення FormData

    // Логування даних форми
    const formEntries = Object.fromEntries(formData.entries()); // Перетворюємо FormData в об'єкт для перегляду в консолі
    console.log("Зібрані дані форми:", formEntries);

    // Відправка даних на сервер через POST запит з fetch
    fetch("https://formspree.io/f/xnnqgwze", {
      method: "POST",
      body: formData, // Передаємо FormData
      headers: {
        Accept: "application/json", // Вказуємо, що очікуємо JSON у відповіді
      },
      mode: "cors", // Для крос-доменних запитів
    })
      .then((response) => {
        console.log("Запит відправлений, статус:", response.status);
        if (response.ok) {
          return response.json(); // Якщо відповідь є, обробляємо її
        } else {
          throw new Error("Помилка при відправці запиту");
        }
      })
      .then((data) => {
        console.log("Відповідь від сервера:", data);
      })
      .catch((error) => {
        console.error("Помилка при відправці даних:", error);
      });

    // Показуємо повідомлення про успішну відправку
    successMessage.textContent = "Thank you! We will contact you shortly.";

    // Показуємо модальне вікно та фон
    modal.classList.add("show");
    overlay.classList.add("show");

    // Закриття модального вікна по кліку на кнопку
    closeModalButton.addEventListener("click", function () {
      modal.classList.remove("show");
      overlay.classList.remove("show");
    });

    // Закриття модального вікна, якщо клікнути за межами вікна
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        modal.classList.remove("show");
        overlay.classList.remove("show");
      }
    });

    // Очистка форми після успішної відправки
    form.reset();

    // Приховуємо модальне вікно та фон через 5 секунд після відправки
    setTimeout(function () {
      modal.classList.remove("show");
      overlay.classList.remove("show");
    }, 5000);
  });
} else {
  console.error("Один або кілька елементів не знайдені на сторінці.");
}
