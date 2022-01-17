import { useState } from "react";

const inputStyle = {
    height: "40px",
    width: "435px"
}

function PersonDetail({person}) {

    const [text, setText] = useState("This is a Sample Text!");

    const changeValue = (event) => {
        const updatedText = event.target.value;
        console.log(updatedText);
        setText(updatedText);
    }

    return (
        // JSX
        <div className="container-fluid">
            <div className="container">
                <h1> This is a Sample Text </h1>
                <p className="lead"> My name is {person.firstName}. I am {person.age} years old. I want to become a {person.goal} one day!  </p>
                <input style={inputStyle}  type="text" onChange = {changeValue} value = {text}/>
                <button className="btb btn-success"> Delete </button>
            </div>
        </div>
    );

}

export default PersonDetail;