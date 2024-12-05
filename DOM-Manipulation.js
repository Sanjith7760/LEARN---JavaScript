/*
const hh = document.querySelector('h1');
hh.textContent = "Welcome to Dynamic Text";


const heading = document.querySelector('p');
heading.style.color = "blue";


const x = document.querySelector('#p1');
x.style.color = "green";
x.style.backgroundColor = "black";


function goDark(){
     alert('button clicked to change into Dark Mode');
    b = document.querySelector('body');
    b.style.backgroundColor = "black";
    b.style.color = "white";
}

function goLight(){
    alert('button clicked to change into Normal Mode');
    l = document.querySelector('body');
    l.style.backgroundColor="White";
    l.color="black";
}

//Select the selector to add or remove
const list = document.querySelector('ul');
//Creating a new elements in list li
//Adding the item 1 dynamically
const newItem = document.createElement('li');
newItem.textContent = "New Item 1 added Dynamically";
list.appendChild(newItem);
//Adding the item 2 dynamically
const newItem1 = document.createElement('li');
newItem1.textContent = "New Item 2 added Dynamically";
list.appendChild(newItem1);
//Adding the item 3 dynamically
const newItem2 = document.createElement('li');
newItem2.textContent = "New Item 3 added Dynamically";
list.appendChild(newItem2);
//Removing the item 1 dynamically
const firstItem = list.getElementsByTagName('li');
list.removeChild(firstItem[0]);
list.removeChild(firstItem[2]);


//Adding and removing the Boxes
function addBox(){
     b = document.querySelector('body');
     box = document.createElement('div');
    b.appendChild(box);
}

function removeBox(){
    b = document.querySelector('body');
    box = b.querySelector('div');
    if (box) {
        b.removeChild(box);
    } else {
        alert('No box to remove!');
    }

}
*/





/*
//Adding and removing the Classes 
function java(){                                                            
    j = document.querySelector('#java');
    j.classList.add('active');

    p = document.querySelector('#python');
    p.classList.remove('active');
    c = document.querySelector('#cpp');
    c.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');
}

function python(){
    p = document.querySelector('#python');
    p.classList.add('active');

    j = document.querySelector('#java');
    j.classList.remove('active');
    c = document.querySelector('#cpp');
    c.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');

}

function cpp(){
    c = document.querySelector('#cpp');
    c.classList.add('active');

    p = document.querySelector('#python');
    p.classList.remove('active');
    j = document.querySelector('#java');
    j.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');
}

function html(){
    h = document.querySelector('#html');
    h.classList.add('active');

    c = document.querySelector('#cpp');
    c.classList.remove('active');
    p = document.querySelector('#python');
    p.classList.remove('active');
    j = document.querySelector('#java');
    j.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');
}

function css(){
    cs = document.querySelector('#css');
    cs.classList.toggle('active');                 //Using toggle we can add or remove the class

    c = document.querySelector('#cpp');
    c.classList.remove('active');
    p = document.querySelector('#python');
    p.classList.remove('active');
    j = document.querySelector('#java');
    j.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
}
*/


/*
//This is the same above program but in this we are using the eventListener, this also works the same as the above program
document.querySelector('#java').addEventListener('click', () =>{                                                            
    j = document.querySelector('#java');
    j.classList.add('active');

    p = document.querySelector('#python');
    p.classList.remove('active');
    c = document.querySelector('#cpp');
    c.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');
});

document.querySelector('#python').addEventListener('click', () =>{
    p = document.querySelector('#python');
    p.classList.add('active');

    j = document.querySelector('#java');
    j.classList.remove('active');
    c = document.querySelector('#cpp');
    c.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');

});

document.querySelector('#cpp').addEventListener('click', () =>{
    c = document.querySelector('#cpp');
    c.classList.add('active');

    p = document.querySelector('#python');
    p.classList.remove('active');
    j = document.querySelector('#java');
    j.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');
});

document.querySelector('#html').addEventListener('click', () =>{
    h = document.querySelector('#html');
    h.classList.add('active');

    c = document.querySelector('#cpp');
    c.classList.remove('active');
    p = document.querySelector('#python');
    p.classList.remove('active');
    j = document.querySelector('#java');
    j.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');
});

document.querySelector('#css').addEventListener('click', () =>{
    cs = document.querySelector('#css');
    cs.classList.toggle('active');                 //Using toggle we can add or remove the class

    c = document.querySelector('#cpp');
    c.classList.remove('active');
    p = document.querySelector('#python');
    p.classList.remove('active');
    j = document.querySelector('#java');
    j.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
});

*/




//This is the same above program but in this we are using the eventListener, this also works the same as the above program
//But in this we will use doubleclick event instead of click event, so if you click on the button it will not do anything but if you double click it will change the color of the button
document.querySelector('#java').addEventListener('dblclick', () =>{                                                            
    j = document.querySelector('#java');
    j.classList.add('active');

    p = document.querySelector('#python');
    p.classList.remove('active');
    c = document.querySelector('#cpp');
    c.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');
});

document.querySelector('#python').addEventListener('dblclick', () =>{
    p = document.querySelector('#python');
    p.classList.add('active');

    j = document.querySelector('#java');
    j.classList.remove('active');
    c = document.querySelector('#cpp');
    c.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');

});

document.querySelector('#cpp').addEventListener('dblclick', () =>{
    c = document.querySelector('#cpp');
    c.classList.add('active');

    p = document.querySelector('#python');
    p.classList.remove('active');
    j = document.querySelector('#java');
    j.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');
});

document.querySelector('#html').addEventListener('dblclick', () =>{
    h = document.querySelector('#html');
    h.classList.add('active');

    c = document.querySelector('#cpp');
    c.classList.remove('active');
    p = document.querySelector('#python');
    p.classList.remove('active');
    j = document.querySelector('#java');
    j.classList.remove('active');
    cs = document.querySelector('#css');
    cs.classList.remove('active');
});

document.querySelector('#css').addEventListener('dblclick', () =>{
    cs = document.querySelector('#css');
    cs.classList.toggle('active');                 //Using toggle we can add or remove the class

    c = document.querySelector('#cpp');
    c.classList.remove('active');
    p = document.querySelector('#python');
    p.classList.remove('active');
    j = document.querySelector('#java');
    j.classList.remove('active');
    h = document.querySelector('#html');
    h.classList.remove('active');
});