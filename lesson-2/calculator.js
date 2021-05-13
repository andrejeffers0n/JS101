// ask the user for the first number
// ask the user for the second number
// ask the user for an operation to perform
// perform the operation
// print the results to the terminal

const readline = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

prompt("Welcome to Calculator, your favorite calculator!");

prompt(`What's the first number?`);
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Nah, that ain't a number. Try again!");
  number1 = readline.question();
}

prompt(`What's the second number?`);
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Nah, that ain't a number. Try again!");
  number2 = readline.question();
}

prompt(`So whatchu tryna do?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide`);
let operation = readline.question();

while (!["1", "2", "3", "4"].includes(operation)) {
  prompt("You gotta choose 1, 2, 3, or 4, bruh!");
  operation = readline.question();
}

let output;
switch (operation) {
  case "1":
    output = Number(number1) + Number(number2);
    break;
  case "2":
    output = Number(number1) - Number(number2);
    break;
  case "3":
    output = Number(number1) * Number(number2);
    break;
  case "4":
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is: ${output}. Thank you for choosing Calculator!`);
