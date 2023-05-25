let mainOperand = "";
// let currentOperand = "";
let currentSelection = "";
let firstNumber = null;
let secondNumber = null;
let operation = null;
let operatorPressed = false;

// Select all numbers in nodelist
let numbers = document.querySelectorAll(".number");

// Select all operands in nodelist
let operands = document.querySelectorAll(".operand");
let currentOperand = document.querySelector(".currentOperand");

// Screen select
let screen = document.querySelector(".screen");

// decmial select
let decimal = document.querySelector(".decimal");

// Function to append number to main screen
function appendNumber() {
  if (screen.textContent === "0") {
    screen.textContent = null;
    screen.textContent += this.textContent;
  } else {
    screen.textContent += this.textContent;
  }

  //   if (operatorPressed) {
  //     screen.textContent = null;
  //     screen.textContent += this.textContent;
  //   } else {
  //     screen.textContent += this.textContent;
  //   }
}

// function to append number + operand to sub screen
function appendSubScreen() {
  operation = this.textContent;
  currentOperand.textContent = screen.textContent + this.textContent;

  if (firstNumber === "0" || firstNumber === null) {
    firstNumber = screen.textContent;
    screen.textContent = "0";
  } else {
    secondNumber = screen.textContent;
  }
  if (firstNumber !== null && secondNumber !== null) {
    screen.textContent = eval(`${firstNumber}${operation}${secondNumber}`);
    firstNumber = screen.textContent;
    currentOperand.textContent = screen.textContent + this.textContent;
    screen.textContent = "0";
  }
  operatorPressed = true;
}

// Function for equal sign

function equalPressed() {
  if (firstNumber === "0" || firstNumber === null) {
    firstNumber = screen.textContent;
    screen.textContent = "0";
  } else {
    secondNumber = screen.textContent;
  }
  screen.textContent = eval(`${firstNumber}${operation}${secondNumber}`);
  currentOperand.textContent = screen.textContent;
  firstNumber = "0";
  secondNumber = null;
}

// function for decimal
function decimalPressed() {
  if (screen.textContent.includes(".")) return;
  else {
    screen.textContent += ".";
  }
}

// Add event listener for each NUMBER
numbers.forEach((number) => {
  number.addEventListener("click", appendNumber);
});

operands.forEach((operand) => {
  operand.addEventListener("click", appendSubScreen);
});

// equal button
equal = document.querySelector(".equal");
equal.addEventListener("click", equalPressed);

// decmial functionalityy
decimal.addEventListener("click", decimalPressed);

// clear
let clear = document.querySelector(".clear");
function clearScreen() {
  firstNumber = null;
  secondNumber = null;
  screen.textContent = "0";
  currentOperand.textContent = "0";
}

clear.addEventListener("click", clearScreen);

// delete
let del = document.querySelector(".delete");
function deleteLastNumber() {
  if (screen.textContent !== 0) {
    let a = screen.textContent;
    a = a.slice(0, -1);
    screen.textContent = a;
  }
}
del.addEventListener("click", deleteLastNumber);
