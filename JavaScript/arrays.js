
console.log();

//create an array
// const arr = [10, 20, 30, 100, -10, -20];

// const arr = new Array(10, 20, 30, 100, -10, -20, 567);
// let num = arr.length;
// console.log(num);

// How to fetch the elements in the array?

// for (let i = 0; i < arr.length; i ++) {
//     arr[i] = 1000;
//     console.log(arr[i]);
// }


// Q.1: Print the sum of all the elements in a given array.
// const arr = [10, 20, 30]; // Sum = 60

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     // var sum = 0;  //What happens when I move line 19 to 22?
//     // sum += arr[i];
//     sum = sum + arr[i];
// }

// console.log(sum);




// Q.2: For a given array, print all the even numbers.
// Q.3: For a given array, print all the odd numbers.
// Q.4: For a given array, update all the values those are divisible 4 with 999.

// const arr = [100, 20, 40, 8, 6, 56, 90, 186];

// console.log(arr);
// console.log(" ******* Updating Array ******* ");

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 4 === 0) {
//         // The current array value is divisible by 4
//         arr[i] = 999;
//     }
// }

// console.log(arr);

// const arr = [100, 20, 40, 8, 6, 56, 90, 186];
// let tempArray = arr; // Copy ref_if of arr to tempArray

// tempArray[3] = 7777777;
// console.log(arr);


// Hetrogenous
const arr = [10, 20, "Apple", "orange", true, [2, 3, 4]];

// const innerArray =  arr[5];
// console.log(innerArray[1]);

// console.log(arr[5][1]);


// Iterables -> collection of object on which you can iterat
// console.log(typeof(arr));

// // for .. of
// for (var eachObject of arr) {
//     console.log(eachObject);

// }

console.log();