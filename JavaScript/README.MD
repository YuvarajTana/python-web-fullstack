## JavaScript

- Data Types (Number, String, Boolean, null, undefined)

- How to create variables using var, let and const 

- difference between above 

- operatos (=, +, -, *, /, &&, ||, ==, ===)

- Conitional statements
  - ( (Simple if), (if - else), (nested if), (if - else if - else) )
  - switch
  
- Loops
  - while
  - do while
  - for 
  - for of
  - for in

- Functions

  - What is function
  - How to create a function
  - How to invoke a simple function
  - Invoke functions with arguments 
  - Function expression and declaration
  - Arrow functions

- Arrays
  1. what is array
  2. How to crate a array
  3. How add and remove elements from front and back of array (push, pop, shift and unshift)
  4. How to transfer array elements (map, reduce and filter)
  5. How to check element exist in array or not ( includes )
  6. How to merge two or more arrays (concat)
  7. How to iterate array elements (forEach)
  8. How to find elemt in Array ( find )
  9. How to check a varaibale type is array or not (isArray)

- Objects 
  - What is Object 
  - How to create objects in JavaScript
  - Important Object methods 
    1. Object.keys()
    2. Object.values()
    2. Object.entries()
    3. Object.is()
    4. Object.freeze()
    5. Object.assign()
    6. Object.defineProperty()
    7. Object.create()

- class

- scope 

- this 

- closures 

- prototype 

- call, apply, bind 

- Asynchronous programming 
  1. callback
  2. Promises
  3. Async and Await

- Latest JavaScript concepts(ES6+)
  1. let, const
  2. arrow functions
  3. destructuring assignemt
  4. Default, Rest, Spread operator 
  5. Template Strings 
  6. Promises 
  7. Async and Await
  8. Array method includes, find
  9. global this
  10. Object.assign, is, freeze, seal
  11. Generators 

- Working DOM

- timers 

- Important Web APIs
  
  1. XMLHttpRequest, fetch 

  2. localStorare, sessionStorage

  3. 


  


```JavaScript


  let numbers = [1,2,3,4]; 

  // // Push 
  // let updated = numbers.push(5) 

  // [1,2,3,4,5] // mutating 


const person = {
  name:"Pavithra",
  age:20,
};

// person.age = 21;

// person['address'] = "Nellore";


// const person2 = person;

// person2.age = 21;













let numbers2 = structedClone(numbers);

  numbers2.push(5);





let numbers = [1,2,3,4];   


let updatedWithCountryCode = numbers.map(item => {
  return `+91${item}`;
}) // ["+911","+912","+913", "+914"]


numbers === updatedWithCountryCode // True 






```