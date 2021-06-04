const readline = require("readline-sync");
const MESSAGES = require("./calculator-messages.json");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

prompt(MESSAGES.welcome);

while (true) {
  prompt(MESSAGES.firstNumber);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES.invalidInput);
    number1 = readline.question();
  }

  prompt(MESSAGES.secondNumber);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES.invalidInput);
    number2 = readline.question();
  }

  prompt(MESSAGES.chooseOperation);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(MESSAGES.invalidInput);
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

  prompt(`The result is: ${output}.`);
  prompt(MESSAGES.tryAgain);
  let answer = readline.question();

  if (answer !== "1") break;
}

prompt(MESSAGES.thankYou);

// if (answer[0].toLowerCase() !== "y") break;
