// Functions ----> Heart of Js
function EvenOdd(x){
    if(x>=2 && x%2==0){
        console.log('Ture');
    }
    else{
        console.log('False');
    }
}
EvenOdd(5);
 const sqre = (x)=>{
    x *= x;
    console.log(x);
 }
 sqre(3);

 //Function expression
 const maxNum = function(x,y){
    if(x>=y){
        console.log(x);
    }
    else{
        console.log(y);
    }
 }
 maxNum(5,6);
 const concatenateAndLog = function(str1, str2) {
    const result = str1 + str2;
    console.log(result);
};


concatenateAndLog('Sriram ', 'Mandalapu');

//Arrow Functions

const sum = (x,y)=>{
    console.log(x + y);
}
sum(1,8);

let str = "Gt 650 is a good bike";
const boole = (str) =>{
    let k = str.search('good');
    console.log(k>0);
}
boole(str);

//Function Parameters

function defPara(x, y=6){
    console.log(x*y);
}
defPara(5);

function greetMess(x, y =21){
    console.log(`Student Name - ${x}, age- ${y}`);
}
greetMess("Sriram");

//Higher Order Functions

const dummy = function(){
    console.log("Printed");
    console.log('\n');
}

function highOrder(x, y){
    for(let i =0; i<y; i++){
        x();
    }
}
highOrder(dummy, 4);

function tFA1(x){
    console.log(x);
    return x*x;
}
function tFA2(y){
    console.log(y);
}

function tFA(a,b,c){
    let d = a(c);
    b(d);
}

tFA(tFA1, tFA2, 3);

// Higher-order function that takes a function 'fn' and a number 'times', and returns a new function
function applyMultipleTimes(fn, times) {
  return function(value) {
    let result = value;
    for (let i = 0; i < times; i++) {
      result = fn(result);
    }
    return result;
  };
}

// Example function to be applied multiple times
function increment(num) {
  return num + 1;
}

// Example function to be applied multiple times
function double(num) {
  return num * 2;
}

// Create a new function that applies the 'increment' function 3 times
const incrementThreeTimes = applyMultipleTimes(increment, 3);

// Create a new function that applies the 'double' function 4 times
const doubleFourTimes = applyMultipleTimes(double, 4);

// Test the higher-order function
console.log(incrementThreeTimes(5)); // Output: 8
console.log(doubleFourTimes(2));     // Output: 32


function applyTwoFunctions(fn1, fn2) {
    return function(value) {
      const firstResult = fn1(value);
      const finalResult = fn2(firstResult);
      return finalResult;
    };
  }
  
  // Example usage
  const Double = x => x * 2;
  const square = x => x * x;
  
  const doubleThenSquare = applyTwoFunctions(Double, square);
  
  console.log(doubleThenSquare(3)); // Outputs: 36 (3 * 2 = 6, 6 * 6 = 36)