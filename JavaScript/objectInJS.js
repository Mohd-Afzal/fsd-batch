console.log()

// **** Obejcts and JSON ****
// Key -> Value pair

// const car = {
//     // Properties 
//     brandName: "Maruti Suzuki",
//     seatingCapacity: 5,
//     isAutomatic: true,
//     color: "Blue",
//     placesVisited: ["Agra", "Delhi", "Kerala"],

//     // Functions/Methods
//     transfer: function() {
//         console.log("It transferes from point A to B");
//     }
// };

// // console.log(typeof(car));

// console.log();

// // console.log(car.brandName);
// // console.log(car.placesVisited[2]);
// // console.log(car.transfer());

// car.brandName = "BMW";

// console.log(car.brandName);

// console.log();


// Arrays are heterogenous collection of Objects.

// const arr = ["Afzal", 30, [30, 40, 50]];
// console.log(arr);


// Let's try to have an array/list of custom objects.
const coursesOffered = [ 
    
    {
        course : "FSD",
        instructor : "Afzal",
        isOnline : true,
        taughtBy : "Tech For All",
        numberOfLectures : 90,
        addressInstructor : {
            houseNumber: 237,
            street : "Vincent Street",
            landmark : "Near Realiance Fresh",
            city : "Malappuram",
            PIN : 676509,
            state : "Kerala",
            country : "India"
        },
    }, 

    {
        course : "Data Structures and Algorithms",
        instructor : "Afzal",
        isOnline : false,
        taughtBy : "Tech For All",
        numberOfLectures : 60,
        addressInstructor : {
            houseNumber: 237,
            street : "Vincent Street",
            landmark : "Near Realiance Fresh",
            city : "Malappuram",
            PIN : 676509,
            state : "Kerala",
            country : "India"
        },
    },

    {
        course : "Swift",
        instructor : "Arun",
        isOnline : true,
        taughtBy : "Tech For All",
        numberOfLectures : 120,
        addressInstructor : {
            houseNumber: 237,
            street : "Borivile",
            landmark : "Near Realiance Fresh",
            city : "Mumbai",
            PIN : 110098,
            state : "Maharashtra",
            country : "India"
        },
    }
];


// const address = coursesOffered[0].addressInstructor;
// console.log(address);
// console.log(address.PIN);


// var pin = coursesOffered[0].addressInstructor.PIN;
// console.log(pin);


// Convert array to JSON

const jsonString = JSON.stringify(coursesOffered);
// console.log(jsonObject);

console.log(typeof(string));

const obj = JSON.parse(jsonString);

console.log(obj);


console.log()