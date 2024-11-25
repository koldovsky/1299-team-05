const form = document.getElementById('form');
const username = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const message = document.getElementById('message');

// Показати повідомлення про помилку
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  let small = formControl.querySelector('small');
  if (!small) {
    small = document.createElement('small');
    formControl.appendChild(small);
  }
  small.innerText = message;
}

// Показати успішну обробку
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Перевірка електронної пошти
function checkEmail(input) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Невірний формат електронної пошти');
  }
}

// Перевірка телефонного номера
function checkPhone(input) {
  const re = /^[+]?[0-9]{10,15}$/; // Підтримка телефонів до 15 цифр
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Невірний формат телефону');
  }
}

// Перевірка на заповнені обов'язкові поля
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} є обов'язковим`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });
  return isRequired;
}

// Отримати назву поля для відображення
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Обробник події для форми
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Перевірка на порожні поля
  if (!checkRequired([username, phone, email, message])) {
    // Перевірка електронної пошти та телефонного номера
    checkEmail(email);
    checkPhone(phone);
  }
});
