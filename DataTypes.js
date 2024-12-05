 /*   DATA TYPES in JAVASCRIPT

=====================================
There are 2 types of Data Types

1. Primitive Data Types
2. Non-Primitive Data Types
=====================================  

Primitive Data Types includes :
1. Numbers
2. Strings
3. Boolean
4. Null
5. Undefined
=====================================

Non Primitive Data Types includes :
1. Arrays
2. Objects
=====================================

*/

//Examples of primitive data types

let num = 20;
console.log(num);          //output : 20
console.log(typeof(num));  //output : number

let name = "Sanjith";     
console.log(name);          //output : Sanjith
console.log(typeof(name));   //output : String

let isEven = true;
console.log(isEven);          //output : true
console.log(typeof(isEven));  //output : boolean

let num1 = null;
console.log(num1);          //output : null
console.log(typeof(num1));  //output : object

let user;
console.log(user);          //output : undefined
console.log(typeof(user));  //output : undefined


//Examples of Non primitive data types
let arr=[10, 20, 30 ,40];
console.log(arr);          //output : [10, 20, 30, 40]
console.log(arr[0]);       //output : 10
console.log(typeof(arr));  //output : object

let Student = {
    name : "Sanjith",
    age : 23,
}; 
console.log("My name is:",Student.name);     //output : My name is: Sanjith
console.log("My age is:",Student.age);       //output : My age is: 23
console.log(typeof(Student));               // output : object

function greet(){
    console.log("Hello");
}
greet();                                        // output : Hello
console.log(typeof(greet()));                 // output : function




