import { useState } from "react";

const inputStyle = {
    height: "40px",
    textAlign: "center",
}

const containerLayout = {
    display: "flex",
    flexDirection: "column"
}

function PersonDetail(props) {

    const [text, setText] = useState("This is a Sample Text!");

    const changeValue = (event) => {
        const updatedText = event.target.value;
        console.log(updatedText);
        setText(updatedText);
    }

    return (
        // JSX
        <div className="container-fluid">
            <div style={containerLayout} className="container">
                <h1> {text} </h1>
                <p className="lead"> My name is {props.person.firstName}. I am {props.person.age} years old. I want to become a {props.person.goal} one day!  </p>
                <input style={inputStyle}  type="text" onChange = {changeValue} value = {text}/>
                <button onClick={() => {
                    // I want to delete an entry from the Persons state which belongs to App.js
                    // I want to communicate to App.js -> to delete an entry from its state
                    // Via props 
                    // I get a function defined in App.js that basically deletes the entry from its state.
                    // I get the reference to that funtion inside "this"(child component) via props.
                    // call it!
                    props.deletePerson(props.id);
                    console.log("Hey Delete button pressed!")}

                } className="btn btn-danger"> Delete </button>
            </div>
        </div>
    );

}

export default PersonDetail;