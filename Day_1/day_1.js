// Comments and Documentation

// This is a single-line comment

/*
 This is a multi-line comment
 explaining that this code prints "Hello!"
*/
console.log("Hello!");

// Variable Declaration with let

let name = "teklay";
let age = 25;

console.log(name);
console.log(age);

//Variable Declaration with const

const country = "uganda";
const pi = 3.14159;

console.log(country);
console.log(pi);

//Checking Data Types

let exampleString = "Hello";
let exampleNumber = 42;
let exampleBoolean = true;

console.log(typeof exampleString); // string
console.log(typeof exampleNumber); // number
console.log(typeof exampleBoolean); // boolean

//String Data Type

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;

console.log(fullName);

//Number Data Type (Basic Arithmetic)

let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2

// Boolean Data Type

let isCodingFun = true;
let isRaining = false;

console.log(isCodingFun);
console.log(isRaining);

// Undefined vs Null

let notAssigned; // undefined
let emptyValue = null; // null

console.log(notAssigned);
console.log(emptyValue);

// Using typeof Operator

console.log(typeof 100); // number
console.log(typeof "Hello"); // string
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a known JavaScript quirk)
console.log(typeof undefined); // undefined

//console.log() Practice

console.log("Debugging test...");
let x = 50;
console.log("Value of x =", x);
