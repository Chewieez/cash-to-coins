const dollarAmount = 3.86;
const piggyBank = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
};

// multiplies by 100 to remove the decimal point
let dollarAmountMult = dollarAmount * 100;
// converts number to a string then splits it into an array
let dollarAmountArray = dollarAmountMult.toString().split("");
// assigns the length of the array to a variable
let arrayLength = dollarAmountArray.length;

/* counts backwards from the back of the array and assigns each digit 
to a unit of money in my piggyBank object. This method doesn't really 
work for nickels so I commented that out. 
 */
piggyBank.pennies = parseInt(dollarAmountArray[arrayLength-1]);
// piggyBank.nickels = parseInt(dollarAmountArray[arrayLength-1]);
piggyBank.dimes = parseInt(dollarAmountArray[arrayLength-2]);
piggyBank.quarters = parseInt(dollarAmountArray[arrayLength-3] / .25);

console.log(piggyBank)

/* I realize this isn't the best solution but it was my first working solution. 
 I spoke with Jared and learned of a few better methods that used if/else and math. 
 */