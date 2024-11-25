document.addEventListener('DOMContentLoaded', function () {
    // Отримуємо форму та всі її елементи
    const form = document.querySelector('.index-want__form');
    const nameInput = document.querySelector('#name');
    const phoneInput = document.querySelector('#phone');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const submitButton = document.querySelector('.index-want__button');
  
    // Функція для перевірки форми
    function validateForm(event) {
      // Скидаємо попередні повідомлення про помилки
      let errorMessage = '';
      let isValid = true;
  
      // Скидаємо підсвічування для всіх полів
      removeErrorStyles();
  
      // Перевірка на порожні поля
      if (nameInput.value.trim() === '') {
        errorMessage += 'Name is required. ';
        nameInput.classList.add('error'); // додаємо клас для підсвічування
        isValid = false;
      }
      if (phoneInput.value.trim() === '') {
        errorMessage += 'Phone number is required. ';
        phoneInput.classList.add('error'); // додаємо клас для підсвічування
        isValid = false;
      }
      if (emailInput.value.trim() === '') {
        errorMessage += 'Email is required. ';
        emailInput.classList.add('error'); // додаємо клас для підсвічування
        isValid = false;
      } else if (!validateEmail(emailInput.value)) {
        errorMessage += 'Please enter a valid email address. ';
        emailInput.classList.add('error'); // додаємо клас для підсвічування
        isValid = false;
      }
      if (messageInput.value.trim() === '') {
        errorMessage += 'Message is required. ';
        messageInput.classList.add('error'); // додаємо клас для підсвічування
        isValid = false;
      }
  
      // Якщо форма не валідна, виводимо повідомлення про помилку
      if (!isValid) {
        alert(errorMessage);
        event.preventDefault(); // зупиняємо надсилання форми
      } else {
        alert('Form submitted successfully!');
      }
    }
  
    // Функція для перевірки правильності email
    function validateEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return emailRegex.test(email);
    }
  
    // Функція для видалення класу помилки з полів
    function removeErrorStyles() {
      const inputs = document.querySelectorAll('.index-want__input, .index-want__textarea');
      inputs.forEach(input => {
        input.classList.remove('error');
      });
    }
  
    // Додаємо слухача події на кнопку для перевірки форми при натисканні
    form.addEventListener('submit', validateForm);
  });
  