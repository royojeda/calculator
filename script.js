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
      result = divide(a, b);
      break;
    default:
      break;
  }
  return result;
}

let displayStorage = '';
const display = document.querySelector('#display');

numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (displayStorage.length < 10) {
      if (displayStorage.includes('.') && number.textContent === '.') return;
      displayStorage += number.textContent;
      display.textContent = displayStorage;
    }
  });
});

const operators = document.querySelectorAll('.operator');
let firstOperand = '';
let currentOperator = '';
let secondOperand = '';

operators.forEach(operator => {
  operator.addEventListener('click', () => {
    if (displayStorage === '') return;
    if (firstOperand !== '') {
      calculate();
      firstOperand = displayStorage;
      currentOperator = '';
    } else {
      firstOperand = Number(displayStorage);
    }
    currentOperator = operator.textContent
    displayStorage = '';
  });
});

const equals = document.querySelector('#equals');

equals.addEventListener('click', () => {
  if (displayStorage === '') return;
  calculate();
});

const clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
  displayStorage = '';
  display.textContent = displayStorage;
  firstOperand = '';
  currentOperator = '';
  secondOperand = '';
});

function calculate() {
  if (firstOperand === '' || currentOperator === '') return;
  displayStorage = display.textContent;
  secondOperand = Number(displayStorage);
  operationResult = operate(currentOperator, firstOperand, secondOperand);
  if (operationResult.toString().length > 10) {
    operationResult = limitResult(operationResult);
  }
  displayStorage = operationResult;
  display.textContent = displayStorage;
  firstOperand = '';
  currentOperator = '';
  secondOperand = '';
  if (operationResult === Infinity) {
    displayStorage = '';
  }
}

function limitResult(result) {
  splitResult = result.toString().split('.');
  decimalPlaces = 9 - splitResult[0].length;
  return Math.round((result + Number.EPSILON) * 10**decimalPlaces) / 
    10**decimalPlaces;
}
