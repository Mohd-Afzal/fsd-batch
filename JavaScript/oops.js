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



/* 
    this keyword --> is an object that referes to the object in the current context
    
    We are in the global context

*/

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

// var afzal = new Human("black", "male", "Afzal"); -- Wrote it while covering Hoisting in JavaScript 

// function Human(hairColor, gender, name) {
    
//     // Define the properties
//     this.hairColor = hairColor;
//     this.gender = gender; 
//     this.name = name;
        
//     // Define methods or functions

//     // this.eat = function(a, b) {
//     //     console.log(this.hairColor);
//     //     let sum = a + b;
//     //     console.log("Sum is: ", sum)
//     //     console.log("I eat food!");
//     // }

//     // Not defined in the prototype
//     this.getCurrentReference = function () {
//         console.log(this);
//     }
//     //we never return -> coz this is a Constructor Function
// }


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
// Human.prototype.eat = function(a, b) {
//     console.log(this.hairColor);
//     let sum = a + b;
//     console.log("Sum is: ", sum)
//     console.log("I eat food!");
// }

// var afzal = new Human("black", "male", "Afzal");
// afzal.eat(30, 50); // Calling the eat function using the object which is defined in the prototype actually


// Discuss about the methods
// const viaConstructor = Human.prototype;
// const viaObject = Object.getPrototypeOf(afzal); //afzal.__proto__; -> Dunder proto - Discouraged the use

// console.log(viaConstructor === viaObject);

// var isProto = Human.prototype.isPrototypeOf(afzal);
// console.log(isProto);


// // To check whether a given property belong to the object or its prototype
// var isProperty = afzal.hasOwnProperty("eat");
// console.log(isProperty);

// // const isProperty = afzal.hasOwnProperty("numberOfLegs");
// isProperty = afzal.hasOwnProperty("gender");
// console.log(isProperty);


// // Defining properties in the protoype
// Human.prototype.numberOfLegs = 2;
// Human.prototype.numberOfHands = 2;

// isProperty = afzal.hasOwnProperty("numberOfHands");
// console.log(isProperty);

// afzal.numberOfHands = 5; // Your created/added 'numberOfHands' in afzal

// isProperty = afzal.hasOwnProperty("numberOfHands");
// console.log(isProperty);



// Creating an EMpty Object
// const obj1 = {};
// const obj2 = new Object();


// afzal.a = "";
// Human.prototype.a = 50; 
// Object.prototype.a = 100;




// Classes
// class Human {
//     // constructor() {}
//     constructor(hairColor, name) {
//         this.hairColor = hairColor;
//         // this.gender = gender; 
//         this.name = name;
//     }

//     // Defined in the Human.proto
//     eat() {
//         console.log("I eat food!");
//     }

// }

// var afzal = new Human("black", "male", "Afzal");




/* 
    
            Hoisting in JavaScript 

    Moving the function declaration to the top of the script

*/

// Works because of Hoisting
// print("Hello World!");

// function print(sentence) {
//     console.log(sentence);
// }

// print("Hello World!");





/* 
        Inheritance in JavaScript

    Inheritance is the concept of inheriting the properties, functions/methods/behaviours from the Parent(s)

*/

class Vehicle {
    constructor(type, isAutomatic) {
        this.type = type;
        this.isAutomatic = isAutomatic;
    }

    transport() {
        console.log("I am transporting from point A to point B!");
    }

    displayDetails() {
        console.log("My type: " , this.type);
        console.log("Am I automatic?: " , this.isAutomatic);
    }
}

// Inheriting the properties and methods of Vehicle class
class Car extends Vehicle {

    constructor(brandName, modelName, capacity) {
        // Must call the constructor of the immediate parent
        super("LMV", "YES"); // to invoke the constructor for the parent
        this.brandName = brandName;
        this.modelName = modelName;
        this.capacity = capacity;
    }

    // displayCar() {
    //     console.log("Brand Name: " , this.brandName);
    //     console.log("Model Name: " , this.modelName);
    //     console.log("Seating Capacity: " , this.capacity);
    // }

    displayDetails() {
        super.displayDetails();
        console.log("Brand Name: " , this.brandName);
        console.log("Model Name: " , this.modelName);
        console.log("Seating Capacity: " , this.capacity);
    }

}


// Creating Object for Car
const baleno = new Car("Nexa", "Baleno", 5);

baleno.transport();
baleno.displayDetails();



/* 
    1. Hirearchy of the objects defined in JavaScript
    2. object VS Object
    3. Classes
    4. Hoisting in JS
    5. Inheritance
        
*/