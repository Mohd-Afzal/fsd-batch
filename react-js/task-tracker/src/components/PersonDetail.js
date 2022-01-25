import { useState } from "react";
import { Link } from "react-router-dom";

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

    const linkTo = `/goal-details/${props.id}`;
    return (
        // JSX
        <div className="container-fluid">
            <div style={containerLayout} className="container">
                <h1> {text} </h1>
                <p className="lead"> My name is {props.person.firstName}. I am {props.person.age} years old.</p>

                <Link to = {linkTo} > Click for Goal Details </Link>

                <input style={inputStyle}  type="text" onChange = {changeValue} value = {text}/>
                <button onClick={() => {
                    props.deletePerson(props.id);
                    console.log("Hey Delete button pressed!")}
                } className="btn btn-danger"> Delete </button>
            </div>
        </div>
    );

}

export default PersonDetail;