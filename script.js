const buttons = document.querySelector(".buttons-container");
const screen = document.querySelector(".screen");

//checks the type of button clicked
buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const button = e.target;
    const action = button.dataset.action;
    const buttonValue = button.textContent;
    const screenValue = screen.textContent;
    if (!action) {
      // checks for when number buttons are clicked
      if (screenValue === "0") {
        screen.textContent = buttonValue;
      } else {
        screen.textContent += buttonValue;
      }
    }
    if (
      //checks for when operator buttons are clicked
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      button.classList.add("is-depressed");
      setTimeout(() => {
        button.classList.remove("is-depressed");
      }, 75);
    }
    if (action === "decimal") {
      // checks decimal button...
      screen.textContent += ".";
    }
    if (action === "equal") {
      // checks equals to button...
      console.log("equals button");
    }
    if (action === "clear") {
      // checks clear button...
      console.log("clear button");
    }
    if (action === "delete") {
      //checks delete button...
      console.log("delete button");
    }
  }
});
