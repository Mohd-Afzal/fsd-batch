

console.log('Welcome to ES6 Higher Order Array Methods...');

const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2001, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
]


// Callback Function : a function that is passed as n argument to another function

// this is a function that I am going to use as a callback function in some other function
function myCallBack(name) {
    console.log("Hey, ", name, "there!");
}


// Greet is a function that takes two parameters - a callback function, and a string
function greet(myCallBack, name) {
    myCallBack(name);
}


function print(value) {
    const textArea = document.getElementById("text");
    // console.log(textArea);
    textArea.innerHTML = value;
}

function add(a, b, callBackFunction) {
    let sum = a + b;
    const message = `The sum is : ${sum}`;
    callBackFunction(message);
    return sum;
}

// 1 way to do it
// let ans = add(10, 50);
// const message = `The sum is : ${ans}`;
// print(message);


// 2nd way
// let ans = add(10, 50);
// console.log(ans);


// 3rd way
// let ans = add(10, 50, print);



/* 
    Higher Order Array Methods
*/

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// for (let i = 0; i < ages.length; i++) {
//     console.log(ages[i]);
// }

// 1. forEach function
// function abc(element, index, arr) {
//     console.log("Printing the Element Itself: ", element);
//     console.log("Printing in the conventional way: ", arr[index]);
// }

// ages.forEach(abc);
// // No changes made to the actual array
// console.log(ages);


// 2. filter function
// I want a new array altogether that has filtered values from the ages array.

// const filteredArray = [];
// for (let i = 0; i < ages.length; i++) {
//     if (ages[i] > 21) {
//         // console.log(ages[i]);
//         filteredArray.push(ages[i]);
//     }
// }

// function callBack(element, index, arr) {
//     if (arr[index] > 21)
//         return arr[index];

//     // if (element > 21) 
//     //     return element;
// } 

// const newArray = ages.filter(callBack);


// 3. map function

// const newArray = [];
// for (let i = 0; i < ages.length; i++) {
//     newArray.push(ages[i] * 10);
// }

// function callBack(element) {
//     return element * 10;
// }

// const newArray = ages.map(callBack);
// console.log(newArray);


// 5. slice function


console.log(ages.slice(4));