function validateForm(){
  const form = document.getElementById('redact-form');
  const text = document.getElementById('text');
  const scramble = document.getElementById('scramble');
  const symbol = document.getElementById('symbol');

form.addEventListener("submit", e => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const validateInputs = () => {
  const textValue = text.value.trim();
  const scrambleValue = scramble.value.trim();
  const symbolValue = symbol.value.trim();

  if(textValue === '') {
    setError(text, 'Full text is required!');
  } else {
    setSuccess(text);
  }

  if(scrambleValue === '') {
    setError(scramble, 'Please enter specified words to scramble!');
  } else {
    setSuccess(scramble);
  }

  if(symbolValue === '') {
    setError(symbol, 'Please enter any symbol!');
  } else {
    setSuccess(symbol);
  }
};
  
}




export default validateForm;