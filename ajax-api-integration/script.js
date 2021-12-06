console.log("Running JS!");

// Integrate AJAX to the Web Application
// To make a request to a server you need XMLHttpRequest (XHR)

const url = "https://api.github.com/users"; // API

// STEP 1 - Create the object of XHR
const xhr = new XMLHttpRequest();
console.log("When the Object was created: " + xhr.readyState);
console.log(xhr.status);


// STEP 2 - Open the portal of communication bw client & server
// xhr.open(HTTPMethod, urlOfTheAPI, asynchronous/synchronous)
xhr.open("GET", url);
console.log("When the HTTP request was built: " + xhr.readyState);
console.log(xhr.status);

// STEP 3 - Keep the track of the state-change
xhr.onreadystatechange = () => {

    console.log("Function Called: " + xhr.readyState);
    console.log(xhr.status);

    // STEP 4 - Check if readYState is 4 & status is 200
    if (xhr.readyState == 4 && xhr.status == 200) {
        // I got a successful response from the server

        const response = JSON.parse(xhr.responseText);
        console.log(response);

        const box = document.getElementById("main");
        // console.log(box);


        for(let i = 0; i < response.length; i++) {
            const img = document.createElement("img");
            img.src = response[i].avatar_url;
            console.log(img);
            
            const para = document.createElement("p");
            para.className = "lead";
            para.style.textAlign = "center";
            para.innerHTML = `<strong> ${response[i].login} </strong>`;
            // <p> <strong> mojombo </strong> </p>
            console.log(para);
    
            const seperation = document.createElement("hr");
    
            box.appendChild(img);
            box.appendChild(para);
            box.appendChild(seperation);
        }



    }

};

// STEP 5 - Send the request
xhr.send()

// Open and Send functions - prepare the request and sends the request in the specified format