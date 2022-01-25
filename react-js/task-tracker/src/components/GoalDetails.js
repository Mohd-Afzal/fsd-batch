import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

function GoalDetails() {

    const { id } = useParams();
    const url = "http://localhost:8000/persons/" + id;
    
    const {data : person, triggerFetch, setData, setTriggerFetch} = useFetch(url, true); // 2secs


    return(
        <div className="container">
            { triggerFetch && <div>
                    <h1> Goal Details - {id} </h1>
                    <h2> { person.firstName } </h2>
                    <h3> { person.goal } </h3>
                    <h4> {person.goalDetails} </h4>
                </div> 
            }
        </div>
    );
}

export default GoalDetails;