import throttle from "lodash.throttle";

const STORAGEKEY = "feedback-msg";

const refs = {
  form: document.querySelector(".js-feedback-form"),
  textarea: document.querySelector(".js-feedback-form textarea"),
};

refs.form.addEventListener("submit", onFormSubmit);
refs.textarea.addEventListener("input", throttle(onTextareaInput, 500));

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGEKEY);
}

// - Получаем значение поля
// - Сохраняем его в хранилище
// - Можно добавить throttle
function onTextareaInput(evt) {
  const message = evt.currentTarget.value;

  localStorage.setItem(STORAGEKEY, message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGEKEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
