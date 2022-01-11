import React, { useState } from 'react';


function MyApp(props) {

    const [stateVariable, setState] = useState("I am a state Variable!");
    // const stateVariable = "Changing the state variable!"; // Not the correct way
    // setState("Changing the state variable!");

    const toUpper = () => {
        // define the logic
        // console.log("to upper has been called!");
        // console.log(stateVariable);
        let updatedString = stateVariable.toUpperCase();
        setState(updatedString);
    }


    const toLower = () => {
        //define the logic
        // console.log("to lower has been called!");
        let updatedString = stateVariable.toLowerCase();
        setState(updatedString);
    }

    const changeState = (event) => {
        // console.log("OnChange has been fired");
        // console.log(event.target.value);
        setState(event.target.value);
    }

    return (
        // JSX
        <div className="container">
            <div className="mb-3">
                <h1> {props.heading} </h1>
                <textarea value = {stateVariable} onChange={changeState} rows={20} cols={60}>  </textarea>
            </div>
            <button onClick={toUpper} className="btn btn-primary"> to uppercase </button>
            <button onClick={toLower} className="btn btn-primary"> to lowercase </button>
        </div>
    );
}

export default MyApp;