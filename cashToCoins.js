const dollarAmount = 3.86;
const piggyBank = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
};

let dollarAmountMult = dollarAmount * 100;
let dollarAmountArray = dollarAmountMult.toString().split("");
let arrayLength = dollarAmountArray.length;

piggyBank.pennies = parseInt(dollarAmountArray[arrayLength-1]);
// piggyBank.nickels = parseInt(dollarAmountArray[arrayLength-1]);
piggyBank.dimes = parseInt(dollarAmountArray[arrayLength-2]);
piggyBank.quarters = parseInt(dollarAmountArray[arrayLength-3] / .25);





console.log(piggyBank)