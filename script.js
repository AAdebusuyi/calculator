let num1;
let num2;
let operator;

function add(...numbers) {
  return numbers.reduce((total, value) => (total += value), 0);
}

function subtract(...numbers) {
  return numbers.reduce((total, value) => (total -= value));
}

function multiply(...numbers) {
  return numbers.reduce((total, value) => (total *= value));
}

function divide(...numbers) {
  return numbers.reduce((total, value) => (total /= value));
}

//places where this might be called: 'equals to' operator
function operate(num1, num2, operator) {
  num1 = Number(num1);
  num2 = Number(num2);
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      if (num1 === 0 || num2 === 0) return null;
      else return divide(num1, num2);
    default:
      return null;
  }
}
