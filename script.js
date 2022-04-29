function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a ,b) {
  switch (operator) {
    case '+':
      result = add(a, b);
      break;
    case '-':
      result = subtract(a, b);
      break;
    case '*':
      result = multiply(a, b);
      break;
    case '/':
      dresult = ivide(a, b);
      break;
    default:
      break;
  }
  return result;
}

numbers = document.querySelectorAll('.number');
display = document.querySelector('#display');

numbers.forEach(number => {
  number.addEventListener('click', () => {
    display.textContent += number.textContent;
  });
});
