/*
  Think of Scope as a magical boundary that defines where you can access variables or functions in your code. 
  It’s like knowing which room in a house contains the cookie jar (a very important skill 🍪). 
  If you’re inside the room, you can grab cookies (variables); if not, sorry, no cookies for you.

Types of Scope in JavaScript:
Global Scope: Variables declared outside any function live here. They’re like celebrities — everyone knows them!

Local Scope: Variables declared inside a function live here. They’re shy and can only be accessed inside their own function.

Block Scope: Variables declared with let or const inside a block {} live here. They’re introverts and don’t like stepping out.
*/

var z= 100; // global scope
function outer(){
    let x = 10; // outer  Scope
    console.log("Outer function is executing");
    
    function inner(){
        let y = 20;  // inner Scope
        console.log("inner function is executing");
        console.log("global scope Z = "+z);     
        console.log("Outer scope X = "+x);
        console.log("Inner scope Y = "+y);
    }
    console.log("z =",z);  //we can access z because it is a global scope
    console.log("x =",x); // we can access x here because it's in the outer scope
    //console.log("y =",y);  // we can't access y here because it's in the inner scope
    inner();   
}
console.log("z =",z);    //we can access z because it is a global scope
//console.log("x =",x);    //we can't access x here because it's in the local scope
//console.log("y =",y);    //we can't access y here because it's in block scope
outer();