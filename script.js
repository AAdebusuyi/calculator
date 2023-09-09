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
      calculator.dataset.previousButtonType = "number";
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
    }

    if (
      action === "divide" ||
      action === "multiply" ||
      action === "subtract" ||
      action === "add"
    ) {
      calculator.dataset.firstValue = screenContent;
      calculator.dataset.operator = action;
      calculator.dataset.previousButtonType = "operator";
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
    }

    if (action === "calculate") {
      const firstNum = calculator.dataset.firstValue;
      const operator = calculator.dataset.operator;
      const secondNum = screenContent;

      calculator.dataset.previousButtonType = "calculate";
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);

      screen.textContent = calculate(firstNum, operator, secondNum);
    }

    if (action === "clear") {
      calculator.dataset.previousButtonType = "calculate";
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
    }

    if (action === "delete") {
      calculator.dataset.previousButtonType = "calculate";
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
    }

    if (action === "decimal") {
      if (!screenContent.includes(".")) {
        screen.textContent = screenContent + ".";
      } else if ((previousButtonType = "operator")) {
        screen.textContent = "0";
      }

      calculator.dataset.previousButtonType = "calculate";
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
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
