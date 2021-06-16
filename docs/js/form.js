const form = document.querySelector('.subscription__form');
const description = document.querySelector('.subscription__description');
const submitButton = form.querySelector('.form__submit');
const userEmail = form.querySelector('#email');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

if (storage) {
  description.textContent = 'Thank you! You are subscribed.';
  form.classList.add('hidden');
}

const resetFormData = () => {
  if (isStorageSupport) {
    localStorage.setItem('email', userEmail.value);
  }
  description.textContent = 'Thank you! You are subscribed.';
  form.classList.add('hidden');
}

const sendEmail = (onSuccess, body) => {
  fetch(
    'https://echo.htmlacademy.ru',
    {
      method: 'POST',
      body,
    },
  ).then ((responce) => {
    if (responce.ok) {
      onSuccess();
      resetFormData();
    } else {
      description.textContent = 'Pls check your internet connection';
    }
  })
    .catch(() => {
      description.textContent = 'Pls check your internet connection';
    })
}

setFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (!userEmail.value) {
      description.textContent = 'Pls enter correct email';
    } else {
      sendEmail(
        () => onSuccess(),
        new FormData(evt.target),
      )
    }
  })
}

setFormSubmit(resetFormData);

// for testing only. Reload browser twice to clear local storage

clearLocalStorage = () => {
  localStorage.removeItem('email');
}

clearLocalStorage();
