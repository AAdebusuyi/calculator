let num1;
let num2;
let operator;

const screen = document.querySelector(".screen");
const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const subtractBtn = document.getElementById("subtract");
const addBtn = document.getElementById("add");
const equalBtn = document.getElementById("equal");
const numBtn = document.querySelectorAll(".number-button");

numBtn.forEach((number) =>
  number.addEventListener("click", () => displayText(number.textContent))
);

addBtn.addEventListener("click", () => displayText(addBtn.textContent));

subtractBtn.addEventListener("click", () =>
  displayText(subtractBtn.textContent)
);

multiplyBtn.addEventListener("click", () =>
  displayText(multiplyBtn.textContent)
);

divideBtn.addEventListener("click", () => displayText(divideBtn.textContent));

equalBtn.addEventListener("click", () => {
  displayText("= " + evaluate(screen.textContent));
});

function displayText(value) {
  if (screen.textContent == 0) screen.textContent = "";
  screen.textContent += " " + value;
}

function evaluate(value) {
  const array = value.split(" ");
  const removedSpace = array.shift();
  let num1 = array[0];
  let num2 = array[2];
  let operator = array[1];
  let result = operate(num1, num2, operator);
  return result;
}

// take screen content and split it
// assign each of the contents of the split to a global defined variable
// create a function that takes those redefined variables and operates on them

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
