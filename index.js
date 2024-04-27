import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("\n \t Welcome to my CURRENCY CONVERTER \n"));
const Currency = {
    USD: 1,
    EUR: 0.91,
    GBR: 0.76,
    INR: 74.57,
    CAD: 1.3,
    AUD: 1.65,
    PKR: 277.70,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: ("Enter From Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBR", "INR", "CAD", "AUD", "PKR"]
    },
    {
        name: "to",
        message: ("Enter to Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBR", "INR", "CAD", "AUD", "PKR"]
    },
    {
        name: "Amount",
        message: chalk.bgRed("Enter Your Amount"),
        type: "number",
    }
]);
let userFromCurrency = user_answer.from;
let userToCurrency = user_answer.to;
let fromAmount = Currency[user_answer.from]; //dynamic aproach
let toAmount = Currency[user_answer.to];
let amount = user_answer.Amount;
let baseAmount = amount / fromAmount; //USD base currency
//15000 / 280
let convertedAmount = baseAmount * toAmount;
//console.log(fromAmount);
//console.log(toAmount);
//console.log(amount);
console.log(`Converted amount = ${chalk.green(convertedAmount.toFixed(2))}`);
