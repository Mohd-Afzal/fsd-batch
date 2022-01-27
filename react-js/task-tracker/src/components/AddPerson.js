
import { useState } from 'react';
import { useHistory } from "react-router-dom";

function AddPerson() {

    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState('');
    const [goal, setGoal] = useState('');
    const [goalDetails, setGoalDetails] = useState('');

    const [isPending, setIsPending] = useState(true);

    const history = useHistory();


    const addPerson = (event) => {
        setIsPending(false);
        event.preventDefault();
        console.log("Add Person was clicked!");

        const person = {
            firstName, 
            age, 
            goal, 
            goalDetails
        };

        setTimeout(() => {
            // I want to make a POST req to the JSON Server!
            fetch("http://localhost:8000/persons", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(person)
            }).then((response) => {
                setIsPending(true);
                console.log("Person has been Insterted Successfully!");
                // history.go(-1);
                history.push("/home");
            })
        }, 2000);
    }

    return (
        <div className="container">
            <form onSubmit={addPerson}>
                <div className="form-group">
                    <label> First Name </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter First Name " 
                        onChange={(event) => setFirstName(event.target.value)}
                        value={firstName}
                    />
                </div>

                <div className="form-group">
                    <label> Enter your Age </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Age" 
                        onChange={(event) => setAge(event.target.value)}
                        value={age}
                    />
                </div>

                <div className="form-group form-check">
                    <label> Goal </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Goal" 
                        onChange={(event) => setGoal(event.target.value)}
                        value={goal}
                    />
                </div>

                <div className="form-group form-check">
                    <label> Goal Summary </label>
                    <textarea 
                        className="form-control" 
                        cols="30" 
                        rows="10" 
                        onChange={(event) => setGoalDetails(event.target.value)}
                        value={goalDetails}
                    />
                </div>

                { isPending && <button className="btn btn-primary"> Add Person </button> }
                { !isPending && <button className="btn btn-primary"> Adding Person.. </button> }
            </form>

        </div>

    );
}

export default AddPerson;