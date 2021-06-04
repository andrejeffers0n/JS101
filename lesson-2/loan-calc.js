const readline = require("readline-sync");

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function isInvalidNumber(num) {
  return num.trim() === "" || Number(num) < 0 || Number.isNaN(Number(num));
}

console.log("<----------------START----------------->");
prompt("Welcome to The Loan Calculator!");

while (true) {
  prompt("How much will you be borrowing today?");

  let loanAmount = readline.question();
  while (isInvalidNumber(loanAmount)) {
    prompt("Please enter a valid number.");
    loanAmount = readline.question();
  }

  prompt(
    "Great choice! How many years would you like your loan to be? We accept any length as our customers always come before a financial gain on our end."
  );

  let loanDurationInYears = readline.question();
  while (isInvalidNumber(loanDurationInYears)) {
    prompt("Please enter a valid number.");
    loanDurationInYears = readline.question();
  }

  prompt(
    "Awesome sauce! It gets even better; we allow our customers to choose their interest rate as well because banks suck and we don't believe in forcing you to choose between eating dinner or paying your off your sweet car! What would you like you interest rate to be?"
  );

  let interestRate = readline.question();
  while (isInvalidNumber(interestRate)) {
    prompt("Please enter a valid number.");
    interestRate = readline.question();
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(loanDurationInYears) * 12;

  let monthlyPayment =
    Number(loanAmount) *
    (monthlyInterestRate /
      (1 - Math.pow(1 + monthlyInterestRate, -Number(months))));

  prompt(
    `That works for us! Based on your request, your monthly payment is $${monthlyPayment.toFixed(
      2
    )}.`
  );

  prompt("Would you like to calculate another loan payment?");

  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === "n") {
    break;
  }
}
console.log("<----------------END----------------->");
