// String Concatenation Challenge

//Combine name, location, and product using + operator.

/*let dealerName = "Fresh Mart";
let location = "Nairobi";
let product = "Organic Bananas";

const message = "Dealer: " + dealerName + " | Location: " + location + " | Product: " + product;
*/
console.log(message);

// Template Literal Practice

//Rewrite the same result using template literals:

let dealerName = "Fresh Mart";
let location = "Nairobi";
let product = "Organic Bananas";

const message = `Dealer: ${dealerName} | Location: ${location} | Product: ${product}`;

console.log(message);

// Type Checking and Conversion

//Use typeof, and convert types with String(), Number(), Boolean().

let numberValue = 789;
let textValue = "456";
let truthValue = "true";

console.log(typeof numberValue); // number
console.log(typeof textValue); // string

// Convert values
let convertedToString = String(numberValue);
let convertedToNumber = Number(textValue);
let convertedToBoolean = Boolean(truthValue); // any non-empty string becomes true

console.log(convertedToString, typeof convertedToString); // "123", string
console.log(convertedToNumber, typeof convertedToNumber); // 456, number
console.log(convertedToBoolean, typeof convertedToBoolean); // true, boolean

//String Method Challenge

//Use: trim(), toUpperCase(), toLowerCase(), split(), includes(), replace().

let rawString = "  hello world grocery store  ";

// Apply methods
let trimmed = rawString.trim();
let upper = trimmed.toUpperCase();
let containsWord = trimmed.includes("grocery");
let replaced = trimmed.replace("world", "Karibu");
let wordsArray = trimmed.split(" ");

console.log(trimmed); // "hello world grocery store"
console.log(upper); // "HELLO WORLD GROCERY STORE"
console.log(containsWord); // true
console.log(replaced); // "hello Karibu grocery store"
console.log(wordsArray); // ["hello", "world", "grocery", "store"]


//KGL Data Formatting Task

//Combine skills: trim, uppercase, splitting, template literals.

// raw user input
let inputName = "   sunshine traders   ";
let inputProductCode = "  prd-909  ";
let inputLocation = "   mombasa   ";

// clean data
let formattedName = inputName.trim().toUpperCase();
let formattedCode = inputProductCode.trim().toUpperCase();
let formattedLocation = inputLocation.trim().toUpperCase();

// display formatted output
const formattedRecord = `Dealer: ${formattedName} | Code: ${formattedCode} | Location: ${formattedLocation}`;

console.log(formattedRecord);
