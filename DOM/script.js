"use strict";

const doc = document;
console.log("JS is running!");


function print(para) {
    console.log(para)
}

// Grabbing the Text-Area
const textArea = doc.getElementById("text-input");

if (textArea !== null) {

    const newLi = doc.createElement('li');
    newLi.className = "list-group-item";

    textArea.addEventListener("keyup", (e) => {
        let taskData = e.target.value;
        newLi.textContent = taskData;

        const addTask = doc.getElementById("submitBtn");
        addTask.addEventListener("click", (e) => {
            e.preventDefault();
            const div = doc.getElementById("tasks");
            div.appendChild(newLi);
        });
    });

    // let addTask = () => {
    //     const div = doc.getElementById("tasks");
    //     div.appendChild(newLi);
    // }; 

} else {
    console.log("Error Occured - Cant find the text area");
}
