
//addEventListener
//1. MOUSE
//a. click

// function press(){
//      button = document.querySelector('#btn');
//     button.classList.toggle('active');
//     alert("Button Clicked!");
// } 

// OR we can use

// document.querySelector('#btn').addEventListener('click',() => {
//    b = document.querySelector('#btn');
//    b.classList.toggle('active');
//     alert("Button is Clicked");
// });


// document.querySelector('#btn').addEventListener('click',() => {
//     const heading = document.querySelector('#head');
//     heading.textContent = "Changed Dynamically";
//    b = document.querySelector('#btn');
//    b.classList.toggle('active');
//     alert("Button is Clicked");
// });



//b. dblclick

// document.querySelector('#btn').addEventListener('dblclick',() => {
//     b = document.querySelector('#btn');
//     b.classList.toggle('active');
//     alert("Button is Double Clicked");
// });


//c. mouseover

// document.querySelector('#btn').addEventListener('mouseover',() => {
//     b = document.querySelector('#btn');
//     b.classList.toggle('active');
//     alert("Mouse over the button");
// });


//d. mouseout

// document.querySelector('#btn').addEventListener('mouseout',() => {
//     b = document.querySelector('#btn');
//     b.classList.toggle('active');
//     alert("Mouse left the button ");
// });


//e. mousemove

// document.querySelector('#btn').addEventListener('mousemove',() => {
//     b = document.querySelector('#btn');
//     b.classList.toggle('active');
//     alert("Mouse moves within the button ");
// });






//2. Keyboard Events
//a. keydown

// document.querySelector('#btn').addEventListener('keydown',(event) => {
//     b = document.querySelector('#btn');
//     b.classList.toggle('active');
//     alert(`Key pressed down ${event.key}`);
// });



//b.  keyup

// document.querySelector('#btn').addEventListener('keyup',(event) => {
//     b = document.querySelector('#btn');
//     b.classList.toggle('active');
//     alert(`Key released ${ event.key}`);
// });








//3. Window Events
//a. DOMContentLoaded

// window.addEventListener('DOMContentLoaded',() => {
//      alert("DOM content Loaded Successfully! ");
// });


//b. resize

// window.addEventListener('resize',() => {
//     alert("Window resized successfully");
// });


//c. scroll

// window.addEventListener('scroll',() => {
//     alert("The User is Scrolling ");
// });






// 4.  Form Events
//a. submit

// document.querySelector('#myForm').addEventListener('submit', (event) => {
//     event.preventDefault();  //Prevents page refresh
//     alert("Form submitted successfully");
// });


//b.  change

// document.querySelector('#adress').addEventListener('change', (event) => {
//     event.preventDefault();  //Prevents page refresh
//     alert(`Adress changed to: ${event.target.value}`);
// });


//c.  focus

// document.querySelector('#adress').addEventListener('focus', (event) => {
//     event.preventDefault();  //Prevents page refresh
//     alert("Adress is focused");
// });


//d.  blur

// document.querySelector('#adress').addEventListener('blur', (event) => {
//     event.preventDefault();  //Prevents page refresh
//     alert("Adress field lost focus");
// });


//e.  input

// document.querySelector('#adress').addEventListener('input', (event) => {
//     event.preventDefault();  //Prevents page refresh
//     alert(`Current Adress ${event.target.value}`);
// });




// TASK 1:
//Creating Website to count the characters in the text Area

// const area = document.getElementById('area');
// const count = document.getElementById('count');

// area.addEventListener('input', () => {
//      count.textContent = ` ${area.value.length}`
//     //count.textContent = area.value.length;
// });




// TASK 2:
//  Creating Website to Add the list of items to the Grocery 

// const itemInput = document.getElementById('itemInput');
// const addItem = document.getElementById('addItem');
// const list = document.getElementById('list');

// addItem.addEventListener('click', () => {
//     const newItem = document.createElement('li');
//     newItem.textContent = itemInput.value
//     list.appendChild(newItem);
//     itemInput.value = '';
// })




// TASK 3:
// Create a Buttons Increment, Decrement and Reset to count the number of clicks on the button
const counterValue = document.getElementById('counterValue');

const incrementButton = document.getElementById('incrementButton');

const decrementButton = document.getElementById('decrementButton');

const resetButton = document.getElementById('resetButton');

let count = 0;

incrementButton.addEventListener('click', () => { 
    count++; 
    counterValue.textContent = count;
 });

 decrementButton.addEventListener('click', () => {
      if(count > 0) {
       count--; 
       counterValue.textContent = count;
    }
});

resetButton.addEventListener('click', () => { 
    count = 0; 
    counterValue.textContent = count; 
});