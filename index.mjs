import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp);

const form = document.getElementById('redact-form');
const text = document.getElementById('text');
const scramble = document.getElementById('scramble');
const symbol = document.getElementById('symbol');

form.addEventListener('submit', e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
};

const validateInputs = () => {
  const textValue = text.value.trim();
  const scrambleValue = scramble.value.trim();
  const symbolValue = symbol.value.trim();
};