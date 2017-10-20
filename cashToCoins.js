const dollarAmount = .24;
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
to a unit of money in my piggyBank object. This method doesn't work for nickels. 
 */

// Checks if there is a number at the pennies index in the array. If there is, place the correct amount of pennies into the piggyBank object. To avoid a NaN being placed into the object value. 
if (dollarAmountArray[arrayLength-1] !== undefined) {
    piggyBank.pennies = parseInt(dollarAmountArray[arrayLength-1]);
}

// This method does not use nickels since there isn't a specific digit placement for the value of a nickel in array.

// Checks if there is a number at the dimes index in the array. If there is, place the correct amount of dimes into the piggyBank object. To avoid a NaN being placed into the object value.
if (dollarAmountArray[arrayLength-2] !== undefined) {
    piggyBank.dimes = parseInt(dollarAmountArray[arrayLength-2]);
}

// Checks is there is a number at the quarters index in the array. If there is, place the correct amount of quarters into the piggyBank Object by dividing by the value of a single quarter. (.25) To avoid a NaN being placed into the object value.
if (dollarAmountArray[arrayLength-3] !== undefined){
piggyBank.quarters = parseInt(dollarAmountArray[arrayLength-3] / .25);
}



console.log(piggyBank)

// 
/* I realize this isn't the best solution but it was my first working solution. 
 I spoke with Jared and learned of a few better methods that used if/else and math. 
 */