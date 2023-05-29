// 1. Variable: Contains a value 

// 2. Value: The value property sets or returns the value of the value attribute of a text field

// 3. Data type: Data types describe the different types or kinds of data that we're gonna be working with and storing in variables.

// 4. Initialization: Storing a value in a variable is called variable initialization

// 5. Tell me the difference between let, var, and const.: let (declares a variable that can be changed) const(declares a variable that cannot be changed) var(they scoped to the ommediate function)

// 6. What is a variable scope?: Variable Scope. Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.

// 7. When can you decide when to use a for or while, forEach and do while loop?: For loop: Use a for loop when you know the exact number of iterations you need to perform. It consists of three parts: initialization, condition, and iteration. The loop will continue executing as long as the condition is true. For loops are commonly used for iterating over arrays, ranges of numbers, or any sequence with a known length.
// While loop: Use a while loop when you want to repeat a block of code as long as a certain condition is true, but you don't know in advance how many iterations will be needed. The condition is checked before each iteration, and if it evaluates to true, the loop continues executing. If the condition becomes false, the loop stops.
// forEach loop: The forEach loop is specific to arrays and is used to iterate over each element of the array. It provides a simpler syntax compared to for loops when you need to perform the same operation on each element of an array.
// do-while loop: A do-while loop is similar to a while loop, but it guarantees that the code block is executed at least once before checking the loop condition. The condition is evaluated after each iteration, and if it is true, the loop continues executing.

// 8. Define hoisting and variable scoping?:Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase before the code is executed. This means that you can use variables and functions before they are actually declared in the code, whereas variable scoping refers to the visibility and accessibility of variables within different parts of the code. JavaScript has different scopes, including global scope, function scope, and block scope (introduced with let and const in ES6).

// How to create a function called fullName that returns your full name and displays it on the console. 
// function display (value){
//     console.log(value)
// }
// let fullName = 'Jason Viljoen'
// display(fullName)

// let firstName = 'Jason';
// let lastName = 'Viljoen';
// let age = 24;
// let subjects = ['Math, Physics, Eng, Afr, ETech, Bio, L.O']
// let address = {   
//     street: 'Karneool street',
//     streetNumber: 7001,
//     suburb: 'Bluedowns',
//     city: 'Cape Town',
//     countryName: 'South Africa'
// }
// console.log(firstName, lastName, age, subjects, address)


// function display () {
//     let number1 = parseInt(document.querySelectorById('number1').value)
//     let number2 = parseInt(document.querySelectorById('number2').value)
//     let operator = document.querySelectorById('operator').value
// }

// let result;

// switch(operator){
// case'+': result = number1 + number2;
// break;
// case '-': result = number1 - number2;
// break;
// case '*': result = number1 * number2;
// break;
// case '/': result = number1 / number2;
// break;
// default: result = 'invalid operator'
// } 

// document.getElementById('result').innerHTML = 'Answer:' + display;

// function display() {
//     let number1 = parseInt(document.getElementById('number1').value);
//     let number2 = parseInt(document.getElementById('number2').value);
//     let operator = document.getElementById('operator').value;
//     let result;
  
    
//     switch (operator) {
//       case '+':
//         result = number1 + number2;
//         break;
//       case '-':
//         result = number1 - number2;
//         break;
//       case '*':
//         result = number1 * number2;
//         break;
//       case '/':
//         result = number1 / number2;
//         break;
//       default:
//         result = 'Invalid operator';
//     }
  
//     document.getElementById('result').innerHTML = 'Answer: ' + result;
//   }
  
let subjects = ['p'+ 'r'+ 'o'+ 'g'+ 'r' +'a'+ 'm'+ 'm'+ 'i'+ 'n'+ 'g']
let rev = subjects.reverse();
console.log(rev.join());
