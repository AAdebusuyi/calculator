const buttons = document.querySelector(".buttons-container");

//check button type
buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const button = e.target;
    const action = button.dataset.action;
    if (!action) {
      console.log("number button.");
    }
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("operator button.");
    }
    if (action === "decimal") {
      console.log("decimal button");
    }
    if (action === "equal") {
      console.log("equals button");
    }
    if (action === "clear") {
      console.log("clear button");
    }
    if (action === "delete") {
      console.log("delete button");
    }
  }
});
