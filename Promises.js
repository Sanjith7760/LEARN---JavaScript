//Promises in JavaScript is a special type of method that represents the completion or failure of the Asynchronous operation

//The states of promises are:
//1. Pending: Initial state, neither fulfilled nor rejected.
//2. resolved: Successful operation, promise has a value
//3. rejected: Failed operation, promise has a reason (error)


//resolve: It is a function that indiacates the promises has been successfully completed
//reject: It is a function that indicates the promises has failed to complete


// .then() : then method runs when the promise is resolved
// .catch() : catch method runs when the promise is rejected
prom = new Promise((resolve, reject) => {
    let payment = 'success';
    if(payment === 'success'){
        resolve('Payment successful');
     } 
     else{
        reject('Payment failed');
    }
});

prom
.then((result) => {
    console.log(result); 
    return "message from 1st then()"
})
.then((result) => {
    console.log(result); 
    return "message from 2nd then()"
})
.then((result) => {
    console.log(result); 
})
.catch((result) => {
    console.log(result);
});