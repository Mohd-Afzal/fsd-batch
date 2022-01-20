import Button from "./components/Button";
import PersonDetail from "./components/PersonDetail";
import './App.css';
import { useState, useEffect } from 'react';
import useFetch from "./useFetch";

const containerLayout = {
  display: "flex",
  flexDirection: "column"
}

function App() {
  const [showData, setShowData] = useState(false);
  const [buttonText, setButtonText] = useState("Show Data");

  const {data: persons, triggerFetch} = useFetch('http://localhost:8000/persons');

  // const fetchData = () => {
  //   console.log("Use Effect Hook's callback has been invoked!");
  //   // Fetch the data from a server - JSON Server
  //   // returns a promise
  //   setTimeout(() => {
  //     const resource = "persons";
  //     fetch(`http://localhost:8000/${resource}`)
  //     .then((response) => {
  //       console.log("Fist Promise: ", response);
  //       if(!response.ok) {
  //         throw Error(`Unable to reach the mentioned resource -${resource}`);
  //       }
  //       return response.json();
  //     })
  //     .then((response) => {
  //       console.log("Second Promise", response);
  //       setPersons(response);
  //       setTriggerFetch(true);
  //       // setShowData(true);
  //     }).catch((error) => {
  //       console.log(error.message);
  //     });
  //   }, 4000);
  // }

  // useEffect(() => {
  //   if (showData) { 
  //     console.log("Use Effect Triggered on Button Click");
  //     fetchData();
  //   } else {
  //     console.log("UseEffect Called for the first time when Application reloaded!");
  //   }
  // }, [showData]);

  function togglePersons() {
    if (showData) {
      setShowData(false);
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
      <h1 id = "heading"> Task Tracker Application </h1> 
      <div style={containerLayout}> 
        <Button click = {togglePersons} text = {buttonText}/>
        {!triggerFetch && <h1> Loading Persons Data .... </h1>}
        {renderPerson}
      </div>
    </div>
  );
}

export default App;