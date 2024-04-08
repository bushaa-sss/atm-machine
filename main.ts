//cli atm machine
import inquirer from "inquirer";

let current_balance: number = 1000;
const pin_code: number = 8523;

let ans = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin",
    type: "number",
  },
]);
//pin code
if (pin_code === ans.pin) {
  console.log("correct pin!");
  //option selection
  let selection = await inquirer.prompt([
    {
      name: "operation",
      message: "select any option",
      type: "list",
      choices: ["cash widrawl", "current balance", ],
    },
  ]);
  //cash widrawl
  if (selection.operation === "cash widrawl") {
    let amount = await inquirer.prompt([
      {
        name: "amount2",
        message: "enter amount",
        type: "number",
      },
    ]);
    //if amount greater than balance
    if (amount.amount2 > current_balance) {
      console.log("invalid transaction");
    } else {
      current_balance -= amount.amount2;
      console.log("Remaining Balance: \n" + current_balance);
    }
  }

  if (selection.operation === "current balance") {
    console.log("current Balance= " + current_balance);
  }
} else {
  console.log("invalid pin!");
}
