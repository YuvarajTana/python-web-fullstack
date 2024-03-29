## JavaScript

### Data Types

**Primitive Types**
  - Number, 
  - String, 
  - Boolean,
  - null, 
  - undefined
  - Bigint
  - Symbol 

  ```JavaScript

    let age = 25; // typeof(age) will be `number` 
    
    let companyName = "Google India Pvt Ltd" // typeof(companyName) will be 'string'

    let isLoggedIn = true; // typeof(isLoggedIn) will be `boolean`
  
    let findData = null; // typeof(findData) will be 'object' - This is beauce of design issue of JavaScript 

    /*
        Undefined - A top-level property whose value is not defined as MDN
    */
    let result; // typeof(result) will be 'undefined'
  ```
**Complex Types**
  - Object 
  
  ```JavaScript
  let fruits = ['Banana','Apple','Guava','Orange'];

  typeof(fruits) // 'object'


  let employeeDetails = {
    name: "Rajesh",
    age: 26,
    id: 340
  };

  typeof(employeeDetails); // 'object'

  ```

### Creating variables 
  - How to create variables using var, let and const 

  ```JavaScript
  /* 
    When we want constants and don't want change the variable values in future, 
    please create varaibles with const 
  */
  const applicationName = 'Some sort of start'; 

  /*
    Avoid creating variables using var and prefer it with let and its block scoped 
  */

  let age = 25;

  ```

### Operatos
  - operatos (=, +, -, *, /, &&, ||, ==, ===)
  ```JavaScript
  // Arithmetic Operators
    let sum = 30 + 40 // 70

  // Logical Operators
    let isAuthenticatedUser = true;
    let isAdmin = false
    isAuthenticatedUser && isAdmin  // false
    isAuthenticatedUser || isAdmin  // true
  ```


### Conitional statements
  - Simple if

    ```JavaScript
      if(isAdmin){
        // Next steps like - show admin page or allowing any actions
      }
    ```
  - if - else

    ```JavaScript
      if(isAdmin){
        // Next steps like - show admin page or allowing any actions
      }else{
        // Show error message or public page or common page
      }
    ```
  - Nested if

    ```JavaScript
      if(isAuthenticatedUser){
        if(isAdmin){
          // Next steps like - show admin page or allowing any actions
        }
      }else{
        // Show log in page, to authenticate
      }
    ```

  - if - else if - else
  
    ```JavaScript
      if(isAuthenticatedUser){
        if(isAdmin){
          // Next steps like - show admin page or allowing any actions
        }else if(isAnotherUser){
          // Do next with respective actions
        }else{
          // Common page 
        }
      }else{
        // Show log in page, to authenticate
      }
    ```
  - Switch

  ```JavaScript
    // Assume there is more than 3 / 4 conditions, in such scenario it would be prefered switch rather than nested if for better readability 

    // Lets say there are 4 type of users levels each one has with different access levels

    let userType = 'ProductManager';

    switch(userType){
      case 'Admin':
        // Admin logic
        break;
      case 'ProductManager':
        // ProductManager logic
        break;
      case 'Developer':
        // Developer logic
        break;
      case 'Agent':
        // Agent logic
        break;
      default:
        // Any default logic

    }

  ```
### Loops
  - while
  - do while
  - for 
  - for of
  - for in

### Functions

  - What is function
  - How to create a function

    ```JavaScript
      function sayHello(){
      }
    ```
  - How to invoke a simple function
      ```JavaScript
      function sayHello(){
      }

      sayHello() // Invoking a function 

    ```
  - Invoke functions with arguments 
  - Function expression and declaration
  - Arrow functions

### Arrays
  1. What is array 
    - Array is collection of similar type of data or it can have different types of data as well.

  2. How to crate a array
    ```JavaScript
      let techSkills = ['JavaScript','Python','SQL'];
    ```
  3. How add and remove elements from front and back of array (push, pop, shift and unshift)
      ```JavaScript
        let techSkills = ['JavaScript','Python','SQL'];
        techSkills.push('React'); // ['JavaScript','Python','SQL', 'React'];
        techSkills.push('Django'); // ['JavaScript','Python','SQL', 'Django'];
        techSkills.pop();
      ```
  4. How to transfer array elements (map, reduce and filter)
      ```JavaScript
        let numbers = [1,2,3,4,5];
       ```
  5. How to check element exist in array or not ( includes )
  6. How to merge two or more arrays (concat)
  7. How to iterate array elements (forEach)
  8. How to find elemt in Array ( find )
  9. How to check a varaibale type is array or not (isArray)

### Objects 
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

### class
  ``` JavaScript
    
    class Person{
      constructor(name,age){
        this.name = name;
        this.age = age;
      }
    }
    
    const p1 = new Person('Pavan',25);

  ```
### scope && this 

### closures 

### prototype and prototype chain

### Asynchronous programming 
  **callback**
  **Promises**
  **Async and Await**

### Latest JavaScript concepts(ES6+)
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

### Working DOM

  - How to select a element
  - How to create a element

### Important Web API's 

- Important Web APIs
  
  1. XMLHttpRequest, fetch 

  2. localStorare, sessionStorage


  


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