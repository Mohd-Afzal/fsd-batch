console.log("Hey, there! I am JavaScript");
const doc = document;

// DOM -> Document Object Model
// DOM -> Object -> document
// console.dir(document);

// console.log(document.URL);
// console.log(document.title);
// console.log(document.domain);

// const loc = document.location;
// console.log(loc);

/* 
  1. Required to get the Google Maps using Google Map API
  2. Locate the current position(Browser's location)
  3. I was supposed to show the current time and whether for that location(time api and whether api)
  4. Move around on the map and pin the location anywhere on the map and fetch the time and whether details for that location.
*/


// const arrayOfHTMLTags = document.all;
// const title = arrayOfHTMLTags[10];

// console.log(title);

// title.textContent = "I just changed the content dynamically using JS";





// IDENTIFIER METHODS - id, className, tagName, querySelector, querySelectorAll

// 1. ID
// const title = doc.getElementById("header-title");
// console.log(title);

// title.textContent = `<a href="www.google.com"> GOOGLE </a>` ;
// title.innerHTML = `` ;


// CSS Changes
// title.style.borderBottom = "5px solid black";
// title.style.borderBottomLeftRadius = "50px";
// title.style.borderInline = "1rem solid";


// 2. className
// const listItems = doc.getElementsByClassName("list-group-item");
// console.dir(listItems);

// for (let i = 0; i < listItems.length; i++) {
//   if (i % 2 !== 0) {
//     listItems[i].style.background = "grey";
//   }
// }

// 3. tagName
// const listItems = doc.getElementsByTagName("li");
// console.dir(listItems);
// for (let i = 0; i < listItems.length; i++) {
//   if (i % 2 !== 0) {
//     listItems[i].style.background = "grey";
//   }
// }

// 4. querySelector - id + class + tag
// const headerTitle = doc.querySelector("#header-title");
// if (headerTitle === null) {
//   console.log("It is null value! Terminating...");
// } else {
//  headerTitle.style.borderBottom = "5px solid black";
// }


// Note - In case of class name and tag name, query selector is always going to return the very first instance of all the listed elements.
// const listItems = doc.querySelector(".list-group-item");
// console.log(listItems);

// const listItems = doc.querySelector("li");
// console.log(listItems);


// 5. querySelectorAll - id + class + tag
// const listItems = doc.querySelectorAll("li");
// console.dir(listItems);

// listItems[listItems.length - 1].style.background = "grey";

// for (let i = 0; i < listItems.length; i++) {
//   if (i % 2 !== 0) {
//     listItems[i].style.background = "grey";
//   }
// }

// const listItems = doc.querySelectorAll(".list-group-item");
// console.dir(listItems);

// const unOrderedList = doc.querySelector("#items");
// unOrderedList.innerHTML = `
//   <li class="list-group-item">Item 1</li>
//   <li class="list-group-item">Item 2</li>
//   <li class="list-group-item">Item 3</li>
//   <li class="list-group-item">Item 4</li>
//   <li class="list-group-item">Item 5</li>
//   <li class="list-group-item">Item 6</li>
//   <li class="list-group-item">Item 7 - Dynamically Added</li>
// `;


// Arrow Functions - ES6
// Syntax
// let greet = (name) => {
//   console.log("Hey! Welcome to session on JS, " + name);
// }

// console.log(typeof(greet));
// greet("Afzal");

// Why? -> To leverage the visibility mode for functions as well.



/*  DOM EVENTS  */

// const text = document.querySelector('#text-input');
// console.log(text);

// eventListeners in JS that triggers an event

// addEventListener(event, functionName)

// function greet(name) {
//   // console.log("Event Focus has been Triggered");
//   // alert("Event Focus has been Triggered");

//   console.log(name);
//   console.log("FOCUS TRIGGERED");
  
// }

// Anonymous function - Does not have a name and is executed during the run time -> called automatically via event, or any other function calls

// {
//   let table = (num) => {
//     for(let i = 1; i <= 10; i++) {
//       console.log(`${num} x ${i} = ${num * i}`);
//     }
//   }

//   // table(5);



//   text.addEventListener('focus', function() {
//     table(19);
//   });
// }


// text.addEventListener('focus', () => {
//   console.log("focus event has been triggered");
// });

