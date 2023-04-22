import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-msg";

const formData = {};

const refs = {
  form: document.querySelector(".js-feedback-form"),
  textarea: document.querySelector(".js-feedback-form textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);
// formData[e.target.name] = e.target.value;

// console.log(formData);

// })

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

// - Получаем значение поля
// - Сохраняем его в хранилище
// - Можно добавить throttle
function onTextareaInput(evt) {
  const message = evt.target.value;

  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
