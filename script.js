const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".calculator-buttons");
const screen = document.querySelector(".screen");

buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const button = e.target;
    const action = button.dataset.action;
    const previousButtonType = calculator.dataset.previousButtonType;
    const buttonContent = button.textContent;
    const screenContent = screen.textContent;

    if (!action) {
      screenContent === "0" || previousButtonType === "operator"
        ? (screen.textContent = buttonContent)
        : (screen.textContent = screenContent + buttonContent);
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
      calculator.dataset.previousButtonType = "number";
    }

    if (
      action === "divide" ||
      action === "multiply" ||
      action === "subtract" ||
      action === "add"
    ) {
      const firstNum = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondNum = screenContent;

      if (firstNum && operator && previousButtonType !== "operator") {
        const calcValue = calculate(firstNum, operator, secondNum);
        screen.textContent = calcValue;
        calculator.dataset.firstValue = calcValue;
      } else {
        calculator.dataset.firstValue = screenContent;
      }

      calculator.dataset.firstValue = screenContent;
      calculator.dataset.operator = action;
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
      calculator.dataset.previousButtonType = "operator";
    }

    if (action === "calculate") {
      let firstNum = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      let secondNum = screenContent;
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);

      if (firstNum) {
        if (previousButtonType === "calculate") {
          firstNum = screenContent;
          secondNum = calculator.dataset.modValue;
        }
        screen.textContent = calculate(firstNum, operator, secondNum);
      }
      calculator.dataset.modValue = secondNum;
      calculator.dataset.previousButtonType = "calculate";
    }

    if (action === "clear") {
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
      calculator.dataset.previousButtonType = "clear";
    }

    if (action === "delete") {
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
      calculator.dataset.previousButtonType = "delete";
    }

    if (action === "decimal") {
      if (!screenContent.includes(".")) {
        screen.textContent = screenContent + ".";
      } else if ((previousButtonType = "operator")) {
        screen.textContent = "0";
      }

      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
      calculator.dataset.previousButtonType = "decimal";
    }
  }
});

const calculate = (num1, operator, num2) => {
  let result = "";
  if (operator === "add") {
    result = parseFloat(num1) + parseFloat(num2);
  } else if (operator === "subtract") {
    result = parseFloat(num1) - parseFloat(num2);
  } else if (operator === "multiply") {
    result = parseFloat(num1) * parseFloat(num2);
  } else if (operator === "divide" && num2 === "0") {
    result = "you can't divide by zero bro!";
  } else if (operator === "divide") {
    result = parseFloat(num1) / parseFloat(num2);
  }

  return result;
};

// at the moment calculator only works on two inputs at a time.
