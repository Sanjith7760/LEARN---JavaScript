//OOPS in JS

let st = {
    name:"sanjith",
    age : 23,
    marks :99
};
console.log(st.name);
console.log(st.age);
console.log(st.marks);



//we can also use this kind of function
student = {
    id:12,
    dep: "ECE",
    clg: "Sairam college",

    study:function() {
        console.log("studying in "+ this.clg);
    },
    data:function() {
        console.log("ID is "+this.id +" and department is "+this.dep);
    }
}
student.study();
student.data();


//by using normal function
student1 = {
    id:111,
    dep: "CSE",
    clg: "Sairam college",

    study() {
        console.log("studying in "+ this.clg);
    },
    data() {
        console.log("ID is "+this.id + " and dep is "+this.dep);
    }
}
student1.study();
student1.data();


//By using constructor

class Students {
    constructor(name, age, marks){
       this.name = name;
       this.age = age;
       this.marks = marks;
    }

    details() {
        console.log("My name is "+ this.name+ " and age is "+this.age+" and marks is "+this.marks);
        
    }
}
let s =new Students("Sanjith", 23, 99);
s.details();



//Inheritance
/*
//wihtout extending the class
class ElectronicDevice {
     play(){
        console.log("Playing a game");
     }
}
class mobile  {
    
}
l=new mobile();
l.play();      //output: prints nothing because the mobile class is not extended
*/

//By extending the class
// class ElectronicDevice {
//     play(){
//        console.log("Playing a game");
//     }
//     browse(){
//         console.log("Browsing the web");
//     }
// }
// class mobile extends ElectronicDevice {
   
// }
// l=new mobile();
// l.play();      //output: playing a game , because the class is extended from ElectronicDevice
// l.browse();    //output: browsing the web , because the class is extended from ElectronicDevice



//By extending the class and using child-specific function
class ElectronicDevice {
    play(){
       console.log("Playing a game");
    }
}
class mobile extends ElectronicDevice {

   play(actor,film) {
    this.actor=actor;
    this.film=film;
    console.log("Spotify plays "+this.actor+" songs, of his "+this.film+" movie");
   }

   //child-specific function
   takePicture(){
    console.log("Taking a picture");
    }
}
l=new mobile();
l.play("DBoss","kaatera");      //output: Spotify plays DBoss songs, of his kaatera movie
l.takePicture();  //output: taking a picture




class Animal {
    constructor(name) {
        this.name = "Lion";
    }
    eat() {
        console.log(this.name + " is eating");
    }
}

class Dog extends Animal {
    constructor(name){
        super();
        this.name = name;

    }
    eat() {
        super.eat();
        console.log(this.name +" is barking");
        
    }
}

let animal = new Animal();
animal.eat();  
let dog = new Dog("Buddy");
dog.eat();    