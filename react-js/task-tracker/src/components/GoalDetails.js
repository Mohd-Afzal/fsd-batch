import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom";

function GoalDetails() {
    const { id } = useParams();
    const url = "http://localhost:8000/persons/" + id;
    const {data : person, triggerFetch, setData, setTriggerFetch} = useFetch(url, true); // 2secs
    const history = useHistory();

    const deletePerson = () => {
        console.log("Delete Button Triggered!");

        // Make a DELETE req to the serever
        fetch(url, {
            method: "DELETE"
        })
        .then((response) => {
            console.log("Deleted!")
            history.push("/home");
        })
    }

    return(
        <div className="container">
            { !triggerFetch && <h2> .....Getting Data from the Universe..... </h2> }
            { triggerFetch && <div>
                    <h1> Goal Details - {id} </h1>
                    <h2> { person.firstName } </h2>
                    <h3> { person.goal } </h3>
                    <h4> {person.goalDetails} </h4>
                    <button onClick={deletePerson} className="btn btn-danger"> Delete </button>
                </div> 
                
            }
        </div>
    );
}

export default GoalDetails;