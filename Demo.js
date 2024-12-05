//querySelector()
const heading = document.querySelector('h1');
console.log(heading);                          //output: selects 1st element with tag name h1
const hh = document.querySelector('p');
console.log(hh);                               //output: selects the first element with class              



//querySelectorAll()
const hhh = document.querySelectorAll('p');
console.log(hhh);                              //output: NodeList(9) [p#p1, p#p2, p#p3, p#p4, p#p5, p.para1, p.para1, p.para1, p.para1]

hhh.forEach((p) => console.log(p.textContent /*or p.innerHTML */)); 
//output: NodeList(5) [p#p1, p#p2, p#p3, p#p4, p#p5]
// This is added dynamically using JavaScript
// We are Using JavaScript in p2 id
// We are Using JavaScript in p3
// We are Using JavaScript in p4
// We are Using JavaScript in p5
// class 1
// class 2
// class 3
// class 4
const hhh1 = document.querySelectorAll('h1');  //output: NodeList(2) [h1, h1]
console.log(hhh1); 




//getElementByID()
const element = document.getElementById('p1');
console.log(element);                          //output: p#p1 'This is p1'

const element1 = document.getElementById('p4');
console.log(element1);                        //output: p#p4 'We are Using JavaScript in p4


//getElementsByClassName()
const js1 = document.getElementsByClassName('para1');
console.log(js1);                             //output: HTMLCollection(4) [p.para1, p.para1, p.para1, p.para1]

console.log(js1[0]);   //output: p.para1 'class 1'
console.log(js1[1]);   //output: p.para1 'class 2'
console.log(js1[2]);   //output: p.para1 'class 3'
console.log(js1[3]);   //output: p.para1 'class 4'




//getElementsByTagName()
const js2 = document.getElementsByTagName('p');
console.log(js2);            //output: HTMLCollection(9) [p#p1, p#p2, p#p3, p#p4, p#p5, p.para1, p.para1, p.para1, p.para1, p1: p#p1, p2: p#p2, p3: p#p3, p4: p#p4, p5: p#p5]
console.log(js2.length); // 9

const js3 = document.getElementsByTagName('h1');
console.log(js3);        //output: HTMLCollection(3) [h1, h1, h1]
const js4 = document.getElementsByTagName('li');
console.log(js4);       //output: HTMLCollection(4) [li, li, li, li]

console.log(js4[0]); //output: li 'item1'
console.log(js4[1]);  //output: li 'item2'
console.log(js4[2]);  //output: li 'item3'
console.log(js4[3]);  //output: li 'item4'
console.log(js4[4]); //output: undefined, because there is no 5th li element in the html document




//Combining multiple methods
const x = document.querySelector('.para1 p');
console.log(x);

document.querySelector('#button').addEventListener('click', () => {
    alert("button clicked");
});