// text.addEventListener('blur', () => {
//   console.log("blur event has been triggered");
// });


// text.addEventListener('copy', () => {
//   console.log("you just copied the content!");
// });

// text.addEventListener('cut', () => {
//   console.log("you just cut the content!");
// });

// text.addEventListener('paste', () => {
//   console.log("You just overridden the content with new one!");
// });




// EVENT EMITTERS | Event Parameter
// text.addEventListener("keydown", (e) => {
//   console.log(e.target.value);
//   // console.log("You just pressed a key on the keyboard");
// });

// text.addEventListener("keyup", () => {
//   console.log("You just released the key on the keyboard");
// });



// FUN ACTIVITY WITH THE BOX
// const box = doc.getElementById("box");
// // console.log(box);

// box.addEventListener("mouseenter", (e) => {
//   // console.log(e);
//   // console.log("Mouse IN");

//   box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`;

// });

// box.addEventListener("mouseleave", (e) => {
//   // console.log("Mouse OUT");
//   box.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 150)`;
// });



// DOM Traversal
// Traverse the HTML elements on the basis of the relationship - Parent, children and sibling

// const ulItems = doc.getElementById("items");
// console.log(ulItems);

// 1. Parent Node
// const parent = ulItems.parentElement;

// 2. Chaining through the elements 
// const grandParent = parent.parentElement;
// console.log(grandParent);

// Fun Activity
// const submitButton = doc.getElementById("submitBtn");

// submitButton.addEventListener("click", (e) => {
//    Prevents the default nature of Submit Button
//   e.preventDefault();
//   console.log("Clicked on the submit Button!")
// });


// if (submitButton !== null) {

//   submitButton.addEventListener("click", (e) => {
//     const grandParent = submitButton.parentElement.parentElement;
//     const parent = grandParent.parentElement;
//     // console.log(parent);

//     e.preventDefault();
//     parent.parentElement.style.background = "brown";
//   });

// } else {
//   console.log("Submit Button doesnt exist!");
// }

// const clickMeButton = doc.getElementById("button");

// clickMeButton.addEventListener("click", (e) => {
//   const grandParent = clickMeButton.parentElement.parentElement;
//   grandParent.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 100)`;
// });


// clickMeButton.addEventListener("dblclick", (e) => {
//     const parent = clickMeButton.parentElement;
//     parent.style.backgroundColor = "yellow";
// });


// const ulItems = doc.getElementById("items");

// Children Node
// const children = ulItems.childNodes;
// console.log(children[2]);
// children[2].textContent = "Appended Content via JS";


// const children = ulItems.children;
// console.log(children);


// const firstChild = ulItems.firstChild; // With Indentation
// firstChild.textContent = "Text Area for first ITEM";

// const firstChild = ulItems.firstElementChild;
// console.log(firstChild);

// const lastChild = ulItems.lastElementChild;
// console.log(lastChild);


// SIBLINGS
// const prevSibling = ulItems.previousSibling; // With Indentation
// const prevSibling = ulItems.previousElementSibling;
// console.log(prevSibling);

// const nextSibling = ulItems.nextElementSibling;
// console.log(nextSibling);




// Adding/Creating HTML on the fly/using JS

// const newLi = document.createElement('li');
// // Set the Attributes of the HTML Element
// // newLi.id = 'new-li';
// newLi.className = 'list-group-item';
// newLi.textContent = `Item 7`;


// const ulItems = doc.getElementById("items");
// // Add newLi to UlItems
// ulItems.appendChild(newLi);


// const newAnchorTag = doc.createElement("a");
// newAnchorTag.textContent = "GOOGLE";
// newAnchorTag.href = "www.google.com";

// const div = doc.getElementById("main");

// // div.appendChild(newAnchorTag);
// const arr = div.children;

// div.insertBefore(newAnchorTag, arr[arr.length - 1]);

// Adding Items through Form
const newLI = document.createElement('li')
newLI.className = 'list-group-item'

const text = document.getElementById('text-input')
text.addEventListener('keyup', (e) => {
    const textData = e.target.value
    newLI.textContent = textData
    console.log(newLI);
    const button = document.getElementById('submitBtn')
        button.addEventListener('click', (e) => {
        e.preventDefault()
        const list = document.getElementById('items')
        list.appendChild(newLI)
    })
})

console.log(newLI);