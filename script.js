const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".calculator-buttons");
const screen = document.querySelector(".screen");

buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const button = e.target;
    const action = button.dataset.action;
    const previousButtonType = calculator.dataset.previousButtonType;

    if (!action) {
      screen.textContent === "0" || previousButtonType === "operator"
        ? (screen.textContent = button.textContent)
        : (screen.textContent = screen.textContent + button.textContent);
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
      calculator.dataset.previousButtonType = "operator";
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
    }

    if (action === "calculate") {
      calculator.dataset.previousButtonType = "calculate";
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
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
      screen.textContent = screen.textContent + button.textContent;

      calculator.dataset.previousButtonType = "calculate";
      button.classList.add("is-depressed");
      setTimeout(function () {
        button.classList.remove("is-depressed");
      }, 75);
    }
  }
});
