// Objects

const books = {
    title: "My die me die",
    author: "Sriram", 
    year: "2002",
    strObj(){
        return `${this.title} book is writtern by ${this.author}`;
    },
    upDate(year){
        this.year = year;
    }
}
console.log(books);

//Object Methods
console.log(books.strObj());
books.upDate(2005);
console.log(books);

//Nested Objects

const company = {
    name: "Tech Corp",
    address: {
      street: "123 Main St",
      city: "San Francisco",
      state: "CA",
      zip: "94105"
    },
    employees: [
      {
        firstName: "John",
        lastName: "Doe",
        position: "Software Engineer"
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        position: "Project Manager"
      }
    ]
  };
  
  console.log(company);
for(let i =0; i<2; i++){
    console.log(company.employees[i].firstName);
}  

// Object Iteration
// Create the library object with properties and an array of book objects
const library = {
    name: "City Library",
    books: [
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949
      },
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
      }
    ]
  };
  
  // Using for...in loop to iterate over properties of the library object
  for (const key in library) {
    console.log(`${key}: ${library[key]}`);
  }
  
  // Special case to log details of each book in the books array
  if (Array.isArray(library.books)) {
    library.books.forEach((book, index) => {
      console.log(`Book ${index + 1}:`);
      for (const key in book) {
        console.log(`  ${key}: ${book[key]}`);
      }
    });
  }


console.log(Object.keys(library));
console.log(Object.values(library));