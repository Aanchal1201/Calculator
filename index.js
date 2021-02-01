let isDataOperation = false;
const basicOperator = "+-*/";

const Current = document.querySelector(".current-operand");
const prevOperand = document.querySelector(".previous-operand");

const numbers = document.querySelectorAll("button[data-number]");
const operators = document.querySelectorAll("button[data-operation]");
const allClear = document.querySelector("button[data-clear]");
const del = document.querySelector("button[data-delete]");
const equal = document.querySelector("button[data-equals]");
const dot = document.querySelector("button[data-dot]");

operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (basicOperator.includes(Current.innerHTML.slice(-1))) {
      Current.innerHTML = Current.innerHTML.slice(0, -1) + operator.innerHTML;
    }
    if (!isDataOperation) {
      Current.innerHTML += operator.innerHTML;
    }
    isDataOperation = true;
  });
});

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    if (Current.innerHTML == "0") {
      Current.innerHTML = number.innerHTML;
    } else {
      Current.innerHTML += number.innerHTML;
    }
    isDataOperation = false;
  });
});

dot.addEventListener("click", function () {
    
  if (Current.innerHTML.includes(dot.innerHTML)) {
    return;
  }
  if (Current.innerHTML == "") {
    Current.innerHTML = "0" + dot.innerHTML;
  }
  else{
    Current.innerHTML += dot.innerHTML;
  }
});

allClear.addEventListener("click", () => {
  Current.innerHTML = "0";
  prevOperand.innerHTML = "";
  isDataOperation = false;
});

del.addEventListener("click", () => {
  Current.innerHTML = Current.innerHTML.slice(0, -1);
  isDataOperation = false;
  if (basicOperator.includes(Current.innerHTML.slice(-1))) {
    isDataOperation = true;
  }
});

equal.addEventListener("click", () => {
  prevOperand.innerHTML = Current.innerHTML;
  if (basicOperator.includes(Current.innerHTML.slice(-1))) {
    Current.innerHTML = Current.innerHTML.slice(0, -1);
  }
  isDataOperation = false;
  Current.innerHTML = String(eval(Current.innerHTML));
  if (Current.innerHTML.split(".")[1] != undefined) {
    if (Current.innerHTML.split(".")[1].length > 2) {
      Current.innerHTML = Number(Current.innerHTML).toFixed(3);
    }
  }
});
