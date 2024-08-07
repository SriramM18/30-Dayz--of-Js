//Activity1: Variable Declaration 
var Age = 21;
let Name = "Sriram";
console.log(Name);
console.log(Age);
//constDeclaration
const Human = true;
console.log(Human);
console.log(!Human);

//Data Types
let name = "Sriram";
let age = 21;
let human = true;
const obj = {
    firstName : "Sriram",
    lastName  : "Mandalapu",
    age : 21
};
const cars = ["Ferrari", "BMW", "Porshe"];

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(human));
console.log(typeof(obj));
console.log(typeof(cars));

//Reassigning

let a;
a = 12; // here we can initiate this as let a = 12 also, which is not possible with "const". 
console.log(a);
a = 13;         // if we use "let a" again here it will throws a syntax error. 
console.log(a);

// Reassigning const; 

const b = 20;
console.log(b);
//b = 12;
//console.log(b);  here if we try to reassign the value to "b" it throws type error.

function logValueandType(variable){
   console.log(`Value: ${variable}, Type: ${typeof variable}`);
}

logValueandType(name);
logValueandType(age);