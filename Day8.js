//Template Literals 

const name = 'Sriram';
const age = '22';

console.log(`${name} is graduated at the age of ${age}`);

console.log(`${name} is graduated
and he is ${age}`);

// Destructuring

const x = [1, 2, 3, 4, 5];
const[y, z] = x;  // Here y & z acts as first nd second indexs
console.log(y,z);
// Same with objects as well

const obj = {a: 1, b: 2};
const {a,b} = obj;
console.log(a, b);  // This gives 1,2 

// Spread and Rest Operators

const arr = [1, 2, 3, 4, 5];
console.log(...arr); // we can do same with objects also 

// Array literals

// Push, Splice, concat
const arr1 = [1, 2, 3];
const arr2 = [...arr1];

arr2.push(4); // arr2 becomes 1,2,3,4

arr1.concat(arr2); // arr1 1,2,3,1,2,3,4

//Rest Operators 

function sum(...more){
    return more.reduce((acc, curr)=> acc + curr);
    
}
console.log(sum(1,2,3,4,5));

// Default Parameters

function Add(a, b=1){
    console.log(a + b);
}

Add(5,3);
Add(5);

// Enhanced Object Literals

const Name = "John Doe";
const Age = 30;
const profession = "Software Engineer";

// Creating an object using enhanced object literals
const person = {
    Name,           // Property shorthand (equivalent to name: name)
    age,            // Property shorthand (equivalent to age: age)
    profession,     // Property shorthand (equivalent to profession: profession)

    // Method definition shorthand
    greet() {
        console.log(`Hello, my name is ${this.Name}.`);
    },

    // Method using an arrow function
    getAge: () => Age,

    // Computed property name, This is to update the key dynamically
    ['current' + 'Profession']: profession, // THis is equivalent to currentProfession: "Software Engieer"

    // Method with parameters
    updateAge(newAge) {
        this.Age = newAge;
        console.log(`Age updated to ${this.age}`);
    }
};

// Logging the object
console.log(person);

// Calling methods
person.greet(); // Logs: "Hello, my name is John Doe."
console.log(`Age: ${person.getAge()}`); // Logs: "Age: 30"
person.updateAge(31); // Updates age and logs: "Age updated to 31"


// Computed properties 
// Define some variables
const prefix = 'user';
const id = 101;
const field = 'email';

// Create an object with computed property names
const user = {
    [prefix + 'ID']: id,               // Computed property name: 'userID'
    [prefix + 'Name']: 'John Doe',     // Computed property name: 'userName'
    [prefix + field]: 'johndoe@example.com'     // Computed property name: 'email'
};

// Log the object to the console
console.log(user);
