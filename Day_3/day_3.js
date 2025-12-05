// Tonnage Validation

//Declare a variable called procurementTonnage and check if it meets
// the minimum requirement of 1000kg using the >= operator. Then log the result as a boolean.

let procurementTonnage = 1200;

let meetsRequirement = procurementTonnage >= 1000;

console.log("Meets minimum requirement:", meetsRequirement);

// Strictness Check

//We compare a cost stored as a string and as a number, using loose (==) and strict (===) equality.

let costStr = "5000";
let costNum = 5000;

console.log(costStr == costNum); // true (because == converts types)
console.log(costStr === costNum); // false (because === checks both value AND type)




//exercises part 2



//  Complex Validation
let dealerName = "Daniel Irenge";
let costUgX = 15000;

let isValidRecord = dealerName.length >= 2 && costUgX >= 10000;
console.log("Is record valid?", isValidRecord);

//  Date Logging
let saleDate = new Date();

let day = saleDate.getDate(); // Day of the month
let month = saleDate.getMonth() + 1; // Month is 0-based, so add 1
let year = saleDate.getFullYear();

console.log(`Sale on: ${day}/${month}/${year}`);
