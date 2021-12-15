
// var i = 10;

// function outer () {
//     var j = 20;
//     // console.log(i, j);

//     function inner() {
//         var k = 30;
//         console.log(i, j, k);
//         k++;
//         j++;
//         i++;
//         // console.log(j, k);
//     }

//     return inner;
// }

// var inner = outer();
// inner();

// var inner = outer();
// inner();



// Closures in case of for loop

// for (var i = 1; i <= 5; i++) {
//     setTimeout(function(){
//         console.log(i);
//     }, 1000);
// }

// console.log("Out of for Loop: ", i);


// Fix
for (let i = 1; i <= 5; i++) {
    setTimeout(function(){
        console.log(i);
    }, 1000);
}

// console.log("Out of for Loop: ", i);

