// /*
//   Hoisting in JavaScript
// Hoisting is the behavior where function and variable declarations are moved to the top of their scope during the memory allocation phase. Here’s how hoisting affects each type:

// Functions: The entire function is hoisted and available throughout the scope.

// var Variables: var variables are hoisted but initialized with undefined, which means you can use them before their declaration, though it’s generally discouraged.

// let and const Variables: These are hoisted in a way, but they’re placed in the TDZ until the code reaches the line where they’re declared. So, they’re not accessible before that point.

// How Hoisting Works in JavaScript: 🧠
// JavaScript code execution has two main phases:

// Memory Allocation Phase: In this phase, JavaScript allocates memory for variables and functions within the global execution context, preparing them for use.

// Code Execution Phase: This is when JavaScript runs the code line-by-line.

// ⏳ The Memory Allocation Phase
// During this phase, JavaScript prepares memory for all variables and functions. Here’s how it manages different types:

// Function Declaration: The entire function is stored in memory. For example, add is immediately available for use throughout the code, thanks to hoisting.

// Variable Declaration with let or const: When a variable is declared with let or const, it’s placed in the Temporal Dead Zone (TDZ) In this state, the variable exists in memory but is uninitialized, meaning it’s not yet accessible. Attempting to use a variable in the TDZ will throw a ReferenceError.

// The TDZ is a phase when a variable declared with let or const exists but isn’t initialized. Here’s an example to illustrate:
// */

// //Without any type 
// a= 10;
// console.log("a =",a);

// //using let
// let a1 = 10;
// console.log("a1 =",a1);

// //using const
// const a2 = 10;
// console.log("a2 =",a2);

// //using var
// var a3 = 10;
// console.log("a3 =",a3);



// //Without any type 
// //console.log("b =",b);           //ReferenceError: b is not defined
// b= 10;
// console.log("b =",b);

// //using let
// //console.log("b1 =",b1);           //ReferenceError: Cannot access 'b1' before initialization
// let b1 = 10;
// console.log("b1 =",b1);

// //using const
// //console.log("b2 =",b2);            //ReferenceError: Cannot access 'b2' before initialization
// const b2 = 10;
// console.log("b2 =",b2);

// //using var
// console.log("b3 =",b3);             //b3 = undefined
// var b3 = 10;
// console.log("b3 =",b3);

// console.log(greet("Alice"));

// function greet(name) {
//     return "Hello, " + name + "!";
// }






// //Function  Overloading:
// //In JavaScript, we can't overload a function like in other languages. However, we can achieve
// //if we overload we can achieve the last parameter only.

// //example 1:
// function greet1() {
//   console.log("Hello sanjith!");
// }

// function greet1(name) {
//   console.log("Hello, " + name);
// }

// greet1();        
// greet1("John");
// greet1("Sanjith");

// //example 2:
// function fun(){
//   console.log("0 - parameter - function");
// }
// function fun(name){
//   console.log("1 - parameter - function");
// }
// function fun(age, id){
//   console.log("2 - parameter - function");  //This is the last function so it will execute
// }
// fun();


// //example 3:

// function fun1(name){
//   console.log("1 - parameter - function");
// }
// function fun1(age, id){
//   console.log("2 - parameter - function");  //Now this will not execute
// }
// function fun1(){
//   console.log("0 - parameter - function");   //Now this is the last function so it will execute
// }

// fun1();

// //example 4;
// //Spread Operator: The spread operator in javascript is used to collect all the arguments passed to a function into array.

// function add(...args) {
//   if (args.length === 2) {
//     return args[0] + args[1];  // Adds two numbers
//   } else if (args.length === 3) {
//     return args[0] + args[1] + args[2];  // Adds three numbers
//   } else {
//     return "Invalid number of arguments.";
//   }
// }

// console.log(add(1, 2));       // Output: 3
// console.log(add(1, 2, 3));    // Output: 6
// console.log(add(1));          // Output: Invalid number of arguments.



//Sum of array by passing arrays to function

function spread(num) {                           //Function without spread operator
  let sum = 0;
  for(let i=0; i<num.length;i++)
    sum+=num[i];
  console.log("SUm is: "+sum); 
  
}
spread([1,2,3,4,5]);  //passing array


//Sum of array by passing numbers to function

function spread1(...num) {                           //Function with spread operator: This spread operator collect all the parameters passed to function into array
  let sum = 0;
  for(let i=0; i<num.length;i++)
    sum+=num[i];
  console.log("SUm is: "+sum); 
  
}
spread1(1,2,3,4,5);  //passing numbers
spread1(1,2,3);

//type 1
function area(length, breadth){
  return length * breadth;
}
let res = area(5, 4);
console.log("The area of the rectangle is: ", res);

//type 2
area1 =(length, breadth) => length * breadth;
console.log("The area of the rectangle is: ", area1(5, 5));

//Call Back Functions
function display(data){
  console.log("The Data is",data);
}
//High order function
function add(a, b, show){
  let result = a + b;
  show(result);
}
add(10,20,display);

//Call Back Functions
function display(name){
  console.log("The Name is:",name);
}
//High order function
function accept_name(name, callback){
  callback(name);
}
accept_name("Rahul", display);


//Example 1 for high order function with normal function
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b){
  return a * b;
}
function div(a, b){
  return a / b;
}
function calculate(a, b, operation){
  let result = operation(a, b);
  console.log("Result using normal function= "+ result);
}
calculate(10, 20, add);
calculate(20,10,sub);
calculate(30, 2, mul);
calculate(10, 2, div);


//High order function with arrow function
 add=(a, b) =>a + b;

 sub=(a, b) => a - b;

mul =(a,b) => a * b;

div = (a, b) => a / b;

calculate= (a, b, operation) => {
  let result = operation(a, b);
  console.log("Result  using arrow function= "+ result);
}
calculate(10, 20, add);
calculate(20,10,sub);
calculate(10, 20, mul);
calculate(10, 2, div);


/*
//Program to find area, perimeter, and diameter of a circle by using high order function with return type
area = (r) => Math.PI*r*r;
perimeter = (r) => 2*Math.PI*r;
diameter = (r) => 2*r;

calculate = (r, operation) => {
  let result = operation(r);
  console.log("Result = "+ result);
}
calculate(10, area);
calculate(5,perimeter);
calculate(10, diameter);
*/

//Program to find area, perimeter, and diameter of a circle by using high order function 
area = (r) => {
  res = Math.PI*r*r;
  console.log("Area of circle = "+ res);
}
perimeter = (r) =>{
   res =2*Math.PI*r;
console.log("Perimeter of circle = "+ res);
}
diameter = (r) => {
  res = 2*r;
console.log("Diameter of circle = "+ res);
}
calculate1 = (r, operation) => {
  let result = operation(r);
}
calculate1(5, area);
calculate1(15,perimeter);
calculate1(12, diameter);


//Inbuild high order function
// 1 . map()
const num = [1, 2, 3, 4, 5];
console.log("The normal array is = "+ num);

const doubled = num.map((x) => x*2);
console.log("The Doubled array is = "+ doubled);

const square = num.map((n) => n*n);
console.log("The squared array is "+ square);


// 2 . filter()
const num1 = [10, 20, 30, 40, 50];
const results = num1.filter((x) => x>=30 );
console.log(results);


// 3 . reduce()
const num2 = [1, 2, 3, 4, 5];
const sum = num2.reduce((a, b) => a + b, 0);
console.log("The sum of an array is:",sum);