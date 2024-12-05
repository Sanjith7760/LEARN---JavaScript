// arr=[10,39.09,"Sanjith",true];
// arr.forEach(element => {
//     console.log(element);  
// });
// console.log(arr);                         //output: [ 10, 39.09, 'Sanjith', true ]
// console.log(arr.length);                  //output: 4 
// console.log(typeof(arr[0]));              //output: number
// console.log(typeof(arr[arr.length-1]));   //output: boolean
// console.log((arr[arr[0]]));               //output: undefined
// arr[2]=23.34;
// console.log(arr);                         //output: [ 10, 39.09, 23.34, true ]
// arr[4]="RJSS";
// console.log(arr);                         //output: [ 10, 39.09, 23.34, true, 'RJSS' ]




// // delete arr[0];
// // console.log(arr);                         //output: [ 39.09, 23.34, true,'RJSS']





// arr.push(1000);
// console.log(arr);
// arr.push(2000);
// console.log(arr);
// arr.push(3000);
// console.log(arr);                   //Push adds the element at last
// arr.pop();
// console.log(arr);                   //Removes the element at last
// arr.pop();
// console.log(arr);                   //Removes the element at last
// arr.pop(1000);
// console.log(arr);                   //Removes the element at last
// arr.pop();





// console.log(arr);                   //Removes the element at last
// arr.unshift("aaa");
// console.log();
// arr.unshift("bbb");
// console.log(arr);                   //Unshift adds the element at first
// arr.shift();
// console.log(arr);                   //Unshift removes the element at first
// arr.shift();
// console.log(arr);                   //Unshift removes the element at first







// arr1=['red','green','blue','pink','white','blue'];
// console.log(arr1);
// console.log(arr1.includes("green"));                    //Checks the value is present or not

// arr1.splice(2,3,"sanjith","sandeep");                 //splice(start index, delete number of elements, adds new elements)
// console.log(arr1);
// arr2=['a','b','c','d','e','f','g'];
// console.log(arr2);
// arr2.splice(3,3,1,2,3);
// console.log(arr2);
// console.log(arr2.splice(4,2));                         //slice(start index, end index)







// arr3=[1,2,3,4,5,6,7];
// console.log(arr3.indexOf(7));                            //prints the index of elelment
// console.log(arr3);
// console.log(arr3.slice(2,4));
// console.log(arr3.splice(2,4));








// arr4=[65,67,35,98,14,82];
// console.log(arr4);
// console.log(arr4.sort());                                //sorts the array in ascending order







// arr5=[8,9,10,11];
// console.log(arr5);
// console.log(arr5.reverse());                             //reverses the array






// Iterations of array:
// Using for loop
arr=["cat","dog","lion","tiger"];
console.log(arr);
for(let i=0;i<arr.length;i++){
    console.log(arr[i]+" is an animal");
}

// Using forEach
arr1 = ["car","bus","taxi","bike","scooter"];
console.log(arr1);
arr1.forEach(temp => console.log(temp));


// Use of map(): 
//print the square of each element in the array
console.log("mapped array is:");
let num=[1,2,3,4];
console.log(num);
let square = num.map(a => a**2);
console.log(square);


//Check the element is even or odd, and print true or false
let num1=[1,2,3,4];
console.log(num1);
let square1 = num.map(num => num%2===0);
console.log(square1);



// Use of filter():
//print the even numbers from the array
let N = [1,2,3,4,5];
console.log(N);
let even =  N.filter(num => num%2 === 0);
console.log(even);

// print the odd numbers from the array
let N1 = [1,2,3,4,5];
console.log(N1);
let even1 =  N.filter(num => num%2 === 1);
console.log(even1);




//use of reduce()
//print sum of elelments in an array
let array = [1,2,3,4,5];
console.log(array);
let result = array.reduce((sum,array) => sum+array,0);
console.log("SUm of array is",result);

//print the product of array
let array1 = [1,2,3,4,5];
console.log(array1);
let product = array1.reduce((temp,array1) => temp*array1,1);
console.log("Product of array is",product);

//use of concat()
let a=[1,2,3];
let b=[4,5,6];
console.log("array of a=",a);
console.log("array of a=",b);
console.log("Combined array is:",a+","+ b);
console.log("Concatinated array is:"+a.concat(b));
let res = a.concat(b);
console.log("Concatinated array is:",res);


//use of join()
//It joins all the element of array into a string
let x=["india","china","Russia","USA","Uk"];
console.log("Array of countries is:",x);
x.forEach(element => console.log(element));
let y = x.join(" ");
console.log("Countries joined by space is:",y);
let z = x.join("*");
console.log("Countries joined by star is:",z);

// using destruct
let fruits = ["apple","banana","cherry","Mango","Guva","Papaya"];
let [firstfruit, secondfruit,thirdfruit,fourthfruit]=fruits;
console.log("The First fruit is: ",firstfruit);
console.log("The Second fruit is: ",secondfruit);
console.log("The Third fruit is: ",thirdfruit);
console.log("The Fourth fruit is: ",fourthfruit);