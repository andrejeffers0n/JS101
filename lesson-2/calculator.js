// ask the user for the first number
// ask the user for the second number
// ask the user for an operation to perform
// perform the operation
// print the results to the terminal

const readline = require("readline-sync");

console.log("Welcome to Calculator, your favorite calculator!");

console.log(`What's the first number?`);
let number1 = readline.question();

console.log(`What's the second number?`);
let number2 = readline.question();

console.log(
  `What operation would you like to perform?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide`
);
let operation = readline.question();

let output;
if (operation === "1") {
  output = Number(number1) + Number(number2);
} else if (operation === "2") {
  output = Number(number1) - Number(number2);
} else if (operation === "3") {
  output = Number(number1) * Number(number2);
} else if (operation === "4") {
  output = Number(number1) / Number(number2);
} else {
  output = "No operator chosen";
}

console.log(`The result is: ${output}. Thank you for choosing Calculator!`);
