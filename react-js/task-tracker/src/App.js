import Button from "./components/Button";
import PersonDetail from "./components/PersonDetail";
import { useState } from 'react';
import useFetch from "./useFetch";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPerson from "./components/AddPerson";
import ContactUs from "./components/ContactUs";
import GoalDetails from "./components/GoalDetails";
import PageNotFound from "./components/PageNotFound";

const containerLayout = {
  display: "flex",
  flexDirection: "column"
}

function App() {
  const [showData, setShowData] = useState(false);
  const [buttonText, setButtonText] = useState("Show Data");

  const {data: persons, triggerFetch, setData, setTriggerFetch} = useFetch('http://localhost:8000/persons', showData, [showData]);

  function togglePersons() {
    if (showData) {
      setShowData(false);
      setTriggerFetch(false);
      setButtonText("Show Data")
    } else {
      setShowData(true);
      setButtonText("Collapse");
    }
  }

  const deletePerson = (id) => {
    // console.log(id);
    // // Delete a perticalar id from the persons!
    // // To splice! -> higher order array method
    
    // // Create a duplicate array out of the state variable -> coz state variables are immutable
    // const duplciatePersons = [...persons]; // spread operator or Object.assign()
    // // duplciatePersons.splice(id, 1); // We cant use index as the key to delete as it destroys the robustness and cohesiveness of the data/state
    
    // setPersons(duplciatePersons.filter(person => person.id !== id));
    // console.log("Entry Succeefully deleted in App.js's state!");

    console.log("Delete Called");
  }

  var renderPerson = null;
  if (triggerFetch && showData) {
    renderPerson = (
      /* Map to iterate over the list of persons */
      persons.map((person) => {
        return <PersonDetail key = {person.id} id = {person.id} person = {person} deletePerson = {deletePerson}/>
      })
    )
  }

  return (
    <div className="App">
      <Router>
        <h1 id = "heading"> Task Tracker Application </h1> 
        <NavBar/> 

        <Switch>
          <Route exact path="/">
            <div style={containerLayout}>        
              <Button click = {togglePersons} text = {buttonText}/>
              {(!triggerFetch && showData) && <h1 id="heading"> Loading Persons Data .... </h1>}
              {renderPerson}
            </div>
          </Route>

          <Route exact path="/home">
            <div style={containerLayout}>        
              <Button click = {togglePersons} text = {buttonText}/>
              {(!triggerFetch && showData) && <h1 id="heading"> Loading Persons Data .... </h1>}
              {renderPerson}
            </div>
          </Route>

          <Route exact path="/add-person">
              <AddPerson />
          </Route>

          <Route exact path= "/contact-us" >
            <ContactUs/>
          </Route>

          <Route exact path= "/goal-details/:id" >
            <GoalDetails />
          </Route>

          <Route path= "*" >
            <PageNotFound />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;