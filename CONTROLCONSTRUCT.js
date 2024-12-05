/*  COntrol Construct: 

    There are 3 types of control construct in javaScript
  ======================================================
  1. Conditional Statements
  2. Loops
  3. control flow modifier
  ======================================================

  1. Conditional Statements:
  ---------------------------
  Conditional statements are used to execute different blocks of code based on certain conditions.
  a.if
  b.else if
  c.else
  d.switch
  
  
  2.Loops
  ---------------------------
  Loops are used to execute a block of code repeatedly for a specified number of times.
  a.for
  b.while
  c.do-while
  d.for...of loop
  e.for...in loop
  f.forEach loop


  3. control flow modifier
  ---------------------------
  control flow modifier are used to change the normal flow of the program.
  a.break
  b.continue
  c.return


*/
//conditional constructs
let age1 = 12;
if(age1>=18){
    console.log("You can vote"); 
}
else{
    console.log("you are not eligible");
    
}

let num=-11;
if(num>0){
    console.log("Positive");
    if(num % 2==0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
else{
    console.log("Negative");
}

let age = 2;
if(age<=5){
    console.log("Baby"); 
}
else if(age>=6 && age<12){
    console.log("Child");
}
else if(age >=12 && age<18){
    console.log("Teen");
}
else if(age>=18 && age < 35){
    console.log("Adult");
}
else{
    console.log("Old");
    
}


//Switch case
month=5;
switch(month){
    case 12:
    case 1:
    case 2:
          console.log("Winter");
          break;
    
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Summer");
        break;
 
    case 7:
    case 8:
         console.log("Monsoon");
         break;

    case 9:
    case 10:
    case 11:
        console.log("Spring");
       
    default:
        console.log("Invalid");
}


function processOrder(item) {
    switch (item) {
        case "burger":
            return "Preparing your burger. It will take 10 minutes.";
        case "pizza":
            return "Baking your pizza! It will be ready in 15 minutes.";
        case "pasta":
            return "Cooking pasta with fresh ingredients. Ready in 12 minutes.";
        default:
            return "Item not available. Please check our menu.";
    }
}
console.log(processOrder("burger")); // Output: Preparing your burger. It will take 10

//Looping statements
let fruits =["Apple","Banana","Cherry","Mango"];
console.log(fruits);

for (f of fruits ) {
    console.log(f);
    
}

let student = {name: "sanjith", age: 23 , marks: 90};
console.log(student);
for( f in student){
    console.log(f + " -> " + student[f]);
}


for(let i=1;i<=10;i++){
    console.log(i);
    if(i==5) break;
}

for(let i=1;i<=10;i++){
    if(i==5) continue
    console.log(i);
}