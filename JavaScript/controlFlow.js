console.log()

//Automatic Type Conversion

// let firstNumber = "10";
// let secondNumber = "3";

// // % gives the remonder upon division
// let ans = firstNumber - secondNumber;

// console.log(ans);



// Methods / Funtions

// let num = 25;
// console.log(typeof(num)); // Number

// console.log("After converting to String");

// let numString = num.toString();
// console.log(typeof(numString)); // String


// let num = 10.2167;
// let ans = num.toFixed(3); // returns a string value


// console.log(ans);
// console.log(typeof(ans));


// let num = 10.49;
// let ans = num.toPrecision(3);

// console.log(ans);
// console.log(typeof(ans));


// It doesnt operate on an object

// let val = parseInt("34.67345678");
// console.log(typeof(val));
// console.log(val);

// let decimalVal = parseFloat("345.4567");
// console.log(typeof(decimalVal));
// console.log(decimalVal);



// Conditionals
//  Making decisions on the basis of some conditions 

let numOne = 10;
let numTwo = 20;

// let isTrue = numTwo > numOne;
// console.log(isTrue);
// console.log(typeof(isTrue));

// if (numOne > numTwo) {
//     console.log("numTwo is greater than numOne!");
// } else if (numTwo > 100) {
//     console.log("numOne is greater than numTwo!");
// } else if (true) {
//     console.log("If everything just fails/all the conditions are false");
// } else {
//     if () {

//     } else {

//     }
// }


// // Can exist alone but not else
// if () {

// } 
// It jumps here

// Q1. Define 3 numbers and find the largest among all the three.
// Q2. Define 3 numbers and find the smallest among all the three.
// Q3. Define 3 numbers and find the 2nd largest among all the three.


// Solu - 1
// let a = 40;
// let b = 100;
// let c = 100;


// if ((a > b) && (a > c)) {
//     console.log(a + " is the largest value!");
// } else if ((b > a) && (b > c)) {
//     console.log(b + " is the largest value!");
// } else {
//     console.log(c + " is the largest value!");
// }

// if (a > b) {
//     // a might be the largest
//     if (a > c) {
//         console.log(a + " is the largest value!");
//     }
// } else if (b > a) {
//     if (b > c) {
//         console.log(b + " is the largest value!");
//     }
// } 


// != 


// let a = 10;
// let b = 20;
// let ans = (10 == 20);
// console.log(ans);

// let isPrime = true;
// let ans = (!isPrime);
// console.log(ans);
// console.log(!ans);


// Control Flow

// var counter = 1;

// while (counter <= 10) {
//     console.log("Hello!");
//     counter = counter + 1;
// }


// for (let i = 1; i <= 10; i++) {
//     console.log("Hello!");

//     if (i == 6) {
//         console.log("Exiting at " + i);
//         break;
//     }
// }

// var counter = 11;

// do {
//     console.log(counter);
//     counter ++;
// } while (counter <= 10);


// Question - 1: Print all the even numbers till 20

// var number = 1;

// while (number <= 20) {

//     if (number % 2 == 0) {
//         console.log(number);
//     }

//     number += 1;
// }

// for (let number = 1; number <= 20; number++) {
//     if (number % 2 == 0) {
//         console.log(number);
//     }
// }

// var number = 2;

// while (number <= 20) {
//     console.log(number);
//     number += 2;
// }

// var number = parseInt(prompt("Enter your counter: "));

// while (number <= 7) {
//     // if (number == 2) {
//     //     number += 1;
//     //     continue;
//     // }
//     console.log(`${number} : printing number`);
//     number += 1;

//     console.log("Number: " + number);
// }
// console.log();
// console.log("Number: " + number);

// var a = 10;
// var b = 20;


// if (a > b) {
//     console.log(a + " is greater");
// } else {
//     console.log(b + " is greater");
// }

// (a > b) ? console.log(a + " is greater") : console.log(b + " is greater");

// let name = "Afzal";
// let age = "27";
// let designation = "Program Manager";

// "", '', ``back text

// let sentence = "Hey, my name is " + name + ". I am 27 years old.";
// let sentence = `Hey, my name is ${name}. I am ${age} years old. I work as a ${designation}`;
// console.log(sentence);


// let num = 10;
// let numStr = "10";
// let isEqual = (num === numStr);
// console.log(isEqual);

// Switch - Case

// let num = 3;

// switch(num) {
//     case 1 :
//         console.log("Executing Case-1");
//         break;
//     case 2 :
//         console.log("Executing Case-2");
//         break;
//     case 3 :
//         console.log("Executing Case-3");
//         break;
//     case 4 :
//         console.log("Executing Case-4");
//         break;
//     default :
//         console.log("Input a valid number");
//         break;
// }


// for (var i = 1; i <= 10; i++) {
//     console.log(i);
// }

// console.log("Value of i after the execuation of the FOR loop: " + i); // 11



















console.log()