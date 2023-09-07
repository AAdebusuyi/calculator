const calculator = document.querySelector(".calculator");
const buttons = document.querySelector(".buttons-container");
const screen = document.querySelector(".screen");

//checks the type of button clicked
buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const button = e.target;
    const action = button.dataset.action;
    const buttonValue = button.textContent;
    const screenValue = screen.textContent;
    // checks for when number buttons are clicked
    if (!action) {
      if (screenValue === "0" || previousButtonType === "operator") {
        screen.textContent = buttonValue;
      } else {
        screen.textContent += buttonValue;
      }
      button.classList.add("is-depressed");
      setTimeout(() => {
        button.classList.remove("is-depressed");
      }, 75);
    }
    //checks for when operator buttons are clicked
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      button.classList.add("is-depressed");
      //add custom attribute
      calculator.dataset.previousButtonType = "operator";
    }
    // checks decimal button...
    if (action === "decimal") {
      screen.textContent += ".";
      button.classList.add("is-depressed");
      setTimeout(() => {
        button.classList.remove("is-depressed");
      }, 75);
    }
    // checks equals to button...
    if (action === "equal") {
      button.classList.add("is-depressed");
      setTimeout(() => {
        button.classList.remove("is-depressed");
      }, 75);
    }
    // checks clear button...
    if (action === "clear") {
      button.classList.add("is-depressed");
      setTimeout(() => {
        button.classList.remove("is-depressed");
      }, 75);
    }
    //checks delete button...
    if (action === "delete") {
      button.classList.add("is-depressed");
      setTimeout(() => {
        button.classList.remove("is-depressed");
      }, 75);
    }

    Array.from(button.parentNode.children).forEach((b) =>
      b.classList.remove("is-depressed")
    );
  }
});
