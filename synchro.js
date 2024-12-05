/*
//Synchronous Programming: synchronous Programming means the tasks are executed one at a time, in the order they are written.
//Example 1:
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

//Example 2:
console.log("start");
res = () =>{
    for(let i=0; i<1e9; i++){}
    console.log("Long task finished");
}
res();
console.log("End");
/*
Output: start
        Long task finished
        End   


//Asynchronous Programming: Asynchronous Programming means the tasks are executed concurrently, not in the order they are written
// OR Asynchronous Programming means the tasks are executed without waiting for the previous task to finish
//Example 1:

console.log("Task 1 ");
setTimeout(() => {
    console.log("Task 2 (Delayed)");
}, 3000);
console.log("Task 3 ");

//Example 2:

console.log("Start");
setTimeout(() => {
    console.log("Long task finished"); 
}, 2000);
console.log("End");



//Exception Handling
// 0 / 0 = NaN
// 10 / 0 = Infinity
function fun() {
    try {
    let a = 10;
    let b = 1;
    let res = a+b;
    console.log("Sum=",res1);   
    }
    catch(err) {
        console.log("Error:", err.message);
    }
    finally{
        console.log("Finally block");
    }
}
console.log("Program starts");
fun();
console.log("Program ends");


//Using Synchronous programming
function search(){
    console.log("Searching the product");
    
}
function select(){
     console.log("Selecting the product");
     
}
function add_to_cart(){
    console.log("Adding to cart");
    
}
function pay(){
    console.log("Payment is done");
}
function order_recieved(){
    console.log("Order recieved");
    
}
search();
select();
add_to_cart();
pay();
order_recieved();




//Using Asynchronous programming wich gives error
function search(){
    console.log("Searching the product");
    
}
function select(){
     console.log("Selecting the product");
     
}
function add_to_cart(){
    console.log("Adding to cart");
    
}
function pay(){
    console.log("Payment is done");
}
function order_recieved(){
    console.log("Order recieved");
    
}
setTimeout(search(),3000);  // output: TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received undefined
setTimeout(select(),3000);
setTimeout(add_to_cart(),3000);
setTimeout(pay(),3000);
setTimeout(order_recieved(),3000);




//Using Asynchronous programming wich gives Correct answer

setTimeout(function search(){                    
    console.log("Searching the product");
    
},3000);  
setTimeout(function select(){
    console.log("Selecting the product");
    
},3000);
setTimeout(function add_to_cart(){
    console.log("Adding to cart");
    
},3000);
setTimeout(function pay(){
    console.log("Payment is done");
},3000);
setTimeout(function order_recieved(){
    console.log("Order recieved");
    
},3000);                   //output : search() will take 3 sec and remaining all executes at a time




//We can Use every function will take specific amount of time to execute
// each function will take 2 sec to execute after one another
setTimeout(function search(){                    
    console.log("Searching the product");  

    setTimeout(function select(){
        console.log("Selecting the product");
        
        setTimeout(function add_to_cart(){
            console.log("Adding to cart");
            
            setTimeout(function pay(){
                console.log("Payment is done");

                setTimeout(function order_recieved(){
                    console.log("Order recieved");
                    
                },2000); 
            },2000);
        },2000);
    },2000);
},2000); 





/*
//Use of throw keyword

function vote(){
    let age = 8;
    if(age >= 18){
        console.log("You are eligible to vote");
    }
    else{
        throw new Error("You are not eligible to vote");
    }
}
try{
console.log("Program Execution Starts");
vote();
}
catch(err){
    console.log(err.message);
}
finally{
    console.log("Finally block Executed");
    
}
console.log("Program Execution Ends");







//Promises:
//In this program both functions will executes after 5 sec delay
setTimeout(function fun1(){
     console.log("Instruction 1");   
}, 5000);
setTimeout(function fun2(){
    console.log("Instruction 2");
}, 5000);


//In this Program each function takes 5 sec to execute
setTimeout( fun1 =() =>{
    console.log("Instruction 1");  
    setTimeout( fun2 = () =>{
        console.log("Instruction 2");
        setTimeout(fun3 = () =>{
            console.log("Instruction 3");
        }, 3000);
    }, 3000);    
}, 3000);   */



//Scenario: Book a movie ticket using bookMyShow
//Choosing a Movie
//Choose time and location
//Select Seat
//Make Payment
//Enjoy Movie

setTimeout(() => {
    console.log("Choosing a movie");
    
    setTimeout(() => {
        console.log("Choose time and location");
        
        setTimeout(() => {
            console.log("Select Seat");
            
            setTimeout(() => {
                console.log("Make Payment");
                
                
                setTimeout(() => {
                    console.log("Enjoy Movie");
                    
                    
                },2000);
            },2000);
        },2000);
    },2000);
},2000);
