function greet1(){
    return Date();
}
console.log("Current Date is:", greet1());

function greet(name, age, dob) {
    return  `My Name is: ${name}! and My Age is: ${age} And My Birth year is: ${dob}`;
}

console.log(greet("Alice",18,2006)); 
console.log(greet("Bob",23,2002)); 

//function declaration
function fun() {
    console.log("Hello Sanjith!");   
}
fun();

//function expression
f1=function() {
  console.log("Hello Sanjith!");
}
f1();

//function expression with => symbol
f1=() => console.log("Hello Sanjith!");
f1(); 





//Functions
// no-argument + no-return type
//Type 1
function add() {
    let a=10;
    let b=20;
    let sum=a+b;
    console.log("Addition: "+sum);  
}
add();

//Type 2
res1 =function add(){
    let a=10;
    let b=20;
    let sum=a+b;
    console.log("Addition Type 1: "+sum); 
}
res1();

//Type 3
r1 = () => {
    let a=10;
    let b=20;
    let sum=a+b;
    console.log("Addition Type 2: "+sum); 
}
r1();





// argument + no-return type
//Type 1
function sub(a,b) {
    
    let diff=a-b;
    console.log("Substraction Type 1: "+diff);  
}
sub(100,30);

//Type 2
res2 = (a,b) =>
{
    let diff=a-b;
    console.log("Substraction Type 2: "+diff);
}
res2(100,30);



//no-argument + return type
//Type 1
function mul(){
    let a=10;
    let b=20;
    let product=a*b;
    return product;
}
console.log("Multiplication Type 1: "+mul());

//Type 2
res3 = () => {
    let a=10;
    let b=20;
    let product=a*b;
    return product;
}
console.log("Multiplication Type 2: "+res3());

//argument + return type
//Type 1
function div(a,b){
    let quotient=a/b;
    return quotient;
}
console.log("Division Type 1: "+div(100,10));

//Type 2
fun1 = function(a,b) {
    let quotient=a/b;
    return quotient;
}
console.log("Division Type 2: "+fun1(100,10));

//Type 3
res4 = (a,b) => {
    let quotient=a/b;
    return quotient;
}
console.log("Division Type 3: "+res4(100,10));

//Type 4
res5 = (a,b) => (a/b)
console.log("Division Type 4: "+res5(100,10));

const isEven = (number) => number % 2 === 0;
console.log(isEven(2));
