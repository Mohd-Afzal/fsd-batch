console.log("OOPS file!");

// Object literals
// const human = {
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

// console.log(typeof human);
// console.log(human.hairColor);
// console.log(human.gender);

// human.eat();


// Factory Method
function Human(color, gender, name) {
    return {
        // Define the properties
        hairColor: color,
        gender,
        name,
    
        // Define methods or functions
        eat: function() {
            console.log("I am eating!");
        },
    
        sleep: function() {
            console.log("I am sleeping!");
        }
    };
}

// Create the object for Human first
const swammy = Human("black", "male", "Swammy");
const monica = Human("blonde", "female", "Monica");


console.log(swammy.hairColor);
console.log(swammy.gender);
console.log(swammy.name);

swammy.eat();


console.log(monica.hairColor);
console.log(monica.gender);
console.log(monica.name);

monica.eat();
