// 'use strict';

console.log("OOPS file!");

/*  Creating Objects in JavaScript  */


// 1. Using Object literals


// Object - 1
// const afzal = {
//     // Define the properties
//     hairColor: "black",
//     gender: "male",
//     name: "Afzal",

//     // Define methods or functions
//     eat: function() {
//         console.log("I am eating!");
//     },

//     sleep: function() {
//         console.log("I am sleeping!");
//     }
// };


// Object - 2
// const aditya = {
//     // Define the properties
//     hairColor: "black",
//     gender: "male",
//     name: "Aditya",

//     // Define methods or functions
//     eat: function() {
//         console.log("I am eating!");
//     },

//     sleep: function() {
//         console.log("I am sleeping!");
//     }
// };

// console.log(typeof human);
// console.log(human.hairColor);
// console.log(human.gender);

// human.eat();




// 2. Using Factory Method

// function Human(color, gender, name) {
//     return {
//         // Define the properties
//         hairColor: color,
//         gender,
//         name,
    
//         // Define methods or functions
//         eat: function() {
//             console.log("I am eating!");
//         },
    
//         sleep: function() {
//             console.log("I am sleeping!");
//         }
//     };
// }

// // Create the object for Human first
// const swammy = Human("black", "male", "Swammy");
// const monica = Human("blonde", "female", "Monica");


// console.log(swammy.hairColor);
// console.log(swammy.gender);
// console.log(swammy.name);

// swammy.eat();


// console.log(monica.hairColor);
// console.log(monica.gender);
// console.log(monica.name);

// monica.eat();



// this keyword --> is an object that referes to the object in the current context
// We are in the global context


// function demo(a, b) {
//     console.log(this);
//     console.log((a + b));
// }

// // demo();

// console.log(this);

// const obj = {
//     prop1 : "property",

//     print : function() {
//         console.log(this);
//     }
// };


// demo(10, 20); // Pick the default object as the window object in sloppy mode and undefined when called in the strict mode
// demo.call(obj, 10, 20); // Binding the Obj to demo->this
// demo.apply(obj, [10, 20]);

// obj.print();





// 3. Using the Constructor Method/Function

function Human(hairColor, gender, name) {
    
    // Define the properties
    this.hairColor = hairColor;
    this.gender = gender; 
    this.name = name;
        
    // Define methods or functions

    // this.eat = function(a, b) {
    //     console.log(this.hairColor);
    //     let sum = a + b;
    //     console.log("Sum is: ", sum)
    //     console.log("I eat food!");
    // }

    // Not defined in the prototype
    this.getCurrentReference = function () {
        console.log(this);
    }

    //we never return -> coz this is a Constructor Function
}


// var afzal = new Human("black", "male", "Afzal");
// var monica = new Human("black", "female", "Monica");
// var israel = new Human("blonde", "male", "Isarel");
// var swammy = new Human("black", "male", "Swammy");


// afzal.getCurrentReference();
// monica.getCurrentReference();
// israel.getCurrentReference();
// swammy.getCurrentReference();





/* -------- Prototypes -------- */

// Moving the eat function to the prototype of Human
Human.prototype.eat = function(a, b) {
    console.log(this.hairColor);
    let sum = a + b;
    console.log("Sum is: ", sum)
    console.log("I eat food!");
}

var afzal = new Human("black", "male", "Afzal");
// afzal.eat(30, 50); // Calling the eat function using the object which is defined in the prototype actually


// Defining properties in the protoype
Human.prototype.numberOfLegs = 2;
Human.prototype.numberOfHands = 2;



// Creating an EMpty Object
const obj1 = {};
const obj2 = new Object();


// Discuss about the methods

const objProto = Object.prototype;
const humanProto = Human.prototype

if (humanProto === objProto) {
    console.log("TRUE");
} else {
    console.log("False");
}

// Alternate to writing the above code
// const isTrue = Object.prototype.isPrototypeOf(Human.prototype);
// console.log(isTrue);

/* 
    1. Hirearchy of the objects defined in JavaScript
    2. object VS Object
    3. Classes
    4. Inheritance
*/


/*  End  */
