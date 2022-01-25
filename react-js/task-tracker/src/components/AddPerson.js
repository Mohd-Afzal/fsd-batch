
import { useState } from 'react';

function AddPerson() {

    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState('');
    const [goal, setGoal] = useState('');
    const [goalDesc, setGoalDesc] = useState('');


    const addPerson = (event) => {
        event.preventDefault();
        console.log("Add Person was clicked!");

        // I want to make a POST req to the JSON Server!
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
                    <label> Goal </label>
                    <textarea 
                        className="form-control" 
                        cols="30" 
                        rows="10" 
                        onChange={(event) => setGoalDesc(event.target.value)}
                        value={goalDesc}
                    />
                </div>

                <button className="btn btn-primary"> Add Person</button>
            </form>

        </div>

    );
}

export default AddPerson;